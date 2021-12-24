---
Title: protocoles
---

# Protocoles
Pour rappel, un protocole est un langage. Il permet aux machines qui dialoguent ensemble de se comprendre.

Grâce au protocole TCP, les machines dialoguent en *mode connecté*.

Le *mode connecté* est l'établissement d'une session de communication entre deux parties qui veulent échanger des données. Cette session comporte:

* un début
* une fin 
* et une validation (vérification des erreurs).

## rappels sur le modèle en couches
On a vu que l'information qui circule entre 2 machines comprend des données et des adresses.

Les composants du reseau n'ont accès qu'à certaines de ces données et adresses, selon leur position dans le modèle en couches.

<figure>
  <img src="../images/trame_message_OSI.png">
  <figcaption>message -> datagramme -> trame</figcaption>
</figure>

*source: [comprendre les modèles OSI et TCP/IP - chaine Cookie connecté](https://www.youtube.com/watch?v=26jazyc7VNk)*

Ainsi:

* Le switch fait partie des couches *liaison* (2)  et *physique* (1). Il a accès aux bits et à l'adresse MAC. Il en a besoin pour commuter les trames vers le bon port. (même reseau).
* Le routeur a accès aux adresses MAC et IP de la trame. Il va interconnecter des reseaux grace aux adresses IP.

<figure>
  <img src="../images/switch_routeur_OSI.png">
</figure>

## Protocoles de la couche physique
le rôle principal de la couche 1 est d'offrir un support de transmission pour les communications. Le protocole de la couche 1 doit permettre aux machines de communiquer sans collision (l'une après l'autre pour 2 machines de la même ligne). Il existe par exemple le protocole CSMA/CD, pour organiser le droit de parole lorsque 2 machines sont directement connectées.

## Protocoles de la couche liaison
Le protocole Ethernet: l'objectif est de permettre à des machines connectées ensemble de communiquer, ainsi que la détection des erreurs de transmission.

Les données sont mises dans une *trame*, dont les premières valeurs lisibles sont l'adresse MAC du destinataire, puis de l'émetteur.

Ainsi, lorsqu'une machine reçoit une trame, et que les premiers bits identifient son adresse MAC, alors elle conserve la trame, car celle-ci lui est destinée.

Un autre protocole a été utilisé pour fiabiliser la transmission. Le protocole du bit alterné est utilisé au sein de la couche 2 du modèle OSI (distribution des trames Ethernet). Simple et léger, il peut toutefois être facilement mis en défaut, ce qui explique qu'il ait été remplacé par des protocoles plus performants.

<figure><div>
  <img src="../images/bit_alterne.png">
  <figcaption>source: <a href="https://pixees.fr/informatiquelycee/n_site/nsi_prem_bit_alt.html">site Pixees</a></figcaption></div>
</figure>

Cela necessite d'ajouter 1 bit dans l'en-tête prévu pour la couche 2, contenant déjà les adresses MAC.

### Principe du protocole du bit alterné
la première trame envoyée par A aura pour drapeau 0, dès cette trame
reçue par B, ce dernier va envoyer un accusé de réception avec le drapeau 1 (ce 1 signifie "la prochaine trame
que A va m'envoyer devra avoir son drapeau à 1"). Dès que A reçoit l'accusé de réception avec le drapeau à
1, il envoie la 2e trame avec un drapeau à 1, et ainsi de suite... 

Le système de drapeau est complété avec un système d'horloge côté émetteur. Un "chronomètre" est déclenché à chaque envoi de trame, si au bout d'un certain temps, l'émetteur n'a pas reçu un acquittement correct (avec le bon drapeau), la trame précédemment envoyée par l'émetteur est considérée comme perdue et est de nouveau envoyée. 

### Code de correction d'erreur CRC
Dans la trame, on ajoute aux données de la couche 2 un code de correction des erreurs, ou CRC. C'est une valeur mathématique qui est représentative des données envoyées.

<figure>
  <img src="../images/trame_crc.jpg">
</figure>

Lors de l'envoi, A calcule le CRC (une valeur X) et le met à la fin de la trame.

B reçoit le message et fait le même calcul que A avec la trame reçue (une valeur Y).

B compare la valeur qu'elle a calculée (Y) avec la valeur que A avait calculée et mise à la fin de la trame (X).

Si elles sont égales, bingo ! La trame envoyée par A est bien identique à la trame reçue par B.

### Désencapsulation
Supposons que les machines A et B soient des *routeurs*:

Une fois que la machine B a reçu la *bonne* trame, elle *désencapsule* les données pour consulter celles de couche 3, les adresses IP. Elle agit alors selon le protocole IP.


## Le protocole IP
> Le protocole IP a pour charge de mettre en contact 2 ordinateurs qui n'appartiennent pas au même réseau. (par exemple sur Internet). C'est un protocole de la **couche 3** (couche reseau).

La couche 3 a pour rôle d'interconnecter les reseaux.

Lorsqu'un routeur reçoit un paquet d'une machine A, et qu'il doit la transmettre vers la machine B, il consulte sa *table de routage* pour l'envoyer par le chemin (l'interface) le plus court.

La table contient, pour chaque machine à atteindre, l'interface vers laquelle doivent transiter les données, ainsi qu'un coefficient correspondant au coût pour cette interface. (Le coût étant égal au nombre de sauts, ou bien au résultat d'un calcul mettant en jeu le debit).

<figure>
  <img src="../images/routeur_table.png">
  <figcaption>réseau de routeurs et table de routage (MOOC de l'IMT)
</figcaption>
</figure>


Cette table de routage ne peut contenir tous les routeurs du reseau internet (estimé à probablement 1 million). Il est donc necessaire de regrouper les sous-réseaux en *aires*, et d'indiquer le chemin vers ces *aires* dans les tables de routage.

<figure>
  <img src="../images/routeur_aire.png">
</figure>

La manière avec laquelle les tables de routages sont constituées est le resultat du protocole IP. Il existe ainsi:

* le routage à vecteur de distance
* le routage à état de liens

Cette partie sera développée en Term NSI.

*[sources: mooc de l'institut des mines telecom](https://www.youtube.com/watch?v=FeZI3Xl7j84)*

**TTL**: Le protocole prend en compte le *time to live* (TTL), une valeur numerique du datagramme (couche reseau), qui diminue d'une unité à chaque saut (routeur). Lorsque ce TTL arrive à zero, alors que le paquet n'est pas parvenu à destination, celui-ci est détruit. On verra que dans le protocole TCP, cette eventualité est prévue. Un compte à rebours du côté de la machine emettrice va provoquer la ré expedition du paquet lorsque ce compteur arrive à 0, et qu'aucun accusé de reception n'est parvenu.

## Le protocole TCP
> Le protocole TCP permet d'assurer le transport des données de sorte que celles-ci arrivent complètes, sans trop occuper les lignes du reseau. C'est le protocole de la **couche 4**. A ce niveau de la couche de transport, l'identifiant ajouté au *message* est le **numéro de port** de l'application qui est à l'origine du message.


La fiabilité est obtenue par un mécanisme d'acquittement des segments : 

* À l'émission d'un segment, une alarme est amorcée
* Elle est désamorcée quand l'acquittement correspondant est reçu 
* Si elle expire, le segment est réémis


<figure>
<img src="../images/TCP1.png" width = 80% alt="TCP1">
<figcaption>TCP1</figcaption>
</figure>

* Chaque segment possède un numéro de séquence SEQ: c'est le numéro du dernier octet envoyé. C'est grâce à ce numero que les segments peuvent être remis dans l'ordre.
* Les acquittements sont identifiés par un marqueur ACK: c'est le numéro du prochain octet attendu par l'autre machine.
* Le concept même d'acquittement impose des notions de délai.
Par exemple, quel est le délai au delà duquel un segment non acquitté doit être réémis


<figure>
<img src="../images/TCP2.png" width = 80% alt="TCP2">
<figcaption>TCP2</figcaption>
</figure>

*TCP permet ainsi d'être un protocole fiable sans perte de paquets, qui permet à 2 machines de communiquer entre elles (et seulement 2)*

## Protocoles DNS, HTTP, ...
> C'est un protocole de la couche Application. Le sujet a déja été traité [ici](http://localhost:1313/docs/SNT_2nde/pages/page3/circulation/#dns-ip-et-url)

La couche d'application définit les services Internet standard et les applications réseau à la disposition des utilisateurs: utilise les protocoles HTTP, FTP, SMTP.

Le protocole HTTP a été traité [ici](/docs/NSI/HTML/page2/)

# Exercices
## adressage IP dans un reseau
**Ex 1:**

Sur la configuration IP d’une machine nommée MACH01 on peut lire :


> adresse Ipv4 : 172.16.100.201<br>
Masque de sous-réseau :  255.255.0.0<br>
Passerelle : 172.16.0.254<br>

Sur la configuration IP d’une machine nommée MACH02 on peut lire :


> adresse Ipv4 : 172.16.100.202<br>
Masque de sous-réseau :  255.255.0.0<br>
Passerelle : 172.16.0.254<br>

**1.** *(QCM)* Depuis la machine MACH02, à l'aide de quelle commande peut-on tester le dialogue entre ces deux machines ?

Réponses :

A- ping 172.16.100.201

B- ping 172.16.100.202

C- ping 172.16.100.254

D- ping 255.255.0.0 

**2.** On souhaite ajouter une nouvelle machine dans ce reseau. Proposez une nouvelle adresse IP possible pour cette machine.

**3.** *(QCM)* Quel est le composant qui a l'adresse 172.16.0.254?

A- un ordinateur du reseau

B- l'une des interfaces du routeur

C- l'adresse du switch

**Ex 2:** 
Une machine a pour adresse IP:

$$192.168.0.1 / 24$$

le /24 signifie que les 24 premiers bits correspondent à l'adresse reseau. Le reste des bits correspond à l'adresse machine.

Représenter cette adresse en binaire, et identifier les bits correspondant aux 2 sous-parties, reseau et machine.

## Constitution d'un reseau
**Ex 1:**


<figure>
  <img src="../images/routage4.png">
</figure>

**1.** La machine 192.168.0.1 veut joindre la machine 10.0.1.1 Combien de sauts seront necessaires?

**2.** Les switchs ne sont pas représentés sur ce schéma. Positionnez celui du reseau 192.168.0.0

**3.** Les ordinateurs du reseau 192.168.0 ne peuvent plus acceder à internet, de même que celui d'adresse 10.0.0.1. Par contre, ceux-ci peuvent encore communiquer entre eux. Quelle peut être la cause de cette panne?

## Routage
**Ex 1:** 
Soit le reseau de routeurs A, B, C, D:

<figure>
  <img src="../images/ABCD.png">
</figure>

On suppose que la transmission par une liaison prend une unité de temps. Un seul paquet peut emprunter une liaison pendant cette durée.

A chaque unité de temps, le paquet poursuit sa route selon le parcours le plus rapide et fait 1 saut.

Au bout de ce temps, le paquet est donc forcément stocké au niveau du routeur d'arrivée.

* A l'instant 1, A commence l'envoi vers C d'une donnée constituée de 3 paquets P1, P2, P3.
* A l'instant 2, D commence l'envoi vers C d'une donnée composée de 2 paquets P4 et P5

| Temps | A | B | C | D |
| --- | --- | --- | --- | --- |
| 0 | P1, P2, P3 |  |  |  |
| 1 | P2, P3 | P1 |  |  P4, P5 |
| 2 |  |  |  |  |
| ...  |  |   |   |

**1.** Compléter le tableau des différentes étapes d'envoi des données.

**2.** Déterminer l'espace de stockage nécessaire dans le noeud B.

## Trame et datagramme
**Ex 1:** 
Donner les principaux éléments qui composent un datagramme IP et décrire leur utilité.

**Ex 2:**
Voici le modèle simplifié de datagramme IP que nous allons utiliser dans la suite de l'exercice:

<figure>
  <img src="../images/dataIP.png">
  <figcaption>modèle simplifié de datagramme IPv4</figcaption>
</figure>

**1.** Sur combien d'octets sont codés:

* une adresse IPv4?
* une adresse IPv6?
* un entête IPv4 (au minimum)?

**2.** En vous basant sur l'illustration du datagramme IP ci-dessus, dessinez et indiquez certaines des valeurs contenues dans un 2<sup>e</sup> datagramme qui repond à l'emetteur avec la donnée: *il est midi*, le TTL est fixé à 5.

**3.** Représentez le datagramme IPv4 correspondant aux informations suivantes:

* source: 10.0.1.1
* destination: 128.192.2.2
* TTL: 3
* Données à envoyer: *Bonjour*
* Pas d'option

## Protocole du bit alterné
**Ex 1:**

On veut envoyer la donnée *1234567890* de A vers B avec le protocole du bit alterné

**1.** Que doit renvoyer B lorsqu'il reçoit:

* donnée: 12345
* bit de contrôle: 1 ?

**2.** Que doit renvoyer A s'il reçoit un bit de contrôle à 0?

**3.** Que doit-il renvoyer s'il reçoit 1 comme bit de contrôle?

**Ex 2:**

La machine A doit envoyer les 3 données suivantes: *hohoho*, *salut*, *les enfants*.

Indiquer les données et les bits de contrôle qui sont transmis dans le protocole du bit alterné lorsque:

**a.** toutes les données sont transmises sans problème.

**b.** la 2e donnée est mal receptionnée 2 fois de suite.

## Protocole TCP
**Ex 1:** (QCM)

Quels sont les avantages de la transmission sous forme de paquets?

A- S'assurer que les données arrivent dans leur ordre d'envoi.

B- S'assurer que les données ne restent pas indéfiniment dans le réseau.

C- Utiliser au mieux les liens dans le reseau.

**Ex 2:** (QCM plusieurs reponses possibles)

Que nécessite la transmission sous forme de paquets?

A- Pouvoir stocker la donnée si un lien n'est pas libre.

B- Une adresse source et une adresse destination associée au paquet.

C- Un protocole de fiabilisation de la transmission.

D- Un préfixe d'adresse.

# Liens
* adresse IP, partie reseau, partie machine, plages d'adresses: [cours openclassroom](https://openclassrooms.com/fr/courses/857447-apprenez-le-fonctionnement-des-reseaux-tcp-ip/853441-la-couche-3)

