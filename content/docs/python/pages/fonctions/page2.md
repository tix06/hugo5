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


# Fonctions
# Les fonctions
**1. Definition:** Une fonction permet d'encapsuler un bloc d'instructions et de lui donnéer un *nom*. 

**Appel de fonction:** On peut ensuite exécuter ce bloc en utilsant ce *nom*. On dit qu'on **appelle** cette fonction en écrivant son nom, suivi de parenthèses `()`.


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
Lors de l'*appel de la fonction*, le ou les arguments passés doivent correspondre aus paramètres attendus. 

* *Exemple 3*: fonction qui calcule la surface d'un rectangle à partir de la longueur de ses côtés `x` et `y` (les 2 paramètres de la fonction).

```python
# definition de la fonction
def calcul_surface(x,y):
  S = x * y
  return S

# appel de la fonction avec x=2 et y=3
# x sera place en premier argument
# y sera place en 2e argument
calcul_surface(2,3)
# retourne 6
```

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

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

