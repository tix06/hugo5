# But de la séance
Utiliser un programme Python pour s'aider à résoudre deux enigmes mathématiques.

*Objectifs en programmation:*

* variables, types *int* et *str*
* opérations sur les variables
* entrées `input` et sorties `print`
* boucle `while`  


# L'énigme de l'age du fils du Capitaine
## Enoncé
Le Capitaine dit à son fils : "*Tu viens de fêter ton anniversaire. Dans quelques années, lorsque tu seras adulte, tu deviendras toi aussi Capitaine. Tu devras savoir calculer, et vite. Voici une enigme qui va exercer tes talents:* 

> La cabine n°1 abrite M. Dupont et ses deux filles. Le produit de leurs trois âges est 2450 et la somme de leurs trois âges est égale à 4 fois le tien. L'ainée est blonde. Peux-tu trouver les âges des trois passagers ?"

<figure>
<div>
<img src="../images/haddock.jpg">
<figcaption>Le Capitaine...</figcaption>
</div>
</figure>

## Résolution
On pourrait procéder par tatonnement, à l'aide de nombreux essais sur les ages de M Dupont et ses deux filles. Pour cela, nous allons écrire un programme qui nous aidera à tester différentes combinaisons sur ces ages...

## Le script
### Explications
Le programme est donné ici en partie. Vous devrez le compléter. <br>
Ce programme utilise les variables suivantes:

* `a` et `b`: entiers, l'age de chacune des filles
* `c` : entier, l'âge du capitaine
* `produit` : entier, stocke le calcul $a \times b \times c$
* `somme` : entier, stocke le résultat de $a + b + c$
* `age` : nombre décimal à virgule flottante, stocke le resultat de $somme / 4$

Ce programme va demander à l'utilisateur de rentrer les valeurs de `a`, `b`, `c`.

L'instruction `while` (signifie *tant que*) va tester si la valeur de `c` est différente de 0 (`c != 0`). Et si c'est le cas, tout le bloc d'instructions sera executé. 

Les instructions qui font partie de ce bloc sont *indentées* par rapport au bord gauche: elles sont écrites après avoir inséré une marge de 2 ou 4 espaces.

Après execution, si la valeur de `c` est toujours différente de 0, le bloc sera à nouveau executé. Cela permet de faire de nouveaux essais, et trouver les bonnes valeurs pour repondre à l'enigme.

Pour sortir du programme, vous devrez saisir 0 pour la valeur de `c`.

> Vous commencerez par compléter les parties où il y a un commentaire `# à compléter`, au dessous de cette ligne, directement le document:

```python
c = 1
while c !=0:
    a = int(input('a ='))
    b = int(input('b ='))
    # à completer: demander de saisir la valeur c
    
    produit = a*b*c
    somme = a+b+c
    # à completer: saisir le calcul de l'age du fils du capitaine
    
    print('produit :',produit,' somme :',somme,'age du fils :', age)
```

### Entrées et sorties
* **entrée:** pour demander à l'utilisateur de saisir une valeur, on utilise la fonction `input`. On met entre parenthèses le message à afficher. Et on affecte à une variable la valeur saisie. On peut aussi ajouter la fonction `int` qui transforme les caractères saisis en une valeur entière. Ce qui donne: `variable = int(input('message à afficher'))`
* **sortie:**  on utilise le fonction `print` déjà vue dans un précédent TP.

## Saisir le programme
Choisir l'une des options: 

* sur PC: l'IDE Spyder
* sur tablette Android: <a href="https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=fr&gl=US" target="blank">Application PyDroïd3</a> 
* sur la calculatrice TI-83 Premium CE edition Python

On détaillera ici la saisie du script à l'aide de la calculatrice.

### Edition du script à l'aide de la calculatrice 
> Ecriture du premier programme:

> * Bouton **prgm** : Choisir `2:Python App`
* la fenêtre du shell Python s'ouvre alors. 

Les boutons du *menu* en bas de l'ecran sont accessibles avec chacune des touches situées au dessous. Par exemple, touche *zoom* pour **Nouv**.

<figure>
  <div>
  <img src="../images/menu_shell.png">
  <figcaption>accès au shell ou aux programmes</figcaption>
  <figcaption>Navigation entre les menus de la calculatrice</figcaption>
</div>
</figure>

