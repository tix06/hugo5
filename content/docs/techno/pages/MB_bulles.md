---
Title : niveau a bulles
bookShowToc: false
---

# Niveau à bulles
*But: Programmer une série d'instructions conditionnelles et une fonction en Python.*

{{< img src="../images/bulles.png" >}}

## Editeur
Choisir l'editeur **MU** en mode *BBC microbit*

## Afficher la direction d'inclinaison
Le script devra démarrer par les lignes suivantes:

```python
from microbit import *

while True:
    incli_X = accelerometer.get_x()
    incli_Y = accelerometer.get_y()
```

Le programme permet de stocker dans les variables `incli_X` et `incli_Y` les valeurs mesurées par l'accéleromètre.

Vous pouvez charger ce programme dans la carte microbit. Puis ouvrir la console de l'editeur MU (**REPL**), et afficher les valeurs de ces variables: (ces valeurs dependent de l'inclinaison initiale de la carte microbit)

```
>>> incli_X
228
>>> incli_Y
-15
```

Refermez alors la console et revenir sur l'editeur de script...

Compléter le script avec les tests qui permettront d'afficher "D", "G", "H", "B" ou "-" selon si l'inclinaison est vers la **D**roite, **G**auche, **H**aut, **B**as, ou **-** neutre.

On pourra se conformer au diagramme ci-dessous:

{{< img src="../images/diag_incli.png" caption="diagramme de décision if ... elif ... else" >}}

**Flasher**. La lettre qui est affichée depend alors de l'inclinaison!

## Afficher une bulle
L'inclinaison va maintenant mettre en mouvement une bulle à l'écran. (Un pixel de coordonnées x, y).

On définit les variables `x, y = 2, 2` avant la boucle principale `while True`.

### Boucle principale
On remplacera ensuite chacune des instructions d'affichage `display.show()` par la mise à jour d'une variable `direction`:

```python
display.show("D")
# sera remplace par
direction = "D"
```

à la fin de la boucle, on ajoutera les lignes qui vont:

* appeler la fonction `deplace` avec les arguments: `direction, x, y`. Affecter à `x, y` les valeurs de retour.
* Effacer l'écran
* Afficher le pixel à la position x, y

```python
    x, y = deplace(direction, x, y)
    sleep(100) # optionnel
    display.clear()
    display.set_pixel(x,y,9)
```


### Programmer une fonction avec paramètres
La fonction sert à modifier les valeurs des paramètres `pos_X` et `pos_Y` selon celle de `direction`.

* `direction` est une variable de type `str` et vaut "D", "G", "H", "B" ou "-".
* `pos_X` et `pos_Y` sont de type `int`.
* Les valeurs de retour sont `pos_X` et `pos_Y`.

```python
def deplace(direction, pos_X, pos_Y):
	# a completer
	return pos_X, pos_Y
```

Il faudra donc programmer une série de conditions sur `direction` pour modifier les valeurs de position (augmenter ou diminuer d'une unité `pos_X` ou `pos_Y`).

**Problème de depassement**: Les valeurs admises pour `pos_X` et `pos_Y` doivent être comprises en 0 et 4, sinon cela génère un `Value Error` lorsque l'on veut afficher le pixel à l'ecran avec `display.set_pixel(x,y,9)`.

Votre fonction doit aussi prendre en compte cette possibilité et ne pas retourner de valeur `<0` ou `>4`.

{{< img src="../images/pix_a_droite.png" caption="pencher la carte microbit vers la droite" >}}

**Flasher** et testez votre programme. *Parviendrez-vous à maintenir le pixel au centre pendant quelques secondes*?

## Prolongements
On peut augmenter la complexité du programme en affichant un serpent à l'écran comme dans le jeu *snake*. Les coordonnées des pixels du serpent sont alors stockées dans une Liste `[(x1,y1),(x2,y2),...]` pour permettre leur affichage:

```python
for coord in serpent:
	display.set_pixel(coord[0],coord[1],9)
```

{{< img src="../images/snake.GIF" caption="" >}}

A chaque déplacement, cela ajoute un pixel à la fin du serpent, et retire le premier pixel si l'on veut que sa longueur reste constante.

{{< img src="../images/depl_snake.png" caption="deplacement du serpent vers le bas" >}}

On pourra aussi programmer des fonctions selon l'appui sur l'un des boutons **a** ou **b** de la carte microbit.





