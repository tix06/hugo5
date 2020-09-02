---
Title : Exercices variables
bookShowToc: false
---

# Exercices sur les variables et opérations

# Révisions : flash cards
1. Lire la question
2. Chercher la réponse
3. Cliquer sur la carte pour vérifier la reponse.

### Flash card 1
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions 1</h1>
      <ol><li>Quels sont les principaux types élementaires de variables en informatique ?</li>
        <li>Comment fait-on pour affecter la valeur 3 à une variable a? </li>
        <li>Comment fait-on l'affectation multiple de la valeur 3 à la variable
        a et 55 à la variable b?</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>Nombres (Integer et Float), Caractères (et chaines de caractères), Booléens (True, False)</li>
        <li><code style="color:black">a = 3</code></li>
        <li><code style="color:black">a, b = 3, 55</code></li>
      </ol>
    </div>
  </div>
</div>

### Flash card 2
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions 2</h1>
      <p style="font-size: 12px">Soit le nombre N entier constitué de 3 chiffres A (centaines), B (dizaines), C (unités), s'écrivant ABC</p>
      <p style="font-size: 12px">Traduire chacune des propositions sous la forme d’une opération. Puis trouver le résultat :</p>
      <ol style="font-size: 12px"><li>Le nombre doit être inférieur à 500</li>
        <li>son chiffre des dizaines est égal à la moitié du chiffre des centaines</li>
        <li>Le chiffre des unités est égal à la moitié du chiffre des dizaines</li>
        <li>La somme des 3 chiffres (centaines, dizaines, unités) est égal à 7</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li><code style="color:black">N < 500</code></li>
        <li><code style="color:black">B = A/2</code></li>
         <li><code style="color:black">C = B/2</code></li>
          <li><code style="color:black">A + B + C = 7</code></li>
      </ol>
      <p>Après résolution, il vient N = 421</p>
    </div>
  </div>
</div>

### Flash card 3


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions 3</h1>
      <ol><li>classer les nombres binaires constitués de 2 bits du plus petit au plus grand : 11  01  00  10</li>
        <li>Ecrire 19 (dix-neuf) en numération binaire</li>
        <li>Trouver combien fait  11111 (binaire) en base 10</li>
        <li>Convertir en Gbits le nombre : 400Mo</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>00, 01, 10, 11</li>
        <li>10011</li>
        <li>31</li>
        <li>3,2 Gb (avec 1Go = 1000Mo) ou 3,1 Gb (1Go = 1024 Mo)</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 4

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions 4</h1>
      Que valent chacune des expressions suivantes ?
      <ol><li>3.12e-3</li>
        <li>3 / 4</li>
        <li>2**3</li>
        <li>5 // 4</li>
        <li>6 % 4</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>0.00312 (l'evaluation du nombre renvoie un flottant)</li>
        <li>0.75</li>
        <li>8 (** est le symbôle pour exposant)</li>
        <li>1 (valeur entiere de la division)</li>
        <li>2 (module = reste de la division)</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 5

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions 5</h1>
      Que valent chacune des expressions suivantes ?
      <ol><li>("Pa"+"La") * 2</li>
        <li>str(4) * int("3") </li>
        <li>int("3") + float("3.2")</li>
        <li>True == False or not True == False</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>'PaLaPaLa'</li>
        <li>'444'</li>
        <li>6.2</li>
        <li>True</li>
      </ol>
    </div>
  </div>
</div>


### Flash card 6

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 14px">
      <h1>Questions 6</h1>
      Quel est l&lsquo;affichage dans la console au fur et à mesure des instructions suvantes ?
      <ol><li>voyelles = ['a','e','i','o']<br>
      voyelles[1]
      </li>
        <li>voyelles[-2]</li>
        <li>voyelles.pop()<br>voyelles</li>
        <li>voyelles.append('u')<br>voyelles</li>
        
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>'e'</li>
        <li>'i'</li>
        <li>'o'<br>['a','e','i']</li>
        <li>['a','e','i','u']</li>
        
      </ol>
    </div>
  </div>
</div>

### Flash card 7

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Questions 7</h1>
      
      <ol><li>capitales = {'France':'Paris',\<br>'Italie':'Rome',\<br>'Angleterre':'Londres'}
<br>list(capitales.keys())</li>
        <li>capitales['France']</li>
        <li>list(capitales.values())</li>
        <li>capitales['Espagne']='Madrid'<br>list(capitales.items())</li>

      </ol>
    </div>
    <div class="flip-card-back" style="font-size: 12px">
      <h1>Réponses</h1>
      <ol><li>['France', 'Italie', 'Angleterre']</li>
        <li>'Paris'</li>
        <li>['Paris', 'Rome', 'Londres']</li>
        <li>[('France', 'Paris'),<br>
 ('Italie', 'Rome'),<br>
 ('Angleterre', 'Londres'),<br>
 ('Espagne', 'Madrid')]</li>
      </ol>
    </div>
  </div>
</div>


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