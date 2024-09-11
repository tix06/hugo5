---
Title: variables
---

# Introduction: le rôle clé des variables 
Les exemples suivants montrent le rôle crucial des variables dans les algorithmes...

## Compteur de passages
Un dispositif numérique, équipé d'un capteur, compteur le nombre de passage par une porte. 


{{< img src="../images/detecteur.jpg" caption="detecteur de passage à capteur infra rouge" >}}

L'algorithme utilisé comporte 3 parties:

* initialisation de la variable
* boucle avec condition d'execution
* modification de la variable

Il utilise la fonction: `coupure_faisceau`

Et la variable: `i` nombre de passages detectés

```
i = 0
repeter indefiniment:
  {
  si coupure_faisceau_lumiere():
    {
    i = i + 1
    fin si
    }
  fin repeter
  }
```

## Point neutre Terre-Lune
Dans l’un de ses célèbres romans intitulé De la Terre à la Lune, Jules Verne (1828-1905) relate les aventures de trois héros ayant pris place à l’intérieur d’un énorme projectile qu’un gigantesque canon, baptisé Colombiad, propulse en direction de la Lune. Lors de ce périple, Jules Verne fait allusion à un point neutre, situé à une distance d = 350 000 km du centre de la Terre où les forces
gravitationnelles exercées par la Terre et la Lune sur le projectile se compensent.



{{< img src="../images/terre_lune.png" caption="point neutre sur la droite Terre-Lune" >}}

L'algorithme utilisé comporte 3 parties:

* phase d'initialisation de la variable
* boucle avec condition d'execution
* modification de la variable

Il utilise les fonctions: `F1` force de gravitation de la Terre, `F2` force de gravitation de la Lune

Et la variable: `d` distance à la surface de la Terre

```
d = 0
repeter tant que F1 (d) > F2(d):
  {
  d = d + 1
  fin repeter
  }
afficher d
```



# Variables
**1. Definition:** Une variable sert à stocker une valeur, qui peut être un nombre, une chaine de caractère, ou autres. Une variable est identifiée par un nom, et pointe vers un espace mémoire.

{{< img src="../images/var5.png" alt="affectation variable" caption="VARIABLE = espace de STOCKAGE" >}}

**2. Quel nom peut-on choisir pour une variable?:** On peut choisir une lettre simple, minuscule ou majuscule, ou une chaine de caractères SANS espaces, et commençant obligatoirement par une LETTRE. Le nom peut contenir certains caractères spéciaux comme par exemple `_`. *(ne pas utiliser le signe `-`, utilisé pour une soustraction entre 2 variables)*.

Exemples de noms de variables:

* x
* y
* a
* B
* longueur_L1
* nom
* age
* personne3
* Score
* Points_de_vie
* ...

L'idée est de choisir un nom assez explicite, et d'éviter d'utiliser trop souvent x, y, a, b, c, ...

**3. Affectation** On **affecte** une valeur à une variable en utilisant l'opérateur `=`.

Par exemple, pour *affecter* la valeur 5 à la variable x, on fait:

```python
x = 5
```

Pour vérifier la valeur d'une variable, il suffit d'écrire celle-ci:

* soit toute seule dans une cellule du notebook

```python
x
# retourne 
5
``` 

* soit à la *dernière ligne* de la cellule du notebook:

```python
x = 5
x
# retourne 
5
```

* Soit avec la fonction `print` (ne pas mettre de guillemets)

```python
x=5
print(x)
# retourne 
5
``` 

On peut modifier la valeur d'une variable existante. On peut méme lui affecter le résultat d'une opération:

```python
x = 12/2
x
# retourne
6.0
```




Et utiliser la valeur de cette même variable pour l'opération:

```python
x = x + 1
x
# retourne
7.0
```

Pour vérifier le type d'une variable, utiliser la fonction `type`

```python
type(x)
float
```

**Affectation multiple:** On peut affecter une valeur à plusieurs variables en une seule ligne, ce qui amèliore la lecture d'un script:

```python
a = 1
b = 2
```

peut être remplacé par:

```python
a, b = 1, 2
```

