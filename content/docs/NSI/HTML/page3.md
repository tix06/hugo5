---
Title : HTML theorie
---

# Les langages web
## des langages interprétés

HTML : HyperTextMarkup Langage; CSS : Cascading StyleSheets; Javascript sont des langages interprétés par le navigateur, côté client. Ces 3 langages, en combinaison, vont permettre de créer des *sites internet*.

Pour que les pages soient accéssibles à tout le monde, sur le web[^2], ces pages doivent être hébergés sur un serveur. Lorsque le navigateur client envoie une requête au serveur, celui-ci lui renvoie les fichiers HTML, CSS et JS. Les instructions sont alors interprétées et permettent l'affichage des pages.

Ces langages sont en constante évolution. Ce sont des langages *open sources*[^5] et de nombreux contributeurs en proposent des améliorations.

Il existe plusieurs logiciels navigateurs (Mozilla, Chrome, Safari,...). Et pourtant, malgré cette diversité et ces évolutions du langage, ceux-ci vont interpréter ces fichiers et afficher les pages (presque) de la même manière car ils se réferent tous aux mêmes recommandations, celles du w3c[^4].

Rappels de SNT sur le <a href="/docs/SNT_2nde/pages/page4/web/" target = "blank">Web</a>.

## des tâches différentes
Les langages web se partagent les tâches : 
Une bonne pratique dans le développement d'un site internet (côté front-end, ce qui est executé sur la machine du client) consiste à utiliser HTML pour le contenu (avec un contenu correctement balisé, sémantique, accessible), CSS pour la mise en forme et la mise en page, et JavaScript pour gérer les interactions (qui peuvent éventuellement amener à modifier le contenu via les méthodes du DOM[^1]).

Le langage HTML est un langage constitué de *balises*, comme par exemple : 
`<title>le titre de ma page</title>` qui permet d'afficher le titre de la page dans l'onglet du navigateur.

Les éléments mis dans le programme à l'aide de ces balises vont permettre d'ajouter et structurer le contenu de la page : des titres de différents niveaux, du texte, des images, des médias (sons, videos),mais surtout, des hyperliens : 

* entre les pages du sites
* vers les pages de sites externes

Le *web*[^2] est justement basé sur l'utilisation de ces *hyperliens*, qui permettent de *naviguer* de pages en pages, sur internet[^3].

# Quelques pages web

## le squelette du document

Cette partie du programme est le contenu minimum à mettre dans vos pages : 


```html
<!DOCTYPE html>

<html>
    <head>
        
        <!-- encodage des caractères -->
        <meta charset="UTF-8">
        <!-- Titre -->
        <title>Titre de la page web</title>
    </head>

    <body>
        <!-- corps de la page -->

    </body>
</html>
``` 

Le doctype indique au navigateur la version HTML utilisée par la page (ici HTML5).

L'élément racine `<html>` : C'est lui qui va recueillir les deux principaux éléments de la hiérarchie : `<head>` et `<body>`.

À ce niveau, le code HTML est alors divisé en deux parties.

On peut lui associer l'attribut langue, précisant la langue utilisée dans le document : 

`<html lang="fr">` 

L'en-tête (élément `<head>`) donne l'encodage des caractères (ici UTF-8).

Préciser l'encodage des caractères est primordial pour exploiter la bonne page de code et ne pas se retrouver avec les caractères spéciaux ou accentués. Le choix de l'UTF-8 est désormais préconisé par le W3C pour tous les protocoles échangeant du texte sur internet (dont HTML).

On peut aussi y ajouter des éléments `<link>` et `<script>` : 

- link : permet de mettre en relation la page avec d'autres documents externes.
- `<script>`  permet d'ajouter des scripts (JavaScript) qui vont s'éxécuter côté client dans le navigateur dès leur chargement.

Si vous avez un script qui est très gros mais indépendant, il est préférable de le placer tout à la fin, afin de ne pas retarder le navigateur dans sa construction de l'arbre du DOM et de l'affichage de la page.

## Imbrication des balises
Si vous débutez complètement en HTML, consultez les ressources de SNT:

* Une introduction à la redaction d'un document en HTML: <a href="/docs/SNT_2nde/pages/page4/web1/" target="blank">Document Web, contenu et structure</a>.

L'imbrication des balises traduit le lien (la filiation) entre les éléments.

Cette filiation entre les éléments se retrouve avec l'indentation des balises.

# Les éléments importants à connaitre
## Page qui repertorie TOUS les éléments HTML
voir la page sur [developper.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/HTML/Element)

## Elément de section générique: section
voir le lien sur [developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section)

L'élément HTML `<section>` représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre.

## Autres éléments de section
Ce sont : `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`et `<aside>`


<figure>
<img src="../images/sections.jpg" width = 60% alt="page avec sections">
<figcaption>page avec sectionnements</figcaption>
</figure>

Ces éléments sont tous de type `Block` pour leur *display*. Mais ils ont des rôles différents pour la bonne structure du document.

Ce sont les règles CSS qui permettront de les disposer comme sur l'image ci-dessus.

voir la page [developper.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/HTML/Element)

## listes
voir le lien sur [developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Créer_une_liste_d_éléments_avec_HTML)

## tableaux
voir le lien sur [developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Tableaux/Basics)

## formulaires
voir le lien sur [developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)

## Liens externes et internes

