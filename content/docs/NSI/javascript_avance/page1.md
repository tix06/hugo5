# Portée d'une variable
## portée locale et globale
La « portée » d’une variable désigne l’espace du script dans laquelle elle va être accessible. En effet, toutes nos variables ne sont pas automatiquement disponibles à n’importe quel endroit dans un script et on ne va donc pas toujours pouvoir les utiliser.
En JavaScript, il n’existe que deux espaces de portée différents : l’espace global et l’espace local. Pour rester très simple, l’espace global désigne l’entièreté d’un script à l’exception de l’intérieur de nos fonctions. L’espace local désigne, à l’inverse, l’espace dans une fonction.

## let et var
Lorsqu’on utilise la syntaxe `let` pour définir une variable à l’intérieur d’une fonction en JavaScript, la variable va avoir une portée dite « de bloc » : la variable sera accessible dans le bloc dans lequel elle a été définie et dans les blocs que le bloc contient.

En revanche, en définissant une variable avec le mot clef `var` dans une fonction, la variable aura une portée élargie puisque cette variable sera alors accessible dans tous les blocs de la fonction. (*utilisation non recommandée*)

# Les fonctions de callback

## Rappel sur les fonctions
On crée une fonction personnalisée grâce au mot clef `function` ;

### fonction nommée
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

{{< img src="../images/pileExecution.png" alt="pile d" caption="pile d'execution" >}}
C'est un premier pas vers la *recursivité*, ou une fonction s'appelle elle-même, souvent un nombre important de fois. La pile d'execution s'agrandit jusqu'au dernier appel de fonction. L'opération est alors executée, et l'ordinateur peut alors remonter la pile d'execution en propageant les résultats dans les arguments en attente.

> *Exercice : Ecrire une fonction du même type de celle utilisée en exemple, et qui créé une pile d'execussion avec 3 niveaux. Cette fonction s'appellera elle-même, tout comme la fonction passée en argument. Représenter également la pile d'execution.* 

### fonction anonyme
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

```javascript
let boiteG = document.getElementById("gauche");
let boiteD = document.getElementById("droite");

/*on utilise la fonction addEventListener() qui sert
de gestionnaire d'evenement. Ici on demande à executer 
la fonction anonyme passée en 2e argument lors de 
l'evenement "click" sur l'une des boites GAUCHE/DROITE
*/
boiteG.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de GAUCHE'});
boiteD.addEventListener('click', function(){document.getElementById("alerte").innerHTML = 'Clic sur la boite de DROITE'});
```





## fonction de rappel (ou callback)
En javascript, pour réaliser des appels de fonction à intervalle de temps régulier, il faut utiliser un mécanisme de *callback*, unique solution pour ne pas bloquer une exécution lorsque celle-ci est trop *couteuse*.

Par exemple, le programme suivant devrait établir un décompte de 200 à 0, mais en réalité, celui-ci  va entrainer un **blocage du système** : (**ne pas tester**)


```html
<html>
    <div id="bip" class="display"></div>
<script >
     function bip () {
         document.getElementById("bip").innerHTML = counter + " secondes restantes";
         bip();
     }
     bip()
</script>

```

La pile d'appel est alors : 

| pile d'appel |
| --- |
| main() |
| bip() |
| bip() |
| ... |

