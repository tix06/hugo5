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

# Liens
* cas des algorithmes recursifs : [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)