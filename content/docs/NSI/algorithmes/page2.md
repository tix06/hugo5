---
Title : preuve d'un algorithme
---

# Preuve d'un algorithme
Prouver le bon fonctionnement d'un algorithme nécessite de vérifier deux propriétés : 

1. premièrement : la **terminaison** : prouver que l'algorithme se termine.
2. deuxièmement : la **correction** : si l'algorithme se termine, il fait bien ce qu'on attend de lui (correction partielle). 


## Preuve d'un algorithme recursif
Dans le cas des algorithmes récursifs, ces méthodes sont spécifiques.
### terminaison
Le (ou l'un des) paramètre(s) appelé(s) par la fonction recursive doit avoir une relation d'ordre descendante. C'est à dire que ce paramètre doit être de plus en plus petit à chaque appel de la fonction dans le corps de la fonction récurente.

### correction partielle
Il faut montrer que si les appels internes à l'algorithme font ce qu'on attend d'eux, alors l'algorithme entier fait ce qu'on attend de lui. La preuve de correction se fait à partir d'une demonstration par recurrence : 

* On commence à établir la preuve pour le rang n = 0, puis n = 1.
* il faut montrer que si on peut prouver la correction pour une suite de rang n-1, on aboutira à la preuve de correction pour une suite de rang n.

**Invariant de boucle :**
on appelle *invariant* d'une itération toute propriété, vraie à l'initialisation, et qui demeure conservée quand on passe d'un état quelconque à son successeur.

## Exemple
La fonction suivante réalise une *recherche linéaire* de la valeur X sur une liste L de valeurs numériques. 

```python
def recherche(X,L):
    """
    recherche une valeur dans une liste et renvoie l'indice si la valeur est trouvée, -1 sinon
    Params :
    -------------------
    X : int, valeur à trouver
    L : list, une liste de valeurs entieres, dans un ordre quelconque.
    Sortie : 
    ------
    j : int, indice de la position de la valeur dans la liste
    Principe :
    --------
    on parcourt la liste avec une boucle non bornée, tant que X n'est pas trouvé dans la liste
    on augmente la valeur de j à chaque nouvelle itération
    """
    j = 0
    n = len(L)
    while j<n and X!=L[j]:
        j += 1
    if j==n : return -1
    return j
```



### Détail des opérations réalisées
Les **éléments significatifs** pour analyser la complexité en nombre d'opérations sont : 

- le nombre d'itérations
- le nombre d'opérations par itération

L'instruction `j←j+1` est dépendante du type de boucle, par exemple, while ≠ for. Elle disparait si on programme différemment.

Il en est de même pour la comparaison `j<n` : il ne faudra pas les prendre en compte pour évaluer l'algorithme.

Les opérations significatives pour le calcul de la complexité sont donc les comparaisons de X avec les elements de la liste : il en existe une par itération.

### Invariant de boucle et condition d'arrêt

L'analyse se fait en établissant des **invariants de boucle**, c'est à dire des propositions qui sont vraies à chaque itération, et des **conditions d'arrêt**.

* invariant de boucle : au debut de la première itération, j=0. Et au début de la kieme itération, j=k et L[i]≠X

* condition d'arrêt : si au debut de la kieme itération de la boucle on a : k< n et L[k]=X, alors on s'arrête avec j=k; si on a k=n, alors on va s'arrêter et on affecte j=-1.

# Liens
* cas des algorithmes recursifs : [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)