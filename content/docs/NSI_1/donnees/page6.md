---
Title: Cours - les bases en python
---

# Les grands principes du langage
Python, créé en 1991, est désormais le principal langage de programmation dans les domaines du Machine Learning, du Big Data et de la Data Science.

C'est un langage très concis, dont la prise en main est facile. La licence appartient à une organisation sans but lucratif (Open source).

C'est un langage de haut-niveau (à forte abstraction, éloigné des caractéristiques techniques de la machine). 

Lors de l'execution, le code source est traduit en bytecode, lui même interprété dans une machine virtuelle python (PVM), écrite, elle dans un langage de plus bas niveau.

Comme tout langage, python utilise des *instructions*. Ce sont :

* les affectations, opérations
* l'appel de fonctions
* l'import d'une librairie/ bibliotheque / module
* les instructions conditionnelles
* les boucles
* les definitions de fonctions ou classes

C'est donc un langage complet, multiparadigme.

# Les types de base en python
## Variable et type
**Def:** Un type définit l'ensemble des valeurs possibles pour les données.

Python a un typage dynamique: lorsque l'on définit et que l'on affecte une variable (opérations qui se passent lors de la premiere affectation), Python lui associe un type. Certaines opérations seront alors possibles selon le type.

```python
> x = 5
> type(x)
int
```

{{< img src="../images/var5.png" caption="x = 5" >}}
**Def:** Une variable est un espace mémoire auquel on donne un nom. Une variable a un type, et stocke une valeur.

Comme les types de base sont *non mutables*, la variable est écrasée et reconstruite à chaque nouvelle affectation. Ce qui peu donner l'impression que le type peut changer.

Pour **transformer le type**:

| type de depart | type d'arrivée | fonction |
| --- | --- | --- |
| int | str | str(x) |
| str | int | int(x) |


**Les types de base sont:**

* nombres entiers: **int**
* nombres à virgule flottante: **float**
* chaine de caracteres: **str**
* les variables logiques booléens: **bool** (True ou False)
* le type rien: **None**

Pour les flottants, ceux-ci ont pour rôle d'approcher les nombre réels, mais il est impossible de les représenter EXACTEMENT. Le séparateur est un *point* plutôt qu'une *virgule*. On peut utiliser la notation scientifique **e** ou **E**.

Attention, il est impossible de comparer des flottants entre eux. On préfèrera alors eviter de les utiliser pour des tests logiques d'egalité (==). 

```python
a = 0.1
b = 0.2
a + b == 0.3
# False
abs(0.1 + 0.2 - 0.3) < 0.000001
# True
```

## Type booléen
Les expressions logiques, dont l'evaluation vaut True ou False utilisent les opérateurs de comparaison (>, >=, <, <=, ==, !=), plus les suivants : AND, OR, NOT, IN, NOT IN. 

Lorsque l'on affecte une expression à une variable, celle-ci est d'abord evaluée avant que la valeur ne soit affectée:

```python
a = 10
b = 20
c = a < b AND b < 100
# c'est d'abord l'expression a < b puis True AND b < 100 qui est evaluée (True)
# puis c stocke True
```

Les expressions booléennes sont utilisées pour les *structures conditionnelle* (`if ... elif ... else`). Voir le **TPn°2** sur les éléments du langage python.

# Opérations sur les chaînes de caractères
Les caractères et chaines sont mis entre guillemets simples ou doubles.

*Remarque*: ne pas confondre le nom d'une variable avec la chaine de caractères:`print('a')` &ne;  `print(a)`...

```python
a = 10
print(a)
# affiche ...
print('a')
# affiche ...
```

On peut réaliser des concatenations sur les chaines avec les opérateurs `+`, `*`.

Mais aussi les opérations:

* de comparaison d'ordre: 'A' < 'B' vaut True, 'Ab' < 'A` vaut False.
* d'égalité: 'HA' == 'ha' vaut False
* 'ou' in 'jour' vaut True
*  'ou' not in 'jour' vaut False


# Boucles
## Boucle bornée et non bornée
On rappelle que la différence entre une boucle bornée et non bornée est la definition d'un *variant* de boucle. Celui-ci varie sur une étendue qui est déclarée au depart.

*Revoir les definitions vues en TP de:*

* bloc
* indentation
* for, in, in range(), while

La fonction `range(X)` établit une liste de valeurs itérables, que prend le variant `i` qui est déclaré dans la boucle: `i` vaut successivement {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, de 0 à `X-1`.

Les scripts suivants sont équivalents:

```python
for i in range(10):
  pass

i = 0
while i < 10:
  i = i + 1
