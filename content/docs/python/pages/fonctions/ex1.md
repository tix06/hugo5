---
Title : Exercices fonctions
---

# Exercices sur les fonctions

### Flash card 1

Voici le script d'une fonction avec paramètres : 

```python
def servir_sucre(client,nombre=0):
  """servir le nombre de sucre dans le café du client"""
  return '{} veut son café avec {} sucre(s)'.format(client,nombre)
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Passage d'arguments</h1>
      Que retourne la fonction dans les cas suivants?

      <ol>
      <li>servir_cafe('James')</li>
      <li>servir_cafe('Johanna',3)</li>
      </ol>
    </div>
    <div class="flip-card-back" style="font-size: 14px">
      <h1>Réponses</h1>
      <ol>
        <li>James veut son café avec 0 sucre(s)</li>
        <li>Johanna veut son café avec 3 sucre(s)</li>
      </ol>
    </div>
  </div>
</div>


### Flash card 2

La fonction ajoute(n,p) codée ci-dessous en Python doit calculer la somme de tous les entiers compris entre n et p (n et p compris).

Par exemple, ajoute(2,4) doit renvoyer 2+3+4 = 9

```python
def ajoute(n,p):
  somme = 0
  for i in range(.........):   # ligne à modifier
    somme = somme + i
  return somme
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Completer</h1>
      Que doit-on écrire dans la ligne marquée à modifier ?


    </div>
    <div class="flip-card-back" style="font-size: 14px">
      <h1>Réponses</h1>
      <code style="color:black">for i in range(n,p+1):</code><br>
      Lorsque <em>range</em> prend 2 arguments, l'itération se fait entre la premiere valeur, et la 2<sup>e</sup> valeur - 1
    </div>
  </div>
</div>

### Flash card 3
On souhaite utiliser la fonction `sin` du module `math`.

L'appel de la fonction diffère selon la méthode d'import du module. 







<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Importer des modules</h1>
      Dans chacun des cas suivants, quelle instruction faut-il écrire pour utiliser la fonction `sin` avec l'argument 3.14 ?

      <ol>
      <li>import math</li>
      <li>from math import sin</li>
      <li>import math as m</li>
      </ol>
    </div>
    <div class="flip-card-back" style="font-size: 14px">
      <h1>Réponses</h1>
      <ol>
      <li>math.sin(3.14)</li>
      <li>sin(3.14)</li>
      <li>m.sin(3.14)</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 4

On définit la fonction f :

```python
def f(a,b):
  assert b!=0,'le deuxième argument est nul'
  result = a/b
  return result
```


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Gestion des erreurs</h1>
      <p>
      Quelle erreur obtient-on en exécutant la commande r = f(4,0) ?</p>
      <p>
        A- ZeroDivisionError: division by zero et l'arrêt de l'exécution<br>

B- NameError: name 'b' is not defined et l'arrêt de l'exécution<br>

C- AssertionError: le deuxième argument est nul et la variable r prend la valeur 0<br>

D- AssertionError: le deuxième argument est nul et l'arrêt de l'exécution
      </p>


    </div>
    <div class="flip-card-back" style="font-size: 14px">
      <h1>Réponse</h1>
      reponse D : AssertionError: le deuxieme argument est nul
    </div>
  </div>
</div>

*si besoin, revoir le cours sur la [mise au point d'un programme](docs/NSI/langages/page5/)*

### Flash card 5
On exécute le code suivant :

```python
def f(t):
  n = len(t)
  for i in range(n-1):
    if t[i] > t[i+1]:
      t[i],t[i+1] = t[i+1],t[i]

L = [4, 8, -7, 0, 1]
f(L)
```






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Passage d'une liste en argument</h1>
      <p>
      Quelle est la valeur de L après l'exécution de ce code ?</p>


      A- [4, -7, 8, 0, 1]<br>

      B- [-7, 0, 1, 4, 8]<br>

      C- [4, 8, -7, 0, 1]<br>

      D- [4, -7, 0, 1, 8]<br>


    </div>
    <div class="flip-card-back" style="font-size: 14px">
      <h1>Réponse</h1>
      Reponse D : L vaut [4, -7, 0, 1, 8]<br>
Lorsque l'on appelle la fonction avec f(L), la liste L est passée par référence : les modifications de t affectent la liste L.<br>
A chaque itération, 8 est comparé avec l'élément de rang supérieur, et comme 8 est plus grand, on permute les 2 éléments de L. Jusqu'à la fin de la liste.
    </div>
  </div>
</div>

# Relire le cours
Lien vers la page : <a href="/docs/python/pages/fonctions/page1/">fonctions</a>


<script>
let selector, cards, makeActive;
let elems = [];
var check = false;

selector = '.flip-card';

cards = document.querySelectorAll(selector);


makeActive = function () {
    /* attention petite erreur de script
    pour que ca fonctionne il faut un nombre impair de cartes
    */ 
    for (let i = 0; i < cards.length; i++){
      check=!check;
      //console.log(cards[i].childNodes[1].classList);
      elems[i] = cards[i].childNodes[1];
      elems[i].classList.remove('active');
      }
    if (check) {
    this.childNodes[1].classList.add('active');}
};

for (let i = 0; i < cards.length; i++)
    cards[i].addEventListener('mousedown', makeActive);
</script>
