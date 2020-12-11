---
Title : protocoles de routage
---

# Modéliser le réseau internet
## réseau internet
Le reseau internet repose sur :

* l'usage de *datagrammes* pour transmettre l'information
* le routage de ces *datagrammes* par des ordinateurs spécialisés, ... les *routeurs*.

Le reseau internet est un reseau qui connecte entre eux des reseaux, à l'echelle mondiale. Voir lien vers la page [Reseaux de seconde SNT pour revisions](/docs/SNT_2nde/pages/page3/circulation/)

## Le datagramme 
Dans le modèle TCP/IP, les ordinateurs peuvent établir et réaliser une communication selon plusieurs couches, qui cloisonnent les logiciels et technologies utilisées. D'après la norme, les couches vont de la plus haute (couche 7: l'utilisateur) à la plus basse (couche 1: support physique).

Lorsque vous envoyez une requête ou un fichier à une machine distante, les logiciels installés vont fabriquer des trames de 1500 octets, dont le datagramme contient les données utiles pour la transmission (dont l'adresse IP du destinataire et de l'emetteur), et les informations à transmettre, le tout sous format binaire.

Durant le *trajet* à travers les couches logicielles *7:application*, *4:transport*, *3:internet* et *2:hôte-réseau* , le datagramme subira des modifications et chaque couche rajoutera ce qu'elle voudra: 

* La couche *4:transport* va ajouter les informations utiles pour contrôler l'arrivée l'ordre des paquets envoyés: résolu par le protocole TCP.
* La couche *3:internet* va ajouter les informations utiles pour interconnecter les réseaux: résolu par le protocole IP.

Ce mécanisme s'appelle **l'encapsulation**, car les données de la couche 2 vont contenir celles de la couche 3, etc... 

Ainsi, à la sortie de la couche 2, la requête HTTP issue de votre navigateur est transformée en une série de données que l'on peut segmenter en:

`[en-tête Ethernet, wifi ou 4G][en-tête IP][en tête TCP][requête HTTP][checksum Ethernet]`

La machine distante, qui reçoit cette trame, va alors repondre immédiatement en envoyant un *accusé de reception*.



<figure>
  <div>
  <img src="../images/TCP.png" alt="principe de l'emission - reception d'une trame sur internet">
  <figcaption>principe de l'emission - reception d'une trame sur internet</figcaption>
</div>
</figure>



<figure>
  <div>
  <img src="../images/TCP2.png" alt="envoi d'un accusé de reception">
  <figcaption>envoi d'un accusé de reception</figcaption>
</div>
</figure>

*[compléments et rappels de 1ere NSI: Lien](/docs/SNT_2nde/pages/page3/modele_OSI/)*

### Les machines
Les machines reliées dans le réseau internet peuvent être:

* un ordinateur  (machine hôte)
* une imprimante
* un commutateur (switch) : mis en reseau de manière centralisée, n'a pas d'adresse IP, agit au niveau de la couche 2, connecte les machines dans le sous-reseau, sert à envoyer les trames au destinataire direct, ne possède pas d'adresse IP.
* routeur : transporte les paquets même s'ils ne lui sont pas adressés directement, choisit la meilleure route, joint plusieurs réseaux, agit au niveau de la couche 3.

Un routeur possède plusieurs cartes réseaux. Sur le modèle suivant, il y a 3 ports ethernet, ainsi qu'une antenne wifi. Ce qui fait 4 cartes reseau:

![routeur de la marque Siretta](../images/routeur1.png)


## Adresse IP
Dans le reseau internet, les reseaux et les machines sont identifiés par un numéro unique, l'adresse IP. Pour être exact, ce sont les cartes reseaux des machines qui possèdent une adresse IP.

* Lorsque l'on veut atteindre un ordinateur serveur depuis notre navigateur, on saisit dans la barre d'adresse:[^1]

```
> http://<adresse IP du serveur>
```

* Lorsque l'on veut tester la connexion vers une machine distante du reseau, on saisit dans la console (lignes de commande):

```
> ping <adresse IP du destinataire>
``` 

Pour plus de précisions sur l'adressage IP ainsi que le masque de sous-reseau, voir la video <a href="https://www.youtube.com/watch?v=RnpSaDSSjR4" target="blank"><img src="../images/video.png"></a>

