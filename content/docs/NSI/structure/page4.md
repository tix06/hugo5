---
Title : arbres
---

# Arbres
## Définitions
Un arbre est constitué de **noeuds** organisés de manière **hierarchique**: c'est un **graphe non orienté, connexe, sans cycle**, dans lequel on a choisi un noeud particulier appelé la **racine**.

Chaque noeud peut être étiqueté  par une information.

Un arbre est donc un cas particulier des graphes. Voir la [page suivante sur les graphes](/docs/NSI/structure/page5/)

## Caractéristiques d'un arbre

* Dans un arbre, chaque valeur est stockée dans un nœud.
* Les nœuds sont connectés par des arêtes qui représentent une relation de type "parent (prédécesseur est le terme exact) – fils".
* La racine est le seul nœud qui n’a pas de prédécesseur.
* Les nœuds qui n’ont pas de fils sont appelés desfeuilles.
* Des nœuds qui ont le même père sont appelés desfrères.
* Un sous-arbre c’est une portion de l’arbre, tandis qu’une branche c’est une suites de nœuds connectés de père en fils, depuis la racine jusqu’à une feuille.
* Le niveau d’un nœud est la distance qui le sépare de la racine... Sachant que le niveau de laracine est 0 (logique) et que le niveau d’un nœud quelconque c’est 1+ le niveau de son père (vous la voyez la fonction récursive ou pas ?)
* La profondeur (ou hauteur) d’un arbre c’est le plus grand des niveaux de tous les nœuds


# Parcours

## Parcours postfixe

```
ParcoursPostfixe ( Arbre binaire T de racine r ) 
  ParcoursPostfixe(Arbre de racine fils_gauche[r]) 
  ParcoursPostfixe(Arbre de racine fils_droit[r])
  Afficher clef [ r ]
```

## Parcours préfixe

```
ParcoursPréfixe ( Arbre binaire T de racine r ) 
  Afficher clef [ r ]
  ParcoursPréfixe(Arbre de racine fils_gauche[r]) 
  ParcoursPréfixe(Arbre de racine fils_droit[r])
```

## Parcours infixe

```
ParcoursInfixe ( Arbre binaire T de racine r ) 
  ParcoursInfixe(Arbre de racine fils_gauche[r]) 
  Afficher clef [ r ]
  ParcoursInfixe(Arbre de racine fils_droit[r])
```

# Liens
