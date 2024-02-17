---
Title: Robotique
---


# Robot marqueen
## Prise en main du robot
Documentation sur le site de l'[ac-normandie.fr](https://nsi-snt.ac-normandie.fr/IMG/pdf/le_robot_maqueen.pdf)

## Défi n°1: Suivre une ligne
Le robot dispose de 2 capteurs d'intensité lumineuse, sous le chassis. Une différence de clarté sous le robot (bord du chmin) permet de programmer un virage du robot.

{{< img src="../images/marq1.png" caption="blanc/noir => virage a droite" >}}



Les différentes fonctions d'actions des moteurs sont (*paramètres ajustables*):

* [Marqueen] Contrôler le robot *avancer* vitesse *255*

{{< img src="../images/marq11.png" >}}

* [Marqueen] Arrêter le robot

{{< img src="../images/marq2.png" >}}

* [Marqueen] Contrôler le moteur *droit* direction *...* vitesse *125*

{{< img src="../images/marq3.png" >}}

* [Marqueen] Pivoter à *droite*

{{< img src="../images/marq4.png" >}}

* [Marqueen] Avancer d'une case

{{< img src="../images/marq5.png" >}}

La mesure de l'état du capteur de ligne se fait grâce à la fonction:

* [Marqueen] Etat du capteur ligne *droit*

{{< img src="../images/marq8.png" >}}

Cette instruction renvoie un booléen (`True`, `False`), et doit donc être utilisée pour être affectée à une variable: 

{{< img src="../images/marq7.png" >}}

On place alors ces variables dans une structure conditionnelle:

{{< img src="../images/marq6.png" caption="Si le capteur D vaut False et le capteur G vaut False: avancer" >}}

### Exemple de programmes sur Vittasciences.com
* Partie 1: [Présentation générale](https://fr.vittascience.com/learn/tutorial.php?id=40/maqueen-part-1-un-robot-motorise-avec-micro-bit)
* Partie 2: [Eviter les obstacles](https://fr.vittascience.com/learn/tutorial.php?id=41/maqueen-part-2-eviter-des-obstacles-avec-micro-bit)
* Partie 3: [detection de la ligne noire](https://fr.vittascience.com/learn/tutorial.php?id=42/maqueen-part-3-suiveur-de-ligne-avec-micro-bit)

### Supports de tracés pour le robot
* Documents pdf pour le robot suiveur de ligne: [Lien vers pdf](/pdf/techno/suiveur_ligne.pdf)
* Exemple de courbe à imprimer en format [pdf](../images/courbe.pdf)
* Exemple de courbe en format photoshop [eps](../images/courbe.eps)

### Avancer d'une case
Pour programmer les deplacements du robot indépendemment du marquage au sol, il sera necessaire de calibrer la longueur de ses deplacements.

{{< img src="../images/quadrillage.png" >}}

Le [programme suivant](/scripts/robot/robot_marqueen_5.py) montre un exemple de fonction utile pour *avancer d'une case*.

Les paramètres doivent être ajustés dans le script python (blocs inopérants pour ajustements).

De la même manière, il sera utile de calibrer l'angle de rotation lors de la commande de pivot à droite ou à gauche.

### Enregister des données
L'enregistrement de données peut être utile pour calibrer les capteurs du robot.

{{< img src="../images/marq_us.png" >}}

Le programme suivant peut être chargé dans l'interface [Vittascience.com](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience). Télécharger le [fichier](/scripts/robot/robot_marquenn_us__202419_12120.py). Puis l'ouvrir  depuis l'interface.

* La fonction `getUltrasonicData` permet de mesurer une distance/un temps selon le paramètre `data`.
* Pour écrire des données sur la carte, ce sont les fonctions:
	* `log.set_labels`: definition des colonnes du tableau de mesure
	* `log.add` pour ajouter une entrée dans le tableau

On utilisera alors l'explorateur (windows) pour ouvrir et visualiser les données, dans un fichier d'extension `.html`

{{< img src="../images/data.png" >}}

```python
from microbit import *
import log
import utime
from machine import time_pulse_us

""" Maqueen robot """

# Ultrasonic TRIG on pin1
# Ultrasonic ECHO on pin2

def getUltrasonicData(trig, echo, data='distance', timeout_us=30000):
  trig.write_digital(0)
  utime.sleep_us(2)
  trig.write_digital(1)
  utime.sleep_us(10)
  trig.write_digital(0)
  echo.read_digital()
  duration = time_pulse_us(echo, 1, timeout_us)/1e6 # t_echo in seconds
  if duration > 0:
    if data == 'distance':
      #sound speed, round-trip/2, get in cm
      return 343 * duration/2 * 100
    elif data == 'duration':
      return duration
    else:
      raise ValueError("Data option '" + data + "' is not valid")
  else:
    return -1

log.set_labels('distance', timestamp=log.MILLISECONDS)
log.set_labels('temps', timestamp=log.MILLISECONDS)
i = 0

while True:
  if button_a.is_pressed():
    log.delete(full=True)
    i = 0
  utime.sleep(1)
  d = getUltrasonicData(pin1, pin2, 'distance')
  if d > 0:
    log.add(distance = d,temps = i)
    i = i + 1
  display.scroll(str(d), delay=150, wait=True)
```

Le format des données dans le fichier de *log* permet un traitement comme on le ferait pour un ficher *txt* ou *csv*.

## Suggestion de projets
* Conduite autonome
* Course déclenchée par un *clap*
* Evolution dans un labyrinthe
* Programme d'exploration type robot aspirateur
* Detection de formes (la forme de l'arêne dans laquelle est le robot)

Avec quelques extensions, les actions du robot peuvent être complexifiées (detection de couleur, ramassage d'objets, ...).


# Liens 
* Editeur [Vittascience.com](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience)
* Detecteur d'obstacles [TP niveau entrée en 1ere NSI](http://michel.roemhild.free.fr/?Robot-Maqueen-detecteur-d-obstacle)
* Explorer, enregistrer des données sur la carte microbit: [Lien](https://microbit.org/fr/projects/make-it-code-it/environment-data-logger/)
* Course, tour de piste [site ac-nantes.fr](https://www.pedagogie.ac-nantes.fr/medias/fichier/challenge-robotmaqueen_1656062635314-pdf?ID_FICHE=1424110252680&INLINE=FALSE)
* Documentation [site ac-normandie.fr](https://nsi-snt.ac-normandie.fr/IMG/pdf/le_robot_maqueen.pdf)




