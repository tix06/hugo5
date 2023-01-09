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

{{< img src="../images/instal.png" alt="console d" caption="console d'installation de logiciels" >}}
  

* tester alors les commandes suivantes depuis la machine M1:

  * `ipconfig` : vérifier la correspondance de l'adresse IP de la machine M1
  * `ping 192.168.0.2` : pour établir une connexion avec la machine M2 
  * `traceroute 192.168.0.2` : pour établir le trajet qui mène jusqu'à M2



* modifier le réseau et mettre 3 ordinateurs reliés à un *switch*  (un connecteur) :  *voir la vidéo pour explications*
  * revenir en mode *conception du reseau* (bouton avec le marteau)
  * commencer par supprimer le cable (clic Droit sur le composant => Supprimer)
  * ajouter l'ordinateur M3. Modifier son IP en 192.168.0.3. Relier ces machines à l'aide d'un switch.
  * tester alors la commande de `traceroute` entre M1 et M3


# TP Filius 2 : créer un reseau de type lycée

On cherche maintenant à créer un système de 2 sous-réseaux locaux. Ces reseaux auront pour adresses: 198.168.0.0 et 192.168.2.0

*C'est à dire que toutes les machines du réseau 198.168.0.0 auront en commun les 3 octets 198.168.0 et toutes les machines du reseau 198.168.1.0 auront en commun les octets 198.168.1.* 

* Le sous-réseau 192.168.2.0 comportera un switch et 3 ordinateurs M4, M5 et M6. Ces machines auront pour adresses IP:
  * 192.168.2.1
  * 192.168.2.2
  * 192.168.2.3

Votre système devrait ressembler à l'image suivante:


{{< img src="../images/reseauSansrouteur.png" alt="systeme de 2 sous-reseaux sans routeur" caption="systeme de 2 sous-reseaux sans routeur" >}}
* Tester alors la commande `ping` depuis la machine M1 vers celle M6 du 2e sous-reseau. Vous constatez que l'accès à M6 n'est pas possible. En effet, votre système doit disposer d'un routeur, une machine capable de faire interface entre 2 reseaux...

* Modifier le système en ajoutant un routeur:

  * clic droit sur le Switch2 : faire *supprimer tous les cables*
  * ajouter le routeur
  * paramétrer le routeur: 



  >  clic sur le routeur
  >
  >
  >
  > renseigner les adresses des 2 reseaux sur l'interface du routeur: 
  * 192.168.0.254 du côté du reseau 192.168.0.0 (à gauche)
  * 192.168.2.354 du côté du reseau 192.168.2.0 (à droite)


{{< img src="../images/interface.png" alt="adresses des reseaux" caption="adresses des reseaux" >}}

  > cocher routage automatique:


{{< img src="../images/routage.png" alt="option routage automatique" caption="option routage automatique" >}}

  * Pour chacun des ordinateurs du sous-reseau 1, M1, M2, M3, renseigner l'adresse de l'interface reseau 1 du routeur: mettre **192.168.0.254** dans le champs *passerelle*. Ce sera l'adresse IP de la carte reseau du routeur, du côté du reseau 192.168.0.0 (on met **254** à la place de **0** pour l'adresse routeur).

 

{{< img src="../images/passerelle.png" alt="renseigner l" caption="renseigner l'adresse reseau pour chaque ordinateur" >}}
  * Même travail pour M4, M5, M6: renseigner la passerelle **192.168.2.254**
  * refaire le cablage

* Démarrer le système et tester alors la commande `ping` à nouveau. Que constatez-vous?



*En cas de difficultés: on pourra consulter la{{< a link="https://www.youtube.com/watch?v=xyK6ThdQeR0" caption="video Filius 2 de David Roche" >}}

# TP Filius 3 : système avec ordinateur serveur
On utilisera pour la suite un système informatique constitué de nombreux sous-reseaux:

* télécharger le fichier [filius_sim_reseau.fls](../images/filius_sim_reseau.fls)
* cliquer sur le fichier pour ouvrir avec *Filius*

## Premier contact avec le système
Lancer la simulation 

1. Prendre connaissance de l'adresse IP de l'ordinateur n°15
2. Depuis l'ordinateur n°1: Lancer le logiciel *Ligne de commande*
3. Faire: `traceroute` suivi de l'adresse IP de la machine 15
4. Repérer alors quels sont les routeurs par lesquels circulent les données entre ces 2 ordinateurs. Est-ce que le nombre de sauts effectués vous semble cohérent?


Toujours en mode *simulation*:

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
  * ouvrir le webbrowser. Dans la barre d'adresse, saisir `http://localhost`. Voyez vous votre page?

