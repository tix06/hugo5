# Portée d'une variable
## portée locale et globale
La « portée » d’une variable désigne l’espace du script dans laquelle elle va être accessible. En effet, toutes nos variables ne sont pas automatiquement disponibles à n’importe quel endroit dans un script et on ne va donc pas toujours pouvoir les utiliser.
En JavaScript, il n’existe que deux espaces de portée différents : l’espace global et l’espace local. Pour rester très simple, l’espace global désigne l’entièreté d’un script à l’exception de l’intérieur de nos fonctions. L’espace local désigne, à l’inverse, l’espace dans une fonction.

## let et var
Lorsqu’on utilise la syntaxe `let` pour définir une variable à l’intérieur d’une fonction en JavaScript, la variable va avoir une portée dite « de bloc » : la variable sera accessible dans le bloc dans lequel elle a été définie et dans les blocs que le bloc contient.
En revanche, en définissant une variable avec le mot clef `var` dans une fonction, la variable aura une portée élargie puisque cette variable sera alors accessible dans tous les blocs de la fonction. 

# Les fonctions

On crée une fonction personnalisée grâce au mot clef `function` ;

## fonction nommée
Une fonction permet d'écrire un morceau de code réutilisable. Pour cela, il faut qu'elle porte un nom. Il suffira, pour réutiliser ce code, d'écrire le nom de cette fonction.

### déclarer et appeler une fonction avec argument
La fonction porte un nom, et peut posseder des *arguments*.

Si une fonction a besoin qu’on lui passe des valeurs pour fonctionner, alors on définira des paramètres lors de sa définition. Lors de son appel, on lui passera des arguments qui prendront la place des paramètres.

*Exemple avec une fonction `fn` qui prend pour argument `n`et qui retourne le résultats d'une opération* : 

```
// declaration
function fn(n){
  return 3*n+2
}
// appel de la fonction avec 2 comme argument
fn(2) 
// retourne 8
```



### utiliser une fonction comme argument 
En javascript, comme pour d'autres langages dits *fonctionnels*, on peut mettre une fonction comme argument d'une autre fonction : 
```
fn(fn(2)) 
// retourne 18
```
Ici, la fonction `fn` est appelée avec pour argument, ... la fonction `fn` elle-même.
On pourrait représenter la pile d'execution de la manière suivante : 

<figure>
<img src="../images/pileExecution.png" width = 40% alt="pile d'execution">
<figcaption>pile d'execution</figcaption>
</figure>

C'est un premier pas vers la *recursivité*, ou une fonction s'appelle elle-même, souvent un nombre important de fois. La pile d'execution s'agrandit jusqu'au dernier appel de fonction. L'opération est alors executée, et l'ordinateur peut alors remonter la pile d'execution en propageant les résultats dans les arguments en attente.

> *Exercice : Ecrire une fonction du même type de celle utilisée en exemple, et qui créé une pile d'execussion avec 3 niveaux. Cette fonction s'appellera elle-même, tout comme la fonction passée en argument. Représenter également la pile d'execution.* 

## fonction anonyme
Les fonctions anonymes sont, comme leur nom l’indique, des fonctions qui ne vont pas posséder de nom.
Généralement, on utilisera les fonctions anonymes lorsqu’on n’a pas besoin d’appeler notre fonction par son nom c’est-à-dire lorsque le code de notre fonction n’est appelé qu’à un endroit dans notre script et n’est pas réutilisé.

On va créer une fonction anonyme de la même façon qu’une fonction classique, en utilisant le mot clef `function`, mais en omettant le nom de la fonction après.

Ici, nous faisons pourtant face à un problème : comment appeler une fonction qui n’a pas de nom ?
On va avoir plusieurs façons de faire en JavaScript. Pour exécuter une fonction anonyme, on va notamment pouvoir :
- Enfermer le code de notre fonction dans une variable et utiliser la variable comme une fonction ;
- Auto-invoquer notre fonction anonyme ;
- Utiliser un évènement pour déclencher l’exécution de notre fonction.

*Exemple 1 : utiliser une variable comme fonction*
```
let alerte = function(){
  alert('Alerte executée par une fonction anonyme');
}
alerte(); // appel de la fonction
```
*Exemple 2 : auto-invoquer la fonction*
Pour créer une fonction auto-invoquée à partir d’une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.
Le couple de parenthèses après la fonction va faire en sorte que la fonction s’appelle elle-même, ce qui donne : 

`(function bonjour(){alert('bonjour !)})()`

une fonction auto-invoquée s’exécutera toujours juste après sa déclaration.


