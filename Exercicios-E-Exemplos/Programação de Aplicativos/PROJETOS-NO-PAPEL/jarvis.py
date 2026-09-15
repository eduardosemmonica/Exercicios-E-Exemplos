/*************  ✨ Windsurf Command ⭐  *************/
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


/*******  6a0cb185-b1ad-476f-90e2-503e0e1fbf93  *******/