``` 


* Pour la boucle bornée, `i` est le variant de boucle, qui évolue à chaque itération de 0 à 9.
* Pour la boucle non bornée, on définit un variant de boucle au départ, `i` qui vaut zero. Puis on augmente `i` d'une unité à chaque itération, jusqu'à ce que sa valeur atteigne 9. Puis la condition `i < 10` n'est plus réalisée et le script poursuit après la boucle. 

## Exercice
Le module turtle de python permet de tracer (lentement) des figures géométriques. Voici quelques exemple de scripts et leur résultat:


{{< img src="../images/turtle_0.png" caption="tortue immobile, au depart" >}}
<br>

{{< img src="../images/turtle_1.png" caption="avance et tourne de 90° à gauche" >}}
<br>

{{< img src="../images/turtle_2.png" caption="avance, tourne de 90°, avance, tourne de 90°" >}}
<br>

> **a.** Trouver la correspondance entre le script et le parcours


{{< img src="../images/turtle_script.png" caption="correspondance" >}}

> **b.** Completer le tableau de suivi du programme pour chaque script:

**script 1:** 

| i | direction au debut du bloc | direction à la fin du bloc |
| --- | --- | --- |
| 0 |  |  |
| 1 |  |  |
| 2 |  |  |

**script 2:** 

| i | direction au debut du bloc | direction à la fin du bloc |
| --- | --- | --- |
| 0 |  |  |
| 1 |  |  |
| 2 |  |  |

# Les fonctions
**Def:** Une fonction permet d'encapsuler un bloc d'instructions et de lui donnéer un nom. 

On peut ensuite exécuter ce bloc en utilsant ce nom. On dit qu'on **appelle** cette fonction.


**Def:** Valeur de retour: Une fonction retourne en général une valeur. Après le mot-clé `return`:

```python
def hello():
  return 'Hi'

hello()
# 'Hi'
```

Une fonction peut avoir plusieurs **paramètres** qui permettent de transmettre des valeurs au bloc d'instructions. A l'interieur de la fonction, ces paramètres sont traités comme des variables, mais **locales**: Elles n'existent pas à l'exterieur du bloc. *(voir plus loin)*

Lors de l'*appel de la fonction*, le nombre d'arguments passés doit correspondre au nombre de paramètres attendus. (sauf si pour les paramètres ayant une valeur par defaut). Il y a alors une affectation: `paramètre = argument` 

```python
def carre(x):
  return x**2

carre(5)
# 25
``` 


{{< img src="../images/def_carre.png" caption="illustration du passage d'argument lors de l'appel de la fonction" >}}
## Portée des variables
Lorsqu’une fonction utilise des variables, celles-ci sont normalement propres à la fonction et ne sont pas accessibles à l’extérieur de celle-ci. On dit qu’il s’agit de variables locales, par opposition aux variables globales, du programme principal.

Exemple: si on définit une variable `a` avant la définition de la fonction, celle-ci sera différente du `a` de la fonction somme:

```python
a = 10
def somme(a, b):
    s = a + b
    return s
>>> somme(1,0)
1
```

Python permet d’affecter à l’intérieur d’une fonction, une variable globale. Pour cela, il faut déclarer la variable comme étant globale au début de la fonction:

```python
a = 10
def somme(b):
    global a
    s = a + b
    return s
>>> somme(0)
10
```

Modifier une variable globale depuis une fonction s’appelle un *effet de bord*. C’est considéré comme une mauvaise pratique, mais parfois indispensable.


# Modules
Une fonction peut être placée dans un autre fichier. On a alors:

* un fichier principal (le programme main)
* un ou plusieurs fichiers annexes (modules)

**Def:**Un **module** apporte des fonctions et des variables et permet une extension du langage. 



Le programme principal doit alors faire référence aux modules. L’une des manières est la suivante:

```python
import module
from module import *
import module as alias
```

*Exemples:*

| import du module | appel d'une fonction du module |
|--- |--- |
| import math | math.sin(x) |
| from math import sin | sin(x) |
| from math import * | sin(x) |
| import numpy as np | np.arrange(3, 15, 2) |

*Comment choisir la bonne méthode?* 

* Il est recommandé de ne charger que les fonctions utiles du module, avec: `from module import fonction1, fonction2`
* Si on importe le module entier, on préfera `import module` pour utiliser la fonction avec la notation pointée `module.fonction`.
* Pour executer l'un des modules depuis le shell python, on peut écrire:

```python
>>> from programme import *
```

Exemple: supposons que le programme suivant soit dans le fichier *test.py*

```python
# contenu du fichier test.py
a = 10
def somme(b):
    s = a + 10
    return s
