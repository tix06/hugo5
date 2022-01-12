---
title : le web
---

# le Web
*Le world wide web, ou toile en français, est un service construit sur l'infrastructure du reseau internet pour mettre à la disposition des utilisateurs des documents repartis au niveau mondial.*

Lors de sa navigation, l'usager d'internet va suivre des liens qui connectent les pages entre-elles (ce que l'on appelle *surfer* sur le Web).

## Historique du 3w
Le "*World Wide Web*", plus communément appelé "Web" a été développé au CERN (Conseil Européen pour la Recherche Nucléaire) par le Britannique Sir Timothy John Berners-Lee et le Belge Robert Cailliau au début des années 90. À cette époque les principaux centres de recherche mondiaux étaient déjà connectés les uns aux autres, mais pour faciliter les échanges d'information Tim Berners-Lee met au point le **système hypertexte**. Le système hypertexte permet, à partir d'un document, de consulter d'autres documents en **cliquant** sur des mots clés. Ces mots "cliquables" sont appelés hyperliens et sont souvent soulignés et en bleu. Ces hyperliens sont plutôt connus aujourd'hui sous le simple terme de "liens".

Cette première page est d’ailleurs encore en consultation sur le lien suivant : [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)




## Normalisation de la présentation de l’information (w3c)
Le bon fonctionnement du www nécessite le respect de normes et de formats de fichiers et de protocoles entre serveurs et clients.

Le World Wide Web Consortium, abrégé par le sigle W3C, est un organisme de standardisation à but non lucratif, fondé en octobre 1994 chargé de promouvoir la compatibilité des technologies du World Wide Web telles que HTML, CSS, JS, ...

<figure>
  <a href="https://fr.wikipedia.org/wiki/World_Wide_Web_Consortium" target="blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C®_Icon.svg/440px-W3C®_Icon.svg.png" alt="W3C®_Icon">
  <figcaption>W3C: un organisme qui définit les standarts du web</figcaption>
</a>
</figure>

> Le web fonctionne avec : le **[protocole HTTP](#le-protocole-http)** (HyperText Transfert Protocol), les **[URL](#adresse-d-une-page-web-url)** (Uniform Resource Locator) et le langage de description **[HTML](/docs/SNT_2nde/pages/page4/web1/)** (HyperText Markup Language).

La *lecture et l’usage des hyperliens* d’une page html nécessite d’utiliser un **[navigateur](/docs/SNT_2nde/pages/page4/web/#l-usage-d-un-navigateur)**.

# Adresse d'une page web: URL
## Uniform Ressource Locator: où est la page?
Une **URL** (Uniform Resource Locator) est l'adresse d'une page web. 
Elle est composée de 3 parties:

* `http://` ou `https://` qui correspond au protocole de communication client-serveur développé pour le web.
* Un nom de domaine, souvent une marque, une entreprise, une association, ...
* un chemin qui pointe vers une ressource ou page précise.

Par exemple, la page `html` que vous consultez, fait partie du domaine *allophysique.com* et se trouve à l'emplacement `/docs/snt_2nde/pages/page4/web/index.html`:

[https://allophysique.com/docs/snt_2nde/pages/page4/web/index.html](/docs/snt_2nde/pages/page4/web/index.html)

## Naviguer entre les pages: hyperliens
On peut entrer dans une page directement en saisissant son URL.

> On peut alors se demander: Comment est tissée la *toile du web*? C'est à dire, comment sont reliées ces pages les unes aux autres...

> Tout d'abord, il y a les liens *hypertext*. Ces liens permettent la navigation de page en page, et c'est comme cela que l'on peut utiliser le Web. 

> Ensuite, il y a l'entrée par un moteur de recherche.

## Trouver une page: moteurs de recherche
Avant l'usage généralisé des moteurs de recherche, les sites étaient référencés par dans des **annuaires web**: répertoire web, annuaire Internet ou répertoire Internet est un site web proposant une liste classée de sites Web.

Le classement se fait typiquement dans une arborescence de catégories, censée couvrir tout ou partie des centres d'intérêt des visiteurs. 

Aujourd'hui, ils ont perdu de l'interêt face à la facilité d'utilisation des moteurs de recherche, et ne sont plus utilisés que dans des cas particuliers [voir article](https://fr.wikipedia.org/wiki/Annuaire_web)

<figure>
  <img src="../images/yahoo-annuaire.png">
  <figcaption>dernière page de l'annuaire Yahoo avant sa fermeture en 2014</figcaption>
</figure>


> Un moteur de recherche: Logiciel qui dispose d'une indexation des pages internet. L'indexation est un traitement qui consiste à analyser des pages pour y detecter des mots clés utilisés fréquemment par les internautes.

L'utilisateur va alors cliquer sur le lien de son choix parmi les propositions du moteur de recherche. Et se retrouver sur la page proposée, sans avoir à connaitre et mémoriser son URL.


Les moteurs de recherche – Mediaprovence (juin 2019)
https://www.youtube.com/watch?v=Y8l4hKNQOEY

<figure>
  <a href="https://www.youtube.com/watch?v=pMywV9ZLS4M" >
  <img src="../images/moteur_R_fonc.png" alt="moteurs de recherche : fonctionement">
  <figcaption>video: Fonctionnement du moteur de recherche – FenetresurWordpress</figcaption>
</a>
</figure>

Un moteur de recherche, c’est une entreprise, qui doit faire des profits.
Ses revenus viennent des annonceurs (sites commerçants) qui sont mis en avant par des  publicités ciblées. C’est un mode de référencement payant, par opposition à celui naturel, réalisé à partir des contenus redactionnels (SEO).
Les moteurs de recherche mettent en avant une expérience plus personnalisée de l’internaute. Et ils ont besoin pour cela de récupérer vos données.

<figure>
  <a href="https://www.youtube.com/watch?v=Y8l4hKNQOEY" >
  <img src="../images/moteur_R_financ.png" alt="moteurs de recherche : fonctionement">
  <figcaption>video: Les moteurs de recherche – Mediaprovence (juin 2019)</figcaption>
</a>
</figure>

<figure>
  <a href="https://www.1ere-position.fr/blog/10-meilleurs-moteurs-de-recherche-alternatifs-google/" target="blank">
  <img src="https://www.1ere-position.fr/wp-content/uploads/2017/10/moteurs-recherche-alternatifs-google-seo-1ere-position.jpg" alt="moteurs de recherche">
  <figcaption>Article: des moteurs de recherche alternatifs à Google</figcaption>
</a>
</figure>


# Le protocole HTTP


## Le modèle client-serveur
Un système informatique fonctionne sur le modèle **client-serveur** : L'ordinateur client a besoin d'établir des connexions avec un ordinateur serveur pour une grande partie des services dont il a besoin (consulter une base de données, communiquer, ouvrir des pages internet, charger des vidéos...).

Une fois la connexion établie, l'ordinateur serveur lui répond en lui renvoyant les données necessaires.

<figure>
  <img src="../images/client_serveur.png" alt="modele client serveur">
  <figcaption>modele client serveur</figcaption>
</figure>

*Rq:* il existe d'autres modèles que celui client-serveur, comme par exemple, le P2P.

## HTTP
HTTP : HyperText Transfert Protocol, permet au navigateur de demander une page sur le reseau et au serveur de la transmettre.

Dans le protocole HTTP, une **méthode est une commande spécifiant un type de requête, c'est-à-dire qu'elle demande au serveur d'effectuer une action**. En général l'action concerne une ressource identifiée par l'URL qui suit le nom de la méthode.
(definitions issues de https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

<figure>
  <a href="https://fr.wikipedia.org/wiki/Client-serveur">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Server-based-network.svg/440px-Server-based-network.svg.png">
  <figcaption>mode client-serveur. Un serveur peut repondre aux requetes de multiples clients</figcaption></a>
</figure>


## L'usage d'un navigateur
Le navigateur est le logiciel qui permet d'utiliser le Web.

Il envoie une requete pour demander la ressource à l'aide du protocole HTTP.

Le navigateur utilise souvent les méthodes GET et POST lors de l'envoi d'une requete:

* GET : C'est la méthode la plus courante pour demander une ressource.
* POST : Cette méthode est utilisée pour transmettre des données en vue d'un traitement à une ressource (le plus souvent depuis un formulaire HTML). Le résultat peut être la création de nouvelles ressources ou la modification de ressources existantes.

<figure>
  <img src="../images/requete.png" alt="outil reseau du navigateur">
  <figcaption>observation de la requete GET à l'aide de l'outil reseau du navigateur</figcaption>
</figure>

Le serveur lui repond en renvoyant un (des) fichier(s) HTML. Et eventuellement des fichiers associés, qui peuvent être dans d'autres formats, et complètent la page, son contenu, son style, ses éléments interactifs, ou apportent des ressources (images, videos...). C'est le navigateur qui interprète ces fichiers et assure l'affichage de la page.

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

# Impacts sur les pratiques humaines

* Le web permet à chacun de publier des informations sans contrôle préalable par une autorité. Cette revolution democratique amène la présence de fausses nouvelles (fake news) et le besoin de verification. Libération (désintox) et Le Monde (le blog des decodeurs) possèdent des espaces dédiés à la pratique, dédiant des journalistes à cette seule tâche.
* Wikipedia est un exemple d'encyclopedie libre et participative, où des centaines d'internautes publient et relisent et effectuent des milliers de changement par heure.
* Le web et le droit d'auteur, licences creatice commun
* Les traces laissées de manière voulue ou non lors de sa navigation

<figure>
  <div>
  <img src="../images/bigdata.png" alt="bigdataiswatchingyou">
</div>
</figure>

D’où l’importance d’un cadre juridique permettant de protéger les usagers, préoccupation à laquelle répond le règlement général sur la protection des données (RGPD).


# Travaux pratiques

<ul>
<li><a href="../web1">SNT le langage HTML</a></li>
<li><a href="../web2">SNT TP 1: HTML et CSS</a></li>
<li><a href="../web3">SNT TP 2: Javascript</a></li>
</ul>
    


<!--
## Compétences
* [Co] la difference entre internet et le web : le web correspond à la solution pour naviguer sur internet, et internet, c'est la contraction de Interconnected et Network (le maillage physique)
* [decrire langages] ouvrir une page html simple avec le navigateur, voir le code source; rechercher les correspondances entre les éléments de la page et le code source (texte, image, lien)
* [decrire données] decrire la structure d'une URL, ses symboles (séparateurs), ses paramètres : l'URL, unique, comporte le nom du protocole, de la machine qui heberge la ressource, le nom de la ressource et eventuellement des paramètres optionnels.
* [outils] traces laissées dans le navigateur lors de la navigation et paramétrage : historique, cookies
* [algo données et Co des systèmes] pagerank : repose sur le principe de calculer la popularité d'une page à partir de la popularité des pages qui la citent. C'est une tâche automatique dont on peut avoir un aperçu avec une activité... On peut partir d'un graphe (orienté), avec pour noeuds, les pages, et pour arêtes (ou arcs), les liens. Réaliser alors un parcours aléatoire de ces pages et calculer le nombre de visites pour chacune (avec un grand nombre de visites, c'est long et il faut utiliser un programme)
-->

# Liens
[article binaire blog le Monde : Le www a 30 ans](http://binaire.blog.lemonde.fr/2019/04/26/le-world-wide-web-il-y-a-trente-ans/)