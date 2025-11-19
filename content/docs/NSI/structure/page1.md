---
Title : types abstraits
bookShowToc: false
---

*Ce cours comporte 2 chapitres prérequis:*

* Cours sur les{{< a link="/docs/NSI/structure/page1/" caption="types abstraits" >}} et les tableaux statiques.
* {{< a link="/docs/NSI/structure/page3/" caption="Programmation orientée objets" >}}

*Et plusieurs parties:*

* les types abstraits: [Lien](../page1)
* les Piles: une structure linéaire: [Lien](../page2)
* exercices en ligne (TP) sur les Piles: [Lien](../page22)
* autres structures linéaires: [Lien](../page21)

# Types abstraits

La résolution d'un problème par un programme nécessite:

*  de définir les données du problème
*  d'utiliser des instructions du langage sur ces données

Souvent, la résolution du problème demande d'arranger ces données dans un *type abstrait*, afin d'avoir une résolution plus efficace.

Un type abstrait est défini par son *interface*, qui est indépendante de son *implémentation*.

Les types abstraits sont des types *structurés*. On a déjà vu des types *structurés* natifs: les types séquences de texte (string), les types séquentiels (listes, tuples), et les mappages (dictionnaires).

**Un type abstrait** est caractérisé par une *interface* de programmation qui permet de manipuler les données de ce type. Sans pour autant avoir connaissance du contenu des fonctions proposées par l'interface.

**Spécifier** un type abstrait, c'est définir son *interface*, sans prejuger de la façon dont ses opérations sont implémentées.

**Implémenter**, c'est fournir le code de ces opérations. Plusieurs implémentations peuvent correspondre à la même spécification. On verra dans ce chapitre la programmation dans un style fonctionnel. Il viendra plus tard la programmation par objet.

On verra dans un premier temps, deux exemples de types abstraits: Les *listes chainées* et les *tableaux*. Dans un chapitre ultérieur, nous verrons les types abstraits *Piles*, *Files*, et *Graphes*.

# Listes chaînées
Une liste chaînée est une séquence ordonnée d'éléments.
L'avantage sur un tableau (la Liste native en Python), c'est qu'en parcourant la Liste chainée, quelle que soit la profondeur de parcours, celle-ci présente la même structure.

On peut donc lui associer des méthodes ou fonctions, qui seront indépendantes de cette profondeur. Que l'on pourra utiliser de la même manière à chaque niveau de la liste chainée.

{{< img src="../images/liste_classes.png" caption="classes à parcourir après le collège" >}}

{{< img src="../images/liste_classes2.png" caption="classes à parcourir après la 2nde" >}}


La *liste L* précédente représente la chaine: `"2nde" -> "1ere" -> "Term" -> "Univ` 

```
L = ("Univ",("Term",("1ere",("2nde", ()))))
```

La liste chainée L contient 2 éléments `(tete, queue)` et `queue` est elle-même une liste chainée, contenant aussi `(tete, queue)`. Le dernier élément: `(tete, ())`. 

On utilisera par exemple une liste chainée lorsqu'il y a une filiation, une chronologie entre les éléments.

{{< img src="../images/history.png" caption="L'historique permet au navigateur de" >}}
## L'interface d'une liste chainée
L'*interface* fournit certaines fonctions.

| fonctions qui implémentent la liste chainée L | nom |
| --- | --- |
| créer une liste vide | `creer_liste()` |
| questionner si la liste est vide | `liste_vide(L)` |
| insérer un élément **e** en tête de liste et retourne une nouvelle liste | `inserer_tete(L,e)` |
| retourne l'élément de tête (premier élément)| `tete(L)` |
| retourne la liste privée de son premier élément (retourne donc le 2<sup>e</sup> élément)| `queue(L)` |
| insere un nouvel `element_a_inserer` juste avant l'élement recherché dans la liste | `insere(L,element_recherche,element_a_inserer)` |
| retourne une liste python avec tous les éléments de la liste chainée | `elements_liste(L)` |

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

## Généralités sur les listes chainées
Une liste chainée est un objet:



