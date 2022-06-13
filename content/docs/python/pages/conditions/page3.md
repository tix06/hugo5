---
Title: TP conditions
bookShowToc: false
---

  
  <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
   <style>
    .editor-box{
      width: 60%;
      display: block;
      border: none;
      margin-right: 10px;
      box-shadow: 0px 2px 5px 0px rgb(77, 77, 77, 0.46);
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

# TP1: Structures conditionnelles
# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

# TP1: Conditions
## Ex 1: test sur un nombre divisible
Le script suivant permet de tester la parité d'un nombre `n`. Saisir dans l'editeur Python le script suivant.

```python
n = 33
if n%2 == 0:
  print("n est pair")
else: 
  print("n est impair")
```

* **Question a:** Adapter ce script qui demande à l’utilisateur un entier, puis affiche si cet entier est divisible par 11.

## Ex 2: 18 ans ou plus
> Compléter (et tester avec plusieurs valeurs de age) le programme suivant qui renseigne votre age (à la premiere ligne), et vous laisse entrer en discothèque, seulement si vous avez 18 ans ou plus:

```python
age = 18
if int(age) ...:
    print('...')
else:
    print('...')
```

## Ex 3: Comparer 2 nombres
> Completer (et tester avec plusieurs valeurs de a et de b) le programme suivant qui compare a et b et retourne un message selon leur ordre ou leur egalité.

```python 
a = 10
b = 20
if a ... :
  print("a est plus grand que b")
elif ... :
  print("a et b sont égaux")
else:
  print(...)
```

## Ex 4: Comparer 3 nombres
> Completer (et tester avec plusieurs valeurs de a de b et de c) le programme suivant qui compare a et b et retourne un message selon leur ordre.

On suppose que les 3 nombres a, b et c ne sont jamais égaux. On utilisera l'opérateur `and` qui retourne `True` si les 2 conditions (à gauche et à droite de `and`) sont toutes les 2 évaluées à `True`, `False` sinon.

```python
a = 10
b = 20
c = 11
if a > b and a > c:
  print("a est le plus grand")
elif ...
```

## Ex 5: Comparer 3 nombres - version 2
> Completer (et tester avec plusieurs valeurs de a de b et de c) le programme suivant qui compare a et b et retourne un message selon leur ordre.

Cette fois, on n'utilisera pas l'opérateur `and`, ce qui oblige à utiliser 2 structures conditionnelles imbriquées.

```python
a = 10
b = 20
c = 11
if a > b:
  if a > c:
    print("a est le plus grand")
  ...
...
```
# TP2: Boucles non bornées
## Ex 2: compte epargne
Un étudiant ouvre un compte epargne et dépose la somme de 10 euros. Ce compte est remunéré à hauteur de 2% par an. Il oublie complètement l'existance de ce comte. Au bout de combien d'années aura t-il doublé la somme sur ce compte?

> Resoudre le problème en completant et en testant le script suivant dans une cellule Python

```python
somme = 10
annee = 0
while somme <= 20:
  ...
  ...
...
``` 