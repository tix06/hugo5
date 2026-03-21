---
Title: tuto Space invader
--- 

# Gestion des evenements
On reprend ici une application du javascript entrevue lors de la présentation des fonctions, avec la gestion du clic de souris sur un des éléments de la page.

La différence cette fois ci, c'est qu'il y aura plusieurs éléments de la page qui sont *cliquables*. Et que tous ces éléments pourront avoir le même comportement : il utiliseront la même fonction lorsqu'on clique dessus. Il utiliseront la même propriété CSS lorsqu'on leur affecte la classe `.active`.

Le problème est alors : comment détecter l'élément qui est cliqué, afin que lui SEUL devienne rouge lors de l'evenement *clic*.

Ce petit programme va utiliser les trois langages, HTML, CSS et JS : 


**HTML**

```HTML
<ul class="nav">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
```

**CSS**

```css
li.active {
    color: red;
}
```

**JAVASCRIPT**

```javascript
let selector, elems, makeActive;

selector = '.nav li';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (let i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
    this.classList.add('active');
};

for (let i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
```

Le contenu de la fonction `makeActive` sera expliqué plus loin. En particulier le rôle du mot clé `this`.

**Résultat :** (cliquer sur chacun des éléments de la liste)



# Objets
Un objet est une entité qui peut être vue comme indépendante et qui va contenir
un ensemble de variables (qu’on va appeler propriétés) et de fonctions (qu’on appellera méthodes). Ces objets vont pouvoir interagir entre eux.

## fonctions et objets
Un objet, en informatique, un **objet** est un ensemble cohérent de données et de fonctionnalités qui vont fonctionner ensemble.

Pour être tout à fait précis, les fonctions prédéfinies en JavaScript sont des méthodes. Une méthode est tout simplement le nom donné à une fonction définie au sein d’un objet.

Par exemple, le JavaScript dispose d’une fonction nommée random() (qui appartient à l’objet Math que nous étudierons plus tard) et qui va générer un nombre décimal aléatoire entre 0 et 1.

## méthode d'un objet
Méthode d’un object = Propriété d’un object dont la valeur est la définition d’une fonction.

```javascript
let user = {
  firstname : "john",
  lastname : "Doe",
  age : 30,
  fullname: function() {
            return this.firstname + " " + this.lastname;
  }
};
console.log(user.fullname()); // "john Doe"
console.log(user["fullname"]()); // "john Doe"
console.log(user.fullname); // function() {return this.firstname + " " + this.lastname;}
```
et pour ajouter une méthode à un objet : 
```
user.getage = function () {
  return this.age;
  };
```

<!--
On peut ajouter la fonction et tester en console:

```javascript
function identite(param){
	if (param=="firstname"){
	document.getElementById('user').innerHTML=user.firstname;
	}
	if (param=="fullname"){
	nom = user.firstname + " " + user.lastname;
	document.getElementById('user').innerHTML=nom;
	}
	if (param=="getage"){
	document.getElementById('user').innerHTML=user.age;
	}
}
```
-->

## Constructeur
On souhaite maintenant créer des objets aux propriétés semblables, avec un minimum de code à répéter. On va utiliser pour cela une *fonction constructeur*.

Une *fonction constructeur d’objets* est une fonction qui va nous permettre de créer des objets semblables.

nous allons devoir suivre deux étapes : 

- il va déjà falloir définir notre fonction constructeur 
- ensuite nous allons appeler ce constructeur avec une syntaxe un peu spéciale utilisant le mot clef `new`.

Dans une fonction constructeur, on va pouvoir définir un ensemble de propriétés et de méthodes. Les objets créés à partir de ce constructeur vont automatiquement posséder les (« hériter des ») propriétés (les variables) et des méthodes (les fonctions) définies dans le constructeur.

On définit ici une fonction `Person()`  que l'on va utiliser comme constructeur d’objets. Notez que lorsqu’on définit un constructeur, on utilise par convention une majuscule au début du nom de la fonction afin de bien discerner nos constructeurs des fonctions classiques dans un script.

`this` dans le constructeur n’a pas de valeur.
La valeur de this sera l’object lui-même quand l’object sera créé. 
Pour le dire très simplement, c’est un prête nom qui va être remplacé par le nom de l’objet actuellement utilisé lorsqu’on souhaite accéder à des membres de cet objet.

```javascript
// le constructeur
function Person(first,last,age,eyes){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyescolor = eyes;
}
// construction de l'objet
let myFather = new Person("John","Doe",50,"blue");

```



