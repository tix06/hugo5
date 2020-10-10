---
Title: Flash cards mise au point
---

# Exercices sur la mise au point d'un programme
### Flash card 1

**script 1**
```python
a = 1
for i in range(3):
  print("i = {}, a = {}".format(i, a)
  a = 2 * a 
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>message d'exception</h1>
      <p>Pour le script 1 précédent:<br>
        Quel message d'exception est levé?
</p>
<p>
Choisir: <br>
A- SyntaxError<br>

B- IndentationError<br>

C- NameError<br>

D- AttributeError<br>

E- IndexError
</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
Reponse A : SyntaxError <br>(à la ligne 3, il manque une parenthèse) 
    </div>
  </div>
</div>

### Flash card 2

**script 2**
```python
v = 1
while v < 100:
  if v% 7 == 0:
    print(v, "est un multiple de 7")
    else:
    print(v, "n’est pas un multiple de 7")
  v = v + 1 
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>message d'exception</h1>
      <p>Pour le script 2 précédent:<br>
        Quel message d'exception est levé?
</p>
<p>
Choisir: <br>
A- SyntaxError<br>

B- IndentationError<br>

C- NameError<br>

D- AttributeError<br>

E- IndexError
</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
Reponse B : IndentationError <br>(à la ligne 5) 
    </div>
  </div>
</div>

### Flash card 3

**script 3**
```python
f = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
for i in range(0, 9):
  f[i + 1] = f[i] + f[i - 1]  
print(f) 
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>message d'exception</h1>
      <p>Pour le script 1 précédent:<br>
        Quel message d'exception est levé?
</p>
<p>
Choisir: <br>
A- SyntaxError<br>

B- IndentationError<br>

C- NameError<br>

D- AttributeError<br>

E- IndexError
</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
Reponse E : IndexError <br>(à la ligne 3, on ne pourra pas calculer f[i-1] pour i=0) 
    </div>
  </div>
</div>

### Flash card 4


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Vrai/Faux</h1>

<p>
A- Une assertion échoue si l’expression booléenne qui suit le mot clé assert est  fausse. Si elle est vraie, l’exécution continue sans erreur.<br>

B- `assert div!=0, 'division par zero'` va stopper le programme et afficher 'division par zero' si div est différent de zero.<br>

C- Le module unittest permet de vérifier si les exemples mis dans le docstring de la fonction sont justes, en les testant.<br>

D- Dans un test du module unittest, lorsque l'on veut tester si 2 valeurs sont égales, on utilise la fonction assertEqual<br>

</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
A- Vrai<br>
B- Faux. Le programme stoppe si div est EGAL à zero.<br>
C- Faux. C'est le module doctest qui peut le faire, pas unittest<br>
D- Vrai

    </div>
  </div>
</div>


### Flash card 5

**script 4** 

```python
def divise(a,b):
    return a/b
```

Si on execute l'instruction suivante: `divise(10,0)`, la console affiche:

```
ZeroDivisionError      Traceback (most recent call last)
<ipython-input-30-8044e08140eb> in <module>
----> 1 print(divise(10,0))

<ipython-input-29-8590a608aa42> in divise(a, b)
      1 def divise(a,b):
----> 2     return a/b

ZeroDivisionError: division by zero
```






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>mécanisme d'exception</h1>
      
<p>
Qu'est ce qui est affiché dans la console lorsque l'on execute le script suivant?<br>
try:<br>
&nbsp&nbsp print(divise(10,0))<br>
except ZeroDivisionError as err:<br>
&nbsp&nbsp print('Handling run-time error:', err)<br>
</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
      Handling run-time error: division by zero

    </div>
  </div>
</div>

# Relire le cours
Lien vers la page [mise au point d'un programme](/docs/NSI/langages/page5/)

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