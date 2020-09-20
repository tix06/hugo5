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
Le texte est constitué de caractères. Chaque caractère est représenté par un entier (sur un certain nombre d’octets).

Il existe plusieurs normes d'encodage des caractères (c'est à dire de correspondance entre caractères et nombres).

* **L'ASCII** (American Standard Code for Information Interchange), inventé par Bob Bemer en 1961. C’est un code sur 7 bits, le premier bit étant 0 (Dans le temps on utilisait ce bit comme bit de parité).<br>
Les caractères de 0 à 31 ainsi que le 127 ne sont pas affichables, et correspondent à des directives de terminal. Le caractère 32 est l’espace blanc. Les autres correspondent à différents symboles de ponctuation, aux chiffres, aux lettres majuscules (à partir du caractère 65) et minuscules (après 97).
* D'autres normes comprenant **l'ASCII étendu** permettront d'ajouter les caractères accentués à cette première table.
* Aujourd'hui, en Europe, la norme d'encodage la plus utilisée est la norme **UTF-8**, comprenant l'encodage de tous les caractères nécessaires pour les langues latines. (UTF-8 = 1 octet). Il existe aussi les normes étandues UTF-16 et UTF-32, dont l'encodage prend plus de 8 bits (respectivement 16 et 32).
* Enfin, la norme la plus riche, englobant également les alphabets grecs,  arabes et asiatiques est la norme **Unicode**. Cette norme dont la première publication remonte à 1991, est compatible avec celle UTF-8 (les caractères ascii et UTF-8 ont la même valeur numérique en Unicode). Unicode permet de normaliser environ 100 000 caractères. Mais l'encodage des caractères se fait sur plus d'un octet et rend les fichiers textes assez lourds (inutilement lourd pour les caractères latins).

<figure>
  <img src="../images/ascii.png" alt="ascii">
  <figcaption>extrait de la table ASCII</figcaption>
  </figure>



# Exercices et flash card
[Lien vers la page d'exercices](/docs/SNT_2nde/pages/page16/ex1/index.html)