{{< img src="../images/localhost.png" >}}
  * Aller sur l'application webserver: Les informations affichées devraient montrer l'entête HTTP avec la requête reçue (méthode GET, ...), l'entête de la reponse (HTTP/1.1 200 OK), ainsi que le script HTML téléchargé.

{{< img src="../images/protocoleHTTP.png" >}}
## Communication client-serveur
* Ajouter à l'ordinateur n°1 le logiciel : *Navigateur Web*
* Lancer le *Navigateur web*
* Dans la barre d'adresse, completer `http://` avec l'adresse IP de l'ordinateur n°15 et cliquer sur *Afficher*
* Si la page ne se charge pas la première fois, fermer et rouvrir le serveur du poste 15, ainsi que le Navigateur Web côté client.

## protocole HTTP
* **Côté serveur**
Comme pour la connexion en localhost: Lire les informations de la fenêtre de l'application Webserver: *Quelles informations ont changé?*

## Protocole TCP
* **Côté client** 
Faire un clic droit sur la *machine M1*. Choisir *show data exchange*

{{< img src="../images/menu_client.png" >}}
Dérouler alors *trames échangées jusqu'à arriver à celles de protocole TCP*

{{< img src="../images/trame_tcp.png" >}}
* Dans la série de *trames TCP*:
  * L'adresse source et celle destination, sont-elles toujours les mêmes? Ou y-a-t-il un alternance?
  * Observer le détail de la première trame: vous avez accès aux informations de la couche liaison (2), reseau (3), ainsi que la couche transport (4): identifier les informations pour chacune de ces couches: IP et TTL pour la couche 3, SEQ et ACK pour la couche 4...
  * Ces informations, évoluent-elles d'une trame à l'autre?

{{< img src="../images/detail_tcp_ip.png" >}}
# TP Filius 4: Serveur DNS
Quitter la simulation précédente et ouvrir ce [nouveau](../images/TP4_DNS.fls) fichier.

Le reseau contient maintenant 2 serveurs (192.168.5.3 et 192.168.4.3) et un serveur DNS.

En mode *construction*, vous pouvez vérifier que l'adresse DNS a bien été renseignée pour chacun des ordinateurs.

En mode *simulation*, vous allez commencer par **démarrer** chacun des serveurs.

Vous allez remplir la table permettant la resolution symbolique du serveur DNS comme indiqué ci-dessous.

| IP | adresse symbolique |
| --- | --- |
| 192.168.4.3 | estiennedorves.fr |
| 192.168.5.3 | autreserveur.com |

{{< img src="../images/configDNS.png" caption="configuration DNS" >}}
Puis, à partir de l'une des machines du reseau, comme par exemple M1, vous allez vous connecter à chacun de ces serveurs, à partir de leur adresse symbolique.


{{< img src="../images/adressesymbolique.png" caption="navigation avec adresse symbolique" >}}

# Compléments théoriques sur les adresses des machines

On pourra consulter la video sur les [adresses IP et masques de sous-reseau]( https://www.youtube.com/watch?v=RnpSaDSSjR4)


## Adresse IP

L'adresse IP(**Internet Protocol**) identifie un périphérique à l'intérieur d'un réseau. A l'intérieur de ce réseau elle est unique.

Une adresse (IPv4) est constituée de 4 nombres binaire de 8 bits chacuns (32 bits), comme par exemple:


$1100 0000.1010 1000. 0000 0000. 0000 0001$


Pour rendre la lecture plus facile, les séries de 8 bits seront traduites en leur valeur décimale correspondante, comprise entre 0 et 255 (voir le cours *codage des nombres*).


L'**adresse binaire** vue plus haut sera alors traduite en :


$192.168.0.1$

L'adresse possède 2 parties:


* une partie identifie la machine

* une autre partie identifie le reseau



**Masque de sous-reseau**: c'est une serie de valeurs avec des 255 ou 0, ou autre sur le(s) dernier(s) octet(s).

La valeur correspondante binaire début donc par une série de 1, marquant les positions relatives à l'adresse reseau dans l'adresse IP.

Par exemple: L'adresse machine suivante est constituée d'une première partie *reseau*, les 24 premiers bits, puis de l'adressage machine dans le reseau (8 derniers bits):

$1100 0000.1010 1000. 0000 0000. 0000 0001 / 24$

Le masque de sous-reseau est alors:

$1111 1111.1111 1111. 1111 1111. 0000 0000$

Que l'on peut aussi écrire:

$255.255.255.0$

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


# Liens

* Vidéo de prise en main du logiciel{{< a link="https://www.youtube.com/watch?v=nzuRSOwdF5I" caption="Filius 1 (David Roche)" >}}
* video [Ping et traceroute utility](https://www.youtube.com/watch?v=vJV-GBZ6PeM)







