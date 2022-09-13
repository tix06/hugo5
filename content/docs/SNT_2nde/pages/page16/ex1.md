---
Title : codage exercices
---

# Exercices sur le codage des valeurs

## Flash card 1



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
      <h1>Binaire</h1>
      <p>Convertir de decimal à binaire ou binaire à decimal:</p>
      <ol>
        <li>Convertir 2 en binaire</li>
        <li>Convertir 4 en binaire</li>
        <li>Convertir 16 en binaire</li>
        <li>Convertir 32 en binaire</li>
        <li>Convertir 128 en binaire</li>
     
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        
        <li>10</li>
        <li>100</li>
        <li>1 0000</li>
        <li>10 0000</li>
        <li>1000 0000</li>
      </ol>
    </div>
  </div>
</div>

## Flash card 2
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




## Flash card 3
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>espace mémoire</h1>
      <p>Combien de bits/ octets faut-il à peu près pour coder:...</p>
      <ol>
      <li>l'age d'une personne (0-100 ans)</li>
      <li>un fichier texte</li>
      <li>un morceau de musique</li>
      <li>une image format jpg</li>
      <li>un film en 4K</li>



      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>7 bit (0-127)</li>
        <li>1 ou plusieurs ko</li>
        <li>1 ou plusieurs Mo</li>
        <li>1 ou plusieurs Mo</ll>
        <li>1 ou plusieurs Go</li>
      </ol>
    </div>
  </div>
</div>

## Flash card 4
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>codage du texte</h1>
      <p>Combien de caractères différents peuvent être codés </p>
      <ol>
      <li>sur 7 bits (norme ASCII)</li>
      <li>sur 8 bits (utf-8)</li>
      



      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>2<sup>7</sup> = 128</li>
        <li>2<sup>8</sup> = 256</li>
      </ol>
    </div>
  </div>
</div>


## Flash card 5 - pour les élèves de 1ere NSI

On peut vouloir convertir les données avec des valeurs **exactes** et non approchées. Pour eviter les confusions avec le kilobit, on utilise un autre nom pour l'unité : le **Kibibit (Kibit)**, qui vaut **1024 bits** (soit 2<sup>10</sup>). 

Les multiples de l'octet deviennent: Kibioctet (Kio), Mébioctet (Mio), Gibioctet (Gio), Tébioctet (Tio), Pébioctet (Pio).

Le tableau de convertion est alors le suivant : 

| unité | valeur exacte, en octets |
|--- | --- |
| Kibioctets (Kio) | 2<sup>10</sup> |
| Mébioctet (Mio) | 2<sup>20</sup> |
| Gibioctet (Gio) | 2<sup>30</sup> |
| Tébioctet (Tio) | 2<sup>40</sup> |
| Pébioctet (Pio) | 2<sup>50</sup> |

<br>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 13px">
<h1>Conversions binaires</h1>
      <p>Convertir en octets (<b>valeurs exactes</b>)</p>
      <ol>
      <li>10 Kibibits</li>
      <li>100 Mebibits</li>
      <li>125 Kibioctets</li>
      <li>1 Gibioctet</li>


      </ol>
    </div>
      <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>10 * 1024 /8 = 1280</li>
        <li>100*1024*1024/8 = 1.31*10<sup>7</sup></li>
        <li>125*1024 = 1.28*10<sup>5</sup></li>
        <li>2<sup>30</sup> = 1.07*10<sup>9</sup></li>
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