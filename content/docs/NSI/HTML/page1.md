---
Title : HTML CSS les bases
---

# Les langages web
## des langages interprétés

HTML : HyperTextMarkup Langage; CSS : Cascading StyleSheets; Javascript sont des langages interprétés par le navigateur, côté client. Ces 3 langages, en combinaison, vont permettre de créer des *sites internet*.

Pour que les pages soient accéssibles à tout le monde, sur le web[^2], ces pages doivent être hébergés sur un serveur. Lorsque le navigateur client envoie une requête au serveur, celui-ci lui renvoie les fichiers HTML, CSS et JS. Les instructions sont alors interprétées et permettent l'affichage des pages.

Ces langages sont en constante évolution. Ce sont des langages *open sources*[^5] et de nombreux contributeurs en proposent des améliorations.
Il existe plusieurs logiciels navigateurs (Mozilla, Chrome, Safari,...). Et pourtant, malgré cette diversité et ces évolutions du langage, eux-ci vont interpréter ces fichiers et afficher les pages (presque) de la même manière car ils se réferent tous aux même recommandations, celles du w3c[^4].

## des tâches différentes
Les langages web se partagent les tâches : 
Une bonne pratique dans le développement d'un site internet (côté front-end, ce qui est executé sur la machine du client) consiste à utiliser HTML pour le contenu (avec un contenu correctement balisé, sémantique, accessible), CSS pour la mise en forme et la mise en page, et JavaScript pour gérer les interactions (qui peuvent éventuellement amener à modifier le contenu via les méthodes du DOM[^1]).

Le langage HTML est un langage constitué de *balises*, comme par exemple : 
`<title>le titre de ma page</title>` qui permet d'afficher le titre de la page dans l'onglet du navigateur.

Les éléments mis dans le programme à l'aide de ces balises vont permettre d'ajouter et structurer le contenu de la page : des titres de différents niveaux, du texte, des images, des médias (sons, videos),mais surtout, des hyperliens : 

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
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Marignan 1515</title>
    </head>

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
<div style = "background: rgb(200,200,200)">
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
<br>
<i>Remarques: le contenu apparait de manière structuré, mais sans aucune mise en forme. Le lien est fonctionnel: cliquer sur le nom François Ier pour vous en apercevoir.</i>

* Résultat obtenu AVEC les règles CSS : 
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



Les règles CSS utilisées pour ce 2<sup>e</sup> exemple:

```html
<style>
.contenu{
  border:solid;
}
.titre{
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
```

**Commentaires :**

