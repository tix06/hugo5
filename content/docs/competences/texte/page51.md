# Créer une page web
Le but de cet exercice est de réaliser une page HTML de présentation de *votre film préféré*. Cette page sera simple. On pourra piocher les informations de votre film sur des bases de données en ligne de films telles que IMDb, AlloCiné, Wikipédia...

L'objectif est de réaliser une page qui pourrait présenter les informations comme ceci:

{{< img src="../images/LeFilm.png" >}}

## Mise en place de l'environnement de travail de notre site web

Dans un premier temps :

* dans votre répertoire personnel: créez un dossier appelé `web`, ou utlisez votre précédent dossier (celui contenant vos autres pages web, réalisées lors des précédentes séances).

*Attention, on prendra soin de ne pas mettre d'espaces et d'accents dans notre arborescence de fichiers et dossiers.*

* Dans le dossier `web`, créez un nouveau dossier, que vous appelerez `pages`
* Dans le dossier `pages`, créez un nouveau fichier à l'aide de l'editeur *Notepad++*. Copiez-collez les lignes suivantes:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>page principale</title>
</head>
<body>
<!-- le contenu de votre page web. 
Ceci est un commentaire et peut être effacé.
-->
</body>
</html>
```

* Sauvegardez le en l'appelant *page1.html*

* Dans le dossier `pages`, créer un nouveau dossier que vous appelerez `images`. Placez dans ce dossier les images du film que vous souhaitez afficher dans votre page.

* Ouvrir le fichier à l'aide d'un navigateur (Mozilla, Edge, ...). Rafraichir la page à chaque modification.

## Contenu du fichier
Rappelez-vous: le contenu de votre document se place entre les balises `<body>` et `</body>`. A chaque modification, vous devrez *Enregistrer* votre document pour que ces modifications soient prises en compte.

Le document contiendra les éléments suivants:

**Ce document a été réalisé par VOTRE NOM ET PRENOM**

**TITRE DU FILM**

**Informations générales:**

* Année de Sortie
* Réalisateur
* Acteurs Principaux
* Genre

**Résumé**

**Bande-Annonce du Film**

**Sources des informations et médias**

> Méthode:

* Ces éléments peuvent être des *titres* (h1), des sous-titres (h2), ... Voir le [TP de découverte du HTML](/docs/competences/texte/page5/).

* On pourra aussi mettre en évidence, avec la balise `<strong>`, les différents items de la partie Informations générales.

* Les éléments de liste peuvent être placés les uns sous les autres, organisés (liste à puce) à l'aide du système d'instructions suivant: (balises ul et li)

```html
<ul>
    <li>Année de sortie: </li>
    <li>Réalisateur: </h1>
    <li>...</li>
</ul>
```

* Modifiez le texte Ce document a été réalisé par VOTRE NOM ET PRENOM et TITRE DU FILM







*Enregistrez votre travail puis faire F5 dans votre navigateur pour rafraîchir la page. Admirez votre premier travail.*

## Compléter les informations
### Des paragraphes
À l'aide des sites web du début de page, renseignez les différentes informations de la page.

> Méthode: Utilisez les balises `<p> ... </p>` pour placer des informations dans un paragraphe (par exemple pour le résumé)

### Ajouter une image

* Depuis un site web, télécharger le fichier image du film en faisant un clic-droit dessus Enregistrer l'image sous... Enregistrez ce fichier dans le dossier images crée précédemment.

* Nommez cette image affiche.jpg, ou affiche.png ou encore affiche.webp selon le format initial du fichier image.

Pour ajouter une image dans une page HTML, il faut utiliser la balise `<img src="chemin vers l'image"/>`. 

`chemin vers l'image` est le chemin à fournir à partir du fichier HTML. Si l'image se trouve dans le dossier `images`, et qu'elle s'appelle `affiche.png`, le chemin est `images/affiche.png`

*Remarque : si le fichier affiche.jpg avait été enregistré dans le dossier `pages`, à côté de page1.html, on aurait mis la ligne de code suivante : `<img src="affiche.jpg"/>`

* Ajoutez l'affiche à votre page web en ajoutant la ligne de code HTML adéquate. 

* Si votre affiche est trop grande, on peut demander au navigateur de réduire sa largeur en pixels (width) ou sa hauteur en pixels (height). On ajoute alors de nouveaux *attributs* à la balise `img` de la manière suivante: `<img src="chemin vers l'image" width="taille en pixels" />`



## Intégrer du contenu distant
On peut intégrer du contenu issu d'un autre site. Nous allons intégrer la bande-annonce, la vidéo donc, à notre page.

Ce n'est pas plus compliqué qu'un simple copier-coller. Prenons l'exemple du site Youtube, il suffit de cliquer sur le bouton *Partager* puis *Intégrer*, sélectionner le code qui commence par `<iframe>` et le coller sous notre titre bande-annonce.

Attention, bien cocher la case : Activer le mode confidentialité avancé.

Le code ressemble à cela :

`<iframe width="560" height="315" src="https://www.youtube.com/...></iframe>`

Vous remarquerez que l'on peut jouer sur la taille de la vidéo affichée et quelques paramètres, toujours en anglais.

## Créer des liens hypertextes
On l'a vu précédemment, les liens hypertextes sont la base du Web. Voyons comment réaliser ces liens avec du HTML. Un lien permet simplement de se déplacer vers une autre page HTML.

`<a>` désigne une ancre, c'est-à-dire un lien vers une cible de destination. Cette balise entoure généralement un mot (une image, un paragraphe, un titre, ...) qui devient le texte 'support du lien' hypertexte.

La syntaxe est :

`<a href="adresse_du_lien_hypertexte">support_du_lien</a>`

Dans la partie Sources des informations et médias, ajouter le ou les site·s où vous avez pris vos informations et l'affiche en créant un lien vers le ou les site·s en question.

Enregistrez, vérifiez et montrez le résultat à votre enseignant. 

## Règles css
Et si je veux mettre un peu de couleurs ? Le *style* d'un document est apporté par le langage `CSS`

Ok, le rendu précédent n'est pas très fun, c'est le rendu par défaut des différentes balises ; on va donc ajouter des instructions de *styles* à notre page afin de la personnaliser à notre goût. Pour cela, copiez le code ci-dessous. Placez le à la fermeture de la balise `</head>` et avant l'ouverture par la balise `<body>`

```
<style>
body {	background-color: pink;	}

h1 { color: blue; }

h2 { font-variant: small-caps;
		color: green;
		}
strong { background-color: gold; }
</style>
```




Vous trouverez de nombreuses références sur les styles sur Internet mais le plus simple sera d'utiliser [cette page](https://portail.lyc-la-martiniere-diderot.ac-lyon.fr/srv1/html/cours_html_css_nsi/exo_css_nsi/css_couleurs.html), ou bien celui-ci très complet: [MDN Mozilla](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)

# Pour aller plus loin...

Vous avez terminé et c'est validé par votre enseignant ? Vous pouvez :

* améliorer le style à l'aide de nouvelles règles `CSS`
* rajouter des pages à votre site (autre film, 2è volet du film...)

