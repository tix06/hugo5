---
Title : algorithmes de parcours d'un graphe
---

# algorithmes de parcours d'un graphe en largeur
* Algorithme : voir définition en bas de page[^1]
* Graphe : voir définitions à la page [Graphes](../page1/index.html)


## Parcours d'un graphe non pondéré
Soit G(V,E) un graphe de sommets V = {A,B,C,D,E,F,G,H,I,J} et d'arêtes E.

On note la distance entre 2 sommets quelconques u et v dans le graphe G : $$dist_G(u,v)$$

Pour le graphe exemple suivant (Graphe 1), la distance du sommet A au sommet J, vaut au minimum 4 (chemin A, B, E, I, J). Mais cela depend du chemin. Ainsi : 
$$dist_G(A,J)=4$$.

{{< img src="../images/fig20.png" alt="graphe illustratif" caption="Graphe 1 : exemple" >}}
> Calculons toutes les distances dans ce graphe : **L'algorithme de parcours en largeur (Breath First Search BFS)**

**Principe :**
Pour déterminer la longueur de tous les chemins du graphe, il va falloir le parcourir. Lors du parcours, certains sommets seront colorés, pour nous rappeler qu'ils ont été parcouru (rouge), ou en cours de parcours (vert).

On aura besoin de conserver une liste L des sommets à explorer.

On commence l'exploration en partant d'un sommet *r*. Voici la méthode :  

> 
1. Colorer en VERT le sommet `r` pour se rappeler qu'il a déjà été partiellement traité.
2. Parcourir le graphe depuis `r` jusqu'à l'un de ses voisins `u`, non coloré en vert ou rouge. Colorer `u` en VERT. 
3. Noter la distance du sommet de départ `r` vers le sommet `u` en cours d'exploration : dist<sub>G</sub>(r,u) = 1 si le sommet voisin `u` est adjacent.
4. Ajouter le nom du sommet `u` à droite dans la liste `L`: `L = [r,u]`
5. Si `r` a d'autres sommets adjacents, revenir au point 2 et explorer un autre de ces sommets (points 2, 3, 4).
6. Si `r` n'a plus de sommet adjacent non visité, colorer `r` en rouge. Retirer `r` de la liste (premier sommet, à gauche dans la liste L). `L` ayant une structure de FILE, on dit que l'on *défile* `r`.

On poursuit ensuite l'exploration à partir du nouveau premier sommet `v` adjacent de `u`. La distance de r à v est alors : dist<sub>G</sub>(r,v) = dist<sub>G</sub>(r,u) + 1 (point 3).

Lorsque la liste L est vide, l'exploration est terminée et toutes les distances entre r et les autres sommets est connue.

**Exemple :**

A partir du graphe 1 défini plus haut, on démarre l'exploration à partir du sommet r = E.

Celui ci est coloré en VERT.

La méthode vue plus haut permet de rapidement établir la liste L = [E,B,F,H,I] à partir des sommets adjacents à E. Les sommets B,F,H,I sont à une distance 1 du sommet E. On a par exemple dist<sub>G</sub>(E,B) = 1. Ces sommets sont colorés en VERT.

Une fois cette première partie de l'exploration terminée, on retire E de la liste L, et on colore le sommet en rouge.

{{< img src="../images/fig21.png" alt="premiere partie parcours BFS" caption="L = [B,F,H,I]" >}}
On note la distance au sommet `E` pour chacun des sommets visités, le symbole &#x221E; pour ceux qui ne l'ont pas encore été:

| exploration depuis le sommet... | A | B | C | D | F | G | H | I | J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E | &#x221E; | 1 | &#x221E; | &#x221E; | 1 | &#x221E; | 1 | 1 | &#x221E; |

On se déplace maintenant sur le sommet B, qui est le premier de la liste.

L'exploration de ses sommets adjacents continue, à conditions que ceux-ci soient blancs, sinon, on passe à un autre sommet. Ici, on fait l'exploration des sommets A,C,D. Ceux-ci sont colorés en VERT, et ajoutés à la liste L:
$$L = [F,H,I,A,C,D]$$

Les distances de E à chacun de ces nouveaux noeuds sont enregistrées : 
dist<sub>G</sub>(E,A) = 2, tout comme dist<sub>G</sub>(E,C) et dist<sub>G</sub>(E,D). Le tableau suivant donne les distances depuis le sommet `E`:

| exploration depuis le sommet... | A | B | C | D | F | G | H | I | J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B | 2 |  | 2 | 2 |  | &#x221E; |  |  | &#x221E; |

Les distances déjà connues ne sont pas modifiées. On laisse un blanc dans le tableau.

On colore ensuite le sommet B en rouge et on le retire de la liste L.

{{< img src="../images/fig22.png" alt="premiere partie parcours BFS" caption="L = [F,H,I,A,C,D]" >}}
Ensuite, depuis le sommet F: on explore le graphe jusqu'au sommet G, seul sommet adjacent encore blanc.

On a alors dist<sub>G</sub>(E,G) = 2, puis le sommet F est mis en rouge et retiré de la liste:

$$L = [H,I,A,C,D,G]$$

| exploration depuis le sommet... | A | B | C | D | F | G | H | I | J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F |  |  |  |  |  | 2 |  |  | &#x221E; |

On poursuivra l'exploration par le sommet H, suivant dans la liste. Ce qui permettra de définir le dernier chemin jusqu'à J, et noter dist<sub>G</sub>(E,J) = 2:

| exploration depuis le sommet... | A | B | C | D | F | G | H | I | J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H |  |  |  |  |  |  |  |  | 2 |

