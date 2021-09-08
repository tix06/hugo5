---
Title: mesure de c du son
---

# TP : Mesure d'une durée de propagation d'ultra-sons


## Script 

```python
from microbit import *
from machine import time_pulse_us
import time, music, math

analogiq_in = [pin1]


def mesure_temps_A_R(broche = pin1):
    """Module Grove - Ultrasonic Ranger
    Retourne la durée d'un aller/retour des ultra_sons en microsecondes
    Paramètre : Nom de la broche utilisée
    """
    broche.write_digital(0)
    time.sleep_ms(2)
    broche.write_digital(1)
    time.sleep_ms(10)
    broche.write_digital(0)
    broche.read_digital()
    dt = time_pulse_us(broche, 1)
    return dt

while True:
  if button_a.is_pressed():
    dt = mesure_temps_A_R()
    display.scroll(dt)
``` 

## Principe
Brancher l'emetteur-capteur à ultra-son sur la carte micro:bit. Choisir le port groove appelé PIN1 sur la carte.

Diriger l'emetteur-capteur à ultra-sons vers un support rigide, afin que les ondes ultrasonores se reflechissent et reviennent vers le recepteur.

<figure>
  <img scr="../images/mu_us2.png">
</figure>

## Mesures
Une fois le script téléversé : 

Lorsque l'on appuie sur le bouton A, la fonction mesure_temps_A_R permet de communiquer avec l'emetteur-capteur à ultra-son. L'affichage de la durée de propagation pour un aller-retour s'affiche sur l'écran LED du microcontrôleur, chiffre après chiffre (`scroll`). La durée est en &micro;s.

<em>Exemple d'affichage d'une durée dt = 833&micro;s:</em>
En positionnant l'emetteur-capteur à environ 15 cm d'un support reflechissant, on lit : 

<img src="../images/mu_833.png">

En supposant que la célérité du son vaut 340m/s au moment de l'experience, cela donne une distance parcourue de $340 \times 833.10^{-6} = 0,28m$, double de la distance au support.

Cela semble cohérent. Mais il faudra discuter de la précision attendue sur les 2 derniers digits mesurés par le dispositif...

## Prolongement

* Modifier le script pour que la boucle `while` n'execute s'une seule instruction : `dt = mesure_temps_A_R()`.
* Diriger alors les ondes emises par le circuit microbit vers un autre recepteur à US, lui même relié à un oscilloscope.
* Analyser le signal, et interpréter alors les instructions dans la fonction `mesure_temps_A_R`:


```python
    broche.write_digital(0)
    time.sleep_ms(2)
    broche.write_digital(1)
    time.sleep_ms(10)
``` 

# Liens
Ce mini TP peut faire partie d'une séance plus soutenue, avec le scénario proposé par la DANE de Normandie : 

* [voir ici (radar de recul)](https://numerique-sciences-informatiques.discip.ac-caen.fr/IMG/pdf/radar-de-recul.pdf)
* page principale avec telechargement de [micro_grove.py](https://numerique-sciences-informatiques.discip.ac-caen.fr/kit-grove-pour-micro-bit-et-applications-en-snt)
