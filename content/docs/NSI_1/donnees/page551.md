---
Title: Projets utilisant les tableaux python
---

# Projet 1: jeu du Morpion
Le jeu du Morpion est un jeu de réflexion se pratiquant à deux joueurs au tour par tour et dont le but est de créer le premier un alignement sur une grille (3x3).

Vous allez programmer le jeu du Morpion contre l'ordinateur. L'ordinateur devra repondre à chacun des coups du joueur et, si possible, remporter la partie.

Afin d'analyser la partie, et prevoir les prochains coups à jouer, l'ordinateur utilisera les fonctions suivantes, que vous devrez programmer:

* `compteur`
* `victoire`
* `cherche_car`

Prévoir ensuite le prochain coup à partir des informations fournies, et créez un jeu, où l'ordinateur ne sera jamais perdant.

## Compteur du nombre de caractères identiques
Lire et tester le programme suivant:

**Exemple: Compte le nombre de X dans une ligne, colonne ou diagonale**

```python
morpion = [
    ['X', 'O', 'X'],
    ['O', 'X', ' '],
    [' ', 'O', 'O']
]

# Vérifier si la ligne 0 contient trois symboles identiques
indices_X = [0,0,0]
indices_Y = [0,1,2]
compteur = 0
for i in range(len(indices_X)):
    x = indices_X[i]
    y = indices_X[i]
    if morpion[x][y] == 'X':
        compteur +=1
print("il y a ", compteur, "cases X")
```

Dans la boucle `for`, l'indice i varie de 0 à 2.

Pour `i=0`, `x` a pour valeur `indices_X[0]` et `y` a pour valeur `indices_Y[0]`. Le couple x,y vaut alors 0,0. On utilise ces coordonnées pour relever le symbole de la case `morpion[0][0]`. C'est un `X`. On augmente alors le compteur d'une unité (on compte les `X`).

On continue dans la boucle `for` avec les cases 0,1 puis 0,2.

> Etape 1: Créer une fonction `compteur` qui prend une `grille`, un caractère `car`, une liste `indices_X` et une liste `indices_Y` en paramètres. Cette fonction devra retourner le nombre de fois que ce caractère `car` apparait.

*Exemple:*

```python
morpion = [
    ['X', 'O', 'X'],
    ['O', 'X', ' '],
    [' ', 'O', 'O']
]

def compteur(grille,car,liste_X,liste_Y):
	compteur = 0
	for i in range(len(indices_X)):
		# à completer
	return compteur

compteur(morpion,'X',[0,0,0],[0,1,2])
# retourne:
2
```

La fonction retourne 2: à la premiere ligne, il y a bien 2 caractères 'X'.

## Utilisez votre fonction
> Etape 2: utilisez votre fonction pour déterminer le nombre de  'X' dans chacune des lignes, dans chacune des colonnes, et dans chacune des diagonales (8 appels de la fonction).

## Victoire
> Etape 3: Créer une fonction `victoire`, qui prend une grille de morpion en paramètre, ainsi qu'un caractère `car` (qui vaut X ou O), et vérifie si la condition de victoire est réalisée pour le joueur X ou O. La fonction retournera un booléen True/False.

*Exemple:*

```python
morpion = [
    ['X', 'O', 'X'],
    ['O', 'X', ' '],
    ['X', 'O', 'O']
]

def victoire(grille,car):
	# a completer

victoire(morpion,'X')
# retourne:
True
victoire(morpion,'O')
# retourne:
False
```

## Detection case vide
> Etape 4: Ecrire une fonction `cherche_car(grille,car,liste_X,liste_Y)` qui verifie si les cases de coordonnées `(liste_X[0], liste_Y[0]), (liste_X[1], liste_Y[1]), (liste_X[2], liste_Y[2])` contiennent au moins un symbole `car`, et retourne les coordonnées de la première case contenant le caractère `car`.

*Exemple:*

```python
morpion = [
    ['X', 'O', 'X'],
    ['O', 'X', ' '],
    [' ', 'O', 'O']
]

def cherche_car(grille,car,liste_X,liste_Y):
	for i in range(len(liste_x)):
        x = liste_x[..
        y = liste_y[..
        if grille[..][..] == ...:
            return x,y

cherche_car(morpion,' ',[1,1,1],[0,1,2])
# retourne:
(1,2)
```

La fonction retourne (1,2), car à la case de coordonnées x=1, y=2, il y a un symbole `' '`.



Il est fortement recommandé de bien maitriser l'exercice 3.1, vues dans le [TD](../page55) sur les tableaux.

## Interface joueur
> Etape 5: Vous allez maintenant programmer l'interface du joueur, en lui demandant les coordonnées x,y où il placera son pion `'X'`. La grille de morpion devra être modifiée en fonction de son choix.

```python
while not victoire(morpion,'X') and not victoire(morpion,'O'):
	x = int(input("numero ligne :"))
	y = int(..)
	...
```

## Stratégie de l'ordinateur
> Etape finale: Programmer le jeu complet, pour jouer contre l'ordinateur.

Pour élaborer la stratégie de l'ordinateur, consulter la page dédiée: site [tictactoe.com](https://tictactoefree.com/fr/astuces/comment-gagner-au-morpion-si-vous-jouez-en-second)

{{< img src="../images/morpion.png" link="https://tictactoefree.com/fr/astuces/comment-gagner-au-morpion-si-vous-jouez-en-second" caption="site TICTACTOEFREE.COM" >}}


# Projet 2: jeu du Sudoku
Le jeu du Sudoku est une jeu de reflexion utilisant une grille (9x9).

Le but du jeu appelé Sudoku, est de remplir la grille avec une série de chiffres tous différents, qui ne se trouvent jamais plus d'une fois sur une même ligne, dans une même colonne ou dans une même région (également appelée « bloc », « groupe », « secteur » ou « sous-grille »).

Vous allez programmer les fonctions qui vont vérifier, à chaque essai du joueur, si les chiffres placés (autres que 0) sont tous différents:

* dans les différentes lignes: fonction `check_lignes`
* dans les différentes colonnes: fonction `check_col`
* et dans les différentes regions (blocs 3x3): `check_blocs`

Vous devrez aussi programmer une fonction qui verifie si la grille est entièrement, et correctement remplie: `check_victoire`

Le joueur aura la possibilité de **revenir en arrière** (un ou plusieurs coups), et poursuivre la partie.

{{< img src="../images/grille_s1.png" caption="exemple de grille et solution" >}}

Il est fortement recommandé d'utiliser les fonctions de l'exercice 3.2, vues à la [page des exercices](../page55) sur les tableaux.


