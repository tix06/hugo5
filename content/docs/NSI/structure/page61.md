---
Title: TP algorithme parcours graphes
---

* [introduction aux graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [TP sur l'implementation en python des graphes](/docs/NSI/structure/page6/)
* [TP sur les algorithmes de parcours des graphes (app en ligne)](/docs/NSI/structure/page61/)
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



# Liens
* Documentation de [python networkx](https://networkx.org)
* Programmes python pour le parcours [en largeur et en profondeur d'un graphe](https://marcarea.com/weblog/2019/02/17/parcours-de-graphes-en-python)
* La sociologie structurale, appelée maintenant analyse de réseaux a développé une grande panoplie de métriques pour caractériser les réseaux sociaux... [Mémoire de maitrise par FRANCK GOUDJO](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZoKiDmZyEAxUfQ6QEHZ5kBawQFnoECBcQAQ&url=https%3A%2F%2Farchipel.uqam.ca%2F3672%2F1%2FM11510.pdf&usg=AOvVaw0GqGUBx-QWUzPAEfpdhgfv&opi=89978449) sur la Réalisation d'un outil de simulation de réseaux sociaux 




