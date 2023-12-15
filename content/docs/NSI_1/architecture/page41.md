---
Title: GET POST cookies - vs SNT
---

Vous repondrez aux question sur le document: [reseau_tp_form.odt](/pdf/NSI_1/reseau_tp_form_snt.odt)

# Formulaire de données - SNT
## But de la séance
Ce TP a pour but d'illustrer ce qui arrive quand un utilisateur soumet un formulaire: où les données vont-elles et comment les gère-t-on une fois à destination? 

{{< img src="../images/client-server.png" link="https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data" caption="img de MDN Sending_and_retrieving_form_data" >}}

## Le formulaire en ligne
Il est conseillé d'utiliser le navigateur **MOZILLA** pour la clarté des renseignements fournis par les outils réseau.

On utilisera le formulaire à la page [http://resaonline.la-bo.xyz](http://resaonline.la-bo.xyz). 

{{< img src="../images/form.png" link="http://resaonline.la-bo.xyz" caption="formulaire de connexion" >}}

Le bandeau de navigation permet de selectionner la méthode d'envoi des données:

* méthode GET
* méthode POST
* authentification par cookie

Vous allez utiliser la méthode d'authentification par **cookie**:

* Ouvrir la fenêtre d'*outils de développement* du navigateur. Choisir l'outil *réseau*
* Remplir et envoyer le formulaire
* Une fois parvenu à la page "espace personnel", vous allez explorer les éléments de la requête.

Dans la fenêtre de *dev tools*, l'outil réseau montre les différentes requêtes et ressources demandées. Dans cette liste, selectionner la page web (resaonline.la-bo.xyz). On peut alors procéder à l'analyse de l'URL. Cliquer sur le curseur devant le premier champs de l'en-tête:

{{< img src="../images/moz1.png" caption="inspecteur reseau sur Mozilla" >}}

*L’URL (Uniform Ressource Locator) est l'adresse qui permet de router (transporter) notre requête vers le serveur correspondant au site web, sur le réseau internet.*

Un **site Web est identifié** selon une combinaison unique de:

* son Adresse IP
* un Numéro de port
* le Host header (equivalent au nom de domaine)

Ce sont les renseignements fournis par l'en-tête (le *header*).

## Méthode avec authentification par cookie
1. Indiquer les renseignements fournis par l'en-tête (le *header*).

2. Dans les outils réseau du navigateur, chercher l'onglet *cookie*, et lire le contenu. Faire une copie d'écran dans votre document réponse. Comment les informations du formulaire sont-elles écrites dans le cookie? Sous une forme structurée?

{{< img src="../images/moz2.png" caption="exemple de capture d'écran de l'outil d'exploration du cookie" >}}

3. Recharger la page: le navigateur propose t-il de soumettre à nouveau le contenu du formulaire? Les informations du formulaire sont-elles toujours présentes dans la carte d'identité?
4. Dans un autre onglet du navigateur: saisir l'adresse [http://resaonline.la-bo.xyz/getcookie](http://resaonline.la-bo.xyz/getcookie). Les informations du formulaire sont-elles toujours présentes dans la carte d'identité? Pourquoi?
5. Saisir maintenant cette adresse dans un AUTRE navigateur. Les informations du formulaire sont-elles toujours présentes dans la carte d'identité? Pourquoi?
6. Rechercher le cookie grace aux options du navigateur. (Voir tuto sur cette [page](https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent). Quels autres cookies ont été déposés lors de votre session (aujourd'hui)? Comment peut-on se debarrasser de ces cookies?

{{< img src="../images/moz3.png" >}}

7. *Conclure:* Les traces numériques laissées sur mon ordinateur peuvent-elles contenir des informations sur mon identité numérique?

## Sécurité sur le Web
Video: transfert encryptage ssl

{{< img src="../images/video_ssl.png" link="https://www.youtube.com/watch?v=WIMKeyJ60Rw" caption="Code Rock & Apprendre" >}}


*Questions*

1. Quel est le scénario mettant en jeu un cyberpirate proposé dans cette vidéo?
2. Est-ce que cela change quelque chose, de naviguer en http ou bien en https?
3. *Conclure:* Quels conseils peut-on donner à un utilisateur qui navigue et fait des achats sur le net?

# Approfondir: 
* [MDN developer.mozilla.org](https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)
* [MDN securité](https://developer.mozilla.org/fr/docs/Learn/Server-side/First_steps/Website_security)

