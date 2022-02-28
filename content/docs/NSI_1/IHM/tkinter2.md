---
Title: Tkinter demineur
---

# Canvas et Tkinter
## Principe
Le module Tkinter permet de dessiner dans la fenêtre en ajoutant un objet Canvas. Les fonctions de dessin permettent de tracer des figures, afficher une image... Les éléments sont repérés par leur coordonnées (x,y). Le point (0,0) se situant en haut à gauche.

On verra dans une autre seance que le canvas peut aussi relever la position de la souris lors d'un clic. Et que l'on peut ainsi programmer des jeux.

## But de la séance
Vous allez poursuivre votre appentissage des algorithmes sur les listes, en positionnant les images *bombes* sur une grille du canvas.

## Contenu du projet
Le projet <a href="/scripts/Tkinter/tkinter_grille.zip" download="tkinter_grille.zip">suivant (fichier zip)</a> contient 3 fichiers:

* canvas.py: le fichier principal qui contient les fonctions de dessin. Ce sera ce fichier qui faudra executer pour afficher la fenêtre graphique. Dans le shell, faire:

```python
python canvas.py
```

* utils.py: C'est le fichier qui contient les fonctions de calcul des positions des bombes. Au depart, ce fichier ne contient que la fonction `position_bombes`. Cette fonction génère une liste de listes adaptée à la grille $L*h$:
  * chaque sous-liste positionne les bombes d'une même ligne (L cases)
  * il y a autant de sous-listes que le nombre de cases en hauteur (h lignes)
  * une valeur 1 dans la sous-liste positionne une bombe. 
  * une valeur 0 signifie case vide

Vous devrez modifier le contenu de la fonction `position_bombes` pour réaliser les grilles proposées.

## Prototypage
Dans chaque cas, compléter le prototypage de la fonction pour:

* spécifier ce qu'elle doit faire (début du prototypage)
* préciser ce qui est attendu lorsqu'elle est executée avec certaines valeurs choisies pour arguments (fin du prototypage). Ajouter par exemple (compléter):

 ```
 >>> position_bombes(...,...)
 [[...,...,...,...],[...,...,...,...]]
 ```

## Programmer un test automatique
Le doctest est un module qui recherche dans le prototypage de la fonction ce qui pourrait s'apparenter à des tests sur la fonction.

Comme par exemple:

```
>>> position_bombes(2,2)
[[0, 0], [0, 0]]
```

Pour réaliser des tests sur la fonction, on ajoutera alors à la suite du script les lignes suivantes:

```python
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

Et pour réaliser les tests automatiques, il faudra executer le fichier `utils.py`: Depuis le shell, faire:

```python
>>> python utils.py
```

*Remarque:* la sortie de la fonction doit suivre le *guide de style* python, sinon des erreurs peuvent être générées (absence d'espaces,...). Il s'agit de PEP8 sur [https://python.org](https://python.org).

## Les grilles à réaliser

```python
def position_bombes(L,h):
    """
    grille pleine
    :param L: nombre de cases horizontales
    :param h: nombre de cases verticales
    :return Bombes: matrice de dimension L*h
    retourne une liste de binaires avec la position des bombes
    exemple:
    --------
    >>> position_bombes(

    """




```

<figure><div>
  <img src="../images/tkinter_mines0.png">
  <figcaption>grille 1</figcaption>
</div>
</figure>

```python
def position_bombes(L,h):
    """
    ligne horizontale de bombes
    :param L: nombre de cases horizontales
    :param h: nombre de cases verticales
    :return Bombes: matrice de dimension L*h
    retourne une liste de binaires avec la position des bombes
    exemple:
    --------
    >>> position_bombes(
    
    """





```
<figure><div>
  <img src="../images/tkinter_mines1.png">
  <figcaption>grille 2</figcaption>
</div>
</figure>

```python
def position_bombes(L,h):
    """
    Premiere ligne verticale
    :param L: nombre de cases horizontales
    :param h: nombre de cases verticales
    :return Bombes: matrice de dimension L*h
    retourne une liste de binaires avec la position des bombes
    exemple:
    --------
    >>> position_bombes(
    
    """





```

<figure><div>
  <img src="../images/tkinter_mines3.png">
  <figcaption>grille 3</figcaption>
</div>
</figure>


```python
def position_bombes(L,h):
    """
    diagonale vers le bas a droite
    :param L: nombre de cases horizontales
    :param h: nombre de cases verticales
    :return Bombes: matrice de dimension L*h
    retourne une liste de binaires avec la position des bombes
    exemple:
    --------
    >>> position_bombes(
    
    """





```

<figure><div>
  <img src="../images/tkinter_mines4.png">
  <figcaption>grille 4</figcaption>
</div>
</figure>

```python
def position_bombes(L,h):
    """
    position aléatoire de bombes
    :param L: nombre de cases horizontales
    :param h: nombre de cases verticales
    :return Bombes: matrice de dimension L*h
    retourne une liste de binaires avec la position des bombes
    exemple:
    --------
    >>> position_bombes(
    
    """





```

<figure><div>
  <img src="../images/tkinter_mines5.png">
  <figcaption>grille 5</figcaption>
</div>
</figure>

*Aide:* on pourra utiliser la fonction `randint(0,1)` du module `random`