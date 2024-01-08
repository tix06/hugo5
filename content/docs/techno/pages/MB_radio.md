---
Title: MB radio
---

# Communication radio
Une présentation générale de la carte microbit se trouve à la page [suivante](../MB_init).

## Prise en main de l'interface microbit sur Vittascience
*Ce premier travail permet de découvrir l'interface Vittascience.com pour la programmation de la carte microbit. Les questions qui suivent cette manipulation vont présenter le langage Python. Aucune connaissance du langage n'est requise pour ce premier travail.*

* Aller à la page [Editeur microbit](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) sur Vittascience.com

* Bancher la carte microbit sur l'un des ports USB de l'ordinateur. La carte est alors visible depuis l'explorateur comme une nouvelle mémoire flash.

## Premier programme
La page présente 2 espaces. L'edition du programme se fait dans la partie gauche (celle présentant les blocs à assembler). A droite, c'est la traduction du programme en langage Python, qui est réalisée de manière automatique.

{{< img src="../images/vitta_init1.png" >}}

Le programme en langage Python est alors:

```python
from microbit import *

while True:
  pass
```

En colorant les différentes parties du script Python, on peut mettre en correspondance: les *blocs* et leur équivalent en *langage informatique*:

{{< img src="../images/vitta_init6.png" >}}

> Mettre un bloc de type affichage sur la carte microbit, comme illustré ci-dessous:

{{< img src="../images/vitta_init2.png" >}}

> Modifier l'image pour avoir l'affichage d'un smiley. Il faut modifier le paramètre du bloc et choisir une image parmi les propositions:

{{< img src="../images/vitta_init3.png" >}}

> Vous pouvez alors téléverser le programme dans la carte microbit et observer l'affichage. Il y a 2 options proposées:

{{< img src="../images/vitta_init9.png" >}}

* Soit utiliser le bouton *téléverser*. Le programme se charge alors automatiquement dans la carte microbit
* soit le bouton de téléchargement. C'est l'ordinateur qui charge alors le programme généré (l'extension est `.hex`). Il faudra le deplacer sur la carte microbit à l'aide de l'explorateur.


> Ajouter une instruction conditionnelle (si le bouton A est préssé, alors...)

{{< img src="../images/vitta_init4.png" >}}

Observer le script Python. 

```python
from microbit import *

while True:
  if button_a.is_pressed():
    display.show(Image.HAPPY)
```

Si on met à nouveau les blocs en correspondance avec les instructions du langage, cela donne:

{{< img src="../images/vitta_init7.png" >}}

> Terminer maintenant le programme selon l'image suivante:

{{< img src="../images/vitta_init5.png" >}}

> Et téléverser dans la carte microbit. Comment réagit-elle lorsque vous appuyez sur le bouton A, le bouton B?

### Introduction au langage Python

1. Recopier le script et colorer les différentes parties du script comme dans les exemples précédents. Expliquer la signification de l'indentation en Python (la marge par rapport au bord gauche de l'editeur Python).

Ces couleurs indiquent la famille d'instructions. Les instructions du langage peuvent être rassemblées selon les principales familles qui sont:

- Affichage
- Entrées/ Sorties
- Logique
- Boucles
- Variables

D'autres familles d'instructions concernent la programmation de Fonctions, ou l'utilisation de types construits comme les chaines de caractères et les listes, les opérations Math, ou la gestion des erreurs (Exceptions).

Les fonctions Communication, Capteurs, Actionneurs, Robots, ... concernent la manipulation d'objets technologiques et apportent des extensions du langage. Selon les besoins, il faudra parfois ajouter des extensions de cette sorte, comme ici avec la première ligne:

```python
from microbit import *
```

Avec la programmation par blocs sur l'interface [Vittascience.com](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience), cette ligne est ajoutée dès que vous choisissez une instruction du bloc Entrées/Sorties spécifique à la carte microbit.

2. Recopier le tableau et compléter avec la description de l'instruction:

