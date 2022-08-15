---
Title : memoire des machines
---

Les machines ne comprennent que les chiffres ! Et pas n’importe lesquels : 0 et 1 sont ses préférés... Pourtant, une machine comme celle qui vous sert à afficher cette page n'est pas (seulement) une calculatrice:

*Comment peut-on travailler avec du texte ou des images sur une machine, qui ne manipule que du binaire?*

# Mémoire d'une machine
Une machine manipule des données numériques BINAIRES. Ce sont des nombres constitués de chiffres ne pouvant prendre que 2 valeurs, 0 ou 1 : des bits.

Le stockage des bits s’est fait autrefois sur support papier (avec/sans trou):

<figure>
  <a href="https://fr.wikipedia.org/wiki/Codage_des_caract%C3%A8res_sur_carte_perfor%C3%A9e">
  <img src="../images/carte.png">
  <figcaption>carte perforée IBM - source wikipedia</figcaption></a>
</figure>


Aujourd’hui, le support mémoire est constitué de milliards de transistors, possédant 2 niveaux de tension : **5V** ou **0V**.

C’est donc le transistor qui permet la représentation d’un bit de donnée, en ajustant la tension électrique au niveau **haut** ou au niveau **bas**.

<figure>
  <img src="../images/transistor.png">
  <figcaption>Le transistor: un composant électronique à 2 états</figcaption>
</figure>

*Un transistor est un morceau de conducteur, dont la conductivité est contrôlée par sa troisième broche/borne. - Source: [Fonctionnement d'un ordinateur/Les transistors et portes logiques](https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur/Les_transistors_et_portes_logiques)* 

# Loi de Moore
Le nombre de transistors sur une puce électronique devrait être doublé tous les 2 ans, pour le même prix de fabrication. Les transistors deviennent donc de plus en plus petits.

La figure suivante montre l'évolution du nombre de transistors pour un même élement de surface:

<figure>
  <img src="../images/mem-moore.png">
  <a href="https://fr.wikipedia.org/wiki/Loi_de_Moore">
  <figcaption>illustration de la loi de Moore - source wikipedia</figcaption></a>
</figure>

# Coder de plus grandes valeurs
Les transistors sont gravés sur circuits intégrés, ce qui a permi d'atteindre des fortes densités par unité de surface. La finesse de gravure est actuellement de 10 nm environ (Intel).

<figure>
  <img src="../images/memory.png">
  <figcaption>Le transistor: un composant électronique à 2 états</figcaption>
</figure>


Une machine va traiter des informations qui vont être à l’origine très diverses, plus ou moins structurées, mais toujours en binaire : 

Ce sont des nombres, des caractères, des mots, des images, des sons, des bruits, la température, la quantité d'argent qu'on a dans notre porte-monnaie, notre âge, des dates, etc. 

La quantité de mémoire, même importante, n’est pas infinie dans une machine. C’est pourquoi on doit reserver un certain nombre de bit à chaque donnée, et ce nombre doit être ajusté au mieux.


<figure>
  <img src="../images/mem-bits.png">
  <figcaption>Le transistor: un composant électronique à 2 états</figcaption>
</figure>

Pour coder une information qui peut prendre plus de 2 valeurs, il faudra utiliser plusieurs *bits*. Ceux-ci sont souvent rassemblés par 8, formant un mot-octet. Celui-ci peut prendre 256 valeurs.

Actuellement, les disques durs vendus dans le commerce contiennent 1 à plusieurs To (teraoctets: 10<sup>15</sup> octets)

# Format des données
Dès l’invention de l’informatique, les ordinateurs ont pu manipuler des textes composés de caractères, que ce soit pour la saisie des commandes sur un clavier ou pour l’impression des résultats sur le papier. Il a donc fallu adopter une convention commune qui soit utilisée par tous les ordinateurs. Ainsi, est né en 1961 le code ASCII (American Standard Code for Information Interchange) qui associe une valeur numérique à chaque caractère de l’alphabet : 65 pour A, 66 pour B…

<figure>
  <a href="https://www.lookuptables.com/text/ascii-table">
  <img src="../images/ascii.png">
  <figcaption>table ascii, source: lookuptable.com</figcaption></a>
</figure>

Avec la taille des mémoires, et les performances des machines qui ont progressé, il a été possible de coder des données de plus en plus complexes. Il a fallu trouver un moyen de structurer ces données, c’est à dire de les mettre en forme et en lien dans un format approprié.

# Liens
* [binaire: interstices](https://interstices.info/nom-de-code-binaire/)