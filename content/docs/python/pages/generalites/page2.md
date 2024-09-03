---
Title: calculer en python
bookShowToc: false
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

# Les types
En python, les objets **natifs de base** ont pour type:

* nombre entier: integer ou `int` en Python
* nombre réel décimal: `float` 
* chaine de caractères: `str`
* les valeurs logiques: booléen `bool`

Lorsque l'on présente une valeur dans le programme, le langage s'adapte selon le type, comme on le verra plus loin.


## Les nombres entiers et décimaux
**Un entier: type int** C'est un **nombre** qui n'a pas de point décimal. Les *algorithmes* utilisent en général des *entiers*, ce qui est avantageux pour les opérations de comparaison comme `==` ou `!=`.

*valeurs possibles*: `1, 2492042932330932, -23,...` 

*expressions possibles*: `13+3928, 34*2+10//3, 12%5, 2**8, ...` 

Un entier peut avoir une valeur aussi grande que celle que la machine peut stocker. Pour un nombre entier non signé, stocké sur 32 bits, cette valeur maximale vaut $2^{32}-1$

**un nombre entier négatif: type int** s'écrit avec un $-$ devant: $-10$ par exemple. Les entiers signés, codés sur 32 bits ont des valeurs qui s'étendent entre $[-2^{31},2^{31}-1]$

**un nombre décimal: type float** s'écrit avec un *point* comme séparateur, comme par exemple: `6.02` 

Les nombres exprimés avec l'opérateur `e` (*puissance de 10*), sont aussi des *float*, des décimaux:

```python
> a = 12e3 # a vaut 12000
> print(a)
12000.0
> type(a)
float
```


Les *float* en Python ont une précision limité. Ils sont généralement codés sur 15 chiffres significatifs et encodés sur 53 bits.

## Chaine de caractère
C'est une séquence constituée d'un ou plusieurs caractères, entourés de guillemets simples ou doubles.

Notez que des chiffres mis entre guillemets sont des chaines de caractères et ne peuvent pas être manipulés comme des nombres (voir plus loin).

```python
"Bonjour"
'Hello'
"18"
"Un longue chaine de caractères"
'une autre chaine'
```

Certains caractères spéciaux ne sont pas affichés, mais permettent la mise en forme: 

* Par exemple, les caractères `\n`:

```python
citation_python = 'je disais, "être ou ne pas être,\ntelle est la question"'
print(citation_python)
# affiche
# être ou ne pas être,
# telle est la question
```

* Ou bien les accolades `{}` dans une expression formatée:

```python
m = 100
Ec = 1200
resultat = "Pour le systeme m = {} et E = {}".format(m,Ec)
print(resultat)
# affiche
# Pour le systeme m = 100 et E = 1200
```

## Les valeurs logiques
Ce sont les valeurs `True` et `False`. On peut les combiner dans des forules logiques avec les opérateurs `not`, `and`, `or`.

Une opération de comparaison, utilisant les signes  `==`, '!=', `>`, `>=`, `<`, `<=` retourne un booléen `True` ou `False.

*Expressions possibles*: `0 == 0, 8+1 == 2 * 3, 13 >= a, ...`

Le booléen permet un branchement dans un algorithme (voir les structures conditionnelles): 

```python
if True:
  # instruction 1
else:
  # instruction 2

# execution du bloc d'instruction 1

if False:
  # instruction 1
else:
  # instruction 2

# execution du bloc d'instruction 2
```

On peut souhaiter executer infiniment le même bloc d'instructions:

```python
while True:
  # bloc d'instructions
