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
Le nombre de comninaisons atteignables avec N chiffres, dans la base B, est:

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

| unité | valeur approchée en bits | valeur exacte |
|--- | --- | --- |
| kilobits (kb) | 1000 | 2<sup>10</sup> |
| megabits (Mb) | 10<sup>6</sup> | 2<sup>20</sup> |
| gigabits (Gb) | 10<sup>9</sup> | 2<sup>30</sup> |
| terabits (Tb) | 10<sup>12</sup> | 2<sup>40</sup> |
| petabits (Pb) | 10<sup>15</sup> | 2<sup>50</sup> |

<br>

> Conversion en octets

| unité | valeur approchée en octets | valeur exacte |
|--- | --- | --- |
| kilooctets (ko) | 10<sup>3</sup> | 2<sup>10</sup> |
| megaoctets (Mo) | 10<sup>6</sup> | 2<sup>20</sup> |
| gigaoctets (Go) | 10<sup>9</sup> | 2<sup>30</sup> |
| teraoctets (To) | 10<sup>12</sup> | 2<sup>40</sup> |
| petaoctets (Po) | 10<sup>15</sup> | 2<sup>50</sup> |

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

# Exercices:
* conversions entre base 10 et base 2 ou 16

## algorithmes exprimés en langage naturel
* principe d'une horloge à quartz: utilisation de l'opérateur modulo
* conversions
* console python pour réaliser des calculs

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

# TP: Calculer en python
## Interpréteur et logiciel de developpement Python (IDE)
Python est un langage de programmation interprété.
Vous pouvez accéder à l'interpreteur python de plusieurs manières:

* à l'aide de la distribution Winpython installée sur les ordinateurs du lycée
* à l'aide d'une tablette, et l'application PyDroïd3
* à l'aide d'une calculatrice programmable en python (TI83 premium CE edition python)
* à l'aide d'un navigateur (Chrome ou autre), et d'un interpreteur en ligne: [https://www.pythonanywhere.com/](https://www.pythonanywhere.com/)