*Exemple 3 : évenement déclencheur*
Le JavaScript permet de répondre à de nombreux types d’évènements : clic sur un élément, pressage d’une touche sur un clavier, ouverture d’une fenêtre, etc.
Pour indiquer comment on veut répondre à tel évènement, on utilise des gestionnaires d’évènements qui sont des fonctions qui vont exécuter tel code lorsque tel évènement survient : 

**Testez le :**

<span id="gauche">GAUCHE</span> 
	<span id="droite">DROITE</span>
<div id="alerte">Cliquer sur l'une des boites</div>

<script>
	let boiteG = document.getElementById("gauche");
	let boiteD = document.getElementById("droite");

	/*on utilise la fonction addEventListener() qui sert
	de gestionnaire d'evenement. Ici on demande à executer 
	la fonction anonyme passée en 2e argument lors de 
	l'evenement "click" sur l'une des boites GAUCHE/DROITE
	*/
	boiteG.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de GAUCHE'});
	boiteD.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de DROITE'});

</script>

```
<!doctype html>
<html>
<head>
	<title>mini programme</title>
	<meta charset="utf-8">
	<style>
		span {
			border-style: solid;

		}
		span:hover{
			cursor: pointer;
			background-color: #ccc;
		}

	</style>
</head>
<body>
	<span id="gauche">GAUCHE</span> 
	<span id="droite">DROITE</span>
   <div id="alerte">Cliquer sur l'une des boites</div>
</body>
<script>
	let boiteG = document.getElementById("gauche");
	let boiteD = document.getElementById("droite");

	/*on utilise la fonction addEventListener() qui sert
	de gestionnaire d'evenement. Ici on demande à executer 
	la fonction anonyme passée en 2e argument lors de 
	l'evenement "click" sur l'une des boites GAUCHE/DROITE
	*/
	boiteG.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de GAUCHE'});
	boiteD.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de DROITE'});
</script>
</html>
```



## fonction de rappel (ou callback)
En javascript, pour réaliser des appels de fonction à intervalle de temps régulier, il faut utiliser un mécanisme de callback, unique solution pour ne pas bloquer une exécution lorsque celle-ci est trop *couteuse*.

Par exemple, le programme suivant devrait établir un décompte de 200 à 0, mais en réalité, celui-ci  va entrainer un blocage du système : (ne pas tester)

```
<html>
    <div id="bip" class="display"></div>
<script >
     function bip () {
         document.getElementById("bip").innerHTML = counter + " secondes restantes";
     }
     
     for (var i = 2000; i >0; i--) {
         bip();
     }
</script>

```
La pile d'appel est alors : 

| pile d'appel |
| --- |
| main() |
| bip() |
| bip() |
| ... |

Une fonction de rappel (aussi appelée *callback* en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

On peut utiliser la méthode `setInterval` de l'objet window qui déclenche un compteur et appelle une fonction callback à intervalle de temps régulier (développé plus loin dans le paragraphe suivant).

**Testez le :**
<button onclick="start()">Lancer le decompte</button>
<div id="bip" class="display"></div>

<script>
var counter = 10; // on peut mettre un nombre plus grand, mais le décompte est plus long
var intervalId = null;

function bip() {
    counter-=1;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }
    	
}

function start(){
  intervalId = setInterval(bip, 500);
}	

function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
  counter = 10;
}
</script>


```
<button onclick="start()">Lancer le decompte</button>
<div id="bip" class="display"></div>

<script>
var counter = 10; // on peut mettre un nombre plus grand, mais le décompte est plus long
var intervalId = null;

function bip() {
    counter-=1;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }
    	
}

function start(){
  intervalId = setInterval(bip, 500);
}	

function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
  counter = 10;
}
</script>
``` 

La nouvelle pile d'appel est alors : 

| pile d'appel |
| --- |
| main() |
| call1() |
| le processus est rendu au document |
| call1() après 500ms |
| le processus est rendu au document |
| ... | 


## méthode setInterval()
Les méthodes setTimeout et setInterval sont des méthodes de l'objet Window. 
Ce sont des processus indépendants qui, quand ils sont lancés par une instruction, ne bloquent pas l'affichage du reste de la page ni les actions de l'utilisateur.
Elles permettent de placer dans la pile des prochaines fonctions à exécuter une fonction particulière. Javascript exécute cette pile fonction après fonction dans l'ordre de la pile. 

* SetTimeout indique un délai avant exécution
* setInterval déclenche une opération à intervalles réguliers
* ClearTimeout interrompt le décompte de setTimeout et de setInterval