**4. Opérations sur les variables**
Une variable a un **TYPE** qui est défini lors de l'affectation. Python s'adapte lorsque vous faites une affectation et choisit le type correspondant.

Pour démarrer, nous verrons les TYPES **str** (chaine de caractère), **int** (nombre entier) et **float** (nombre décimal, en virgule flottante).

Les opérations possibles sur une variable dépendent de son type. 

* Pour les variables de type nombre **int** et **float**, on peut utiliser les opérateurs `+,-,*,/,**,//,%`
* Pour les variables de type **str** on peut aussi utiliser les opérateurs `+,*` mais le résultat est différent (opérateurs de concaténation).


# Editeur Python
Ouvrir dans *winpython > python QTConsole*


{{< img src="/images/qtconsole.png" >}}

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

## Travaux pratiques: opérations sur les nombres

> Tester les scripts suivants dans l'editeur Python. Pour cela, recopier dans l'ordre, et dans la même cellule, chacune des instructions du script, et executer celle-ci. Repondre ensuite aux questions.

### Script 1
Incrémenter une variable...

```python
age = 0
age = age + 1
age
```

* **Question a:** quelle est la valeur de `age` à la fin du script? 

### Script 2
Le programme suivant permet de connaitre en quelle année un enfant, qui a 12 ans en 2022, aura 17 ans

```python
age = 12
annee = 2022
annee = annee + 17 - age
annee
```

* **Question b:** en quelle année aura-t-il 17 ans?

### Script 3
On veut réaliser les opérations suivantes: on veut *doubler* `nombre`, puis *soustraire* 10 au resultat, le *mettre au carré*, puis soustraire 5:

```python
nombre = 5
nombre=2*nombre
nombre=nombre-10
nombre=nombre**2
nombre=nombre-5
```

* **Question c:** Quel est le résultat (c'est à dire la valeur finale de `nombre`) pour une valeur de depart `nombre = 5`?

<!--
### Script 4
Écrire un programme dans l’éditeur qui :

- affecte 3 à la variable `nombre` 
- Ajoute 7 au triple du nombre.
- Multiplie le résultat par le nombre lui-même.
- Soustrait au résultat le nombre 1 ;
- Affiche le résultat obtenu.

Ne pas utiliser de nouvelles variables pour les résultats intermédiaires. Seulement `nombre`


* **Question d:** Quel est le résultat?

-->

### Script 4: permuter la valeur de 2 variables
On veut mettre la valeur de `a` dans `b` et celle de `b` dans `a`. Le problème est que lorsque l'on fait...

```python
b = a
a = b
```

... on se retrouve avec les mêmes valeurs pour `b` et pour `a`. Il n'y a pas eu d'echange. L'idée est d'utiliser une troisième variable, `c` pour stocker la valeur de `b`, puis de l'affecter à `a`


* **Question d:** Ecrire la série d'instructions correspondantes. Puis vérifier qu'il y a bien eu échange entre les variables.

## Opérations sur les chaines de caractères

### Script 5
Associer des chaines de caractères.

```python
debut = "bonne annee"
milieu = " "
fin = "grand mere"
message = debut + milieu + fin
message
```

* **Question e:** Ecrire un nouveau script qui construit le message suivant: `Ho Ho Ho Ho Ho Ho Ho Ho Ho Ho`, où le nombre de `Ho` est stocké dans une variable N. 

*Astuce: utiliser l'opérateur* `*`

### Script 6
Associer des valeurs numériques et des chaines de caractères

```python
age = 21
nom = "Kevin"
message = "mon nom est " + nom + ", et j'ai " + age + " ans"
message
```

* **Question f:** Le script s'execute t-il, ou bien renvoie-t-il une erreur? Quelle erreur le cas écheant?
* **Question g:** Modifier l'avant derniere ligne par: `message = "mon nom est " + nom + ", et j'ai " + str(age) + " ans"`. Le script fonctionne t-il? Que renvoie t-il?

*Remarque:* La fonction `str` va tranformer la valeur numerique `age` en une chaine de caractères (les caractères "2" et "1").

*Tester également l'instruction:* `print("mon nom est ",nom ," et j'ai ",age, "ans")`

* **Question h:** A quoi sert la fonction `str`? 

### Script 7
Afficher avec la fonction `print`

```python
a = 45
b = 26
c = a % b
print('le reste de la division de ' + str(a) + ' par ' + ...)
```

* **Question i:** Completer la derniere ligne du script pour afficher la phrase suivante: `Le reste de la division de 45 par 26 est egal a 19` Vous ne devrez pas écrire les chiffres 45, 26 et 19 dans le message. Seulement utiliser les variables, ou une opération sur ces variables.
<!--
Une autre méthode pour construire une chaine de caractères est d'utiliser la fonction `format`:

Cela créé une chaine de caractères mise en forme avec des variables de types divers. Essayez dans une cellule:

```python
message = 'le reste de la division de {} par {} est egal à {}'.format(a, b, a%b)
print(message)
print(type(message))
print(type(a))
print(type(a//b))
```

Les variables utilisées pour construire la chaine de caractère se placent au niveau des `{ }` et sont énoncées dans l'ordre, dans la fonction `format`.
-->

Nous avons vu qu'une chaine de caractère pouvait être construite comme une association de plusieurs chaines de caractères. Une chaine de caractères est de type *string* (ou `str`) en python.

Pour connaitre le type d'une variable, on utilise la fonction `type`

> Testez chacune des instructions suivantes pour vérifier le type des différentes variables

```python
a = 45
type(a)
b = 26
type(b)
type(a//b)
c = a % b
type(c)
d = a / b
type(d)
m = str(a)
type(m)
```

* **Question j1:** Compléter le tableau:

| x= |  type(x) |
| --- | --- |
| 45 |  |
| 45%26 | | 
| 45/26 |  | 
| 45//26 |  | 
| str(45) |  |

Pour connaitre l'emplacement de la valeur d'une variable, dans la mémoire de la machine, utiliser la fonction `id`:

```python
a = 45
b = 26
print(id(a))
print(id(b))
```



* **Question j2:** L'emplacement en mémoire du 45 (c'est à dire de la valeur associée à `a`), est il le même que le 26 (valeur de  `b`)? 

