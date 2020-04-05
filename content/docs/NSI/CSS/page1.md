# Display
## display : block, inline, inline-block, none
*Une difficulté que l'on a souvent lorsque l'on apprend le CSS, c'est de faire la différence entre les propriétés* **display** et **position**.

Chaque navigateur possède une feuille de styles (c’est-à-dire un fichier CSS) qui sera appliquée par défaut pour les différents éléments dont nous ne précisons pas le comportement dans nos propres feuilles de style.

La plupart des navigateurs suivent les recommandations du W3C (l’organisme en charge de l’évolution et des standards des langages Web). Ce W3C spécifie pour chaque élément HTML quelle devrait être la valeur de son display parmi : 

- `display : block` : affichage sous forme d’un bloc ;
- `display : inline` : affichage en ligne ;
- `display : inline-block` : Il s’agit de la valeur par défaut des éléments`input`

C’est pour cela que l’utilisation de cet élément est aussi simple : il reste à côté de votre label, vous pouvez en changer sa largeur, sa hauteur, ses marges, etc..

- `display : none` : l’élément n’est pas affiché.

## Eléments de niveau block
Exemples d'éléments block : `p`, `div`, `form`, `header`, `nav`, `ul`, `li`, et `h1`.

Un élément block a les caractéristiques suivantes : 

- Si aucune largeur n'est définie, il prendra toute la largeur de son élément parent.
- Il peut avoir des marges et des paddings.
- Si aucune hauteur n'est définie, il prendra la hauteur de ses éléments enfants (en supposant qu'il n'y a pas de "float" ou de positionnement sur des éléments environnants).
- Il ignore la propriété vertical-align.

Il est donc inutile pour un élément block de définir une largeur ou de lui donner une width: 100%

<figure>
<img src="../images/block.jpg" width = 80% alt="display : block">
<figcaption>display : block</figcaption>
</figure>

## Éléments de niveau Inline
Exemples d'éléments inline : `a`, `span`

Un élément inline s'inscrit dans le flux de texte. On peut l'imaginer comme une boîte qui se comporte comme du texte.
Il ignore le propriétés `width` et `height`, mais accepte `vertical-align`
Il s'inscrit dans le flux du texte.

<figure>
<img src="../images/inline.jpg" width = 80% alt="display : inline">
<figcaption>display : inline</figcaption>
</figure>

Mais cela peut aussi servir à placer plusieurs éléments de type block sur la même ligne horizontale sans les *flotter*.
Ou pour permettre à un élément inline d'avoir des marges ou des paddings.

### application à la barre de menu horizontale
Cette barre de menu est conçue avec des éléments de type `a`, mis dans des éléments de type `li`. La valeur par défaut d'un `<li>` pour la propriété display est `list-item`. Cette valeur est connue pour ses styles par défaut (margin-start plus ou moins élevée, puce de liste de type disc, saut de ligne, etc.).

Cette valeur par défaut du display va nous poser problème si on veut placer tous nos liens sur une seule ligne.

<ul >
	<li><a class="exemple" href="#">Item 1</a></li>
	<li><a class="exemple" href="#">Item 2</a></li>
	<li><a class="exemple" href="#">Item 3</a></li>
	
</ul>

<style>
li {
	display: inline;
	list-style: none; 
	margin: 1px;
}

.exemple{
	display: inline;
	list-style: none; /* pour enlever les puces sur IE7 */
	width: 100px;
	padding: 5px 10px;
	text-decoration: none;
	color: #fff;
	font-weight: bold;
	background: #999;
	border-radius: 10px;
}
</style>

```
<ul >
	<li><a class="exemple" href="#">Item 1</a></li>
	<li><a class="exemple" href="#">Item 2</a></li>
	<li><a class="exemple" href="#">Item 3</a></li>
</ul>

<style>
li {
	display: inline;
	list-style: none; 
	margin: 1px;
}
```

On pourra alors ajouter des règles CSS aux éléments `a` directement enfants de `li` avec le selecteur `li a`. (pour définir une couleur de fond, une bordure..., ou pour des effets de survol, avec la pseudo classe `a:hover`)

