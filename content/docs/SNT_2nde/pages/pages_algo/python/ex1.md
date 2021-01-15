---
Title : Exercices variables
---

# Exercices sur les variables en Python

# Flash cards

Il s'agit d'un exercice en auto-evaluation:

Pour chacun des exercices: **reflechir** à la reponse puis **cliquer sur la carte** pour afficher la reponse.

## Flash card 1

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Nommer une variable</h1>
      <p>Quels noms peut on choisir pour nommer une variable :</p>
      <ol>
        <li>A</li>
        <li>ma variable n°1</li>
        <li>1Nom</li>
        <li>nom1</li>
        <li>date_de_Naissance</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>Vrai</li>
        <li>Faux: espaces interdits dans le nom</li>
        <li>Faux: le premier caractere doit être une lettre</li>
        <li>Vrai</li>
        <li>Vrai</li>
      </ol>
    </div>
  </div>
</div>

## Flash card 2

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Affectation d'une variable</h1>
      <p>Quelles instructions d'affectation sont juste :</p>
      <ol>
        <li><code style="color:black">age = 19</code></li>
        <li><code style="color:black">"age" = 19</code></li>
        <li><code style="color:black">lieu = "Marseille"</code></li>
        <li><code style="color:black">age = 19 + 1</code></li>
       <li><code style="color:black">lieu = "Marseille arrondissement" + 6</code></li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol>
        <li>Vrai</li>
        <li>Faux: le nom de la variable doit être écrit sans les guillemets.</li>
        <li>Vrai</li>
        <li>Vrai: la variable stocke alors l'entier 20</li>
        <li>Faux: on ne peut pas ajouter une chaine de caractères et un entier.</li>
        
      </ol>
    </div>
  </div>
</div>

## Flash card 3

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Type de variable</h1>
      <p>Quelle est le type de chaque variable après affectation?<br>
      Choisir parmi: str, int, float</p>
      <ol>
        <li><code style="color:black">jour1 = "lundi"</code></li>
        <li><code style="color:black">année = 2021</code></li>
        <li><code style="color:black">L = 1.83</code></li>
        <li><code style="color:black">heure = 12 + 0.25</code></li>

      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>str</li>
        <li>int</li>
        <li>float</li>
        <li>float</li>
      </ol>
    </div>
  </div>
</div>

## Flash card 4

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="font-size: 12px">
      <h1>Construire une chaine de caractères</h1>
      <p>On affecte "Carl" et 3 aux variables <i>nom</i> et <i>n</i>.<br>
        Qu'est ce qui sera affiché en console lorsque l'on fait:<br>
        <code style="color:black">message = "Bonjour" + nom + "c\'est votre " + str(n) + "e tentative"</code><br>
        <code style="color:black">print(message)</code>
      </p>
      <ol>
        <li>message</li>
        <li><b>TypeError</b></li>
        <li>Bonjour nom c'est votre str(n)e tentative</li>
        <li>Bonjour Carl c'est votre 3e tentative</li>

      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>Faux. On affiche le <i>contenu</i> de message. Pas le mot <i>message</i></li>
        <li>Faux: la chaine de caractères est bien formée à partir d'une somme de str</li>
        <li>Faux: str(n) renvoie la chaine de caractere construite à partir de la valeur de n. Ici "3".</li>
        <li>Vrai</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 5

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Opérations en python</h1>
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

# Relire le cours
Lien vers la page [introduction au langage Python](/docs/SNT_2nde/pages/pages_algo/python/python2/index.html)

<script type="text/javascript" src="/scripts/flash_cards.js"></script>
