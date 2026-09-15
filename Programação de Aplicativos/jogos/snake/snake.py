import turtle
import time
import random

# ==========================================
# CONFIGURAÇÃO DA TELA
# ==========================================

LARGURA = 600
ALTURA = 600

tela = turtle.Screen()
tela.title("🐍 Snake Game")
tela.bgcolor("#0d1117")  # fundo escuro estilo "dev"
tela.setup(width=LARGURA, height=ALTURA)
tela.tracer(0)


# ==========================================
# BORDA DA ARENA
# ==========================================

borda = turtle.Turtle()
borda.speed(0)
borda.color("#58a6ff")
borda.pensize(3)
borda.penup()
borda.goto(-300, 300)
borda.pendown()
for _ in range(4):
    borda.forward(600)
    borda.right(90)
borda.hideturtle()


# ==========================================
# CABEÇA DA COBRA
# ==========================================

cobra = turtle.Turtle()
cobra.speed(0)
cobra.shape("square")
cobra.color("#39d353")  # verde vivo estilo "github contribution"
cobra.penup()
cobra.goto(0, 0)
cobra.direction = "stop"


# ==========================================
# COMIDA
# ==========================================

comida = turtle.Turtle()
comida.speed(0)
comida.shape("circle")
comida.color("#f78166")  # laranja/vermelho suave
comida.penup()
comida.goto(0, 100)


# ==========================================
# CORPO DA COBRA (cores em gradiente de verde)
# ==========================================

corpo = []

CORES_CORPO = ["#2ea043", "#238636", "#196c2e", "#0f5323"]


# ==========================================
# PONTUAÇÃO
# ==========================================

pontuacao = 0
recorde = 0

texto = turtle.Turtle()
texto.speed(0)
texto.color("#c9d1d9")
texto.penup()
texto.hideturtle()
texto.goto(0, 260)


def atualizar_placar():
    texto.clear()
    texto.write(
        "🏆 Pontuação: {}      ⭐ Recorde: {}".format(pontuacao, recorde),
        align="center",
        font=("Consolas", 16, "bold")
    )


atualizar_placar()


# ==========================================
# MENSAGEM DE GAME OVER
# ==========================================

mensagem = turtle.Turtle()
mensagem.speed(0)
mensagem.color("#f85149")
mensagem.penup()
mensagem.hideturtle()
mensagem.goto(0, 0)


def mostrar_game_over():
    mensagem.clear()
    mensagem.write(
        "💥 GAME OVER 💥",
        align="center",
        font=("Consolas", 24, "bold")
    )
    tela.update()
    time.sleep(1)
    mensagem.clear()


# ==========================================
# FUNÇÕES DE MOVIMENTO
# ==========================================

def cima():
    if cobra.direction != "baixo":
        cobra.direction = "cima"


def baixo():
    if cobra.direction != "cima":
        cobra.direction = "baixo"


def esquerda():
    if cobra.direction != "direita":
        cobra.direction = "esquerda"


def direita():
    if cobra.direction != "esquerda":
        cobra.direction = "direita"


def mover():

    if cobra.direction == "cima":
        y = cobra.ycor()
        cobra.sety(y + 20)

    if cobra.direction == "baixo":
        y = cobra.ycor()
        cobra.sety(y - 20)

    if cobra.direction == "esquerda":
        x = cobra.xcor()
        cobra.setx(x - 20)

    if cobra.direction == "direita":
        x = cobra.xcor()
        cobra.setx(x + 20)


def reiniciar():
    global pontuacao

    mostrar_game_over()

    cobra.goto(0, 0)
    cobra.direction = "stop"

    for parte in corpo:
        parte.goto(1000, 1000)

    corpo.clear()

    pontuacao = 0
    atualizar_placar()


# ==========================================
# CONTROLES DO TECLADO
# ==========================================

tela.listen()

tela.onkeypress(cima, "Up")
tela.onkeypress(baixo, "Down")
tela.onkeypress(esquerda, "Left")
tela.onkeypress(direita, "Right")

# Também permite usar WASD

tela.onkeypress(cima, "w")
tela.onkeypress(baixo, "s")
tela.onkeypress(esquerda, "a")
tela.onkeypress(direita, "d")


# ==========================================
# LOOP PRINCIPAL DO JOGO
# ==========================================

while True:

    tela.update()

    # --------------------------------------
    # COLISÃO COM A BORDA
    # --------------------------------------

    if (
        cobra.xcor() > 290
        or cobra.xcor() < -290
        or cobra.ycor() > 290
        or cobra.ycor() < -290
    ):
        reiniciar()

    # --------------------------------------
    # COBRA COMEU A COMIDA
    # --------------------------------------

    if cobra.distance(comida) < 20:

        # Nova posição da comida
        x = random.randint(-14, 14) * 20
        y = random.randint(-14, 14) * 20

        comida.goto(x, y)

        # Cria uma nova parte do corpo, com cor em degradê
        nova_parte = turtle.Turtle()
        nova_parte.speed(0)
        nova_parte.shape("square")
        nova_parte.color(CORES_CORPO[len(corpo) % len(CORES_CORPO)])
        nova_parte.penup()

        corpo.append(nova_parte)

        # Atualiza pontuação
        pontuacao += 10

        if pontuacao > recorde:
            recorde = pontuacao

        atualizar_placar()

    # --------------------------------------
    # MOVIMENTO DO CORPO
    # --------------------------------------

    for indice in range(len(corpo) - 1, 0, -1):

        x = corpo[indice - 1].xcor()
        y = corpo[indice - 1].ycor()

        corpo[indice].goto(x, y)

    # Primeiro pedaço segue a cabeça
    if len(corpo) > 0:

        x = cobra.xcor()
        y = cobra.ycor()

        corpo[0].goto(x, y)

    # --------------------------------------
    # MOVIMENTO DA CABEÇA
    # --------------------------------------

    mover()

    # --------------------------------------
    # COLISÃO COM O PRÓPRIO CORPO
    # --------------------------------------

    for parte in corpo:

        if parte.distance(cobra) < 20:
            reiniciar()

    # --------------------------------------
    # VELOCIDADE DO JOGO
    # --------------------------------------

    time.sleep(0.1)