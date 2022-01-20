---
Title: introduction à CSS
---


# Bases en css
les fondamentaux du css: cascade et héritage: [MDN](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

Les sigles « CSS » sont l’abréviation de « Cascading StyleSheets » ou « feuilles de styles en cascade » en français.

Le CSS vient résoudre un problème bien différent du HTML : en effet, le HTML sert à définir le *contenu et la structure* d’une page, à leur donner du sens. 

Le CSS, lui, va servir à mettre en forme les différents contenus définis par le HTML en leur appliquant des styles.

Si votre navigateur affiche par défaut les contenus textuels que vous avez déclaré comme des titres en HTML en grand et en gras et à l’inverse les paragraphes en plus petit c’est justement parce que chaque navigateur possède sa propre feuille de styles. En fournissant nos styles CSS pour les différents contenus de notre page, nous allons donc pouvoir définir l’apparence de ceux-ci puisque les styles que nous allons fournir vont être considérés comme prioritaires par rapport à ceux du navigateur. C'est le principe du style en cascade (CSS)

## Une déclaration CSS
Une règle typique est composée de trois parties :

- un **sélecteur**,
- une **propriété**,
- une **valeur**



<div style="text-align:center; font-weight: bold;">selecteur { propriete: valeur; }</div>

La **valeur** de la propriété se met après le séparateur `:`.

Ces règles deviennent des *déclarations* lorsque celles-ci comprennent plusieurs couples propriété-valeur :Les règles sont alors séparées par un point-virgule `;`, dans la même accolade:

```css
selecteur {
  propriete 1: valeur;
  propriete 2: valeur;
}
```
*Exemple:*

<figure>
  <div>
    <img src="../images/css.png">
    <figcaption>règles CSS associées à tous les éléments p de la page: caractères mis en gras (font-weight: bold) et entourés d'une bordure rouge (border: 2px solid red)</figcaption>
  </div>
</figure>


Le selecteur fait référence à un ou plusieurs éléments du document.

## Selecteurs
Pour pouvoir appliquer un style à un contenu, il va déjà falloir le cibler, c’est-à-dire trouver un moyen d’indiquer qu’on souhaite appliquer tel style à un contenu en particulier.

En classe de SNT, le sélecteur, c'est l'élement HTML que l'on veut cibler.

## Où met-on les déclarations CSS?
L'élément `<style>` peut être inclus dans l'élément `<head>` ou dans l'élément `<body>` du document et les styles seront appliqués. Toutefois, il est recommandé de placer les styles dans l'élément `<head>` afin de clairement séparer la présentation du contenu autant que possible. 

*Exemple:*

```HTML
<head>
  <style>
    p {
        color: #26b72b;
      }
  </style>
</head>

<body>
  <p>Le texte suivant sera affiché en VERT, qui est codée en hexadécimal avec #26b72b.</p>
</body>
``` 
Le rendu dans le navigateur est alors:

<div style="width:50%; border:solid;">
 <p style ="color:#26b72b; ">Le texte suivant sera affiché en VERT, qui est codée en hexadécimal avec #26b72b.</p></div>

La méthode idéale consiste toutefois à utiliser des feuilles de style dans des fichiers externes et de les appliquer au document grâce à des éléments `<link>`.


# Règles principales
## Règles appliquées aux textes
Tutoriel complet: [developer.mozilla.org](https://developer.mozilla.org/fr/docs/Learn/CSS/Styling_text/Fundamentals)

Quelques propriétés CSS relatives aux textes


| paramètre | valeurs possibles | effet |
|--- |--- |--- |
| color | blue, yellow, red, ... | colorie le texte selon le nom *anglais* de la couleur |
| color | rgb(0..255, 0..255, 0..255) | selon le code RGB sur un octet chacun |
| color | #0..F0..F0..F | selon le code RGB exprimé en hexadecimal, sans separateur |
| background-color | idem color | couleur de fond |
| font-family | arial, courier new... | choix de la police de caractères |
| font | italic 12 pt sans-serif | informations complémentaires pour la police |
| text-align | center, left, right, justify | alignement du texte |
| font-weight | bold | mettre en gras |

## Règles relatives aux listes

Voici un exemple de page qui liste les différentes missions de la NASA:

```HTML
<head>
  <style>

  </style>
</head>

<body>
  <h2>NASA Notable Missions</h2>
  <ul>
    <li>Apollo</li>
    <li>Hubble</li>
    <li>Chandra</li>
  </ul>
</body>
```

<div style="width:70%; border:solid;">
<h2>NASA Notable Missions</h2>
<ul>
    <li>Apollo</li>
    <li>Hubble</li>
    <li>Chandra</li>
  </ul>
</div>

On peut ajouter une déclaration CSS dans le début du fichier. Par exemple pour enlever les marqueurs de liste de la manière suivante:

```HTML
<head>
  <style>
    li {list-style: none;}
  </style>
</head>
```

<div style="width:70%; border:solid;">
<h2>NASA Notable Missions</h2>
<ul>
    <li style="list-style: none;">Apollo</li>
    <li style="list-style: none;">Hubble</li>
    <li style="list-style: none;">Chandra</li>
  </ul>
</div>

*Résumé*

| paramètre | exemples de valeurs possibles | effet |
|--- |--- |--- |
| list-style | square | <img src="../images/listes1.png"> |
| list-style | none | <img src="../images/listes2.png"> |

[Tutoriel sur les listes: developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/CSS/list-style)

# Liens
<ul>
<li><a href="../web1">SNT le langage HTML</a></li>
<li><a href="../web2">SNT TP 1: HTML et CSS</a></li>
<li><a href="../web3">SNT TP 2: Javascript</a></li>
</ul>
