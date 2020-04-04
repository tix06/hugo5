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
var myFather = new Person("John","Doe",50,"blue");


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

## prototypes
Dans l'exemple précédent, le constructeur est `Person()`.
Une fois celui-ci définit, on pourra toujours lui ajouter des propriétés et méthodes. Par exemple, une méthode `bonjour` en faisant : 
```
Person.prototype.bonjour = function(){
  alert('Hello, my name is ' + this.firstname + ', I am , + this.age + ' years old');
}
```
On ajoute ainsi une nouvelle méthode à l'objet `prototype` contenu dans le constructeur `Person()`. 
Définir des propriétés et des méthodes dans le prototype d’un constructeur nous permet ainsi de les rendre accessible à tous les objets créés à partir de ce constructeur sans que ces objets aient à les redéfinir.

Pour avoir le code le plus clair et le plus performant possible, on définit généralement les propriétés des objets (dont les valeurs doivent être spécifiques à l’objet) au sein du constructeur et les méthodes (que tous les objets vont pouvoir appeler de la même façon) dans le prototype du constructeur.

Un constructeur peut parfois venir lui-même d'un autre constructeur. Il aura alors lui aussi hérité des méthodes du prototype de son constructeur.

Il existe un constructeur appellé `Object()` va être le parent de tout objet en JavaScript et il possède aussi une propriété prototype.

## Exemple avec un petit élément de jeu d'arcade

Chacun des objets aura alors des propriétés de postionnement, et deux options d'affichage : visible ou caché.
Commençons par programmer le constructeur et les attributs dont héritera l'objet. Dans le fichier `jeu.js`, mettre les lignes de code : 
### Le constructeur Sprite
```
function Sprite(filename, left,top){
	this._node = document.createElement("img");
	this._node.src = filename;
	this._node.style.position="absolute";
	this._node.style.height="100px";
	this._node.style.width="auto";
	this._node.style.left=left;
	this._node.style.top=top;
	document.body.appendChild(this._node);
}
```
*Explications:*
`function Sprite(filename, left,top){` : C'est une fonction de creation d'objets (contient des this et commence par majuscule)
`Sprite`  = l'element à créer
`this` = l'objet lui meme et  `_node`  sa propriete que l'on créé, on modifie les attributs que l'on avait définis de maniere statique dans le premier document html.

On peut déjà positionner l'objet à l'écran en écrivant dans la partie `<script>` de la page html : 
`let vaisseau = Sprite('ship.png',100,100);`
Ce qui devrait fabriquer un objet *vaisseau*, et ajouter un nouvel élément sur la page : l'image du vaisseau à la position 100px,100px.


### Les propriétés de (re)positionnement
Enlever l'accolade finale du constructeur et ajouter :
```
Object.defineProperty(this,"left", {
	get: function(){
		return this._left;
	},
	set: function(value){
		this._left=value;
		this._node.style.left=this._left+"px";
	}
});
```
`Object.defineProperty` permet de definir une propriété à l'objet que l'on a créé : on passe l'objet avec l'argument `this`

	une propriete est un ensemble de 2 methodes : 

* une methode `get` d'acces en lecture.
* une methode `set` d'acces en ecriture
Remarquer que l'on utilise `_left`pour le nommage d'une prorieté qui reste privée (locale) dans ce constructeur.


Cette methode, on va alors y acceder avec le nom de propriete `left`: 

On fait par exemple dans le script de la page principale : 
`vaisseau.left = 400;` 
Le signe `=` va indiquer que l'on invoque la propriété `left`en *ecriture* (on dit que l'on invoque le *setter*), et cela va modifier l'attribut css `style avec la nouvelle règle `left : 400px`. 
Rafraichissons la page.	
Dans la console : explorons les attributs de l'élément associé à l'objet `vaisseau` : 
On peut alors vérifier les valeurs prises pour les propriétés CSS des attributs.
```
> vaisseau._node.style
< CSSStyleDeclaration {0: "position", 1: "height", 2: "width", 3: "left", 4: "top", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
> vaisseau._node.style["height"]
< "100px"
```

On sait maintenant positionner horizontalement le vaisseau.
Avec de nouvelles déclarations dans le même format, on peut aussi : 
* positionner verticalement (propriete CSS `top`)
* modifier la propriete CSS `display` dont les valeurs possibles sont : 
	* none : n'affiche pas
	* block : affiche

# Gestion des évènements
On ajoute un gestionnaire d'evenements lié aux touches appuyées avec : 
`document.onkeydown = function (event) {`

lorsque l'on appuie sur une touche, cela genere un evenement "event" et appelle une fonction avec le parametre l'un des attributs possibles de `event` est `keyCode` : comme ici, l'evenement est lié aux touches appuyées, on peut demander le keyCode de ces touches : 

* f : 70
* flèche droite : 39
* flèche gauche : 37
* s : 83
* space : 32

On peut alors déplacer un élément de la page en modifiant ses attributs de positionnement, directement dans cette même fonction.

# Portée d'une variable
## portée locale et globale
La « portée » d’une variable désigne l’espace du script dans laquelle elle va être accessible. En effet, toutes nos variables ne sont pas automatiquement disponibles à n’importe quel endroit dans un script et on ne va donc pas toujours pouvoir les utiliser.
En JavaScript, il n’existe que deux espaces de portée différents : l’espace global et l’espace local. Pour rester très simple, l’espace global désigne l’entièreté d’un script à l’exception de l’intérieur de nos fonctions. L’espace local désigne, à l’inverse, l’espace dans une fonction.

## let et var
Lorsqu’on utilise la syntaxe `let` pour définir une variable à l’intérieur d’une fonction en JavaScript, la variable va avoir une portée dite « de bloc » : la variable sera accessible dans le bloc dans lequel elle a été définie et dans les blocs que le bloc contient.
En revanche, en définissant une variable avec le mot clef `var` dans une fonction, la variable aura une portée élargie puisque cette variable sera alors accessible dans tous les blocs de la fonction. 

<style>
		span {
			border-style: solid;

		}
		span:hover{
			cursor: pointer;
			background-color: #ccc;
		}

	</style>
	
	

	