On pourrait ainsi créer des objets à la chaine, à l'aide d'une seule nouvelle déclaration, en ajoutant par exemple : 

```
let myMother = new Person("Cindi","Doe",48,"brown");
let myBrother = new Person(...
```

## Prototypes
Dans l'exemple précédent, le constructeur est `Person()`.
Une fois celui-ci définit, on pourra toujours lui ajouter des propriétés et méthodes. Par exemple, une méthode `hello` en faisant : 
```
Person.prototype.hello = function(){
  alert('Hello, my name is ' + this.firstname + ', I am ,' + this.age + ' years old');}
```
On ajoute ainsi une nouvelle méthode à l'objet `prototype` contenu dans le constructeur `Person()`. 
Définir des propriétés et des méthodes dans le prototype d’un constructeur nous permet ainsi de les rendre accessible à tous les objets créés à partir de ce constructeur sans que ces objets aient à les redéfinir.

Ce n'est pas la même chose que l'on réalise lorsque l'on ajoute des *propriétés en propre* à un *objet* : 

> *Exemple :*
> Lorsque l'on définit un nouvel objet à partir du constructeur `Person()`:

> `var myFather = new Person("John","Doe",50,"blue");`

> Si on veut lui ajouter une méthode `bonjour`, une *méthode en propre*, on fait : 
> `myFather.bonjour= function(){
  alert('Bonjour, mon nom est ' + this.firstname + ', mon age ,' + this.age + ' ans');}`

> Elle sera alors particulière à myFather, et n'est pas commune avec myMother et myBrother. Alors que celle ajoutée au prototype Person() appelée `hello`sera commune à tous les objets qui utilisent le constructeur Person().

**Testez le :**
Ouvrir la console et testez les instructions suivantes :
{{< img src="../images/myFather.hello.png" alt="myFather.hello()" caption="myFather.hello()" >}}
{{< img src="../images/myFather.bonjour.png" alt="myFather.bonjour()" caption="myFather.bonjour()" >}}
{{< img src="../images/myMother.hello.png" alt="myMother.hello()" caption="myMother.hello()" >}}
{{< img src="../images/myMother.bonjour.png" alt="myMother.bonjour()" caption="myMother.bonjour()" >}}
Pour avoir le code le plus clair et le plus performant possible, on définit généralement les propriétés des objets (dont les valeurs doivent être spécifiques à l’objet) au sein du constructeur et les méthodes (que tous les objets vont pouvoir appeler de la même façon) dans le prototype du constructeur.

Un constructeur peut parfois venir lui-même d'un autre constructeur. Il aura alors lui aussi hérité des méthodes du prototype de son constructeur.

Il existe un constructeur appellé `Object()` va être le parent de tout objet en JavaScript et il possède aussi un objet *prototype*.


# TP : thème jeu d'arcade
On va voir dans ce TP : 

- le positionnement des éléments en CSS
- la création d'éléments d'une page en pur javascript
- les objets en javascript
- les animations en javascript

## Le squelette du fichier game.html
On commence par créer le squelette **html** de notre mini projet. 

- Dans un dossier de votre disque dur, mettre l'image *ufo.png* que vous téléchargerez avec le lien suivant: 

{{< img src="../images/ufo.png" link="../images/ufo.png" >}}

- dans le même dossier, à l'aide d'un éditeur de code comme par exemple notepadd++, créer un nouveau fichier et choisir une extension `.html`

Mettre les lignes de code suivantes:
```
<!doctype html>
<html>
<head>
	<title>mini programme</title>
	<meta charset="utf-8">
<style>

#game{
	position: absolute;
	width:480px;
	height: 400px;
	background-color: rgb(100,100,100);
	overflow: scroll;
}

.alien0 {
   position:absolute;
   left:100px;
   top:100px;
   height:50px;
   width:auto;
}

</style>
</head>

<body>
<div id="game">
	<img class = "alien0" src="ufo.png">
</div>

<script>
/************ on mettra le programme javascript ici ********/
</script>
</body>
</html>
```

Executer le programme (double clic sur le fichier). 
Dans la fenêtre du navigateur devraient s'afficher : 

- un cadre gris qui occupe la largeur de la feuille, le container 
- une image d'alien positionné en haut à gauche.

Le règles relatives au positionnement et dimensions de ces 2 éléments sont mises dans les déclarations CSS du debut de programme, entre les balises `<style>`.

