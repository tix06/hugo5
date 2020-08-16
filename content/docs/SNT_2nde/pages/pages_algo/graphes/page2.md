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
  <img src="../images/fig20.png" width=350px alt="graphe illustratif">
  <figcaption>Graphe 1 : exemple</figcaption>
</figure>

> Calculons toutes les distances dans ce graphe : **L'algorithme de parcours en largeur (Breath First Search BFS)**

**Principe :**
Pour déterminer la longueur de tous les chemins du graphe, il va falloir le parcourir. Lors du parcours, certains sommets seront colorés, pour nous rappeler qu'ils ont été parcouru (rouge), ou en cours de parcours (vert).

On aura besoin de conserver une liste L des sommets à explorer.

On commence l'exploration en partant d'un sommet *r*. Voici la méthode :  

1. Colorer en VERT le sommet r pour se rappeler qu'il a déjà été partiellement traité.
2. Parcourir le graphe depuis r jusqu'à l'un de ses noeuds fils u, non coloré en vert ou rouge. Colorer u en VERT. 
3. Noter la distance du sommet de départ r vers le sommet u en cours d'exploration : dist<sub>G</sub>(r,u) = 1 si le noeud u est directement fils de r.
4. Ajouter le nom du sommet u à droite dans la liste L.
5. Si r a d'autres noeuds fils, revenir au point 2 et explorer un nouveau noeud fils (points 2, 3, 4).
6. Si r n'a plus de noeuds fils, colorer r en rouge. Retirer r de la liste (premier sommet, à gauche dans la liste L).

On poursuit l'exploration à partir du nouveau premier sommet v écrit à gauche dans la liste L. Si v est un noeud fils de u, la distance de r à v est alors : dist<sub>G</sub>(r,v) = dist<sub>G</sub>(r,u) + 1 (point 3).

Lorsque la liste L est vide, l'exploration est terminée et toutes les distances entre r et les autres sommets est connue.

**Exemple :**
A partir du graphe 1 défini plus haut, on démarre l'exploration à partir du sommet r = E.

Celui ci est coloré en VERT.

La méthode vue plus haut permet de rapidement établir la liste L = [E,B,F,H,I] à partir des noeuds fils de E. Les sommets B,F,H,I sont à une distance 1 du sommet E. On a par exemple dist<sub>G</sub>(E,B) = 1. Ces sommets sont colorés en VERT.

Une fois cette première partie de l'exploration terminée, on retire E de la liste L, et on colore le sommet en rouge.

<figure>
  <img src="../images/fig21.png" width=350px alt="premiere partie parcours BFS">
  <figcaption>L = [B,F,H,I]</figcaption>
</figure>

On se déplace maintenant sur le sommet B, qui est le premier de la liste.

L'exploration de ses noeuds fils continue, à conditions que ceux-ci soient blancs, sinon, on passe à un autre noeud fils. Ici, on fait l'exploration des sommets A,C,D. Ceux-ci sont colorés en VERT, et ajoutés à la liste L.

Les distances de E à chacun de ces noeuds sont enregistrées : 
dist<sub>G</sub>(E,A) = 2, tout comme dist<sub>G</sub>(E,C) et dist<sub>G</sub>(E,D).

On colore alors le sommet B en rouge et on le retire de la liste L.

<figure>
  <img src="../images/fig22.png" width=350px alt="premiere partie parcours BFS">
  <figcaption>L = [F,H,I]</figcaption>
</figure>

Ensuite, depuis le sommet F, on explore le graphe jusqu'au sommet G, seul noeud fils encore blanc.

On a alors dist<sub>G</sub>(E,G) = 2, puis le sommet F est mis en rouge et retiré de la liste.

On poursuivra l'exploration par le sommet H, suivant dans la liste. Ce qui permettra de définir le dernier chemin jusqu'à J, et noter dist<sub>G</sub>(E,J) = 2.

A la fin du traitement, on peut représenter à l'aide d'un *arbre* tous les chemins issus de l'exploration du graphe : 

<figure>
  <img src="../images/fig23.png" width=350px alt="arbre parcours BFS">
  <figcaption>arbre du parcours BFS</figcaption>
</figure>

Pour réaliser cet arbre, il faudra mémoriser à chaque étape du parcours du graphe le parent du sommet visité. Ainsi, il aura faudra se rappeler que le sommet D a pour parent le noeud B, qui a lui même pour parent le noeud E. Ainsi, en remontant le chemin, on sait que le chemin de E à D passe par B : E,B,D.

## Graphe pondéré : Algorithme de Dijkstra
On va voir une variante, plus complexe, de l'algorithme BFS : l'algorithme de **Dijkstra**. Cet algorithme permettra de calculer toutes les distances entre un sommet de départ r et les autres sommets, mais cette fois ci, ce graphe est *pondéré*.

Pour un graphe pondéré, chaque arête (u,v) a une longueur notée l(u,v). Pour certaines applications, on parle plutôt de *poids* d'une arête. Jusqu'à présent nous n'avons traité que le cas particulier où l(u,v) = 1.

Comme l'algorithme précédent, celui-ci donnera la distance selon le *plus court chemin*.

Au départ, aucune distance n'est connue. Les distances provisoires notées dist<sub>G</sub>(r,u), sont mises à l'infini : pour tout u, dist<sub>G</sub>(r,u) = &#x221E;

Le graphe suivant servira d'exemple : 

