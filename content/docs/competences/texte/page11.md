---
Title: utiliser un CMS
---

# Utiliser un CMS
Un système de gestion de contenu ou SGC (content management system ou CMS en anglais) est un programme informatique permettant de **créer un site internet**, un **blog** ou encore un **site de vente** en ligne. Les fonctionnalités d'un SGC sont nombreuses. Il permet entre autres de **travailler à plusieurs** sur un même document ; de séparer les opérations de gestion de la **forme et du contenu** ; de structurer le contenu (FAQ, documents, blogues, forums, etc.) ; de hiérarchiser les **utilisateurs** et de leur attribuer des **permissions** (anonyme, administrateur, contributeur, etc.).

Certains CMS proposent d'**héberger** et de mettre le site en ligne. Il vous fournit alors l'**URL** pour consulter le site.


Nous utiliserons pour cette séance le CMS [e-monsite.fr](https://www.e-monsite.com)

# Le CMS e-monsite.fr
## D'abors, créer un compte
Au démarrage: aller sur **Créer un site**

{{< img src="../images/cms2.png" link="https://manager.e-monsite.com/onboard-theme/step1" >}}



Suivre ensuite les étapes de création:

* donner un nom au site en fonction du thème que vous allez choisir.
* renseigner votre e-mail
* après vérification de votre email, votre espace en ligne est créé. Finir les étapes de création de compte.

## Rejoindre un site collaboratif

### Pour le groupe 1
Celui-ci se trouve à la page 1 du site: [http://site-demo-2-3.e-monsite.com/](http://demo-autre.e-monsite.com)

{{< img src="../images/cms20.png" link="http://demo-autre.e-monsite.com" >}}

* Aller dans le formulaire *commentaire* de la **page 1** du [site du groupe 1](http://demo-autre.e-monsite.com/pages/typographies-et-boutons.html)
* Renseigner votre nom, votre email et votre site internet dans la partie *commentaire* de la page.

### Pour le groupe 2
Celui-ci se trouve à la page 1 du site: [http://site-demo-3-4.e-monsite.com/](http://educosmos2.e-monsite.com)

{{< img src="../images/cms21.png" link="http://educosmos2.e-monsite.com" >}}

* Aller dans le formulaire *commentaire* de la **page 1** du [site du groupe 2](http://educosmos2.e-monsite.com/pages/page-1.html).
* Renseigner votre nom, votre email et votre site internet dans la partie *commentaire* de la page.

Cette étape va permettre à l'administrateur du site de vous ajouter comme *administrateur*.

Vous trouverez alors la liste des différents sites dont vous êtes adiministrateur depuis le menu du tableau de bord.

{{< img src="../images/cms4.png" >}}

## Ajouter/Modifier une page
Depuis le tableau de bord. Menu *Pages*, choisir *Gérer les pages*.

{{< img src="../images/cms9.png" >}}

On arrive alors sur l'interface de gestion des pages.

{{< img src="../images/cms15.png" >}}

### Pour ajouter une page
Cliquer sur ajouter une page. L'interface de création vous propose de choisir un titre (1), de décider si la page doit être ou non publiée (2), ainsi qu'un éditeur de page(3).

{{< img src="../images/cms14.png" >}}

Pour chaque page ajoutée, il faudra **ajouter un lien** vers cette page depuis la page d'accueil.

{{< img src="../images/cms17.png" >}}

### Pour modifier une page
L'interface de gestion propose a une liste complète des pages, publiées ou non publiées du site. Un lien **modifier** permet d'editer la page.

{{< img src="../images/cms10.png" >}}



## Editer (modifier) une page du site
### Utiliser l'éditeur visuel
L'editeur visuel permet de renseigner le contenu tout en structurant le document avec des titres/sous-titres (bouton de liste Format), choix de retraits et alignements, mettre en gras, italique, ajout d'image, lien, ... Toutes ces actions sont réalisable depuis la barre d'outils.

{{< img src="../images/css4.png" >}}

#### structure du texte
Le choix des niveaux de sous-titres doit avoir une certaine logique. Le titre de niveau 1 (balise `<h1>`) n’a généralement pas besoin d’être balisé manuellement, il s’agit du titre principal de votre page. (Premiere ligne au dessus du menu des outils).

#### Structurer la page
Sous l'editeur, on trouve un bouton: *Ajouter une ligne*, et *Ajouter une colonne*. 

Pour une nouvelle ligne, il s'agit plutôt d'ajouter un nouveau *paragraphe*, avec un nouvel editeur, sous le précédent.

{{< img src="../images/css8.png" >}}

A l'ouverture, on peut choisir de placer une image ou autre média à la place d'un paragraphe textuel.

{{< img src="../images/css7.png" >}}

On peut modifier l'ordre des paragraphes avec le navigateur en haut à droite de l'editeur.

{{< img src="../images/css6.png" >}}

N'oubliez pas de cliquer sur **Enregistrer** en bas de page pour **sauvegarder** vos modifications, et **publier** la page.

### Ajouter un lien
S'il s'agit d'un lien vers une page du site, selectionner le texte à cliquer, et appuyer sur *lien interne* de la barre d'outils. Renseigner alors la page.

{{< img src="../images/css5.png" >}}

Après avoir trouvé votre ressource (la page 1 par exemple), cliquer sur *Insérer*.

### Ajouter une image
Depuis l'un des editeur de ligne ou de paragraphe, vous avez la possibilité d'ajouter une image. Vous obtenez alors l'interface suivante:

{{< img src="../images/cms12.png" >}}

Cette page vous propose:

* soit de charger dans le serveur une image depuis votre disque dur *local* (1)
* de selectionner une image du serveur (2)
* de choisir l'image du serveur qui sera publiée (3).

{{< img src="../images/cms13.png" >}}

Vous allez probablement publier une image dont vous n'êtes pas l'auteur ou le propriétaire. Attention à respecter le [contrat de licence](https://creativecommons.org/faq/fr/) de celle-ci. Au minimum, il faudra citer l'auteur. Ajouter une *ligne* pour écrire ce texte sous l'image.


## Styliser le document
### Styliser le texte
Les propriétés de texte peuvent être modifiées avec le bouton en haut à gauche (1).
###  ou le paragraphe
Ceux dont le container (paragraphe) à l'aide du bouton *Options* en bas à gauche (2).

{{< img src="../images/cms16.png" >}}


Cette manière de formater les éléments (paragraphes, colonnes) de manière directe doit être employée avec parcimonie. Cela va entrainer un problème d'unité pour le site. 

### design du site
Pour une modification générale des pages du site, on utilisera le menu **Configuration > Apparence** du tableau de bord. 

{{< img src="../images/cms18.png" >}}

#### *Ne pas modifier le thème.*

## Visualiser les commentaires
Depuis l'interface de gestion de pages, dans la liste des pages, un lien *commentaires* amène directement sur les commentaires et identité de la personne qui a publié le commentaire.





