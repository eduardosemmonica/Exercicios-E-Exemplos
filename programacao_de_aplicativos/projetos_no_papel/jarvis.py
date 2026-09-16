# rascunho de assistente de voz (reconhecimento de fala + resposta falada)
import speech_recognition as sr
import pyttsx3

engine = pyttsx3.init()

def take_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print('Listening...')
        audio = r.listen(source)

    try:
        command = r.recognize_google(audio)
        print('You said: ' + command)

        if 'Jarvis' in command:
            engine.say('At your service!')
            engine.runAndWait()

    except sr.UnknownValueError:
        print('Nao entendi o audio.')
    except sr.RequestError as e:
        print('Erro no servico de reconhecimento: ' + str(e))


if __name__ == '__main__':
    take_command()