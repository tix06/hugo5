---
Title : informatique des objets
---

# informatique des objets

# TP : Prise en main de la carte micro:bit
## présentation


## Utiliser l'editeur en ligne python.microbit.org
Aller sur l'editeur à l'adresse suivante : [https://python.microbit.org/v/2.0](https://python.microbit.org/v/2.0)

<figure>
  <img src="../images/editoronline.png">
</figure>

1. Saisir le script dans la fenêtre d'edition.
2. Lui donner un nom (champ en haut à droite : *script name*).
3. Charger le programme sur le disque dur de l'ordinateur : *Download* (l'extension est .hex)
4. Deplacer le programme sur la carte microbit à l'aide de l'explorateur de fichiers.

## Utiliser l'editeur Mu
<figure>
  <img src="../images/helloworld.png">
</figure>

* Bouton **Mode** : <img src="../images/mu_mode.png" width="50px"> choisir l'editeur BBC microbit <img src="../images/mu_microbit.png" width="200px">
* Saisir le script dans la fenêtre de script.
* Faites une copie de votre script : <img src="../images/mu_save.png" width="50px">
* Une fois le microcontrôleur relié à l'ordinateur par le cable USB : bouton **Flasher** pour transferer le script. <img src="../images/mu_flash.png" width="50px">

L'editeur aide à la saisie grâce à l'autocompletion. Selectionner le mot en python et valider avec la touche *Enter* du clavier.

<figure>
  <img src="../images/autocompletion1.png">
</figure>

<figure>
  <img src="../images/autocompletion2.png">
</figure>

Lorsque l'on tape le nom d'une fonction qui est documentée, l'aide apparait à l'écran. C'est très utile pour savoir si la fonction prend des paramètres : 

<figure>
  <img src="../images/documentation.png">
</figure>

## gestion des erreurs de syntaxe
Une fois le programme chargé, il peut y avoir une erreur de syntaxe qui empêche son fonctionnement. Le message s'affiche sur l'écran de la carte microbit. Mais il peut être plus facile de lire ce message sur l'écran de l'ordinateur. Le bouton **REPL** fournit une console python avec affichage des messages à l'execution.

<figure>
  <img src="../images/repl.png">
</figure>

## Un premier programme `Hello World`
**Entrées/Sorties :**

La carte dispose d'un petit écran de LED qui peut servir de sortie et d'affichage. Elle est équipée de 2 boutons A et B pour intéragir.
Pour que le programme détecte l'appui sur les boutons, il faut surveiller l'état des boutons en permanence, avec une boucle non bornée `while True:`

On demarrera toujours le script avec l'import des librairies spécifiques à la carte micro:bit : `from microbit import *`, qui s'ajouteront aux librairies standart Python : 

```python
from microbit import *
# On cree une boucle infinie 
while True:
  if button_a.is_pressed(): 
    display.show(Image.HAPPY)
  else: 
    display.show(Image.SAD)
```

Ici, le programme affiche l'un ou l'autre des smileys, selon si le bouton A est pressé ou relâché.

<figure>
<img src="../images/mu_happy.png">
<figcaption>smiley HAPPY</figcaption>
</figure>

Si l'on veut afficher un texte, il sera préférable d'utiliser la fonction `scroll` à la place de `show`, afin de faire défiler les caractères sur l'écran de LED. 

*Exemple avec un texte :* ```display.scroll("Hello World")``` 

*Exemple avec la valeur d'une variable dt :* ```display.scroll(str(dt))``` 

# TP : Mesure d'une durée de propagation d'ultra-sons
Ce mini TP peut faire partie d'une séance plus soutenue, avec le scénario proposé par la DANE de Normandie : 

* [voir ici (radar de recul)](https://numerique-sciences-informatiques.discip.ac-caen.fr/IMG/pdf/radar-de-recul.pdf)
* page principale avec telechargement de [micro_grove.py](https://numerique-sciences-informatiques.discip.ac-caen.fr/kit-grove-pour-micro-bit-et-applications-en-snt)

## Script 
A l'aide de l'un des editeurs proposés plus haut, saisir le script suivant : 

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
    display.show(dt)
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


# Liens
* Documentation micro:bit [microbit-micropython.readthedocs](https://microbit-micropython.readthedocs.io/en/v1.0.1/)
* Prise en main de la micro:bit avec des exemples [DANE Normandie ac-Caen](https://numerique-sciences-informatiques.discip.ac-caen.fr/IMG/pdf/initiation-mu-microbit.pdf)
* Une premiere approche de la communication entre microbits : [l'exemple de la luciole](https://microbit-micropython.readthedocs.io/en/v1.0.1/tutorials/radio.html)
* TP Reseaux : comment faire communiquer [deux cartes microbit par ondes radio](https://www.lossendiere.com/2017/12/10/faire-communiquer-2-microbit-par-onde-radio/)