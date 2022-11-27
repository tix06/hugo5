---
Title: Tri et recherche

---

# Algorithmes de recherche
## Activité: recherche dichotomique
Imaginez un jeu où votre adversaire doit deviner le nombre que vous avez en tête.

{{< img src="../images/recherche1.png" >}}
Votre adversaire connait les bornes entre lesquelles vous avez choisi votre nombre.

Pour l'aider, vous l'informez à chacun de ses essais si le nombre dans votre mémoire est *plus grand*, ou bien *plus petit*.

Une fois que le nombre a été deviné, vous lui annoncez le nombre d'essais dont il a eu besoin.

L'algorithme que vous utilisez peut s'écrire en langage naturel:

```python
fonction devine_un_nombre(borne_inf: entier, borne_sup: entier) -> c: entier
  var N: entier[borne_inf .. borne_sup] <- tirage_aleatoire(borne_inf, borne_sup)
  var c: entier <- 0 # compteur du nombre d'essais
  var p: entier[borne_inf .. borne_sup] <- -1 # valeur proposée par l'adversaire
  tant que p != N faire:
    p <- saisie("quel nombre proposes tu?")
    c <- c + 1
    si p > N alors:
      afficher("c'est moins")
    sinon si p < N alors:
      afficher("c'est plus")
    sinon:
      afficher("bravo c'est gagné")
  fintantque
  retourner c
```

> Questions: Joue à ce jeu avec ton adversaire.

>1. Faire plusieurs parties avec pour bornes: [0 .. 100]. Quelle est la valeur de c dans chaque cas?
2. Quelles sont les  puissances m et n de 2 qui encadrent la valeur $2^n < 100 < 2^m$?
2. Jouer à ce même jeu, mais avec les bornes: [0 .. 1000]
3. Comparer c avec n et m tels que $2^n < 1000 < 2^m$

*Le jeu auquel vous avez joué est celui d'une recherche dichotomique. Vous avez cherché un élément (une valeur) dans un ensemble trié (l'ensemble des entiers [0 ..100])* 

## Cours - Recherche dans une table
### Table non triée: recherche linéaire
**Def:** La recherche dans une liste consiste à trouver un élément x dans cette liste, et retrourner l'indice de x.

Dans le cas d'une table non triée, l'algorithme de recherche le plus efficace est l'algorithme de **recherche linéaire**. 

L'algorithme suivant retourne l'index de x, ou bien -1 si x n'est pas dans la liste.

```python
def recherche_lin(T, x):
  """
  :param T: list of elements
  :param x: element
  :return: int, index of x in the list
           else -1
  """
  i = 0
  while i < len(T) and T[i] != x:
    i = i + 1
  if i >= len(T):
    return -1
  else: 
    return i
``` 

#### Questions
>1. Que retourne l'instructiion suivante: `recherche_lin([i for i in range(10)], 5)`? 
2. Que retourne l'instructiion suivante: `recherche_lin([i for i in range(10)], 10)`?

#### Efficacité de la recherche linéaire
**Def**: **L'efficacité** est mesurée par la *COMPLEXITE*: La **complexité** mesure le nombre d'opérations effectuées par la fonction. Ce nombre d'opérations dépend des *valeurs des paramètres*, mais aussi de la *taille* de ces paramètres. C'est pourquoi, il est d'usage de considérer plusieurs cas pour mesurer l'efficacité. Elle est en général exprimée comme une **fonciton de N**, où N est la **taille de la liste** passée en paramètre.

Quelles sont les **opérations** que l'on comptabilise? Pour les algorithmes de recherche, ce sont les opérations de comparaisons, dans la boucle non bornée:

```
while i < len(T) and T[i] != x
```

On peut définir ce que l'on appelle le **pire des cas**. Pour une taille N de la liste, les éléments sont rangés de telle sorte que le nombre d'opérations effectuée est maximum. Pour la recherche linéaire, c'est lorsque l'élément x ne se trouve pas dans la liste.

Dans ce cas, le **nombre d'opérations**  de comparaisons est égal à $2 \times N$. Pour simplifier, on dira que ce nombre d'opérations est **égal à N**. 

La complexité est dite *linéaire* (proportionnelle à N). Le coefficient $2 \times N$ n'a pas d'importance.

### Table triée: recherche dichotomique
**Def:** La recherche dichotomique consiste à diviser par 2 l'ensemble de recherche. Pour cela, on définit le milieu de l'intervalle de recherche, puis on conserve:

* `[borne_inf .. milieu]` si `T[milieu] > x`
* `[milieu .. borne_sup]` si `T[milieu] < x`

*Exemple:* On recherche un mot commençant par la lettre *c* dans le dictionnaire. Les lettres du dictionnaire sont dans l'ensemble [a .. z].<br>
Il s'agit d'une liste `['a','b','c','d', ..'m', ..,'x','y','z']`. <br>
Comme il s'agit d'une liste dont les indices vont de 0 à 25: Le milieu, c'est 25//2 soit 12. la lettre *c* a un rang inférieur à 12 (lettre *m*). Donc, dans une première étape de recherche, on prendra la liste entre les rangs 0 et 12 pour rechercher *c*.

