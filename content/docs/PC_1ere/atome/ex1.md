---
Title : mol exercices
---

<i>Utiliser le tableau des masses molaires atomiques pour résoudre les exercices.</i>

# Exercices sur la quantité de matière

### Flash card 1



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
      <h1>Masse molaire</h1>
      <ol>

      <li>Déterminer la masse molaire du saccharose</li>
      <li>Déterminer la quantité de matière dans 68,0g de saccharose.</li>
    </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>M = 342g.mol<sup>-1</sup></li>
        <li>0,199 mol</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 2

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Concentration massique</h1>
<p>Une canette de cola, de 33cL, a une teneur en saccharose égale à 150 g.L<sup>-1</sup></p>
<ol>
<li>Dans cet énoncé, quelle est la valeur de la concentration?</li>
<li>Quelle est la valeur du volume?</li>
<li>Quelle est la valeur de la masse totale de saccharose dissous</li>


</ol>
</div>
<div class="flip-card-back">
<h1>Réponses</h1>
<ol>
<li>t = 150 g.L<sup>-1</sup></li>
<li>V = 0,33L</li>
<li>m = 49,5g soit environ 50g</li>
</ol>
    </div>
  </div>
</div>

### Flash card 3
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Concentration molaire</h1>
      <p>On veut prelever une quantité de chlorure de sodium egale à 0,050 mol.<br> Pour cela, on dispose d'une solution de chlorure de sodium à 1,02.10<sup>-2</sup>mol.L<sup>-1</sup></p>
      <ol>
      <li>Dans cet énoncé, quelle est la valeur de la concentration?</li>
      <li>Quelle est la quantité de matière?</li>
      <li>Calculer le volume correspondant</li>
      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>C = 1,02.10<sup>-2</sup>mol.L<sup>-1</sup></li>
        <li>n = 0,050 mol</li>
        <li>V = 4,9L</li>

      </ol>
    </div>
  </div>
</div>



# Relire le cours
Lien vers la page [Quantité de matière](/docs/esf/chimie/page1/)

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