Une fonction de rappel (aussi appelée *callback* en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action. On verra ci-dessous les méthodes `setInterval`, `setTimeout`et `requestAnimationFrame()`

### méthode setInterval()
On peut utiliser la méthode `setInterval` de l'objet window qui déclenche un compteur et appelle une fonction callback à intervalle de temps régulier (développé plus loin dans le paragraphe suivant).

**Testez le :**




```javascript
<button onclick="start()">Lancer le decompte</button>
<div id="bip" class="display"></div>

<script>
let counter = 10; // on peut mettre un nombre plus grand, mais le décompte est plus long
let intervalId = null;

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



Les méthodes `setTimeout` et `setInterval` sont des méthodes de l'objet Window. 
Ce sont des processus indépendants qui, quand ils sont lancés par une instruction, ne bloquent pas l'affichage du reste de la page ni les actions de l'utilisateur.
Elles permettent de placer dans la pile des prochaines fonctions à exécuter une fonction particulière. Javascript exécute cette pile fonction après fonction dans l'ordre de la pile. 

* `SetTimeout` indique un délai avant exécution
* `setInterval` déclenche une opération à intervalles réguliers
* `ClearTimeout` interrompt le décompte de setTimeout et de setInterval

Syntax : 
`let intervalID = scope.setInterval(function ou bloc de code, [delay (en ms)]);`

Ce compteur de temps est identifié de manière unique : `window.setInterval` renvoie une valeur numérique qui permet cette identification.

Une fonction lambda peut être un argument.

### Méthode `requestAnimationFrame()`
C'est aussi une méthode de *callback* pour realiser une animation en javascript.

La méthode requestAnimationFrame() de l'interface Window indique au navigateur qu'on souhaite exécuter une animation. Elle demande au navigateur d'appeler une fonction de rappel (callback en anglais) fournie par l'utilisateur·ice avant le prochain rafraîchissement.

Dans cet exemple, issu du site [MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame), un élément est animé pour 2 secondes (2000 millisecondes). L'élément se déplace à une vitesse de 0.1px/ms vers la droite. Sa position relative (en pixels CSS) peut donc être calculée en fonction du temps écoulé entre le début de l'animation (en millisecondes) et 0.1 * ecoule. La position finale de l'élément est située 200px (0.1 * 2000) à droite de sa position initiale.

```javascript
const element = document.getElementById("un-element-a-animer");
let debut;

function iteration(chrono) {
  if (debut === undefined) {
    debut = chrono;
  }
  const ecoule = chrono - debut;

  // Math.min() est utilisée ici afin de s'assurer que l'élément s'arrête
  // exactement à 200px
  const compteur = Math.min(0.1 * ecoule, 200);
  element.style.transform = `translateX(${compteur}px)`;
  if (compteur < 200) {
    requestAnimationFrame(iteration);
  }
}

requestAnimationFrame(iteration);
```

**Complément:** Animation avec un cheval au galop: [tuto](../page3)


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
  <p id="myP">Un peu de texte,{{< a caption="Un peu de texte, " >}}</div>
``` 

Ouvrir alors la page pour l'afficher dans le navigateur.

Cette page a alors l'arbre de DOM suivant qui lui est associé : 

{{< img src="../images/dom.png" alt="arbre du DOM" caption="arbre du DOM" >}}
Le premier enfant de `<p>` est un nœud textuel, alors que le dernier enfant est un élément `<strong>`. Cet élément `<strong>` possède pour noeud enfant un noeud textuel dont le contenu et *une portion en emphase*

Dans la console, saisir une à une les instructions suivantes : (sans les commentaires)
```
let paragraph = document.getElementById('myP'); // pour stocker le noeud parent.
let first = paragraph.firstChild; // parcours de l'arbre jusqu'au 1er enfant
alert(first.nodeValue); // pour récuperer le contenu du noeud textuel
```

{{< img src="../images/dom1.png" alt="arbre du DOM" caption="contenu textuel du premier enfant" >}}
Puis :
```
let last = paragraph.lastChild;
alert(last.firstChild.data); // pour recuperer le contenu textuel de la balise
```

{{< img src="../images/dom2.png" alt="arbre du DOM" caption="contenu textuel du dernier enfant" >}}
On peut réaliser cette dernière manipulation en ayant recours à la liste de tous les enfants de `paragraph`: en écrivant `paragraph.childnodes` 

{{< img src="../images/dom3.png" alt="arbre du DOM" caption="liste de tous les enfants du noeud parent" >}}
Puis on affiche son contenu textuel

{{< img src="../images/dom4.png" alt="arbre du DOM" caption="contenu textuel de last" >}}
Pour finir, on peut modifier à volonté les éléments textuels en modifiant la valeur renvoyée par `.data` ou `.nodeValue` : 

{{< img src="../images/dom5.png" alt="arbre du DOM" caption="modification du contenu textuel de last" >}}

# Compléments et lien
* [suite du cours](../page2): gestion des evenements, TP space invader
* TP guidé sur la realisation d'un compte à rebours: [Tuto complet](https://www.dewep.net/realisations/compte-a-rebours-en-javascript) (date un peu)


