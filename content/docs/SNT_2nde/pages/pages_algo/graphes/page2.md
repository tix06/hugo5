---
Title : algorithmes de parcours d'un graphe
---

# algorithmes de parcours d'un graphe
Algorithme : voir définition en bas de page[^1]
## Parcours d'un graphe en largeur
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

[^1]: algorithmes : ce sont des méthodes qui, exécutées pas à pas, permettent d'obtenir un résultat final à partir de données de départ.