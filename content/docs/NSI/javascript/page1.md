---
Title : les bases en javascript

---

# Javascript : les bases
## Présentation de la console javascript
Javascript est une implémentation dans le navigateur du langage *Ecmascript*.

Javascript est un langage interprété … par le navigateur, donc côté client.
Pour le vérifier, on peut utiliser la console javascript du navigateur pour tester quelques instructions, et interagir avec la page web en cours.

Sur Chrome, cette console se trouve en ouvrant les outils de développement : 

<figure>
  <img src="../images/image1.png" width ="450px" alt="console javascript Chrome">
  <figcaption>la console javascript dans le navigateur Chrome</figcaption>
</figure>

Choisir alors l’onglet : *Console* et commencer à taper les instructions, une à une, après l’invite >, comme sur l’image suivante : 

<figure>
  <img src="../images/image2.png" width ="450px" alt="E/S">
  <figcaption>entrée / sortie</figcaption>
</figure>

Pour afficher le résultat d’une opération dans la console (équivalent au print en python), on utilise l’instruction `console.log(operation)`.

L’option `filter` de la console devra être sur `Default`
.
Dans la suite du document, on représentera la console de la manière suivante : 

* La ligne in représente ce que l’utilisateur tape à la console.
* La ligne out, ce qui est évalué et retourné par la console, ce qui pour l’image précédente correspond à :

<table>
    <caption>représentation des entrées/sorties de la console</caption>
    <tr>
        <th scope="row">IN</th>
        <td>1 + 1</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>2</td>
    </tr>
</table>

## javascript dans une page web
Javascript, c’est aussi le langage de script des pages web : on peut aussi : 

* Mettre son code javascript entre les balises `<script>` et `</script>` d’une page HTML. Cette page est construite au fur et à mesure du parcours par l’interpreteur. La partie javascript sera interprétée APRES l’affichage de la page par le navigateur si cet élement script est mis à la fin du document HTML.

* Mettre son code dans un fichier externe : Il faudra d’abord lier le fichier javascript à celui HTML : 
`<script src="monfichierJavascript.js"></script>`

## Principe : le rôle du navigateur et son moteur javascript

<figure>
  <img src="../images/image3.png" width ="450px" alt="interpreteur js">
  <figcaption>l'interpreteur javascript</figcaption>
</figure>

* *Browser :* navigateur. C’est est un logiciel conçu pour consulter et afficher le World Wide Web. Techniquement, c'est au minimum un client http ou https (qui sont des protocoles de communication, définis lors du dernier cours)
* *Web console :* Permet de coder, d’interpréter et d’exécuter du code Javascript directement sur le Browser 
* *Js Engine :* Est intégré dans les Browser. Chaque Browser a son propre interpréteur Javascript qui interprète le code et exécute les scripts associés aux pages Web 

En EcmaScript, on passe la majeure partie de son temps à interagir avec des API fournis par l'environnement d'exécution. En ActionScript c'est Flash (objet flash), en JavaScript dans le navigateur c'est le Document Object Model (objet document).

# Structurer son code
La javascript utilise certains symboles pour structurer : 

* à chaque ligne on met un point-virgule pour séparer les instructions
* les accolades { et } séparent les blocs de code
* Commenter son code : // en debut de ligne  ou bien /* texte entre les 2 separateurs */

```
//Commentaire sur une ligne 
/*Commentaire sur 
Plusieurs ligne */
```

Les indentations, comme en python ne sont pas obligatoires pour structurer le code, mais fortement conseillées pour permettre une meilleure lisibilité.

# Les 3 Data types de bases et le type array
## Les 3 types simples  
Pour déclarer une variable, on utilise le mot clé : `let` (ou bien `var`, mais qui n’est plus préconisé par le w3c)

Par exemple : `let a = 10 ; let b = “toto“ ;`
Le typage des variables se fait alors de manière dynamique, comme en python.
 
* Number : Représente à la fois les entiers et les nombres flottants.
* String : Représente du texte ou des caractères
* Boolean : Seulement 2 valeurs : - vrai (true) – faux (false)

Pour connaître le type d’une variable, on utilise la fonction `typeof(variable)` 

## conversions de types
a.  Convertir en nombre entier : `parseInt(‘valeur’)`
b.  Convertir en nombre flottant : `parseFloat()`
c.  Tester si la valeur est NaN (not a number) : `isNaN()`
d.  Convertir en chaine de caractère : `string(variable)` avec un 'S' majuscule.

## Le type Array
Les tableaux, array, sont des collections d’objets, mis et ordonnés dans une variable unique. On accède à chaque élément du tableau avec son rang. Cette structure de données est assez proche de la liste que l’on a vu en python.

### Déclarer un tableau vide : 2 manières :
`let tab = new Array() ;`

`let tab = [] ;`

### initialiser un tableau :
Pour déclarer et affecter directement des éléments, on fait :

`let fruits = ["Apple","Orange", "Pear"]`

### accéder à un élément du tableau :
(on peut tester ces exemples avec la console)


<table>
    <tr>
        <th scope="row">IN</th>
        <td>alert( fruits[0]) ;</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>"Apple "</td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>alert( fruit[1]) ; </td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>"Orange "</td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>alert( fruit[2]) ;</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>"Pear "</td>
    </tr>