> * Saisir le nom de votre premier programme puis valider (par exemple `CAPIT` puisque vous demarrez un script sur l'*enigme du Capitaine*).

<figure>
  <div>
  <img src="../images/nom.png">
  <figcaption>saisie du nom du programme</figcaption>
</div>
</figure>





Vous entrez alors dans l'editeur de programme. <br>
Pour saisir `c = 1`, appuyer sur les touches:

* **alpha** **prgm** (ce qui affiche **c**)  
* **sto** (ce qui affiche `=`)
* puis **1**.

<figure>
  <div>
  <img src="../images/menu.png">
  <figcaption>fenêtre d'edition</figcaption>
</div>
</figure>

> Pour le `while`, aller dans le menu **Fns...** en bas de l'editeur:



Se déplacer alors avec les flèches (touches doite/gauche de la calculatrice). Aller dans le menu **Ctl** (les fonctions de contrôle).

<figure>
  <div>
  <img src="../images/while.png">
<figcaption>menu CTL</figcaption>
</div>
</figure>

> Pour saisir `c!=0`, utiliser l'editeur de texte (bouton du bas **a A #**). Valider les symboles avec la touche **entrer**. Faites `Coller` lorsque vous avez terminé la saisie.

<figure>
  <div>
  <img src="../images/edit.png">
  <figcaption>editeur de symbôles</figcaption>
</div>
</figure>

> Pour la fonction `int`: aller dans le menu **Fns...** puis **Type**. Et choisir `1.int()`

<figure>
  <div>
  <img src="../images/int.png">
  <figcaption>menu Type</figcaption>
</div>
</figure>

> Pour les fonctions `print` et `input`, vous les trouverez dans **Fns...** puis **E/S**  (ce sont des entrées/sorties)


## Essais
Une fois le programme saisi, exécutez le. (menu **Exèc** dans l'editeur de la calculatrice)

Utilisez le tableau suivant pour choisir les valeurs de `a`, `b` et `c`. 

<figure>
<img src="../images/tableur.png">
<figcaption>valeurs sont le produit fait 2450</figcaption>
</figure>

## Solution
Une fois que vous aurez réalisé les essais necéssaires, vous aurez probablement déterminé quelles sont les valeurs pour `a`, `b` et `c` qui repondent à l'enigme. 

> Rédigez alors votre solution, sur cette feuille:


<!--
# Jeu de devinette
## Principe
L'ordinateur choisit un nombre aleatoirement entre 1 et 100. Vous devrez le découvrir en un minimum d'essais. A chacune de vos propositions, l'ordinateur répond par: EXACT, PLUS, MOINS, selon si votre proposition est égale (vous avez gagné), infèrieure ou supérieure à la valeur tirée aleatoirement.

## Le script: explications
### Librairie
Pour tirer au sort une valeur de manière aleatoire, il faut importer la librairie `random`.
### Variables
* `n` : entier, stocke la valeur choisie par l'ordinateur.
* `rep`: entier, valeur entrée par l'utilisateur, sa proposition.

### Script Python

```python
from random import *
n = randint(1,100)
rep = -1
while rep != n and rep != 0:
    rep = int(input('Choisir  '))
    if rep < n: 
        print('PLUS')
    elif rep > n:
        print('MOINS')
    else:
        print('EXACT')
print('FIN')
```

### Explications
ligne 1: On commence par importer la librairie `random`, grâce à l'instruction `from random import *`<br>
ligne 2: On stocke dans `n` le resultat du tirage aleatoire entre 1 et 100.<br>
ligne 3: Pour rentrer dans la boucle `while`, on definit la variable `rep` et on lui affecte la valeur -1.<br>
ligne 4: La boucle s'execute *tant que* `rep` est différent de `n` (auquel cas on a gagné), ET que `rep` est différent de 0. Si l'utilisateur veut quitter le jeu, il devra mettre 0 lorsque le programme lui demande de *choisir*.

ligne 6: c'est une structure conditionnelle qui signifie:

```
SI rep < n ALORS:
	afficher 'PLUS'
SINON SI rep > n ALORS:
	afficher 'MOINS'
SINON:
	afficher 'EXACT'
```

En python, les instructions `SI, SINON SI et SINON` se traduisent par: `if, elif, else`. Il n' y a pas besoin de traduire `ALORS`.

Les instructions `if` et `elif` sont suivies d'une opération conditionnelle. Pas `else`.

La ligne finit par *deux points* `:`. C'est pour délimiter le bloc de code (indenté) qui suit sous cette instruction.
	



## Saisir le programme à l'aide de la calculatrice TI-83 Premium CE edition Python
* Démarrer un **Nouv**eau programme depuis la fenêtre du shell Python
* Choisir un nom à votre script, par exemple **JEU**
* Pour importer la librairie *random* dans votre programme: Dans l'editeur, aller dans le menu **Fns...** puis **Modul**

<figure>
  <div>
  <img src="../images/modul.png">
  <figcaption>menu Modules</figcaption>
</div>
</figure>

Choisir: `1.from random import *` 

Revenir ensuite dans le menu **Modul** pour choisir `4.randint(min,max)` lorsque vous aurez besoin de saisir la ligne `n = randint(1,100)`

## Utiliser le programme
Lancer le programme. Faire plusieurs essais et noter à chaque fois le nombre d'essais qu'il aura fallu pour deviner le nombre de l'ordinateur.

> Quel est le nombre minimum de coups necéssaires pour trouver la valeur comprise entre 1 et 100?

Modifier ensuite le programme pour que l'ordinateur choisisse maintenant une valeur entre 1 et 1000? 

> Quel est cette fois le nombre minimum de coups necéssaires pour trouver la valeur comprise entre 1 et 100?

-->

# Liens
* s'exercer à la programmation Python sur la TI-83: TI-codes : https://education.ti.com/fr/mises-a-jour-et-logiciels/ti-codes/python/83
* site de Gerard Villemin, page sur les enigmes mathématiques: http://villemin.gerard.free.fr/Puzzle/Filles.htm#recherche


