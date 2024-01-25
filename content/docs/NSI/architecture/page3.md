---
Title : protocoles de routage
---
Ce cours comporte plusieurs pages:

* [introduction aux graphes - SNT](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [modele OSI et TCP/IP. 1ere Nsi](/docs/SNT_2nde/pages/page3/modele_OSI/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/)
* [Protocoles de routage](/docs/NSI/architecture/page3/)
* [Arbres](/docs/NSI/structure/page4/)

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



{{< img src="../images/TCP.png" alt="principe de l" caption="principe de l'emission - reception d'une trame sur internet" >}}


{{< img src="../images/TCP2.png" alt="envoi d" caption="envoi d'un accusé de reception" >}}
*[compléments et rappels de 1ere NSI: Lien](/docs/SNT_2nde/pages/page3/modele_OSI/)*

### Les machines
Les machines reliées dans le réseau internet peuvent être:

* un ordinateur  (machine hôte)
* une imprimante
* un commutateur (switch) : mis en reseau de manière centralisée, n'a pas d'adresse IP, agit au niveau de la couche 2, connecte les machines dans le sous-reseau, sert à envoyer les trames au destinataire direct, ne possède pas d'adresse IP.
* routeur : transporte les paquets même s'ils ne lui sont pas adressés directement, choisit la meilleure route, joint plusieurs réseaux, agit au niveau de la couche 3.

Un routeur possède plusieurs cartes réseaux. Sur le modèle suivant, il y a 3 ports ethernet, ainsi qu'une antenne wifi. Ce qui fait 4 cartes reseau:


{{< img src="../images/routeur1.png" caption="routeur de la marque Siretta" >}}

## Adresse IP
Dans le reseau internet, les reseaux et les machines sont identifiés par un numéro unique, l'adresse IP. Pour être exact, ce sont les cartes reseaux des machines qui possèdent une adresse IP.


Pour plus de précisions sur l'adressage IP ainsi que le masque de sous-reseau, voir la {{< a link="https://www.youtube.com/watch?v=RnpSaDSSjR4" caption="video sur IP et masque sous-reseau (L. Guerin)" >}}:

{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=RnpSaDSSjR4"  caption="video sur IP et masque sous-reseau (L. Guerin)" >}}

Une adresse IP de la norme IPv4 est un nombre binaire codé sur 32 bits, soit 4 octets. Le nombre d'adresses possibles est alors de plus de 4 milliards. 

*Exemple d'adresse IPv4 exprimée à l'aide de 4 valeurs décimales (0-255):*

`192.168.0.1/24` 

La notation utilisant CIDR composé d’une adresse IPv4 et d’une indication sur le **masque de sous réseau**. Par exemple : `192.168.0.1/24` signifie :
* Adresse IP : 192.168.0.1
* Masque de sous-réseau en notation CIDR : 24 
* partie reseau de l'adresse: 24 premiers bits, c'est à dire les octets 192.168.0
* partie machine de l'adresse IP: les 8 derniers bits (32 - 24), soit le dernier octet: .1

### Machines appartenant à un même reseau
**Definition: Deux machines sont sur le même réseau si et seulement si, les parties réseau de leur adresse IP sont identiques.**

Les derniers caractères `/24` correspondent au *masque de sous-reseau*. Ils signifient que le reseau contenant la machine a une adresse codée sur les 24 premiers bits (192.168.0). Et que les 8 derniers bits constituent l'adresse de la machine dans ce reseau (il s'agit donc du .1 final). 

Le masque de sous-reseau peut être aussi exprimé sous la forme binaire. Les N premiers chiffres du masque valent alors 1 et les autres (jusqu'au 32e) valent 0. Par exemple:

`/8` correspond à `11111111 00000000 00000000 00000000`. 

Il est alors plus commode d'écrire l'equivalent décimal pour chacun des bits:

`255.0.0.0`

### Remarque sur la norme IPv6
Pour la norme IPv6, ce nombre est sur 128 bits, soit 16 octets.
*Exemple d'adresse IPv6 exprimée en hexadécimal (32 caractères):* `2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b` 



> Voir l'exercice n°4 du sujet de Baccalaureat: centres etrangers 2021: [étude d'un reseau informatique](https://eduscol.education.fr/document/33073/download)

> Voir l'exercice n°1 du sujet de Baccalaureat: Metropole Sept 2021: [reseau d'ordinateurs](https://eduscol.education.fr/document/32914/download)


## Table de routage (reseau local)
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


{{< img src="../images/routage4.png" alt="système n°1" caption="système n°1" >}}
La table de routage du routeur 1 est alors:

| reseau à rejoindre | passerelle (*Gateway*) |
|--- | --- |
| 192.168.0.0/24 | 192.168.0.254 |
| 192.168.1.0/24 | 192.168.1.254 |
| 0.0.0.0 | 192.168.1.253 |
| 10.0.0.0/24 | 192.168.0.253 |

*Exercices:*

**Exercice 1:** Donner les tables de routage des autres routeurs de ce système informatique n°1

**Exercice 2:** Recopier et completer les tables de routage des routeurs du système informatique suivant:


{{< img src="../images/routage3.png" alt="système n°2" caption="système informatique n°2" >}}
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


> Voir l'exercice n°1 du sujet de Baccalaureat: Metropole Sept 2021: [Architecture de reseau d'ordinateurs, table de routage](https://eduscol.education.fr/document/32917/download)

## TP : simulation d'un reseau à l'aide du logiciel Filius
* Le TP de 1ere NSI se trouve à l'adresse [suivante](/docs/SNT_2nde/pages/page3/TP_reseau/)
* Le TP de terminale se trouve à l'adresse [suivante](/docs/SNT_2nde/pages/page3/TP_reseau_term/)

## Modélisation du réseau par un graphe
Considérons système informatique constitué de:

* 4 réseaux LAN
* Un switch par reseau
* plusieurs machines hôtes, partagées dans les 4 reseaux
* une passerelle vers internet

Les adresses IP indiquées sur le schéma suivant concernent toutes les cartes reseaux des machines. Les routeurs possèdent une carte reseau par interface reseau.


{{< img src="../images/LAN.png" alt="exemple d" caption="exemple d'un reseau de sous-reseaux" >}}
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



{{< img src="../images/fig50.png" alt="modelisation par graphe" caption="modelisation par graphe" >}}
Supposons que la machine 192.168.0.101 du sous-reseau 192.168.1.0 souhaite communiquer avec une autre machine sur *internet*.

Dans le reseau de cette machine, tous les ordinateurs hôtes sont reliés au switch *S0*. Ce switch *voit* le routeur **R1** à l'adresse IP de sa carte reseau *côté S0*, soit 192.168.0.1

Les switch et routeurs seront appelés S0, S1, S2, S3, R2, R3, R4 pour simplifer. Leur identifiant est celui de leur reseau (switch) ou de leur carte reseau (routeur):

* S1 : 192.168.1.0
* R2 : 192.168.1.2
* etc... (voir tableau)

Cela permet de recréer la carte globale du reseau, mais cette fois, avec les adresses IP des machines.

## Les coûts (poids des arêtes)

Selon l'agorithme de routage utilisé, le coût correspondra: 

* soit à la distance mesurée en nombre de sauts sur les routeurs intermédiaires (algorithme à vecteur de distance RIP)
* soit une valeur calculée à partir du nombre de sauts, mais aussi du débit (voir plus loin avec l'algorithme à état de liaison OSPF)


# protocoles de routage
> Activité: Pour chacune des videos, au cours de leur visionnage, prendre en notes pour repondre aux questions suivantes:

1. Pour le routage étudié, un routeur connait-il la carte globale du reseau (quel routeur est connecté à tel autre)?
2. Pour le routage étudié, s'agit-il des protocoles RIP ou OSPF?
3. communique t-il avec ses voisins directs, ou avec l'ensemble du reseau?
4. communique t-il aux autres routeurs de gros ou petits volumes d'informations pour établir sa table de routage?
5. un routeur, connait-il le chemin exact pour atteindre n'importe quel routeur du reseau?
6. connait-il le nombre de sauts pour atteindre n'importe quel routeur du reseau? 
7. selectionne t-il le routeur voisin qui va donner le plus court chemin en nombre de saut / en durée d'acheminement? (Question de l'exercice n°4 du [sujet de baccalaureat 2021, Polynesie](https://eduscol.education.fr/document/32770/download))
8. Comment met-il à jour sa table de routage lorsqu'il y a une modification du reseau?

## Le routage à vecteurs de distance
{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=kzablGaqUXM"  caption="Video (Youtube): Mooc de l'INT (institut des Mines Télécom)" >}}


{{< img src="../images/routage_RIP.png"  caption="exemple de table de routage à vecteur de distance" >}}

## Les routage à états de liens
{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=-utHPKREZV8"  caption="Video (Youtube): Mooc de l'INT (institut des Mines Télécom)" >}}




{{< img src="../images/routage_OSPF.png"  caption="exemple de table de routage à états de liens" >}}

> Exercice n°3 du [sujet de baccalaureat Metropole 2022](/docs/NSI/bac/page6/#bac-2022-metropole1-exercice-3): représentations binaires et protocoles de routage. (RIP, OSPF), minimiser le nombre de routeurs à traverser pour une requête.

# Débit
Le debit est la vitesse à laquelle sont échangées les données, expimée en bits/s (ou kb/s, Mb/s...). Le débit se définit par le rapport du nombre de données circulant (en bits), par la durée (s).

$$D = \tfrac{N}{s}$$

Pour assurer une navigation correcte sur Internet ou regarder la télé ou des vidéos en streaming, le debit minimum doit être de 8Mb/s.

En 2022, l'objectif est de fournir en france, à tous les foyers, le THD (très haut débit), soit 30Mb/s. 

Avec la fibre, ce débit est encore dépassé (quelques centaines de Mb/s).

{{< img src="../images/debit.png"  caption="de nombreux sites proposent un test de debit pour votre connexion internet" >}}

**La notion de coût d'une liaison (OSPF)**

$$cout = \tfrac{10^8}{debit}$$

| Type de réseau | Coût par défaut |
|--- |--- |
| FDDI, FastEthernet | 1 |
| Ethernet 10 Mbps | 10 |
| E1 (2,048 Mbps) | 48 |
| T1 (1,544 Mbps) | 65 |
| 64 Kbps | 1562 |
| 56 Kbps | 1758 |
| 19.2 Kbps | 5208 |

voir complements sur [developpez.com](https://inetdoc.developpez.com/tutoriels/routage-dynamique-protocole-ospf/)

# Liens
## Videos présentées dans cette page

* Video (Youtube): [reseaux, adresses IP et masques de sous-reseaux](https://www.youtube.com/watch?v=RnpSaDSSjR4)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=kzablGaqUXM)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=-utHPKREZV8)
## Autres documents
* cours complet de niveau term NSI sur les reseaux autonomes: [infoforall](https://www.infoforall.fr/act/archi/procole-de-routage-dynamique-rip/)
* autres exercices sur les algo de routage [http://www.netlab.tkk.fi/opetus/s38121/s01/Exercises/solution3.pdf](http://www.netlab.tkk.fi/opetus/s38121/s01/Exercises/solution3.pdf) et [https://www.netlab.tkk.fi/opetus/s38122/s00/Exercises/Exercise-3.pdf](https://www.netlab.tkk.fi/opetus/s38122/s00/Exercises/Exercise-3.pdf)

[^1]: En réalité, on ne saisit pas `http://adresse IP` mais `http://URL de la page` depuis la barre du navigateur. Celui-ci remplace l'URL de la page par l'adresse IP correspondante, après consultation du serveur DNS.