A la fin du traitement, on peut représenter à l'aide d'un *arbre* tous les chemins issus de l'exploration du graphe : 

{{< img src="../images/fig23.png" alt="arbre parcours BFS" caption="arbre du parcours BFS" >}}
Pour réaliser cet arbre, il faudra remonter chaque étape du parcours du graphe le parent du sommet visité. Ainsi, il aura faudra se rappeler que le sommet D a pour parent le noeud B (D est marqué dans le tableau dont l'entrée est B). Et le sommet B a lui même pour parent le sommet E. Ainsi, en remontant le chemin, on sait que le chemin de E à D passe par B : E => B => D.

### Pour aller plus loin (term NSI)
* Consulter la page du *parcours en largeur* sur [wikipedia](https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_largeur)
* [Algorithme de Dijkstra](../page4/) (plus court chemin dans un graphe pondéré)

* Application de l'algorithme **BFS** au parcours dans un **labyrinthe**:

{{< img src="../images/maze1.png" alt="maze BFS" link="https://youtu.be/vf817b882Uw" caption="video: Maze Pathfinder - Breadth First Search (BFS)" >}}
# Parcours d'un graphe en profondeur (DFS)
## Principe
Soit un graphe G = (V,E) et r un sommet de G, point de départ de l'exploration.
Le parcours en profondeur du graphe va permettre de visiter tous les noeuds du graphe, mais selon un chemin où l'on plonge dans la profondeur du graphe. Le prochain sommet visité sera un sommet fils non encore visité.

A chaque étape, c'est à dire à chaque arête suivie, il faudra mémoriser le parent du nouveau sommet visité. Cela permettra de revenir en arrière. On utilisera pour cela une structure de PILE. On reviendra en arrière en *dépilant* le dernier sommet de la liste.

Lorsque le chemin mène à une impasse, (il n'y a plus de sommet fils non visité), lorsque l'on est sur un bord du graphe, alors on *remonte* d'un niveau, vers un sommet parent, *avant de poursuivre* l'exploration.

En pratique : 

* tous les sommets ont d'abord colorés en BLANC.
* On colore chaque noeud u visité en VERT.
* Lorsque tous les noeuds fils de u sont visités, on colore celui-ci en ROUGE.

**Illustration :**
Avec le graphe suivant, on démarre l'exploration du noeud G : 

{{< img src="../images/fig40.png" alt="graphe parcours profondeur" caption="exemple de graphe pour le parcours en profondeur" >}}
La première étape est la phase de descente : On peut démarrer l'exploration par le sommet voisin A ou B. Les deux sont possibles. Ils sont de couleur BLANCHE.

Supposons que l'on commence l'exploration par B (on aurait tout aussi bien choisir le A). On colore alors B en VERT.

On poursuit l'exploration par les sommets suivants : D,C,A (il y a d'autres possibiltés) : 

{{< img src="../images/fig41.png" alt="graphe parcours profondeur" caption="étape 1" >}}
Le sommet A est un bord du graphe : il n'y a pas de noeud fils BLANC. On remonte alors d'un niveau : jusqu'au sommet C. Celui ci ne presente pas davantage de voisin BLANC. A et C sont colorés en ROUGE et on remonte à D. 

On peut alors poursuivre l'exploration vers E :

{{< img src="../images/fig42.png" alt="graphe parcours profondeur" caption="étape 2" >}}
Depuis le sommet E, on peut visiter F et I. Choisissons F (mais on pourrait choisir également I) : 

{{< img src="../images/fig43.png" alt="graphe parcours profondeur" caption="étape 3" >}}
On poursuit l'exploration jusqu'en I. Tous les sommets sont visités, et l'exploration est terminée.

{{< img src="../images/fig44.png" alt="graphe parcours profondeur" caption="fin du parcours" >}}
Le schéma suivant illustre le parcours réalisé à partir des arêtes empruntées. Il s'agit d'un arbre couvrant le graphe : 

{{< img src="../images/fig45.png" alt="graphe parcours profondeur" caption="arbre couvrant" >}}
## Applications
Le parcours d'un graphe en profondeur s'apparente à un algorithme de type *retour sur trace*, ou *backtracking*. C'est le comportement de joueur que l'on a lorsque l'on a droit à un nouvelle chance : 

* Dans un jeu d'echec, lorsque l'on joue contre l'ordinateur, une option permet de *revenir en arrière*. On peut revenir *un coup* en arrière et prendre une meilleure option. L'ordinateur construit un graphe au fur et à mesure du jeu avec les coups joués ainsi que la configuration du jeu, afin de permettre ce backtracking.
* Lorsque l'on joue à un jeu de labyrinthe : Si on arrive dans une impasse, on adopte là aussi un algorithme de type *retour sur trace*. On revient jusqu'au noeud parent (le croisement précédent) afin d'explorer une nouvelle voie. Et si toutes ces voies sont sans issues, on remonte encore d'un niveau (le croisement précédent encore celui ci).

# Liens
* Animation sur le parcours d'un graphe [http://mpechaud.fr/scripts/parcours/index.html](http://mpechaud.fr/scripts/parcours/index.html)
* Approfondir le sujet: les différents algorithmes de parcours des graphes (Term NSI): [site pixees de David Roche](https://pixees.fr/informatiquelycee/n_site/nsi_term_algo_graphe.html)

[^1]: algorithmes : ce sont des méthodes qui, exécutées pas à pas, permettent d'obtenir un résultat final à partir de données de départ.