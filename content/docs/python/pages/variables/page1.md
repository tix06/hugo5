---
Title : variables
---

 <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
  <style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

# Les variables et les types natifs en Python

Cette rubrique contient 4 pages : 

* page 1 : variables, valeurs et structures de données
* page 2 : [méthodes et types](../page2/)
* page 3 : [TP sur les variables](../page3/)
* page 4 : [flash-card sur les variables](../ex1/)



# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>
  

# Les structures de données
Les *structures de données* définissent la manière avec laquelle sont stockées les données dans un langage de programmation. L'approche choisie pour modéliser des données renseigne sur ce que vous pensez des données.

Parmi les structures de données les plus courantes en python, on peut citer : les variables numériques, textuelles, les sequences (listes), les mappages (dictionnaires), les classes et les objets.

## Valeur et référence
Les **variables** en Python sont des **références nommées**.

Pour pouvoir accéder aux données, le programme d’ordinateur (quel que soit le langage dans lequel il est écrit) fait abondamment usage d’un grand nombre de variables de différents types.

Une variable est une étiquette associée à une valeur. Ce nom est à peu près quelconque (voir ci-après), mais pour l’ordinateur il s’agit d’une **référence** désignant une **adresse mémoire**, c’est-à-dire un emplacement précis dans la mémoire vive.

À cet emplacement est stockée une **valeur typée** bien déterminée.

{{< img src="../images/var_normalesup1.png" link="http://www.normalesup.org/~doulcier/teaching/python/01_variables.html" caption="image issue du cours " >}}
Cette valeur peut être en fait à peu près n’importe quel « objet » susceptible d’être placé dans la mémoire d’un ordinateur, par exemple : un nombre entier, un nombre réel, un nombre complexe, un vecteur, une chaîne de caractères, un tableau, une fonction, etc.

La programme suivant permet de consulter l'adresse mémoire d'une variable:

```python
a = 3
# Créer un objet de type int et lui associe le nom 'a'
type(a) #=> int
# Cet objet se trouve dans la mémoire de l'ordinateur
# à un endroit que l'on peut obtenir avec `id`:
id(a) #=> La position de l'objet nommé a dans la mémoire de l'ordinateur.
# AFfiche
94875962855936
```


# Les types numériques
Les types élementaires que peuvent prendre les variables et expressions sont : 

## les entiers (int)
**Un entier:** C'est un **nombre** qui n'a pas de point décimal. Les *algorithmes* utilisent en général des *entiers*, ce qui est avantageux pour les opérations de comparaison comme `=` ou `!=`.

*valeurs possibles*: 1, 2492042932330932, -23, etc expressions possibles : 13 + 3928, 34 * 2 + 10 // 3 % 5, etc

## les réels (float)
**Un flottant:** C'est un nombre qui possède un point décimal. Tout nombre, rationnel, irrationnel peut être représenté par un flottant. Les flottants sont très utiles par exemple en *Physique*, où l'on réalise des *mesures physiques*, ou pour le *calcul scientifique* de manière générale. Le problème, c'est que la plupart du temps, ce nombre n'est qu'*approché* par l'ordinateur lors de sa représentation en binaire. 

Ex : 4.3, 3.14159265359, 1,414 213 562, 9.02E-11

La *virgule* se représente par un *point*. Les float en Python ont une précision limité. Ils sont généralement codés sur 15 chiffres significatifs et encodés sur 53 bits.



