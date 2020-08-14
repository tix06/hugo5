---
Title : Graphes
---
# Introduction : Une soirée entre amis
Imaginez une soirée entre amis à laquelle vous êtes invité : vous connaissez une partie des convives (Paul et Kévin), mais d'autres vous sont inconnus (Lisa, Oriane et Felix). Ils ont été invités, c'est qu'il y a certainement une relation de connaissance entre eux. Comme c'est Paul qui invite, il connait certainement tout le monde à sa soirée.

On peut faire un schéma où l'on fera justement apparaitre ces *relations* entre invités : 

* Un trait entre 2 personnes signifie qu'elles se connaissent.
* Chaque sommet de la figure est occupé par une personne.

Voici l'un des schémas possibles : 

<figure>
  <img src="../images/fig4.png" width=350px alt="graphe reseau social">
  <figcaption>Graphe 1 : connexe</figcaption>
</figure>

Il s'agit d'un graphe *connexe* : un graphe pour lequel toutes les personnes (tous les sommets) sont reliés par un chemin.

On peut imaginer qu'un individu se joigne à la fête sans y avoir été invité. Il ne connait alors personne. Appelons le *Intru*.

Le graphe a alors l'allure suivante : 
<figure>
  <img src="../images/fig5.png" width=350px alt="graphe non connexe">
  <figcaption>Graphe 2 : non connexe</figcaption>
</figure>

Il s'agit cette fois d'un graphe *non connexe*.

Kévin se demande comment il pourrait parvenir à faire passer un message à Oriane, qu'il ne connait pas, par l'intermédiaire de personnes qui se connaissent entre-elles. Le graphe 3 présente l'un des chemins possibles : 

Ce chemin peut être décrit : 

* par les sommets traversés : Kévin, Paul, Oriane.
* Ou bien par les arêtes du graphe empruntées : Kévin-Paul puis Paul-Oriane.

Ce chemin a une longueur égale à 2 (il faut 2 transmissions du message pour qu'il parvienne à Oriane). C'est le nombre d'arêtes.

<figure>
  <img src="../images/fig6.png" width=350px alt="graphe avec chemin">
  <figcaption>Graphe 3 : chemin Kévin-Oriane</figcaption>
</figure>

Dans la soirée, les personnes qui se connaissent déjà ont tendance à former de plus petits groupes au sein des participants. On peut matérialiser l'un de ces petits groupes avec le schéma suivant : 

<figure>
  <img src="../images/fig7.png" width=350px alt="graphe avec cycle">
  <figcaption>Graphe 4 : cycle Paul-Kévin-Vous</figcaption>
</figure>

Il s'agit d'un *cycle* dans le graphe. C'est une figure fermée (qui part de Paul pour revenir à Paul). Cette figure relie une seule fois tous les sommets de ce *petit groupe*. 

Voici un autre exemple de cycle dans ce même graphe:

<figure>
  <img src="../images/fig8.png" width=350px alt="graphe avec cycle">
  <figcaption>Graphe 5 : autres cycle</figcaption>
</figure>

# Graphes
## Un graphe
Le graphe 1 contient 6 sommets et 8 arêtes.

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
Un arbre est un graphe connexe sans cycle. La figure suivante en est une illustration : 

<figure>
  <img src="../images/fig9.png" width=350px alt="arbre couvrant">
  <figcaption>Graphe 6 : arbre couvrant</figcaption>
</figure>

Cet arbre a la propriété de couvrir complètement tous les noeuds du graphe.

## Couplage
Un couplage est un ensemble d'arêtes qui n'ont aucun sommet en commun.

<figure>
  <img src="../images/fig10.png" width=350px alt="couplage">
  <figcaption>Graphe 7 : couplage</figcaption>
</figure>

# Applications

* Un graphe représente les relations entre les sommets. C'est la représentation naturelle pour les réseaux sociaux (sommets = personnes) ou les réseaux internet (sommets = routeurs).
* Avant d'écrire le code d'un logiciel, il faut savoir comment faire les opérations qui sont demandées. Il faut un plan. Le schéma de ce plan peut être représenté par un graphe.
* Le plan d'un métro représente les stations (les sommets du graphe) reliées entre-elles par une ligne de métro. C'est un graphe.
* Le plan routier peut aussi montrer les liaisons entre marqueurs sur une carte. A la différence du graphe de métro, le graphe routier est un graphe *pondéré* : pour ce type de graphe, on porte la mention du nombre de km pour chacune des arêtes. La longueur du *chemin* n'est alors plus égale au nombre d'arêtes, mais à la somme des longueurs de chaque arête.

# Liens
* A la découverte des graphes, Edition EDP sciences



