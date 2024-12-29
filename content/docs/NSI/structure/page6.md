---
Title: TP implementation python graphes
---

* [introduction aux graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [TP sur l'implementation en python des graphes](/docs/NSI/structure/page6/)
* [TP sur les algorithmes de parcours des graphes (app en ligne)](/docs/NSI/structure/page61/)
* [algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/)
* [Protocoles de routage](/docs/NSI/architecture/page3/)
* [Arbres](/docs/NSI/structure/page4/)



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

* Ajouter une fonction pour dessiner et sauvegarder le graphe dans un fichier:

```python
def dessine(G,filename):
    plt.clf()
    L = list(G.nodes(data='col'))
    colorNodes = [node[1] for node in L]
    nx.draw_networkx_nodes(G, pos, node_size=700, node_color=colorNodes, alpha=0.9)

    # labels
    labels_nodes = {node: label for node, label in G.nodes(data='label')}

    nx.draw_networkx_labels(G, pos, labels=labels_nodes, \
                            font_size=20, \
                            font_color='black', \
                            font_family='sans-serif')

    nx.draw_networkx_edges(G, pos)
    plt.savefig(filename)
```

* Adapter ensuite la fonction de recherche pour tracer les graphes au fur et à mesure du parcours. Démarrer du sommet 0:

```python
plt.figure() # utile pour afficher TOUS les graphes
recursive_dfs(D,0)
```

{{< img src="../images/g4.png" >}}

# Correction




```python
import matplotlib.pyplot as plt
import networkx as nx
from numpy import array

def inverse(L):
    return [L[i] for i in range(len(L)-1,-1,-1)]

def dessine(G,filename):
    plt.clf()
    L = list(G.nodes(data='col'))
    colorNodes = [node[1] for node in L]
    nx.draw_networkx_nodes(G, pos, node_size=700, node_color=colorNodes, alpha=0.9)

    # labels
    labels_nodes = {node: label for node, label in G.nodes(data='label')}

    nx.draw_networkx_labels(G, pos, labels=labels_nodes, \
                            font_size=20, \
                            font_color='black', \
                            font_family='sans-serif')

    nx.draw_networkx_edges(G, pos)
    plt.savefig(filename)



G = nx.Graph()
# definition des noeuds
G.add_node(0, label='A', col='white')
G.add_node(1, label='B', col='white')
G.add_node(2, label='C', col='white')
G.add_node(3, label='D', col='white')
G.add_node(4, label='E', col='white')
G.add_node(5, label='F', col='white')
# definition des aretes
G.add_edge(0, 1)
G.add_edge(0, 2)
G.add_edge(0, 4)
G.add_edge(4, 1)
G.add_edge(4, 2)
G.add_edge(4, 3)
G.add_edge(2, 3)
G.add_edge(4, 5)
G.add_edge(3, 5)

# calcul des positions pour repartir les sommets du graphe
pos = nx.spring_layout(G)

# Dictionnaire du graphe
D = {}
for node in list(G.nodes()):
    D[node] = list(nx.neighbors(G, node))
print(D)

# Parcours en profondeur avec coloration des sommets
def dfs(graph, node, visited=None,stack=None):
    compteur_image=0
    if visited is None:
        visited = []
    if stack is None:
        stack = []
    stack.append(node)
    nx.set_node_attributes(G, {node: {"col": 'green'}})
    dessine(G, 'img/figure' + str(compteur_image) + '.png')
    compteur_image+=1
    while stack:
        node = stack.pop()

        if node not in visited :
            #and G.nodes()[node]['col'] != 'red':
            visited.append(node)

            #plt.show()
            unvisited = [n for n in graph[node] if n not in visited]
            stack.extend(inverse(unvisited))
            for n in unvisited :
                nx.set_node_attributes(G, {n: {"col": 'green'}})
            dessine(G, 'img/figure' + str(compteur_image) + '.png')
            compteur_image += 1
            nx.set_node_attributes(G, {node: {"col": 'red'}})
            dessine(G,'img/figure'+str(compteur_image)+'.png')
            compteur_image += 1
    #plt.show()

    return visited


# appel de dfs depuis le sommet 0 et affichage graphique
#plt.figure()
visited = dfs(D, 0)

print(visited)
```


# Liens
* Documentation de [python networkx](https://networkx.org)
* Programmes python pour le parcours [en largeur et en profondeur d'un graphe](https://marcarea.com/weblog/2019/02/17/parcours-de-graphes-en-python)
* La sociologie structurale, appelée maintenant analyse de réseaux a développé une grande panoplie de métriques pour caractériser les réseaux sociaux... [Mémoire de maitrise par FRANCK GOUDJO](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZoKiDmZyEAxUfQ6QEHZ5kBawQFnoECBcQAQ&url=https%3A%2F%2Farchipel.uqam.ca%2F3672%2F1%2FM11510.pdf&usg=AOvVaw0GqGUBx-QWUzPAEfpdhgfv&opi=89978449) sur la Réalisation d'un outil de simulation de réseaux sociaux 




