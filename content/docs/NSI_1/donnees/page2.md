---
Title: calculs en python
---

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

> Tester alors les commandes suivantes et répondez aux questions:

<br>

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

> à tester en console:

<br>

| opérateur | exemple |
| --- |--- |
| + | 'car' + 'nassier' |
| * | 'nsi' * 10 |
| + | a = "je suis" <br> b = 'vegetarien' <br> a + " " + b |
| * | a + " " + 3 * b |

* **Question e:** expliquer ce que réalisent les opérateurs + et * avec les chaines de caractère.

## fonctions natives et conversions
### notation binaire ou hexadecimale
> Tester les notations suivantes et remplir le tableau sur votre cahier

<br>

| 0b1 | 0b10 | 0b11 | 0b100 | 0b2 |
| --- | --- | --- | --- | --- |
| | | | | |

<br>

> Tester ensuite:

<br>

| 0x1 | 0x9 | 0xA | 0xB | 0xC | 0xD | 0xE | 0xF | 0xFF |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | |

<br>

* **Question f:** A quoi servent les symboles `0b` et `0x` placés devant un nombre? Pourquoi l'expression `0b2` renvoie t-elle une erreur?

### fonctions natives en python
Une fonction execute une opération sur un ou plusieurs paramètres, et retourne quelque chose, une sortie. Le ou les paramètres sont mis entre parenthèse, après le nom de la fonction.

> Python offre de nombreuses fonctions natives. Tester les fonctions `print, bin, int, hex` suivantes et completer le tableau avec le resultat obtenu (sur votre cahier):

<br>

| bin(254) | int(0xFF) | int(0b100) | int(3.1412) | int('101') | hex(254) |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

<br>

* **Question g:** à quoi servent ces fonctions? Résumer ce paragraphe en recopiant et en completant le document suivant sur votre cahier. Ecrire au niveau de chacune des flèches l'instruction ou la notation qui permet la conversion.

<figure>
  <img src="../images/conversions.png">
</figure>


## fonctions programmées
On peut également créer ses propres fonction. Il faut commencer par le déclarer avec le mot clé `def`, suivi du nom de la fonction, puis des arguments entre parenthèses, et enfin, par 2 points `:`.

Le reste du bloc de la fonction doit être écrit après indentation: Mettre 2 espaces avant les instructions.

La fonction finit par le mot clé `return`, suivi de la valeur à retourner.

*Exemple*: La fonction suivante, `bin2int`, permet de programmer la conversion d'un nombre binaire sur 3 bits, en décimal:

```python
def bin2int(bit2, bit1, bit0):
  N = bit2 * 4 + bit1 * 2 + bit0 * 1
  return N
```

Sortir du bloc de la fonction en appuyant 2 fois sur `Entrée`.

Enfin, pour appeler et utiliser cette fonction, on fera comme précédemment. Il faudra saisir le nom puis les arguments entre parenthèse:

```python
bin2int(1,1,1)
```

> Programmez cette fonction dans la console. Testez la pour convertir les nombres binaires 101 et 100 par exemple. (Les bits doivent être séparés par un virgule).

<br>

> S'il vous reste du temps, modifiez cette fonction pour convertir un nombre binaire plus grand.

*Remarque:* La page suivante montre comment on peut créer une fonction avec un nombre de paramètres à priori non connu. Cela permettra de réaliser la conversion avec un nombre de bits illimité dans le nombre binaire à convertir. [cours Python - Pierre Giraud](https://www.pierre-giraud.com/python-apprendre-programmer-cours/parametre-argument-fonction/)

<!--
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
-->
