---
Title : simulation d'un réseau
---

# TP simulation reseau

Un reseau, c'est quoi? C'est un système constitué de machines reliées ensembles (machines de tout genre: ordinateur, imprimante,...). Elles ont une adresse IP. 

L'adresse IP (**Internet Protocol**) identifie un périphérique à l'intérieur d'un réseau. A l'intérieur de ce réseau elle est unique.

Les outils utilisés en simulation ne fonctionnent pas tous en mode réel, à partir de votre propre ordinateur du lycée, à cause de restrictions nécessaires pour des problèmes de sécurité.

# TP Filius 1 : faire communiquer 2 ordinateurs
Lancer le logiciel **Filius**.

On réalise un premier réseau simple de 2 ordinateurs reliés par une seule ligne.

On s'aidera de la video de présentation{{< a link="https://www.youtube.com/watch?v=nzuRSOwdF5I" caption="Filius 1 (David Roche)" >}}
* Disposer les 2 ordinateurs comme présenté sur la video. 

* Modifier les adresses IP de ces ordinateurs pour avoir, dans l'ordre:
  * 192.168.0.1
  * 192.168.0.2
  
  *Remarque: Souvent, dans un même reseau, les 3 premiers octets de l'adresse IP des machines sont identiques. (ici: 192.168.0). Seul le dernier octet change. Pour l'une des machines, ce sera .1, pour la suivante .2, etc...)* 

* Relier ces ordinateurs

* Installer les logiciels utiles pour faire communiquer ces machines. Pour faire cela: Démarrer la simulation:

{{< img src="../images/logiciels.png" alt="démarrer" >}}

* Puis faire un *double clic* sur chacune des machines, et installer le logiciel *ligne de commandes*.

{{< img src="../images/instal.png" alt="console installation logiciel" caption="console d'installation de logiciels" >}}
  

* tester alors les commandes suivantes depuis la machine M1:

  * `ipconfig` : vérifier la correspondance de l'adresse IP de la machine M1
  * `ping 192.168.0.2` : pour établir et tester une connexion avec la machine M2 
  * `traceroute 192.168.0.2` : pour établir le trajet qui mène jusqu'à M2

  * Tester alors les commandes `ping` et `traceroute` vers une adresse de machine inexistante dans le réseau. Par exemple `192.168.0.3`

> **Qu.1a**: comment voit-on si le chemin vers une machine du reseau existe? Quelle information lit-on dans la console?



* modifier le réseau et mettre 3 ordinateurs reliés à un *switch*  (un connecteur) :  *voir la vidéo pour explications*
  * revenir en mode *conception du reseau* (bouton avec le marteau)
  * commencer par supprimer le cable (clic Droit sur le composant => Supprimer)
  * ajouter l'ordinateur M3. Modifier son IP en 192.168.0.3. Relier ces machines à l'aide d'un switch.
  * tester alors la commande de `traceroute` entre M1 et M3

> **Qu.1b**: Pourquoi a-t-on besoin d'un *switch* dans un réseau à 3 ordinateurs?

# TP Filius 2 : créer un reseau de type lycée

On cherche maintenant à créer un système de 2 sous-réseaux locaux. Ces reseaux auront pour adresses: 198.168.0.0 et 192.168.2.0

*C'est à dire que toutes les machines du réseau 198.168.0.0 auront en commun les 3 octets 198.168.0 et toutes les machines du reseau 198.168.1.0 auront en commun les octets 198.168.1.* 

* Le sous-réseau 192.168.2.0 comportera un switch et 3 ordinateurs M4, M5 et M6. Ces machines auront pour adresses IP:
  * 192.168.2.1
  * 192.168.2.2
  * 192.168.2.3

Votre système devrait ressembler à l'image suivante:


{{< img src="../images/reseauSansrouteur.png" alt="systeme de 2 sous-reseaux sans routeur" caption="systeme de 2 sous-reseaux sans routeur" >}}
* Tester alors la commande `ping` depuis la machine M1 vers celle M6 du 2e sous-reseau. 

> **Qu.2a:**: La machine M6 est-elle accessible depuis M1? Pourquoi?
<!--
Vous constatez que l'accès à M6 n'est pas possible. En effet, votre système doit disposer d'un routeur, une machine capable de faire interface entre 2 reseaux...
-->

* Modifier le système en ajoutant **un routeur**:

  * clic droit sur le Switch2 : faire *supprimer tous les cables*
  * ajouter le routeur
  * paramétrer le routeur: 



  >  clic sur le routeur
  >
  >
  >
  > renseigner les adresses des 2 reseaux sur l'interface du routeur: 
  * 192.168.0.254 du côté du reseau 192.168.0.0 (à gauche)
  * 192.168.2.254 du côté du reseau 192.168.2.0 (à droite)


