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

<figure>
  <img src="../images/fig20.png" alt="graphe illustratif">
  <figcaption>Graphe 1 : exemple</figcaption>
</figure>

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

<figure>
  <img src="../images/fig21.png" alt="premiere partie parcours BFS">
  <figcaption>L = [B,F,H,I]</figcaption>
</figure>

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

<figure>
  <img src="../images/fig22.png" alt="premiere partie parcours BFS">
  <figcaption>L = [F,H,I,A,C,D]</figcaption>
</figure>

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

<figure>
  <img src="../images/fig23.png" alt="arbre parcours BFS">
  <figcaption>arbre du parcours BFS</figcaption>
</figure>

Pour réaliser cet arbre, il faudra remonter chaque étape du parcours du graphe le parent du sommet visité. Ainsi, il aura faudra se rappeler que le sommet D a pour parent le noeud B (D est marqué dans le tableau dont l'entrée est B). Et le sommet B a lui même pour parent le sommet E. Ainsi, en remontant le chemin, on sait que le chemin de E à D passe par B : E => B => D.

### Pour aller plus loin (term NSI)
Consulter la page du *parcours en largeur* sur [wikipedia](https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_largeur)

## Graphe pondéré : Algorithme de Dijkstra
On va voir une variante, plus complexe, de l'algorithme BFS : l'algorithme de **Dijkstra**. Cet algorithme permettra de calculer toutes les distances entre un sommet de départ r et les autres sommets, mais cette fois ci, ce graphe est *pondéré*.

Pour un graphe pondéré, chaque arête (u,v) a une longueur notée l(u,v). Pour certaines applications, on parle plutôt de *poids* d'une arête. Jusqu'à présent nous n'avons traité que le cas particulier où l(u,v) = 1.

Comme l'algorithme précédent, celui-ci donnera la distance selon le *plus court chemin*.

Au départ, aucune distance n'est connue. Les distances provisoires notées dist<sub>G</sub>(r,u), sont mises à l'infini : pour tout u, dist<sub>G</sub>(r,u) = &#x221E;

Le graphe suivant servira d'exemple : 

<figure>
  <img src="../images/fig30.png" alt="graphe exemple Dijkstra">
  <figcaption>exemple de graphe pondéré</figcaption>
</figure>

Les longueurs des arêtes sur le schéma ne sont pas proportionnelles à leur *poids*. 

La méthode employée diffère légèrement de la précédente. Il faudra également utiliser une liste L de sommet à parcourir. Mais cette liste est constament *remise à jour* (**triée**) en fonction des longueurs des arêtes constatées, comme on le verra plus loin.

De plus, il faudra mémoriser le sommet parent d'un sommet visité. Ce sommet parent pourra être modifié si on trouve un chemin plus court pour atteindre ce sommet depuis le sommet de départ.

On part du sommet r : 

> 
1. On visite tous les noeuds fils de `r`. Pour chaque sommet adjacent `u`: On note la distance qui sépare `r` de `u` selon la longueur de l'arête. Et on note le sommet parent. On ajoute chaque sommet dans la liste `L`.
2. On trie la liste `L` par ordre de distance à `r`croissante.
3. On colore en rouge le sommet `r` lorsque tous les sommets adjacents ont été visités. Et on retire `r` de la liste.
4. On passe au sommet `v` pour poursuivre l'exploration : le premier à gauche dans la liste (celui le plus proche de `r`).
5. On visite tous les sommets voisins de `v`. On les ajoute dans la liste L.
6. Pour chaque voisin `w` du sommet `v` : si dist<sub>G</sub>(r,w) < dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w), c'est que le sommet `w` a déjà été visité, et que le chemin déjà trouvé est plus court que le chemin actuel. On ne fait rien.
7. si dist<sub>G</sub>(r,w) > dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w), c'est que le sommet `w` a peut être été visité, mais que le chemin actuel est le plus court. On note alors la nouvelle valeur de la distance : dist<sub>G</sub>(r,w) = dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w). Et on note que le parent du sommet `w` est `v`. C'est actuellement le meilleur chemin.
8. Puis, lorsque tous les voisins de `v` ont été visités, on revient au point 2 pour `v` (trier la liste L, coloration en rouge,...).

Ce qui change par rapport à l'algorithme précédent, c'est surtout le nouveau choix de sommet à visiter lors du parcours du graphe : lorsque tous les noeuds fils d'un sommet ont été visités, et que l'on a mémorisé leur distance au sommet de départ, on choisi d'explorer le **sommet le plus proche**, celui **le plus à gauche** dans la liste L.

**Illustration :**

On démarre du sommet `B`voisins. Après le parcours de ses voisins, la liste L contient les sommets D,E,F classés par ordre de distance croissante : 

$$L = [D,E,F]$$

* D est à une distance de 2
* E est à une distance de 5
* F est à une distance de 10

<figure>
  <img src="../images/fig31.png" alt="parcours initial Dijkstra">
  <figcaption>L = [D,E,F]</figcaption>
</figure>

On tient à jour le tableau des distances au sommet de départ, `B`:

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | &#x221E; | &#x221E; | 2 | 5 | 10 | &#x221E; |  &#x221E; |

Ensuite, on passe au sommet D, le plus proche de B (le plus à gauche dans la liste) : 

On ajoute C, H et A à la liste.

<figure>
  <img src="../images/fig32.png" alt="parcours 2 Dijkstra">
  <figcaption>L = [E,F,C,H,A]</figcaption>
</figure>

On met à jour les distance des sommets voisins : 

* C est à une distance 2+3 = 5 de B
* H est à une distance 2+4 = 6 de B
* A est à une distance 2+9 = 11 de B

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D | 11 | 5 |  |  |  | &#x221E; |  6 |

