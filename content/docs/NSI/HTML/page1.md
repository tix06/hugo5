---
Title : HTML CSS les bases
---



# Programmation: HTML et CSS
## Rappels de SNT
Si vous débutez complètement en HTML, consultez les ressources de SNT:

* Une introduction à la redaction d'un document en HTML: <a href="/docs/SNT_2nde/pages/page4/web1/" target="blank">Document Web, contenu et structure</a>.
* Les balises principales: <a href="/docs/SNT_2nde/pages/page4/web2/" target="blank">Rappels</a>

## Compléments théoriques
* page du site vers le [HTML](/docs/NSI/HTML/page3/)
* page du site vers le [CSS](/docs/NSI/CSS/page1/)
* page du site vers le [CSS display et position](/docs/NSI/CSS/page2/)

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
<div style = "background: rgb(230,230,230)">
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
  background: rgb(230,230,230);
}
.contenu{
  border:solid;
  margin: 0.5em;
  padding: 0.5em;
}
.titreDIV{
  font-size:1.5em;
  text-decoration: none;
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
  margin: 0.5em;
  padding: 0.5em;
}
.titre{
  font-size:1.5em;
  text-decoration: none;
}

.paragraphe{
  text-indent:20px;
  text-align:justify;
}
.lien{
  color:blue;
  cursor: pointer;
}

</style>
```

Les balises `<style>` peuvent être insérées n'importe où dans le document *html*. Mais la bonne pratique est de les mettre dans l'élément *head*. Ou, encore mieux, dans un fichier séparé, comme on le verra plus loin.

**Commentaires :**

* Avec 2 balises seulement, il est possible de segmenter et d'afficher du contenu.
* Ces balises étant génériques, et souvent ré-employées, il faudra pouvoir distinguer les différents éléments et leur ajouter des attributs de classe (voir le pragraphe [indexer](#indexer-les-parties-du-document)).
* En ajoutant des règles de mises en forme, écrites dans la partie CSS, les éléments retrouvent leur rôle spécifique (container, paragraphe, lien...).
* comme vous l'imaginez, ce n'est pas la bonne pratique que d'utiliser seulement 2 balises pour tout le document : le code sera difficile à maintenir. Et vous aurez besoin d'écrire toutes les règles de mise en page CSS pour ces balises. Alors qu'avec des balises bien nommées, le navigateur va pouvoir appliquer les styles par défaut pour ces éléments.

## Quelques notions de CSS
Pour le cours complet sur CSS, voir la <a href="/docs/NSI/CSS/page1/">page CSS</a>. Pour un aperçu plus bref, voir ci-dessous.

Les règles CSS sont construites de la manière suivante:

<div style="text-align:center; font-weight: bold;">selecteur { propriete: valeur; }</div>

La valeur de la propriété se met après le séparateur `:`.

Le selecteur fait référence à un ou plusieurs éléments du document (sera développé plus tard).

<figure>
  <img src="../images/css.png">
</figure>

*Exemple:* Pour colorier TOUS les titres `h1` en bleu, on utilise la règle CSS que l'on peut mettre entre les balises `<style>`:

<div style="text-align:center; font-weight: bold;">h1 { color: blue;}</div>

## Activité 1: Construire un premier paragraphe en html et css
> Utiliser un editeur en ligne, comme par exemple <a href="https://htmledit.squarefree.com/" target="blank">squarefree.com</a>, pour tester l'exemple précédent:

**1.** La bataille de Marignan avec seulement 2 balises `<div>` et `<span>`

* Copier-coller les instructions html avec le contenu sur la *bataille de Marignan*.
* ajouter les balises `<style>` proposées plus haut et leur contenu CSS.
* Modifier les propriétés CSS et compléter le tableau.

| propriété | valeur | effet |
|--- |--- |--- |
| border | solid |  |
| border | dashed |  |
| font-size | 3em |  |
| font-size | 1em |  |
| text-decoration | underline |  |
| margin | 0 |  |
| margin | 0.5em |  |
| padding | 0em |  |
| padding | 0.5em |  |
| color | blue |  |
| background-color | rgb(230,230,230) |  |
| color | #66FF66  |  |
| cursor | pointer |  |
| text-align | left |  |
| text-align | right |  |
| text-align | justify |  |
| font-weight |  bold |  |

**2.** Remplacer maintenant toutes les balises `<div>` et `<span>` par les balises adequates. On s'aidera du tableau suivant:

| balise à remplacer | balise adequate |
|--- |--- |
| `<div class="main">` | `<main>`|
| `<div class="titre">` | `<h1>` |
| `<div class="contenu">` | `<section>` |
| `<div class="paragraphe">` | `<p>` |
| `<span class="lien" onclick="window.location.href = '...'>` | `<a href="...">` |