Syntax : 
`var intervalID = scope.setInterval(function ou bloc de code, [delay (en ms)]);`

Ce compteur de temps est identifié de manière unique : `window.setInterval` renvoie une valeur numérique qui permet cette identification.

Une fonction lambda peut être un argument

# Manipuler les éléments de la page
## accéder à un élément à l'aide d'un sélecteur
Pour manipuler les éléments d'une page affichée dans le navigateur, on doit *accéder* à cet élément.
Cela peut se faire à l'aide des *ancres* laissées sur ces éléments. On peut les sélectionner, comme en CSS avec leur classe, leur ID ou le nom de la balise. Pour réaliser ceci, on utilise les fonctions suivantes:

- `document.getElementById()` permet de sélectionner un élément html à partir de son id.
- `document.querySelector()` un sélecteur plus générique qui sélectionne les éléments à la manière des sélecteurs css.

*Exemple 1 :* soit un élement avec attribut id='elem' de la page :
On cherche à atteindre cet élément et en modifier la couleur : 
```
let elem = document.getElementById('elem');
elem.style.background = 'red';
```
On met cet élément dans une variable `elem`. Puis on peut modifier ses attributs, comme par exemple celui `style` pour la couleur.


*Exemple 2 :* manipulation des données d'un formulaire et utilisation de `document.querySelector()` : Voir [Lyceum javascript](https://lyceum.fr/1g/nsi/5-interactions-entre-lhomme-et-la-machine-sur-le-web/4-gestion-des-evenements-en-javascript)

## parcourir l'arbre du DOM
La propriété `childNodes` de l'interface `Node` renvoie une liste sous forme de tableau des nœuds enfants de l’élément donné. Le premier nœud enfant reçoit l’indice 0 comme pour tout tableau.
Et pour obtenir l'élément parent d'un noeud, on utilise la propriété `parentElement`.

*Exemple 3 :* 
Vous pouvez tester cet exemple en enregistrant le code *html*  suivant. 

```
<div>
  <p id="myP">Un peu de texte, <a>un lien</a> et <strong>une portion en emphase</strong></p>
</div>
``` 

Ouvrir alors la page pour l'afficher dans le navigateur.

Cette page a alors l'arbre de DOM suivant qui lui est associé : 

<figure>
<img src="../images/dom.png" width = "80%"" alt="arbre du DOM">
<figcaption>arbre du DOM</figcaption>
</figure>

Le premier enfant de `<p>` est un nœud textuel, alors que le dernier enfant est un élément `<strong>`. Cet élément `<strong>` possède pour noeud enfant un noeud textuel dont le contenu et *une portion en emphase*

Dans la console, saisir une à une les instructions suivantes : (sans les commentaires)
```
let paragraph = document.getElementById('myP'); // pour stocker le noeud parent.
let first = paragraph.firstChild; // parcours de l'arbre jusqu'au 1er enfant
alert(first.nodeValue); // pour récuperer le contenu du noeud textuel
```

<figure>
<img src="../images/dom1.png" width = "100%"" alt="arbre du DOM">
<figcaption>contenu textuel du premier enfant</figcaption>
</figure>

Puis :
```
let last = paragraph.lastChild;
alert(last.firstChild.data); // pour recuperer le contenu textuel de la balise
```

<figure>
<img src="../images/dom2.png" width = "100%"" alt="arbre du DOM">
<figcaption>contenu textuel du dernier enfant</figcaption>
</figure>

On peut réaliser cette dernière manipulation en ayant recours à la liste de tous les enfants de `paragraph`: en écrivant `paragraph.childnodes` 

<figure>
<img src="../images/dom3.png" width = "100%"" alt="arbre du DOM">
<figcaption>liste de tous les enfants du noeud parent</figcaption>
</figure>

Puis on affiche son contenu textuel

<figure>
<img src="../images/dom4.png" width = "100%"" alt="arbre du DOM">
<figcaption>contenu textuel de last</figcaption>
</figure>

Pour finir, on peut modifier à volonté les éléments textuels en modifiant la valeur renvoyée par `.data` ou `.nodeValue` : 

<figure>
<img src="../images/dom5.png" width = "100%"" alt="arbre du DOM">
<figcaption>modification du contenu textuel de last</figcaption>
</figure>


# Gestion des evenements
On reprend ici une application du javascript entrevue lors de la présentation des fonctions, avec la gestion du clic de souris sur un des éléments de la page.