```

On execute le programme dans le shell:

```python
>>> from test import *
>>> a
10
>>> somme(0)
20
```

le programme occupe alors une place privilégiée dans l’espace de noms de l’interpréteur python: c’est le *main*. On a accès aux variables et aux fonctions comme si elles avaient été définies depuis le programme principal ou depuis le shell.

## Prototyper une fonction
Une fonction doit être déclarée avant son utilisation. Cette déclaration est le prototype de la fonction. Le prototype doit indiquer à l’utilisateur le nom de la fonction, le type de la valeur de retour et le type des paramètres: [Lien](/docs/NSI/langages/page5/#prototypage-d-une-fonction)

# Erreurs et "bugs"
## Les erreurs de syntaxe
dues au non-respect des règles d'écriture de Python (parenthèses, :, ...)
## erreur de definition
dues à l'usage d'un nom qui n'a pas encore été défini (variable ou fonction)
## erreurs de type
`print(3 + 'cm')` génère l'erreur *unsupported operand type(s) for +: 'int' and 'str'
## erreurs d'execution
dues à des instructions que l'ordinateur ne sait pas exécuter, comme un division par zero.
## Erreurs de logique
n'occasionnent en général pas de message d'erreur, mais provoquent des problèmes inatendus (boucle infinie, autre...)

Pour prévenir des erreurs logiques, il peut être utile d'utiliser des *traces* dans son programme pour comprendre la cause de l'erreur. On rajoute généralement des sorties `print(variable)` pour les variables que l'on veut *suivre* lors de l'execution.

# Exercices
## Revisions
Revoir et connaitre les algorithmes et les programmes python correspondants à :

* la multiplication en n'utilisant que l'opérateur +
* la division entière en n'utilisant que l'opérateur -
* complément à 1 d'un nombre binaire
* calcul d'un angle à partir de la loi de Descartes (donnée)

## Programmer des fonctions pour calculer
On donne les valeurs suivantes:

* Distance **dTL** Terre - Soleil : 150 millions de km en moyenne
* vitesse **c** de la lumière : 300~000 km/s
* Rayon terrestre : **R** 6400 km
* Population terrestre : **p** 7,8 milliards d'habitants

On rappelle que la surface d'une sphere se calcule selon la loi : 

$$S = 4\times\pi\times R^2$$

1. Ecrire une fonction `minutes` qui retourne le nombre de minutes correspondant aux secondes. Cette fonction aura un paramètre `s`.
2. Ecrire une fonction `duree` qui calcule la durée de propagation d'un signal lumineux en fonction de la distance parcourue. Le paramètre sera **d**. Utiliser alors cette fonction pour calculer la durée du parcours de la lumière, du Soleil à la Terre.
3. Ecrire une fonction `surface` qui calcule la surface d'une sphere de rayon r. Le paramètre sera **r**.
4. Ecrire une fonction `densite` qui calcule la densité moyenne de la population de la Terre, sachant que 70,7% de la surface de la Terre est immergée. Cette fonction devra prendre en paramètre le nombre **N** d'habitants.

## Autres exercices
### addition de chaines de caractères 
Dans le Bourgeois Gentilhomme, le Maitre de Philosophie dit:

*On les peut mettre premièrement comme vous avez dit : « Belle Marquise, vos beaux yeux me font mourir d’amour ». Ou bien : « D’amour mourir me font, belle Marquise, vos beaux yeux ». Ou bien : « Vos yeux beaux d’amour me font, belle Marquise, mourir ». Ou bien : « Mourir vos beaux yeux, belle Marquise, d’amour me font ». Ou bien : « Me font vos yeux beaux mourir, belle Marquise, d’amour ».*

{{< img src="../images/bourgeois.png" link="https://youtu.be/LblUXhJUmJA?t=408" caption="La leçon d'orthographe. Bourgeois Gentilhomme. Molière (acte 2 scene 4)" >}}
> Définir plusieurs variables contenant les morceaux de la phrase "Belle Marquise, ...", de telle sorte que l'on puisse afficher avec la fonction `print` et l'opérateur `+` des chaines de caractères, les différentes variantes énoncées. (On ignore la distinction entre majuscule et minuscule).

### Instruction conditionnelle
1. Ecrire l'instruction conditionnelle qui affiche la phrase "il va faire très froid / froid / bon / chaud / très chaud" selon la valeur de la variable **t** (la température). Vous choisirez les seuils entre chaque niveau de température.
2. Ecrire une fonction `meteo` qui retourne "froid / froid / bon / chaud / très chaud" selon le paramètre **t**. Et écrire le programme qui appelle la fonction pour afficher "il va faire ...".

### Boucle
1. Ecrire un programme, puis une fonction qui inverse les lettres d'un mot. Par exemple, « ados » et « soda ». 
2. Ecrire un programme, puis une fonction qui affiche les chiffres d'un nombre à partir du dernier, un par ligne.

Par exemple, pour le nombre 1 234, le programme affiche:

```
4
3
2
1
```