## Le constructeur
Si nous voulons créer plusieurs éléments du même genre (c'est à dire plusieurs aliens), comme nous l'avons vu lors du chapitre précédent, nous allons devoir utiliser un *constructeur*.
Commençons par programmer ce constructeur et les propriétés dont héritera l'objet : Entre les balises `<script>`, ajouter les lignes suivantes :

```
let surface = document.getElementById("game");

	function Sprite(filename, left,top){
	this._node = document.createElement("img");
	this._node.src = filename;
	this._node.style.position="absolute";
	this._node.style.height="50px";
	this._node.style.width="auto";
	this._node.style.left=left+"px";
	this._node.style.top=top+"px";
	this.vitesse = 2;
	surface.appendChild(this._node);
}
let alien1 = new Sprite("ufo.png",200,100);
```
*Explications:*

- on commence par créer une première variable, `surface`, de portée globale. On y met le noeud contenant l'élément `<div id="game>`.
- on écrit les règles du constructeur, que l'on appellera *Sprite()*.
Ce constructeur contiendra 3 paramètres pour sa création: l'adresse de l'image, sa position par rapport au bord gauche *left* et sa position par rapport au bord supérieur *top*.

- `_node`  sera la propriété que l'on créé; elle contiendra le nom de l'élément créé (*img*) ainsi que plusieurs variables. Ces variables seront les différents attributs de l'élément *img*.
- on ajoute une variable pour la vitesse de déplacement du l'alien.
- Et l'instruction qui ajoute l'élément *img* de l'alien au cadre `<div id="game>` 
- la dernière ligne correspond à la construction de l'objet *alien1* à partir de ce constructeur, à la position (200,100).

On peut *rafraichir* la page dans le navigateur. On devrait observer 2 aliens côte à côte. Celui de gauche a été placé avec une instruction en *html*. Mais le 2e, celui de droite, en *javascript*.

> **A vous de jouer :** Placer un autre alien à doite du second, que vous appellerez *alien2*, en utilisant le constructeur *Sprite()*.

## Ajouter les méthode au prototype de Sprite()
A partir des explications vues plus haut (paragraphe *Prototype*), nous allons ajouter des méthodes au constructeur. Les objets *alien1* et *alien2* vont alors en hériter.
### Ajouter au programme javascript
```
Sprite.prototype.posXQuery = function(){
	let chain = this._node.style.left;
	chain = parseInt(chain);
	return chain
}

Sprite.prototype.posX = function(param){
	this._node.style.left=param+"px";
}
```
### La méthode `posXQuery`
On utilise une fonction anonyme qui sera executée lorsque l'on fait, par exemple : (ne pas oublier le parathèses () à la fin de la déclaration pour préciser que l'on veut *executer* la fonction)

`alien1.posXQuery()`

On récupère avec cette fonction la valeur numérique, en pixels, de la position horizontale de l'alien, à partir de ses propriétés CSS. 

### La méthode `posX`
Cette fonction va permettre de (re)positionner l'alien à une nouvelle absisse, mise en paramètre lors de l'appel de la fonction.

Par exemple : 

- pour positionner l'alien à l'abscisse 300px, écrire dans le programme javascript : `alien1.posX(300)`
- pour déplacer l'alien à une abscisse 10px plus à droite, faire : `alien1.posX(alien1.posXQuery()+10)`
- pour ajouter la valeur stockée dans alien.vitesse à l'abscisse actuelle : ` alien1.posX(alien1.posXQuery()+alien1.vitesse)`

## déplacement de l'alien
On veut créer une fonction qui sera utilisable par tous les aliens, et qui modifiera automatiquement leur abscisse en lui ajoutant la vitesse, à chaque appel de cette fonction. Ajouter à la suite du programme :
```
function deplaceX(element){
	if (element.posXQuery()<480 && element.vitesse>0) {
		element.posX(element.posXQuery()+element.vitesse);
	} else if (element.posXQuery()>=480 && element.vitesse>0){
		element.vitesse = -element.vitesse;
}
```

*Explications :* 

- cette fonction nommée *deplaceX* prend en paramètre l'objet pour lequel elle est appelée. Ce paramètre sera *element*.
- comme *element* correspond à un objet construit avec Sprite(), il a hérité des méthodes *posX* et *posXQuery*. On commence par vérifier si l'alien n'a pas encore atteint le bord droit, afin qu'il ne sorte pas de l'écran. Sa vitesse est supposée *positive*, l'alien se déplçant alors vers la droite. Si cette condition est réalisée, on ajoute *element.vitesse* à l'abscisse.
- si l'alien touche le bord droit, on modifie le signe de la valeur de la vitesse, pour que l'alien reparte dans l'autre sens.

