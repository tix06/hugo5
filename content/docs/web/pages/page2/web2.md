---
title: langages web
---

# Le langage HTML

L’Hypertext Markup Language, généralement abrégé **HTML**, est le format de données conçu pour représenter les pages web. C'est un langage interprété (par le navigateur). 

C’est un langage de balisage. Ces balises sont la plupart du temps emboitées, avec (ou sans) tabulation. Il existe une hiérarchie entre ces balise.  Exemple :  `<html>` est la balise parente de `<body`, qui est elle même la balise parente de `<div>`, etc...

```
<html>
    <body>
    <!-- ceci est un commentaire et ne sera pas affiché -->
        <div id = "haut_de_page">
            <h1>titre de mon paragraphe</h1>
            <!-- h1 à h6 implantent des titres de moins en moins importants-->  
            <p>bonjour, ceci est mon premier paragraphe</p>
        </div>
    </body>
</html>  
```

**Toutes les instructions** de mise en page seront disposées entre les balises `<body> … </body>`

**Les arguments** pour chaque instruction sont mis entre la balise d’ouverture, par exemple `<h1>` et de fermeture, par exemple `</h1>`

**Pour ajouter une image :** on utilise la balise `<img>` qui doit obligatoirement avoir un attribut *src* suivi du chemin (local ou URL de type http://...) vers le fichier image.

**Les balises principales :**

* `<h1>` : titre principal
* `<h2>`: titre secondaire
* `<h3>`: titre de rang 3, etc... jusqu'à `<h6>`
* `<p>`: paragraphe
* `<div>`est un container qui aide à la mise en page de son contenu



Allons y : créons notre première page internet ! **Ouvrir le lien Trinket et modifier la page pour obtenir quelque chose ressemblant à celle-ci :**

![recrutement lunaire](../images/lune.png)

Pour charger l'image dans le projet : bouton de droite
![bouton](../images/bouton.png)


Puis selectionner l'image : 
![rocket](../images/rocket.png)

# Le langage CSS
 CSS est le langage qui décrit la style et la mise en forme du document HTML. Il décrit comment les elements HTML doivent être affichés.  
 
 Les règles CSS doivent en principe se trouver dans un fichier avec l'extension .css.
 
 Ajouter la balise suivante dans l'entête pour pointer vers ce fichier. Cette balise doit être placée entre les balise`<head>...</head>` : 
`<link rel="stylesheet" href="style.css">`

Une instruction CSS comprend : 

* un sélecteur, qui peut être le nom d'une balise HTML (comme par exemple div dans l'exemple proposé) 
* une ou plusieurs déclaration(s) contenant des propriétés
* et la valeur pour chacune de ces propriétés. 

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


A vous de jouer : **Modifiez la mise en forme du texte à l'aide de règles CSS.**


# Le langage javascript
Le langage javascript va permettre de gérer les évènements de la page : les animations, les données des formulaires, les boutons...

* Pour démarrer, **créer un nouveau fichier** sur la page avec le bouton + (en haut à droite).

* Ajouter dans ce fichier l'instruction : 

```
function decollage() { 
  alert("c'est parti on decolle !!");}
```

* Puis indiquer l'adresse du fichier javascript : entre les balises `<head>...</head>`, ajouter : 
`<script type="text/javascript" src="script.js"></script>`

* et ajouter un bouton : juste avant la fermeture de la balise `</div>`, mettre : 
<button onclick="decollage()">s'inscrire</button> avec la balise `<button onclick="decollage()">s'inscrire</button>`