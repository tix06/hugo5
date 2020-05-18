---
title: modele OSI
---
# faire communiquer des ordinateurs
Une première idée naïve : tout usage du numérique met des machines en connexion, et qui échangent des données.

<figure>
<img src="../images/reseau1.png" width = 80% alt="communication avec 2 ordinateurs">
<figcaption>communication avec 2 ordinateurs</figcaption>
</figure>

Ce modèle *simpliste* de réseau va devenir irréalisable lorsque celui-ci contiendra de nombreux ordinateurs : 

* grand nombre de connexions (et de liaisons physiques) au départ de chaque ordinateur
* grand nombre de ports utilisés

Il faudra d'autres éléments pour connecter les ordinateurs entre eux.

## reseau d'ordinateurs : un système *distribué*.
### Qu'est ce qu'un système informatique ?
Un système informatique fonctionne sur le modèle **client-serveur** :

Les parcs informatiques des écoles, universités, et entreprises ont leur activité qui dépend d'informations partagées sur leur réseau. (gestion des salles, ressources, identité des étudiants, des clients, les stocks, la comptabilité, les états financiers,...). En conséquence, une panne informatique ne leur permettrait plus de fonctionner. C'est pour cette raison que les ordinateurs doivent être connectés, que ces informations doivent être *distribuées* et que l'information doit être accessible, même si l'un des ordinateurs est en panne.

> Un système informatique est alors constitué : 

>  * d'une ou plusieurs base(s) de données
>  * d'ordinateurs serveurs qui stockent les bases de données
>  * d'ordinateurs clients : des ordinateurs plus simples, et qui doivent avoir accès aux ressouces.

<figure>
<img src="../images/LAN.png" width = 80% alt="LAN">
<figcaption>local area network (LAN)</figcaption>
</figure>

### des services diversifiés
Un réseau d'ordinateurs peut aussi servir à fournir des services de communication : 

- courrier électronique
- outils de collaboration (redaction à plusieurs)
- visioconférence
- la conclusion d'affaires par voie électronique, commandes en temps réel
- logiciel partagé

C'est l'utilisation d'un serveur partagé dans le réseau qui permet d'acceder à ces services.

Certains de ces services peuvent aussi être fournis par un serveur sur un réseau externe, accessible depuis internet. C'est ce que l'on appelle **le cloud** : *la livraison de ressources et de services à la demande par internet.*[^1Cloud]

Un réseau d'ordinateur peut aussi servir à partager du matériel (une imprimante), ou une connexion internet (le routeur). 

### Caractéristiques physiques des réseaux
Deux critères permettent de les caractériser : la technologie de transmission utilisée, et leur taille.

Les **supports de transmission** des données peuvent être : 

* cable ethernet
* wifi (ondes EM)
* bluetooth (ondes EM à courte portée)

### Le switch et le routeur
Les appareils ne sont pas forcément connectés directement, mais peuvent l'être au moyen d'un *switch*. (concentre les liaisons et possède une table de routage avec les adresses mac des ordinateurs reliés).

Les réseaux sont alors reliés entre eux par un *routeur*

<figure>
<img src="../images/reseau3.png" width = 80% alt="réseau d'ordinateurs">
<figcaption>réseaux d'ordinateurs</figcaption>
</figure>

*Sur cette image, les serveurs ne sont pas représentés, mais n'importe quel ordinateur du réseau peut assurer ce rôle. Certains sont donc des clients, d'autres des serveurs*.

le **routeur** est l'appareil disposant de sa propre adresse IP (voir plus loin) qui fait office de passerelle entre les périphériques sur un réseau local (LAN) et Internet. Dans un réseau de réseaux, c'est aussi une machine qui a plusieurs interfaces (plusieurs cartes réseau), chacune reliée à un réseau. Son rôle va être d'aiguiller les paquets reçus entre les différents réseaux.

*Remarque :* Avec un réseau d'ordinateurs, l'utilisateur se trouve devant la réalité des machines et leurs caractéristiques diverses, la varieté des équipements, OS, pour executer un programme sur une machine distante, l'usager doit ouvrir une session. Ce n'est plus le cas avec **Internet**.

*Pour approfondir :*  (Wikihow) comment configurer son réseau local ? [^2]

## Internet : un système *réparti*
le système réparti est un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent (un seul paradigme). Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. Un exemple est le web dans lequel toute information apparait comme un document. C'est donc un logiciel élaboré au dessus du réseau.

