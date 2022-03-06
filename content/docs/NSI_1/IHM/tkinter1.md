---
Title: Tkinter les bases
---

# Tkinter les bases
## Import des modules
Le module `tkinter` apporte l'environnement graphique.

Le module `PIL` permet la gestion des images.

Démarrer votre fichier par:

```python
from tkinter import *
from PIL import Image, ImageTk
```

## Créer une fenêtre Tkinter
La fenêtre est un objet de la classe `Tk`. Pour l'exemple qui suit, on lui donne le nom de `fen1`. 

On créé un objet fenêtre à partir de l'instruction: `fen1 = Tk()`

La dernière ligne permet d'afficher la fenêtre à l'écran. Il faudra auparavent ajouter les *objets esclaves*.

```python
if __name__ == '__main__':
    fen1 = Tk()
    # ajouter des objets esclaves à la fenêtre
    # puis finir par:
    fen1.mainloop()
```

## Objets esclaves
Ces objets sont à ajouter à `fen1`, une fois celle-ci créé. Donc après `fen1 = Tk()`

### Canvas
C'est la partie de la fenêtre dans laquelle on dessine.

On commence par créer un objet canvas appelé ici `can1`: c'est l'instruction `can1 = Canvas(fen1, ...arguments...)`. Les arguments vont permettre de choisir par exemple la largeur en pixel du canvas (*width*) et sa hauteur (*height*).

Puis on positionne `can1` avec la méthode `pack`. Sans cette deuxième ligne `can1.pack(side=LEFT, padx=5, pady=5)`, l'objet esclave est créé mais non attaché à la fenêtre (et donc n'apparait pas).

```python
    can1 = Canvas(fen1, bg='dark grey', height=400, width=600)
    can1.pack(side=LEFT, padx=5, pady=5)
```

### des boutons
Les boutons vont permettre d'appeler des fonctions lorsque l'on clique dessus.

Par exemple, le bouton 1, `bou1` va appeler une fonction de `fen1` héritée lors de sa création à partir de la classe `Tk`. C'est la fonction `quit`.

Et le bouton 1, `bou2`, va appeler la fonction `replay` qu'il vous faudra programmer. Que voudrez vous qu'il se passe lorsque l'on clique sur ce bouton...? Effacer le canvas, dessiner une grille,...?

```python
    # un bouton
    bou1 = Button(fen1, text='Quitter', command=fen1.quit)
    bou1.pack(side=BOTTOM)
    # un autre bouton
    bou2 = Button(fen1, text='(Re)Jouer', command=replay)
    bou2.pack()
``` 

*Remarques:* en python, il est possible de mettre en argument d'une fonction une autre fonction. C'est ce qui est réalisé ici, avec les fonctions `fen1.quit` et `replay`. On appelle ces fonctions sans mettre de parenthèses: on écrit `replay` et non `replay()`.

### Etiquette: Label
On peut écrire un texte dont le contenu sera evolutif, comme un panneau d'affichage dont le contenu est variable:

```python
    text_affichage = StringVar()
    txt1 = Label(fen1, textvariable=text_affichage, justify=LEFT, font='TkFixedFont')
    txt1.pack()
    text_affichage.set("Cliquer sur \n le bouton \n pour demarrer")
```

Plus tard, dans le programme, il suffira d'écrire `text_affichage.set("nouveau \n message")` pour afficher un *nouveau message*, à la même place.

### textBox
Equivalent de `input` mais pour l'environnement tkinter

XXXXXX à compléter XXXXXX


### Image dans le canvas
Plusieurs étapes sont necessaires pour:

* ouvrir une image du dossier
* redimensionner l'image
* créer un objet image à partir du module tkinter: `image_bomb`
* dessiner l'image dans le canvas à la position 100 * 100

```python
    # une image de dimension 50 pixels * 50 pixels 
    image = Image.open("images/bomb.png")
    image = image.resize((50, 50), Image.ANTIALIAS)
    image_bomb = ImageTk.PhotoImage(image)
    bomb = can1.create_image(100, 100, anchor="nw", image=image_bomb)
```

Plus loin dans le programme, il suffira d'écrire `bomb = can1.create_image(200, 200, anchor="nw", image=image_bomb)` pour dessiner l'image à la position 200 * 200 par exemple.

### Dessiner dans le canvas

# Evenements
## Gestion d'un clic de souris dans le canvas

## Gestion des touches du clavier

# Animations

# Exemples
## Exemple 1: dessiner une grille
et gestion d'un clic de souris
## Exemple 2: animation avec rebonds dans le canvas
avec interface clavier
## Exemple 3: dessiner selon le texte saisi