```python
def recherche_dicho(T,x):
    """
    :param T: sorted list of elements
    :param x: element
    :return: int, index of x in the list
           else -1
    """
    i_min = 0
    i_max = len(T) - 1
    while (i_max >= i_min):
        mid = (i_min + i_max)//2
        if T[mid] == x:
            return mid
        elif T[mid] < x:
            i_min = mid +1
        else:
            i_max = mid -1
    return -1
```

#### Efficacité de la recherche dichotomique
Le nombre d'opérations de comparaison, dans le pire des cas, est proportionnel à `log(N)`. N étant égal à la taille de la liste. Et `log(N)` étant egal au *nombre de divisions par 2 qu'il faut effectuer pour que N arrive à 1*:

100 -> 50 -> 25 -> 13 -> 7 -> 4 -> 2 -> 1 (6 à 7 divisions)

On dit que la complexité est *logarithmique*.

# Algorithmes de tri
**Def:** un algorithme de tri permet d'organiser une collection d'objets selon une relation d'ordre. [wikipedia](https://fr.wikipedia.org/wiki/Algorithme_de_tri).

Nous nous intéressons ici aux méthodes de *tri en place*: On modifie directement le tableau à trier en permuttant des éléments, sans créer de nouveaux tableaux. 

Le tri peut être effectué avec des éléments numériques. Mais il peut aussi être effectué avec des caractères. On parle alors de tri *lexicographique*.

On a vu [deux algorithmes de tri](/pdf/NSI/algos_tri_simples.pdf): le tri par insertion, et le tri par selection. Le langage Python possède une fonction de tri native: `sorted`, et une méthode de tri associée aux listes: `sort`.

## Le tri par insertion
Chaque nouvel élément non trié est comparé avec un élément déjà trié, par ordre croissant ou décroissant dans la partie triée. Le nouvel élément est *inséré* à la *bonne place*.

*Exemple d'algorithme*

```python
def tri1(table):
    for k in range(len(table)):
        temp = table[k]
        j = k
        while j>0 and table[j-1]>temp:
            table[j]=table[j-1]
            j-=1
        table[j]=temp
    return table
```

## Le tri par selection
On recherche le plus petit élément dans la partie non triée et on l'insère à la fin de la partie *triée*.

*Exemple d'algorithme*

```python
def tri2(T):
    for i in range(len(T)-1):
        indmin = i
        for k in range(i+1, len(T)) :
            if T[k] < T[indmin] :
                indmin=k
        if indmin != i :
            T[i], T[indmin] = T[indmin], T[i]
    return T
``` 

## SORT et SORTED
### sorted(t)
fonction qui renvoie une liste triée à partir de la liste *t*. On l'utilise de la manière suivante:

```python
> t = [5, 0, 6, 4, 2]
> t1 = sorted(t)
> t1
[0, 2, 4, 5, 6]
```

### t.sort()
méthode qui modifie la liste *t*. On peut lui ajouter un paramètre, comme `reverse = True`:

```python
> t = [5, 0, 6, 4, 2]
> t.sort()
> t
[0, 2, 4, 5, 6]
> t.sort(reverse = True)
> t
[6, 5, 4, 2, 0]
```

## Tri à partir d'une clé
Lorsque les éléments à trier sont aux-mêmes des sous-listes, le tri est réalisé à partir d'une *clé*: la *clé* est l'une des valeurs de la sous-liste.

Par exemple, pour la liste suivante:

`M = [("Paulette", 93), ("Marie", 62), ("Thomas", 45), ("Jean", 50)]`

Celle-ci pourra être triée par ordre alphabetique du nom: la clé est alors la première valeur de la sous-liste:

```python
> t = sorted(M, key = lambda item: item[0])
> t
[('Jean', 50), ('Marie', 62), ('Paulette', 93), ('Thomas', 45)]
```

Mais elle peut aussi être triée par age des personnes: à partir de la 2e valeur.

```python
> t = sorted(M, key = lambda item: item[1])
> t
[('Thomas', 45), ('Jean', 50), ('Marie', 62), ('Paulette', 93)]
```

## Efficacité
La meilleure complexité que l'on peut attendre pour un algorithme de tri est quasi linéaire. Mais il s'agit d'algorithmes plus élaborés que ceux vus en classe. 

Ainsi, pour le tri par insertion, le nombre d'opérations f(N) dépend de la disposition des éléments, tel que:

$$a.N < f(N) < a.N^2$$

La complexité est *linéaire* dans le meilleur des cas (liste déjà triée), mais *quadratique* dans le pire des cas (liste triée à l'envers).

Pour le tri par séléction, le nombre d'opérations est constant, et egal à $b.N^2$. La complexité est *quadratique*.

# Documents
*{{< a link="/pdf/NSI/Algorithmiques2-algos_tri-cours.pdf" caption=" fiche de TD à compléter" >}}*{{< a link="/pdf/NSI/algorithmes2_recherche_tri.pdf" caption="fiche d'exercices" >}}
# Liens
* cours et animations sur la [page du site Lyceum](https://www.lyceum.fr/1g/nsi/8-algorithmique/2-algorithmes-de-tri)