> Internet n'est pas un réseau d'ordinateurs. C'est un réseau de réseaux.

> Le web, c'est un système distribué opérant au-dessus d'internet.


# Le fonctionnement d'internet
## Protocole http
**http** est le protocole qui permet à une machine de demander et de recevoir une ressource d'un serveur.

*http :* est l'abréviation de HyperText Transfer Protocol. (est-ce plus clair ?)
En plus clair :

* **P**rotocole : c'est une règle.
* **T**ransfert : pour transférer (communiquer).
* **H**yperTexte : c'est du texte qui contient des liens vers d'autres ressources (documents, images etc...)

On a vu qu'un système informatique fonctionne sur le modèle *client-serveur*. Ceci est vrai, même si le serveur est extérieur au réseau du client (accessible par internet) : 

<figure>
<img src="../images/http.gif" width = 80% alt="protocole HTTP">
<figcaption>modèle client-serveur</figcaption>
</figure>

*Questions :* Comment le client s'adresse t-il au *bon* serveur ? Et comment celui-ci renvoie-t-il les données au *bon* client ? 

Nous allons répondre à ces questions avec la définition du *protocole IP...*

**le protocole IP:** c'est lui qui permet d'envoyer les paquets d'un ordinateur vers un autre ordinateur. Il gère l'adressage, le routage et l'interconnexion des différents réseaux.

## adresses IP
une adresse IP est un identifiant numérique unique attribué à chaque appareil (appareils mobiles, ordinateurs, routeurs, imprimantes, consoles de jeux, etc.) connecté à un réseau TCP / IP comme Internet. Plus précisemment, **c'est l'identifiant de la *carte reseau*, reelle ou virtuelle.**
Chaque dispositif peut se connecter grâce à cette adresse IP à d’autres périphériques et partager des informations. Il s'agit du Protocole Internet (IP), l'un des protocoles TCP. 

On le verra dans la suite :  IPv4 et IPv6 sont deux protocoles réseau sans connexion de la couche 3 du modèle OSI (Open Systems Interconnection).

**IPv4**

Ces adresses IP constituées de **4 nombres** sont les plus répandues à l'heure actuelle, on les appelle IPv4. Bien que codés sur 32 bits, leur nombre se révèle assez limité : il n'y a en effet "que" $$256×256×256×256$$
 possibilités d'IP, soit $$256^4=4\phantom*294\phantom*967\phantom*296$$
(plus de 4 milliards). Ce nombre a l'air grand, mais on finira prochainement par l'atteindre avec la multiplication des ordinateurs et des serveurs reliés à Internet.
C'est pourquoi ces IP ont vocation à être remplacées par un nouveau système : IPv6 (8 groupes de 2 octets)

**IPv6**
Ce sont des adresses IP codées sur 128 bits.
La nouvelle forme d'IP, que l'on va rencontrer de plus en plus, a la forme suivante :

`1703:01b8:43c4:85a3:0000:0000:a213:bba7`

Leur nombre est d'environ 10^29 fois plus important que pour les adresses IPv4.

## URL
**URL** Habituellement, un nom de domaine est associé à une adresse IP qui est celle du serveur et c’est le **serveur DNS** qui permet de connaitre l’adresse IP du serveur, quand on tape une adresse URL dans la barre d’adresse. Le DNS est donc un protocole indispensable au fonctionnement d'Internet. Non pas d'un point de vue technique, mais d'un point de vue de son utilisation (les adresses URL sont plus faciles à retenir pour un humain).

L’URL (Uniform Ressource Locator ) est l’adresse unique qui permet d’accéder à une page web à partir de sa saisie dans la barre d’adresses du navigateur. L‘URL est communément appelée : l’adresse web d’une page.

Prenons l’exemple :  `http://www.coursinfo.fr/` cette URL se compose de 4 blocs :