</table>

### méthodes associées aux tableaux :
dimension du tableau (nombre d’éléments)

<table>
    <tr>
        <th scope="row">IN</th>
        <td>tab.length ;</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>3</td>
    </tr>
</table>

### retirer un élément de la fin du tableau
On utilise l'instruction `array.pop()`

<table>
    <tr>
        <th scope="row">IN</th>
        <td>tab.pop() ; </td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>console.log(tab) ;</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>["Apple ", "Orange "]</td>
    </tr>
</table>

### ajouter un élément à la fin
On utilise l'instruction `array.push(nouvel_element)`

<table>
    <tr>
        <th scope="row">IN</th>
        <td>tab.push("Plum ") ;</td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>console.log(tab) ;</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>["Apple", "Orange ", "Plum "]</td>
    </tr>
</table>

# Opérations
## opérateurs de base
On retrouve les opérateurs déjà vus en langage python :

* Opérateurs de base : `+, -, *, /` ainsi que l’opérateur `%` modulo (reste de la division) 
* `**`est l’opérateur exposant :  `2**8`  correspond à 2^8 (à la puissance 8)
* Le symbole d’affectation est le =. Par exemple : 
`let a = 10 ;  // instruction qui declare et affecte 10 à la variable a`

**Question 1 :** Alice a 1 frère et 3 sœurs pour 8 bonbons. Elle voudrait partager les bonbons équitablement. Utiliser des variables pour trouver une solution à son problème.

**Question 2 :** Coder un programme qui permet de savoir l’âge d’Alice (28 ans) en secondes. Réaliser les calculs avec des variables aux noms bien explicites pour les heures, jours, années. Si vous pouvez, utilisez des noms en langue anglaise pour les variables.

## Les opérateurs logiques
est égal `==`, est supérieur ou égal `>=`, inferieur ou égal `<=`, et `&&`, ou `||`, non `!`. On peut aussi utiliser `and`, `or`, `not` pour ces 3 derniers opérateurs.

# Fonctions
## function .. return
Une fonction se définit avec le mot clé function selon la structure : 
function nom_de_la_fonction(parametre1, parametre2, …) {
  bloc de code
  return valeur_à_retourner ;
}

Par exemple, pour programmer une fonction nommée f qui retourne le résultat du calcul : 
$$f : n \mapsto 3n+3$$

<table>
    <tr>
        <th scope="row">IN</th>
        <td>function f(n) { <br>    return 3*n+3 ; <br>}</td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>f(2)</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>9</td>
    </tr>
</table>

## procédure
On peut réaliser une fonction qui ne calcule rien, une procédure : 

Exemple : pour afficher 5 petits chats dans la console : 

<table>
    <tr>
        <th scope="row">IN</th>
        <td>function drawCats (howManyTimes) {<br>     for (let i = 0 ; i < howManyTimes; i++) {<br>         console.log(i + ” =^.^=”);<br>    }<br>};</td>
    </tr>
    <tr>
        <th scope="row">IN</th>
        <td>drawCats(5);</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>=^.^=<br>=^.^=<br>=^.^=<br>=^.^=<br>=^.^=</td>
    </tr>
</table>

La boucle bornée for est expliquée dans le chapitre suivant…


# Contrôler le flux du programme
## Conditions : if .. else .. : 

```
if (condition) {
bloc1 ;
       } else {
    bloc2 ;
       }
```

*Exemple :* le programme suivant compare la somme de 2 entiers avec 4 et renvoie below ou over, selon le resultat : 

```
let a = 1,b = 2 ;
if (a+b<4){
result="below";
       } else {
result="over";
      }
```

## Boucles bornées
### Boucle for : 

```
for (let variable; condition à realiser pour boucler; augmenter la variable) {
    bloc de code à realiser ;
}
```

Par exemple, pour afficher toutes les valeurs de 0 à 10 dans la console, on fait : 

```
for (let i =0; i<=10; i++){
    console.log(i);
}
```

### Parcourir les éléments d’un tableau : 2 manières
En utilisant la méthode `fruits.lenght` : 

<table>
    <tr>
        <th scope="row">IN</th>
        <td>for (let i =0; i&ltfruits.length; i++){<br>console.log(fruits[i]);<br>}</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>Apple<br>Orange<br>Plum</td>
    </tr>
</table>

<table>
    <tr>
        <th scope="row">IN</th>
        <td>for (let i of fruits) {<br>console.log(fruits[i]);<br>}</td>
    </tr>
    <tr>
        <th scope="row">OUT</th>
        <td>Apple<br>Orange<br>Plum</td>
    </tr>
</table>

### Boucles non bornées : while :
syntaxe : 

```
while (condition à realiser pour boucler) {
    bloc de code
}
```

Par exemple, pour afficher les entiers de 0 à 2 : 

```
let i = 0 ;
while (i<3) {
    console.log(i) ;
    i ++ ;
}
```

La grande différence avec une boucle bornée, c’est que l’instruction qui modifie la variable i est DANS le bloc de code. Si celle-ci est mal écrite, la boucle risque d’être exécutée indéfiniment (à éviter bien sûr).