{{< img src="../images/interface.png" alt="adresses des reseaux" caption="adresses des reseaux" >}}

  > cocher routage automatique:


{{< img src="../images/routage.png" alt="option routage automatique" caption="option routage automatique" >}}

  * Pour chacun des ordinateurs du sous-reseau 1, M1, M2, M3, renseigner l'adresse de l'interface reseau 1 du routeur: mettre **192.168.0.254** dans le champs *passerelle*. Ce sera l'adresse IP de la carte reseau du routeur, du côté du reseau 192.168.0.0 (on met **254** à la place de **0** pour l'adresse routeur).

 

{{< img src="../images/passerelle.png" alt="renseigner l" caption="renseigner l'adresse reseau pour chaque ordinateur" >}}
  * Même travail pour M4, M5, M6: renseigner la passerelle **192.168.2.254**
  * refaire le cablage

> **Qu.2b:** Pourquoi le routeur de votre système informatique possède t-il 2 adresses IP?

> **Qu.2c:** Démarrer le système et tester alors la commande `ping` de M1 vers M6, puis de M6 vers M1. Que constatez-vous? Pourquoi?



*En cas de difficultés: on pourra consulter la{{< a link="https://www.youtube.com/watch?v=xyK6ThdQeR0" caption="video Filius 2 de David Roche" >}}*

# TP Filius 3 : système avec ordinateur serveur
On utilisera pour la suite un système informatique constitué de nombreux sous-reseaux:

* télécharger le fichier [filius_sim_reseau.fls](../images/filius_sim_reseau.fls)
* cliquer sur le fichier pour ouvrir avec *Filius*

## Premier contact avec le système
Lancer la simulation 

1. Prendre connaissance de l'adresse IP de l'ordinateur n°15
2. Depuis l'ordinateur n°1: Lancer le logiciel *Ligne de commande*
3. Faire: `traceroute` suivi de l'adresse IP de la machine 15
4. Repérer alors quels sont les routeurs par lesquels circulent les données entre ces 2 ordinateurs. 

> **Qu.3a.** Est-ce que le nombre de sauts effectués vous semble cohérent?

## Table de routage
Revenir en *mode edition* (marteau) : cliquer sur le routeur A
Dans l’onglet *général* : *décocher* l’option : *routage automatique*

Aller dans l’onglet *table de routage*:

{{< img src="../images/filius_routage_2.png" caption="table de routage du routeur A" >}}

> **Q3b** : cartes reseaux du routeur:
> * Hormis l’interface 127.0.0.1 : Combien d’interface possède le routeur ?
> * Quels sont les 3 réseaux auquel ce routeur est *directement* relié ? Donner leur adresse IP.

On souhaite ajouter l’information suivante à la table de routage : Pour atteindre le réseau 172.12.0.0, il faut passer par la passerelle 192.168.7.2 via l’interface 192.168.7.1

> **Q3c** : nouvelle entrée dans la table:
> * Comment faudrait-il compléter la table de routage ? Renseigner la ligne entière.
> * Quelle est la différence entre l’adresse de passerelle et l’adresse de l’interface ? A quoi se rapportent chacune d’entre elles ?


## Serveur web
En mode *simulation*:

* Ajouter à l'ordinateur n°15 les logiciels: 
  * explorateur de fichiers
  * editeur de fichier
  * webserveur
  * webbrowser

* Sur l'ordinateur n°15:
  * lancer l'*explorateur de fichiers*
  * aller dans le dossier `webserver`: effacer tous les fichiers présents
  * lancer le logiciel *editeur de texte*
  * Saisir une ou plusieurs instructions en `html`, comme par exemple:

{{< img src="../images/serveur3.png" >}}
* machine n°15:
  * cliquer sur le bouton *Fichier*

{{< img src="../images/serveur4.png" >}}
* machine n°15:
  * sauvegarder ce fichier dans le dossier *webserver*. Choisir: Nom de fichier: **index.html**
  * Ouvrir le l'app *webserveur* et démarrer (**Start**)

* test en local:
  * ouvrir le webbrowser. Dans la barre d'adresse, saisir `http://localhost`. 

> **Qu.3d.**: Voyez vous votre page? Expliquer alors ce signifie l'adresse *localhost*.

{{< img src="../images/localhost.png" >}}
  * Aller sur l'application webserver: Les informations affichées devraient montrer l'entête HTTP avec la requête reçue (méthode GET, ...), l'entête de la reponse (HTTP/1.1 200 OK), ainsi que le script HTML téléchargé.

