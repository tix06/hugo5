---
title: modele OSI
---

# Le modèle OSI
On peut rentrer un peu plus dans le détail du modèle OSI et en particulier de la communication TCP/IP.
Le modèle OSI est une norme qui préconise comment les ordinateurs devraient communiquer entre eux avec 5 *couches* technologiques adjacentes, numérotées selon leur *distance* au support d'emission (la couche n°1).

Ce modèle (theorique) a été conçu pour cloisonner les différents processus, langages et technologies employés. 

Le modèle OSI ajoute deux règles plus générales entre les couches :
• chaque couche est indépendante ;
• chaque couche ne peut communiquer qu'avec une couche adjacente.

Lors de l'émission d'une requête par une application, celle-ci doit traverser toutes les couches, depuis la 7 (application), puis de la 4 vers la 1; durant le trajet les données subiront des modifications et chaque couche rajoutera ce qu'elle voudra (généralement des en-têtes) pour mieux exercer sa fonction, mais pas seulement (la couche 1, de transport concerne... le transport). 

Ce mécanisme s'appelle l'encapsulation : la trame de données numériques est constituée de plusieurs parties distinctes et mises dans un ordre particulier.
Au final, ce qui va circuler sur le réseau est une trame de couche 2, qui contient le datagramme de couche 3 (qui lui-même contiendra l'élément de couche 4)

![encapsulation](../images/encapsulation.png)
Lors de la réception c'est exactement l'inverse qui se produit (désencapsulation).
![desencapsulation](../images/desencapsulation.png)

**Prenons un exemple simple,** vous demandez à votre navigateur de charger votre site préféré www.informatix.fr. Vous êtes reliés à un modem par un câble à paires torsadées. 

## *couche application* 
Le navigateur demande au système d'envoyer une requête HTTP (couche 7). Dans cette couche, le logiciel lui même n'en fait pas partie. Cette couche concerne *l'interface* entre le logiciel est la couche de transport, et transporte l'information du **protocole application** utilisé (ici http par exemple, c'est à dire le protocole lié à l'affichage des pages html)
Sortie : [requête HTTP]
## *couche de transport* 
La requête arrive dans TCP qui ajoute son en-tête. Le protocole TCP va mettre en forme les données à envoyer et ajouter son en-tête. Ici, les numeros d'identification sont les **port source et le port destination**, qui identifient les **applications** qui entrent en jeu dans la communication. Parmi les informations, on trouve aussi le numéro de séquence ISN (pour séquence : dire à la machine en face combien de données elle est censée avoir reçues) et celui d'acquitement ACK (le numéro du prochain octet des données attendues). Ces numéros vont permettre d'établir une communication avec accusés de reception (pour TCP, pas UDP) et de s'assurer, en principe, de l'identité de la machine avec qui les données sont échangées (avec le numéro de séquence, nécessaire pour l'accusé de reception). L'en-tête contient aussi un *checksum.*
Sortie : [en-tête TCP][requête HTTP]
## *couche réseau* 
Le segment TCP arrive dans IP qui ajoute aussi son en-tête (qui contient entre autres votre **adresse IP**  (pour le **routage**) et celle du serveur demandé). La couche 3 indique à la couche 2 quel protocole a été utilisé (TCP, UDP...). Il y a aussi un numéro de connexions établies (IPID) sur le port en question et d'autres informations qui servent à l'eventuelle fragmentation du datagramme (les données ne peuvent pas exceder 1500 octets.  
Une autre valeur transportée est le TTL (time to live) qui evite que le paquet ne circule indefiniment sur les reseaux.
Sortie : [en-tête IP][en tête TCP][requête HTTP].
## *couche physique*
Le paquet IP arrive dans Ethernet qui ajoute un en-tête (qui contient entre autres votre **adresse MAC** - pour le **switch** -  et celle du modem) et un checksum (vérification d'erreurs CRC). La couche 2 peut alors former la trame et l'envoyer sur le réseau.
*Il va ajouter l'adresse MAC de l'emetteur et du destinataire, qu'il aura résolu grâce aux tables de routage et la *table arp* (côté serveur). On imagine ici que le datagramme ne peux contenir les données qu'après établissement de la connexion, ce qui sous entend un protocole de présentation.*

**Sortie : [en-tête Ethernet][en-tête IP][en tête TCP][requête HTTP][checksum Ethernet].**

![en-tête](../images/entete.png)

## *Retour sur le protocole TCP*
La fiabilité est obtenue par un mécanisme d'acquittement des segments : 
* À l'émission d'un segment, une alarme est amorcée
* Elle est désamorcée quand l'acquittement correspondant est reçu 
* Si elle expire, le segment est réémis

![TCP1](../images/TCP1.png)

* Chaque segment possède un numéro de séquence
* Les acquittements sont identifiés par un marqueur ACK
* Le concept même d'acquittement impose des notions de délai
Par exemple, quel est le délai au delà duquel un segment non acquitté doit être réémis

![TCP2](../images/TCP2.png)

*TCP permet ainsi d'être un protocole fiable sans perte de paquets, qui permet à 2 machines de communiquer entre elles (et seulement 2)*

**Retour sur le protocole IP:** c'est lui qui permet d'envoyer les paquets d'un ordinateur vers un autre ordinateur. Il gère l'adressage, le routage et l'interconnexion des différents réseaux.