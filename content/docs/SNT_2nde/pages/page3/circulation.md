---
title: reseaux
---
# Faire communiquer des ordinateurs
Une première idée naïve : tout usage du numérique met des machines en connexion, et qui échangent des données.

<figure>
<img src="../images/reseau1.png" width = 80% alt="communication avec 2 ordinateurs">
<figcaption>communication avec 2 ordinateurs</figcaption>
</figure>

Ce modèle *simpliste* de réseau va devenir irréalisable lorsque celui-ci contiendra de nombreux ordinateurs : 

* grand nombre de connexions (et de liaisons physiques) au départ de chaque ordinateur
* grand nombre de ports utilisés

Il faudra d'autres éléments pour connecter les ordinateurs entre eux.

## Reseau d'ordinateurs
### Qu'est ce qu'un système informatique ?
Un système informatique fonctionne sur le modèle **client-serveur** :

Les parcs informatiques des écoles, universités, et entreprises ont leur activité qui dépend d'informations partagées sur leur réseau. (gestion des salles, ressources, identité des étudiants, des clients, les stocks, la comptabilité, les états financiers,...). En conséquence, une panne informatique ne leur permettrait plus de fonctionner. C'est pour cette raison que les ordinateurs doivent être connectés, que ces informations doivent être *distribuées*; que l'information doit être accessible, même si l'un des ordinateurs est en panne.

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

Un réseau d'ordinateur peut aussi servir à partager du matériel (une imprimante), ou une connexion internet (le routeur). (voir note en bas de page sur la configuration d'un reseau local[^2])



### Le commutateur (switch) et le routeur
Les appareils ne sont pas forcément connectés directement, mais peuvent l'être au moyen d'un *switch*. (concentre les liaisons et possède une table de routage avec les adresses mac des ordinateurs reliés).

Les réseaux sont alors reliés entre eux par un *routeur*

<figure>
<img src="../images/reseau3.png" width = 80% alt="réseau d'ordinateurs">
<figcaption>réseaux d'ordinateurs</figcaption>
</figure>

*Sur cette image, les serveurs ne sont pas représentés, mais n'importe quel ordinateur du réseau peut assurer ce rôle. Certains sont donc des clients, d'autres des serveurs*.

le **routeur** est l'appareil disposant de sa propre adresse IP (voir plus loin) qui fait office de passerelle entre les périphériques sur un réseau local (LAN) et Internet. Dans un réseau de réseaux, c'est aussi une machine qui a plusieurs interfaces (plusieurs cartes réseau), chacune reliée à un réseau. Son rôle va être d'aiguiller les paquets reçus entre les différents réseaux.

## Différences entre reseau local et reseau internet
### Reseau local: Systeme *réparti*[^3]
Unn système réparti permet de partager des ressources, données et logiciels.

Avec un réseau local d'ordinateurs, qui peut constituer un système réparti, l'utilisateur se trouve devant la réalité des machines et leurs caractéristiques diverses, la varieté des équipements, et de leur système d'exploitation; pour executer un programme sur une machine distante, l'usager doit ouvrir une session. La maitenance d'un reseau local demande une bonne connaissance de tous ces matériels. 

Et si l'un des ordinateurs tombe en panne, les autres ordinateurs risquent de s'en apercevoir (base de donnée inaccessible, etc...).

**Définition:** Un système réparti est un système qui vous empêche de travailler quand une machine dont vous n’avez jamais entendu parler tombe en panne.

Des exemples de systèmes répartis: un centre de documentation, bibliothèque, reseau de lycée, contrôle et organisation d'activité en temps réél,...

*Pour approfondir :*  (Wikihow) comment configurer son réseau local ? [^2]

### Reseau internet: un système *distribué*[^4]
Lorsque l'on utilise internet, on ne voit plus cette variété d'équipement.

le système distribué est un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent. Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. 