* `.fr` désigne le domaine de 2er niveau, le top level auquel appartient le domaine
* `coursinfo`  désigne le nom de domaine du site web – le site coursinfo.fr a souscrit à ce nom de domaine
* `www`          le www est la norme pour les sites Web (World Wide Web), et c'est un sous domaine dans la hierarchie de l'URL
* `http://      qui désigne le protocole à utiliser pour accèder au site web : ici c’est donc le protocole http
* l'URL finit en principe par un point (la racine dans la hierarchie)

Il s'agit donc d'un système hiérarchique qui permet de "découper" le réseau en un ensemble de domaines, eux-mêmes composés de sous-domaines, éventuellement composés de sous-sous-domaines, etc. 

La connaissance que vous avez maintenant de la construction de l'URL / nom de domaine devrait vous permettre d'eviter l'un des grand piege d'internet : le phishing...

# Le modèle OSI *(concerne la spé NSI de 1ere)*
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
La requête arrive dans TCP qui ajoute son en-tête. Le protocole TCP va mettre en forme les données à envoyer et ajouter son en-tête. Ici, les numeros d'identification sont les **port source et le port destination**, qui identifient les **applications** qui entrent en jeu dans la communication. Parmi les informations, on trouve aussi le numéro de séquence ISN (pour séquence : dire à la machine en face combien de données elle est censée avoir reçues) et celui d'acquitement ACK (le numéro du prochain octet des données attendues). Ces numéros vont permettre d'établir une communication avec accusés de reception (pour TCP, pas UDP) et de s'assurer, en principe, de l'identité de la machine avec qui les données sont échangées (avec le numéro de séquence, nécessaire pour l'accusé de reception). L'en-tête contient aussi un *checksum.*

> Sortie : [en-tête TCP][requête HTTP]

## *couche réseau* 
Le segment TCP arrive dans IP qui ajoute aussi son en-tête (qui contient entre autres votre **adresse IP**  (pour le **routage**) et celle du serveur demandé). La couche 3 indique à la couche 2 quel protocole a été utilisé (TCP, UDP...). Il y a aussi un numéro de connexions établies (IPID) sur le port en question et d'autres informations qui servent à l'eventuelle fragmentation du datagramme (les données ne peuvent pas exceder 1500 octets.  
Une autre valeur transportée est le TTL (time to live) qui evite que le paquet ne circule indefiniment sur les reseaux.

> Sortie : [en-tête IP][en tête TCP][requête HTTP].

## *couche physique*
Le paquet IP arrive dans Ethernet qui ajoute un en-tête (qui contient entre autres votre **adresse MAC** - pour le **switch** -  et celle du modem) et un checksum (vérification d'erreurs CRC). La couche 2 peut alors former la trame et l'envoyer sur le réseau.
*Il va ajouter l'adresse MAC de l'emetteur et du destinataire, qu'il aura résolu grâce aux tables de routage et la *table arp* (côté serveur). On imagine ici que le datagramme ne peux contenir les données qu'après établissement de la connexion, ce qui sous entend un protocole préalable de *présentation.*

> Sortie : [en-tête Ethernet][en-tête IP][en tête TCP][requête HTTP][checksum Ethernet].

<figure>
<img src="../images/entete.png" width = 80% alt="en-tête">
<figcaption>en-tête Ethernet</figcaption>
</figure>

## *Retour sur le protocole TCP*
La fiabilité est obtenue par un mécanisme d'acquittement des segments : 

* À l'émission d'un segment, une alarme est amorcée
* Elle est désamorcée quand l'acquittement correspondant est reçu 
* Si elle expire, le segment est réémis


<figure>
<img src="../images/TCP1.png" width = 80% alt="TCP1">
<figcaption>TCP1</figcaption>
</figure>

* Chaque segment possède un numéro de séquence
* Les acquittements sont identifiés par un marqueur ACK
* Le concept même d'acquittement impose des notions de délai
Par exemple, quel est le délai au delà duquel un segment non acquitté doit être réémis


<figure>
<img src="../images/TCP2.png" width = 80% alt="TCP2">
<figcaption>TCP2</figcaption>
</figure>

*TCP permet ainsi d'être un protocole fiable sans perte de paquets, qui permet à 2 machines de communiquer entre elles (et seulement 2)*



# Approfondir

* <a href = '../securite/index.html'>Sécurité des communications</a>
* <a href = '../TP_reseau/index.html'>TP simulation d'un reseau</a>

[^1Cloud]: Le cloud : désigne le stockage et l’accès aux données par l’intermédiaire d’internet plutôt que via le disque dur d’un ordinateur. Mais aussi des services rendus par des logiciels hébergés *côté serveur*.

[^2]: configurer son réseau local (Wikihow) : https://fr.wikihow.com/configurer-un-réseau-local