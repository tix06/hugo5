---
Title : Exercices séquences
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
      <h1>Opérations sur les variables</h1>
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

### Flash card 2
```
L = [['a', 'b'], ['c', 'd'], ['e', 'f']]
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Listes 2D</h1>
      Que valent chacune des expressions suivantes ?
      <ol><li>len(L)</li>
        <li>len(L[0])</li>
        <li>L[1]</li>
        <li>L[1][0]</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>3 car la liste L comporte 3 éléments (des sous listes)</li>
        <li>2 car la liste L[0] comporte 2 éléments ('a' et 'b')</li>
        <li>['c', 'd']</li>
        <li>'c'</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 3
```
tictactoe = [['X', 'O',  'O'],
             ['O', 'O',  'O'],
             ['O', 'O',  'X']]
```

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Listes 2D</h1>
      Modifier la liste ?
      <ol><li>Quelle expression permet d'obtenir une diagonale de 'X'?</li>
        <li>Quelle expression permet d'obtenir une ligne de 'X' sur la premiere ligne?</li>
        <li>Quelle expression permet d'obtenir une ligne de 'X' sur la dernière ligne?</li>
      </ol>
    </div>
    <div class="flip-card-back">
      <h1>Réponses</h1>
      <ol><li>L[1][1] = 'X'</li>
        <li>L[0] = ['X', 'X',  'X']</li>
        <li>L[-1] = ['X', 'X',  'X']</li>
      </ol>
    </div>
  </div>
</div>

### Flash card 4
methodes de listes: append, insert, pop

### Flash card 5
tri et selection dans une liste: sort, sorted, choice

### Flash card 6
copie par reference et par valeur

### Flash card 7
dictionnaire

### Flash card 8
méthodes de dictionnaire

### Flash card 9
comprehension de liste et dictionnaire

# Relire le cours
Lien vers la page : <a href="/docs/python/pages/variables/page1/">Variables</a>


<script type="text/javascript" src="/scripts/flash_cards.js"></script>