Un exemple est le **[web](https://fr.wikipedia.org/wiki/World_Wide_Web)** dans lequel toute information apparait comme un document. C'est donc un logiciel élaboré au dessus du réseau, qui nous fait oublier la variété des supports utilisés pour transmettre les données (Serveur, Adsl, Box, wifi, bluetooth...).

## Définitions

> Un **système distribué**: C'est un ensemble d’ordinateurs indépendants qui apparaît à un utilisateur comme un système unique et cohérent

> **Internet** n'est pas un réseau d'ordinateurs. C'est un réseau de réseaux.

> **Le web**, c'est un système distribué opérant au-dessus d'internet.


### Caractéristiques physiques : canal de transmission:
#### 1. reseau local
Deux critères permettent de les caractériser : la technologie de transmission utilisée, et leur taille.

Dans un reseau local, les **supports de transmission** des données peuvent être : 

* cable ethernet
* wifi (ondes EM)
* bluetooth (ondes EM à courte portée)

#### 2. reseau internet
Une fois sorties du reseau local, les transmissions peuvent se faire par:

* fibre optique ([Adsl](https://fr.wikipedia.org/wiki/ADSL))
* ligne de type telephonique ([Adsl](https://fr.wikipedia.org/wiki/ADSL))
* reseau de telephonie mobile (4G, 5G)

*Remarque:* L'utilisation d'internet demande un *abonnement*.

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

*Questions :* 

1. Comment le client s'adresse t-il au *bon* serveur ? 
2. Comment celui-ci renvoie-t-il les données au *bon* client ? 
3. Comment circulent les données entre le client et le serveur?

*Réponses:* 

* pour les questions 1 et 2, c'est avec la définition du *protocole IP* que nous allons y repondre.
* pour la question 3: il s'agit d'une partie qui sera étudiée en <a href="/docs/SNT_2nde/pages/page3/modele_OSI/">spécialité NSI de la classe de 1<sup>ere</sup></a>. Tout ce que nous aurons à retenir, c'est que le navigateur (un logiciel de la couche *Application*), confie cette tâche à d'autres logiciels, qui vont saucissonner les messages entre le client et le serveur, en *trames*, et ajouter des données qui vont permettre leur bonne circulation. C'est le **protocole TCP**.


**le protocole IP:** c'est lui qui permet d'envoyer les paquets d'un ordinateur vers un autre ordinateur. Il gère l'adressage, le routage et l'interconnexion des différents réseaux.

## adresses IP
une adresse IP est un identifiant numérique unique attribué à chaque appareil (appareils mobiles, ordinateurs, routeurs, imprimantes, consoles de jeux, etc.) connecté à un réseau TCP / IP comme Internet. Plus précisemment, **c'est l'identifiant de la *carte reseau*, reelle ou virtuelle.**
Chaque dispositif peut se connecter grâce à cette adresse IP à d’autres périphériques et partager des informations. Il s'agit du Protocole Internet (IP).

* Lorsque l'on veut atteindre un ordinateur serveur depuis notre navigateur, on saisit dans la barre d'adresse:[^5]

```
> http://<adresse IP du serveur>
```

* Lorsque l'on veut tester la connexion vers une machine distante du reseau, on saisit dans la console (lignes de commande):

```
> ping <adresse IP du destinataire>
``` 


On le verra dans la suite :  IPv4 et IPv6 sont deux protocoles réseau de la couche 3 du modèle OSI (Open Systems Interconnection).

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





# Liens

* <a href = "../internet/"> Retour vers internet (Généralités)</a>
* <a href = '../TP_reseau/index.html'>TP simulation d'un reseau</a>
* <a href = '../modele_OSI/'>Le modèle OSI (concerne la Spé NSI)</a>

[^1Cloud]: Le cloud : désigne le stockage et l’accès aux données par l’intermédiaire d’internet plutôt que via le disque dur d’un ordinateur. Mais aussi des services rendus par des logiciels hébergés *côté serveur*.

[^2]: configurer son réseau local (Wikihow) : https://fr.wikihow.com/configurer-un-réseau-local

[^3]: Systèmes répartis: Ce sont des systèmes pour lesquels les ordinateurs mis en reseau ont un couplage fort. Des exemples de systèmes répartis: un centre de documentation, bibliothèque, reseau de lycée, contrôle et organisation d'activité en temps réél,...

[^4]: Système distribué: Les ordinateurs du reseau ont un couplage faible, et communiquent par echange de messages de manière asynchrone. La difficulté de mise en oeuvre d'un algorithme sur un système distribué, est que l'on n'a pas connaissance de l'état global du système (routage sur internet).

[^5]: En réalité, on ne saisit pas `http://adresse IP` mais `http://URL de la page` depuis la barre du navigateur. Celui-ci remplace l'URL de la page par l'adresse IP correspondante, après consultation du serveur DNS.
