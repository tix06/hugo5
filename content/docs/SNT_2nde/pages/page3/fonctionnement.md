---
Title: fonctionnement internet
---
# Video SNT: les protocoles

{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=s18KtOLpCg4" caption="Video SNT: Internet, IP un protocole universel ?" >}}

# Constitution du reseau internet
## Réseau local 
* Dans un réseau local, les ordinateurs sont interconnectés par un *switch* et peuvent communiquer entre eux par l'intermédiaire d'un *routeur*. C'est aussi le routeur qui fait passerelle vers *internet*.

{{< img src="../images/reseau-internet.png" alt="reseau internet" caption="reseau local et internet" >}}

## réseau internet
* Internet est un réseau de réseaux qui interconnecte toutes les machines à l'échelle mondiale.
En pratique, ce sont les routeurs des réseaux qui sont interconnectés. Lorsqu'un routeur reçoit une requête d'une des machines de son réseau, adressée à une machine qui n'appartient pas à son réseau, il se réfère à une table de routage d'internet pour expedier la requête. Il envoie alors la requête à un autre routeur. 

{{< img src="../images/reseau-internet.png" alt="reseau internet" caption="reseau local et internet" >}}


## Routeur et routage
Le **routeur**: c'est une machine qui a pour rôle de communiquer avec d'autres machines. Chaque routeur est identifié par une adresse IP. Il possède une table de *routage* qui lui permet de choisir la bonne liaison entre les 2 machines qui veulent communiquer.
Cette table de routage identifie les ordinateurs de manière unique par leur *adresse IP* : Un code binaire à 32 bits (norme IPv4) ou 128 bits (norme IPv6).

> Dans l'exemple ci-dessous, les données qui circulent du *client* vers le *serveur* vont probablement emprunter des chemins différents : certains passeront par les reseaux d'accès E, A, B et D, alors que d'autres emprunteront les reseaux E, A, C et D. Les routeurs par lesquels passent ces données seront aussi différents dans un même réseau d'accès. Le calcul de l'itinéraire est réalisé de manière dynamique, par les routeurs eux-même, en fonction du trafic.

Le trajet possible entre les 2 machines n'est pas unique : 

{{< img src="../images/internet-fig1.png" alt="reseau internet" link="https://interstices.info/internet-le-conglomerat-des-reseaux/" caption="" >}}
# Comment utiliser le reseau Internet?
Pour naviguer sur internet, votre machine va communiquer avec d'autres serveurs. Cette communication met en jeu plusieurs *protocoles*, dont les principaux sont **HTTP, IP et TCP**.

## Le protocole HTTP
Ce **protocole HTTP** est initié par le *client*, le navigateur (Mozilla, Chrome, ...).
Une fois la connexion établie, vous allez pouvoir charger la page Web depuis l'ordinateur serveur.

## adresse IP et adresses symboliques
Les adresses IP identifient les machines par un numero (sur 32 bits pour l'IPV4, et 128 bits pour l'IPV6) et leur permet de communiquer entre elles. Le problème est que le format de cette adresse n'est pas très intelligible pour un humain. C'est pour cela que les sites et les programmes hébergés sur les serveurs possèdent aussi une adresse symbolique (nom d'hôte).

Par exemple, l'adresse IP 207.142.131.245 est celle de Wikilivres.com (son nom d'hôte correspondant).

Les tables de correspondance : nom d'hôte <=> adresse IP sont tenues par des serveurs appelés *DNS (domain name system)*. C'est à ce serveur DNS que votre routeur se réfère lorsque vous saisissez une adresse symbolique (une URL) dans la barre de navigation de votre navigateur.

Une fois la résolution DNS réalisée, les machines entrent en contact grâce à leurs adresses IP. Ce sont des étapes du **protocole IP**.

## Comment sont transmises les *informations numériques* ?
**Le protocole TCP** <br>
*Internet manipule deux types d’information : les contenus envoyés et les adresses du destinataire et de l’émetteur. Ces deux types d’information sont regroupés dans des paquets de taille fixe, de façon uniforme et indépendante du type de données transportées : texte, images, sons, vidéos, etc.*

Ces données sont rassemblées dans des trames de 1500 octets. La plupart du temps, les données à envoyer sont de taille supérieure à 1500 octets, et il faut plusieurs trames.

{{< img src="../images/segment.png" alt="trame" caption="decoupage de l'information numérique en plusieurs datagrammes" >}}
C'est le *protocole TCP* qui gère ce découpage, et rajoute des informations pour pouvoir renvoyer les paquets perdus en chemin (grâce à un accusé de reception), et remettre les paquets dans le bon ordre. Un code de vérification est également ajouté au paquet, pour vérifier s'il est conforme à l'original, et non *corrompu* en chemin.

# TP: comprendre le protocole TCP en jouant :
{{< img src="../images/packet-attack.png" alt="reseau internet" caption="reseau local et chemin entre routeurs : interstice.info" >}}> *Vous devez perturber le transport des paquets afin d'empêcher la reconstitution du message. Au fur et à mesure que vous passez les niveaux, l'ordinateur trouve de nouvelles stratégies pour y parvenir. Vous pouvez : retarder les paquets, les corrompre, ou les détruire.*