> **A vous de jouer :** Ajouter les instructions à cette fonction pour que l'alien se déplace à gauche lorsqu'il a touché le bord droit, puis à droite lorsqu'il a touché le bord gauche.

## animer l'alien
Ajouter les lignes suivantes pour créer une animation continue : 
```
Sprite.prototype.startAnimation = function (fct, interval) {
	var _this=this;
	this._clock=window.setInterval(function(){
		fct(_this);
	},interval);
};
```

Cette nouvelle méthode, lorsqu'elle est appellée pour l'un des aliens, attache un *timer* à l'alien, et appelle à intervalle de temps régulier la fonction `fct` mise en paramètre.

Pour animer l'*alien1*, avec un déplacement toutes les 20ms, on ajoutera à la fin du programme : 

`alien1.startAnimation(deplaceX,20);`

Vous devriez maintenant obtenir un déplacement continu de l'alien de gauche à droite de l'écran.

> **Exercice :** Modifiez ce programme pour obtenir un déplacement aléatoire dans toute la fenêtre, comme sur l'image suivante.

<!--
# Fenêtre de jeu


<div id="game">
	<img class = "alien0" src="../images/ufo.png">
</div>

<script>
let surface = document.getElementById("game");

	function Sprite(filename,left,top){
	this._node = document.createElement("img");
	this._node.src = filename;
	this._node.style.position="absolute";
	this._node.style.height="50px";
	this._node.style.width="auto";
	this._node.style.left=left+"px";
	this._node.style.top=top+"px";
	this.vitesseX = 2;
	this.vitesseY = 2;
	surface.appendChild(this._node);
}

Sprite.prototype.posXQuery = function(){
	let chain = this._node.style.left;
	chain = parseInt(chain);
	return chain
}

Sprite.prototype.posX = function(param){
	this._node.style.left=param+"px";
}

Sprite.prototype.posYQuery = function(){
	let chain = this._node.style.top;
	chain = parseInt(chain);
	return chain
}

Sprite.prototype.posY = function(param){
	this._node.style.top=param+"px";
}

Sprite.prototype.startAnimation = function (fct, interval) {
	var _this=this;
	this._clock=window.setInterval(function(){
		fct(_this);
	},interval);
};

function deplaceX(element){
	if (element.posXQuery()<480 && element.vitesse>0) {
		element.posX(element.posXQuery()+element.vitesse);
	} else if (element.posXQuery()>=480 && element.vitesse>0){
		element.vitesse = -element.vitesse;
	} else if (element.posXQuery()>0 && element.vitesse<0) {
		element.posX(element.posXQuery()+element.vitesse);
	} else if (element.posXQuery()<=0 && element.vitesse<0){
		element.vitesse = -element.vitesse;
	}
}

function deplaceXY(element){
	if (element.posXQuery()<420 && element.vitesseX>0) {
		element.posX(element.posXQuery()+element.vitesseX);
	} else if (element.posXQuery()>=420 && element.vitesseX>0){
		element.vitesseX = -element.vitesseX;
	} else if (element.posXQuery()>0 && element.vitesseX<0) {
		element.posX(element.posXQuery()+element.vitesseX);
	} else if (element.posXQuery()<=0 && element.vitesseX<0){
		element.vitesseX = -element.vitesseX;
	}
	if (element.posYQuery()>0 && element.vitesseY>0) {
		element.posY(element.posYQuery()-element.vitesseY);
	} else if (element.posYQuery()<=0 && element.vitesseY>0){
		element.vitesseY = -element.vitesseY;
	} else if (element.posYQuery()<350 && element.vitesseY<0) {
		element.posY(element.posYQuery()-element.vitesseY);
	} else if (element.posYQuery()>=350 && element.vitesseY<0){
		element.vitesseY = -element.vitesseY;
	}
}

let alien1 = new Sprite("../images/ufo.png",200,100);

//console.log(alien1.posXQuery());

alien1.startAnimation(deplaceXY,20);

</script>

<input type="button" class="btn btn-lg" value="suite du TP : Le jeu Space Invader" onclick="window.location.href = '../../mini_projet_spaceInvader/page1/index.html'">

<style>
	span {
		border-style: solid;

	}
	span:hover{
		cursor: pointer;
		background-color: #ccc;
	}
    #game{
			position: absolute;
			width:480px;
			height: 400px;
			background-color: rgb(100,100,100);
			overflow: scroll;
		}

		.alien0 {
   		position:absolute;
   		left:100px;
   		top:100px;
   		height:50px;
   		width:auto;
		}
	</style>
	
-->	

	