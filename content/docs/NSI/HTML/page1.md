---
Title : HTML CSS les bases
---

# Les langages web
## des langages interprétés

## des tâches différentes
Les langages web se partagent les tâches : 
Une bonne pratique dans le développement d'un site internet (côté front-end, ce qui est executé sur la machine du client) consiste à utiliser HTML pour le contenu (avec un contenu correctement balisé, sémantique, accessible), CSS pour la mise en forme et la mise en page, et JavaScript pour gérer les interactions (qui peuvent éventuellement amener à modifier le contenu via les méthodes du DOM[^1]).

Le langage HTML est un langage constitué de *balises*, comme par exemple : 
`<title>le titre de ma page</title>` qui permet d'afficher le titre de la page dans l'onglet du navigateur.

Les éléments mis dans le programme à l'aide de ces balises vont permettre d'ajouter et structurer le contenu de la page : des titres de différents niveaux, du texte, des images, mais surtout, des hyperliens : 

* entre les pages du sites
* vers les pages de sites externes

Le *web*[^2] est justement basé sur l'utilisation de ces *hyperliens*, qui permettent de *naviguer* de pages en pages, sur internet[^3].

# Le document HTML
## Deux balises pour tout écrire
On pourrait utiliser une ou deux balises uniques pour tous les usages, par exemple :

* la balise `DIV` pour des éléments qui devront s'afficher l'un **sous** l'autre.
* la balise `SPAN` pour des éléments qui devront s'afficher l'un **à côté** de l'autre.

Voici le code HTML utilisé : 

```html
<body>
<div class="main">
  <div class="titre">La bataille de Marignan</div>
    <div class="contenu">
      <div class="paragraphe">
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span class="lien" onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div class="paragraphe">
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>
</body>
```

* Résultat obtenu SANS aucune règle CSS : 
<div >
  <div>La bataille de Marignan</div>
    <div>
      <div>
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div>
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>

* Résultat obtenu AVEC les règles CSS : 

<style>
.cont{
  border:solid;
}
.titreDIV{
  font-size:1.5em;
  text-decoration: bold;
}

.paragraphe{
  margin:1.2em;
  text-indent:20px;
  text-align:justify;
}
.lien{
  color:blue;
  cursor: pointer;
}

</style>

<div class="cont">
  <div class="titreDIV">La bataille de Marignan</div>
    <div class="contenu">
      <div class="paragraphe">
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span class="lien" onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div class="paragraphe">
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>

**Commentaires :**

* l'exemple montre qu'avec 2 balises seulement, il est possible de segmenter et d'afficher du contenu.
* Ces balises étant génériques, et souvent ré-employées, il faudra pouvoir distinguer les différents éléments et leur ajouter des attributs de classe.
* En ajoutant des règles de mises en forme, écrites dans la partie CSS, les éléments retrouvent leur rôle spécifique (container, paragraphe, lien...).
* comme vous l'imaginez, ce n'est pas la bonne pratique que d'utiliser seulement 2 balises pour tout le document : le code sera difficile à maintenir. Et vous aurez besoin d'écrire toutes les règles de mise en page CSS pour ces balises. Alors qu'avec des balises bien nommées, le navigateur va pouvoir appliquer les styles par défaut pour ces éléments.

## le squelette du document

