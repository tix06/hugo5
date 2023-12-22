---
Title: MB radio
---

# Radio

{{< img src="../images/radio1.png" >}}

{{< img src="../images/radio2.png" >}}

{{< img src="../images/radio3.png" >}}

{{< img src="../images/radio4.png" >}}

{{< img src="../images/radio5.png" >}}

{{< img src="../images/radio6.png" >}}

{{< img src="../images/radio7.png" >}}

{{< img src="../images/radio8.png" >}}

{{< img src="../images/radio9.png" >}}

{{< img src="../images/radio10.png" >}}

```python
from microbit import *
import radio
import utime

radio.on()

print('Bonjour !' + "")

while True:
  if button_a.is_pressed():
    radio.send('1')
  if button_b.is_pressed():
    radio.send('2')
  stringData = radio.receive()
  if stringData:
    if stringData == '1':
      display.show(Image.HAPPY)
      utime.sleep(0.5)
      display.clear()
    elif stringData == '2':
      display.show(Image.SAD)
      utime.sleep(0.5)
      display.clear()

```


# Liens
* Introduction au module radio (TP Lucioles): [microbit-micropython.readthedocs.io](https://microbit-micropython.readthedocs.io/fr/latest/tutorials/radio.html)
* TP message secret: [microbit.org](https://microbit.org/fr/projects/make-it-code-it/tell-me-a-secret/)
* specifications du contrôleur radio [lancaster-university](https://lancaster-university.github.io/microbit-docs/ubit/radio/)