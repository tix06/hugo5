---
Title: mastermind
---

# Jeu du mastermind - 1ere NSI
## Précisions
Pour la présentation du jeu, on pourra consulter la page: [wikihow.com](https://fr.wikihow.com/jouer-au-Mastermind)

{{< img src="../images/mastermind.jpg" link="https://fr.wikihow.com/jouer-au-Mastermind" >}}

Ce TP demande une bonne maitrise des concepts python de base:

* [variables](/docs/python/pages/variables/page4_D/)
* [cours](/docs/python/pages/conditions/page2_D/) sur les conditions et [TP](/docs/python/pages/conditions/page3/)
* [boucle non bornée while](/docs/python/pages/conditions/page4/)

Cette version du programme n'utilise pas les `sequences` comme les listes python. 
L'interface se passe dans la console python.

## Principes retenus pour le jeu
L'ordinateur tire 4 couleurs parmis Jaune, Orange, Cyan, Rouge, Vert. Ces pions colorés sont les variables `o1`, `o2`, `o3`, `o4`. On y stocke un unique caractère, parmis ('J','O','C','R','V')

Le joueur doit proposer sa sequence de 4 couleurs. 

Sa première reponse est placée dans la variable `j1`, puis la 2e dans `j2`, etc...

Le joueur proposera par exemple 'J', puis 'O', puis 'C', puis 'R' pour Jaune, Orange, Cyan, Rouge.

Si la couleur du pion est trouvée, le score Noir N augmente de 1.

Si l'une des couleurs est trouvée mais n'est pas à la bonne place, c'est le score blanc B qui augmente.

## Commençons par les variables globales du jeu
Importer la fonction `random.choice`. Puis utiliser cette fonction pour réaliser le tirage aléatoire d'un caractère parmis `('J','O','C','R','V')`, que l'on placera dans la variable `o1`.

```python
from random import choice
o1 = choice(('J','O','C','R','V'))
```

Faire de même pour les 3 autres pions, `o2`, `o3`, `o4`.

Il s'agit de la combinaison tirée par l'ordinateur. 
Vous pouvez créer une chaine de caractères à partir de ces 4 variables, en les ajoutant chacune:

```python
sequence = o1 + o2 + ... # a completer
```
Vous pouvez l'afficher dans la console en ajoutant la fonction `print`

Vous aurez aussi besoin:

* du nombre d'essais réalisés par le joueur
* du nombre de pions noirs calculés par l'ordinateur (4 noirs = gagné)

Ajouter alors les lignes qui affectent la valeur 0 à chacune de ces variables, `essais` et `N`

## Boucle principale du jeu
> Ecrire une boucle `while` avec pour condition d'execution:

* le nombre d'essais est <= 12
* `N` est différent de 4

Si l'une de ces conditions n'est plus réalisée, alors on sort de la boucle car la partie est terminée.

> Demander au joueur de rentrer les 4 couleurs de sa proposition pour le tour. Utiliser le modèle ci-dessous et programmer `j2`, `j3` et `j4`

```python
j1 = input("entrer la couleur du pion 1 (JOCRV): ")
```

> Tester pour chaque couleur donnée par le joueur, si celle-ci est bien en correspondance avec le pion de l'ordinateur, à la même place. Par exemple, `j1` est il egal à `o1`: Augmenter alors `N` d'une unité.

> Si le test est negatif, tester alors si la couleur proposée par le joueur est présent dans la `sequence`, mais occupe une autre position:

```python
if/elif j1 in sequence:
    # instruction
```

Cette fois, ce sera la variable `B` (pour Blanc), qui augmente d'une unité.

> Afficher ensuite B et N dans la console, augmenter le nombre d'essais d'une unité, et recommencer la boucle while

## Fin de la partie
A la sortie de la boucle while, le joueur a soit gagné, soit perdu. Afficher un message dans la console.


# Améliorations possibles
Le joueur pourrait donner sa sequence de couleurs en une seule fois, à l'aide d'une seule commande `input`. Il écrirait par exemple "JJOV". 

Pour comparer chaque couleur, avec chaque pion de l'ordinateur, à la même position: il faut alors atteindre l'une des lettres du mot "JJOV", et la comparer à la lettre du même rang, dans la sequence de l'ordinateur.

Cela necessite d'utiliser un *index* pour parcourir le mot du joueur. Et une *boucle bornée* `for` pour faire evoluer le rang.

On trouvera des précisions sur ces notions au [TP4 python: boucles for](/docs/NSI_1/donnees/page5/)





