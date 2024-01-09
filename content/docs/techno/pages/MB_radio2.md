---
Title: MB en reseau radio
---

# Communication radio
Une présentation générale de la carte microbit et des editeurs pour sa programmation se trouve à la page [MB_init](../MB_init). Ce TP fait suite à celui de SNT, à la page [MB radio](../MB_radio).

## Prise en main de l'interface microbit sur Vittascience
*Ce premier travail permet de découvrir l'interface Vittascience.com pour la programmation de la carte microbit. Les questions qui suivent cette manipulation vont présenter le langage Python. Aucune connaissance du langage n'est requise pour ce premier travail.*

* Aller à la page [Editeur microbit](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) sur Vittascience.com

* Brancher la carte microbit sur l'un des ports USB de l'ordinateur. La carte est alors visible depuis l'explorateur comme une nouvelle mémoire flash.

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

## Projet commun: Réseau privé
> But: Reduire à 2 cartes sur un même réseau. Puis envoyer un message privé, ou bien des messages de reaction de type LIKE/ UNLIKE.

{{< img src="../images/vitta_init12.png" >}}

### Premier programme utilisant un notebook python
Cette fois, le nombre de messages possibles est supérieur au nombre de boutons (3 messages pour 2 boutons).

Nous allons utiliser une **liste** de messages. Pour acceder à un element de cette liste, nous allons utiliser un **index**.

Dans un notebook (Atrium > Capytale) ou bien [basthon.fr/](https://notebook.basthon.fr/), saisir les lignes suivantes:

```python
# declaration de la liste
L = ['mon message a envoyer', 'LIKE', 'UNLIKE']
# acceder a l'un des elements de la liste:
# 1er element: index 0
print(L[0])
# 2e element: index 1
print(L[1])
# 3e element: index 2
print(L[2])
# attention au depassement d'index de la liste
# l'index 3 n'existe pas
print(L[3])
```

On peut utiliser un index numérique pour parcourir tous les éléments de la liste. Tester dans une nouvelle cellule du notebook:

```python
for i in range(len(L)):
  print(i,L[i])
``` 

Là aussi, avec un variant de boucle `i` qui depasse 2, cela va générer une erreur:

```python
for i in range(10):
  print(i,L[i])
# erreur
``` 

Pour eviter de depasser l'index maximum de la liste, utiliser l'opérateur *modulo*:

```python
for i in range(10):
  j = i % 3
  print(i,j,L[j])
``` 

### Programmation de la carte microbit
Utiliser maintenant l'interface Python sur *Vittascience.com* pour réaliser les modifications.

* Bloc "Au démarrage": régler les cartes par binome sur le **même reseau** (même *canal*, et même *group*).

* modifier le programme des 2 boutons: le **bouton_a** sert à selectionner le message dans une liste, en passant au message suivant dans la liste. L'indice est calculé selon une règle d'arithmétique modulaire. Voici un extrait du script à utiliser:

```python
# a placer au "demarrage"
L = ['message', 'like', 'unlike']
i = 0
...
# a placer dans le bloc "repeter indefiniment"
if button_a.is_pressed():
  i = (i+1)%3
...
if button_a.is_pressed():
  radio.send(L[i])
```

Le **bouton_b** servira à envoyer le message.

Lorsqu'un message est reçu:

* si c'est un message textuel, on l'affiche avec `display.scroll()`
* si c'est 'like', on affiche un smiley happy
* si c'est 'unlike', on affiche un smiley triste

> Poursuivre cette séance avec les 2 projets suivants.

## Projet 1: Auteurs authentifiés
> But: Utiliser une règle d'authentification entre 2 cartes de votre réseau privé.

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

### Premier programme utilisant un notebook python
Dans un notebook (Atrium > Capytale) ou bien [basthon.fr/](https://notebook.basthon.fr/), saisir les lignes suivantes:

```python
message = "1_la feve est dans la 3e part"
n = message[0]
# selection du 1er caractere
print(n)
message = message[2:]
# slice du 3e caractere au dernier
print(message)
# on a extrait le numero au debut du message, et reduit le message
print("la carte n°",n," vous informe que\n", message)
```

> Adapter maintenant ce programme pour traiter un message dont l'identifiant numérique est composé de **2 chiffres**. Quelle instruction faut-il écrire pour stocker cet identifiant dans n? Et pour réduire le message (enlever le numero n et le symbole `'_'`).


### Programmation de la carte microbit
> Adapter le programme pour permettre une communication avec un auteur *authentifié* dans un reseau à plusieurs cartes. 

Vous allez mettre 4 cartes microbits dans un même réseau (Réglage dans l'instruction `radio.config(channel = 7, power = 6, length = 32, group=0)`). Choisir le même *channel* et le même *group* pour 4 cartes microbit.

Utiliser maintenant l'interface Python sur *Vittascience.com* pour réaliser les modifications.

A partir du programme initial, apporter les modifications pour:

* envoyer un message avec un numero d'identification à 2 chiffres. Ce numero doit être le même pour une paire de cartes microbits du reseau, et doit rester secret.
* afficher tout message qui commence par cet identifiant, pas les autres messages reçus. Il faudra utiliser une instruction conditionnelle sur le numéro de carte pour afficher (ou non) le message.


> Décrire le programme avec un diagramme d'état.

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

# Compléments
`radio.config(channel=7)`: Configure la fréquence d'émission : la valeur est un numéro entre 0 et 83

`radio.config(group=0)`:  Configure le groupe : au sein d'une même adresse, 256 groupes numérotés de 0 à 255 peuvent cohabiter`

# Liens
* Introduction au module radio (TP Lucioles): [microbit-micropython.readthedocs.io](https://microbit-micropython.readthedocs.io/fr/latest/tutorials/radio.html)
* TP message secret: [microbit.org](https://microbit.org/fr/projects/make-it-code-it/tell-me-a-secret/)
* specifications du contrôleur radio [lancaster-university](https://lancaster-university.github.io/microbit-docs/ubit/radio/)`
* diagramme d'état et diagramme d'activité: [www.uv.es](https://www.uv.es/nemiche/cursos/UML5.pdf)
* diagramme d'état [laurent-audibert.developpez.com](https://laurent-audibert.developpez.com/Cours-UML/?page=diagramme-etats-transitions)
