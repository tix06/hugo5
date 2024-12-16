# Programme communication avec auteur authentifié POO
from microbit import *
import radio
import utime

# modifier ch, gpe et numero selon le micro-reseau que vous partagez

class Communication_radio:
  def __init__(self, ch=7,gpe=0,messages=['lundi','LIKE','UNLIKE'],numero=99):
    self.channel = ch
    self.group = gpe
    self.messages = messages
    self.i = 0
    self.img = [Image.DIAMOND,Image.DIAMOND_SMALL]
    self.numero = numero

  def message_suivant(self):
    display.clear()
    l = len(self.messages)
    self.i = (self.i + 1) % l
    display.set_pixel(self.i,0,9)
    utime.sleep(0.2)

  def select_message(self):
    return self.messages[self.i]

  def img_send(self):
    display.show(self.img,delay=100)
    utime.sleep(0.015)
    display.clear()

com = Communication_radio(7,0,['lundi','LIKE','UNLIKE'])
radio.on()
radio.config(channel = com.channel, power = 6, length = 32, group=com.group)

while True:
  if button_a.is_pressed():
    com.message_suivant()
  if button_b.is_pressed():
    radio.send(com.select_message())
    com.img_send() # affiche l'animation lors de l'envoi du message

  stringData = radio.receive()
  if stringData:
    texte = stringData
    if texte == 'LIKE':
      display.show(Image.HAPPY)
      utime.sleep(0.2)
      display.clear()
    elif texte == 'UNLIKE':
      display.show(Image.SAD)
      utime.sleep(0.2)
      display.clear()
    else:
      display.scroll(texte)