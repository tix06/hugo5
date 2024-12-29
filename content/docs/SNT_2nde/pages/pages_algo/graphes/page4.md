---
Title: algorithme de Dijkstra
---

* [introduction aux graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [TP sur l'implementation en python des graphes](/docs/NSI/structure/page6/)
* [TP sur les algorithmes de parcours des graphes (app en ligne)](/docs/NSI/structure/page61/)
* [algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/)
* [Protocoles de routage](/docs/NSI/architecture/page3/)
* [Arbres](/docs/NSI/structure/page4/)

# Graphe pondéré : Algorithme de Dijkstra
On va voir une variante, plus complexe, de l'algorithme BFS : l'algorithme de **Dijkstra**. Cet algorithme permettra de calculer toutes les distances entre un sommet de départ r et les autres sommets, mais cette fois ci, ce graphe est *pondéré*.

Pour un graphe pondéré, chaque arête (u,v) a une longueur notée l(u,v). Pour certaines applications, on parle plutôt de *poids* d'une arête. Jusqu'à présent nous n'avons traité que le cas particulier où l(u,v) = 1.

Comme l'algorithme précédent, celui-ci donnera la distance selon le *plus court chemin*.

Au départ, aucune distance n'est connue. Les distances provisoires notées dist<sub>G</sub>(r,u), sont mises à l'infini : pour tout u, dist<sub>G</sub>(r,u) = &#x221E;

Le graphe suivant servira d'exemple : 

{{< img src="../images/fig30.png" alt="graphe exemple Dijkstra" caption="exemple de graphe pondéré" >}}
Les longueurs des arêtes sur le schéma ne sont pas proportionnelles à leur *poids*. 

La méthode employée diffère légèrement de celle du parcours en largeur. Il faudra également utiliser une liste L de sommet à parcourir. Mais cette liste est constament *remise à jour* (**triée**) en fonction des longueurs des arêtes constatées, comme on le verra plus loin.

De plus, il faudra mémoriser le sommet parent d'un sommet visité. Ce sommet parent pourra être modifié si on trouve un chemin plus court pour atteindre ce sommet depuis le sommet de départ.

## algorithme

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

Il faut donc trier cette liste à la fin de chaque exploration.

## Illustration

On démarre du sommet `B`voisins. Après le parcours de ses voisins, la liste L contient les sommets D,E,F classés par ordre de distance croissante : 

$$L = [(D,2), (E,5), (F,10)]$$

* D est à une distance de 2
* E est à une distance de 5
* F est à une distance de 10

{{< img src="../images/fig31.png" alt="parcours initial Dijkstra" caption="L = [(D,2), (E,5), (F,10)]" >}}
On tient à jour le tableau des distances au sommet de départ, `B`:

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | &#x221E; | &#x221E; | 2 | 5 | 10 | &#x221E; |  &#x221E; |

Ensuite, on passe au sommet D, le plus proche de B (le plus à gauche dans la liste) : 

* C est à une distance 2+3 = 5 de B
* H est à une distance 2+4 = 6 de B
* A est à une distance 2+9 = 11 de B

On ajoute C, H et A à la liste. `L = [(E,5), (F,10), (C,5), (H,6), (A,11)]` 

Puis on trie cette liste:

{{< img src="../images/fig32.png" alt="parcours 2 Dijkstra" caption="L = [(C,5), (E,5), (H,6), (F,10), (A,11)]" >}}
On met à jour les distance des sommets voisins : 



| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D | 11 | 5 |  |  |  | &#x221E; |  6 |

*Les valeurs pour D, E et F ne sont pas remises à jour. On ne les mentionne pas dans ce tableau.*


Le sommet suivant à traiter est alors le C. Ses voisins sont E, et G. L'examen du chemin vers E ne change rien : le chemin B,D,C,E a une longueur plus importante que le chemin direct B,E (12>5). Par contre, le chemin vers G offre une nouvelle distance : 

* G est à une distance 5+2 = 7 de B : 

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C |  |  |  |  |  | 7 |   |

On ajoute G à la liste et on trie:

{{< img src="../images/fig33.png" alt="parcours 3 Dijkstra" caption="L = [(E,5), (H,6), (G,7), (F,10), (A,11)]" >}}
On passe au sommet E : il n'y a pas de modification de la distance de B à C en passant par E. Comme C est le seul fils, on retire E de la liste L et on passe au sommet suivant, le H. Alors : 

* A est à une distance 6+1 = 7 du noeud B. C'est le meilleur chemin.
* G est à une distance 6+2 = 8 du noeud B en passant par H. Cette valeur n'est pas enregistrée car il existe un chemin plus court.

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H | 7 |  |  |  |  |  |   |

{{< img src="../images/fig34.png" alt="parcours 4 Dijkstra" caption="L = [(A,7), (G,7), (F,10)]" >}}
On finit rapidement l'exploration : 

{{< img src="../images/fig35.png" alt="parcours 5 Dijkstra" caption="Fin de l'exploration" >}}
On met à jour la distance au sommet F qui est plus courte en passant par A:

| exploration depuis le sommet... | A | C | D | E | F | G | H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A |  |  |  |  | 8 |  |   |


Ainsi, le plus court chemin pour faire B => F est trouvé en remontant dans les tableaux successifs:

* F est à une distance 8 de B en passant par A
* A est à une distance 7 de B en passant par H
* H est à une distance 6 de B en passant par D
* D est à une distance 2 de B

## Arbre représentant ce graphe

L'arbre représentant les plus courts chemins est alors le suivant : 

{{< img src="../images/fig36.png" alt="arbre Dijkstra" caption="arbre couvrant" >}}
C'est un arbre couvrant le graphe.

On peut le représenter avec une forme plus conventionnelle : 

{{< img src="../images/fig37.png" alt="arbre Dijkstra" caption="arbre de plus court chemin" >}}