```

# Les opérations de base
**1.** Un langage informatique permet de réaliser des opérations sur des valeurs. L'écriture de ces opétations peut différer de ce que l'on écrit avec la calculatrice. Voici la liste des opérateurs en Python:

| opérateur | rôle | équivalent  sur une calculatrice |
|--- |--- |--- |
| + | addition | $1 + 99$ |
| - | soustraction | $99 - 1$ |
| * | multiplication | $10 \times 10$ |
| / | division | $\tfrac{1}{3}$|
| // | division entière | pas d'équivalent |
| % | reste de la division | pas d'équivalent |
| ** | exposant | $2^{4}$ |
| e | puissance de 10 (pour l'écriture en notation scientifique) | $1.2E-3$ ou $1.2\times 10^{-3}$ |

**2.** Ces opérateurs peuvent aussi être appliqués sur des chaines de caractères.


| opérateur | rôle | exemple |
|--- |--- |--- |
| + | concaténation (ajoute les chaines de caractères) | &quot;Aïe&quot; + &quot;Aïe&quot; + &quot;Aïe&quot;|
| * | multiplication (ajoute plusieurs fois la même chaine, bout à bout | &quot;Aïe&quot; * 3|

**3.** Un nombre ne peut pas être ajouté à une chaine de caractères:

```python
10 + "x"
# retourne
...
TypeError: unsupported operand type(s) for +: 'int' and 'str' )
```

**4. Opérations logiques**
Une *opération logique* consiste à comparer 2 valeurs et tester si celles-ci sont égales, ou s'il y a une relation d'ordre entre elles. Le résultat d'une opération logique ne peut être que `True` ou `False`:

| opérateur | pour tester... |
|--- |--- |
| `==` | l'égalité |
| `!=` | l'inégalité (est différent de) !
| > | l'ordre supérieur |
| < | l'ordre inférieur |
| >= | l'ordre supérieur ou égal |
| <= | l'ordre inférieur ou égal |

ainsi, pour tester l'égalité entre 3 et 1+2, on peut écrire en python:

```python
3 == 1+2
# retourne 
True
3 == 1+1
# retourne
False
3 > 1+1
# retourne 
True
```

*Remarque:* Le test de l'égalité n'est pas adapté pour les nombres réels. Seulement pour les nombres entiers. Ainsi, en Python, l'opération `0.1*3 == 0.3` renvoie ... `False`!

# Editeur Python
Ouvrir dans *winpython > python QTConsole*


{{< img src="/images/qtconsole.png" >}}

<!--
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.
-->

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

## Travaux pratiques: opérateurs pour les nombres
> Tester les opérations suivantes dans l'editeur Python et répondez aux questions:

<br>

| opérateur | exemple |
|--- |--- |
| + | 12 + 10 |
| * | 12 * 0.1 |
| / | 12 / 10 |
| // | 12 // 10 |
| % | 4 % 2 |
| % | 5 % 2 |
| - | 10 - 12 |
| ** | 2**8 |
| e | 12e-3 |
| % | 1%3 <br> 2%3 <br> 3%3 <br> 4%3 <br> 5%3 <br> 6%3 <br> 7%3 |






* **Question a:** Quel est le rôle pour chacun de ces opérateurs? Que donne `N%2` pour N pair; pour N impair?
* **Question b:** Calculer à l'aide de la console le résultat de: $11,27 + \tfrac{9.10^{21}}{10^4}$. Ecrivez sur votre cahier l'expression utilisée en python pour effectuer ce calcul, ainsi que le résultat, exprimé en langage mathématique.
* **Question c:** Quel est le signe utilisé pour séparateur décimal en python?

## Opérations de comparaisons

> à tester dans l'éditeur Python:



| opérateur | exemple |
| --- |--- |
| `==` et nombres entiers| `10*5 == 50` |
| `!=` et nombres entiers| `10*4 != 50` |
| >= et nombres entiers| `10*5 >= 50` ||
| `==` et nombres réels| `0.1 == 0.3/3` |
| `>,+,/,*,()` | `(50/2+3) > 12.5*2` |

* **Question d:** Quel opérateur est prioritaire entre `/` et `+`? *Comme par exemple dans le calcul `2*(50/2+3)`*
* **Question e:** Quel résultat devrait-on normalement obtenir avec `0.1 == 0.3/3`? Conclure.

## Opérations sur les chaines de caractères

> à tester dans l'éditeur Python:

<br>

| opérateur | exemple |
| --- |--- |
| `+` | &quot;a&quot;+&quot;b&quot;|
| `*` | &quot;bonjour&quot; * 10 |
| `+,*,()` | (&quot;bonjour&quot; + &quot; &quot;) * 10 |


* **Question f:** expliquer ce que réalisent les opérateurs + et * avec les chaines de caractères.



On peut aussi réaliser les opérations de comparaison `>, <, ==, !=`sur les chaines. Et aussi le test d'appartenance `in, not in`. Ces opérations retournent un booléen.

* comparaison d'ordre: `"A" < "B"` vaut `True`, `"Ab" < "A"` vaut `False`.
* d'égalité: `"HA" == "ha"` vaut False

L'opérateur `in` permet de tester si une suite de caractères se trouvent dans un chaine:

* `"ou" in "jour"` vaut `True` 
*  `"ou" not in "jour"` vaut False

* **Question g:** que vaut `"Books" > "Money"` ?

* **Question h:** Quelle erreur est retournée par l'opération `"bonjour tous les " +2`? (relever la fin du Traceback à partir de *TypeError...*)



## Opérations logiques
> à tester dans l'éditeur Python:

| opérateur | exemples à tester |
| --- |--- |
| `not` |  `not True` |
| `and`| `True and False` |
| `and` |   `True and True`  |
| `or` |  `False or True` |

* **Question i:** Que vaut `not True and False`? Et `not (True and False)`? Pourquoi?

# Portfolio
* Quels sont les types de base? 
* Donner quelques exemples de valeurs pour chacun de ces types.
* Que donne l'instruction: `type(123e3)`
* Quelle valeur maximale peut prendre un entier signé codé sur 32 bits?
* Donner le symbole de tous les opérateurs de base pour chacun de ces types.
* Pour les entiers, donner un exemple d'utilisation de l'opérateur `//` et de l'opérateur `%`
* Que donne `x%2` si `x` est pair? Si `x` est impair?
* Pour les chaines de caractères, qu'est-ce qu'une concaténation?

* Donner un exemple d'utilisation du mot clé `in`
* Donner un exemple de comparaison d'ordre lexicographique entre chaines de caractères.
* Soit l'opération logique ci-contre:

`S or not P`

Cette séquence d'opérations logiques est censée représenter l'idée: 

> le temps est ensoleillée (S) ou il n'y a pas de pluie (P)

Evaluer cette séquence d'instructions pour chaque valeur logique possible pour S et P. Résumer dans un tableau.




