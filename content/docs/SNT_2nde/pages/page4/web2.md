---
title: langages web
bookShowToc: false
---

# Le langage HTML
<!--
L’Hypertext Markup Language, généralement abrégé **HTML**, est le format de données conçu pour représenter les pages web. C'est un langage interprété (par le navigateur). 

C’est un langage de balisage. Ces balises sont la plupart du temps emboitées, avec (ou sans) tabulation. Il existe une hiérarchie entre ces balises.  Exemple :  `<html>` est la balise parente de `<body`, qui est elle même la balise parente de `<div>`, etc...

```html
<html>
    <body>
    
        <div id = "haut_de_page">
            <h1>titre de mon paragraphe</h1>
  
            <p>bonjour, ceci est mon premier paragraphe</p>
        </div>
    </body>
</html>  
```
-->
## Instructions en HTML
Les instructions `HTML` sont mises dans un fichier dont l'extension est `.html`.

**Toutes les instructions** de mise en page seront disposées entre les balises `<body> … </body>`

**Les arguments** pour chaque instruction sont mis entre la balise d’ouverture, par exemple `<h1>` et de fermeture, `</h1>`.

>  `<h1>Wanted!</h1>` 

**Pour ajouter une image :** on utilise la balise `<img>`:

> `<img src="robot.png">`

Celle-ci doit obligatoirement avoir un attribut *src* suivi du chemin (local ou URL de type http://...) vers le fichier image. Les attributs d'une balise, comme ici `src` permettent de configurer les éléments. 

*Remarque:* La balise `<img>` est une balise orpheline, qui ne possède pas de balise de fermeture. 

**Les balises principales :** de type `<balise>argument</balise>`

* `<h1>` : titre principal<br>
  &nbsp; *Exemple d'utilisation:* `<h1>Mon titre principal</h1>` => <span style="font-size: 32px">Mon titre principal</span>

* `<h2>` : titre secondaire<br>
  &nbsp; *Exemple d'utilisation:* `<h2>Mon titre secondaire</h2>` => <span style="font-size: 24px">Mon titre secondaire</span>
* `<h3>` : titre de rang 3, etc... jusqu'à `<h6>`
* `<p> ` : paragraphe<br>
  &nbsp; *Exemple:* `<p>Voici le contenu d'un paragraphe</p>` =><br><br>
  &nbsp; &nbsp; Voici le contenu d'un paragraphe
* `<div>`: est un container qui aide à la mise en page de son contenu
* `<a>  `: lien<br>
  &nbsp; *Exemple d'utilisation:* `<a href="lien/vers/la/page2.html">aller a la page 2</a>`<br>
  &nbsp; &nbsp; <a href="">aller a la page 2</a>

**Balise orpheline:**

* `<img>`: image<br>
  &nbsp; *Exemple d'utilisation:* `<img src="lien/vers/l/image.png">`<br>

  &nbsp; &nbsp; <img src="../images/bigdata.png" width=50px>

## Travail pratique

Testons nos premières instructions en html.


<iframe src="https://trinket.io/embed/html/58318bee1f?runMode=autorun" width="900" height="560" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

*Si l'affichage de l'editeur n'est pas optimal, utiliser le <a href="https://trinket.io/embed/html/58318bee1f#.XNWFAS_M3MJ" target="blank">lien direct sur la page en plein écran</a>*

> Nous  allons **modifier le script** de la page pour obtenir quelque chose ressemblant à celle-ci :

<figure>
  <div>
  <img src="../images/wanted.png">
</div>
</figure>

**1)** Traduire et modifier le texte (*Description*) pour qu'il soit rédigé en français.

**2)** Diminuer la dimension de l'image à 150px: Dans l'onglet *style.css*, ajouter la règle CSS suivante, à la suite de la précédente (donc APRES l'accolade \} ):

```css
img { 
  width: 150px;
}
```

**3)** Ajouter un nouveau paragraphe (vide): Dans l'onglet *index.html*, ajouter une balise enfant `<p>` à celle `<div>`. Penser à ajouter la balise de fermeture `</p>` juste après.

**4)** Ajouter un lien dans ce paragraphe vide vers une nouvelle page du site: `<a href="lune.html">=> Go to Lune Project</a>`

**5)** Créer un nouvel onglet (bouton **+**) que vous renommerez *lune.html*.

## Projet de recrutement lunaire
Dans l'onglet *lune.html*, écrire le script HTML pour obtenir la page suivante:

<figure>
  <div>
  <img src="../images/lune.png">
  <figcaption>lune.html</figcaption>
</div>
</figure>