*Les valeurs pour D, E et F ne sont pas remises à jour. On ne les mentionne pas dans ce tableau.*

On retire D de la liste et on trie celle-ci en fonction des distances à B : 

$$L = [C,E,H,F,A]$$

Le sommet suivant à traiter est alors le C. Ses voisins sont E, et G. L'examen du chemin vers E ne change rien : le chemin B,D,C,E a une longueur plus importante que le chemin direct B,E (12>5). Par contre, le chemin vers G offre une nouvelle distance : 

* G est à une distance 5+2 = 7 de B : 

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C |  |  |  |  |  | 7 |   |

On ajoute G à la liste et on trie:

<figure>
  <img src="../images/fig33.png" alt="parcours 3 Dijkstra">
  <figcaption>L = [E,H,G,F,A]</figcaption>
</figure>

On passe au sommet E : il n'y a pas de modification de la distance de B à C en passant par E. Comme C est le seul fils, on retire E de la liste L et on passe au sommet suivant, le H. Alors : 

* A est à une distance 6+1 = 7 du noeud B. C'est le meilleur chemin.
* G est à une distance 6+2 = 8 du noeud B en passant par H. Cette valeur n'est pas enregistrée car il existe un chemin plus court.

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H | 7 |  |  |  |  |  |   |

<figure>
  <img src="../images/fig34.png" alt="parcours 4 Dijkstra">
  <figcaption>L = [A,G,F]</figcaption>
</figure>

On finit rapidement l'exploration : 

<figure>
  <img src="../images/fig35.png" alt="parcours 5 Dijkstra">
  <figcaption>Fin de l'exploration</figcaption>
</figure>

On met à jour la distance au sommet F qui est plus courte en passant par A:

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A |  |  |  |  | 8 |  |   |


Ainsi, le plus court chemin pour faire B => F est trouvé en remontant dans les tableaux successifs:

* F est à une distance 8 de B en passant par A
* A est à une distance 7 de B en passant par H
* H est à une distance 6 de B en passant par D
* D est à une distance 2 de B

L'arbre représentant les plus courts chemins est alors le suivant : 

<figure>
  <img src="../images/fig36.png" alt="arbre Dijkstra">
  <figcaption>arbre couvrant</figcaption>
</figure>

C'est un arbre couvrant le graphe.

On peut le représenter avec une forme plus conventionnelle : 

<figure>
  <img src="../images/fig37.png" alt="arbre Dijkstra">
  <figcaption>arbre de plus court chemin</figcaption>
</figure>

# Parcours d'un arbre en profondeur (DFS)
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

<figure>
  <img src="../images/fig40.png" alt="graphe parcours profondeur">
  <figcaption>exemple de graphe pour le parcours en profondeur</figcaption>
</figure>

La première étape est la phase de descente : On peut démarrer l'exploration par le sommet voisin A ou B. Les deux sont possibles. Ils sont de couleur BLANCHE.

Supposons que l'on commence l'exploration par B (on aurait tout aussi bien choisir le A). On colore alors B en VERT.

On poursuit l'exploration par les sommets suivants : D,C,A (il y a d'autres possibiltés) : 

<figure>
  <img src="../images/fig41.png" alt="graphe parcours profondeur">
  <figcaption>étape 1</figcaption>
</figure>

Le sommet A est un bord du graphe : il n'y a pas de noeud fils BLANC. On remonte alors d'un niveau : jusqu'au sommet C. Celui ci ne presente pas davantage de voisin BLANC. A et C sont colorés en ROUGE et on remonte à D. 

On peut alors poursuivre l'exploration vers E :

<figure>
  <img src="../images/fig42.png" alt="graphe parcours profondeur">
  <figcaption>étape 2</figcaption>
</figure>

Depuis le sommet E, on peut visiter F et I. Choisissons F (mais on pourrait choisir également I) : 

<figure>
  <img src="../images/fig43.png" alt="graphe parcours profondeur">
  <figcaption>étape 3</figcaption>
</figure>

On poursuit l'exploration jusqu'en I. Tous les sommets sont visités, et l'exploration est terminée.

<figure>
  <img src="../images/fig44.png" alt="graphe parcours profondeur">
  <figcaption>fin du parcours</figcaption>
</figure>

Le schéma suivant illustre le parcours réalisé à partir des arêtes empruntées. Il s'agit d'un arbre couvrant le graphe : 

<figure>
  <img src="../images/fig45.png" alt="graphe parcours profondeur">
  <figcaption>arbre couvrant</figcaption>
</figure>

## Applications
Le parcours d'un graphe en profondeur s'apparente à un algorithme de type *retour sur trace*, ou *backtracking*. C'est le comportement de joueur que l'on a lorsque l'on a droit à un nouvelle chance : 

* Dans un jeu d'echec, lorsque l'on joue contre l'ordinateur, une option permet de *revenir en arrière*. On peut revenir *un coup* en arrière et prendre une meilleure option. L'ordinateur construit un graphe au fur et à mesure du jeu avec les coups joués ainsi que la configuration du jeu, afin de permettre ce backtracking.
* Lorsque l'on joue à un jeu de labyrinthe : Si on arrive dans une impasse, on adopte là aussi un algorithme de type *retour sur trace*. On revient jusqu'au noeud parent (le croisement précédent) afin d'explorer une nouvelle voie. Et si toutes ces voies sont sans issues, on remonte encore d'un niveau (le croisement précédent encore celui ci).

# Liens
* Approfondir le sujet: les différents algorithmes de parcours des graphes (Term NSI): [site pixees de David Roche](https://pixees.fr/informatiquelycee/n_site/nsi_term_algo_graphe.html)

[^1]: algorithmes : ce sont des méthodes qui, exécutées pas à pas, permettent d'obtenir un résultat final à partir de données de départ.