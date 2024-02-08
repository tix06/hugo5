---
Title: TP algorithme parcours graphes
---

* [introduction aux graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [TP sur les algorithmes de parcours des graphes](/docs/NSI/structure/page6/)
* [algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/)
* [Protocoles de routage](/docs/NSI/architecture/page3/)
* [Arbres](/docs/NSI/structure/page4/)


# Utiliser un outil en ligne
Pour une première approche du traitement sur un graphe: Ouvrir l'application en ligne [https://graphonline.ru/fr/](https://graphonline.ru/fr/)


## Plus court chemin 
Vous pourrez alors créer un premier graphe de type: sous-réseaux en étoile. Ce graphe pourrait être la représentation d'un réseau social, ou bien de 2 sous-réseaux interfacés par un routeur.

{{< img src="../images/g1.png" >}}

Une fois le graphe réalisé, explorer le menu des *Algorithmes*, et sélectionner:

* le degré des sommets
* le rayon du graphe
* l'arbre couvrant minimal
* la *Recherche du plus court chemin* entre 2 sommets du graphe. 

> Combien d'arêtes séparent les sommets les plus éloignés de ce graphe?

## Chemin Eulérien
La page [wikipedia](https://fr.wikipedia.org/wiki/Graphe_eul%C3%A9rien) présente ce qu'est un *chemin eulérien*. 

Représenter chacun des 2 graphes suivants, l'un après l'autre, et chercher la présence (ou non) d'un *chemin eulérien* dans une telle figure.

{{< img src="../images/g2.png" >}}

> **Q.a:** Comment modifier (à minima) le graphe 2 pour qu'il présente un chemin eulérien?

# Traitement des graphes en Python
## Dessiner le graphe avec la librairie networkx
Dans un notebook python, saisir les lignes:

```python
import matplotlib.pyplot as plt
import networkx as nx
from numpy import array
G = nx.Graph()
# definition des noeuds
G.add_node(0,label='A',col='white')
G.add_node(1,label='B',col='white')
G.add_node(2,label='C',col='white')
G.add_node(3,label='D',col='white')

# definition des aretes
G.add_edge(0,1)
G.add_edge(0,2)
G.add_edge(2,3)
```

**Rappel:**

* Anglais: *Node*; Français: Sommet (noeud)
* Anglais: *Edge*; Français: Arête

Puis, dans une nouvelle cellule, ajouter les 3 parties suivantes:

* Dessin des sommets

```python
# calcul des positions pour repartir les sommets du graphe
pos = nx.spring_layout(G)  

# dessin des sommets
L = list(G.nodes(data='col'))
colorNodes = [node[1] for node in L]
nx.draw_networkx_nodes(G, pos, node_size=700,node_color=colorNodes,alpha=0.9)
```

* Afficher les étiquettes

```python
# labels
labels_nodes={node:label for node,label in G.nodes(data='label')}

nx.draw_networkx_labels(G, pos, labels=labels_nodes, \
                        font_size=20, \
                        font_color='black', \
                        font_family='sans-serif')

```

* Dessiner les arêtes

```python
# edges
nx.draw_networkx_edges(G, pos)

plt.axis('off')
plt.show()
```

> **Q.b:** Modifier maintenant la déclaration du graphe (cellule 1) pour dessiner le graphe suivant:

{{< img src="../images/g3.png" >}}

## Interragir avec les attributs du graphe
L'objet *graphe* `G` possède des méthodes de type *Getter* et *Setter*. Nous allons explorer celles-ci.

### Fonctions utiles de `networkx`
Pour connaitre la liste des sommets et des arêtes:

```python
print(list(G.nodes()))
print(list(G.edges()))
```



La [densité](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html) du graphe:

```python
nx.density(G)
``` 

Pour connaitre la liste des [voisins](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.neighbors.html) d'un sommet:

```python
nx.neighbors(G,node)
```

Pour connaitre la liste des voisins de TOUS les sommets, ainsi que leur couleur:

```python
for node in list(G.nodes()):
    print(node,'->',list(nx.neighbors(G,node)),G.nodes(data='col')[node])
```

> **Q.c:** Compléter le script pour obtenir le dictionnaire représentant ce graphe:

```python
D = {}
for node in list(G.nodes()):
	# a completer
print (D)
```
 
*affiche:*

```
{0: [1, 2, 4],
 1: [0, 4],
 2: [0, 4, 3],
 3: [4, 2, 5],
 4: [0, 1, 2, 3, 5],
 5: [4, 3]}
 ```

### Getter
La documentation de la fonction se trouve [ici: networkx.org/documentation](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html)

Tester dans une nouvelle cellule:

```python
color = nx.get_node_attributes(G, "col")
print('color',color)
```

> **Q.d:** Quel est le format de données retourné par `get_node_attributes`?

> **Q.e:** Afficher la seule couleur du sommet 0, en modifiant cette instruction.

> **Q.f:** Obtenir l'information des attributs *label* à l'aide d'une instruction similaire.

### Setter
La documentation de la fonction se trouve [ici: networkx.org/documentation](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.set_node_attributes.html)

Tester dans une nouvelle cellule:

```python
nx.set_node_attributes(G, {0:{"col":'blue'}})
color = nx.get_node_attributes(G, "col")
print('color',color)
```

> **Q.f:** Que remarque t-on? Pourquoi?

# Algorithmes de parcours de graphes
Pour une description illustrée de ces 2 parcours dans un graphe, on pourra consulter la page [suivante sur le site allophysique.com](/docs/SNT_2nde/pages/pages_algo/graphes/page2/).

La page [suivante du site marcarea.com](https://marcarea.com/weblog/2019/02/17/parcours-de-graphes-en-python) propose plusieurs implémentations pour les parcours en *largeur* et en *profondeur* d'un graphe.

* Pour utiliser l'une de ces fonctions, il faudra une structure de données de type *dictionnaire* pour le graphe: revoir le paragraphe *Fonctions utiles de networkx*.

* Ajouter une fonction pour dessiner le graphe:

```python
def dessine(G):
	plt.clf()
    L = list(G.nodes(data='col'))
    colorNodes = [node[1] for node in L]
    nx.draw_networkx_nodes(G, pos, node_size=700,node_color=colorNodes,alpha=0.9)

    # labels
    labels_nodes={node:label for node,label in G.nodes(data='label')}

    nx.draw_networkx_labels(G, pos, labels=labels_nodes, \
                            font_size=20, \
                            font_color='black', \
                            font_family='sans-serif')

    nx.draw_networkx_edges(G, pos)

dessine(G)
plt.show()
```

* Adapter ensuite la fonction de recherche pour tracer les graphes au fur et à mesure du parcours. Démarrer du sommet 0.

{{< img src="../images/g4.png" >}}

# Correction
*à venir*

<!--
## obtenir le dictionnaire D

```python

## a partir de la fonction neighbors
D = {}
for node in list(G.nodes()):
    D[node] = list(nx.neighbors(G,node))
## a partir de la liste de liens
L = list(G.edges())
D = {}
for edge in L:
    for i in range(2):
        node = edge[i]
        if node in D:
            D[node].append(edge[(i+1)%2])
        else:
            D[node] = [edge[(i+1)%2]]
for node in D:
    D[node] = list(set(D[node]))

```

## Fonction recursive DFS avec tracé du graphe

```python
def recursive_dfs(graph, node, visited=None):

    if visited is None:
        visited = []

    if node not in visited and G.nodes()[node]['col'] != 'red':
        visited.append(node)
    
        nx.set_node_attributes(G, {node:{"col":'red'}})
        for n in graph[node]:
            if n not in visited and G.nodes()[n]['col'] != 'green':
                nx.set_node_attributes(G, {node:{"col":'green'}})
        dessine(G)
        plt.show()

    unvisited = [n for n in graph[node] if n not in visited]

    for node2 in unvisited:
        recursive_dfs(graph, node2, visited)
        if G.nodes()[node2]['col'] == 'green':
            nx.set_node_attributes(G, {node2:{"col":'red'}})
            dessine(G)
            plt.show()
    
    
    nx.set_node_attributes(G, {node:{"col":'red'}})
    dessine(G)
    plt.show()
    return visited

plt.figure()
recursive_dfs(D,0)
```

-->

# Liens
* Documentation de [python networkx](https://networkx.org)
* Programmes python pour le parcours [en largeur et en profondeur d'un graphe](https://marcarea.com/weblog/2019/02/17/parcours-de-graphes-en-python)
* La sociologie structurale, appelée maintenant analyse de réseaux a développé une grande panoplie de métriques pour caractériser les réseaux sociaux... [Mémoire de maitrise par FRANCK GOUDJO](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZoKiDmZyEAxUfQ6QEHZ5kBawQFnoECBcQAQ&url=https%3A%2F%2Farchipel.uqam.ca%2F3672%2F1%2FM11510.pdf&usg=AOvVaw0GqGUBx-QWUzPAEfpdhgfv&opi=89978449) sur la Réalisation d'un outil de simulation de réseaux sociaux 




