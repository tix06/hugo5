---
title: langages web
bookShowToc: false
---

# Le langage HTML
L’Hypertext Markup Language, généralement abrégé **HTML**, est un langage de contenu et de description interprété par le navigateur.

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
Testons nos premières instructions en html.

**Les arguments** pour chaque instruction sont mis entre la balise d’ouverture, par exemple `<h1>` et de fermeture, `</h1>`.

 


> Testez le vous même: Allez dans l'editeur en ligne <a href="https://htmledit.squarefree.com/" target="blank">squarefree.com</a> et copier-coller le script suivant:

```html
<h1>Wanted!</h1>
```

<figure>
  <img src="../images/squarefree.png">
</figure>

> Comment cette instruction est-elle interprétée par le navigateur (partie inférieure de l'écran)?

### **Les balises principales**
Ce sont la plupart du temps des balises de type `<balise>argument</balise>`

| element | exemple d'instruction html | rendu navigateur |
| --- | --- | --- | 
| h1 (titre principal)| `<h1>Mon titre principal</h1>` | <span style="font-size: 32px">Mon titre principal</span> |
| h2 (titre secondaire) | `<h2>Mon titre secondaire</h2>` | <span style="font-size: 24px">Mon titre secondaire</span> |
| p (paragraphe) | `<p>Voici le contenu d'un paragraphe</p>` | &nbsp; &nbsp; Voici le contenu d'un paragraphe |
| div (container) | `<div><p>Contenu</p><p>autre contenu</p></div>` | <p>Contenu</p><p>autre contenu</p> |
| a (lien) | `<a href="https://www.anti-moustique.net/raquette-moustique/">le meilleur antimoustique au monde</a>` | <a href="">le meilleur antimoustique au monde</a> |
| img (image) | `<img src="https://i.postimg.cc/MHjjW4wg/moustique.png">` | <div><img src="../images/moustique.png" style="width:50px"></div> |

<br>
> Testez chacun des **exemples d'instruction en html** dans la page de <a href="https://htmledit.squarefree.com/" target="blank">squarefree.com</a>.

### **Balise de lien hypertexte**
Dans le tableau précédent, la balise `<a href="...">texte à afficher</a>` possède un *attribut* obligatoire: `href="..."`. Cet attribut contient le lien hypertexte vers lequel le navigateur vous mène lorsque vous cliquez sur le *texte à afficher*.


### **Balise image**
**Pour ajouter une image :** on utilise la balise `<img>`:

> `<img src="robot.png">`

Celle-ci doit obligatoirement avoir un attribut *src* suivi du chemin (local ou URL de type http://...) vers le fichier image. Les attributs d'une balise, comme ici `src` permettent de configurer les éléments. 

*Remarque:* La balise `<img>` est une balise orpheline, qui ne possède pas de balise de fermeture: `<img src="lien/vers/l/image.png">`<br>


# Travail pratique
Dans une page html, les instructions `HTML` sont mises dans un fichier dont l'extension est `.html`. Ici, nous utiliserons un editeur en ligne, qui donne directement le rendu visuel de la page, sans avoir à manipuler de fichier.

**Tout le contenu** de la page sera disposé entre les balises `<body> … </body>`



<iframe src="https://trinket.io/embed/html/58318bee1f?runMode=autorun" width="900" height="560" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

*Si l'affichage de l'editeur n'est pas optimal, utiliser le <a href="https://trinket.io/embed/html/58318bee1f#.XNWFAS_M3MJ" target="blank">lien direct sur la page en plein écran</a>*

> Nous  allons **modifier le script** de la page pour obtenir quelque chose ressemblant à celle-ci (mais en français):

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

**3)** Ajouter un nouveau paragraphe (vide): Dans *index.html*, ajouter les balises  `<p>  </p>` AVANT la femeture `</div>`. 

**4)** Ajouter un lien dans ce paragraphe vide `<p>  </p>` vers une nouvelle page du site: 

```html
<a href="lune.html">=> Go to Lune Project</a>
```

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

**3)** Vérifier que le fichier `Lune.html` contient bien la balise suivante dans l'entête du fichier afin de pointer vers le fichier *style.css*. Cette balise doit être placée entre les balise`<head>...</head>` : 

> `<link rel="stylesheet" href="style.css">`

Sinon, ajoutez la.

**4)** Ajouter un lien *Retour* vers la page *index.html*

# Le langage CSS
CSS est le langage qui décrit le style et la mise en forme du document HTML. Il décrit comment les elements HTML doivent être affichés et remplace les règles de style par defaut appliquées par le navigateur.
 