- Dans ces exemples, on voit qu'une balise peut être constituée *d'attributs* (par exemple `src` pour la balise *img*). On affecte alors des *valeurs* à ces attributs (entre guillemets et après le `=` ).
- Lien hypertexte : on créé un lien *externe* en écrivant l'URL de la page `http://...`:

`<a href="http://fr.wikipedia.org/">Un lien hypertexte vers le site de Wikipédia</a>` 

Si le lien était vers une page du site (une page *locale*), il n'y aurait pas eu `http://` au début de l'adresse.

*Question :* L'adresse de l'image peut être *relative*, *absolue*, *locale* ou *externe*. Définir chacun de ces termes. Puis expliquer comment chacune de ces adresses a une expression particulière pour valeur de l'attribut *src*.

# Un outil de vérification de la syntaxe

Pour vérifier que votre page Web est conforme aux spécifications HTML5, rendez-vous sur le site du W3C (World Wide Web Consortium) : [http://validator.w3.org](http://validator.w3.org/)

Pour une page Web locale (pas encore publiée sur le Web) :

Validate by File Upload → Check

S'il y a des erreurs, elles vous seront indiquées, avec des explications (en anglais, of course).

Conseil : vérifier et corriger systématiquement vos pages Web avec cet outil.C'est contraignant au début, mais cela vous fera prendre rapidement de bonnes habitudes.

# Résumé

<div class="essentiel">
 <div class="entete">
  L'essentiel à retenir
 </div>
 <div class="resume">
  <h3>Le Web</h3>
  <p><b>Le web</b> fonctionne avec : le protocole HTTP (HyperText Transfert Protocol), les URL (Uniform Resource Locator) et le langage de description HTML (HyperText Markup Language).</p>
  <p>
  <b>Le W3C</b><br>
  Le World Wide Web Consortium, abrégé par le sigle W3C, est un organisme de standardisation à but non lucratif, fondé en octobre 1994 chargé de promouvoir la compatibilité des technologies du World Wide Web telles que HTML, CSS, JS... Le W3C permet la normalisation de la présentation de l’information.</p>

  <h3>Le HTML</h3>
  <p>HTML (HyperText Markup Langage) permet de <b>structurer le contenu</b> de la page web. C'est un langage interprété par le navigateur (client).</p>
  <p>C'est un langage constitué de <i>balises</i>. La plupart du temps, le contenu se met entre les balises ouvrantes / fermantes. Mais il existe des balises <i>orphelines</i> qui n'ont pas de fermeture (img, br).</p>

  <p>Le <b>squelette</b> du document est constitué du doctype (première ligne), puis des éléments <i>html, head, et body</i>.

  <p>La manière avec laquelle les balises sont imbriquées correspond à une filiation entre les éléments (parent-fille). Ainsi, <i>html</i> est la balise parente de toutes les autres. <i>html</i> est aussi le parent direct de <i>head</i> et <i>body</i>.</p>

  <p>Le contenu de la page sera mis entre les balises de <i>body</i>.</p>

  <h3>Le CSS</h3>
  Le langage CSS (Cascading Style Sheets) est le langage de mise en forme d'une page web. C'est un langage interprété par le navigateur.

  Le lien vers la feuille de style est souvent insérée dans l'en-tête de la page web:

  <p class="rubrik">
  &lt;link href="style.css" rel="stylesheets"&gt;
  </p>

  <h3>Le Javascript</h3>
  <p>Langage utilisé pour les scripts cöté client. Permet de gérer l'interactivité d'une page web, son aspect <i>dynamique</i>. L'aspect <i>étant reservé aux langages HTML et CSS.</i></p>
  <p>
   Le lien vers le fichier contenant le script javascript est souvent insérée dans la page web:</p>

  <p class="rubrik">
  &lt;script src="script.js"&gt;
  </p>

  <h3>Tâches synchrones et asynchrones</h3>
  <p>Deux opérations sont <b>synchrones</b> lorsque la seconde attend que la première ait fini son travail pour démarrer. Par exemple, le protocole HTTP (lors du chargement et rechargement d'une page web), mais aussi l'interprétation des langages HTML et CSS par le navigateur.
  </p>
  <p>
  Des opérations sont <b>asynchrones</b> en informatique lorsqu’elles sont indépendantes. Souvent, le navigateur interprète les scripts javascript de manière asynchrone, ce qui ne créé pas de blocage lors de la construction de la page.</p>
  <p>
  Toujours côté client, la technologie AJAX permet le transfert de données en arrière plan, sans avoir à recharger la page web.</p>

  <h3>Scripts côté serveur</h3>
  Les scipts côté serveur nécessitent une communication avec le serveur de manière synchrone ou asynchrone. Ils serviront par exemple à collecter des données, à générer le code HTML de la page, à communiquer avec une base de données. Les langages les plus utilisées sont PHP, Python, Javascript ...


  </div>
</div>
  



# Liens
* validateur w3c : [http://validator.w3.org](http://validator.w3.org/)
* Les éléments HTML : [https://developer.mozilla.org/fr/docs/Web/HTML/Element](https://developer.mozilla.org/fr/docs/Web/HTML/Element)
* entités HTML : [https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités](https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités)
* liste des attributs de balises en HTML : [https://developer.mozilla.org/fr/docs/Web/HTML/Attributs](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs)
* cours complet HTML-CSS (et aussi javascript): [https://www.pierre-giraud.com/html-css-apprendre-coder-cours/](https://www.pierre-giraud.com/html-css-apprendre-coder-cours/)
