---
title: modele OSI
---

# Le modèle OSI

<figure>
  <a href="https://youtu.be/26jazyc7VNk" target="blank">
  <img src="../images/video_OSI.png">
  <figcaption>VIDEO: modèles OSI et TCP IP</figcaption></a>
</figure>

*source: [comprendre les modèles OSI et TCP/IP - chaine Cookie connecté](https://www.youtube.com/watch?v=26jazyc7VNk)*

## Les données qui circulent sur internet
*Internet manipule deux types d’information : les contenus envoyés et les adresses du destinataire et de l’émetteur. Ces deux types d’information sont regroupés dans des paquets de taille fixe, de façon uniforme et indépendante du type de données transportées : texte, images, sons, vidéos, etc.*

## Principe du modèle OSI
On peut rentrer un peu plus dans le détail du modèle OSI et en particulier de la communication TCP/IP.
Le modèle OSI est une norme qui préconise comment les ordinateurs devraient communiquer entre eux avec 5 *couches* technologiques adjacentes, numérotées selon leur *distance* au support d'emission (la couche n°1).

Les couches forment une hiérarchie qui va de l'application (HTTP, FTP etc...) jusqu'au support physique (cable coaxial, ondes etc...).

Ce modèle OSI (un modèle theorique) a été conçu pour cloisonner les différents processus, langages et technologies employés. 

Le modèle OSI ajoute deux règles plus générales entre les couches :

* chaque couche est indépendante ;
* chaque couche ne peut communiquer qu'avec une couche adjacente.

Lors de l'émission d'une requête par une application, celle-ci doit traverser toutes les couches, depuis la 7 (application), puis de la 4 vers la 1; durant le trajet les données subiront des modifications et chaque couche rajoutera ce qu'elle voudra (généralement des en-têtes) pour mieux exercer sa fonction, mais pas seulement (la couche 1, de transport concerne... le transport). 

Ce mécanisme s'appelle l'encapsulation : la trame de données numériques est constituée de plusieurs parties distinctes et mises dans un ordre particulier.
Au final, ce qui va circuler sur le réseau est une trame de couche 2, qui contient le datagramme de couche 3 (qui lui-même contiendra l'élément de couche 4)

<figure>
<img src="../images/encapsulation.png" width = 80% alt="encapsulation">
<figcaption>encapsulation</figcaption>
</figure>

Lors de la réception c'est exactement l'inverse qui se produit (désencapsulation).

<figure>
<img src="../images/desencapsulation.png" width = 80% alt="desencapsulation">
<figcaption>desencapsulation</figcaption>
</figure>

**Prenons un exemple simple,** vous demandez à votre navigateur de charger votre site préféré www.informatix.fr. Vous êtes reliés à un modem par un câble à paires torsadées. 

## *couche application*
Le navigateur demande au système d'envoyer une requête HTTP (couche 7). Dans cette couche, le logiciel lui même n'en fait pas partie. Cette couche concerne *l'interface* entre le logiciel est la couche de transport, et transporte l'information du **protocole application** utilisé (ici http par exemple, c'est à dire le protocole lié à l'affichage des pages html)

> Sortie : [requête HTTP]

## *couche de transport*
La requête arrive dans TCP qui ajoute son en-tête. Le protocole TCP va mettre en forme les données à envoyer et ajouter son en-tête. Ici, les numeros d'identification sont les **port source et le port destination**, qui identifient les **applications** qui entrent en jeu dans la communication. Parmi les informations, on trouve aussi le numéro de séquence initial, **ISN**, appelé aussi **SYN** (pour dire à la machine en face combien de données elle est censée avoir reçues) et celui d'acquitement **ACK** (le numéro du prochain octet des données attendues). Ces numéros vont permettre d'établir une communication avec accusés de reception (pour TCP, pas UDP) et de s'assurer, en principe, de l'identité de la machine avec qui les données sont échangées (avec le numéro de séquence, nécessaire pour l'accusé de reception). L'en-tête contient aussi un *checksum.*

> Sortie : [en-tête TCP][requête HTTP]

## *couche réseau*
Le segment TCP arrive dans IP qui ajoute aussi son en-tête (qui contient entre autres votre **adresse IP**  (pour le **routage**) et celle du serveur demandé). La couche 3 indique à la couche 2 quel protocole a été utilisé (TCP, UDP...). Il y a aussi un numéro de connexions établies (IPID) sur le port en question et d'autres informations qui servent à l'eventuelle fragmentation du datagramme (les données ne peuvent pas exceder 1500 octets.  
Une autre valeur transportée est le **TTL** (time to live) qui evite que le paquet ne circule indefiniment sur les reseaux.

> Sortie : [en-tête IP][en tête TCP][requête HTTP].


<figure>
  <img src="../images/dataTCPIP.png">
  <figcaption>modèle simplifié du datagramme</figcaption>
</figure>

## *couche physique*
Le paquet IP arrive dans Ethernet qui ajoute un en-tête (qui contient entre autres votre **adresse MAC** - pour le **switch** -  et celle du modem) et un checksum (vérification d'erreurs CRC). La couche 2 peut alors former la trame et l'envoyer sur le réseau.

Il va ajouter l'adresse MAC de l'emetteur et du destinataire, qu'il aura résolu grâce aux tables de routage et la *table arp* (côté serveur). 

> Sortie : [en-tête Ethernet][en-tête IP][en tête TCP][requête HTTP][checksum Ethernet].

<figure>
<img src="../images/entete.png" width = 80% alt="en-tête">
<figcaption>en-tête Ethernet</figcaption>
</figure>



Le document complet sur la structure d'une trame: [Lien](/pdf/NSI/reseau_trame.pdf)

Ce document est issu du cours en ligne du[lycee de Taaone](http://www.mysti2d.net/polynesie2/ETT/C044/31/SerruresBioIP/index.html?Cours4.html), série technologique.


# Liens

* <a href = "../circulation/">Retour vers la page Reseaux</a>
* <a href = "/docs/SNT_2nde/pages/page3/protocoles/"> Les protocoles TCP et IP</a>
* <a href = '../securite/index.html'>Sécurité des communications (1ere NSI)</a>
* <a href = '../TP_reseau/index.html'>TP simulation d'un reseau</a>

