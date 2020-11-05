---
title : HTML CSS
bookShowToc: false
---

# Document Web
## Contenu et Structure
Le contenu des documents Web est rédigé en langage HTML (acronyme de Hypertext Markup Language). HTML est un langage interprété (par le navigateur). C'est un langage de description qui gère le contenu (le texte et les images), en ajoutant des éléments de structure, comme par exemple:

* mettre le texte dans un paragraphe
* mettre du texte en relief
* insérer un hyperlien sur le texte
* mettre un titre à la page, au paragraphe
* ...

<figure>
  <a href="">
    <a href="https://vimeo.com/138623721">
    <img src="../images/contenustructure.png">
    <figcaption>Lire la video depuis 20' => 1min40'</figcaption>
</a>
</figure>



## Les éléments en HTML
### Balises
Les élements sont décrits par des balises.

Toute balise ouverte doit être refermée. 

Des balises comme `<head>` constituées d'une balise ouvrante et d'une balise fermante, elles s'utilisent comme des *parenthèses* et peuvent être imbriquées. Une mauvaise imbrication de balises constitue une erreur.

Par exemple: Une imbrication **correcte**:

```html
<body>
    <div>  
      <h1>Wanted!</h1>
    </div>
</body>
```

Une imbrication **non correcte**:

```html
<body>
    <div>  
      <h1>Wanted!</h1>
    
</body>
</div>
```

Il existe une hiérarchie entre ces balises. 
Dans l'exemple qui suit, on peut lire dans le script html que la balise `html` contient celles `head` et `body`. `html` est donc une balise parente de `head` et `body`. On peut représenter ces liens de parentée avec le diagramme suivant:

<figure>
  <div>
  <img src="../images/squelette.png">
</div>
</figure>

**Script complet:**

```html
<html>
  
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
  
    <div>  
      <h1>Wanted!</h1>
      <h3>Have you seen this robot?</h3>
      <img src="robot.png">
      <p>Description: Height: 30cm, Colour: purple and orange, Arms: 4</p>
      <p>If you have any information, please contact 6207 332 2310</p>
    </div>
    
  </body>
  
</html>
```

> **Exercice:** A l'aide du script complet, poursuivre le diagramme représentant la hierarchie entre ces balises.

# Lien vers la suite du TP
   
      
<input type="button" class="btn btn-lg" value="Partie 2: HTML et CSS" onclick="window.location.href = '../web2/index.html'">
      


<input type="button" class="btn btn-lg" value="Retour" onclick="window.location.href = '../web/index.html'">

# Lien vers l'exploration d'une page wikipedia
<a href="https://frederic-junier.org/SNT/Theme1_Web/SNT_Activite3_Web.html">Voir l'exercice 1 de la page du site de Frederic Junier</a>