| instruction | description |
|--- |--- |
| `import` |   |
| `display.show()` |   |
| `button_a.is_pressed()` |   |
| `button_b.is_pressed()` |   |

Les instructions qui terminent par des parenthèses `()` sont des *fonctions*. Les *fonctions* executent une série d'instructions, qui sont rassemblées dans un seul bloc appelé *fonction*. Cela permet de rendre le script plus court et plus lisible. Une fonction peut être réutilisée à plusieurs endroits du programme. 

Parmi ces *fonctions*, certaines doivent être écrites en plaçant un argument entre les parenthèses. Cela permet de préciser leur comportement.

3. Dans le tableau précédent, quelle est LA fonction qui nécessite un argument? A quoi sert-il?

Certaines instructions vont permettre des répétitions (boucles), d'autres vont executer des branchements conditionnels. Ce sont les mots clés `while` et `if`.

4. Retrouver les familles pour chacun de ces 2 mots clés.

5. Recopier et compléter le tableau avec la description de chacune des instructions:

| instruction | description |
|--- |--- |
| `while True:` |   |
| `if button_a.is_pressed():` |   |



## Dessiner son propre logo
Le bloc suivant permet de personnaliser l'image affichée:

{{< img src="../images/vitta_init13.png" >}}

Lorsque l'on ajoute ce bloc au programme, cela insère les 2 lignes suivantes dans le script python:

```python
led_image = Image('00000:00000:00000:00000:00000')
display.show(led_image)
```

L'image est alors générée par la ligne `led_image = Image('00000:00000:00000:00000:00000')`. L'instruction `display.show(led_image)` va afficher cette image sur la carte microbit.

Remplacer les 2 images du programme précédent par 2 blocs comme celui-ci. 

Pour dessiner l'image, il faut cliquer dans les cellules (pixels). Le bloc suivant affiche un **Y** sur la carte microbit.

{{< img src="../images/vitta_init14.png" >}}

1. Quel est le code correspondant pour le **Y**?
2. Dessiner vos propres images. Recopier le code Python généré pour celles-ci: `led_image = Image('...`

# Réseau social, public
## Créer pas à pas le programme suivant à l'aide de l'[Editeur microbit](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) sur Vittascience.com

