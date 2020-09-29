---
Title : MB LED clignotante
---

# LED clignotante

## Principe
On utilise le connecteur grove du microbit pour commander une sortie en tension. On pourra allumer, et faire clignoter une LED, branchée en série avec sa resistance de protection.

Il faudra utiliser les connecteurs avec fils de couleur sur prise grove:



* Jaune: pour la mesure de tension avec l'instruction 
* Noir: GND
* Rouge et Blanc: non utilisés

<figure>
  <div>
<img src="../images/MB_led.JPG">
<figcaption>circuit avec LED et Resistance</figcaption>
</div>
</figure>



## Matériel

* carte micro:bit et shield grove
* fil de connexion grove-connecteurs couleur (rouge noir blanc jaune)
* pince crocodile
* Diode electroluminescente LED
* resistance de 1k&#8486;
* multimètre


## Script

```python
from microbit import *

while True:
    pin0.write_digital(1) # sortie 3V
    sleep(1000)
    pin0.write_digital(0)
    sleep(1000)
```
