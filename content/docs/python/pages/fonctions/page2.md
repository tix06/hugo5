---
Title: fonctions
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



# Les fonctions
## Fonction sans paramètre
**1. Definition:** Une fonction permet d'encapsuler un bloc d'instructions et de lui donnéer un *nom*:

```
def ma_fonction():
    # bloc de code ligne 1
    # bloc de code ligne 2
``` 

La fonction est déclarée après le mot-clé `def`. 

Choisir un nom qui n'appartient pas à Python (aucune autre fonction porte ce nom dans le langage).

Le nom est suivi de parenthèses `()` et deux points `:`

Le bloc de code de la fonction est *indenté* sous la ligne `def ma_fonction`

**Appel de fonction:** On peut ensuite exécuter ce bloc en utilsant ce *nom*. On dit qu'on **appelle** cette fonction en écrivant son nom, suivi de parenthèses `()`.

```
ma_fonction()
``` 

**Valeur de retour:** Une fonction retourne en général une valeur. Après le mot-clé `return`



* *Exemple 1* Dans ce script, on definit une fonction qui retourne `Hi`. Les lignes commençant par le symbole `#` sont des commentaires, et ne sont pas executées par Python. Elles sont optionnelles.

```python
# definition de la fonction
def hello():
  return 'Hi'

# appel de la fonction
hello()
# 'Hi'
```

## Fonction avec paramètre
Une fonction peut avoir un ou plusieurs **paramètres** qui permettent de transmettre des valeurs au bloc d'instructions. A l'interieur de la fonction, ces paramètres sont traités comme des variables, mais **locales**: Elles n'existent pas à l'exterieur du bloc.

Il y a alors une affectation: `paramètre = argument` 

* *Exemple 2* Dans ce script, on definit une fonction qui calcule le carré d'un nombre `x`. 

```python
# definition de la fonction
def carre(x):
  return x**2

# appel de la fonction
carre(5)
# retourne 25
``` 

*Lors de la déclaration de la fonction, le seul paramètre attendu s'appelera `x`* *Puis lors de l'appel de la fonction `carre`, l'argument choisi est 5. A l'interieur de la fonction, `x` vaut 5.*

{{< img src="../images/def_carre.png" caption="illustration du passage d'argument lors de l'appel de la fonction" >}}

*La valeur de retour est alors 25: l'intruction `return x**2` évalue `5**2`, soit 25, avant de retourner la valeur.*

Observez comme la *fonction Python* avec paramètre ressemble à la déclaration d'une *fonction* en mathématiques:

```
# en math
f(x) = 10*x + 20
```

On peut calculer f(x) pour toute valeur de x en remplaçant x dans $10\times x + 20$ par sa valeur. Par exemple, $f(1) = 10\times 1 + 20 = 30$

```
# en python
def f(x):
  return 10*x + 20
```

En python, on appelle cette fonction avec la valeur  $x=1$ en écrivant:

```
f(1)
# retourne 30
```

Le `return` correspond au signe `=` en langage mathématique.

### Plusieurs paramètres
Lors de l'*appel de la fonction*, le ou les arguments passés doivent correspondre aus paramètres attendus. Ils doivent être placés dans l'ordre.

* *Exemple 3*: fonction qui calcule la surface d'un rectangle lorsque l'on divise chacun de ses côtés par un même coefficient `c`. On aura besoin de la longueur de ses côtés `x` et `y` (les 2 premiers paramètres de la fonction). Mais aussi de la valeur `c`:

```python
# definition de la fonction
def calcul_surface(x,y,c):
  S = (x/c) * (y/c)
  return S

# appel de la fonction avec x=20 et y=30, c=1.5
# 20 sera place en premier argument
# 30 sera place en 2e argument
# 1.5 sera placé au niveau du 3e argument
calcul_surface(20,30,1.5)
# retourne 266.66..7
```

# Editeur Python
Utiliser un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

# TP
## Ex 1: fonction sans paramètre
La fonction suivante va retourner un dessin réalisé à partir de symboles ascii du clavier:

```python
def figure():
  fig = "^---^"
  print(fig)
  fig = "_00_"
  print(fig)
  fig = "|-=-|"
  print(fig)
```

* Saisir le script dans une cellule python et executer.
* Dans une nouvelle cellule python: appeler la fonction. Ecrire: `figure()`

*La plupart du temps, on evitera d'utiliser la fonction `print` à l'intérieur d'une fonction. Sauf cas particulier comme ci-dessus.*

La fonction suivante va justement utiliser le mot clé `return` prévu pour qu'il y ait une *sortie*.

```python
def dessine():
  n = 3
  dessin = ""
  for i in range(n):
    dessin = dessin + "x*x"
  return dessin
```

* **Question a:** Tester la fonction du 2e script. Comment a-t-on evité d'utiliser `print` dans cette fonction?

## Ex 2: fonction avec paramètre

> Ecrire une fonction `salut` qui prend pour paramètre `nom` et qui retourne une chaine de caractères `bonjour + "nom"`. 

Exemples d'appels de la fonction `salut`:

```python
salut("John")
# affiche
bonjour John
salut("Paul")
# affiche
bonjour Paul
salut("Ringo")
# affiche
bonjour Ringo
salut("George")
# affiche
bonjour George
```  

* **Question b:** Citer un avantage d'utiliser une fonction plutôt qu'une serie d'instructions pour afficher *bonjour* de manière personalisée.

## Ex 3: fonction pour calculer
1. Écrire une fonction cube qui retourne le `cube` de son argument.
2. Écrire une fonction `volumeSphere` qui calcule le volume d’une sphère de rayon r fourni en argument et qui utilise la fonction cube.

*Donnée:*

$$V = \tfrac{4}{3}\times\pi\times R^3$$

3. Calculer le volume en $cm^3$ d'une sphere de rayon 10cm (à l'aide de la fonction `volumeSphere`)

## Travaux pratiques
* Le TP sur les boucles bornées, et les fonctions avec et sans paramètres: [Lien](/docs/NSI_1/donnees/page5/)
* Le TP d'application des fonctions à Turtle: [Lien](../page3/)