Une adresse IP de la norme IPv4 est un nombre binaire codé sur 32 bits, soit 4 octets. Le nombre d'adresses possibles est alors de plus de 4 milliards. 

*Exemple d'adresse IPv4 exprimée à l'aide de 4 valeurs décimales (0-255):*

`192.168.0.1/24` 

Les derniers caractères `/24` correspondent au *masque de sous-reseau*. Ils signifient que le reseau contenant la machine a une adresse codée sur les 24 premiers bits (192.168.0). Et que les 8 derniers bits constituent l'adresse de la machine dans ce reseau (il s'agit donc du .1 final). 

Pour la norme IPv6, ce nombre est sur 128 bits, soit 16 octets.
*Exemple d'adresse IPv6 exprimée en hexadécimal (32 caractères):* `2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b` 

## Table de routage
Chaque routeur reçoit des données et doit décider à qui les transmettre. Pour cela, il dispose de *tables de routage* construites soit statiquement (par un humain), soit dynamiquement (par un programme).

Lorsqu'il reçoit un message (une trame), il lit l'adresse IP du destinataire et le redirige dans la bonne direction:

* soit le routeur est directement relié au bon reseau, contenant le destinataire: le message va alors circuler par la carte reseau correspondante (l'adresse *Passerelle* (*Gateway*)).
* soit l'adresse lui est inconnue: c'est sa table de routage qui va lui dire à quel autre routeur l'envoyer.

La table de routage contiendra donc:

1. les adresses IP des reseaux et des *passerelles* (cartes reseaux) auxquels le routeur est directement relié.
2. l'adresse IP 0.0.0.0 (celle d'internet) sera associée à la passerelle qui fera circuler le message vers internet. Ce sera l'adresse IP du routeur voisin qui pourra acheminer ce message vers internet.
3. les adresses IP des reseaux auxquels le routeur n'est pas directement lié. La passerelle sera l'adresse de la carte reseau du routeur voisin qui mène à ces reseaux.

*Exemple:*
Dans cette représentation, on donne l'adresse des réseaux lorsqu'il y a plusieurs connexions. Par exemple `192.168.1.0/24` pour le reseau en bas à gauche. Pour toutes les machines connectées, on ne donne que la partie *adresse machine*. Il s'agit du dernier octet de l'adresse IP.


<figure>
  <img src="../images/routage4.png" alt="système n°1">
  <figcaption>système n°1</figcaption>
</figure>

La table de routage du routeur 1 est alors:

| reseau à rejoindre | passerelle (*Gateway*) |
|--- | --- |
| 192.168.0.0/24 | 192.168.0.254 |
| 192.168.1.0/24 | 192.168.1.254 |
| 0.0.0.0 | 192.168.1.253 |
| 10.0.0.0/24 | 192.168.0.253 |

*Exercices:*

*Ex 1:* Donner les tables de routage des autres routeur de ce système informatique n°1

*Ex 2:* Donner les tables de routage des routeurs du système informatique suivant:


<figure>
  <img src="../images/routage3.png" alt="système n°2">
  <figcaption>système informatique n°2</figcaption>
</figure>

Routeur 1

| reseau à rejoindre | passerelle (*Gateway*) |
|--- | --- |
|  |  |
|  |  |
|  |  |
|  |  |

Routeur 2

| reseau à rejoindre | passerelle (*Gateway*) |
|--- | --- |
|  |  |
|  |  |
|  |  |
|  |  |

## TP : simulation d'un reseau à l'aide du logiciel Filius
Le TP se trouve à l'adresse [suivante](/docs/SNT_2nde/pages/page3/TP_reseau/)

## Modélisation du réseau par un graphe
Considérons système informatique constitué de:

* 4 réseaux LAN
* Un switch par reseau
* plusieurs machines hôtes, partagées dans les 4 reseaux
* une passerelle vers internet

Les adresses IP indiquées sur le schéma suivant concernent toutes les cartes reseaux des machines. Les routeurs possèdent une carte reseau par interface reseau.


<figure>
  <img src="../images/LAN.png" alt="exemple d'un reseau de sous-reseaux">
  <figcaption>exemple d'un reseau de sous-reseaux</figcaption>
</figure>

Dans cet exemple, voici la liste des adresses IP des différents reseaux:

