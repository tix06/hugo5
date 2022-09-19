---
Title : pseudo langage
---

# Types abstraits

La résolution d'un problème par un programme nécessite:

*  de définir les données du problème
*  d'utiliser des instructions du langage sur ces données

Souvent, la résolution du problème demande d'arranger ces données dans un *type abstrait*, afin d'avoir une résolution plus efficace.

Un type abstrait est défini par son *interface*, qui est indépendante de son *implémentation*.

Les types abstraits sont des types *structurés*. On a déjà vu des types *structurés* natifs: les types séquences de texte (string), les types séquentiels (listes, tuples), et les mappages (dictionnaires).

*Un type abstrait* est caractérisé par une *interface* de programmation qui permet de manipuler les données de ce type. Sans pour autant avoir connaissance du contenu des fonctions proposées par l'interface.

*Spécifier* un type abstrait, c'est définir son *interface*, sans prejuger de la façon dont ses opérations sont implémentées.

*Implémenter*, c'est fournir le code de ces opérations. Plusieurs implémentations peuvent correspondent à la même spécification. On verra dans ce chapitre la programmation dans un style fonctionnel. Il viendra plus tard la programmation par objet.

On verra dans un premier temps, 2 exemples de types abstraits: Les *listes chainées* et les *tableaux*. Dans un chapitre ultérieur, nous verrons les types abstraits *Piles*, *Files*, et *Graphes*.

# Listes chaînées
Une liste chaînée est une séquence ordonnée d'éléments.

La *liste L* suivante représente la chaine: `"Lundi" -> "Mardi" -> "Mercredi"` 

```
L = ("Lundi",("Mardi",("Mercredi",())))
```

La liste chainée L contient 2 éléments `(tete, queue)` et `queue` est elle-même une liste chainée, contenant aussi `(tete, queue)`. Le dernier élément: `(tete, ())`. 

On utilisera par exemple une liste chainée lorsqu'il y a une filiation, une chronologie entre les éléments.

<figure>
  <img src="../images/history.png">
  <figcaption>L'historique permet au navigateur de<br> remonter le fil de la navigation</figcaption>
</figure>

## L'interface d'une liste chainée
L'*interface* fournit certaines fonctions.

| fonctions qui implémentent la liste chainée L | nom |
| --- | --- |
| créer une liste vide | `creer_liste()` |
| questionner si la liste est vide | `liste_vide(L)` |
| insérer un élément **e** en tête de liste et retourne une nouvelle liste | `inserer(L,e)` |
| retourne l'élément de tête | `tete(L)` |
| retourne la liste privée de son premier élément | `queue()` |

Le *contenu* de ces fonctions va dépendre de l'*implémentation* choisie par le programmeur.

Par exemple, si l'on choisit d'implémenter la liste chainée par un tuple, on aura pour la premiere fonction:

```python
def creer_liste():
  return ()
```

Alors que si l'on choisit plutôt une liste:

```python
def creer_liste():
  return []
```

# Tableaux
Les tableaux se comportent de manière très similaire aux listes, sauf que les types d'objets qui y sont stockés sont limités. (Array)

Un tableau peut être représenté en Python par un tuple contenant 2 éléments: 

* la liste des valeurs, de dimension fixe. On mettra `None` pour les valeurs non renseignés.
* la valeur de la taille de la liste.

Par exemple:

```python
T = ([6, 7, 8, None, None], 5)
```

Un tableau peut servir à implémenter une grille de notes par exemple:

<figure>
  <img src="../images/array.png">
  <figcaption>Tableau de notes</figcaption>
</figure>

Supposons, pour simplifier, que le tableau ne contient que les notes de Kyle:

<figure>
  <img src="../images/array2.png">
  <figcaption>Tableau des notes de Kyle</figcaption>
</figure>

On peut représenter cet ensemble de notes par le tableau:

```python
T = ([6, 7, 8, None, None], 5)
```

## L'interface d'un tableau
| fonctions qui implémentent un tableau T (Array) | nom |
| --- | --- |
| taille du tableau | `taille(T)` |
| demander l'élément au rang i | `ieme(T,i)` |
| ajouter à la fin | `ajouter(T,e)` |
| insérer l'élément e au rang i | `inserer(T,i,e)` |
| supprimer l'élément au rang i | `supprimer(T,i)` |
| remplacer l'élément au rang i par e | `remplacer(T,i,e)` |


## Tableaux dynamiques et tableaux statiques
Les tableaux vus ci-dessus sont des tableaux *statiques*: leur taille ne peut pas être modifiée. Dans le cas où l'on ait besoin d'agrandir le tableau, il faut le copier dans un nouveau tableau, plus grand.

Python implémente naturellement un autre type de tableau, que l'on appelera *dynamique*: Les *Listes Python*. Ce problème de dimension n'apparait pas dans les Listes Python, qui apportent de surcroit des méthodes bien pratiques comme `append` et `pop`.

Attention: les listes chaînées (vues plus haut) et les Listes Python sont différentes, il ne s'agit pas des mêmes objets.


# Liens
* Types séquentiels natifs [cours David Latreyte](https://dlatreyte.github.io/terminales-nsi/chap-6/1-structures-integrees/)
