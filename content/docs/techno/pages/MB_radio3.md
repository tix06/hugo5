---
Title: reseau radio
---

# Communication radio
Une présentation générale de la carte microbit et des editeurs pour sa programmation se trouve à la page [MB_init](../MB_init). Ce TP fait suite à celui de 1ere NSI, à la page [MB radio2](../MB_radio2).

La carte microbit possède une antenne radio, ce qui lui permet d'emettre et de recevoir des messages:

{{< img src="../images/archi_MB.png" caption="source: microbit.org" >}}

## Prise en main de l'interface microbit sur Vittascience
*Ce premier travail permet de découvrir l'interface Vittascience.com pour la programmation de la carte microbit. Les questions qui suivent cette manipulation vont permettre d'approfondir les connaissances en langage Python. Les projets qui complètent cette séquence se basent sur la partie RESEAUX du programme (protocole HTTP, securité des transmissions)*

* Aller à la page [Editeur microbit](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) sur Vittascience.com

* Brancher la carte microbit sur l'un des ports USB de l'ordinateur. La carte est alors visible depuis l'explorateur comme une nouvelle mémoire flash.

# Réseau social, public
## Programmation du script initial
> Copier-coller le programme suivant à l'aide de l'[Editeur microbit](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) sur Vittascience.com


{{< img src="../images/E_R_MB.png" caption="communication radio en reseau" >}}

```python
from microbit import *
import radio
import utime

# variables globales
ch = 7
gpe = 0
messages = ['lundi','LIKE','UNLIKE']
i = 0
img = [Image.DIAMOND,Image.DIAMOND_SMALL]
# parametres radio
radio.on()
radio.config(channel = ch, power = 6, length = 32, group=gpe)

while True:
  if button_a.is_pressed():
    display.clear()
    l = len(messages)
    i = (i + 1) % l
    display.set_pixel(i,0,9)
    utime.sleep(0.2)
  if button_b.is_pressed():
    radio.send(messages[i])
    display.show(img,delay=100)
    utime.sleep(0.015)
    display.clear()
    

  stringData = radio.receive()
  if stringData:
    if stringData == 'LIKE':
      display.show(Image.HAPPY)
      utime.sleep(0.2)
      display.clear()
    elif stringData == 'UNLIKE':
      display.show(Image.SAD)
      utime.sleep(0.2)
      display.clear()
    else:
      display.scroll(stringData)

```

> Téléverser et tester le programme. 

1. Quel est la signification de chacune des instructions suivantes?

| instruction | description |
|--- |--- |
| `if stringData:` |   |
| `if stringData == 'LIKE':` |   |

2. Le programme utilise des instructions apportées par les librairies `radio` et `utime`, utiles pour la programmation de la carte microbit. 

* Quel est le rôle des fonctions suivantes: Recopier et compléter le tableau:

| instruction | description |
|--- |--- |
| `send` |   |
| `receive` |   |
| `sleep` |   |

* Quel est le rôle de la variable `stringData`? *(Que contient-elle?)*

3. Selection de message:
Expliquez le rôle des instructions suivantes:

```python
l = len(messages)
i = (i + 1) % l
```

4. Analyse du programme: Décrire le programme avec un diagramme d'activités.

5. Ce programme, comment devrait-il fonctionner? Quel-s problème-s voyez-vous lorsque plusieurs cartes microbits fonctionnent de concert, avec ce même programme?

{{< img src="../images/vitta_init8.png" >}}

6. Choisir le-s terme-s adapté-s parmi les mots suivants: il s'agit d'un problème de...

* intégrité
* authenticité
* confidentialité



## Programmation orientée objet
On souhaite effacer du programme les variables globales. Les variables  seront regroupées comme attributs de la classe `Communication_radio`. On ajoutera à cette classe les méthodes qui serviront à rendre le script plus concis.

Voici le script que vous allez utiliser:

```python
from microbit import *
import radio
import utime


class Communication_radio:
  def __init__(self, # a completer)
    # a completer
  
  def message_suivant(self):
    # a completer
  
  def select_message(self):
    # a completer
  
  def img_send(self):
    # a completer


com = Communication_radio(7,0,['lundi','LIKE','UNLIKE'])
radio.on()
radio.config(channel = com.channel, power = 6, length = 32, group=com.group)
   
while True:
  if button_a.is_pressed():
    com.message_suivant()
  if button_b.is_pressed():
    radio.send(com.select_message())
    com.img_send() # affiche l'animation lors de l'envoi du message

  stringData = radio.receive()
  if stringData:
    if stringData == 'LIKE':
      display.show(Image.HAPPY)
      utime.sleep(0.2)
      display.clear()
    elif stringData == 'UNLIKE':
      display.show(Image.SAD)
      utime.sleep(0.2)
      display.clear()
    else:
      display.scroll(stringData)
```

## Réseau privé
> But: Reduire à 2 cartes sur un même réseau. Puis envoyer un message privé, ou bien des messages de reaction de type LIKE/ UNLIKE.

