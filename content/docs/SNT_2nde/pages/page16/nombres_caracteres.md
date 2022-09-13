---
Title : nombres et caracteres
---

# Codage des nombres
Ce cours comprend une page d'exercices avec des flash cards : [Lien vers la page d'exercices](/docs/SNT_2nde/pages/page16/ex1/index.html)

## Explication en vidéo

<figure>
  <a href = "https://youtu.be/VRdp_vaNRoY">
    <img src="../images/video1.png">
    <figcaption>introduction au langage binaire</figcaption>
  </a>
</figure>

## Définition de la numeration binaire
La numeration binaire est une numeration de position, en base 2.

> Numération en base 2 : 
- On utilise 2 symboles 0 et 1
- Le mot-nombre comprend, depuis la droite vers la gauche : les unités, les paires, les paires de paires…

> Numeration de position : on utilise les mêmes chiffres pour représenter les unités, les paires, etc…

## Comparaison avec la numération décimale
La numération décimale est aussi une numération de position. On retrouve donc des similitudes avec le binaire:

| | decimale | binaire |
|--- |--- |--- |
| base | 10 | 2 |
| chiffres utilisés | 0,1,2,3,4,5,6,7,8,9 | 0, 1 |
| poids du chiffre le plus à droite | 1 (unité) | 1 (unité) |
| poids du chiffre à gauche des unités | 10 (dizaines) | 2 (paire) |
| poids du chiffre encore plus à gauche | 100 (dizaine de dizaine) | 4 (paire de paire) |

*Résumé :*

<figure>
  <img src="../images/base10.png">
  <figcaption>base10</figcaption>
  </figure>

<figure>
  <img src="../images/base2.png">
  <figcaption>base2</figcaption>
  </figure>

## Multiples binaires
Les mémoires des machines imposent d'utiliser des multiples de l'octet : ko; Mo; Go; To

> Conversion en bits 

| unité | valeur approchée en bits | valeur exacte |
|--- | --- | --- |
| kilobits (kb) | 1000 | 2<sup>10</sup> |
| megabits (Mb) | 10<sup>6</sup> | 2<sup>20</sup> |
| gigabits (Gb) | 10<sup>9</sup> | 2<sup>30</sup> |
| terabits (Tb) | 10<sup>12</sup> | 2<sup>40</sup> |
| petabits (Pb) | 10<sup>15</sup> | 2<sup>50</sup> |

<br>

> Conversion en octets

| unité | valeur approchée en bits | valeur exacte |
|--- | --- | --- |
| kilooctets (ko) | 10<sup>3</sup> | 2<sup>10</sup> |
| megaoctets (Mo) | 10<sup>6</sup> | 2<sup>20</sup> |
| gigaoctets (Go) | 10<sup>9</sup> | 2<sup>30</sup> |
| teraoctets (To) | 10<sup>12</sup> | 2<sup>40</sup> |
| petaoctets (Po) | 10<sup>15</sup> | 2<sup>50</sup> |

<br>

> Rappels : 

* 8 bits = 1 octet
* 10<sup>3</sup> = 1000
* 2<sup>10</sup> = 1024 

# Codage des caractères
## Texte et caractères
* Un **texte** est une chaine de caractères et de symboles (dont l'espace, virgule...). La représentation du texte dans l'ordinateur suit ce même schéma : c'est le rangement à des emplacements consécutifs de la mémoire des représentations des caractères un à un. Chaque caractère est représenté par un entier (sur un certain nombre d’octets).

Etant donné le nombre n de symboles différents à coder, que peut prendre chaque caractère, il faut un nombre de bits p tel que 2<sup>p</sup> >= n. Ainsi, 2<sup>7</sup> > 100 caractères du clavier.

Dans l’hypothèse où ce nombre p vaut 8: Si le texte contient C caractères, il faut C * 8 bits de données pour coder tout le texte.

<figure>
  <img src="../images/word.png" alt="word count">
  <figcaption>Word permet de compter les mots et caractères d'un texte</figcaption>
  </figure>

> Dans l'hypothèse où chaque caractère serait codé sur un seul octet, quel serait le poids (en ko) de ce fichier texte?

## Coder les caractères
Il existe plusieurs normes d'encodage des caractères (c'est à dire de correspondance entre caractères et nombres).

* **L'ASCII** (American Standard Code for Information Interchange), inventé par Bob Bemer en 1961. C’est un code sur 7 bits, le premier bit étant 0 (Dans le temps on utilisait ce bit comme bit de parité).<br>
Les caractères de 0 à 31 ainsi que le 127 ne sont pas affichables, et correspondent à des directives de terminal. Le caractère 32 est l’espace blanc. Les autres correspondent à différents symboles de ponctuation, aux chiffres, aux lettres majuscules (à partir du caractère 65) et minuscules (après 97).
<br>
La table ASCII propose ainsi un alphabet, mettant en correspondance 127 caractères avec leur représentation binaire.

<figure>
  <img src="../images/ascii.png" alt="ascii">
  <figcaption>extrait de la table ASCII</figcaption>
  </figure>

* D'autres normes comprenant **l'ASCII étendu** permettront d'ajouter les caractères accentués à cette première table.
* La norme la plus riche, englobant également les alphabets grecs,  arabes et asiatiques est la norme **Unicode**. Cette norme dont la première publication remonte à 1991, 
<br>
Unicode permet de normaliser environ 1 000 000 caractères. L'encodage des caractères se fait sur plus d'un octet et, si le nombre de bits était fixe, les fichiers textes seraint inutilement lourds.

* Encodages Unicode comprimés : aujourd'hui, en Europe, la norme d'encodage la plus utilisée est la norme **UTF-8**, comprenant l'encodage de tous les caractères nécessaires pour les langues latines. (UTF-8 = 1 octet). Il existe aussi les normes étandues UTF-16 et UTF-32, dont l'encodage prend plus de 8 bits (respectivement 16 et 32). 
<br>
La principale caractéristique d'UTF-8 est qu'elle est rétro-compatible avec le standard ASCII, c'est-à-dire que tout caractère ASCII se code en UTF-8 sous forme d'un unique octet, identique au code ASCII. Par exemple « A » (A majuscule) a pour code ASCII 65 (0x41) et se code en UTF-8 par l'octet 65. 

 
<figure>
  <img src="../images/martine.png" alt="ascii ou utf8">
</figure>


Chaque caractère dont le point de code est supérieur à 127 (0x7F) (caractère non ASCII) se code sur 2 à 4 octets:

* Codage des caractères Unicode sur plusieurs octets. 


0bbbbbbb                                  1 octet codant 1 à 7 bits

110bbbbb 10bbbbbb                         2 octets codant 8 à 11 bits


# Exercices et flash card
[Lien vers la page d'exercices](/docs/SNT_2nde/pages/page16/ex1/index.html)