Nous allons explorer la dernière proposition: Connectez vous au site [https://www.pythonanywhere.com/](https://www.pythonanywhere.com/) et créez un compte. Vous devrez confirmer votre e-mail sous peu, afin de recuperer votre mot de passe en cas de perte.

Une fois le compte créé:

* 1: clic sur *account*
* 2: onglet *education*
* 3: renseigner le champs dans le paragraphe *Your teacher*

<figure>
  <img src="../images/pytanyw1.png">
  <figcaption>acceder à l'ongle education</figcaption>
</figure>



<figure>
  <img src="../images/pytanyw2.png">
  <figcaption>renseigner l'id du professeur: etixidor06</figcaption>
</figure>

Vous aurez besoin uniquement du compte *gratuit* pendant toute votre formation.

En cliquant sur le logo à gauche, ou sur *Dashboard*, vous revenez alors à votre tableau de bord. 

L'explorateur montre en partie gauche: les consoles, et au centre, les fichiers.

<figure>
  <img src="../images/pytanyw3.png">
  <figcaption>votre tableau de bord</figcaption>
</figure>

## Console Python
Si vous n'avez pas encore de console Python ouverte: aller dans *New console* et clic sur le bouton *>>> Python* (voir image plus haut). Choisir la version la plus recente proposée (3.X).

### Opérations sur des entiers

Tester alors les commandes suivantes et répondez aux questions:

| opérateur | exemple |
|--- |--- |
| + | 12 + 10 |
| * | a = 12 <br> b = 10 <br> a * b |
| / | 12 / 10 |
| // | 12 // 10 |
| - | 10 - 12 |
| ** | 2**8 |
| e | 12e-3 |
| % | 1%3 <br> 2%3 <br> 3%3 <br> 4%3 <br> 5%3 <br> 6%3 <br> 7%3 |

* **Question a:** Quel est le rôle pour chacun de ces opérateurs?
* **Question b:** Calculer à l'aide de la console le résultat de: 1127 + 9.10<sup>21</sup> / 104 <br>Ecrivez sur votre cahier l'expression utilisée en python, ainsi que le résultat, exprimé en langage mathématique.
* **Question c:** Quel est le signe utilisé pour séparateur décimal en python.
* **Question d:** Quel est le symbole utilisé pour l'affectation d'une valeur dans une variable? Ecrire alors l'instruction en python qui affecte le résultat de l'opération (a+b)/2 à la variable c.

### Opérations sur des chaines de caractères
à tester en console:

| opérateur | exemple |
|--- |--- |
| + | 'car' + 'nassier' |
| * | 'nsi' * 10 |
| + | a = "je suis" <br> b = 'vegetarien' <br> a + " " + b |
| * | a + " " + 3 * b |

* **Question e:** expliquer ce que réalisent les opérateurs + et * avec les chaines de caractère.

## fonctions natives et conversions
notation Ox, Ob, hex(), int(), type()

utilisation d'un visuel pour faire une fiche résumé des différentes conversions.

## fonctions programmées


## Python, un langage de programmation
Python est un *langage de programmation*. Comme d'autres langages, il permet d'exprimer des idées. Dans le cas d'un langage de programmation, ces idées sont appelées des *commandes*, et permettent de communiquer avec l'ordinateur.

Ces *commandes* peuvent être écrites dans un fichier texte, dont l'extension est `.py` (pour le langage Python). Ces fichiers sont appelés des *programmes*.

Executer un *programme* signifie que l'on demande à l'ordinateur de lire ce fichier, de le traduire en une suite d'opérations compréhensibles (pour lui), et de les réaliser.

On dit que chacune des *instructions* est *interprétée*.

```python
# mon premier programme
mon_nom = "Carl"
print("Bonjour et bienvenue " + mon_nom)
```

Lorsque l'on execute ce programme, il devrait s'afficher à l'écran:

`Bonjour et bienvenue Carl` 

> **Testez le** vous-même:

* Lancer l'interpréteur et editeur python: Dans le dossier *Winpython* de votre ordinateur, lancer le programme appelé **Spyder**.
* Dans la fenêtre de script **(1)**, au dessous des premières lignes, saisir les 3 instructions de votre programme (voir plus haut).



<figure>
  <img src="../images/spyder.png" alt="IDE Spyder">
  <figcaption>IDE Spyder</figcaption>
</figure>

* Sauvegardez votre fichier **(2)**. Donnez lui le nom `hello.py`. Mettez le dans votre dossier *mes Documents* (Windows).
* Executez le programme avec le bouton *Executer* **(3)**.
* Vous devriez voir l'affichage dans la console **(4)**.
* Remplacez *Carl* par votre propre nom. Modifiez le programme pour afficher, lorsque vous execcutez:

> **Bienvenue à toi, `<ton nom>`, parle et j'executerai !**


## Commentaire, sortie `print`, et variables
### Commentaire
**Commentaire**: tout ce qui est écrit sur la ligne commençant par `#` n'est pas interprété: il s'agit d'un commentaire.

### Sortie
**Sortie**: La fonction `print` est utilisée pour demander à l'ordinateur d'afficher un message. Celui-ci doit être écrit entre guillemets (simples ou double), et mis entre parenthèses. Il s'agit d'une *sortie*.

> *Exemple: `print("mon premier message")`* affiche: `mon premier message`

### Variables
**Variables**: Les langages de programmation permettent de stocker des données afin de pouvoir les réutiliser. Cela peut être un nom, un texte, une date, un identifiant... En python, on assigne une valeur à une variable en utilisant le symbole `=`.

> *Exemple: `mon_nom = Carl`* stocke `Carl` dans la variable `mon_nom`.

Lorsque l'on veut afficher le contenu d'une variable, on met cette variable SANS les guillemets, en argument de la fonction `print` (entre les parenthèses):

```
print(mon_nom)
```

Lorsque le programme arrive à cette instruction, il affiche:

`Carl`

*Remarque:* On peut choisir toute chaine de caractère pour nom de variable, de la simple lettre jusqu'à la longue chaine de caractères (sans espaces):

```
n = 2020
la_2e_meilleure_annee_de_ma_vie = 2020
```

## Opérations sur les variables
### Opérateur `+` sur les chaines de caractères
On vient de voir une première opération sur les chaines de caractères:

Lorsque l'on fait `"Bonjour et bienvenue " + mon_nom`, Python créé une nouvelle chaine de caractères en *ajoutant* les deux chaines: 

* `"Bonjour et bienvenue "` 
* et le contenu de la variable `mon_nom`.

On peut affecter l'ensemble à une nouvelle variable `message` puis l'afficher:

```
message = "Bonjour et bienvenue" + mon_nom
print(message)
``` 

L'affichage sera identique à celui du premier programme.

### Opération sur les entiers
Python peut aussi servir de calculatrice. On peut en effet réaliser toutes les opérations *classiques*, et plus encore. Ces opérations peuvent être réalisées, au choix, avec des nombres, ou avec des variables contenant ces nombres.

> **Testez** dans la console (Spyder, **(4)**) les exemples proposés pour chaque opérateur

| opérateur | opération réalisée | exemple |
|--- |--- |--- |
| + | addition | 12 + 10 |
| * | multiplication | a = 12 <br> b = 10 <br> a * b |
| / | division | 12 / 10 |
| // | division entière | 12 // 10 |
| - | soustraction | 10 - 12 |
| ** | exposant | 2**8 |
| e | puissance de 10 | 12e-3 <br> equivalent à <br> 0.012 |

### Types de variables
On vient de voir 3 types de variables possibles en python:

* Le type *chaine de caractères*, appelé **str**, comme par exemple: `Carl`
* Le type *entier*, appelé **int**, comme par exemple 12
* Le type *nombre décimal à virgule*, noté **float**, comme par exemple 1.2

Les opérations vues plus haut ne peuvent pas mélanger les types:

*Exemple:* Si on essaie d'ajouter une chaine de caractères avec un entier:

```python
message = 'Bienvenue en ' + 2021
```

<figure>
  <img src="../images/spyder2.png" alt="TypeError en console spyder">
  <figcaption>TypeError en console</figcaption>
</figure>

cela affiche un message d'erreur dans la console: Le *Traceback* vous permet de remonter jusqu'à la ligne où se situe l'erreur. Le type d'erreur, en rouge (ici, c'est un *TypeError*) ainsi qu'un message explicite, en blanc, vous permet de repérer et corriger l'erreur: L'interpréteur ne peut pas *ajouter* une chaine de caractère avec un entier.

Une solution, pour afficher le bon message, serait de remplacer `2021` par `"2021"`, entre guillemets, afin de le convertir en une autre chaine de caractères.

> **Testez le**. En console, essayez de faire: 

```python
message = 'Bienvenue en ' + 2021
print(message)
```

* arithmetique en nombres à virgule flottante: problèmes et limites [docs.python.org](https://docs.python.org/fr/3.6/tutorial/floatingpoint.html)

## autres
autre logiciel de simulation electronique en ligne : https://www.lucidchart.com/pages/fr/exemple/logiciel-schema-electrique
pdf: activités à completer sur feuille
page allophysique: compléments et resumés de cours, videos, visuels, flash-cards
Lien vers le formulaire de rentrée à completer
Lien vers la machine de Turing pour ajouter 2 nombres
