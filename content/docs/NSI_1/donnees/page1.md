---
Title : Denombrer
---

*Données, machines, algorithmes, langages*

# Dénombrer: du comptage au calcul mécanique
## 1. Ecriture des nombres: (Bordas p9)
*mots clés: le statut de nombre, base 10, 2, 16, Leibniz et le binaire*

<figure>
  <img src="../images/numeration1.JPG">
  <figcaption>Systeme de numération égyptien et gréco-romain (source:Bordas NSI)</figcaption>
</figure>

Voir la page dédiée dans la partie SNT sur la numération au cours des ages: [Lien](/docs/SNT_2nde/pages/page14/histoire_num)

## 2. Les abaques et le boulier
### Comment additionne t-on deux nombres avec un abaque?
*Un abaque est le nom donné à tout instrument mécanique plan facilitant le calcul.*

Au départ, une opération aussi simple que l'addition demande de la mémoire, d'utiliser les doigts de la main, ou des artefacs (petits cailloux ou des petits jetons en argile) : jusqu'à 3300 ans avant JC, voire plus tard selon les civilisations.

Puis les abaques ont permi d'exploiter la numération de position en base 10 en séparant les unités des dizaines, centaines, et plus, avec des jetons en colonnes.

La colonne la plus à droite étant celle des unités, celle à sa gauche, les dizaines, ...

<figure>
  <img src="../images/abaque.jpeg">
  <a href="https://fr.wikipedia.org/wiki/Abaque_(calcul)" ><figcaption>Reconstitution d'un abaque romain</figcaption></a>
</figure>

La méthode est expliquée ici avec un container de billes, mais elle peut être adaptée facilement à l'usage du boulier...

* On dispose les billes dans chaque colonne (centaine à gauche, puis dizaine et unité à gauche). Les nombres à additionner sont écrits sur 2 rangées, l'une sous l'autre.

<figure>
  <img src="../images/addition_1.png">
  <figcaption>104 + 17 - debut</figcaption>
</figure>

* On deplace les billes dans l'une des rangées

<figure>
  <img src="../images/addition_2.png">
  <figcaption>104 + 17 - etape 2</figcaption>
</figure>

* On rassemble les billes par 10 lorsqu'il y a un depassement dans l'une des colonnes, et on les remplace par une retenue dans la colonne plus à gauche.

<figure>
  <img src="../images/addition_3.png">
  <figcaption>104 + 17 - etape 3</figcaption>
</figure>

* On peut alors exprimer le résultat: 104 + 17 = 121

<figure>
  <img src="../images/addition_4.png">
  <figcaption>104 + 17 - resultat</figcaption>
</figure>

**Exercice:**

* Représenter les étapes de la **soustraction** de 15 à 103 à l'aide de ce même abaque.

### Le boulier
*Le boulier est un dispositif mécanique d'aide au calcul. Il est lié au système de numération décimale*.

<figure>
  <a href="https://youtu.be/GnMgHsos7cY" target="blank">
  <img src="../images/video_boulier.png">
  <figcaption>Youtube: Les bouliers - Micmaths</figcaption></a>
</figure>

**Exercice:**

* Représenter les étapes de la multiplication de 6 par 4 avec un boulier à 10 unités.
* Représenter les étapes de la division de 32 par 8 avec ce même boulier.
* Pourquoi l'auteur de la video avance t-il que le disque mécanique est une amélioration importante par rapport aux colonnes droites de billes?
* Quel est le problème qui survient lorsque l'on compte avec le disque numéroté?

