---
Title : Exercices Entrées Sorties
---

# Exercices sur les Entrées et Sorties

### Flash card 1

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Questions 7</h1>
      Quel est l&lsquo;affichage dans la console au fur et à mesure des instructions suvantes ?
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

# Relire le cours
Lien vers la page : <a href="/docs/python/pages/ES/page1/">Entrées/Sorties</a>


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