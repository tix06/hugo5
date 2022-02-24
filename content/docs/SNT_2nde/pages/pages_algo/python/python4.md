---
Title: Programme informatique
---

# A quoi sert un programme informatique
## Que fait un programme informatique?
Ce qui fait fonctionner un appareil numérique, c'est un **programme**: 
C'est donc grâce à un programme que l'on fait fonctionner un ordinateur, une console de jeux, une machine à laver, le poste de pilotage d'un avion, un guichet automatique bancaire… 

<figure>
  <img src="../images/machines.png">
<figcaption>des <i>machines</i> numériques</figcaption>
</figure>

Mais c'est aussi grâce à un programme que ces machines peuvent fournir un service: un logiciel de bureautique, un jeu, le lavage du linge, le pilotage automatique, ou le retrait d'argent de son compte....

Aujourd'hui, le smartphone est l'objet qui nous permet d'executer de nombreux programmes, en permanence.

<figure>
  <div>
  <img src="../images/iphone.jpg">
<figcaption>applications et smartphone</figcaption>
</div>
</figure>

On confond parfois **programme informatique** et **logiciel**, ou **application**.
Un logiciel peut comporter plusieurs programmes. 

## Quelques repères historiques
* En **1842**, la comtesse Ada Lovelace crée des diagrammes pour la machine analytique de Charles Babbage. Ces diagrammes sont considérés aujourd'hui comme étant les *premiers programmes* informatiques au monde
* **1936**: Première formulation de ce qu'est un *programme* par Alan Turing.
* **1940**: Les premiers ordinateurs. Les programmes informatiques étaient alors conçus par des analystes, rédigés par des programmeurs et saisis par des opératrices sur des bandes type cartes en carton perforé.
* Le premier système d'exploitation a été développé en **1954**. 
* **1970**: début de la programmation structurée. Depuis, la variété et mise à jour des langages n'a cessé de rendre plus accéssible la programmation.

<figure>
<img src="../images/frise.jpg">
<figcaption>Compléter la frise</figcaption>
</figure>

# Algorithme
Un algorithme traduit le cahier des charges d'un programme en un langage naturel et non ambigü, où les instructions sont séquencées.

