---
Title : Complexité
---

# cout spatial et temporel

## Complexité temporelle

L'execution d'un algorithme nécessite l'utilisation des ressources de l'ordinateur : 

- complexité en temps : temps de calcul pour executer les operations. On supposera qu'il correspond au nombre d'opérations effectuées par le programme.
- complexité spatiale : occupation de la mémoire pour contenir et manipuler le programme et ses données. Peut s'exprimer en nombre de mots mémoires.

Pour evaluer la complexité temporelle, on peut mettre en evidence plusieurs opérations fondamentales. Le temps d'éxecution d'un algorithme resolvant ce genre de problème est toujours proportionnel au nombre de ces opérations : 

Pour le tri, par exemple : ces opérations fondamentales sont le nombre de comparaisons entre 2 élements et le nombre de deplacements de ces élements.


## Complexité spatiale
Il faut souvent définir une mesure sur les données qui réflète la quantité d'informations contenues. Exemple : nombre de chiffre des nombres, le nombre d'éléments manipulés, dimension d'une matrice, nombre de noeuds d'un graphe...
C'est la complexité spatiale.

# Premier exemple : la recherche dans une liste triée
## Enoncé du problème[^1]
Supposons que le problème posé soit de trouver un nom X dans un annuaire téléphonique qui consiste en une liste triée alphabétiquement. On peut s'y prendre de plusieurs façons différentes. En voici deux :

1. Recherche linéaire : parcourir les pages dans l'ordre (alphabétique) jusqu'à trouver le nom X cherché. C'est l'algorithme de lecture exhaustif, aussi appelé algorithme de recherche linéaire.
2. Recherche dichotomique : ouvrir l'annuaire au milieu, si le nom qui s'y trouve est plus loin alphabétiquement que le nom cherché, regarder avant, sinon, regarder après. Refaire l'opération qui consiste à couper les demi-annuaires (puis les quarts d'annuaires, puis les huitièmes d'annuaires, etc.) jusqu'à trouver le nom cherché.


## Algorithme de lecture exhaustif (recherche linéaire)
Cet algorithme pourrait fonctionner même si les mots sont rangés dans le désordre : il s'agit de parcourir tous les mots, du premier au dernier, jusqu'à tomber sur le mot recherché dans cet annuaire.



### Complexité
Pour chacune de ces méthodes il existe un **pire** des cas et un **meilleur** des cas. 

* Dans le meilleur des cas, le nom X est trouvé dès l'ouverture de l'annuaire: il n'y aura alors qu'**une seule étape**.
* Supposons que l'annuaire contienne N = 30 000 noms, si le mot recherché est le dernier du dictionnaire, le pire cas, cela demandera 30 000 étapes. La complexité  est proportionnelle au nombre **N**. On la note **O(N)**, ça veut dire que dans le pire des cas, le temps de calcul est de l'ordre de grandeur de N.

### Détail des opérations réalisées
Les **éléments significatifs** pour analyser la complexité en nombre d'opérations sont : 

- le nombre d'itérations
- le nombre d'opérations par itération

L'instruction `j←j+1` est dépendante du type de boucle, par exemple, while ≠ for. Elle disparait si on programme différemment.

Il en est de même pour la comparaison `j≤n` : il ne faudra pas les prendre en compte pour évaluer l'algorithme.

Les opérations significatives sont donc les comparaisons de X avec les elements de la liste : il en existe une par itération.

### Invariant de boucle et condition d'arrêt

L'analyse se fait en établissant des **invariants de boucle**, c'est à dire des propositions qui sont vraies à chaque itération, et des **conditions d'arrêt**.

* invariant de boucle : au debut de la première itération, j=1. Et au début de la kieme itération, j=k et L[i]≠X

* condition d'arrêt : si au debut de la kieme itération de la boucle on a : k≤ n et L[k]=X, alors on s'arrête avec j=k; si on a k=n+1, alors on va s'arrêter avec j=0.

*Remarque :* La complexité dépend de la taille des données, mais aussi, pour une taille fixée, des différentes données possibles, de leur possible redondance.

* **Complexité dans le meilleur et le pire des cas:** La complexité se situe entre 

  - Min(n) = 1 : meilleur des cas
  - et Max(n) = n : pire des cas

* **Complexité en moyenne:**  

<p>$$Moy_A(n) = \sum_{d \in D_n} p(d).coût_A(d)$$</p>

où p(d) est la probabilité que l'on ait la donnée d en entrée de l'algorithme.

et coût_A(d) représente la complexité en temps de l'algorithme A sur la donnée d.

## Algorithme de recherche dichotomique
Le second algorithme demandera dans le pire des cas de séparer en deux l'annuaire, puis de séparer à nouveau cette sous-partie en deux, ainsi de suite jusqu'à n'avoir qu'un seul nom. Le nombre d'étapes nécessaire sera le nombre entier qui est immédiatement plus grand que log_2(N), qui vaut 15 lorsque N=30 000.

La complexité est alors O(log_2(N))

# Evaluer la complexité
La complexité d’un algorithme sera (sauf mention contraire) exprimée sous la forme : *O*(*f*(*n*))

Notation O : borne superieure : f = O(g) s'il existe un nombre réel positif a et un rang n de fn tels que f(n) ≤ a.g(n) : 

$$\exists c \in \mathbb{R}^+, tels \quad que\quad   \forall n_o \in \mathbb{N},  |f(n_o)|\leq c.|g(n)| $$

[^1]: wikipedia : analyse de la complexité : [https://fr.wikipedia.org/wiki/Analyse_de_la_complexité_des_algorithmes](https://fr.wikipedia.org/wiki/Analyse_de_la_complexité_des_algorithmes)
