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
| e | puissance de 10<br><i>(pour l'écriture en notation scientifique)</i> | $1.2E-3$ <br>ou<br>$1.2\times 10^{-3}$ |

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

*Remarque:* Ne pas tester l'égalité entre nombres réels. Seulement avec les nombres entiers. Ainsi, en Python, l'opération `0.1*3 == 0.3` renvoie ... `False`!

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

## Travaux pratiques: opérateurs pour les nombres
> Tester alors les opérations suivantes dans l'editeur Python et répondez aux questions:

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
* **Question b:** Calculer à l'aide de la console le résultat de: 1127 + 9.10<sup>21</sup> / 10<sup>4</sup> <br>Ecrivez sur votre cahier l'expression utilisée en python, ainsi que le résultat, exprimé en langage mathématique.
* **Question c:** Quel est le signe utilisé pour séparateur décimal en python?


## Opérations sur les chaines de caractères

> à tester dans l'éditeur Python:

<br>

| opérateur | exemple |
| --- |--- |
| `+` | &quot;a&quot;+&quot;b&quot;|
| `*` | &quot;bonjour&quot; * 10 |
| `+,*,()` | (&quot;bonjour&quot; + &quot; &quot;) * 10 |


* **Question d:** expliquer ce que réalisent les opérateurs + et * avec les chaines de caractères.
* **Question e:** Quelle erreur est retournée par l'opération `"bonjour tous les " +2`? (relever la fin du Traceback à partir de *TypeError...*)

## Opérations de comparaisons

> à tester dans l'éditeur Python:

<br>

| opérateur | exemple |
| --- |--- |
| `==` et nombres entiers| `10*5 == 50` |
| >= et nombres entiers| `10*5 >= 50` ||
| `==` et nombres réels| `0.1 == 0.3/3` |
| `>,+,/,*,()` | `(50/2+3) > 12.5*2` |

<br>

* **Question f:** Quel opérateur est prioritaire entre `/` et `+`? <i>Comme par exemple dans le calcul `(50/2+3)`</i>
* **Question g:** Quel résultat devrait-on normalement obtenir avec `0.1 == 0.3/3`? Conclure.
