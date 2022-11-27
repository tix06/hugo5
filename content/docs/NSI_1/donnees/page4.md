---
Title: Codage des nombres
---

# Entiers relatifs

## nombres signés
Les entiers signés sont positifs, negatifs ou nuls. Comme il n'est pas possible d'écrire, comme nous le faisons normalement, un nombre négatif avec un signe (-) devant, il va falloir utiliser une nouvelle convention.

{{< img src="../images/moins127.png" >}}
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

{{< img src="../images/moins127(2).png" >}}
il est important d’indiquer sur combien de bits doit s’écrire le nombre car on ne rajoute pas des zéros en tête mais 1...

**Intérêt :** on n’a plus à se préoccuper du signe des nombres avant d’effectuer l’opération.

*Exemple:*

Soit l'entier signé - 127 (1000 0001) que l'on additionne à 127 (0111 1111):

{{< img src="../images/complea2.png" >}}
# Représentation des nombres décimaux
## nombres fractionnaires
Un nombre avec virgule, exprimé en base décimale peut être représenté comme une somme de puissances de 10:

{{< img src="../images/virg10.png" caption="écriture d'un nombre à virgule en base 10" >}}
* Les puissances de 10 positives pour la partie entière (à gauche de la virgule)
* les puissances de 10 negatives pour la partie après la virgule

En base 2, le nombre peut aussi s'écrire avec une virgule, et être lu comme une somme en puissance de 2:

{{< img src="../images/virg2.png" caption="écriture du même nombre en base 2" >}}
* Les puissances de 2 positives pour la partie entière (à gauche de la virgule)
* les puissances de 2 negatives pour la partie après la virgule

Pour représenter des nombres avec une partie fractionnaire, décomposer la partie fractionnaire en puissances *inverses* de 2:

| 2<sup>-1</sup> | 2<sup>-2</sup> | 2<sup>-3</sup> | 2<sup>-4</sup> | 2<sup>-5</sup> | 2<sup>-6</sup> | 2<sup>-7</sup> | 2<sup>-8</sup> |
| --- |  --- | --- | --- | --- | --- | --- | --- |
| 1/2 | 1/4 | 1/8 | 1/16 | 1/32 | 1/64 | 1/128 | 1/256 |
| 0,5 | 0,25 | 0,125 | 0,0625 | 0,03125 | 0,015625 | 0,0078125 | 0,00390625 | 

Lorsque l'on représente la partie décimale de 0.375, on a une valeur exacte que l'on peut coder sur 1 seul octet:

{{< img src="../images/virgule1.png" caption="conversion binaire de la partie décimale .0375" >}}
Le problème est que la représentation d'un nombre peut être finie dans une base donnée, et être infini dans une autre: 

{{< img src="../images/virgule2.png" caption="conversion binaire de la partie décimale .1" >}}
Si on n'utilise que 8 bits pour la partie décimale de 0.1, la valeur numérisée vaut alors:

$$\tfrac{1}{16} + \tfrac{1}{32} + \tfrac{1}{256} = 0.09765625$$

Ce qui est très éloigné de la réalité...

Il existe une méthode systématique pour déterminer les bits de la partie fractionnaire. Voir le Bordas p18, §5.

## codage en virgule fixe
Une première idée pourrait être d'utiliser 2 octets: 

* 1 octet pour la partie entière. Si le nombre est signé, cela veut dire que le nombre est compris, pour sa partie entière entre -128 et 127.
* 1 octet pour la partie décimale. Cette partie est alors codée sur 256 valeurs, selon la méthode vue plus haut). 

Il y a alors 2 problèmes avec cette représentation:

*Problème 1:* La partie fractionnaire va manquer de précision. Il n'y aura pas assez de chiffres significatifs lors de l'approximation. L'écart avec la valeur vraie du réel peut être trop important si on veut une précision raisonnable

*Problème 2:*  Certains nombres ont une représentation avec un nombre fini de chiffres après la virgule dans la base 10, mais infinie dans la base 2. (voir la cas du 0.1 vu plus haut, qui est approximé à 0.09765625).

Ces approximations sont alors la source d'erreurs de calcul en python:

{{< img src="../images/approxi.png" caption="somme de 0.1 + 0.2 en python" >}}
## codage en virgule flottante
### Principe
Pour un ordinateur, TOUT est discrêt: cela signifie que les nombres réels seront *approchés* par des nombres dits *à virgule flottante*.

Ces nombres avec une partie décimale sont représentés sur ordinateur selon la norme IEEE 754.

Ce codage revient à représenter le nombre sous la forme:

$$+/-1,M.2^E$$

Cette forme rappelle ainsi l'écriture en notation scientifique.

**M** s’appelle la **mantisse** du nombre et **E** l’**exposant**. Comme la mantisse commence toujours par une partie entière égale à 1, on ne l’écrit pas et on n’exprime que la partie fractionnaire, M

Selon la précision, dite *simple* ou *double*, le nombre M est constitué de 23 bits ou bien de 55 bits. 

| precision | bit de signe | E | M |
| --- | --- | --- | --- |
| simple | 1 | 8 | 23 |
| double | 1 | 8 | 55 |


Selon cette norme IEEE 754, en 32 bits (simple precision):

* Le premier bit est celui du signe
* les 8 bits suivants sont les bits de l'exposant E, auquel on a ajouté 127. Ce qui permet de coder l'exposant avec des valeurs comprises dans l'intervalle [-127; 128]
* les bits restants sont ceux de M

<img src="../images/mantisse823bits.png"> 

*Remarque :* En raison du nombre limité de bits de la représentation, les calculs en virgule flottante ne peuvent pas atteindre une précision infinie.

*Application :* Soit la nombre 500 à coder en IEEE 754: 

$$500=1,953125×2^8 =(1+2^{−1} +2^{−2} +2^{−3} +2^{−4} +2^{−6} )×2^8$$

Rappelez vous que l'on additionne 127 aux bits de l'exposant E. Cela donne alors notation binaire:

$$0~10000111~11110100000000000000000$$

On a un bit de signe égal à 0, un exposant égal à 8 + 127 et les premiers bits de la pseudo-mantisse qui exprime 0,953125.

### Exercice
Pour l'exercice nous inventons une nouvelle norme: la IEEE 754 à 5 bits.
Avec 5 bits, nous pouvons coder 25 nombres flottants. La precision est alors de 2 chiffres significatifs (taille en bits de la mantisse). Le format binaire est ainsi: <img src="../images/mantisse22bits.png"> 

Voici la liste des 16 positifs :

{{< img src="../images/float5bits.png" >}}
Supposons que l'exposant E se calcule d'après e selon la règle suivante:

$$E = e - 1$$

> Question: écrire les nombres binaires correspondants à ces 16 positifs.

<br>
Rappelez vous que le nombre s'écrit sous la forme:

$$+/-1,M.2^E$$
<br>

<div><h1>
    <label for="bloc1">Correction</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc1" class="visually-hidden">

    <div class="control-me">

<table>
  <tr><td>binaire</td><td>e</td><td>E</td><td>M = m</td><td>flottant représenté: 1,b<sub>1</sub>b<sub>0</sub>.2<sup>E</sup><sub>(2)</sub></td></tr>
  <tr><td>0 00 00 </td>
      <td>00</td>
      <td>-1</td>
      <td>00</td>
      <td>1,0.2<sup>-1</sup> = 0,1<sub>2</sub> = 0,5</td></tr>
    <tr><td>0 00 01 </td>
      <td>00</td>
      <td>-1</td>
      <td>01</td>
      <td>1,01.2<sup>-1</sup> = 0,101<sub>2</sub> = 1/2 + 1/8 = 0,625</td></tr>

    <tr><td>...</td></tr>
</table>

</div>
</div>

<br>

> Attention, il faut donc bien distinguer un nombre de sa représentation.

# Liens
* [http://mpechaud.fr/scripts/representationnombres/rep.html](http://mpechaud.fr/scripts/representationnombres/rep.html)
* [https://irem.univ-reunion.fr/spip.php?article692](https://irem.univ-reunion.fr/spip.php?article692)
* [binary convert](http://www.binaryconvert.com/index.html)
* [https://fr.wikipedia.org/wiki/IEEE_754](https://fr.wikipedia.org/wiki/IEEE_754)