### Script 8
Calculer en physique

Dans une cellule Python, 

* commencez par attribuer 100 à la variable `m`, et 20 à la variable `v`
* calculer puis afficher E, l'energie cinetique pour un systeme de masse 100kg et de vitesse $20m.s^{-1}$, selon la loi:

$$Ec = \tfrac{1}{2}m.v^2$$

* **Question k:** Quelle est l'expression que vous avez saisie en langage Python? Quelle est la valeur calculée pour l'énergie cinetique?

* **Question l:** Construire une chaine de caractères précisant que vous affichez l'energie cinetique, avec les valeurs de m et v, et le résultat du calcul de l'énergie cinétique. Recopier ici cette instruction en python. Utiliser les variables m, v et Ec.

# Portfolio
* Comment se nomment *en python* les 4 types primitifs que l'on a vus lors de ces premieres séances?
* Le changement de type entre variables se fait grace aux fonctions `str`, `float`, `int`, et `bool`
  * Comment transformer la chaine "12" en une valeur entière égale à 12? "12" => 12
  * Comment réaliser l'opération inverse? 12 => "12"
  * Comment transformer la chaine "12" en un nombre flottant? "12" => 12.0
* Qu'est-ce qu'une affectation multiple, en une seule ligne d'instruction?
* Comment échange t-on la valeur de 2 variables `a` et `b`?
* Pourquoi l'instruction: `print("aujourd'hui j'ai "+ 18 +"ans")` ne fonctionne t-elle pas? Corriger cette expression.
* Quel est le type pour le résultat d'une division simple? D'une division avec 2 barres `//`? De l'opérateur modulo `%`?


# Liens
* [TP1 sur les opérations et types de base](../../generalites/page2_D)
* [TP2 sur les variables](../../variables/page4_D/)
* [cours-TD sur les conditions](../../conditions/page2_D/)

<!--
* [cours: structures conditionnelles](../../conditions/page2/)
* [TP3 conditions et fonctions](../../conditions/page3/)
* [TP4 Boucles non bornées - while](../../conditions/page4/)
-->

