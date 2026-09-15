import pytubefix
import ffmpeg
import openai

import sys

client = openai.OpenAI()

url = sys.argv[1]
filename = "audio.wav"
yt = pytubefix.YouTube(url)
stream = yt.streams(0).url
ffmpeg.input(stream).output(
    filename,
    format="wav",
    loglevel="error",
).run()


with open(filename, "rb") as audio_file:
    transcript = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
    ).text

#pede pro chatgpt resumir o texto e revisar a transcript
completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "system",
            "content": (
                "Você é um assistente que resume um texto, corrige erros de "
                "transcrição e remove palavras desnecessárias, mantendo o "
                "sentido do texto. Responda com formatação de Markdown, sem "
                "aspas, sem explicações e sem comentários."
            ),
        },
        {"role": "user", "content": transcript},
    ],
)

print(completion.choices[0].message.content)
