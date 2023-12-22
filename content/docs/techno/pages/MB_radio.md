---
Title: MB radio
---

# Radio


```python
from microbit import *
import radio

radio.on()

print('Bonjour !' + "")
radio.config(channel = 7, power = 6, length = 32, group=0)

while True:
  if button_a.is_pressed():
    radio.send('1')
  stringData = radio.receive()
  if stringData:
    display.show(stringData)
```

# Liens
* Introduction au module radio (TP Lucioles): [microbit-micropython.readthedocs.io](https://microbit-micropython.readthedocs.io/fr/latest/tutorials/radio.html)
* TP message secret: [microbit.org](https://microbit.org/fr/projects/make-it-code-it/tell-me-a-secret/)