## Quelques exemples
### Origami
* **Cahier des charges:** *Réaliser une grue (l'animal) par 10 pliages succéssifs d'une feuille de papier.*
* **Algorithme:**

<figure>
<img src="../images/origami.png">
<figcaption>extrait de la séquence de pliage</figcaption>
</figure>

> L'algorithme du pliage de l'origami présente une **structure linéaire**. On peut visualiser celui-ci à l'aide d'un [algorigramme](https://www.playhooky.fr/technologie/algorithmes-algorigrammes/)

<figure>
<img src="../images/algorigramme1.png">
<figcaption><a href="https://www.playhooky.fr/technologie/algorithmes-algorigrammes/">algorigramme</a> du pliage</figcaption>
</figure>

### Code PIN
* **Cahier des charges:** *Demander à l'utilisateur du smartphone de saisir son code PIN, et s'il echoue 3 fois, lui demander son code PUK*
* **Algorithme:** L'un des deux algorithmes correspond bien au cahier des charges



```python
# algorithme 1
Répéter 3 fois:
  demander code PIN
Si code PIN incorrect
  demander code PUK
Sinon
  passer
```
Ce premier algorithme montre une **structure alternative**: on commence par tester la condition ; si elle est vraie, l’action 2 est exécutée, sinon, c'est l'action 3.

<figure>
<img src="../images/algorigramme2.png">
<figcaption><a href="https://www.playhooky.fr/technologie/algorithmes-algorigrammes/">algorigramme</a> de l'algo n°1</figcaption>
</figure>

```python
# algorithme 2
demander code PIN
nbessai = 1
Tant que code PIN incorrect et nbessai < 3:
  demander code PIN
  nbessai = nbessai + 1
Si code PIN incorrect:
  demander code PUK
```

Dans ce 2e algorithme: 

* on utilise une *variable* appelée `nbessai`. Sa valeur est d'abord mise à 1, puis évolue au fur et à mesure que le programme avance.
* on utilise une structure qui amène une répétition. (une **structure itérative**): `Tant que <condition> …`qui répète le bloc tant que la condition est VRAIE.

**Questions:**

1. Pour l'algorithme 1, compléter l'algorigramme.
2. Trouver lequel des 2 algorithmes correspond bien au cahier des charges.
3. Pour les 2 algorithmes: Expliquer ce que fait le programme si l'utilisateur entre 2 fois un code PIN erroné, puis entre le bon (au 3e essai).
4. Pour l'algorithme 2: expliquer ce que fait le programme lorsque l'on entre 3 code PIN erronés.




## Les ingrédients d'un algorithme
Les instructions relatives aux ingrédients d'un algorithme seront données en langage naturel, mais à la manière du langage Python.

### Données: Variables et opérations
Une variable stocke une valeur et peut être utilisée pour des opérations.

(voir [introduction à la programmation](/docs/SNT_2nde/pages/pages_algo/python/python2/index.html))

### Interface: Entrées/Sorties
Un algorithme doit fournir une interface qui permet d'interagir avec l'utilisateur. Il doit pouvoir lire et entrer des données.

Ce sont les instructions: *afficher* et *entrer* qui réalisent ceci.

```python
afficher("un message")
afficher(une_variable)

x = entrer("position")
```


### Contrôler le programme: Structures conditionnelles
Cette structure permet d’effectuer une séquence d’opérations selon la valeur d’une condition.

Une condition est une expression logique (on dit également booléenne), dont la valeur est vrai ou faux. 

```python
Si ( <expression_logique> ) alors 
  <bloc_alors>
Sinon 
  <bloc_sinon>
```

### Contrôler le programme: Boucles
* Les structures répétitives permettent d’exécuter plusieurs fois un bloc d’opérations, en faisant varier automatiquement une variable de boucle. 

```python
Pour <identificateur_variable> de <valeur_début> a <valeur_fin> faire
 <bloc_opérations> 
```

* Les structures répétitives permettent d’exécuter plusieurs fois un bloc d’opérations, tant qu’une condition (de continuation) est satisfaite.

```python
Tantque ( <condition> ) faire
 <bloc_opérations> 
```

### Structure: Fonctions et Procedures
Les fonctions permettent de rendre le script plus efficace, plus facile à lire et à vérifier. Un bonne pratique est de faire régulierement du remaniement de son code : C’est à dire ré-écrire les parties du programme qui fonctionnent et les mettre dans une fonction. Cela evite aussi les répétitions. On remplace alors le code par un appel à une fonction.

La programmation se fait en deux temps: On commence par programmer la fonction

```python
fonction carre(x)
  y = x * x
  return y
```

Puis on appelle cette fonction:

```python
a = 10
carre(10)
```

Le programme retourne dans ce cas la valeur 100.


# Langages informatiques
Les instructions qu'un ordinateur devra exécuter doivent pouvoir être exprimées de manière précise et non ambiguë.

# Définitions
## Un programme informatique 
C'est un ensemble d'opérations destinées à être exécutées par un ordinateur.

Un **programme source** est un code écrit par un informaticien dans un **langage de programmation**. Il peut être **compilé** vers une forme binaire ou directement **interprété**. Au final, les instructions seront traduites en **binaire**, afin qu'elles soient exécutées par un microprocesseur.

## Un langage de programmation
C'est une notation utilisée pour exprimer des algorithmes et écrire des programmes. 

## Un algorithme
Un algorithme est un procédé pour obtenir un résultat par une succession de calculs, décrits sous forme de termes simples dans une langue naturelle.
C'est une suite finie et non ambigüe d'instructions, permettant de resoudre certains problèmes.

## Un bug
Un bug est un défaut de construction dans un programme. Les instructions que l'appareil informatique exécute ne correspondent pas à ce qui est attendu, ce qui provoque des dysfonctionnements et des pannes.

# Exercices
## Ex 1: code PIN et code PUK
Le programme suivant, est-il celui utilisé pour le deverouillage d'un smartphone? Pour repondre à la question:

* dessiner l'algorigramme correspondant.
* Expliquer ce que fait le programme lorsque l'utilisateur se trompe 3 fois de suite de code PIN, puis parvient enfin à rentrer le bon (au 4e essai).

```python
# algorithme 3
demander code PIN
Tant que code PIN incorrect:
  demander code PIN
demander code PUK
```

## Ex 2: Application pour la course à pied
* **Cahier des charges:** *Une application de course à pieds sur spartphone propose à l'utilisateur de rentrer les distances parcourues chaque jour. Lorsque l'utilisateur a atteint son objectif, fixé à 42 km, le décompte s'arrête. L'ecran affiche alors: **Félicitations***
* **Algorithme:**

```python
total = 0
Tant que total ...    :
  distance = entrer("Saisir la distance : "))
  ...
Afficher("Félicitations")
```

*Remarque:* l'instruction `distance = entrer("Saisir la distance : "))` va afficher *Saisir la distance :*, puis stocker celle-ci dans la variable *distance*.

* Compléter l'algorithme.
* Expliquer ce que fait le programme lorsque l'utilisateur entre successivement: 10, 12, 10, 15.

## Ex 3: Diamètre d'ouverture de l'appareil photographique
* **Cahier des charges:** *Pour l'appareil photo numérique: Mesurer le flux lumineux. Si celui-ci est supérieur à 100 Lux, diminuer le diamètre d'ouverture. S'il est infèrieur ou égal à 100 Lux, ouvrir davantage.*

* **Algorithme:**

```python
Répeter indefiniment:
  Mesurer la lumière et stocker dans L
  Si L ...  :
    ...
  Sinon:
    ...
``` 

> A vous de jouer: Compléter l'algorithme.

*Remarque:* on peut utiliser les fonctions `diminuer` et `augmenter` pour agir sur l'ouverture de l'appareil photo. 

# Exercices supplementaires
## Ex 1
On donne le script d'un programme en langage naturel, ainsi que sa traduction en Python. Déterminer, à la fin du programme, les valeurs stockées dans les variables a, b et c.

* Programme 1 en langage naturel

```python
a = 10
b = 5
c = 1
si ( a == b )
 c = 2 * c
sinon
 a = a + 1
 b = b div 2
```

* Programme 1 en langage Python

```python
a = 10
b = 5
c = 1
if ( a == b ):
 c = 2 * c
else:
 a = a + 1
 b = b / 2 
```

## Ex 2
On donne le script d'un programme en langage naturel, ainsi que sa traduction en Python. Déterminer, à la fin du programme, la valeur stockée dans la variable a.

* Programme 2 en langage naturel

```python
a = 10
Tantque ( a different de 0 ) faire
 afficher ( 2 * a )
 a = a - 1 
```

* Programme 2 en langage Python

```python
a = 10
while ( a != 0 ):
 print 2*a
 a = a - 1 
```

## Ex 3
On donne le script d'un programme en langage naturel, ainsi que sa traduction en Python. Déterminer, à la fin du programme, la valeur stockée dans la variable a.

* Programme 3 en langage naturel

```python
pour i de 1 a n faire
 a = 3 * i
 Afficher ( a )
```

* Programme 3 en langage Python

```python
for i in range(1,n+1):
 a = 3 * i
 print a
```

*range(a,b) permet de parcourir les valeurs a, a+1, …, b-1 (b non compris)*

# Liens et ressources
* Programme informatique: [wikipedia](https://fr.wikipedia.org/wiki/Programme_informatique#:~:text=Un%20programme%20informatique%20est%20un,forme%20binaire%20ou%20directement%20interpr%C3%A9t%C3%A9.)
* exercice sur algorithme issu du Bordas 3.0 SNT (code PIN)
* exercice sur algorithme issu du Delagrave SNT (course à pieds)