## Eléments de niveau inline-block
Avec Inline-block, l'élément génère une boîte block qui est mise en forme comme s'il s'agissait d'une boîte inline (c'est à dire sur la même ligne que le contenu adjacent).
Cela offre la possibilité de définir une largeur et une hauteur, des marges et paddings top et bottom, etc.

<figure>
<img src="../images/inline-block.jpg" width = 80% alt="display : inline-block">
<figcaption>display : inline-block</figcaption>
</figure>

### application aux formulaires
Dans cette mise en page les label passent d'un display à valeur inline à un display: inline-block; Ces éléments vont pouvoir recevoir une valeur de `vertical-align` 

*Exemple : FORMULAIRE*

<form name="my_form" action="#result" method="post">
	<p> <label for="nom">Nom</label> <input type="text" id="nom"> </p>
	<p> <label for="email">E-mail</label> <input type="e-mail" id="email"> </p>
	<p> <label for="sujet">Sujet</label> <input type="text" id="sujet"> </p>
	<p> <label for="message">Message</label> <textarea id="message"></textarea> </p>
</form>

<style>
input, textarea {
	/*déjà en inline-block*/
	width: 150px;
	padding: 4px;
	vertical-align: top;
}

label {
	display: inline-block;
	width: 100px;
	margin-right: 20px;
	vertical-align: top;
	text-align: right;
}
</style>

```
<form name="my_form" action="#result" method="post">
	<p> <label for="nom">Nom</label> <input type="text" id="nom"> </p>
	<p> <label for="email">E-mail</label> <input type="e-mail" id="email"> </p>
	<p> <label for="sujet">Sujet</label> <input type="text" id="sujet"> </p>
	<p> <label for="message">Message</label> <textarea id="message"></textarea> </p>
</form>

<style>
input, textarea {
	/*déjà en inline-block*/
	width: 150px;
	padding: 4px;
	vertical-align: top;
}

label {
	display: inline-block;
	width: 100px;
	margin-right: 20px;
	vertical-align: top;
	text-align: right;
}
</style>
```

### application au design responsive
Dans l'exemple suivant, **positionnement des éléments en 3 colonnes**, on modifie le display des conteneurs `div`, qui a pour valeur par defaut `block` en une nouvelle valeur ìnline-block`.
Le changement de valeur se fait lorsque l'écran est assez grand. En CSS, les déclarations sont alors encapsulées dans un bloc conditionnel, comme le montre l'extrait ci-dessous : 
```
@media screen and (min-width: 800px), handheld and (min-width: 800px) {
.demo div {
	display: inline-block;
	width: 33.33%;
}
.demoA {
	float: left;
}
.demoB {
	float: right;
}
}
```
Le code complet est donné en bas de document.

# Position

la propriete position determine de quelle manière les éléments se disposent dans une page les uns par rapport aux autres.

Par defaut, la valeur est *static* . Top, right, bottom, left, and z-index properties have no effect when used with static.

- RELATIVE —L'élément est positionné dans le flux normal du document puis décalé, par rapport à lui-même, selon les valeurs fournies par top, right, bottom et left. Le décalage n'a pas d'impact sur la position des éléments. Aussi, l'espace fourni à l'élément sur la page est le même que celui fourni avec static.
  Par defaut, right, bottom et left ont pour valeur *auto*

- ABSOLUTE-L'élément est retiré du flux normal et aucun espace n'est créé pour l'élément sur la page. Il est ensuite positionné par rapport à son ancêtre le plus proche qui est positionné s'il y en a un ou par rapport au bloc englobant initial sinon. C'est la valeur choisie pour les objets que l'on veut placer à l'aide de leurs coordonnées : voir les exemples dans les pages <a href="../../javascript_avance/page1/index.html">javascript avancé</a> et <a href="../../mini_projet_spaceInvader/page1/index.html">mini projet Space Invader</a>

- FIXED — Similar to absolute, but positioned relative to the browser window. Scrolling will not move this element.

# Eléments en 3 colonnes : le Holy Grail
Pour des explications détaillés, on pourra se référer à la [page consacrée sur alsacreation](https://www.alsacreations.com/tuto/lire/588-trois-colonnes-float.html)

Le Holy Grail se réfère à une page web qui est constituée de quatre sections — un header, un footer, et une zone principale comportant deux sidebars, un de chaque côté : 

<figure>
<img src="../images/HolyGrail.png" width = 40% alt="saint graal css">
<figcaption>mise en page en 3 colonnes</figcaption>
</figure>

La mise en page respecte les règles suivantes :

- Elle comporte une colonne centrale de largeur fluide et des sidebars de largeur fixe.
- La colonne centrale doit apparaître en premier dans le markup, avant les deux sidebars mais après le header.
- Les trois colonnes doivent avoir la même hauteur, indépendamment de leur contenu.
- Le footer doit toujours se trouver en bas du viewport, même si le contenu ne remplit pas la hauteur du viewport.
- Le layout doit être responsif, toutes les sections doivent se retrouver sur une seule colonne sur les viewports de dimension réduite.

Le Saint Graal est bien connu pour être difficile à créer en CSS sans aucun tripatouillage.

Exemple de code html, css respectant la mise en page du saint graal, et de manière *responsive* (avec adaptation à la largeur des écrans, même de type smartphone).

**Exemple :** Vous pourrez voir ici l'effet *responsive* en réduisant ou augmentant la largeur de la fenêtre.

<main role="main" class="demo">
<h1>Une mise en page <i>responsive</i> sur trois colonnes.</h1>

<header class="demoHeader">HEADER</header>
<div class="demoMain">TOP/CENTER<br>(ex: main content)</div>
<div class="demoA">MIDDLE/LEFT<br>(ex: menu)</div>
<div class="demoB">BOTTOM/RIGHT<br>(ex: aside)</div>
<footer class="demoFooter">FOOTER
<nav>
	<h2>Menu.</h2>
	<ul>
		<li><a hreflang="fr" href="/lab/">lab</a></li>
		<li><a hreflang="fr" href="/">accueil</a></li>
		<li><a class="contact" hreflang="fr" href="/contact">contact</a></li>
	</ul>
</nav>
</footer>

</main>

<footer>


</footer>

<style type="text/css">
/*** 3 Columns ***/
.demo * {
	box-sizing: border-box;
	text-align: center;
}
.demo div {
	height: 12em;
}
.demoHeader,
.demoFooter {
	background: #aaa;
}
/*****
Colors
*****/
.demoMain {
	background: #ddd;
}
.demoA {
	background: #abc;
}
.demoB {
	background: #def;
}

li {
	display: inline;
	list-style: none; 
	margin: 1px;
}
/*********************
Media queries examples
**********************/
@media screen and (min-width: 800px), handheld and (min-width: 800px) {
.demo div {
	display: inline-block;
	width: 33.33%;
}
.demoA {
	float: left;
}
.demoB {
	float: right;
}
}
	</style>
	
**Code complet :**


```
<!doctype html>
<head>
	<meta charset="UTF-8" />
	<title>Une mise en page responsive sur trois colonnes</title>
	
	<style type="text/css">
/*** 3 Columns ***/
.demo * {
	box-sizing: border-box;
	text-align: center;
}
.demo div {
	height: 12em;
}
.demoHeader,
.demoFooter {
	background: #aaa;
}
/*****
Colors
*****/
.demoMain {
	background: #ddd;
}
.demoA {
	background: #abc;
}
.demoB {
	background: #def;
}

li {
	display: inline;
	list-style: none; 
	margin: 1px;
}
/*********************
Media queries examples
**********************/
@media screen and (min-width: 800px), handheld and (min-width: 800px) {
.demo div {
	display: inline-block;
	width: 33.33%;
}
.demoA {
	float: left;
}
.demoB {
	float: right;
}
}
	</style>
</head>
<body>
<main role="main" class="demo">
<h1>Une mise en page <i>responsive</i> sur trois colonnes.</h1>

<header class="demoHeader">HEADER</header>
<div class="demoMain">TOP/CENTER<br>(ex: main content)</div>
<div class="demoA">MIDDLE/LEFT<br>(ex: menu)</div>
<div class="demoB">BOTTOM/RIGHT<br>(ex: aside)</div>
<footer class="demoFooter">FOOTER
<nav>
	<h2>Menu.</h2>
	<ul>
		<li><a hreflang="fr" href="/lab/">lab</a></li>
		<li><a hreflang="fr" href="/">accueil</a></li>
		<li><a class="contact" hreflang="fr" href="/contact">contact</a></li>
	</ul>
</nav>
</footer>

</main>

<footer>


</footer>
</body>
</html>
```



