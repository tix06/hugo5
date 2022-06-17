---
Title: TP boucles non bornées
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

# TP2: Boucles non bornées - while
# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>


# TP2: Boucles non bornées
## Ex 1: Diviser sans l'opérateur `/`
La division entière de `a`par `b` revient à soustraire `N` fois `b` à la valeur `a`. Ce nombre `N` est le résultat de ce que l'on appelle, la division entière de `a` par `b`.

Le script contient une boucle non bornée. La *condition d'éxecution* est que le nombre **a** doit rester supérieur ou égal à **b** lorsqu'on lui soustrait **b**

*script*

```python
a = 20
b = 6
N = 0
while <condition>:
  a = a - b
  N = N + 1
```

* **Question a:** Compléter le script en écrivant la condition à réaliser sur `a`. Que vaut `a` à la fin du script? Quel est le résultat de la division entière?

## Ex 2: Racine carrée
On va adapter le script suivant pour déterminer la racine carrée de 13. La méthode va permettre d'évaluer à 10<sup>-2</sup> près la valeur de $\sqrt {13}$.

```python
# initialisation de la variable x
x = ...
while <condition>:
  instruction
```


La *condition d'execution* de la boucle non bornée sera `x**2 < 13`.

On part d'une variable x que l'on initialise à 3, puisque 3<sup>2</sup>=9, donc inférieur à 13.

On incrémente `x` de 0.01 à chaque itération, dans le bloc de la boucle bornée.

* **Question b:** Quelle est la valeur approchée de $\sqrt {13}$?

## Ex 3: compte epargne
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

* **Question c:** Quel nombre **x** d'années se sont écoulées? La somme a t-elle exactement doublé au bout de ces **x** années?

## Ex 4: tirage aleatoire
Le programme suivant utilise la fonction `randint`, qui effectue le tirage aleatoire d'une valeur comprise entre 2 bornes:

`randint(1,6)` permet d'effectuer un tirage aleatoire d'une valeur entiere entre 1 et 6.

```python
from random import randint
n = 1
while randint(1,6) != 6:
  n = n + 1
print(n)
```

* **Question d:** A quoi sert ce programme:
  * à compter le nombre d'apparion du nombre 6?
  * ou à calculer le nombre de lancers jusqu’à l’apparition du premier 6?

* **Question e:** La boucle « Tant que » pourrait en théorie ne jamais s’arrêter. Pourquoi ? Corriger le script pour pallier ce problème.