Commencer par écrire les instructions de debut du programme (ne sont executées qu'une seule fois, au démarrage).

{{< img src="../images/radio1.png" >}}

{{< img src="../images/radio2.png" >}}

Puis ajouter les instructions de la boucle principale: d'abord les instructions d'émission:
{{< img src="../images/radio3.png" >}}

{{< img src="../images/radio4.png" >}}

Puis les instructions de reception:
{{< img src="../images/radio5.png" >}}

{{< img src="../images/radio6.png" >}}

Retrouver la variable `stringData` dans les *Variables*
{{< img src="../images/radio71.png" >}}

Placer la variable `stringData` dans l'expression conditionnelle:
{{< img src="../images/radio7.png" >}}

Retrouver le paramètre `" "` dans le menu *Texte*

{{< img src="../images/radio72.png" >}}

Remplacer le paramètre **1** par le caractère **"1"**:
{{< img src="../images/radio81.png" >}}

Puis les instructions pour le comportement de la carte selon le message reçu:
{{< img src="../images/radio8.png" >}}

{{< img src="../images/radio9.png" >}}

{{< img src="../images/radio10.png" >}}

```python
from microbit import *
import radio
import utime

radio.on()

print('Bonjour !' + "")

while True:
  if button_a.is_pressed():
    radio.send('1')
  if button_b.is_pressed():
    radio.send('2')
  stringData = radio.receive()
  if stringData:
    if stringData == '1':
      display.show(Image.HAPPY)
      utime.sleep(0.015)
      display.clear()
    elif stringData == '2':
      display.show(Image.SAD)
      utime.sleep(0.015)
      display.clear()

```

> Téléverser et tester le programme. 

1. Quel est la signification de chacune des instructions suivantes?

| instruction | description |
|--- |--- |
| `if stringData:` |   |
| `if stringData == '1':` |   |

2. Le programme utilise des instructions apportées par les librairies `radio` et `utime`, utiles pour la programmation de la carte microbit. 

* Quel est le rôle des fonctions suivantes: Recopier et compléter le tableau:

| instruction | description |
|--- |--- |
| `send` |   |
| `receive` |   |
| `sleep` |   |

* Quel est le rôle de la variable `stringData`? *(Que contient-elle?)*

3. Analyse du programme: Décrire le programme avec un diagramme d'état.

3. Ce programme, comment devrait-il fonctionner? Quel-s problème-s voyez-vous lorsque plusieurs cartes microbits fonctionnent de concert, avec ce même programme?
4. Choisir le-s terme-s adapté-s parmi les mots suivants: il s'agit d'un problème de...

* intégrité
* authenticité
* confidentialité

{{< img src="../images/vitta_init8.png" >}}

## Réseau privé
> But: Reduire à 2 cartes sur un même réseau.

{{< img src="../images/vitta_init12.png" >}}

Utiliser maintenant l'interface Python pour réaliser les modifications.

* regler les cartes par binome sur le même reseau

* modifier le programme des 2 boutons: le **bouton_a** sert à selectionner le message dans une liste, en passant au message suivant dans la liste. L'indice est calculé selon une règle d'arithmétique modulaire:

```python
L = ['message', 'like', 'unlike']
i = 0
...
if button_a.is_pressed():
  i = (i+1)%3
```

Le **bouton_b** servira à envoyer le message.

Lorsqu'un message est reçu:

* si c'est un message textuel, on l'affiche avec `display.scroll()`
* si c'est 'like', on affiche un smiley happy
* si c'est 'unlike', on affiche un smiley triste

Poursuivre cette séance en choisissant l'un des 2 projets suivants:

## Projet 1: Auteurs authentifiés
> But: trouver une règle d'authentification entre 2 cartes de votre réseau privé.

Votre reseau privé n'est pas à l'abris d'un utilisateur non invité. Vous souhaiteriez alors savoir de QUI vient le message reçu. 

{{< img src="../images/vitta_init11.png" >}}

L'idée est d'utiliser la chaine de caractère émise pour y placer des informations, en plus du message. Ces informations pourraient identifier la carte émettrice. Ainsi, plutôt que d'envoyer:

```
"le lundi ne mange pas a la cantine"
```

la carte n°1 enverra: 

```
"1_le lundi ne mange pas a la cantine"
```

Le programme recepteur pourra, au choix:

* Afficher la chaine de caractère entière, renseignant à la fois le numéro de la carte emettrice ET le message.
* n'afficher que les messages provenant de la carte n°1 (ou autre).

Dans ce 2e cas: Pour les recepteurs du message, il faudra alors PARSER cette chaine. *Parser* signifie: *diviser une chaîne de caractères en une liste ordonnée de sous-chaînes*.

Python offre une multitude de possibilités pour travailler avec des chaînes de caractères (strings): voir [page du cours python sur les variables et string](/docs/python/pages/variables/page1/) 

Il faudra tranformer la chaine `"1_le lundi ne mange pas a la cantine"` en 2 chaines: `"1"` et `"le lundi ne mange pas a la cantine"`.

Et utiliser une instruction conditionnelle sur le numéro de carte pour afficher (ou non) le message.

> Adapter le programme pour permettre une communication avec un auteur *authentifié* dans un reseau à plusieurs cartes. Décrire le programme avec un diagramme d'état.

## Projet 2: Chiffrement
> But: réaliser une communication privée dans un reseau public.

### Premier programme utilisant un notebook python
**Chiffrer / Code Cesar:** Le code César réalise une permutation des caractères, selon leur rang (table ASCII), grâce à une clé de chiffrement/ déchiffrement.

Les fonctions utiles du langage sont: `ord` et `chr`:

```python
>>> ord('a')
97
>>> chr(98)
'b'
>>> chr(122)
'z'
``` 

Pour utiliser une clé de chiffrement, il sera nécessaire d'utiliser un décalage avec un modulo(26) afin d'obtenir une lettre chiffrée dans l'alphabet a-z:

```python
no_lettre = ord(lettre)
chiffre = no_lettre + cle # decalage sans modulo, depassement possible
chiffre = (lettre + cle)%26 # decalage avec modulo 26, chiffre de 0 à 25
chiffre = (lettre-97 + cle)%26 + 97 # decalage avec modulo 26, chiffre de 97 à (97 + 25) = 122
``` 

Comme l'alphabet a-z va du rang 97 à 122 dans la table ascii, on choisira la 3e méthode:

```
chiffre = (lettre-97 + cle)%26 + 97
```

> Créer une fonction de chiffrement appelée `chiffre`, qui retourne la lettre chiffrée selon les arguments `lettre` (lettre en clair) et `cle` (la clé de chiffrement).


La fonction chiffre peut aussi servir à déchiffrer. Il suffira de remplacer la clé de chiffrement par son opposé: $3 => -3$.

Assurez vous à l'aide de quelques tests, que la fonction donne de bons résultats, pour chiffrer et dechiffrer un caractère.

> Créer une fonction de chiffrement appelée `chiffre_texte`, qui retourne la texte chiffré. La fonction aura pour arguments: `texte` (texte en clair) et `cle` (la clé de chiffrement).

Assurez vous à l'aide de quelques tests, que la fonction donne de bons résultats, pour chiffrer et dechiffrer un texte.

### Programmation de la carte microbit
> Adapter le programme pour permettre une communication *confidentielle* entre 2 cartes microbit. Décrire le programme avec un diagramme d'état.

## Projet 3: Compteur de *likes*
On considère le réseau social de type "X (ex Twitter)" dans lequel A, B, C, et D sont des usagers (des twittos)

* A suit B
* B suit C
* C suit A et B
* D suit B

La structure de données sera un *dictionnaire* Python: 

```python
G = {'A':['B'],'B':['C'],'C':['A','B'],'D':['B']}
```

Le debut du programme va alors s'écrire:

```python
from microbit import *
import radio
import utime

radio.on()
G = {'A':['B'],'B':['C'],'C':['A','B'],'D':['B']}
```

Chaque twittos envoie, en continu, un message sur le reseau.
Ce message contient pour unique contenu la lettre du *twittos*.

```python
# pour le twittos B
radio.send("B")
```

Lorsque A lit un message de B (c'est à dire le message `"B"`): alors A envoie un like à B. (un message `"B_LIKE"`).

```python
radio.send("B_LIKE")
```

Si B reçoit le message `"B_LIKE"`, il affiche un COEUR, puis la valeur de son compteur, incrémentée:

```python
message = radio.receive()
if message == 'B_LIKE':
  display.show(Image.HEART, delay=15, wait=True)
  utime.sleep(0.015)
  compteur = compteur + 1
  display.show(compteur, delay=15, wait=True)
  utime.sleep(0.015)
```

> Démarrer le programme de manière synchrone sur chaque carte microbit du reseau. Laisser tourner le programme pendant 2 minutes, puis relever les valeurs des compteurs sur chaque carte.

Les valeurs sont-elles en accord avec la structure du reseau?


# Liens
* Introduction au module radio (TP Lucioles): [microbit-micropython.readthedocs.io](https://microbit-micropython.readthedocs.io/fr/latest/tutorials/radio.html)
* TP message secret: [microbit.org](https://microbit.org/fr/projects/make-it-code-it/tell-me-a-secret/)
* specifications du contrôleur radio [lancaster-university](https://lancaster-university.github.io/microbit-docs/ubit/radio/)`
* diagramme d'état [laurent-audibert.developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-etats-transitions)
* diagramme d'état [www.uv.es](https://www.uv.es/nemiche/cursos/UML5.pdf)
* [Konfusio: python-string-parsing-pour-debutants-et-expert](https://konfuzio.com/fr/python-string-parsing-pour-debutants-et-experts/) 