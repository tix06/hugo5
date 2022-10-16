---
Title: modele client serveur
---

Le web est un de ces services qui consiste à pouvoir naviguer sur des pages web reliées entre elles par des liens hypertextes. 

# Adresse d'une page web: URL
## Uniform Ressource Locator: où est la page?
Une **URL** (Uniform Resource Locator) est l'adresse d'une page web. 
Elle est composée de 3 parties:

* `http://` ou `https://` qui correspond au protocole de communication client-serveur développé pour le web.
* Un nom de domaine, souvent une marque, une entreprise, une association, ...
* un chemin qui pointe vers une ressource ou page précise.
* la ressource

Par exemple, la page `html` que vous consultez, fait partie du domaine *allophysique.com* et se trouve à l'emplacement `/docs/snt_2nde/pages/page4/web/index.html`:

[https://allophysique.com/docs/snt_2nde/pages/page4/web/index.html](/docs/snt_2nde/pages/page4/web/index.html)


<figure>
	<img src="../images/url.png">
</figure>


# Le modèle client-serveur

*Activité d’introduction:*  

<figure><a href="https://episode1.donottrack-doc.com/fr/">
	<img src="../images/donottrack1.png">
	<figure>Do not track episode 1 - ARTE</figure></a>
</figure>

 
*Do Not Track explore les différentes manières dont le Web moderne enregistre et traque nos activités, nos publications et nos identités.*


*Debut de la vídeo: je sais que où vous habitez et que vous avez une belle journée je sais que vous utilisez un PC.*.. Comment fait le site pour savoir ceci ? Quelles informations ai-je envoyé (sans le vouloir) pour charger la page?

## Client -> Serveur
Un système informatique fonctionne sur le modèle **client-serveur** : L'ordinateur client a besoin d'établir des connexions avec un ordinateur serveur pour une grande partie des services dont il a besoin (consulter une base de données, communiquer, ouvrir des pages internet, charger des vidéos...).

Une fois la connexion établie, l'ordinateur serveur lui répond en lui renvoyant les données necessaires.

<figure>
  <img src="../images/client_serveur.png" alt="modele client serveur">
  <figcaption>modele client serveur</figcaption>
</figure>

<figure>
  <a href="https://fr.wikipedia.org/wiki/Client-serveur">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Server-based-network.svg/440px-Server-based-network.svg.png">
  <figcaption>mode client-serveur. Un serveur peut repondre aux requetes de multiples clients<br>
  definition client-serveur: wikipedia</figcaption></a>
</figure>

Le serveur lui repond en renvoyant un (des) fichier(s) qui constituent des fragments de page (en HTML, js, css, png, ...). Ces fragments complètent la page, son contenu, son style, ses éléments interactifs, ou apportent des ressources (images, videos...). C'est le navigateur qui interprète ces fichiers (ces *fragments de page*) et assure l'affichage de la page.

> Mais alors ici, le serveur connaissait des informations sur le client. Pourquoi?

## Le protocole HTTP
### Usage du navigateur
Le navigateur est le logiciel qui permet d'utiliser le Web. Il se connecte au serveur à l'*adresse définie par l'URL*.

Il *envoie une requete* pour demander la ressource à l'aide du protocole HTTP.

HTTP : HyperText Transfert Protocol, permet au navigateur de demander une page sur le reseau et au serveur de la transmettre.

Dans le protocole HTTP, une **méthode est une commande spécifiant un type de requête, c'est-à-dire qu'elle demande au serveur d'effectuer une action**. En général l'action concerne une ressource identifiée par l'URL qui suit le nom de la méthode.
(definitions issues de https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

Le navigateur utilise souvent la *méthode GET* lors de l'envoi d'une requete:


<figure>
  <img src="../images/requete.png" alt="outil reseau du navigateur">
  <figcaption>observation de la requete GET à l'aide de l'outil reseau du navigateur</figcaption>
</figure>


### Contenu: données et metadonnées
Dans le fichier de reponse, il y a 2 parties :

•	Une partie concerne **l’en-tête** : des *métadonnées* sur le document
•	L’autre partie est constituée des **données à afficher** (balises HTML)


Du côté client, il y a aussi des *métadonnées*. C’est ici que l’on retrouve :
-	Information de la methode GET
-	url demandée (non de domaine de serveur
-	Accept (text/html, fr…)
-	Site depuis lequel la demande est effectuée

MAIS AUSSI, des informations partagées (et qui ne devraient pas l’être) qui devraient faciliter la session avec le site demandé : les cookies.

 Champ d’en-tête | Signification | Exemple |
|--- |--- |--- |
| Accept  | Les types de contenu que le client peut traiter ; si le champ est vide, il s’agit de tous les types de contenu. | Accept: text/html, application/xml |
|Accept-Charset | Quels jeux de caractères le client peut afficher. | Accept-Charset: utf-8 |
| Cookie | Cookie stocké pour ce serveur | Cookie: $Version=1; Content=23 |
| Content-Length |  Longueur en octets   | Content-Length: 212 |
| Content-Type  | Type MIME: text/plain pour les fichiers texte, application/.. pour le reste | Content-Type: application/x_222-form-urlencoded |
| Date  | Date et heure de la demande | Date: Mon, 9 March 2020 09:02:22 GMT |
| Host  | Nom de domaine du serveur | Host: exemple.fr |
| Referrer |  URL de la ressource à partir de laquelle la demande est faite (c’est-à-dire à partir de laquelle le lien a été créé)  | Referrer: https://exemple.fr/index.html |
| User-Agent  | navigateur du client |  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 |


# reseau P2P
C'est un mode d'organisation sur internet où toutes les machines se comportent alternativement comme clients ou serveurs.

<figure>
  <a href="https://fr.wikipedia.org/wiki/Pair-à-pair">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/440px-P2P-network.svg.png">
  <figcaption>mode P2P. Chaque machine joue alternativement le rôle de client et de serveur</figcaption></a>
</figure>

Ce mode a pu être utilisé pour partager illégalement des fichiers en infraction avec le droit d'auteur. La repartition des documents sur de multiples machines a compliqué les poursuites judiciaires.

Ce mode P2P connait un regain d'interet avec les *Blockchains* qui consistent à repliquer sur de nombreuses machines les preuves chifrées et vérifiables d'un ensembles d'informations enregistrées.
(monnaies virtuelles)

# sécurité et confidentialité
Ce que le moteur de recherche appelle des données échangées (entre services de la même entreprise), sont vos données personnelles.
Votre identité, vos contacts, la durée desappels, date, titres de vidéos, musiques consultées, historique des coord GPS, adresse IP, données des capteurs de l’appareil, requete lors des recherches, historique de navigation… 

Pour limiter ses traces sur le Web, et reduire cette collecte de données qui vous concernent, vous pouvez:

* dans le navigateur Mozilla : effacer les traces : bouton bibliothèqe, Historique, marques pages et plus encore > **Historique** > Effacer l'historique recent (cocher au choix : historique, historique des formulaires et des recherches, cookies et câche) ET **Données** > préférence des sites 
* paramétrer le navigateur : menu > Options > Vie privée et sécurité (Il y a plusieurs niveaux de sécurité). Dans Identifiants et mots de passe > afficher les mots de passe. Dans cookies et données > recherche la présence d'un cookie de connexion au site du lycée...
* et Vie privée : blocage de contenus : toujours, afin de bloquer les contenus tiers qui peuvent ralentir la navigation ou distraire.




# Travaux pratiques

<ul>
<li><a href="../web1">SNT le langage HTML</a></li>
<li><a href="../web2">SNT TP 1: HTML et CSS</a></li>
<li><a href=../web5">Tuto sur CSS</a></li>
<li><a href="../web3">SNT TP 2: Javascript</a></li>
</ul>
    




# Liens
* Où sont stockés les cookies?:
[maleka.com ou sont stockées les cookies sur win10?](https://www.malekal.com/ou-sont-stockes-les-cookies-dans-windows-10-11-pour-tous-les-navigateurs-internet/)


* http cookie dans l’en-tête :
	* [https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies](https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies)
	* [https://developer.mozilla.org/fr/docs/Web/HTTP/Headers](https://developer.mozilla.org/fr/docs/Web/HTTP/Headers)

* Accepter ou refuser les cookies tiers. La liste :-o)
<a href="https://www.tf1.fr/tmc/quotidien-avec-yann-barthes/videos/zoom-a-quel-point-les-gafam-sont-ils-dangereux-pour-nos-democraties-62368949.html" target=blank>tf1.fr - video à la demande- zoom-a-quel-point-les-gafam-sont-ils-dangereux-pour-nos-democraties</a>