```html
<!DOCTYPE html>

<html>
    <head>
        <!-- en-tête de la page -->
        <!-- encodage des caractères -->
        <meta charset="UTF-8">
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

L'en-tête (élément <head>) donne l'encodage des caractères (ici UTF-8).

Préciser l'encodage des caractères est primordial pour exploiter la bonne page de code et ne pas se retrouver avec les caractères spéciaux ou accentués. Le choix de l'UTF-8 est désormais préconisé par le W3C pour tous les protocoles échangeant du texte sur internet (dont HTML).

On peut aussi y ajouter des éléments `<link>` et `<script>` : 

- link : permet de mettre en relation la page avec d'autres documents externes.
- `<script>`  permet d'ajouter des scripts (JavaScript) qui vont s'éxécuter côté client dans le navigateur dès leur chargement.

Si vous avez un script qui est très gros mais indépendant, il est préférable de le placer tout à la fin, afin de ne pas retarder le navigateur dans sa construction de l'arbre du DOM et de l'affichage de la page.

## quelques règles de syntaxe

- Les commentaires sont mis entre les balises :

`<!-- commentaire -->` 

- Toute balise ouverte doit être refermée :

`<p>contenu de la balise</p>`

<p> est la balise ouvrante, </p> est la balise fermante.

Certaines balises sont vides (elles n'ont pas de contenu), la fermeture se fait alors immédiatement :

`<br>`

`<img src="velo.jpg" alt="vélo">`

`<br>` et `<img>` sont des balises dites *orphelines*.

- Dans ce dernier exemple, on voit qu'une balise est constituée *d'attributs* (par exemple `src` auxquels on affecte des *valeurs. (entre guillemets et après le `=` )*
- les liens :

exemple : 

`<a href="[http://fr.wikipedia.org](http://fr.wikipedia.org/)">Un lien hypertexte vers le site de Wikipédia</a>` 

- Les balises doivent être correctement imbriquées :

`<p>Cette syntaxe est <strong>bonne</strong></p>`

## Construction de la page
Les éléments vont se disposer l'un après l'autre, dans le *flux* de construction de la page, qui correspond à l'ordre dans lequel sont écrites les balises dans le fichier HTML.

Ce flux pourra être modifié par des règles de CSS, que le navigateur interprète au fur et à mesure de la construction de la page.

# Balises principales
## Elements de section

Ce sont : `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`et `<aside>`

- L'élément HTML `<aside>` (en anglais, "aparté") représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document.
- L'élément HTML `<footer>` représente le pied de page de la section ou de la racine de sectionnement la plus proche. Un pied de page ou de section contient habituellement des informations sur l'auteur de la section, les données relatives au droit d'auteur (copyright) ou les liens vers d'autres documents en relation.
- L'élément HTML `<header>`représente un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, etc.
- L’élément HTML `<main>` représente le contenu majoritaire du `<body>` du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document ou de la fonctionnalité principale d'une application.
- L'élément HTML `<nav>`représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page. Autrement dit, c'est une section destinée à la navigation dans un document (avec des menus, des tables des matières, des index, etc.).
- L'élément HTML `<section>` représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre.
- `<article>`Articles contenus dans les sections



## Elements de type bloc

Par défaut, les éléments de type bloc sont affichés par le navigateur avec un saut de ligne au début et à la fin.

Exemples : `<h1>`, `<p>`, `<ul>`, `<table>`, `<hr>`, `<pre>`, `<form>` ...

- L’élément de division du contenu div (ou son remplaçant, `<section>`
- Les éléments structurants article, aside, header, footer, nav et section ...

Le code suivant affichera deux paragraphes, l'un en dessous de l'autre :

`<p>Premier paragraphe.</p><p>Deuxième paragraphe.</p>`

Les éléments de type bloc peuvent être dimensionnés à l'aide d'attributs.

## Eléments de type inline

Les éléments de type inline se placent normalement l'un à côté de l'autre (pas de saut de ligne).

Exemples : `<strong>`, `<em>`, `<a>`, `<img>`, `<sup>`, `<sub>`...

- Les éléments de formulaire `input`, `label`, `textarea` et de liste de choix `select` ;
- L’élément d’insertion d’images `img` 
- Les éléments `code`, `script`, etc.

D'autres éléments auront une disposition par défaut de type *inline*, mais cette propriété peut être explicitement modifiée, en CSS avec `display`

Remarques : 

- pour les éléments *inline*, on ne pourra pas leur ajouter un attribut de dimension (`width` et `height`). Leur dimension s'adaptera à leur contenu mais ne pourra pas être fixée.
- les paragraphes `<p>` et les titres `<h1>` ... ne peuvent contenir que des éléments inline.
- Les éléments inline ne peuvent contenir que des éléments inline.

## indexer les parties du document

**Classes et identifiants**
L'un des attributs des élémnents HTML peut servir à indexer cet élément : 

* de manière unique : l'attribut `id="valeur"` : une seule valeur d'attribut `id` peut être utilisée dans tout le document HTML.
* avec un attribut de classe : `class="valeur"` : ici, plusieurs éléments peuvent avoir la même *classe*. On pourra alors séléctionner (en css et en javascript) tous les éléments possédant cette classe, avec une seule instruction.

# Un outil de vérification de la syntaxe

Pour vérifier que votre page Web est conforme aux spécifications HTML5, rendez-vous sur le site du W3C (World Wide Web Consortium) : [http://validator.w3.org](http://validator.w3.org/)

Pour une page Web locale (pas encore publiée sur le Web) :

Validate by File Upload → Check

S'il y a des erreurs, elles vous seront indiquées, avec des explications (en anglais, of course).

Conseil : vérifier et corriger systématiquement vos pages Web avec cet outil.C'est contraignant au début, mais cela vous fera prendre rapidement de bonnes habitudes.

# Travaux pratiques

## TP1 : utiliser les bonnes balises pour ...
Construire le document présenté en début de cours (2 balises uniques DIV et SPAN), mais cette fois ci, en utilisant les balises adequates.

## TP2 : sectionnement
Reproduire en HTML et CSS un document représentant l'image suivante :

<figure>
<img src="../images/sections.jpg" width = 60% alt="page avec sections">
<figcaption>page avec sectionnements</figcaption>
</figure>

*Aide : bien reflechir à l'ordre dans lequel ces éléments vont s'inscrire dans le flux. Utiliser l'imbrication entre éléments pour bien ordonner la construction. Utiliser la règle CSS `display : inline-block;` pour modifier l'affichage de certains éléments.*


[^1]: DOM : Document Object Model
[^2]: web : (www) world wide web : c'est la toile. On y *surfe*, c'est à dire que l'on va y chercher des ressources. C'est un service, comme il en existe d'autres (FTP, mail,...). C'est un système distribué qui opère au dessus d'internet.
[^3]: internet (Internet Network) est un réseau de réseaux, à l'echelle mondiale, qui interconnecte les ordinateurs et permet d'echanger des données. C'est système réparti (l'inverse de distribué) : un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent (un seul paradigme). Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. Un exemple est le web dans lequel toute information apparait comme un document. C'est dons un logiciel élaboré au dessus du réseau.