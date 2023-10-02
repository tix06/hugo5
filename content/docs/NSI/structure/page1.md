---
Title : types abstraits
bookShowToc: false
---

<style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>


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
| insérer un élément **e** en tête de liste et retourne une nouvelle liste | `inserer(L,e)` |
| retourne l'élément de tête (premier élément)| `tete(L)` |
| retourne la liste privée de son premier élément (retourne donc le 2<sup>e</sup> élément)| `queue()` |
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

* **dynamique**:
on peut modifier sa taille après création, par exemple en faisant: `inserer(L, e)`

* et **mutable**: 
on peut le modifier en partie (ajout/suppression d'un élément), et sa copie se fait par reference. 

* dont les éléments ont une relation d'ordre entre eux. 

* dont on peut atteindre un élément au rang i en temps proportionnel à i, avec une boucle par exemple.

L'**interface** d'une liste chainée doit aussi proposer **l'insertion d'un élément au rang i, en temps constant.** (Intercaler cet élément entre 2 éléments de la liste). Ceci ne peut pas être réalisé avec l'implémentation vue plus haut.

Nous verrons d'autres implémentations pour ce type abstrait.


# Tableaux
Les tableaux se comportent de manière très similaire aux listes, sauf que les types d'objets qui y sont stockés sont limités. (Array)

C'est un objet qui est:

* statique: sa taille ne varie pas une fois celui-ci créé 
* et mutable: on peut le modifier en partie, par exemple avec une instruction du genre: `T[i] = x`. Sa copie se fait par reference.

Un tableau peut être représenté en Python par un tuple contenant 2 éléments: 

* la liste des valeurs, de dimension fixe. On mettra `None` pour les valeurs non renseignés.
* la valeur de la taille de la liste.

Par exemple:

```python
T = ([6, 7, 8, None, None], 5)
```

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
| demander l'élément au rang i | `ieme(T,i)` |
| ajouter à la fin | `ajouter(T,e)` |
| insérer l'élément e au rang i | `inserer(T,i,e)` |
| supprimer l'élément au rang i | `supprimer(T,i)` |
| remplacer l'élément au rang i par e | `remplacer(T,i,e)` |


## Tableaux dynamiques et tableaux statiques
Les tableaux vus ci-dessus sont des tableaux *statiques*: leur taille ne peut pas être modifiée. Dans le cas où l'on ait besoin d'agrandir le tableau, il faut le copier dans un nouveau tableau, plus grand.

Python implémente naturellement un autre type de tableau, que l'on appelera *dynamique*: Les *Listes Python*. Ce problème de dimension n'apparait pas dans les Listes Python, qui apportent de surcroit des méthodes bien pratiques comme `append` et `pop`.

Attention: les listes chaînées (vues plus haut) et les Listes Python sont différentes, il ne s'agit pas des mêmes objets.

# La liste python dynamique (type list)
Le type `list` python est dynamique. Il peut lui aussi implémenter une Liste chainée ou bien un Tableau. 

Pour un Tableau, si on l'implémente avec le type `list`, la taille de celui-ci ne devra pas être modifiée à la fin du traitement.

# Editeur Python
* Utiliser un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

# Exercices sur les listes
On propose l'**implémentation** suivante pour les listes chainées:

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
  L = inserer(L,e)
  """
  return [e,L]

def tete(L):
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

## Exercice sur le parcours scolaire
Le `parcours` scolaire est un type abstrait qui s'apparente à une Liste. Les éléments sont disposés dans cette Liste sous la forme:

```
['Terminale', ['Premiere', ['Seconde', []]]]
```

L'interface propose les fonctions suivantes:

`creer_liste, liste_vide, inserer, tete, queue`.

**1.** Quelles instructions, utilisant l'interface, vont créer la Liste `parcours_lycee` de la manière suivante: `['Terminale', ['Premiere', ['Seconde', []]]]`?

**2.** Quelle instruction va permettre de connaitre la dernière classe visitée lors du parcours scolaire?

**3.** Que retourne `queue(parcours)`? *(choisir)*

* la première classe du parcours scolaire
* le parcours scolaire sans la dernière année

**4.** Que retourne le script suivant?

```python
while not liste_vide(parcours):
  print(tete(parcours))
  parcours = queue(parcours)
```

**5.** On souhaite utiliser ce type abstrait pour décrire le parcours universitaire. Quelles instructions vont créer la structure de données du parcours qui ira de `Licence 1` à `Master 2`?

## Exercice sur l'historique de navigation
On cherche à implémenter l'historique du navigateur pour permettre de revenir en arrière lors de la navigation.

On visite, dans l'ordre les sites suivants:

* site 1 
* site 2
* site 3

**1.** Qu'est ce qui est affiché par le programme suivant?

```python
L1 = creer_liste()
L1 = inserer(L1,'site 1')
print(L1)
L1 = inserer(L1,'site 2')
print(L1)
L1 = inserer(L1,'site 3')
print(L1)
```

**2.** Lorsque l'on retourne en arrière, on veut acceder au dernier site visité. Supposons que cela retourne la valeur `site 3`. Quelle instruction de l'interface de liste faut-il utiliser?

**3.** On souhaite alors que cela modifie la liste L1 en supprimant  `site 3`. Quelle instruction utilisant l'interface de liste va modifier L1 de cette façon?

**4.** On revient à la liste L1 contenant la navigation sur les 3 sites. Compléter la boucle non bornée pour former la liste python `['site 3', 'site 2', 'site 1']` à partir de la liste chainée L1:

```python
L2 = []
while not liste_vide(L1):
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
Compléter la fonction `separe` qui sépare les éléments d'une liste en deux listes selon s'ils sont inférieurs (strictement) ou supérieurs (et égal) à une valeur `v`:

```python
def separe(L,v):
  L_copie = list(L)
  L_inf = creer_liste()
  L_sup = creer_liste()
  while not liste_vide(L_copie):
    # à completer
    # utilise les fonctions tete, queue et insere
    # 
    # 
  return L_inf, L_sup
```

Compléter alors le programme qui affiche les 2 listes une fois celles-ci séparées. La liste L contiendra les valeurs à séparer. Pour utiliser les fonctions de l'interface des listes chainées (voir plus haut), on créé une liste chainée à partir d'un ensemble de valeurs mises entre `[]`: 

```python
L = creer_liste()
for elem in [1,3,20,18,16,11,101,12,15,2,5,4,2,8,1]:
    L = inserer(L,elem)

v = 12 
# appel de la fonction separe
print(L_inf)
print(L_sup)
# [1, [3, [11, [2, [5, [4, [2, [8, [1, []]]]]]]]]]
# [20, [18, [16, [101, [12, [15, []]]]]]]
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

{{< img src="../images/array.png" caption="Tableau de notes" >}}

**1.** Soit le tableau qui implémente les notes de Kyle dans les matières C1, C2, C3:

```python
T = ([6, 7, 8], 3) 
```

**a.** Ecrire l'instruction qui retourne la note de Kyle dans la matière C3.

**b.** Kyle n'a pas eu 8, mais 12/20 dans la matière C3. Ecrire l'instruction qui modifie sa note 8 en 12, à partir d'une fonction de l'interface des tableaux.

**c.** Compléter le script donné plus haut pour cette fonction.

**2.** Soit le tableau suivant qui implémente les notes de Kyle, Sean, Quentin et Zinedine dans les matières C1, C2, C3:

```python
T = ([[6, 7, 8],
      [10, 0, 10],
      ['?', '?', '?']
      ['?', '?', '?']], (4,3))
```

**a.** Recopier le tableau T et remplacer les '?' par les bonnes valeurs (utiliser l'image plus haut). Que signifie le tuple `(4,3)` placé comme 2e élément du tableau?

**b.** Utiliser l'instruction `taille` de l'interface pour donner le nombre d'élèves dans le tableau? Puis le nombre de colonnes (matières).


**c.** Modifier la fonction `remplacer` pour que celle-ci modifie la note dans la matière voulue pour un élève donné. 

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

## Un nouveau type abstrait
Afin de gérer les notes des élèves de la classe de seconde 209, on veut définir un type abstrait qui permet de calculer sur les notes des élèves.

Ce type abstrait, appelé `Classe_209` va utiliser l'interface des tableaux statiques définie plus haut. Mais il va aussi calculer la moyenne des notes grâce à 2 nouvelles fonctions de son interface:

### `moyenne`: 
Fonction qui va calculer la moyenne `m` de l'élève au rang `eleve_i` (par exemple, pour Kyle, `eleve_i` vaut 0) avec l'instruction: 

```python
i = 0 # Kyle
m = moyenne(T[0][i])
``` 

Pour programmer cette fonction `moyenne(L)`, il faudra:

* parcourir toutes les notes de la liste `L` mise en paramètre.
* Ajouter la note à une variable  `s`, qui vaut 0 au depart.
* Puis, à la fin, retourner la moyenne, c'est à dire $s / len(L)$

**1.** Programmez cette fonction

### `moyenne_matiere`
Fonction qui va calculer la moyenne sur une matière `mm` à partir du rang `j`. Par exemple, pour C3, `j` vaut 2, le rang dans le Tableau de notes):

```python
j = 2 # colonne C3
mm = moyenne_matiere(T[0])
``` 

Pour programmer cette fonction `moyenne_matiere(M)`, il faudra:

* Faire la somme $M[0][j] + M[1][j] + M[2][j] + M[3][j]$
* Calculer la moyenne
* retourner la valeur

**2.** Programmez cette fonction

## moyenne glissante et tableau statique
Les courbes de données issues du monde réel sont souvent *bruitées*. Pour simuler ce type de données, nous allons créer une liste de valeurs cumulées aléatoires.

{{< img src="../images/filtre.png" caption="courbe de donnees brutes et donnees filtrees" >}}

Pour créer et afficher ces valeurs cumulées, nous créons la liste `signal2` qui est produite à partir de valeurs aléatoires (`signal0`), puis cumulées dans `signal2`:

```python
import numpy as np
from numpy.random import randn
import matplotlib.pyplot as plt

plt.clf()
signal0 = (randn(800))*2
plt.plot(signal0,color='silver',label='Signal aleatoire')
plt.grid(True,which='both')
plt.legend(loc='best')
plt.title('Signal avec bruit')

signal2 = np.cumsum(randn(800))
plt.plot(signal2,color='red',label='Signal cumulé')
plt.grid(True,which='both')
plt.legend(loc='best')
plt.show()
```

**Etapes:**

* On fait une copie par valeur de `signal2` (liste des valeurs d'origine) dans `signal_filtre` (liste dont les termes seront remplacés par la valeur moyenée).

* On choisit une certaine largeur de liste pour les valeurs dont on fait la moyenne. Par exemple largeur = 10.

* Au rang i, dans la liste bruitée `signal2`: On prélève les valeurs entre les rangs $i- largeur//2$ et $i + largeur//2$ que l'on stocke dans un tableau STATIQUE appelé `signal`. Ce tableau conserve la même *taille* pendant tout l'exercice. (ici, largeur = 10)

* On calcule la moyenne de valeurs de `signal` avec la fonction `moyenne` vue dans l'exercice précédent.

{{< img src="../images/moyenne_gli.png" caption="" >}}

* On place la valeur moyenne dans `signal_filtre[i]`

{{< img src="../images/moyenne_gli2.png" caption="" >}}

* On répète l'opération pour tous les index `i` compris entre $largeur//2,len(signal_filtre)-largeur//2)$

Puis on affiche les graphique de `signal2` (inchangé) et `signal_filtre` (courbe lissée)

**1.** Suivre ces étapes pour obtenir les graphiques des courbes de données bruitées et lissées.

**2.** Créer une fonction `lissage` à partir de votre script, qui prend en paramètres une liste `L` et une largeur `v`, et retourne une liste de valeurs filtrées par une moyenne glissante sur `v` valeurs.

<!-- Correction
```python
def moyenne(signal):
    s = 0
    b = len(signal)
    for elem in signal:
        s += elem
    return s / b



def lissage(L,largeur):
    signal_filtre = L.copy()
    for i in range(largeur//2,len(L)-largeur//2):
        signal = L[i-largeur//2:i+largeur//2]
        # signal est le petit tableau de dimension largeur 
        # dont on fait la moyenne glissante
        # puis on stocke dans signal_filtre
        signal_filtre[i] = moyenne(signal)
    return signal_filtre

signal_filtre = lissage(signal2,10)
``` 
-->


# Liens et prolongements
* Types séquentiels natifs [cours David Latreyte](https://dlatreyte.github.io/terminales-nsi/chap-6/1-structures-integrees/)