**Aide:**

**1)** Pour charger l'image dans le projet : bouton de droite
![bouton](../images/bouton.png)


**2)** Puis selectionner l'image : 
![rocket](../images/rocket.png)

Penser à adapter le nom de l'image pour la balise `<img>`.

**3)** Ajouter la balise suivante dans l'entête du fichier afin de pointer vers le fichier *style.css*. Cette balise doit être placée entre les balise`<head>...</head>` : 

> `<link rel="stylesheet" href="style.css">`

**4)** Ajouter un lien *Retour* vers la page *index.html*.

# Compléments sur le langage CSS
 CSS est le langage qui décrit le style et la mise en forme du document HTML. Il décrit comment les elements HTML doivent être affichés et remplace les règles de style par defaut appliquées par le navigateur.
 
 Les règles CSS doivent en principe se trouver dans un fichier avec l'extension `.css`.
 
 

Une déclaration CSS comprend : 

* un sélecteur, qui peut être le nom d'une balise HTML (comme par exemple div dans l'exemple proposé) 
* une ou plusieurs règle(s) contenant 
  * une propriété
  * et la valeur correspondante.

<figure>
  <div>
    <img src="../images/css.png">
  </div>
</figure>

Observez bien les caractères spéciaux {  } : et ; utilisés pour contenir et séparer les instructions.
Ces instructions peuvent être mises à la ligne, ou bien dans une seule ligne : 


```
h1 {
  color : blue;
  font-size : 12 px;
  }
```

est équivalent à :
`h1 { color : blue; font-size : 12px; }`

Ici, TOUTES les balises h1 utilisées dans le document html héritent des propriétés suivantes : 

* la couleur du texte est mise en bleu
* la taille des caractères est mise à 12 px.

Ces instructions {propriété1 : valeur; } sont référencées sur le site : *http://www.w3schools.com/cssref*


> A vous de jouer : Vous allez modifier le fichier de style de votre projet, mais cette fois, à l'aide d'un editeur de texte.

**1)** Téléchargez votre projet sur votre ordinateur. A l'aide du menu en haut à gauche de la fenêtre d'edition, selectionner *Download*:

<figure>
  <div>
  <img src="../images/download.png">
</div>
</figure>

**2)** Atteindre le fichier à l'aide de l'explorateur de votre ordinateur. Dézipper le fichier téléchargé et deplacer son contenu dans vos *Documents*.

**3)** Ouvrir le fichier avec un editeur de script, comme par exemple *Notepad++*.

**4)** Modifiez la mise en forme du texte à l'aide d'une règle CSS. Par exemple, mettre les titres de niveau 1 (éléments *h1*) en rouge...

**5)** Ouvrir alors le fichier *index.html* de votre projet à l'aide du navigateur.


# Le langage javascript
Le langage javascript va permettre de gérer les évènements de la page : les animations, les données des formulaires, les boutons...

* A l'aide des fonctions de l'editeur, **créer un nouveau fichier** qui sera nommé `script.js`. Mettre ce fichier dans le MËME dossier que celui contenant votre projet (et donc vos autres fichiers).

* Ajouter dans ce fichier l'instruction : 

```
function decollage() { 
  alert("c'est parti on decolle !!");}
```

* Puis indiquer l'adresse du fichier javascript : entre les balises `<head>...</head>`, ajouter : 
`<script type="text/javascript" src="script.js"></script>`

* et ajouter un bouton dans la page *lune.html*: juste avant la fermeture de la balise `</div>`, mettre : 
<button onclick="decollage()">s'inscrire</button> avec la balise `<button onclick="decollage()">s'inscrire</button>`


# Prolongement
*S'il vous reste du temps:* ajoutez une **troisième** page à votre projet Web.

Celle-ci pourrait, par exemple, porter sur un sujet lié à l'exploration d'un astre du système solaire pour rester dans le thème des précédentes.

* La page créée pourrait contenir une image (libre de droit si possible).
* Citer les sources utilisées (sites où vous avez trouvé les renseignements, source de l'image)
* La page devra être liée aux autres pages à l'aide de liens hypertextes.


# Liens et compléments
* retour vers la page HTML: présentation
<input type="button" class="btn btn-lg" value="Partie 1: HTML. Présentation" onclick="window.location.href = '../web1/index.html'">
        
* retour vers la page: Documents Web &nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="btn btn-lg" value="Retour" onclick="window.location.href = '../web/index.html'">

* Programmer des animations en javascript : 
<input type="button" class="btn btn-lg" value="Partie 3: Javascript" onclick="window.location.href = '../web3/index.html'">
