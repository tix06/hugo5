---
Title : Graphes
---
# Introduction : Une soirée entre amis
Imaginez une soirée entre amis à laquelle vous êtes invité : vous connaissez une partie des convives (Paul et Kévin), mais d'autres vous sont inconnus (Lisa, Oriane et Felix). Ils ont été invités, c'est qu'il y a certainement une relation de connaissance entre eux. Comme c'est Paul qui invite, il connait certainement tout le monde à sa soirée.

On peut faire un schéma où l'on fera justement apparaitre ces *relations* entre invités : 

* Un trait entre 2 personnes signifie qu'elles se connaissent.
* Chaque sommet de la figure est occupé par une personne.

Voici l'un des schémas possibles : 

{{< img src="../images/fig4.png" alt="graphe reseau social" caption="Graphe 1 : connexe" >}}
Il s'agit d'un graphe *connexe* : un graphe pour lequel toutes les personnes (tous les sommets) sont reliés par un chemin.

On peut imaginer qu'un individu se joigne à la fête sans y avoir été invité. Il ne connait alors personne. Appelons le *Intru*.

Le graphe a alors l'allure suivante : 
{{< img src="../images/fig5.png" alt="graphe non connexe" caption="Graphe 2 : non connexe" >}}
Il s'agit cette fois d'un graphe *non connexe*.

Kévin se demande comment il pourrait parvenir à faire passer un message à Oriane, qu'il ne connait pas, par l'intermédiaire de personnes qui se connaissent entre-elles. Le graphe 3 présente l'un des chemins possibles : 

Ce chemin peut être décrit : 

* par les sommets traversés : Kévin, Paul, Oriane.
* Ou bien par les arêtes du graphe empruntées : Kévin-Paul puis Paul-Oriane.

Ce chemin a une longueur égale à 2 (il faut 2 transmissions du message pour qu'il parvienne à Oriane). C'est le nombre d'arêtes.

{{< img src="../images/fig6.png" alt="graphe avec chemin" caption="Graphe 3 : chemin Kévin-Oriane" >}}
Dans la soirée, les personnes qui se connaissent déjà ont tendance à former de plus petits groupes au sein des participants. On peut matérialiser l'un de ces petits groupes avec le schéma suivant : 

{{< img src="../images/fig7.png" alt="graphe avec cycle" caption="Graphe 4 : cycle Paul-Kévin-Vous" >}}
Il s'agit d'un *cycle* dans le graphe. C'est une figure fermée (qui part de Paul pour revenir à Paul). Cette figure relie une seule fois tous les sommets de ce *petit groupe*. 

Voici un autre exemple de cycle dans ce même graphe:

{{< img src="../images/fig8.png" alt="graphe avec cycle" caption="Graphe 5 : autres cycle" >}}
# Graphes
## Un graphe
G = (V,E) est un graphe G où E est l'ensemble des sommets et V l'ensemble des arêtes.

Le graphe 1 contient 6 sommets et 8 arêtes.

Un graphe est dit **connexe** s'il est en un *seul morceau*.

## Sommets voisins
Deux sommets sont voisins s'ils sont reliés par une arête.

## Degré d'un sommet
Le degré d'un sommet dans un graphe est son nombre de voisins. Par exemple, pour le graphe 1, le degré du sommet *Paul* est égal à 5.

## Chemin dans un graphe
Un chemin entre 2 sommets d'un graphe est le parcours qui relie ces 2 sommets. On peut présenter le parcours en énonçant les sommets traversés, ou bien les arêtes empruntées.

La *longueur du chemin* est égale au nombre d'arêtes empruntées.

## Cycle
Un cycle est un chemin fermé (qui revient à son sommet de départ), sans passer 2 fois par la même arête.

## Arbre
Un arbre est un graphe connexe sans cycle. La figure suivante en est une illustration: 

{{< img src="../images/fig11.png" alt="arbre couvrant" caption="Graphe 6 : arbre couvrant" >}}
Cet arbre a la propriété de couvrir complètement tous les noeuds du graphe 1 vu en exemple (liaisons par pointillés) :

{{< img src="../images/fig9.png" alt="arbre couvrant" >}}
**Propriétés :** 

* Tout arbre à n sommets a exactement n-1 arêtes.
* un arbre T est un graphe connexe, par définition, mais pour n'importe quelle paire de sommets u et v, il existe exactement un chemin entre u et v dans T.

## Couplage
Un couplage est un ensemble d'arêtes qui n'ont aucun sommet en commun (liaisons par pointillés):

{{< img src="../images/fig10.png" alt="couplage" caption="Graphe 7 : couplage" >}}
# Applications

* Un graphe représente les relations entre les sommets. C'est la représentation naturelle pour les réseaux sociaux (sommets = personnes) ou les réseaux internet (sommets = routeurs).
* Des pages web : chaque page est un sommet et le lien d'une page A vers une page B est représentée par une arête *orientée*. Le Web peut ainsi être représenté par un graphe. Les moteurs de recherche utilisent ainsi ce type de modélisation pour répondre aux critères de recherche des internautes.
* Le plan d'un métro représente les stations (les sommets du graphe) reliées entre-elles par une ligne de métro. C'est un graphe.
* Le plan routier peut aussi montrer les liaisons entre marqueurs sur une carte. A la différence du graphe de métro, le graphe routier est un graphe *pondéré* : pour ce type de graphe, on porte la mention du nombre de km pour chacune des arêtes. La longueur du *chemin* n'est alors plus égale au nombre d'arêtes, mais à la somme des longueurs de chaque arête.

# Algorithmes sur les graphes
Voir la page suivante : [algorithmes de parcours d'un graphe](../page2/index.html)

# Liens
* Les graphes, définitions: [page Term NSI](/docs/NSI/structure/page5/)
* A la découverte des graphes, Edition EDP sciences