Les déclaration CSS doivent en principe se trouver dans un fichier à extension `.css`. Chaque *déclaration* se rapporte à un type d'*élément* de la page HTML, grâce au *sélécteur*. Et chaque déclaration contient une ou plusieurs *règles*: 
 
> **Déclaration: `sélécteur {propriété: valeur;}`**

> **Règle: `propriété: valeur;`**  

Une déclaration CSS comprend : 

* un sélecteur, qui peut être le nom d'une balise HTML (comme par exemple div dans l'exemple proposé) 
* une ou plusieurs règle(s) contenant 
  * une propriété
  * et la valeur correspondante.

<figure>
  <div>
    <img src="../images/css.png">
    <figcaption>règles CSS associées à tous les éléments p de la page: caractères mis en gras (font-weight: bold) et entourés d'une bordure rouge (border: 2px solid red)</figcaption>
  </div>
</figure>

Observez bien les caractères spéciaux {  } : et ; utilisés pour contenir et séparer les *instructions*.
Ces instructions peuvent être mises à la ligne, ou bien dans une seule ligne : 

```css
p {
  font-weight: bold;
  border: 2px solid red;
}
```


est équivalent à :
```css
p {font-weight: bold; border: 2px solid red;}
```

Ici, TOUTES les balises p utilisées dans le document html héritent des propriétés suivantes : 

* une bordure rouge (red) encadre le texte
* les caractères sont mis en GRAS (bold)

Ces instructions {propriété1 : valeur; } sont référencées sur le site : *[https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)*


> A vous de jouer : Vous allez modifier le fichier de style de votre projet, mais cette fois, à l'aide d'un editeur de texte.

**1)** Téléchargez votre projet sur votre ordinateur. A l'aide du menu en haut à gauche de la fenêtre d'edition, selectionner *Download*:

<figure>
  <div>
  <img src="../images/download.png">
  <figcaption>Download depuis le menu de l'editeur Trinket</figcaption>
</div>
</figure>

<br>

<figure>
  <div>
  <img src="../images/enregistrer.png">
  <figcaption>Choisir l'option Enregistrer sous...</figcaption>
</div>
</figure>

**2)** Atteindre le fichier à l'aide de l'**explorateur** de votre ordinateur.

<figure>
  <div>
  <img src="../images/telechargement.png">
  <figcaption>Dossier téléchargement</figcaption>
</div>
</figure>

**Dézipper** le fichier téléchargé et deplacer son contenu dans vos *Documents*.

<figure>
  <div>
  <img src="../images/extraire.png">
  <figcaption>Clic droit sur le dossier .zip et choisir <i>Extraire tout</i></figcaption>
</div>
</figure>

Normalement, l'explorateur devrait montrer le contenu du nouveau dossier, avec tous les fichiers du projet.

**3)** Sélectionner tous les fichiers d'extensions `.html` et `.css`: Touche <i>Maj</i> enfoncée séléctionner les 3 fichiers. 

On veut les ouvrir avec un editeur de script, comme par exemple *Notepad++*, ou bien *Visual Studio Code*:

<figure>
  <div>
  <img src="../images/editer.png">
  <figcaption>Clic droit: Ouvrir avec Notepad++</figcaption>
</div>
</figure>

<br>

<figure>
  <div>
  <img src="../images/notepad2.png">
  <figcaption>La fenêtre de l'editeur Notepad++</figcaption>
</div>
</figure>

**4)** Choisir parmi les différents onglets celui appelé `style.css`. Vous allez modifiez la mise en forme du texte à l'aide d'une déclaration CSS. Pour modifier les titres de niveau 1 (éléments *h1*) en bleu, et la taille des caractères à 12px, vous saisirez à la suite des autres déclarations:

```css
h1 {
  color : blue;
  font-size : 12 px;
  }
```

D'autres règles peuvent être ajoutées à partir du tutoriel <a href="https://www.w3schools.com/css" target="blank">https://www.w3schools.com/css/default.asp</a>

**5)** Ouvrir alors le fichier *index.html* de votre projet à l'aide du navigateur: depuis l'*explorateur*, faire un clic droit sur `index.html`.

<figure>
  <div>
  <img src="../images/ouvrirAvec.png">
  <figcaption>Choisir Ouvrir avec: Firefox</figcaption>
</div>
</figure>


# Le langage javascript
Le langage javascript va permettre de gérer les évènements de la page : les animations, les données des formulaires, les boutons...

* A l'aide des fonctions de l'editeur *Notepad++*, **créer un nouveau fichier** qui sera nommé `script.js`. Mettre ce fichier dans le MËME dossier que celui contenant votre projet (et donc vos autres fichiers).

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
<ul>
<li><a href="../web3">SNT TP 2: Javascript</a></li>
<li><a href="../web1">Retour: le langage HTML</a></li>
</ul>  
