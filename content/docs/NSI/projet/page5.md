---
Title: Pygame Snake
---

*pygame est une combinaison de Python avec la SDL (Simple Directmedia Library), une bibliothèque libre multi-plateformes permettant la gestion du multimédia dans la programmation.*

# Jeu du Snake avec le module Pygame
Ce projet traite des types abstraits personnalisés.

Le type *serpent* proposera pour interface les fonctions suivantes:

* affiche
* tete
* ajoute_tete
* supprime_queue

Une version de ce projet sur microbit est accessible [ici](/docs/techno/pages/MB_bulles/).

## Editeur
Le module `Pygame` est accessible via l'editeur en ligne [Trinket Pygame](https://trinket.io/pygame)

## Script initial
Le script suivant donne les éléments de base du programme.

```python
import pygame

 
pygame.init()
 
white = (255, 255, 255)
black = (0, 0, 0)
red = (255, 0, 0)
 
dis = pygame.display.set_mode((800, 600))
 
game_over = False
 
x1 = 300
y1 = 300
 
x1_change = 0       
y1_change = 0
 
 
while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                x1_change = -10
                y1_change = 0
            elif event.key == pygame.K_RIGHT:
                x1_change = 10
                y1_change = 0
            elif event.key == pygame.K_UP:
                y1_change = -10
                x1_change = 0
            elif event.key == pygame.K_DOWN:
                y1_change = 10
                x1_change = 0
 
    x1 += x1_change
    y1 += y1_change
    dis.fill(white)
    pygame.draw.rect(dis, black, [x1, y1, 10, 10])
 
    pygame.display.update()
 
 
pygame.quit()
quit()
```

Copier-coller celui-ci dans la fenêtre du fichier `main.py`.

Puis programmer les fonctions utiles pour le bon fonctionnement du jeu dans un nouveau fichier (nouvel onglet dans Trinket) que vous appelerez `utils.py`. Ce seront les fonctions de l'*interface* du type abstrait `serpent`.

Dans le programme `main.py`:

* importer le module `utils.py`
* Définissez une variable qui stocke les coordonnées du *serpent*: `serpent = [(400,200),(400,210), (400,220), (400,230)]`

* Dans la boucle principale:
 * Ajoutez des conditions pour que le pixel ne sorte pas de l'écran. On peut faire changer de direction lorsque le bord de l'écran est touché par le pixel.
 * Ajouter le pixel à la fin de la liste `serpent` (`ajoute_tete`)
 * Supprimer le premier pixel du serpent, celui placé en `serpent[0]` avec `supprime_queue`
 * Afficher le serpent une fois ses coordonnées recalculées avec la fonction `affiche`.

* Dans le fichier `main.py`, mettre et compléter la fonction d'affichage:

```python
def affiche(S):
    # affiche tous les pixels du serpent
    # a partir de leurs coordonnees dans S
    # utilise une boucle for
```

* Dans le fichier `utils`, implémenter ces fonctions:

```python
def tete(S):
    # recupere les coordonnees x, y de la tete du serpent
    

def ajoute_tete(S, x, y):
    # ajoute un tupple (x,y) a la fin de la liste S
    # utilise S.append

def supprime_queue(S):
    # decale toutes les valeurs de la liste S vers la gauche:
    # copie toutes les valeurs S[i+1] dans S[i]
    # puis supprime le dernier element
```  

# Démarche de projet
## La structure de données choisie
Expliquer pourquoi la structure de données `serpent`, et son interface constituée de `affiche, tete, ajoute_tete, et supprime_queue` est bien adpatée pour implémenter le jeu du Snake.

## Prolongement
Quelles fonctionnalités du jeu manque-t-il pour que celui-ci soit complet? 

* quelles fonctions de l'interface serpent?
* quel objet? Quelle structure de données envisagez-vous pour cet objet?

# Liens
Ce TP est inspiré de la page [www.edureka.co](https://www.edureka.co/blog/snake-game-with-pygame/)

<!--
# Correction fichier main.py
```python
import pygame
from utils import *
 
pygame.init()
 
white = (255, 255, 255)
black = (0, 0, 0)
red = (255, 0, 0)
 
dis = pygame.display.set_mode((800, 600))
 
game_over = False
 
x1 = 300
y1 = 300
 
x1_change = 0       
y1_change = 0
 
clock = pygame.time.Clock()

serpent = [(400,200),(400,210), (400,220), (400,230)]

def affiche(S):
    # affiche tous les pixels du serpent
    # a partir de leurs coordonnees dans S
    for coord in S:
      x,y = coord
      pygame.draw.rect(dis, black, [x, y, 10, 10])

while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                x1_change = -10
                y1_change = 0
            elif event.key == pygame.K_RIGHT:
                x1_change = 10
                y1_change = 0
            elif event.key == pygame.K_UP:
                y1_change = -10
                x1_change = 0
            elif event.key == pygame.K_DOWN:
                y1_change = 10
                x1_change = 0
    x1, y1 = serpent[-1]
    x1 += x1_change
    y1 += y1_change
    
    if x1 > 800 or x1 < 0: x1_change = -x1_change
    if y1 > 600 or y1 < 0: y1_change = - y1_change
    
    ajoute_tete(serpent,x1,y1)
    supprime_queue(serpent)
    
    dis.fill(white)
    
    affiche(serpent)
    pygame.display.update()
 
    clock.tick(30)


pygame.quit()
quit()
```

# Correction fichier utlis.py
```python
import pygame
def tete(S):
    # recupere les coordonnees x, y de la tete du serpent
    return S[-1][0], S[-1][1]

def ajoute_tete(S, x, y):
    # ajoute un tupple (x,y) a la fin de la liste S
    S.append((x,y))

def supprime_queue(S):
    # decale toutes les valeurs de la liste S vers la gauche:
    # copie toutes les valeurs S[i+1] dans S[i]
    # puis supprime le dernier element
    for i in range(len(S)-1):
        S[i] = S[i+1]
    S.pop()
```
--->
