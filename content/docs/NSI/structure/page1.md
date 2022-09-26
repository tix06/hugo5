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
| retourne l'élément de tête (premier élément)| `tete(L)` |
| retourne la liste privée de son premier élément (retourne donc le 2<sup>e</sup> élément)| `queue()` |

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

# Exercices sur les listes
On propose l'implémentation suivante pour les listes chainées:

```python
def creer_liste():
  """exemple: 
  L = creer_liste()
  """
  return []

def liste_vide(L):
  """exemple: 
  liste_vide(L)
  """
  return L == []

def inserer(L,e):
  """exemple:
  L = inserer(e,L)
  """
  return [e,L]

def tete(L)
  """exemple:
  elem = tete(L)
  """
  return L[0]

def queue(L):
  """exemple:
  L2 = queue(L)
  """
  return L[1]

def elements_liste(L):
  """exemple:
  L2 = elements_liste(L)
  """
  # à completer
  # 
  
```

## Exercice d'introduction aux listes
On cherche à implémenter l'historique du navigateur pour permettre de revenir en arrière lors de la navigation.

On visite, dans l'ordre les sites suivants:

* site 1 
* site 2
* site 3

**1.** Qu'est ce qui est affiché par le programme suivant?

```python
L1 = creer_liste()
inserer(L1,'site 1')
print(L1)
inserer(L1,'site 2')
print(L1)
inserer(L1,'site 3')
print(L1)
```

**2.** Lorsque l'on retourne en arrière, on veut acceder au dernier site visité. Supposons que cela retourne la valeur `site 3`. Quelle instruction de l'interface de liste faut-il utiliser?

**3.** On souhaite alors que cela modifie la liste L1 en supprimant  `site 3`. Quelle instruction utilisant l'interface de liste va modifier L1 de cette façon?

**4.** On revient à la liste L1 contenant la navigation sur les 3 sites. Compléter la boucle non bornée pour former la liste python `['site 3', 'site 2', 'site 1']` à partir de la liste chainée L1:

```python
while not liste_vide(L1):
  # L2 = []
  # à completer
  # 
  # 
```

**5.** Ajouter au script les instructions qui vont déverser la liste python L2 dans une liste python L3. Cette liste L3 devra présenter les sites dans l'ordre de la navigation: `['site 1', 'site 2', 'site 3']`

**6.** Ecrire l'implémentation de la fonction `elements_liste` qui va retourner une liste python avec les éléments d'une liste chainée L mise en paramètre. Pour l'exemple précédent, cette fonction retourne la liste python L3 lorsque L est mise en paramètre de la fonction `elements_liste`:

```python
elements_liste(L)
# affiche ['site 1', 'site 2', 'site 3']
```

On utilisera à l'intérieur de la fonction une instruction de copie de la liste L afin de ne pas modifier L lors des traitements:

```python
def elements_liste(L):
  L_copie = list(L)
  L2 = []
  L3 = []
  while not liste_vide(L_copie):
    # à completer
    # 
    # 
    # 
```

## Exercice sur la separation d'une liste
Ecrire une fonction `separe` qui sépare les éléments d'une liste en deux listes selon s'ils sont inférieurs (strictement) ou supérieurs (et égal) à une valeur `v`:

```python
def separe(L):
  L_copie = list(L)
  L_inf = creer_liste()
  L_sup = creer_liste()
  while not liste_vide(L_copie):
    # à completer
    # 
    # 
    # 
```

# Exercices sur les tableaux statiques
On propose l'implémentation suivante pour les tableaux statiques:

```python
T = (['lundi','mardi','mercredi','jeudi','vendredi'],5)

def taille(T):
  """exemple:
  > taille(T)
  > 5
  """
  return T[1]

def ieme(T,i):
  """exemple:
  > ieme(T,3)
  > 'jeudi'
  """
  return T[0][i]

def remplacer(T,i,e):
  """exemple:
  > remplacer(T,2,'jour des enfants')
  > T
  > (['lundi','mardi','jour des enfants','jeudi','vendredi'],5)
  """
  # à completer
```

## Utiliser l'interface du tableau

**1.** Soit le tableau suivant qui implémente les notes de Kyle dans les matières C1, C2, C3:

```python
T = ([6, 7, 8], 3) 
```

**a.** Kyle n'a pas eu 8, mais 12/20 dans la matière C3. Ecrire l'instruction qui retourne la note de Kyle dans la matière C3.

**b.** Compléter le script donné plus haut pour cette fonction.

**2.** Soit le tableau suivant qui implémente les notes de Kyle, Sean, Quentin et Zinedine dans les matières C1, C2, C3:

```python
T = ([[6, 7, 8],
      [10, 0, 10],
      ['?', '?', '?']
      ['?', '?', '?']], ..)
```

**a.** Recopier le tableau T et remplacer les '?' et les '..' par les bonnes valeurs (utiliser l'image plus haut).

**b.** Quelle instruction de l'interface va donner le nombre d'élèves dans le tableau?


**c.** Modifier la fonction `remplacer` pour que celle-ci modifie la note dans la matière voulue pour un élève donné. Par exemple:


```python
remplacer(T,0,2,12)
T
# affiche 
([[6, 7, 12],
 [10, 0, 10],
 ['?', '?', '?']
 ['?', '?', '?']], ..)
```

## Un nouveau type abstrait
Afin de gérer les notes des élèves de la classe de seconde 209, on veut définir un type abstrait qui permet de calculer sur les notes des élèves.

Ce type abstrait, appelé `Classe_209` va utiliser l'interface des tableaux statiques définie plus haut. Mais il va aussi calculer la moyenne des notes grâce à 2 nouvelles fonctions de son interface:

* `moyenne_eleve`: va calculer la moyenne de l'élève au rang `eleve_i` (par exemple, pour Kyle, `eleve_i` vaut 0)
* `moyenne_matiere`: va calculer la moyenne sur une matière à partir du rang `matiere_i`. Par exemple, pour C3, `matiere_i` vaut 3)

**1.** Programmer l'implémentation en python de `moyenne_eleve`

**2.** Programmer l'implémentation en python de `moyenne_matiere`

# Liens
* Types séquentiels natifs [cours David Latreyte](https://dlatreyte.github.io/terminales-nsi/chap-6/1-structures-integrees/)
