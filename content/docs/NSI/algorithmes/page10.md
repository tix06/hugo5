# Demarrer avec le module turtle sur Trinket
Ce module permet de réaliser facilement des dessins de figures géometriques animées.

## Editeur en ligne
Ouvrir une page de votre navigateur avec Trinket + Python : [https://trinket.io/python](https://trinket.io/python)

Commencer avec le programme minimal suivant : 

```python
import turtle
tt = turtle.Turtle()
print(tt.window_width())
print(tt.window_height())
tt.up()
tt.goto(-100,100)
tt.down()
```

> Maintenant que vous connaissez ses dimensions (width et height sont affichés dans la console), écrire une fonction qui dessine une bordure autour de l'écran graphique. Dessiner ce contour.

On pourra utiliser les coordonnées absolues, à l'aide de l'instruction `goto`.

> Puis positionnez la tortue à une position aleatoire, à l'interieur de ce cadre.

Utiliser `from random import randint` 

Lorsque la fonction `randint` prend 2 arguments : il s'agit de la borne inferieure et de la borne superieur du tirage aleatoire : `randint(inferieur,superieur)`.

*Exemple:* `randint(-100,100)` retourne un entier entre -100 et 100.

## Explorer les fonctions
On pourra parcourir les documents suivants:

* [fiche synthèse](https://perso.limsi.fr/pointal/_media/python:turtle:turtleref.pdf)
* [wiki avec quelques exemples](https://wiki.mchobby.be/index.php?title=Python-Turtle-Exemple2)


# Etoiles à 5 branches

```python
def etoile(longueur):
    """Fonction pour dessiner une étoile
    Params:
    ---------
    tt : object, le sprite turtle
    longueur : int, longueur de chacune des branches"""
    
    tt.setheading(180-2*72)
    for i in range(5):
        tt.forward(longueur)
        tt.left(180-180/5)
 ```
 
 > Executer la fonction avec une valeur aleatoire pour le paramètre `longueur`.
 
 <br>

 > Sur votre **cahier de labo**: représenter la fenêtre de dessin, son contour, la position (0, 0) de *turtle*, ainsi que les dimensions *width* et *hight* de cette fenêtre.

 <br>
 
 > Dans l'**editeur Trinket**: Ecrire une fonction qui représente un ciel étoilé, contenant N étoiles mises dans une position aléatoire, et de longueurs aleatoires.
 
 <br>
 
 > Sur votre **cahier de labo**: Calculer le nombre d'opérations réalisées par la fonction, puis estimez la complexité de cette fonction, en considérant comme instructions significatives : 
 	
 	 * chaque appel de la fonction `randint`
 	 * chaque opération arithmetique
 	 * chaque deplacement ou rotation réalisé par la tortue

# Créer un module
Sur le bandeau de l'editeur, à droite, appuyer sur (+).
Cela fait apparaitre un nouvel onglet. C'est un nouveau fichier qui s'ajoute à votre projet.

> Dans l'**editeur Trinket**: Renommer ce fichier. Par exemple, avec *figures.py*. Vous deplacerez les fonctions crées precedemment dans ce fichier, ainsi que les premières lignes:

```python
import turtle
from random import *
tt = turtle.Turtle()
```

<br>

> Dans le fichier principal, vous devrez maintenant importer ce *module*. Partagez ainsi votre code entre ces 2 fichiers, afin de rendre celui-ci plus lisible. Les appels de fonctions se feront dans le fichier principal, *main.py*.

# Les dessins récursifs
> Créer un nouveau fichier dans le même projet, que vous appelerez *recursif.py*

## Des carrés
On veut réaliser le dessin récursif dont on a mis ci-dessous les premières étapes (profondeur 0,1 et 2):

{{< img src="../images/recur_carre.png" >}}



> Sur votre **cahier de labo**: 

> * Compléter l'arbre des appels de la fonction recursive avec les traits du dessin de la figure.
{{< img src="../images/recur_directions.png" >}}* Représenter la figure dessinée avec une profondeur de 2. Numéroter les 3 premiers segments dessinés par le programme.

> Dans l'**editeur Trinket**: Completer la partie heredite du script suivant pour la fonction `recur_carre`. 

```python
def recur_carre(divis):
  # Base de la fonction recursive
  if divis >= 4:
    return
  # l'instruction return ne retourne rien 
  # mais termine la fonction
  # 
  # --- partie heredite ---
  # 
```

*Dans la partie heredité: la fonction s'appelle elle-même avec un paramètre PLUS GRAND pour divis. Ce paramètre représente le diviseur de la longueur du côté du carré dessiné*

> Appeler la fonction avec l'instruction: `recur_carre(1)`

<br>

> Sur votre **cahier de labo**: Calculer le nombre d'opérations réalisées par la fonction, puis estimez la complexité de cette fonction, en considérant comme instructions significatives : 
    
     * chaque deplacement ou rotation réalisé par la tortue

## Des triangles
Adapter ensuite cette fonction pour dessiner la figure:

{{< img src="../images/recur_triangle1.png" >}}
## Chalenge avec d'autres triangles

{{< img src="../images/recur_triangle2.png" >}}

# Extension du TP: projet pour Term NSI
Dessiner des fractales à l'aide de la récursivité.

# Liens
* Les dessins recursifs sont issus de la page [fourier.ujf-grenoble.fr](https://www-fourier.ujf-grenoble.fr/~parisse/giac/doc/fr/casrouge/casrouge019.html)
* La recursivité en term NSI [eduscol, quelques applications](https://eduscol.education.fr/document/10103/download)
* dynamique holomorphe, ensemble de Julia, Mandelbrot, Fractales: [wikipedia](https://fr.wikipedia.org/wiki/Ensemble_de_Mandelbrot)
* Mandelbrot par la pratique: [page de villemin.gerard](http://villemin.gerard.free.fr/Wwwgvmm/Suite/FracPrat.htm)
* Une discussion sur le theme des fractales, autosimilarités exacte et statistique, applications [blog futura-sciences](https://forums.futura-sciences.com/physique/154964-fractal-autosimilarite.html)