## Syntaxe HTML
### Généralités
-  A chaque élément HTML (paragraphe, titre, image, ...) correspond une *balise*.
- Les commentaires sont mis entre les balises :

`<!-- commentaire -->` 

- Toute balise ouverte`<balise>`doit être refermée`</balise>`:

- le contenu affiché est mis entre ces 2 balises:

`<p>contenu de la balise</p>`

`<p>` est la balise ouvrante de l'élément `p`, `pour *paragraphe*. Et </p>` est sa balise fermante.

- Les balises doivent être correctement imbriquées :

`<p>Cette syntaxe est <strong>bonne</strong></p>`


`<p>Cette syntaxe est <strong>mauvaise</p></strong>` 

- Certaines balises sont vides (elles n'ont pas de contenu), la fermeture se fait alors immédiatement. C'est le cas de:

  - la balise de saut de ligne:`<br>`
  - la balise pour insérer une image:`<img src="velo.jpg" alt="vélo">`

`<br>` et `<img>` sont des balises dites *orphelines*.

- il peut arriver que l'on ait recours à des *entité HTML* pour écrire certains caractères spéciaux : (symbole réservé comme le chevron `>`, alphabet grec...).
Ces entités ont toutes le même préfixe : une esperluette « & ». La fin d'une entité est marquée par le caractère point-virgule « ; ».

Ainsi, pour afficher `<em>`, il faudra écrire : `&lt;em&gt;`.

voir lien : [https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités](https://fr.wikibooks.org/wiki/Le_langage_HTML/Entités)

### Attributs d'une balise
Dans ces exemples, on voit qu'une balise peut être constituée *d'attributs*.
La *valeur* de l'attribut se met après le `=`(et entre guillemets). <br>
La balise s'écrit:

<figure>
  <img src="../images/attribut.png">
  <figcaption>voir la liste des attributs sur <a href="developer.mozilla.org/fr/docs/Web/HTML/Attributes">MDN</a></figcaption>
</figure>

Une balise peut avoir des **attributs obligatoires**. Par exemple:

*  `src` pour l'élément *img* dont la valeur est l'adresse/chemin de l'image.
*  `href` pour l'élement *a* (lien hypertexte).

D'autres attributs sont optionnels et peuvent être utiles pour ajuster le comportement de la balise. Par exemple:

* `width` et `height pour les dimensions d'une image.
* `alt` pour fournir un texte alternatif à une image. (apparait si l'image ne peut pas s'afficher).

### Lien hypertexte
Un lien hypertexte permet de naviguer vers une nouvelle page.

Il s'agit de l'élément **a**. La balise `<a href="URL">` nécessite de renseigner l'attribut `href` avec l'URL/ou chemin de la nouvelle page. 

*Exemple:*

```html
<a href="http://fr.wikipedia.org/">Un lien hypertexte vers le site de Wikipédia</a>
```


*Résultat:*

<a href="http://fr.wikipedia.org/" style="background-color: rgb(230,230,230)">Un lien hypertexte vers le site de Wikipédia</a>

Si le lien était vers une page du site (une page *locale*), il n'y aurait pas eu `http://nom_du_domaine.org` au début de l'adresse.

## Activité 2: Disposition des éléments
Cet exercice porte sur la construction d'une page: Les éléments vont se disposer l'un après l'autre, dans le *flux* de construction de la page, qui correspond à l'ordre dans lequel sont écrites les balises dans le fichier HTML.

**Exercice:** Dans un éditeur Web en ligne, comme par exemple <a href="https://htmledit.squarefree.com/" target="blank">squarefree.com</a>, écrire un script qui affichera le bandeau suivant:

<section style="background-color: yellow; width:450px">
<h3>La solution écologique</h3>
    <p>Enfin une <a href="https://www.anti-moustique.net/raquette-moustique/">invention</a> qui va vous debarrasser des piqures:</p>
    <span style="vertical-align: top;">Et hop, plus de moustiques !!</span><img src="../images/moustique.png" width = 40% alt="attention moustiques">
</section>

*Aide:* Vous devrez utiliser les éléments suivants:

- `section` : élément qui contiendra tous les autres éléments de cette section. Une page peut contenir plusieurs *sections*.
- `p` : paragraphe
- `a` : lien vers l'URL: `https://www.anti-moustique.net/raquette-moustique/`
- `span` : pour écrire du texte à côté de l'image, ou à côté d'un autre texte. On peut mettre en relief certain mots d'un texte de cette manière.
- `img` : image. L'adresse à utiliser pour l'image est: `https://i.postimg.cc/MHjjW4wg/moustique.png`. Ajouter l'attribut `width = 40%` pour réduire la taille de celle-ci.
- ajouter les règles CSS aux éléments:
  * `section` : colorier le fond en jaune
  * `span`: ajouter la propriété `vertical-align: top;`

**Remarques :**

* les éléments `h3 et p` se disposent l'un au dessous de l'autre. Ce sont des éléments de type **bloc**.
* les éléments `a, span et img` se disposent sur la même ligne: ce sont des éléments de type **inline**.
* Ce flux pourra être modifié par des règles CSS, que le navigateur interprète au fur et à mesure de la construction de la page.


# Propriétés display des éléments HTML
Le W3C spécifie pour chaque élément HTML quelle devrait être la valeur de son *display*.

Le *display* (affichage) est la propriété qui fait: 

- qu'un élément va occuper 100% de la fenêtre en largeur, et se disposer sous l'élément précédent: **display: block**
- ou que des éléments vont se positionner côté à côte: **display: inline** 
- ou encore, que des éléments sont invisibles: **display: none**


## Elements de type block

Par défaut, les éléments de type block sont affichés par le navigateur avec un saut de ligne au début et à la fin.

Exemples : `<h1>`, `<p>`, `<ul>`, `<table>`, `<hr>`, `<pre>`, `<form>` ...

- L’élément de division du contenu div (ou son remplaçant, `<section>`
- Les éléments structurants article, aside, header, footer, nav et section ...

Le code suivant affichera deux paragraphes, l'un en dessous de l'autre :

`<p>Premier paragraphe.</p><p>Deuxième paragraphe.</p>`

Les éléments de type block peuvent être dimensionnés à l'aide d'attributs.

| propriétés qui fonctionnent | valeurs possibles |
|--- |--- |
| `weight` | 100% est la valeur par defaut des éléments bloc |
| `heigth` | toute valeur possible (%, px, ...) |
| `margin` |  |
| `padding` |  |

<br>

| propriétés qui ne fonctionnent pas |
|--- |
| `vertical-align` |

## Eléments de type inline

Les éléments de type inline se placent normalement l'un à côté de l'autre (pas de saut de ligne).

Exemples : `<strong>`, `<em>`, `<a>`, `<img>`, `<sup>`, `<sub>`...

- Les éléments de formulaire `input`, `label`, `textarea` et de liste de choix `select` ;
- L’élément d’insertion d’images `img` 
- Les éléments `code`, `script`, etc.

D'autres éléments auront une disposition par défaut de type *inline*, mais cette propriété peut être explicitement modifiée, en CSS avec `display`

Remarques : 

- pour les éléments *inline*, on ne pourra pas leur ajouter un attribut de dimension (`width` et `height`). Leur dimension *s'adaptera à leur contenu* mais ne pourra pas être fixée.
- les paragraphes `<p>` et les titres `<h1>` ... ne peuvent contenir que des éléments inline.
- Les éléments inline ne peuvent contenir que des éléments inline.
- plusieurs éléments *inline* disposés sur la même ligne peuvent être alignés verticalement: c'est la propriété css `vertical-align` qui permet ceci.


| propriétés qui fonctionnent | valeurs possibles |
|--- |--- |
| `vertical-align` | top, bottom, middle (voir [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/vertical-align)) |
| `margin` | `left`, `right` |

<br>

| propriétés qui ne fonctionnent pas |
|--- |
| `width`, `height` |
| `margin: top` |
| `margin: bottom` |
| `padding` |

## inline-block
Cette valeur de *display* est utile:

* Pour permettre à un élément de type inline d'avoir une hauteur et une largeur tout en conservant sa nature inline.
* pour afficher des éléments de type block côte à côte.

## Activité 3: sectionnement
Reproduire en HTML et CSS un document représentant l'image suivante :

<figure>
<img src="../images/positionBlocs.png" width = 60% alt="sectionnement d'une page">
<figcaption>exemple de sectionnement d'une page</figcaption>
</figure>

On pourra utiliser un éditeur Web en ligne, comme par exemple <a href="https://htmledit.squarefree.com/" target="blank">squarefree.com</a>, écrire un script qui affichera le bandeau suivant:

**Aide :**

* bien reflechir à l'ordre dans lequel ces éléments vont s'inscrire dans le flux. Utiliser l'imbrication entre éléments pour bien ordonner la construction.* Utiliser les éléments de sectionnement: `header`, `nav`, `section`, `footer`. On pourra consulter la page sur [developper.mozilla.org/](https://developer.mozilla.org/fr/docs/Web/HTML/Element) pour l'explication du rôle de ces éléments. (facultatif).
* Utiliser la règle CSS `display : inline-block;` pour modifier l'affichage des éléments `section` et les disposer côte à côte.

# Proprieté *position* des éléments
## Tuto
Voir le paragraphe [Position des éléments](/docs/NSI/CSS/page2/#position)

## Activité 4: exercices sur langage CSS

<p class="codepen" data-height="488" data-default-tab="html,result" data-slug-hash="yLBjRKy" data-preview="true" data-editable="true" data-user="cotton-t" style="height: 488px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/cotton-t/pen/yLBjRKy">
  Display &amp; Position Exercises</a> by Talia (<a href="https://codepen.io/cotton-t">@cotton-t</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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
    voir page <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element"># Balises principales</a>
  <h3>Disposition des éléments</h3>
    voir page <a href="/docs/NSI/CSS/page2/"># display et position</a> 
 </div>
</div>

[^1]: DOM : Document Object Model
[^2]: web : (www) world wide web : c'est la toile. On y *surfe*, c'est à dire que l'on va y chercher des ressources. C'est un service, comme il en existe d'autres (FTP, mail,...). C'est un système distribué qui opère au dessus d'internet.
[^3]: internet (Internet Network) est un réseau de réseaux, à l'echelle mondiale, qui interconnecte les ordinateurs et permet d'echanger des données. C'est système réparti (l'inverse de distribué) : un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent (un seul paradigme). Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. Un exemple est le web dans lequel toute information apparait comme un document. C'est dons un logiciel élaboré au dessus du réseau.
[^4]: le W3C ou « World Wide Web Consortium ». C'est un groupe de travail, qui fait référence et qui est chargé de définir et de veiller au développement des langages HTML et CSS. Il existe un autre groupe de référence : Le WHATWG ou « Web Hypertext Application Technology Working Group ».
[^5]: langages open source : Ce sont des langages que l’on va pouvoir utiliser sans licence et n’importe qui va (généralement) pouvoir participer à leur développement