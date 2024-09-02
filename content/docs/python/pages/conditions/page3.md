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

# TP3: Structures conditionnelles
# Editeur Python
* Utiliser un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>


## Ex 1: test sur un nombre divisible
Le script suivant permet de tester la parité d'un nombre `n`. Saisir dans l'editeur Python le script suivant.

```python
n = 33
if n%2 == 0:
  print("n est pair")
else: 
  print("n est impair")
```

> Adapter ce script qui demande à l’utilisateur un entier, puis affiche si cet entier est divisible par 11.

* **Question a:** Quelle modification avez-vous faite?

## Ex 2: 18 ans ou plus
> Compléter (et tester avec plusieurs valeurs de age) le programme suivant qui renseigne votre age (à la premiere ligne), et vous laisse entrer en discothèque, seulement si vous avez 18 ans ou plus:

```python
age = 18
if age ...:
    print('...')
else:
    print('...')
```

* **Question b:** Quels sont les différents opérateurs de comparaison en python? *(est égal à, est différent de, est supérieur, est supérieur ou égal, ...)*

On peut modifier ce programme pour qu'il demande l'age de la personne qui execute le script:

```python
age = input('Quel age avez-vous? ')
age = int(age)
if age ...:
    print('...')
else:
    print('...')
```

**Question a:** Quelle instruction est utilisée à la ligne 2 pour convertir la valeur saisie par l'utilisateur en un entier?

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

* **Question c:** Laquelle de ces alternatives doit toujours être suivie d'une condition: `elif` ou `else`?

## Ex 4: Comparer 3 nombres
### version 1
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

* **Question d:** Peut-il y avoir plusieurs `elif` pour une même structure conditionnelle `if`? Peut-il y avoir plusieurs alternative `else`?

### version 2
> Completer (et tester avec plusieurs valeurs de a de b et de c) le programme suivant qui compare a et b et retourne un message selon leur ordre.

Cette fois, on **n'utilisera pas** l'opérateur `and`, ce qui oblige à utiliser 2 structures conditionnelles imbriquées.

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

* **Question e:** Traduire en langage naturel la double condition pour laquelle `a` est le plus grand: si ... ... ... alors si ... ... ... alors ...

## Ex 5: IMC
L'Indice de Masse Corporelle (IMC) est un indicateur chiffré utilisé en médecine. L'IMC d'une personne est donné par la formule:

$$IMC = \tfrac{masse}{taille^2}$$

où la masse est en kilos et la taille en mètres.

Proposez un algorithme qui demande à l'utilisateur sa taille et sa masse puis qui affiche l'IMC de la personne.

*Pensez à écrire un texte clair à destination de l'utilisateur pour qu'il sache quoi saisir.*

Utilisez le tableau suivant pour fournir une information à la personne en fonction de son IMC:

{{< img src="../images/imc.png" alt="classification de l'IMC" caption="classification de l'IMC - source: has-sante.fr" >}}

* **Question f:** Recopier la série d'instructions conditionnelles qui affichent une information sur l'IMC.

# Suite
* {{< a link="../page4" caption="Lien vers le TP4: boucles non bornées" >}}
* retour vers le cours [Python: les conditions](/docs/python/pages/conditions/page2/)


