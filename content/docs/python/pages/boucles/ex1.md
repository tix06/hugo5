---
Title : Exercices boucles
---

# Exercices sur les boucles
## Flash card 1

Script A

```python
for i in L : 
    print(i)
```

Script B 

```python
for i in range(len(L)) : 
    print(i)
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>for</h1>
      <p>La liste L est definie ainsi : <br>L = [‘P’,’I’,’Z’,’Z’,’A’]<br>
      Qu'affichent chacun des programmes suivants:</p>
      <ol>
        <li>script A</code></li>
        <li>script B</li>
     
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        
        <li>P I Z Z A</li>
        <li>0 1 2 3 4</li>

       
      </ol>
    </div>
  </div>
</div>

## Flash card 2

Script A 

```python
for i in client:
    print(i)
```

Script B

```python
def cherche(m):
    for i in client:
        if i[3] == m:
            return i
    return "aucun élément trouvé"
        
cherche('6')
```



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>for et parcours de listes</h1>
      <p>On execute la script A. La variable client n'est pas indiquée, mais la sortie suivante dans la console peut permettre de deviner sa nature. Il s'agit d'une liste de listes:<br>
        ['Deuf', 'John', 'Vezuvio', '8']<br>
['Fassol', 'Rémi', 'fruits de mer', '6']<br>
['Niole', 'Guy', 'spéciale', '15']<br></p>
<p>
On lance alors le script B. Qu'affiche ce programme?
</p>
     
    </div>
    <div class="flip-card-back">
      <h1>Réponse</h1>
['Fassol', 'Rémi', 'fruits de mer', '6']
    </div>
  </div>
</div>


## Flash card 3

Script A : 

```python
i = 0
popu = [100, 90, 81, 74, 67, 60, 54, 49, 45, 40, 36, 33]
while popu[i] > 50:
  i += 1
print(i, popu[i])
```

Script B : 

```python
devoirs = ['math','physique','philo']
while devoirs != []:
    print('le devoir de {} est fait'.format(devoirs.pop()))
```

Script C : 

```python
i = 10
while True:
    i -= 1
    if i < 1 : 
        break
print(i)
```



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>while</h1>
      <p>Quelle valeur est affichée par chacun des scripts suivants:</p>
      <ol>
        <li>script A</code></li>
        <li>script B</li>
        <li>script C</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>7 49</li>
  
        <li>le devoir de philo est fait<br>
le devoir de physique est fait<br>
le devoir de math est fait<br></li>
        <li>0</li>
       
      </ol>
    </div>
  </div>
</div>

# Relire le cours
Lien vers la page [boucles for et while](/docs/python/pages/boucles/page1/index.html)

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