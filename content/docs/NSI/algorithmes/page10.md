# Demarrer avec le module turtle
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

> Maintenant que vous connaissez ses dimensions (width et height sont affichés dans la console), dessinez une bordure autour de l'écran.

On pourra utiliser les coordonnées absolues, à l'aide de l'instruction `goto`.

> Puis positionnez la tortue à une position aleatoire, à l'interieur de ce cadre.

Utiliser `from random import randint` 

La fonction `randint` prend 2 arguments : la borne inferieure et la borne superieur du tirage aleatoire.

## Explorer les fonctions
On pourra parcourir les documents suivants:

* [fiche synthèse](https://perso.limsi.fr/pointal/_media/python:turtle:turtleref.pdf)
* [wiki avec quelques exemples](https://wiki.mchobby.be/index.php?title=Python-Turtle-Exemple2)


# Etoiles à 5 branches

```python
def etoile(tt,longueur):
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
 
 > Ecrire une fonction qui représente un ciel étoilé, contenant N étoiles mises dans une position aléatoire, et de longueurs aleatoires.
 
 <br>
 
 > Calculer le nombre d'opérations réalisées par la fonction, puis estimez la complexité de cette fonction, en considérant comme instructions significatives : 
 	
 	 * chaque appel de la fonction `randint`
 	 * chaque opération arithmetique
 	 * chaque deplacement réalisé par la tortue

# Créer un module
Sur le bandeau de l'editeur, à droite, appuyer sur (+).
Cela fait apparaitre un nouvel onglet. C'est un nouveau fichier qui s'ajoute à votre projet.

> Renommer ce fichier. Par exemple, avec `figures.py`. Vous deplacerez les fonctions crées precedemment dans ce fichier.

<br>

> Dans le fichier principal, vous devrez maintenant importer ce *module*. Partagez ainsi votre code entre ces 2 fichiers, afin de rendre celui-ci plus lisible.