{{< img src="../images/vitta_init12.png" >}}

**Question:** quelles sont les différentes méthodes que vous pouvez envisager pour que la communication entre 2 cartes microbit reste confidentielle?

> Poursuivre cette séance avec les 2 projets suivants.

## Projet 1
> But: Utiliser une règle d'authentification entre 2 cartes de votre réseau privé.

Votre reseau privé n'est pas à l'abris d'un utilisateur non invité. Vous souhaiteriez alors savoir de QUI vient le message reçu. 

{{< img src="../images/radio_12.png" >}}



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
* ou n'afficher que les messages provenant de la carte n°1 (ou autre).

Dans ce 2e cas: Pour les recepteurs du message, il faudra alors PARSER cette chaine. *Parser* signifie: *diviser une chaîne de caractères en une liste ordonnée de sous-chaînes*.

Python offre une multitude de possibilités pour travailler avec des chaînes de caractères (strings): voir [page du cours python sur les variables et string](/docs/python/pages/variables/page1/) 



### Premier programme utilisant un notebook python
Dans un notebook (Atrium > Capytale) ou bien [basthon.fr/](https://notebook.basthon.fr/), saisir les lignes suivantes:

* Composer le message:

```python
n = 1
texte = "la feve est dans la 3e part"
message = str(n) + "_" + texte
print(message)
```

* Parser le message:

Il faudra tranformer la chaine `"1_la feve est dans la 3e part"` en 2 chaines: `"1"` et `"la feve est dans la 3e part"`.

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

* Parser avec la méthode de string `split`:

```python
message = "1_la feve est dans la 3e part"
n, texte = message.split('_')
print(n)
print(texte)
```

> Adapter maintenant ce programme pour traiter un message dont l'identifiant numérique est composé de **1 ou plusieurs chiffres**. Quelle instruction faut-il privilégier pour découper la chaine de caracetères? Stocker cet identifiant dans n? Et pour réduire le message (enlever le numero n et le symbole `'_'`)?


### Programmation de la carte microbit
> Adapter le programme pour permettre une communication avec un auteur *authentifié* dans un reseau à plusieurs cartes. 

Vous allez mettre 4 cartes microbits dans un même réseau (Réglage dans l'instruction `radio.config(channel = 7, power = 6, length = 32, group=0)`). Choisir le même *channel* et le **même** *group* pour **4 cartes microbit.**



Utiliser maintenant l'interface Python sur [Vittascience.com](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience) pour réaliser les modifications.


A partir du programme initial, apporter les modifications pour:

* envoyer un message avec un numero d'identification à 2 chiffres. Ce numero doit être le même pour une paire de cartes microbits du reseau, et doit rester secret. Ce numero pourrait être le **numéro du groupe** utilisé pour l'instruction `radio.config`.
* afficher tout message qui commence par cet identifiant, pas les autres messages reçus. Il faudra utiliser une instruction conditionnelle sur le numéro de carte pour afficher (ou non) le message.

{{< img src="../images/vitta_init111.png" >}}

> Programmer les méthodes de la classe `Communication_radio`: 
>* la méthode `select_message` pour selectionner, et construire le message avant de l'expedier. 
>* Et la méthode `parse` pour lire le message. Cette méthode ne retourne la chaine de caractère QUE si le numero qui debute la chaine de caractères est celui du groupe.

Puis apporter les modifications necessaires pour faire fonctionner le programme.


**Aide:** ci-dessous le programme Python en programmation non fonctionnelle et non orientée objet. C'est le programme que vous devrez adapter en POO.

```python
from microbit import *
import radio
import utime

# variables globales
ch = 7
gpe = 0
messages = ['lundi','LIKE','UNLIKE']
i = 0
img = [Image.DIAMOND,Image.DIAMOND_SMALL]
# parametres radio
radio.on()
radio.config(channel = ch, power = 6, length = 32, group=gpe)
numero = 99

while True:
  if button_a.is_pressed():
    display.clear()
    l = len(messages)
    i = (i + 1) % l
    display.set_pixel(i,0,9)
    utime.sleep(0.2)
  if button_b.is_pressed():
    message_complet = str(numero) + "_" + messages[i]
    radio.send(message_complet)
    display.show(img,delay=100)
    utime.sleep(0.015)
    display.clear()
    

  stringData = radio.receive()
  if stringData:
    try:
      n, texte = stringData.split('_')
    except:
      # reception d'un message sans caractere '_'
      n= 0
      texte = stringData
    if int(n) == numero:
      if texte == 'LIKE':
        display.show(Image.HAPPY)
        utime.sleep(0.2)
        display.clear()
      elif texte == 'UNLIKE':
        display.show(Image.SAD)
        utime.sleep(0.2)
        display.clear()
      else:
        display.scroll(texte)

```

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
Editeur [Vittascience.com](https://fr.vittascience.com/microbit/?mode=mixed&console=bottom&toolbox=vittascience)

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
