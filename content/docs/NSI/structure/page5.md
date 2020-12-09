---
Title : graphes
---

# Graphes : définitions

On appelle **graphe** la donnée d'un ensemble fini V de points (ou sommets du graphe, *vertices* en anglais) et d'un ensemble E de liens entre ces points.

$$G = (V,E)$$

L'ensemble E de liens peut être vu comme une relation **R** sur V &#xD7; V. Il peut être représenté par une matrice d'adjacence.

* Lorsque cette relation est symétrique (c'est à dire que l'existence d'un lien entre un sommet s<sub>1</sub> et un sommet s<sub>2</sub> est réciproque) le graphe est dit **non orienté**. Un lien est appelé une **arête**.



* Lorsque cette relation n'est pas symétrique, le graphe est dit **orienté**. On parle alors *d'arc* entre deux sommets.

<figure>
  <img src="../images/fig54.png" alt="graphe orienté/non orienté">
<figcaption>graphe orienté/non orienté</figcaption>
</figure>

Un **chemin** C est une **suite consécutive d'arêtes**: C = {s<sub>0</sub>s<sub>1</sub>, s<sub>1</sub>s<sub>2</sub>, ..., s<sub>k-1</sub>s<sub>k</sub>} avec C &sub; E.


Des **poids** peuvent être associés aux liens d'un graphe, par exemple pour représenter la distance. Il s'agit alors d'un **graphe pondéré**.

Un graphe peut servir à modéliser un reseau d'ordinateurs, un reseau social, les distances entre villes par la route...

Lorsqu'un graphe non orienté est en *un seul morceau*, c'est à dire lorsqu'il existe pour tous sommets s<sub>1</sub> et s<sub>2</sub> un chemin les reliant, le graphe est dit **connexe**.

<figure>
  <img src="../images/.png" alt="graphes connexe/non connexe">
  <figcaption>graphes connexe/non connexe</figcaption>
</figure>


Et lorsqu'un chemin mène d'un sommet s à lui-même, on parle de **cycle**.

Des **poids** peuvent être associés aux liens d'un graphe, par exemple pour représenter la distance. Il s'agit alors d'un **graphe pondéré**.


<figure>
  <img src="../images/.png" alt="exemple de graphe pondéré">
  <figcaption>exemple de graphe pondéré</figcaption>
</figure>

Et lorsqu'un chemin mène d'un sommet s à lui-même, on parle de **cycle**.


<figure>
  <img src="../images/.png" alt="cycle dans un graphe">
  <figcaption>cycle dans un graphe</figcaption>
</figure>

## Choisir la structure de donnée adaptée

> *Question:* Pour chacun des exemples suivants, choisir le type de graphe adapté parmi: graphe orienté/non orienté, pondéré, non connexe, sans cycle. Précisez également ce que représentera un *sommet*, et ce qui sera une *arête*.

* un reseau de villes reliées par des routes, comportant l'information de leur longueur (en km). Toutes les villes sont supposées être reliées par au moins une route. Ces routes sont toutes en double sens.
* un reseau social de type Facebook, où les participants ont des liens d'*amitié* entre-eux. Ce lien est réciproque (si Marcel est ami avec Justine, alors Justine est aussi amie avec Marcel). Les sous-reseaux ne sont pas tous reliés entre eux. (Il existe au moins deux groupes A et B complètement indépendants: aucune des personnes de A n'est amie avec celles de B).
* un reseau social de type Twitter: les participants ont des *folowers*. Cette relation n'est pas réciproque. Les folowers suivent les participants qui partagent les même centres d'intérêt.
* une partie de jeu de morpion (tic-tac-toe), où les états de la partie sont liés aux états suivants possibles.


## Implémentations
Plusieurs modes de représentation sont possibles pour stocker des graphes: matrices d'adjacence, listes des voisins, des successeurs ou des prédécesseurs.

### Liste et matrice d'adjacence
Un exemple simple présente ici un graphe créé à partir d'une liste de voisins: 
[[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]] 

La première sous-liste correspond aux liens que forme le sommet 0. Ici, c'est donc avec les sommets 1 et 2.

Cette liste L peut aussi être mise sous forme d'une matrice M:

`M = [[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]` 

ce qui forme une matrice, en présentant les sous-listes l'une sous l'autre:

$$\begin{pmatrix} 0 & 1 & 1 & 0 \\\ 1 & 0 & 1 & 1 \\\ 1 & 1 & 0 & 1 \\\ 0 & 1 & 1 & 0 \end{pmatrix}$$

Avec la premiere sous-liste [0, 1, 1, 0] le sommet 0 est lié aux sommets 1 et 2, ce qui est signifié par le *1* aux index 1 et 2.


<figure>
  <img src="../images/fig51.png" alt="graphe correspondant à la matrice M">
  <figcaption>graphe correspondant à la matrice M</figcaption>
</figure>

Cette représentation en matrice est particulièrement adaptée aux *graphes pondérés*. On remplace alors le *1* dans la matrice par le poids de l'arête.

> *Question:* représenter le graphe pondéré dont la matrice d'adjacence est donnée ci-dessous:

$$\begin{pmatrix} 0 & 10 & 10 & 9 \\\ 3 & 0 & 5 & 0 \\\ 0 & 5 & 0 & 3 \\\ 9 & 10 & 10 & 0 \end{pmatrix}$$

### Graphe avec étiquette
On utilisera un *dictionnaire* comme structure de données. Les clés étant les étiquettes des sommets, et les valeurs, la liste des sommets adjacents:

D = {'a': [ 'b', 'c'], 'b': [ 'a', 'c', 'd'], 'c': [ 'a', 'b', 'd'], 'd' : [ 'b', 'c']}


<figure>
  <img src="../images/fig52.png" alt="graphe correspondant au dictionnaire D">
  <figcaption>graphe correspondant au dictionnaire D</figcaption>
</figure>

> *Question:* Représenter la matrice d'adjacence équivalente.

### Liste de successeurs
Cette représentation est particulièrement adaptée aux *graphes orientés*.

<figure>
  <img src="../images/fig55.png" alt="graphe orienté">
  <figcaption>graphe orienté</figcaption>
</figure>

On peut représenter un graphe avec une liste chaînée des successeurs: 

*sommet => liste de sommets liés suivants* <br>
0 => 1, 2 <br>
1 => ... <br>
2 => ... <br>
3 => ... <br>

Le sommet 0 aura alors 2 successeurs, les noeuds 1 et 2.

> *Question:* Compléter la liste de successeurs

Il sera alors necessaire d'établir aussi, pour chaque sommet, une liste de predecesseurs:


*sommet => liste de sommets liés précédents* <br>
0 => None <br>
1 => 0 <br>
2 => ... <br>
3 => ... <br>

> *Question:* Compléter la liste de prédécesseurs

# Cas particulier d'un arbre: un graphe hierarchique

[Lien vers la page *arbres*](/docs/NSI/structure/page4/)

# Liens
* Algorithmes et structure de données utilisant la programmation orientée objets : [https://notebooks.lecluse.fr/python/nsi/terminale/graphes/algorithmique/poo/tp/2020/08/17/nsi_t_algo_graphes.html#Exemples-de-graphes](https://notebooks.lecluse.fr/python/nsi/terminale/graphes/algorithmique/poo/tp/2020/08/17/nsi_t_algo_graphes.html#Exemples-de-graphes)