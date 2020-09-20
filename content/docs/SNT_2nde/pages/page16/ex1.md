---
Title : codage exercices
---

# Exercices sur le codage des valeurs

### Flash card 1



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
      <h1>Binaire</h1>
      <p>Convertir de decimal à binaire ou binaire à decimal:</p>
      <ol>
        <li>Convertir 15 en binaire</li>
        <li>Convertir 21 en binaire</li>
        <li>Convertir 129 en binaire</li>
        <li>Convertir 1110 en decimal</li>
        <li>Convertir 1100 1100 en decimal</li>
     
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        
        <li>1111</li>
        <li>10101</li>
        <li>1000 0001</li>
        <li>14</li>
        <li>204</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 2

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Addition binaire</h1>
<p>Ajouter les nombres binaires suivants :</p>
<ol>
<li>0010 0101 + 1</li>
<li>111 + 1</li>
<li>0010 1111 + 1</li>
<li>0111 1111 + 1</li>

</ol>
</div>
<div class="flip-card-back">
<h1>Réponses</h1>
<ol>
<li>0010 0110</li>
<li>1000</li>
<li>0011 0000</li>
<li>1000 0000</li>
</ol>
    </div>
  </div>
</div>

### Flash card 3
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Conversions binaires</h1>
      <p>Convertir en octets (<b>valeurs approchées</b>):</p>
      <ol>
      <li>500 bits</li>
      <li>100 Mb</li>
      <li>125 ko</li>
      <li>1 Go</li>


      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>500/8 = 62.5</li>
        <li>100*10<sup>6</sup>/8 = 1.25*10<sup>7</sup></li>
        <li>125*10<sup>3</sup></li>
        <li>10<sup>9</sup></li>
      </ol>
    </div>
  </div>
</div>

### Flash card 4
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Conversions binaires</h1>
      <p>Convertir en octets (<b>valeurs exactes</b>).<br>
        Rappels : <br>
        1 kb = 1024 bits<br>
      1Mo = 1024 ko = 1024 * 1024 octets</p>
      <ol>
      <li>10 kb</li>
      <li>100 Mb</li>
      <li>125 ko</li>
      <li>1 Go</li>


      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>10 * 1024 /8 = 1280</li>
        <li>100*1024*1024/8 = 1.31*10<sup>7</sup></li>
        <li>125*1024 = 1.28*10<sup>5</sup></li>
        <li>1024<sup>3</sup> = 1.07*10<sup>9</sup></li>
      </ol>
    </div>
  </div>
</div>

### Flash card 5
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>mot-binaire</h1>
      <p>Combien de valeurs peuvent être codées en :...</p>
      <ol>
      <li>4 bits</li>
      <li>8 bits</li>
      <li>32 bits</li>
      <li>64 bits</li>



      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>2<sup>4</sup> = 16</li>
        <li>2<sup>8</sup> = 256</li>
        <li>2<sup>32</sup> = 4.29*10<sup>9</sup></li>
        <li>2<sup>64</sup> = 1.84*10<sup>19</sup></li>
      </ol>
    </div>
  </div>
</div>


# Relire le cours
Lien vers la page [codage des nombres et caracteres](/docs/SNT_2nde/pages/page16/nombres_caracteres/index.html)

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