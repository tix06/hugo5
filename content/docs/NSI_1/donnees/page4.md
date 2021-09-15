---
Title: Codage des nombres
---

# Entiers relatifs

## nombres signés
Les entiers signés sont positifs, negatifs ou nuls. Comme il n'est pas possible d'écrire, comme nous le faisons normalement, un nombre négatif avec un signe (-) devant, il va falloir utiliser une nouvelle convention.

<figure>
  <img src="../images/moins127.png">
</figure>

La première idée est de reproduire le signe en utilisant le bit de poids fort du nombre pour le représenter. Les n – 1 bits restants donnent la valeur absolue binaire du nombre.

*Problèmes:* 

*  2 représentations pour le zero
*  arithmetique plus difficile: on ne peut pas utiliser le même algorithme que pour l'addtion de 2 nombres positifs.

## Représentation en complément à 2

C’est la représentation standard sur les ordinateurs pour exprimer les nombres entiers négatifs. Quand on parle de représentation signée ou d’entiers signés, ces derniers sont toujours exprimés à l’aide de la représentation en **complément à 2**.

**Définition**

> Sur n bits, on exprime les nombres de l’intervalle [–2<sup>{n-1}</sup>; 2<sup>{n – 1}</sup> – 1] selon les 2 règles suivantes:

> * Un nombre positif est représenté de façon standard par son écriture binaire. 
* un nombre négatif est représenté en ajoutant 1 à son complément à 1 (obtenu en inversant tous les bits) et en laissant tomber une éventuelle retenue finale.

<figure>
  <img src="../images/moins127(2).png">
</figure>

il est important d’indiquer sur combien de bits doit s’écrire le nombre car on ne rajoute pas des zéros en tête mais 1...

**Intérêt :** on n’a plus à se préoccuper du signe des nombres avant d’effectuer l’opération.

*Exemple:*

Soit l'entier signé - 127 (1000 0001) que l'on additionne à 127 (0111 1111):

<figure>
  <img src="../images/complea2.png">
</figure>

# Représentation des nombres décimaux
## nombres fractionnaires


Pour représenter des nombres avec une partie fractionnaire, décomposer la partie fractionnaire en puissances *inverses* de 2:

| 2<sup>-1</sup> | 2<sup>-2</sup> | 2<sup>-3</sup> | 2<sup>-4</sup> | 2<sup>-5</sup> | 2<sup>-6</sup> | 2<sup>-7</sup> | 2<sup>-8</sup> |
| --- |  --- | --- | --- | --- | --- | --- | --- |
| 1/2 | 1/4 | 1/8 | 1/16 | 1/32 | 1/64 | 1/128 | 1/256 |
| 0,5 | 0,25 | 0,125 | 0,0625 | 0,03125 | 0,015625 | 0,0078125 | 0,0078125 | 0,000390625 |

Lorsque l'on représente la partie décimale de 0.375, on a une valeur exacte que l'on peut coder sur 1 seul octet:

<figure>
  <img src="../images/virgule1.png">
  <figcaption>conversion binaire de la partie décimale .0375</figcaption>
</figure>

Le problème est que la représentation d'un nombre peut être finie dans une base donnée, et être infini dans une autre: 

<figure>
  <img src="../images/virgule2.png">
  <figcaption>conversion binaire de la partie décimale .1</figcaption>
</figure>

Si on n'utilise que 8 bits pour la partie décimale de 0.1, la valeur numérisée vaut alors:

$$\tfrac{1}{16} + \tfrac{1}{32} + \tfrac{1}{256} = 0.09765625$$

Ce qui est très éloigné de la réalité...

## codage en virgule fixe (hachette p167)

## codage en virgule flottante

# Liens
* [http://mpechaud.fr/scripts/representationnombres/rep.html](http://mpechaud.fr/scripts/representationnombres/rep.html)
* [https://irem.univ-reunion.fr/spip.php?article692](https://irem.univ-reunion.fr/spip.php?article692)