{{< img src="../images/protocoleHTTP.png" >}}

> **Qu.3e.**: S'agit-il d'informations de la couche 4 (Application), 3 (Transport), 2 (reseau), ou 1 (accès au reseau)? voir ici les rappels de cours de [1ere NSI](http:/docs/SNT_2nde/pages/page3/modele_OSI/)

## Communication client-serveur
* Ajouter à l'ordinateur n°1 le logiciel : *Navigateur Web*
* Lancer le *Navigateur web*
* Dans la barre d'adresse, completer `http://` avec l'adresse IP de l'ordinateur n°15 et cliquer sur *Afficher*
* Si la page ne se charge pas la première fois, fermer et rouvrir le serveur du poste 15, ainsi que le Navigateur Web côté client.

## protocole HTTP
* **Côté serveur**
Comme pour la connexion en localhost: Lire les informations de la fenêtre de l'application Webserver: 

> **Qu.3f**: Quelles informations ont changé sur la fenêtre de l'application webserver?

## Protocole TCP
* **Côté client** 
Faire un clic droit sur la *machine M1*. Choisir *show data exchange*

{{< img src="../images/menu_client.png" >}}
Dérouler alors *trames échangées jusqu'à arriver à celles de protocole TCP*

{{< img src="../images/trame_tcp.png" >}}
> **Qu.3g:** Dans la série de *trames TCP*:
>  * L'adresse source et celle destination, sont-elles toujours les mêmes? Ou y-a-t-il une alternance?
>  * Observer le détail de la première trame (ci-dessous): vous avez accès aux informations de la couche liaison (2), reseau (3), ainsi que la couche transport (4): identifier les informations pour chacune de ces couches: les informations pour chacune de ces couches: adresses mac (couche 1), IP et TTL pour la couche 2, SEQ et ACK pour la couche 3... *rappels de [1ere NSI](http:/docs/SNT_2nde/pages/page3/modele_OSI/)*
>  * Ces informations, évoluent-elles d'une trame à l'autre?

{{< img src="../images/detail_tcp_ip.png" caption="detail de la premiere trame" >}}