## 3. Circuits électroniques à 2 états
* La numération binaire: [Leibnitz](https://fr.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz) (1646-1716) [archives ouvertes](https://archive.org/details/69LeibnizDiadica/mode/2up)

Ce manuscrit exceptionnel, écrit par Leibniz à 33 ans mais non publié, fait le lien entre deux de ses travaux majeurs, paraissant a priori indépendants : son idée du calcul binaire et son idée de machine à calculer décimale.
Ce manuscrit apparaît à ce jour comme la plus ancienne évocation d'un *calculateur binaire*.

<figure>
  <img src="../images/manuscrit_Leib.png">
  <a href="https://archive.org/details/69LeibnizDiadica/mode/2up">
  <figcaption>manuscrit sur la numération binaire - Leibnitz</figcaption></a>
</figure>

* Comprendre la frontière entre le matériel et le logiciel: [blog couleur-science.eu](https://couleur-science.eu/?d=e2e507--comprendre-la-frontiere-entre-le-materiel-et-le-logiciel)


# Cours: Représentation des entiers positifs
## Numération additive
Pour la numération additive, la lecture d'un nombre se fait en additionnant les valeurs de chacun des chiffres-caractères.

<figure>
  <img src="../images/exemple-egypt.gif">
  <figcaption>Exemple: la numération egyptienne</figcaption>
</figure>


## Numération de position
La numération de position permet d'écrire un nombre avec les mêmes symboles pour les rangs 0, 1, 2, etc... Le rang zero étant le plus à droite. Le poids d'un chiffre dépend de son rang:

$$Poids = Base^{rang}$$

La numération de position implique d'utiliser un symbole pour le zero.

## Base
Une base est un nombre qui permet de décomposer un nombre entier dans une numération de position:

* **Base 10**: 

<figure>
  <img src="../images/base10.png">
  <figcaption>234<sub>10</sub> = 2 x 10<sup>2</sup> + 3 x 10 + 4</figcaption>
  </figure>

* **Base 2**

<figure>
  <img src="../images/base2.png">
  <figcaption>101<sub>2</sub> = 1 x 2<sup>2</sup> + 0 x 2 + 1</figcaption>
  </figure>

La numération **décimale** est une numération de **position**, en **base 10**.

La numération **binaire** est une numération de **position**, en **base 2**. Les chiffres binaires sont uniquement des 0 et des 1.

**Tableau comparatif, incluant la base hexadécimale:**

| | decimale | binaire | hexadécimale |
|--- |--- |--- |--- |
| base | 10 | 2 | 16 |
| chiffres utilisés | 0,1,2,3,4,5,6,7,8,9 | 0, 1 | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F |
| poids du chiffre le plus à droite | 1 (unité) | 1 (unité) | 1 (unité) |
| poids du chiffre à gauche des unités | 10 (dizaines) | 2 (paire) | 16 |
| poids du chiffre encore plus à gauche | 100 (dizaine de dizaine) | 4 (paire de paire) | 256 |

L'intérêt de la base hexadécimale:

* permet de traduire le nombre binaire sur un octet en un nombre hexadécimal à 2 chiffres: lecture simplifiée
* la conversion du binaire à l'hexadécimal est immédiate et facile: on rassemble les chiffres binaires par 4, on évalue séparemment leur valeur décimale, et on remplace par le caractère hexadécimal correspondant:

<figure>
  <img src="../images/bin2hex.png">
  <figcaption>Conversion de 1101 1001 en hexadecimal</figcaption>
  </figure>

## Capacité de comptage
### Nombre de combinaisons
Le nombre de combinaisons atteignables avec N chiffres, dans la base B, est:

$$B^N$$

*Exemple:*

Pour un nombre binaire de 4 bits, le nombre de combinaisons possibles est:

$$2^4 = 16$$

On peut donc écrire 16 nombres différents avec 4 bits.

### Valeur maximale atteinte sur N bits
Le nombre le plus grand atteignable avec N chiffres, dans la base B, est:

$$B^N - 1$$

L'étendue que l'on peut compter avec N chiffres est alors: [0,B<sup>N</sup>-1]

**Exemples**

* Base 10, avec 2 chiffres: étendue de 0 à 10<sup>2</sup> -1, soit: [0,99]
* Base 2, avec 8 chiffres: étendue de 0 à 2<sup>8</sup> -1, soit: [0,255]

### Overflow
C'est un dépassement (débordement) de capacité. Pour certains langages infomatiques, il est necessaire de déclarer la taille exacte réservée à une variable lorsqu'elle est déclarée.

## L'octet
### Un mot-octet de 8 bits
En numération **binaire**, les chiffres sont souvent associés par 8, ce qui forme un mot appelé *octet*. Les chiffres ont pour rangs, 0 à 7. Un octet représente des nombres de 0 à 255.

### Multiples binaires
Les mémoires des machines imposent d'utiliser des multiples de l'octet : ko; Mo; Go; To

> Conversion en bits 

| unité | valeur approchée en bits |
|--- | --- |
| kilobits (kb) | 1000 | 
| megabits (Mb) | 10<sup>6</sup> | 
| gigabits (Gb) | 10<sup>9</sup> | 
| terabits (Tb) | 10<sup>12</sup> | 
| petabits (Pb) | 10<sup>15</sup> | 

<br>

> Conversion en octets

| unité | valeur approchée en octets |
|--- | --- |
| kilooctets (ko) | 10<sup>3</sup> | 
| megaoctets (Mo) | 10<sup>6</sup> | 
| gigaoctets (Go) | 10<sup>9</sup> | 
| teraoctets (To) | 10<sup>12</sup> | 
| petaoctets (Po) | 10<sup>15</sup> | 

<br>

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

> Rappels et remarques : 

* 8 bits = 1 octet
* 10<sup>3</sup> = 1000
* 2<sup>10</sup> = 1024 

## Convertir de la base 10 vers la base 2
La conversion utilise le principe de la division euclidienne:

<figure>
  <img src="../images/vis-division.png">
  <figcaption>division euclidienne de 4 par 2</figcaption>
</figure>

Pour convertir un nombre N décimal dans la base 2, on réalise la **division par 2** de N puis des **quotients** de ses divisions, jusqu'à ce que le quotient arrive à **0**.

Le **resultat** de la conversion en base 2 est la série de valeur obtenues pour les **restes**. Le dernier reste obtenu est celui de poids le plus fort:

<figure>
  <img src="../images/vis-euclide.png">
  <figcaption>conversion: 4<sub>10</sub> = 100<sub>2</sub></figcaption>
</figure>



## Exemples et visuels
*Visuels:*

* principe de gestion mecanique de la retenue

<figure>
<a href="https://youtu.be/rjWfIiaOFR4?t=40" target="blank">
  <img src="../images/gears.png">
  <figcaption>Youtube: How mechanical counters work, gears</figcaption>
</a>
</figure>

* Overflow avec un compteur mécanique

<figure>
<a href="https://youtu.be/rjWfIiaOFR4?t=154" target="blank">
  <img src="../images/mecanical_count.png">
  <figcaption>Youtube: How mechanical counters work, overflow</figcaption>
</a>
</figure>




## Mémoires
Les différents supports de stokage utilisés pour les ordinateurs modernes sont présentés [ici (wikipedia, mémoires informatiques)(https://fr.wikipedia.org/wiki/M%C3%A9moire_(informatique)#Mat%C3%A9riel_informatique)

Le **codage binaire** (2 états) se fait à l'aide:

* d'une piste pouvant avoir 2 polarités magnétiques (disque dur, disquette)
* un creux ou une bosse sur un support (DVD, CD-ROM)
* materiaux reflechissant ou non reflechissant (CD-ROM à graver)
* condensateur chargé ou déchargé (mémoire RAM, registres)

Les techniques de stockage mécaniques, par exemple par rubans perforés ont été largement utilisés dès le début de l'informatique, puis abandonnés au profit de supports plus pratiques et plus rapides




# TP et outils
## Simulateur de circuit électronique en ligne: [https://logic.ly/demo/](https://logic.ly/demo/)

<figure>
    <img src="../images/sim-circ.png">
    <a href="https://logic.ly/demo/">
    <figcaption>Exemples de circtuits créés à l'aide du simulateur logic.ly</figcaption>
  </a>
</figure>

**Questions:** Pour chacun des circuits ci-dessus:

**a.** Le circuit permet-il une interaction avec l'utilisateur?<br>
**b.** Quels sont les composants utilisés?<br>
**c.** Expliquer le comportement du circuit, pourquoi la lampe s'allume t-elle (ou pas)?<br>



## autres

* [flash-cards](/docs/NSI_1/donnees/ex1/)
* autre logiciel de simulation electronique en ligne : https://www.lucidchart.com/pages/fr/exemple/logiciel-schema-electrique