<figure>
  <img src="../images/fig30.png" width=350px alt="graphe exemple Dijkstra">
  <figcaption>exemple de graphe pondéré</figcaption>
</figure>

Les longueurs des arêtes sur le schéma ne sont pas proportionnelles à leur *poids*. 

La méthode employée diffère légèrement de la précédente. Il faudra également utiliser une liste L de noeuds à parcourir. Mais cette liste est constament remise à jour en fonction des longueurs des arêtes constatées, comme on le verra plus loin.

De plus, il faudra mémoriser le noeud parent d'un sommet visité. Ce noeud parent pourra être modifié si on trouve un chemin plus court pour atteindre ce sommet depuis le noeud de départ.

On part du noeud r : 

1. On visite tous les noeuds fils de r. Pour chaque noeud fils : On note la distance qui sépare r de tous ses noeuds fils u selon la longueur de l'arête. Et on note le noeud parent. On ajoute chaque noeud dans la liste L.

2. On trie la liste L par ordre de distance à r croissante.
3. On colore en rouge le noeud r lorsque tous les noeuds fils ont été visités. Et on retire r de la liste.
4. On passe au noeud v pour poursuivre l'exploration : le premier noeud à gauche dans la liste (celui le plus proche de r).
5. On visite tous les noeuds fils de v. Pour chaque noeud fils, on ajoute les noeuds dans la liste L.
6. Pour chaque noeud fils w du sommet v : si dist<sub>G</sub>(r,w) < dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w), c'est que le noeud w a déjà été visité, et que le chemin déjà trouvé est plus court que le chemin actuel. On ne fait rien.
7. si dist<sub>G</sub>(r,w) > dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w), c'est que le noeud w a peut être été visité, mais que le chemin actuel est le plus court. On note alors la nouvelle valeur de la distance : dist<sub>G</sub>(r,w) = dist<sub>G</sub>(r,v) + dist<sub>G</sub>(v,w). Et on note que le parent du noeud w est le noeud v. C'est actuellement le meilleur chemin.
8. Puis, lorsque tous les noeuds fils de v ont été visités, on revient au point 2 pour le noeud v (trier la liste L, coloration en rouge,...).

Ce qui change par rapport à l'algorithme précédent, c'est surtout le nouveau choix de sommet à visiter lors du parcours du graphe : lorsque tous les noeuds fils d'un sommet ont été visités, et que l'on a mémorisé leur distance au sommet de départ, on choisi d'explorer le sommet le plus proche, celui le plus à gauche dans la liste L.

**Illustration :**
On démarre du noeud B. Après le parcours de ses noeuds fils, la liste L contient les noeuds D,E,F classés par ordre de distance croissante : 

* D est à une distance de 2
* E est à une distance de 5
* F est à une distance de 10

<figure>
  <img src="../images/fig31.png" width=350px alt="parcours initial Dijkstra">
  <figcaption>L = [D,E,F]</figcaption>
</figure>

Ensuite, on passe au noeud D, le plus proche de B (le plus à gauche dans la liste) : on met à jour les distance des noeuds fils : 

* C est à une distance 2+3 = 5 de B
* H est à une distance 2+4 = 6 de B
* A est à une distance 2+9 = 11 de B

On retire D de la liste et on trie celle-ci en fonction des distances à B : 

<figure>
  <img src="../images/fig32.png" width=350px alt="parcours 2 Dijkstra">
  <figcaption>L = [C,E,H,F,A]</figcaption>
</figure>

Le sommet suivant à traiter est alors le C. Ses noeuds fils sont E, et G. L'examen du chemin vers le noeud E ne change rien : le chemin B,D,C,E a une longueur plus importante que le chemin direct B,E (12>5). Par contre, le chemin vers G offre une nouvelle distance : 

* G est à une distance 5+2 = 7 du noeud B : 

<figure>
  <img src="../images/fig33.png" width=350px alt="parcours 3 Dijkstra">
  <figcaption>L = [E,H,G,F,A]</figcaption>
</figure>

On passe au noeud E : il n'y a pas de modification de la distance de B à C en passant par E. Comme C est le seul fils, on retire E de la liste L et on passe au sommet suivant, le noeud H. Alors : 

* A est à une distance 6+1 = 7 du noeud B. C'est le meilleur chemin.
* G est à une distance 6+2 = 8 du noeud B en passant par H. Cette valeur n'est pas enregistrée car il existe un chemin plus court.

<figure>
  <img src="../images/fig34.png" width=350px alt="parcours 4 Dijkstra">
  <figcaption>L = [A,G,F]</figcaption>
</figure>

On finit rapidement l'exploration : 

<figure>
  <img src="../images/fig35.png" width=350px alt="parcours 5 Dijkstra">
  <figcaption>Fin de l'exploration</figcaption>
</figure>

L'arbre représentant les plus courts chemins est alors le suivant : 

<figure>
  <img src="../images/fig36.png" width=350px alt="arbre Dijkstra">
  <figcaption>arbre couvrant</figcaption>
</figure>

C'est un arbre couvrant le graphe.

On peut le représenter avec une forme plus conventionnelle : 

<figure>
  <img src="../images/fig37.png" width=350px alt="arbre Dijkstra">
  <figcaption>arbre de plus court chemin</figcaption>
</figure>

[^1]: algorithmes : ce sont des méthodes qui, exécutées pas à pas, permettent d'obtenir un résultat final à partir de données de départ.