## Protocole IP
Le document suivant présente la disposition des données dans un *datagramme*. Ce sont les informations transmises au niveau de la couche 2 du modèle OSI. ([explications sur openclassrooms.com](https://openclassrooms.com/fr/courses/2340511-maitrisez-vos-applications-et-reseaux-tcp-ip/2927999-detaillez-len-tete-ip))

{{< img src="../images/OSI5.png" caption="datagramme" >}}

> **Qu.3h:** Quels sont les renseignements fournis sur l'image de la question *3e* (détail de la première trame) que l'on retrouve des les champs du datagramme?

# TP Filius 4: Serveur DNS
Quitter la simulation précédente et ouvrir le nouveau reseau filius. Choisir, selon le temps qu'il vous reste:

* le [fichier avec les tables DNS](../images/TP4_DNS.fls) à compléter
* le fichier [corrigé AVEC les tables DNS](../images/TP4_DNS_c.fls) ainsi que les pages web des serveurs déjà fournies.

Le reseau contient maintenant 2 serveurs (192.168.5.3 et 192.168.4.3) ainsi que 2 serveur DNS.

Le BON serveur DNS a pour adresse 192.168.6.1

* En mode *construction*, vous pouvez vérifier que cette adresse DNS a bien été renseignée pour chacun des ordinateurs.

* En *mode simulation* : vous allez commencer par **démarrer** chacun des serveurs.

Vérifier que la table pour la resolution par le serveur DNS 192.168.6.1 est remplie comme indiqué ci-dessous. (sinon, complétez la)

| IP | adresse symbolique |
| --- | --- |
| 192.168.4.3 | estiennedorves.fr |
| 192.168.5.3 | autreserveur.com |

{{< img src="../images/configDNS.png" caption="configuration DNS" >}}
Puis, à partir de l'une des machines du reseau, comme par exemple M1, vous allez vous connecter à chacun de ces serveurs, à partir de leur adresse symbolique.


{{< img src="../images/adressesymbolique.png" caption="navigation avec adresse symbolique" >}}

> **Qu.4a**: Expliquer quel est le principe du protocole DNS.

Le protocole DNS est vulnérable, et peut faire l'objet d'un *piratage*: voir explications ici: [site cloudfare.com](https://www.cloudflare.com/fr-fr/learning/security/global-dns-hijacking-threat/)

> **Qu.4b**: Quelle est la table du serveur DNS pirate ?

> **Qu.4c**: Comment peut-on utiliser la simulation réalisée sur Filius pour réaliser le scénario d'un piratage de DNS? Quelles sont les différentes étapes à suivre sur le logiciel Filius?

Correction: [corrigé du reseau filius DNS](../images/TP4_DNS_c.fls)

# Compléments théoriques sur les adresses des machines

On pourra consulter la video sur les [adresses IP et masques de sous-reseau]( https://www.youtube.com/watch?v=RnpSaDSSjR4)


## Adresse IP
### IPv4
L'adresse IP(**Internet Protocol**) identifie un périphérique à l'intérieur d'un réseau. A l'intérieur de ce réseau elle est unique.

Une adresse (IPv4) est constituée de 4 nombres binaire de 8 bits chacuns (32 bits), comme par exemple:


$1100 0000.1010 1000. 0000 0000. 0000 0001$


Pour rendre la lecture plus facile, les séries de 8 bits seront traduites en leur valeur décimale correspondante, comprise entre 0 et 255 (voir le cours *codage des nombres*).


L'**adresse binaire** vue plus haut sera alors traduite en :


$192.168.0.1$

L'adresse possède 2 parties:


* une partie identifie la machine

* une autre partie identifie le reseau


### Masque de sous-reseau
**Masque de sous-reseau**: c'est une serie de valeurs avec des 255 ou 0, ou autre sur le(s) dernier(s) octet(s).

La valeur correspondante binaire début donc par une série de 1, marquant les positions relatives à l'adresse reseau dans l'adresse IP.

Par exemple: L'adresse machine suivante est constituée d'une première partie *reseau*, les 24 premiers bits, puis de l'adressage machine dans le reseau (8 derniers bits):

$1100 0000.1010 1000. 0000 0000. 0000 0001 / 24$

Le masque de sous-reseau est alors:

$1111 1111.1111 1111. 1111 1111. 0000 0000$

Que l'on peut aussi écrire:

$255.255.255.0$

### Machines appartenant à un même reseau
**Definition: Deux machines sont sur le même réseau si et seulement si, la partie réseau de leur adresse IP est identique.**

Les derniers caractères `/24` correspondent au **masque de sous-reseau**. Ils signifient que le reseau contenant la machine a une adresse codée sur les 24 premiers bits (192.168.0). Et que les 8 derniers bits constituent l'adresse de la machine dans ce reseau (il s'agit donc du **.1** final). 

### IPv6
Pour la norme IPv6, ce nombre est sur 128 bits, soit 16 octets.

*Exemple d'adresse IPv6 exprimée en hexadécimal (32 caractères):* `2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b` 


## classes d'adresse IP

* classe A : adresses IP comprises entre 0.0.0.0 et 127.255.255.255 masque 255.0.0.0 : on ne peut avoir qu'une toute petite partie sous-reseau mais beaucoup d'adresses machines. Un petit reseau de beaucoup de machines.

* classe B : 128.0.0.0 à 191.255.255.255 masque sous-reseau de 2 octets : on met autant de machines que de sous reseaux.

* classe C : masque sous-reseau de 3 octets: beaucoup de sous-reseaux et peu de machines.

Sur un reseau, deux adresses sont deja reservés: l'adresse de broadcast (bit adresse mis à 255), ainsi que l'adresse de reseau (bit d'adresse mis à zero). La plage adressable se situe entre ces 2 valeurs.

## Adresse mac

Une adresse MAC (Media Access Control), parfois nommée adresse physique,
est un identifiant physique stocké dans une carte réseau ou une 
interface réseau similaire. Elle est unique au monde

Une adresse MAC est codée en hexadécimal, sur 6 octets (cf cours sur l'hexadécimal)

00-1E-33-1D-6A-79 est une adresse MAC


=> Ouvrir l'invite de commande windows et entrer la commande `ipconfig /all`. identifier l'adresse MAC de votre ordinateur.

# Suite
* Lien vers le [TP2: routage avec Filius](../TP_reseau_term)
* La suite du cours de Term NSI: [table de routage, protocole de routage](/docs/NSI/architecture/page3/)

# Liens

* Vidéo de prise en main du logiciel{{< a link="https://www.youtube.com/watch?v=nzuRSOwdF5I" caption="Filius 1 (David Roche)" >}}
* video [Ping et traceroute utility](https://www.youtube.com/watch?v=vJV-GBZ6PeM)
* detailler une trame: [openclassroom](https://openclassrooms.com/fr/courses/2340511-maitrisez-vos-applications-et-reseaux-tcp-ip/2927999-detaillez-len-tete-ip)
* detail trame [pixies informatique au lycée](https://pixees.fr/informatiquelycee/n_site/isn_modele_tcpip.html)