## Opérations sur les nombres
Les opérateurs sur les nombres ont été vus dans le cours [Python les bases](http://localhost:1313/docs/python/index_python_D/).

* Certaines fonctions natives vont enrichir les possibilités de calcul:

*Exemple:* **arrondir** : fonction `round(nombre,decimales)`

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

# les booléens (bolean)
**Un booléen** a 2 valeurs possibles : **True** et **False**.

Un bolléen stocke le résultat d'une opération de comparaison. 

*Expressions possibles*: 0 == 0, 8+1 == 2 * 3, 13 >= a, etc.

Le booléen permet un branchement dans un algorithme (voir les structures conditionnelles): 

```python
if True:
  # instruction 1
else:
  instruction 2

while True:
  # bloc d'instructions
```

## Opérations sur les booléens - rappels
| operateur | symbole | exemple d'expression | resultat |
| --- | --- |--- | --- |
| intersection | and | True and False | False |
| reunion | or | True or False | True |
| negation | not | not False | True |
| est égal à | == | True == False | False |
| est différent de | != | True != False | True |

# le type de « rien » : `None`
C'est le type des instrutions. Valeur possible : None

`None` est utile par exemple lorsque l'on veut terminer un fonction sans valeur de retour:

```python
def f(x):
  # instructions
  return None
``` 

# Types séquences de texte (string)
Ce sont les chaines de caractères **(str)**

C'est une séquence constituée d'un ou plusieurs caractères, entourés de guillemets simples ou doubles.

Valeurs possibles : ‘Hello, world’, ‘la valeur de a est’, ‘234’ , etc. 

```python
citation_python = 'je disais, "être ou ne pas être,\ntelle est la question"'
print(citation_python)
# affiche
# être ou ne pas être,
# telle est la question
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



# Types séquentiels : les listes et les tuples
Une séquence est une structure de données qui stocke une collection d'éléments dans un ordre déterminé.
## Listes
**Definition:** Une **liste** est une **collection ordonnée d'objets**. Au niveau de la mémoire de l'odinateur, une liste *porte un nom*, et fait *référence à des espaces mémoire* pour chaque *élément* de liste. Ces éléments (espaces mémoires) font eux-même reference aux *emplacement mémoire* qui *stockent les valeurs* ou *objets*.

{{< img src="../images/var_normalesup2.png" link="http://www.normalesup.org/~doulcier/teaching/python/01_variables.html" caption="image issue du cours " >}}
En python: Une **liste** est entourée de **crochets** `[ ]`

Les éléments contenus peuvent être de tout type.

On accède à un élément d'une liste grace à sa position, appelée *indice*. Le premier élément a pour indice zero. 

{{< img src="../images/liste.png" caption="La liste `voyelles` est une collection contenant les caractères" >}}
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

### Construire une liste avec une boucle
Les boucles `while` et`for` permettent d’itérer sur les éléments d’une séquence: (testez le dans l'[editeur Python](#editeur-python))

```python
# Boucle while
squares = []
i = 0
while i <= 100:
  squares.append (i ** 2)
  i += 1

# Boucle for
squares = []
for i in range (101) :
  squares.append (i ** 2)
```

### Construire une liste par compréhension

```python
# Définition par compréhension
squares = [i ** 2 for i in range (101) ]
```

On peut combiner les expressions entre les crochets, en ajoutant par exemple une condition. Ainsi, si l'on veut uniquement le carré des nombres pairs (`if i % 2 == 0`):

```python
# carre des nombres pairs
squares = [i ** 2 for i in range (101) if i % 2 == 0]
```

## Tuples
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








# Compléments sur les variables et types
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
`int` peut aussi convertir des chaines en entier : `int('3')` donne `3`.

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

## Objets mutables et non mutables
En Python, il existe deux types d’objets: les **mutables** (listes, dictionnaires, sets, objets custo, etc) et les **non mutables** (string, int, float, tuple, etc).

Les mutables sont ceux qu’on peut modifier après leur création. Les non mutables sont ceux qu’on ne peut pas modifier après création.

Lorsque 2 références pointent sur le même objet, ce qui est possible avec les mutables, il faut s'attendre à ce que la modification de l'un entraine celle de l'autre (effet de bord).

Pour plus de précisions sur ces différences, voir le [TP sur les variables](../page3/)

### Portée des variables
Un **effet de bord** est une modification d'une variable qui affecte l'état du programme en dehors de la fonction où elle a lieu. Cela peut arriver avec des variables globales, déclarées en dehors de toute fonction.

Pour une variable `x` non mutable, déclarée dans le corps du programme, celle-ci peut être lue dans une fonction où elle n'a pas été definie. Par contre, pour la modifier dans cette fonction, il faudra la déclarer avec `global x` dans cette fonction.




# Les méthodes associées aux différentes séquences
voir la page [méthodes et types](../page2/)

# Liens
* Lien vers les [Flash cards](../ex1) sur les variables et séquences
* Compléments: valeur, references, espace de nom: [Lien vers le cours de normalesup](http://www.normalesup.org/~doulcier/teaching/python/01_variables.html)

