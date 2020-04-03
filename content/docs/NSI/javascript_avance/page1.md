# Les fonctions
## fonction nommée
### déclarer et appeler une fonction avec argument
```
function fn(n){
  return 3*n+2
}
fn(2) // retourne 8
```
### utiliser un appel de fonction comme valeur 
C'est un premier pas vers la recursivité...
`fn(fn(2)) // 18`


## fonction anonyme


(A COMPLETER [w3school](https://www.w3schools.com/js/js_function_definition.asp)


## fonction de rappel (ou callback)
En javascript, pour réaliser des appels de fonction à intervalle de temps régulier, il faut utiliser un mécanisme de callback, unique solution pour ne pas bloquer une exécution lorsque celle-ci est trop *couteuse*.

Par exemple, la fonction suivante va entrainer un blocage du système : (ne pas tester)
```
<html>
    <div id="bip" class="display"></div>
<script >
     function bip () {
         document.getElementById("bip").innerHTML = counter + " secondes restantes";
     }
     
     for (var i = 200; i >0; i--) {
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

```
<button onclick="start()">Lancer le decompte</button>
<div id="bip" class="display"></div>

<script>
var counter = 10;
var intervalId = null;

function bip() {
    counter-=1;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }
    	
}

function start(){
  intervalId = setInterval(bip, 1000);
}	

function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
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

## méthode d'un objet
Méthode d’un object == Propriété d’un object dont la valeur est la définition d’une fonction
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

## Constructeur
this dans le constructeur n’a pas de valeur
La valeur de this sera l’object lui-même quand l’object sera créé
```
function Person(first,last,age,eyes){
  this.firstnale = first;
  this.lastname = last;
  this.age = age;
  this.eyescolor = eyes;
var myFather = nex Person("John","Doe",50,"blue");
}
```

## prototypes

(A COMPLETER)

[lien w3school](https://www.w3schools.com/js/js_object_prototypes.asp])

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



