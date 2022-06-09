---
Title : variables
---

# Variables et valeurs

Cette rubrique contient 4 pages : 

* page 1 : variables, valeurs et structures de données
* page 2 : [méthodes et types](../page2/)
* page 3 : [TP sur les variables](../page3/)
* page 4 : [flash-card sur les variables](../ex1/)


## Les structures de données
Les *structures de données* définissent la manière avec laquelle sont stockées les données dans un langage de programmation. L'approche choisie pour modéliser des données renseigne sur ce que vous pensez des données.

Parmi les structures de données les plus courantes en python, on peut citer : les variables numériques, textuelles, les sequences (listes), les mappages (dictionnaires), les classes et les objets.

## Valeur et référence
Pour pouvoir accéder aux données, le programme d’ordinateur (quel que soit le langage dans lequel il est écrit) fait abondamment usage d’un grand nombre de variables de différents types.
Une variable est une étiquette associée à une valeur. Ce nom est à peu près quelconque (voir ci-après), mais pour l’ordinateur il s’agit d’une **référence** désignant une **adresse mémoire**, c’est-à-dire un emplacement précis dans la mémoire vive.
À cet emplacement est stockée une **valeur** bien déterminée. 

Cette valeur peut être en fait à peu près n’importe quel « objet » susceptible d’être placé dans la mémoire d’un ordinateur, par exemple : un nombre entier, un nombre réel, un nombre complexe, un vecteur, une chaîne de caractères, un tableau, une fonction, etc.

## Les types élementaires
Les types élementaires que peuvent prendre les variables et expressions sont : 

### les entiers (int)
C'est un nombre qui n'a pas de point décimal.

valeurs possibles: 1, 2492042932330932, -23, etc expressions possibles : 13 + 3928, 34 * 2 + 10 // 3 % 5, etc

### les réels (float)
C'est un nombre qui possède un point décimal.

Ex : 4.3

La virgule se représente par un point. Les float en Python ont une précision limité. Ils sont généralement codés sur 15 chiffres significatifs et encodés sur 53 bits.

### les booléens (bolean)
valeurs possibles : True et False
expressions possibles : 0 == 0, 8+1 == 2 * 3, 13 >= a, etc.

### les chaines de caractères (str)

C'est une valeur composée d'un ou plusieurs caractères, entourés de guillemets simples ou doubles.

Valeurs possibles : ‘Hello, world’, ‘la valeur de a est’, ‘234’ , etc. 

```python
citation_python = 'je disais, "être ou ne pas être,\ntelle est la question"'
print(citation_python)
# affiche
# être ou ne pas être,
# telle est la question
```

### le type de « rien » : `None`
C'est le type des instrutions. Valeur possible : None



