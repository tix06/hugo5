---
Title : Exercices variables
bookShowToc: false
---

# Exercices sur les variables et opérations

# Révisions : flash cards
1. Lire la question
2. Chercher la réponse
3. Cliquer sur la carte pour vérifier la reponse.

## Flash card 1
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions</h1>
      <ol><li>Quels sont les 3 types simples de variables en informatique ?</li>
        <li>Comment fait-on pour affecter la valeur 3 à une variable a? </li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>Caractères, Booléens (True, False), Nombres (Integer et Float)</li>
        <li><code style="color:black">a = 3</code></li>
      </ol>
    </div>
  </div>
</div>

## Flash card 2
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions</h1>
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

## Flash card 3


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Questions</h1>
      <ol><li>classer les nombres binaires constitués de 2 bits du plus petit au plus grand : 11  01  00  10</li>
        <li>Ecrire 19 (dix-neuf) en numération binaire</li>
        <li>Trouver combien fait  11111 en base 10</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>00, 01, 10, 11</li>
        <li>10011</li>
        <li>31</li>
      </ol>
    </div>
  </div>
</div>

<script>
  let selector, elems, makeActive;

selector = '.flip-card-inner';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (let i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');
};

for (let i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
</script>