La différence cette fois ci, c'est qu'il y aura plusieurs éléments de la page qui sont *cliquables*. Et que tous ces éléments pourront avoir le même comportement : il utiliseront la même fonction lorsqu'on clique dessus. Il utiliseront la même propriété CSS lorsqu'ils sont cliqués.

Le problème est alors : comment détecté l'élément qui est cliqué, afin que lui SEUL devienne rouge lors de l'evenement *clic*.

Ce petit programme va utiliser les trois langages, HTML, CSS et JS : 

HTML
```
<ul class="nav">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
```

CSS
```
li.active {
    color: red;
}
```

JAVASCRIPT
```
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
<ul class="navi">
    <li class='liste'>One</li>
    <li class='liste'>Two</li>
    <li class='liste'>Three</li>
    <li class='liste'>Four</li>
</ul>

<style>
  .liste.active {
    color: red;
}
</style>

<script>
  let selector, elems, makeActive;

selector = '.navi .liste';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (let i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
    this.classList.add('active');
};

for (let i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
</script>

# Objets
Un objet est une entité qui peut être vue comme indépendante et qui va contenir
un ensemble de variables (qu’on va appeler propriétés) et de fonctions (qu’on appellera méthodes). Ces objets vont pouvoir interagir entre eux.

## fonctions et objets
Un objet, en informatique, un **objet** est un ensemble cohérent de données et de fonctionnalités qui vont fonctionner ensemble.

Pour être tout à fait précis, les fonctions prédéfinies en JavaScript sont des méthodes. Une méthode est tout simplement le nom donné à une fonction définie au sein d’un objet.

Par exemple, le JavaScript dispose d’une fonction nommée random() (qui appartient à l’objet Math que nous étudierons plus tard) et qui va générer un nombre décimal aléatoire entre 0 et 1.

## méthode d'un objet
Méthode d’un object = Propriété d’un object dont la valeur est la définition d’une fonction.

```
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

**Testez le :**
<button onclick="identite('firstname')" >user.firstname</button>
<button onclick="identite('fullname')" >user.fullname</button>
<button onclick="identite('getage')" >user.getage</button>
<div id="user" class="display">cliquer</div>

<script>
let user = {
  firstname : "john",
  lastname : "Doe",
  age : 30,
  fullname: function() {
            return this.firstname + " " + this.lastname;
  }
};

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
</script>

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
```
// le constructeur
function Person(first,last,age,eyes){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyescolor = eyes;
}
// construction de l'objet
var myFather = new Person("John","Doe",50,"blue");```
```

**Testez le :**
<button onclick="identite2('Person')" >Person</button>
<button onclick="identite2('myFather')" >myFather</button>
<button onclick="identite2('name')" >myFather.name</button>
<button onclick="identite2('color')" >myFather.eyesColor</button>
<div id="user2" class="display">cliquer</div>

<script>
function Person(first,last,age,eyes){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyescolor = eyes;
}
Person.prototype.hello = function(){
  alert('Hello, my name is ' + this.firstname + ', I am ,' + this.age + ' years old');}
  
var myFather = new Person("John","Doe",50,"blue");
var myMother = new Person("Cindi","Doe",48,"brown");

function identite2(param){
	if (param=="Person"){
	document.getElementById('user2').innerHTML=Person;
	}
	if (param=="myFather"){
	
	document.getElementById('user2').innerHTML='Person {firstname: "John", lastname: "Doe", age: 50, eyescolor: "blue"}';
	}
	if (param=="name"){
	document.getElementById('user2').innerHTML='Doe';
	}
	if (param=="color"){
	document.getElementById('user2').innerHTML='blue';
	}
}
</script>

On pourrait ainsi créer des objets à la chaine, à l'aide d'une seule nouvelle déclaration, en ajoutant par exemple : 
```
var myMother = new Person("Cindi","Doe",48,"brown");
var myBrother = new Person(...
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
<figure>
<img src="../images/myFather.hello.png" width = 60% alt="myFather.hello()">
<figcaption>myFather.hello()</figcaption>
</figure>

<figure>
<img src="../images/myFather.bonjour.png" width = 60% alt="myFather.bonjour()">
<figcaption>myFather.bonjour()</figcaption>
</figure>

<figure>
<img src="../images/myMother.hello.png" width = 60% alt="myMother.hello()">
<figcaption>myMother.hello()</figcaption>
</figure>

<figure>
<img src="../images/myMother.bonjour.png" width = 60% alt="myMother.bonjour()">
<figcaption>myMother.bonjour()</figcaption>
</figure>

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
<a href="../images/ufo.png">faire un clic droit et choisir : telecharger le fichier</a>
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


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
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
	
	

	