| reseau | adresse IP | symbole utilisé dans le graphe |
|--- |--- |--- |
| reseau 0 | 192.168.0.0 | S0 |
| reseau 1 | 192.168.1.0 | S1 |
| reseau 2 | 100.10.42.0 | S2 |
| reseau 3 | 165.124.42.101 | S3 |
| internet | 192.168.4.0 | internet |

Et celle des différentes machines

| machine | adresse IP | symbole utilisé dans le graphe |
|--- |--- |--- |
| routeur 1 côté reseau 0 | 192.168.0.1 | R1 |
| routeur 1 côté reseau 1 | 192.168.1.1 | R1 |
| routeur 2 côté reseau 1 | 192.168.1.2 | R2 |
| routeur 2 côté reseau 2 | 100.10.42.1 | R2 |
| routeur 3 côté reseau 1 | 192.168.1.3 | R3 |
| routeur 3 côté reseau 3 | 165.124.42.1 | R3 |
| routeur 4 côté reseau 3 | 165.124.42.254 | R4 |
| routeur 4 côté internet| 192.168.4.1 | R4 |

Pour constituer un graphe de ce système informatique, on ne représentera pas le détail des sous-reseaux LAN. Les routeurs et les switchs seront les sommets du graphe. Leurs liaisons les arêtes. Les étiquettes des arêtes sont les coûts. (voir plus loin)



<figure>
  <img src="../images/fig50.png" alt="modelisation par graphe">
  <figcaption>modelisation par graphe</figcaption>
</figure>

Supposons que la machine 192.168.0.101 du sous-reseau 192.168.1.0 souhaite communiquer avec une autre machine sur *internet*.

Dans le reseau de cette machine, tous les ordinateurs hôtes sont reliés au switch *S0*. Ce switch *voit* le routeur **R1** à l'adresse IP de sa carte reseau *côté S0*, soit 192.168.0.1

Les switch et routeurs seront appelés S0, S1, S2, S3, R2, R3, R4 pour simplifer. Leur identifiant est celui de leur reseau (switch) ou de leur carte reseau (routeur):

* S1 : 192.168.1.0
* R2 : 192.168.1.2
* etc... (voir tableau)

Cela permet de recréer la carte globale du reseau, mais cette fois, avec les adresses IP des machines.

## Les coûts (poids des arêtes)

Selon l'agorithme de routage utilisé, le coût correspondra: 

* soit à la distance mesurée en nombre de sauts (routeurs intermédiaires) = algorithme à vecteur de distance RIP
* soit une valeur calculée à partir du nombre de sauts, mais aussi du débit = algorithme à état de liaison OSPF


# protocoles de routage



Pour chacun des videos, au cours de leur visionnage, prendre en notes pour repondre aux questions suivantes:

1. Pour le routage étudié, un routeur connait-il la carte globale du reseau (quel routeur est connecté à tel autre)?
2. Pour le routage étudié, s'agit-il des protocoles RIP ou OSPF?
2. communique t-il avec ses voisins directs, ou avec l'ensemble du reseau?
3. communique t-il aux autres routeurs de gros ou petits volumes d'informations pour établir sa table de routage?
4. un routeur, connait-il le chemin exact pour atteindre n'importe quel routeur du reseau?
5. connait-il le nombre de sauts pour atteindre n'importe quel routeur du reseau?
6. selectionne t-il le routeur voisin qui va donner le plus court chemin en nombre de saut / en durée d'acheminement?
7. Comment met-il à jour sa table de routage lorsqu'il y a une modification du reseau?

## Le routage à vecteurs de distance

<a href="https://www.youtube.com/watch?v=kzablGaqUXM" target="blank"><img src="../images/video.png"></a>

## Les routage à états de liens

<a href="https://www.youtube.com/watch?v=-utHPKREZV8" target="blank"><img src="../images/video.png"></a>



# Liens
## Videos présentées dans cette page

* Video (Youtube): [reseaux, adresses IP et masques de sous-reseaux](https://www.youtube.com/watch?v=RnpSaDSSjR4)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=kzablGaqUXM)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=-utHPKREZV8)

[^1]: En réalité, on ne saisit pas `http://adresse IP` mais `http://URL de la page` depuis la barre du navigateur. Celui-ci remplace l'URL de la page par l'adresse IP correspondante, après consultation du serveur DNS.