## Typage dynamique
Python est un langage à typage dynamique, ce qui signifie qu'il n'est pas necessaire de déclarer le type de donnée que représentera une variable (c'est la différence avec le typage *statique*). C'est l'interpréteur qui examine la donnée tout au long de la vie du programme et choisit le type.

## Changer de type
Certaines opérations nécessitent que la donnée associée à une variable soit dans un format précis. Cela peut obliger à modifier le type de cette variable, ce qui transforme en adaptant la donnée : 

* transformer en float : fonction `float`
```python
float(3)
# affiche 3.0
float('3.8')
# affiche 3.0
```

* transformer en int : fonction `int`
convertit par exemple un flottant en entier en éliminant la partie décimale du nombre : 

```python
int(3.5)
affiche 3
``` 
`int` peut aussi convertir des chaines en entier : `str('3')` donne `3`.

## Nommer une variable
Un nom de variable est une séquence de lettres (a→z,A→Z) et de chiffres (0→9), qui doit toujours commencer par une lettre, ou un underscore `_`.

Des bons noms de variables doivent être courts mais descriptifs : 

```python
prenom = 'albert'
nom_famille = 'einstein'
age = 42
```

## Affectation simple et multiple
**Affectation simple :**

Les termes « affecter une valeur » ou « assigner une valeur » à une variable sont équivalents. Ils désignent l’opération par laquelle on établit un lien entre le nom de la variable et sa valeur (son contenu).

*Exemple :* `a = 2` 

Lorsque l'ordinateur execute cette instruction, il va : 

* créer et mémoriser un nom de variable ;
* lui attribuer un type bien déterminé (ce point sera explicité à la page suivante);
* créer et mémoriser une valeur particulière;
* établir un lien (par un système interne de pointeurs) entre le nom de la variable et l’emplacement mémoire de la valeur correspondante.

Le nom d'une variable est une référence, mémorisée dans une zone particulière de la mémoire que l’on appelle espace de noms, alors que la valeur correspondante est située ailleurs.

**Affectation multiple :**

Il est possible de réaliser une affectation pour plusieurs variables d'un seul coup : 
```python
a, b, c = 3, True, 'hello'
b
# affiche True
```

## Opérations sur les nombres
Avec les nombres, l'utilisation de l'addition, soustraction ou de la multiplication :

  * avec un entier renvoie un entier.

  * Et lorsqu'il y a au moins un flottant, cela renvoie un flottant : 

      `2.0 * 3` affiche `6.0`

    Toutes les opérations de division renvoient des flottants : 

      `10/5` affiche `2.0` 

* L'exposant est réalisé avec 2 astérisques : 

      `2**5` renvoie `32`

* l'opérateur `%` est l'opérateur modulo : 

    `89 % 60` renvoie `29`

* L'opérateur `//` est la partie entière de la division : 

    `89 % 60` renvoie `1`

* arrondir : fonction `round(nombre,decimales)`

    `round(3.1415926,2)` donne `3.14`

* La bibliothèque **math** contient de nombreuses fonctions : 

```python
import math
math.sqrt(9)
# affiche 3.0
PI = math.pi
PI
# affiche 3.141592653589793
math.sin(PI/2)
1.0
```

## Opérations avec les chaines de caractères
Les opérateurs `+` et `*` sont autorisés dans les expressions avec les chaines de caractère.

Le `+` réalise un *concaténation* de 2 chaines. Le `*` répète et concatène la chaine : 

```python
a, b = 'Alan', 'Turing'
a + b 
# affiche AlanTuring
a * 3
# affiche AlanAlanAlan
```

## Opérations sur les booléens
| operateur | symbole | exemple d'expression | resultat |
| --- | --- |--- | --- |
| intersection | and | True and False | False |
| reunion | or | True or False | True |
| negation | not | not False | True |
| est égal à | == | True == False | False |
| est différent de | != | True != False | True |

# Séquences : les listes et les tuples
Une séquence est une structure de données qui stocke une collection d'éléments dans un ordre déterminé.
## Listes
**Definition:** Une **liste** est une collection ordonnée d'objets.
 Une **liste** est entourée de **crochets** `[ ]`

Les éléments contenus peuvent être de tout type.

On accède à un élément d'une liste grace à sa position, appelée *indice*. Le premier élément a pour indice zero. 

<figure>
  <img src="../images/liste.png">
  <figcaption>La liste `voyelles` est une collection contenant les caractères<br>
  "e","i" et "o"</figcaption>
</figure>

Un indice négatif donne accès à la liste à partir du dernier élément.

```python
voyelles = ['e','i','o']
voyelles[0]
# affiche e
voyelles[-1]
# affiche o
voyelles
# affiche ['e','i','o']
```
Les listes sont **mutables** : On peut modifier un seul de ses éléments à partir de son indice : 
```python
voyelles[2] = 'y'
voyelles
# affiche ['e','i','y']
```

## tuples
Un *tuple* est entouré de **parenthèses** `( )`

On accède à l'un des éléments à l'aide de son indice, comme pour les listes.

Par contre, le tuple est **non mutable** : on ne peut pas en modifier l'un de ses éléments. Il faut refaire, au besoin, une affectation complète de tout le tuple.

```python
elementaire = ('CP','CE1','CE2')
elementaire[1]
# affiche CE1
elementaire[2] = 'CM2'
# affiche TypeError
elementaire = ('CP','CE1','CM2')
elementaire
# affiche ('CP','CE1','CM2')
``` 

# Mappages : les dictionnaires
Un *mappage* est une structure de données qui relie 2 informations ou plus, appelées *paires clé : valeur*. En python, cette structure est le dictionnaire.

Un dictionnaire est entouré d'*accolades* `{ }`. Les paires sont séparées par une virgule.

Par exemple, pour créer un dictionnaire non vide, on peut faire : 
```python
capitales = {'France':'Paris','Italie':'Rome','Allemagne':'Berlin'}
``` 
Mais on peut aussi ajouter chaque paire en faisant :
```python
capitales = {} # dictionnaire vide
capitales['France'] = 'Paris'
capitales
# affiche {'France': 'Paris'}
```

Pour accéder aux clés d'un dictionnaire, aux valeurs, aux paires clé-valeurs, on utilisera les méthodes `keys`, `value`, et `items`. Voir la page [méthodes et types](../page2/)




# Objets mutables et non mutables
En Python, il existe deux types d’objets: les mutables (listes, dictionnaires, sets, objets custo, etc) et les non mutables (string, int, float, tuple, etc).

Les mutables sont ceux qu’on peut modifier après leur création. Les non mutables sont ceux qu’on ne peut pas modifier après création.

Pour plus de précisions sur ces différences, voir le [TP sur les variables](../page3/)

# Les méthodes associées aux différents types
voir la page [méthodes et types](../page2/)

