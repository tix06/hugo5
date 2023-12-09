---
Title: HTTP vs HTTPS
---

# HTTP
## But de la séance
Ce TP a pour but d'illustrer ce qui arrive quand un utilisateur soumet un formulaire: où les données vont-elles et comment les gère-t-on une fois à destination? Nous examinerons aussi quelques problèmes de sécurité associés à l'envoi des données d'un formulaire.

{{< img src="../images/client-server.png" link="https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data" caption="img de MDN Sending_and_retrieving_form_data" >}}

## Le formulaire en ligne
On utilisera le formulaire à la page [http://resaonline.la-bo.xyz](http://resaonline.la-bo.xyz). 

{{< img src="../images/form.png" link="http://resaonline.la-bo.xyz" caption="formulaire de connexion" >}}

Le bandeau de navigation permet de selectionner la méthode d'envoi des données:

* méthode GET
* méthode POST
* authentification par cookie

Vous allez utiliser chacune des 3 méthodes. La procédure sera la même dans les 3 cas:

* Ouvrir la fenêtre d'*outils de développement* du navigateur. Choisir l'outil *réseau*
* Remplir et envoyer le formulaire
* Une fois parvenu à la page "espace personnel", vous allez explorer les éléments de la requête.

## Méthode GET
1. Dans la barre d'URL du navigateur. Recopier l'URL. Repérer les 3 sous parties: (se documenter: [openclassroom](https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/912799-ecoutez-la-requete-de-vos-utilisateurs-grace-aux-url), ou bien [wikipedia](https://en.wikipedia.org/wiki/Query_string))
	* le nom de domaine
	* le chemin
	* les paramètres query
2. la connexion vers le site, se fait-elle selon le protocole *http* ou bien *https*? Comment le voit-on?
3. Dans la fenêtre *réseau* du *dev tools*: Repérer les informations du *header* de cette requête: 
	* l'URL 
	* requête: la méthode, le chemin sur le serveur, et la version HTTP: GET /result HTTP/1.1
4. Repérer les informations de la reponse à cette requête
	* méthode et code de statut
	* informations sur le contenu du document chargé
	* les *paramètres query* (Query String Parameters). Faire une copie d'écran et l'insérer dans votre document réponse.

5. Recharger la page: le navigateur propose t-il de soumettre à nouveau le contenu du formulaire? Les informations du formulaire sont-elles toujours présentes dans la carte d'identité?
6. Dans l'historique du navigateur: le lien consulté contient-il les Query String Parameters?
7. Ecrire directement, dans la barre d'adresse une requête vers ce serveur en choisissant vous-même vos Query Parameters. Le serveur repond-il à votre requête?

## Méthode POST
Répondre aux même questions *(qu 1 à 6 de la méthode GET)*.

## Méthode avec authentification par cookie
1. Dans les outils réseau du navigateur, chercher l'onglet *cookie*, et lire le contenu. Faire une copie d'écran dans votre document réponse. Comment les informations du formulaire sont-elles écrites? Sous une forme structurée?
2. Recharger la page: le navigateur propose t-il de soumettre à nouveau le contenu du formulaire? Les informations du formulaire sont-elles toujours présentes dans la carte d'identité?
3. Dans un autre onglet du navigateur: saisir l'adresse [http://resaonline.la-bo.xyz/getcookie](http://resaonline.la-bo.xyz/getcookie). Les informations du formulaire sont-elles toujours présentes dans la carte d'identité?
4. Saisir maintenant cette adresse dans un AUTRE navigateur. Les informations du formulaire sont-elles toujours présentes dans la carte d'identité?

## Sécurité sur le Web
Video: transfert encryptage ssl

{{< img src="../images/video_ssl.png" link="https://www.youtube.com/watch?v=WIMKeyJ60Rw" caption="Code Rock & Apprendre" >}}


*Questions*

1. parmi les éléments suivants, quels sont ceux qui sont cryptés lors d'une communication en *https*: (lire les discussions sur [https://www.ssl.com/faqs/what-is-https/](https://www.ssl.com/faqs/what-is-https/) ou bien [https://stackoverflow.com/questions](https://stackoverflow.com/questions/323200/is-a-https-query-string-secure))

	* Domain name
	* Request URL (which web page was requested by the client)
	* Website content
	* Query parameters
	* Headers
	* Cookies

2. Si votre échange avec le serveur est en *https*. Est-ce une bonne idée d'échanger des informations personnelles par la méthode GET si le site internet ne propose que la méthode GET? Pourquoi?
3. Conclure: Quels conseils peut-on donner à un utilisateur qui navigue et fait des achats sur le net?

# Liens
* Cette page est largement inspirée de [MDN developer.mozilla.org](https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)
* Approfondir: [MDN securité](https://developer.mozilla.org/fr/docs/Learn/Server-side/First_steps/Website_security)