* **non mutable**: 
on peut la modifier en partie (ajout/suppression d'un élément), mais sa copie se fait par valeur. 

* **dynamique**:
on peut modifier sa taille après création, par exemple en faisant: `L = inserer(L, e)`, mais cela va créer un nouvel objet.

* les éléments ont une relation d'ordre entre eux. 

* on peut atteindre un élément au rang i en temps proportionnel à i, avec une boucle par exemple.

**Mémoire**: Contrairement aux tableaux, les éléments d'une liste chaînée ne sont pas placés côte à côte dans la mémoire. Chaque case pointe vers une autre case en mémoire, qui n'est pas nécessairement stockée juste à côté.

L'**interface** d'une liste chainée doit aussi proposer **l'insertion d'un élément au rang i, en temps constant.** (Intercaler cet élément entre 2 éléments de la liste). Ceci ne peut pas être réalisé avec l'implémentation vue plus haut.

Nous verrons d'autres implémentations pour ce type abstrait.

*Attention: les listes chaînées et les Listes Python sont différentes, il ne s'agit pas des mêmes objets.*
# Tableaux
Les tableaux se comportent de manière très similaire aux listes, sauf que les types d'objets qui y sont stockés sont limités. (Array)

Un tableau peut être représenté en Python par un tuple contenant 2 éléments: 

* la liste des valeurs, de dimension fixe. On mettra `None` pour les valeurs non renseignés.
* la valeur de la taille de la liste.

Par exemple:

```python
T = ([6, 7, 8, None, None], 5)
```


C'est alors un objet qui est:

* **statique**: sa taille ne varie pas une fois celui-ci créé 
* **non mutable**: mais avec un élément qui est lui *mutable*: 

On ne peut pas modifier `T[0]` ou `T[1]`. Ce sont les éléments d'un tuple.

Mais on peut modifier en partie `T[0]`, par exemple avec une instruction du genre: `T[0][i] = x`. La copie de T[0] se fait par reference.


Un tableau peut servir à implémenter une grille de notes par exemple:

{{< img src="../images/array.png" caption="Tableau de notes" >}}
Supposons, pour simplifier, que le tableau ne contient que les notes de Kyle:

{{< img src="../images/array2.png" caption="Tableau des notes de Kyle" >}}
On peut représenter cet ensemble de notes par le tableau:

```python
T = ([6, 7, 8, None, None], 5)
```

## L'interface d'un tableau
| fonctions qui implémentent un tableau T (Array) | nom |
| --- | --- |
| taille du tableau | `taille(T)` |
| demander l'élément au rang i | `element(T,i)` |
| remplacer l'élément au rang i par e | `remplacer(T,i,e)` |


## Tableaux dynamiques et tableaux statiques
Les tableaux vus ci-dessus sont des tableaux *statiques*: leur taille ne peut pas être modifiée. Dans le cas où l'on ait besoin d'agrandir le tableau, il faut le copier dans un nouveau tableau, plus grand.

Python implémente naturellement un autre type de tableau, que l'on appelera *dynamique*: Les *Listes Python*. Ce problème de dimension n'apparait pas dans les Listes Python, qui apportent de surcroit des méthodes bien pratiques comme `append` et `pop`.



# La liste python dynamique (type list)
Le type `list` python est dynamique. Il peut lui aussi implémenter une Liste chainée ou bien un Tableau. 

Pour un Tableau, si on l'implémente avec le type `list`, la taille de celui-ci ne devra pas être modifiée à la fin du traitement.

# Editeur Python
* Utiliser un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

# Exercices sur les listes
On propose l'**implémentation** suivante pour les listes chainées:

```python
def creer_liste():
  """exemple: 
  L = creer_liste()
  """
  return ()

def liste_vide(L):
  """exemple: 
  liste_vide(L)
  """
  return L == ()

def inserer_tete(L,e):
  """exemple:
  L = inserer_tete(L,e)
  """
  return (e,L)

def tete(L):
  """exemple:
  L = (1,(2,()))
  tete(L) -> 1
  """
  return L[0]

def queue(L):
  """exemple:
  L = (1,(2,()))
  queue(L) -> (2,())
  """
  return L[-1]

def inserer(L,element_recherche,element_a_inserer):
  """exemple:
  L = (1,(2,()))
  inserer(L,2,3) -> (1,(3,(2,())))
  """
  Liste_des_elements = []
  # recherche
  while element_recherche != tete(L):
    Liste_des_elements.append(tete(L))
    L = queue(L)
  # insertion
  L = inserer_tete(L,element_a_inserer)
  for i in range(len(Liste_des_elements)-1,-1,-1):
    L = inserer_tete(L,Liste_des_elements[i])
  return L

def elements_liste(L):
  Liste_des_elements = []
  while not liste_vide(L):
    element = tete(L)
    L = queue(L)
    Liste_des_elements.append(element)
  return Liste_des_elements
  
  
```

## Exercice 1: parcours scolaire
Le `parcours` scolaire est un type abstrait qui s'apparente à une Liste. Les éléments sont disposés dans cette Liste sous la forme:

```
('Terminale', ('Premiere', ('Seconde', ())))
```

L'interface propose les fonctions suivantes:

`creer_liste, liste_vide, inserer, tete, queue`.

**1.** Quelles instructions, utilisant l'interface, vont créer la Liste `parcours_lycee` de la manière suivante: `('Terminale', ('Premiere', ('Seconde', ())))`?

**2.** Quelle instruction va permettre de connaitre la dernière classe visitée lors du parcours scolaire?

**3.** Que retourne `queue(parcours_lycee)`? *(choisir)*

* la première classe du parcours scolaire
* le parcours scolaire sans la dernière année

**4.** Que retourne le script suivant?

```python
while not liste_vide(parcours_lycee):
  print(tete(parcours_lycee))
  parcours_lycee = queue(parcours_lycee)
```

**5.** On souhaite utiliser ce type abstrait pour décrire le parcours universitaire. Quelle serie d'instructions va créer la structure de données du parcours qui ira de `Licence 1` à `Master 2`? Cette liste s'appelera `parcours_univ`

**6.** On souhaite maintenant créer une liste unique appelée `scolarite`, issue de la jonction des deux listes, `parcours_lycee` et `parcours_univ`. Ecrire le script correspondant.

## Exercice 2: composition d'un train
On cherche à implémenter la construction d'un train pour voyageurs, motrice et wagons, à l'aide d'une liste chainée.

Le train suit l'ordre suivant:

* motrice
* wagon_1
* wagon_2
* wagon_3

**1.** Qu'est ce qui est affiché par le programme suivant?

```python
L1 = creer_liste()
L1 = inserer_tete(L1,'motrice')
print(L1)
L1 = inserer_tete(L1,'wagon_1')
print(L1)
L1 = inserer_tete(L1,'wagon_2')
print(L1)
L1 = inserer_tete(L1,'wagon_3')
print(L1)
```

**2.** Quelle instruction de l'interface de liste faut-il utiliser pour consulter la nature du dernier wagon du train?

**3.** La fonction `elements_liste` va retourner les éléments de la liste chainée, en une liste python. Quelle instruction, utilisant `elements_liste`, va retourner la liste `['wagon_3', 'wagon_2', 'wagon_1','motrice']`?

**4.** INSERTION: On souhaite modifier la liste L1 et intercaler  `wagon_bar` entre le `wagon_1` et le `wagon_2`. 

* Quelle instruction utilisant la fonction `insere` de l'interface de liste va modifier L1 de cette façon? 
* Quelle sera l'objet retourné? 
* Repérer les différentes parties de cette fonction.

**5.** Supprimer le wagon de queue à l'aide d'une instruction de l'interface.






## Exercice 3: separation d'une liste
**1.** Compléter la fonction `separe` qui sépare les éléments d'une liste en deux listes selon s'ils sont inférieurs (strictement) ou supérieurs (et égal) à une valeur `v`:

```python
def separe(L,v):
  L_inf = creer_liste()
  L_sup = creer_liste()
  while not liste_vide(L):
    # à completer
    # utilise les fonctions tete, queue et insere_tete
    # 
    # 
  return L_inf, L_sup
```

**2.** Compléter alors le programme au niveau du repère ICI. Le programme affiche les 2 listes une fois celles-ci séparées. La liste L contiendra les valeurs à séparer. 

```python
L = creer_liste()
for elem in [1,3,20,18,16,11,101,12,15,2,5,4,2,8,1]:
    L = inserer_tete(L,elem)

v = 12 
# ICI, appel de la fonction separe
L_inf, L_sup = separe(L,v)
print(L_inf)
print(L_sup)
# (1, (3, (11, (2, (5, (4, (2, (8, (1, ())))))))))
# (20, (18, (16, (101, (12, (15, ()))))))
``` 

# Exercices sur les Tableaux statiques
On propose l'implémentation suivante pour les tableaux statiques:

```python
T = (['lundi','mardi','mercredi','jeudi','vendredi'],5)

def taille(T):
  """exemple:
  > taille(T)
  > 5
  """
  return T[1]

def element(T,i):
  """exemple:
  > element(T,3)
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

## Exercice 1: Utiliser l'interface du tableau

{{< img src="../images/array.png" caption="Tableau de notes" >}}

**1.** Soit le tableau qui implémente les notes de Kyle dans les matières C1, C2, C3:

```python
T = ([6, 7, 8], 3) 
```

**a.** Ecrire l'instruction qui retourne la note de Kyle dans la matière C3.

**b.** Kyle n'a pas eu 8, mais 12/20 dans la matière C3. Ecrire l'instruction qui modifie sa note 8 en 12, à partir d'une fonction de l'interface des tableaux.

**c.** Compléter le script donné plus haut pour cette fonction.

**d.** Ecrire le script d'une fonction `moyenne` qui calcule la moyenne des notes du tableau T.

**2.** Soit le tableau suivant qui implémente les notes de Kyle, Sean, Quentin et Zinedine dans les matières C1, C2, C3:

```python
T = ([[6, 7, 8],
      [10, 0, 10],
      ['?', '?', '?'],
      ['?', '?', '?']], (4,3))
```

**a.** Recopier le tableau T et remplacer les '?' par les bonnes valeurs (utiliser l'image plus haut). Que signifie le tuple `(4,3)` placé comme 2e élément du tableau?

**b.** Utiliser l'instruction `taille` de l'interface pour donner le nombre d'élèves dans le tableau. Puis le nombre de colonnes (matières):

```python
n_eleves = taille(...)
n_matieres = taille(...)
```
 
**2c.** Modifier la fonction `remplacer` pour que celle-ci modifie la note dans la matière voulue pour un élève donné. 

Par exemple: Pour modifier la note de la colonne 2 de l'élève au rang 0 (premiere ligne): 

Si on veut lui mettre 12, on fera: `remplacer(T,0,2,12)`


```python
remplacer(T,0,2,12)
T
# affiche 
([[6, 7, 12],
 [10, 0, 10],
 ['?', '?', '?']
 ['?', '?', '?']], ..)
```


**3.** Quelle instruction, utilisant la fonction `moyenne` va retourner la moyenne des notes de Zinedine?


**4.** `moyenne_matiere`
Programmer la fonction `moyenne_matiere` qui va calculer la moyenne sur une matière pour la colonne `j` d'une matrice `M`. 

Pour programmer cette fonction `moyenne_matiere(M,j)`, il faudra:

* Faire la somme $M[0][j] + M[1][j] + M[2][j] + M[3][j]$. Utiliser un **accumulateur `s` dans une boucle bornée**.
* Diviser `s` par le nombre de notes
* retourner la valeur



## Exercice 2: moyenne glissante et tableau statique
énoncé à la [page suivante](../page11).

# Liens et prolongements
* Types séquentiels natifs [cours David Latreyte](https://dlatreyte.github.io/terminales-nsi/chap-6/1-structures-integrees/)