* Avec 2 balises seulement, il est possible de segmenter et d'afficher du contenu.
* Ces balises étant génériques, et souvent ré-employées, il faudra pouvoir distinguer les différents éléments et leur ajouter des attributs de classe (voir le pragraphe [indexer](#indexer-les-parties-du-document)).
* En ajoutant des règles de mises en forme, écrites dans la partie CSS, les éléments retrouvent leur rôle spécifique (container, paragraphe, lien...).
* comme vous l'imaginez, ce n'est pas la bonne pratique que d'utiliser seulement 2 balises pour tout le document : le code sera difficile à maintenir. Et vous aurez besoin d'écrire toutes les règles de mise en page CSS pour ces balises. Alors qu'avec des balises bien nommées, le navigateur va pouvoir appliquer les styles par défaut pour ces éléments.

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

## quelques règles de syntaxe

- Les commentaires sont mis entre les balises :

`<!-- commentaire -->` 

- Toute balise ouverte doit être refermée :

`<p>contenu de la balise</p>`

`<p>` est la balise ouvrante, `</p>` est la balise fermante.

Certaines balises sont vides (elles n'ont pas de contenu), la fermeture se fait alors immédiatement :

`<br>`

`<img src="velo.jpg" alt="vélo">`

`<br>` et `<img>` sont des balises dites *orphelines*.

- Dans ces exemples, on voit qu'une balise peut être constituée *d'attributs* (par exemple `src` pour la balise *img*). On affecte alors des *valeurs* à ces attributs (entre guillemets et après le `=` ).
- Lien hypertexte : on créé un lien *externe* en écrivant l'URL de la page `http://...`:

`<a href="http://fr.wikipedia.org/">Un lien hypertexte vers le site de Wikipédia</a>` 

Si le lien était vers une page du site (une page *locale*), il n'y aurait pas eu `http://` au début de l'adresse.

- Les balises doivent être correctement imbriquées :

`<p>Cette syntaxe est <strong>bonne</strong></p>`

- il peut arriver que l'on ait recours à des *entité HTML* pour écrire certains caractères spéciaux : (symbole réservé comme le chevron `>, alphabet grec...).
Ces entités ont toutes la même préfixe : une esperluette « & ». La fin d'une entité est marquée par le caractère point-virgule « ; ».

Ainsi, pour afficher `<em>`, il faudra écrire : `&lt;em&gt;`.

voir lien : [https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités](https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités)

## Attributs des balises
Les attributs sont ajoutés à la balise *ouvrante*. Il vont permettre de préciser certaines de ses caractéristiques, de faire appel à une *fonction* du langage HTML, et parfois, modifier son comportement.

> La syntaxe est : `<element attribut="valeur">`

Certaines balises acceptent les attributs `width` ou `height`. Ce qui permet de définir leur dimension (largeur, hauteur), (voir l'élément `img`).
Pour certains éléments, des attributs sont obligatoires et doivent être renseignés : la localisation d'une image `src`, ou bien l'adresse d'une page pour un hyperlien `href`.

**Exemple :**

```html
<section style="background-color: yellow; width:450px">
  <p>Une section colorée avec un <a href="https://numerix.netlify.app">lien vers mon site</a></p>
  <img src="../images/moustique.png" width = 40% alt="attention moustiques">
</section>
```

*Résultat :*

<section style="background-color: yellow; width:450px">
    <p>Une section colorée avec un <a href="https://numerix.netlify.app">lien vers mon site</a></p>
    <img src="../images/moustique.png" width = 40% alt="attention moustiques">
</section>

**Remarques :**

* L'attribut `style` définit des styles CSS qui auront la priorité sur ceux définis précédemment. Il ne devrait être utilisé qu'à des fins de tests car il est conseillé d'utiliser un/des fichier(s) à part pour gérer la mise en forme.
* L'attribut `href` de l'élément `a` permet de créer un hyperlien. Celui-ci permet d'ouvrir une autre page (locale ou externe).
* La balise *img* permet l'affichage d'une image, accepte les attributs *width* et *height*, *alt* (affichage d'un texte alternatif si l'image ne s'affiche pas, ou pour des raisons d'accessibilité), et aussi *src* pour pointer vers l'adresse de l'image. 

*Question :* L'adresse de l'image peut être *relative*, *absolue*, *locale* ou *externe*. Définir chacun de ces termes. Puis expliquer comment chacune de ces adresses a une expression particulière pour valeur de l'attribut *src*.

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

## listes
voir le lien sur [https://developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Créer_une_liste_d_éléments_avec_HTML)

## tableaux
voir le lien sur [https://developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Tableaux/Basics)

## formulaires
voir le lien sur [https://developer.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)

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

# Liens
* validateur w3c : [http://validator.w3.org](http://validator.w3.org/)
* Les éléments HTML : [https://developer.mozilla.org/fr/docs/Web/HTML/Element](https://developer.mozilla.org/fr/docs/Web/HTML/Element)
* entités HTML : [https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités](https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités)
* liste des attributs de balises en HTML : [https://developer.mozilla.org/fr/docs/Web/HTML/Attributs](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs)
* cours complet HTML-CSS (et aussi javascript): [https://www.pierre-giraud.com/html-css-apprendre-coder-cours/](https://www.pierre-giraud.com/html-css-apprendre-coder-cours/)


<div class="essentiel">
 <div class="entete">
  L'essentiel à retenir
 </div>
 <div class="resume">
  <h3>HTML est un langage interprété</h3>
    Une fois le fichier HTML chargé depuis le serveur, celui-ci sera interprété et affiché par le navigateur.<br>

    Il existe un organisme qui fait réference pour les langages web et fixe les standards. Il s'agit du w3c, dont les recommandations sont intégrées par les navigateurs.<br>

    Le rôle du langage HTML sera de : 
    <ul>
      <li>structurer la page : en emboitant les balises des éléments</li>
      <li>définir le rôle des différents objets à afficher : titres, liens, listes, tableau, paragraphe, image, médias.</li>
    </ul>

    Les balises doivent être correctement nommées, afin de profiter des règles  de style par défaut appliquées par le navigateur.

  <h3>La structure d'une page HTML</h3>
    Le squelette d'un fichier HTML comprend :
    <ul>
      <li>le doctype</li>
      <li>l'élément `html` qui est la balise parente de toutes les autres</li>
      <li>l'élément `head` : premier enfant de l'élément `html`<br>Cette balise contient : l'information sur l'encodage des symbole (souvent utf-8), les liens vers les fichiers css et javascript, le titre de la page, et d'autres métadonnées.</li>
      <li>l'élément `body` : deuxième enfant de l'élément `html`. C'est cet élément qui contiendra toutes les autres balises qui structurent la page.</li>
    </ul>
  <h3>Elements et attributs</h3>
      Un attribut va étendre les propriétés d'une balise. Certains sont obligatoires, comme par exemple `src` (localisation de l'image), ou `href` (URL page d'un hyperlien).<br>
      L'attribut `style` va permettre d'ajouter des règles CSS à l'élément. Mais cette pratique ne doit pas être généralisée.<br>

      Une balise avec attribut, représentant un élement (h1, p, a, img...) s'écrira sous la forme:<br>
      <em>&lt;element attribut="valeur"&gt;</em>
      <br><br>
      Deux attributs spéciaux permettent d'indexer un élément:
      <ul>
        <li>`id` : de manière unique avec un attribut <em>identifiant</em></li>
        <li>`class` : avec un attribut de <em>classe</em>, qui n'est donc pas forcément unique dans le document.</li>
      </ul>

    
  <h3>Balises principales</h3>
    voir paragraphe <a href="http://localhost:1313/docs/NSI/HTML/page1/#balises-principales"># Balises principales</a>
  <h3>Disposition des éléments</h3>
    voir paragraphe <a href="#elements-de-type-bloc"># Elements de type bloc</a> et<br>
    voir paragraphe <a href="#eléments-de-type-inline"># Eléments de type inline</a>
 </div>
</div>

[^1]: DOM : Document Object Model
[^2]: web : (www) world wide web : c'est la toile. On y *surfe*, c'est à dire que l'on va y chercher des ressources. C'est un service, comme il en existe d'autres (FTP, mail,...). C'est un système distribué qui opère au dessus d'internet.
[^3]: internet (Internet Network) est un réseau de réseaux, à l'echelle mondiale, qui interconnecte les ordinateurs et permet d'echanger des données. C'est système réparti (l'inverse de distribué) : un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent (un seul paradigme). Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. Un exemple est le web dans lequel toute information apparait comme un document. C'est dons un logiciel élaboré au dessus du réseau.
[^4]: le W3C ou « World Wide Web Consortium ». C'est un groupe de travail, qui fait référence et qui est chargé de définir et de veiller au développement des langages HTML et CSS. Il existe un autre groupe de référence : Le WHATWG ou « Web Hypertext Application Technology Working Group ».
[^5]: langages open source : Ce sont des langages que l’on va pouvoir utiliser sans licence et n’importe qui va (généralement) pouvoir participer à leur développement