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

# Evaluer la complexité (temporelle)
La complexité d’un algorithme sera (sauf mention contraire) exprimée sous la forme : *O*(*g*(*n*)). Il s'agira d'estimer, le plus souvent, la complexité dans le pire des cas (sa borne supérieure), ou bien, lorsque cela est pertinent, la complexité asymptotique.

En pratique, on ne comptera que les opérations estimées **importantes** : celles qui ne changent pas selon les nuances du langage utilisées lors de la programmation (boucle while et boucle for...) mais qui changent selon le problème.

Voici le principe de base pour calculer la complexité d’une boucle bornée. Soit (deb,fin) ∈ Z<sup>2</sup>, considérons une boucle de type `for i in range(deb, fin):`

Alors la complexité de cette boucle est :
$$\sum_{i=deb}^{fin-1} C_i$$
où C représente la complexité de l’itération[^1] i

Le principe est le même pour une boucle bornée (non conditionnelle), mais il est moins facile de déterminer le nombre d’itérations de la boucle. Pour ce faire, la méthode classique est d’étudier plus en détails le variant de boucle déjà utilisé pour prouver la terminaison de la boucle. On détermine :

* La valeur initiale du variant de boucle ;
* Sa valeur finale ;
* De combien il diminue strictement à chaque étape.

on peut alors en déduire le nombre d’itérations de la boucle.

On utilise les notations de **Landau :**

* **Notation O : la borne superieure :** g domine f
on note f = O(g) s'il existe un nombre réel positif a et un rang n de f<sub>n</sub> tels que f(n) ≤ a.g(n) : 

$$\exists c \in \mathbb{R}^+, tels \quad que\quad   \forall n_o \in \mathbb{N},  |f(n_o)|\leq c.|g(n)| $$

En pratique, la recherche de la complexité revient à déterminer cette fonction (ou cette suite) g. On note la complexité **O(g)**. On ignore l'eventuel coefficient multiplicateur c et on ne conserve que le terme le plus divergent dans le cas où g contienne plusieurs termes. **T(n) = O(g(n))**. 

* **Notation &Theta; :** Lorsqu'il est possible de déterminer une fonction asymptotique de la complexité, la notation devient &Theta;(g).

* Principales classes de la complexité :*
Ces complexités sont classées par temps d'execution croissant de l'agorithme correspondant.

| complexité | classe |
| --- | --- |
| &Theta;(1) | temps constant |
| &Theta;(log n) | logarithmique | 
| &Theta;(n) | linéaire |
| &Theta;(n*log n) | quasi linéaire  |
| &Theta;(n<sup>2</sup>) | quadratique, polynômial   |
| &Theta;(n<sup>3</sup>) | cubique, polynômial   |
| &Theta;(2<sup>n</sup>) |  exponentiel (problème très difficiles) |

Approfondir la notion de complexité : voir annexe[^2]

# Exemple 1 : la recherche dans une liste triée
## Enoncé du problème[^3]
Supposons que le problème posé soit de trouver un nom X dans un annuaire téléphonique qui consiste en une liste triée alphabétiquement. On peut s'y prendre de plusieurs façons différentes. En voici deux :

1. Recherche linéaire : parcourir les pages dans l'ordre (alphabétique) jusqu'à trouver le nom X cherché. C'est l'algorithme de lecture exhaustif, aussi appelé algorithme de recherche linéaire.
2. Recherche dichotomique : ouvrir l'annuaire au milieu, si le nom qui s'y trouve est plus loin alphabétiquement que le nom cherché, regarder avant, sinon, regarder après. Refaire l'opération qui consiste à couper les demi-annuaires (puis les quarts d'annuaires, puis les huitièmes d'annuaires, etc.) jusqu'à trouver le nom cherché.


## Algorithme de lecture exhaustif (recherche linéaire)
Cet algorithme pourrait fonctionner même si les mots sont rangés dans le désordre : il s'agit de parcourir tous les mots, du premier au dernier, jusqu'à tomber sur le mot recherché dans cet annuaire.

*Illustration avec un jeu de cartes non trié:* Cherchons la dame de coeur dans la main d'un joueur.

<figure>
  <img src="../images/cartes_coeur.png">
  <figcaption>main du joueur</figcaption>
</figure>

On suppose que la seule manière de parcourir le jeu du joueur est de retourner les cartes une à une. On s'arrête si on trouve la carte. Ou bien si on arrive à la fin sans avoir trouvé la bonne carte.

La fonction suivante réalise une *recherche linéaire* de la valeur X sur une liste L de valeurs numériques. Pour la recherche d'une carte dans un jeu de cartes, ou d'un nom X dans un dictionnaire, il faudra adpater légèrement le script, mais la structure est la même.

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

* condition d'arrêt : si au debut de la kieme itération de la boucle on a : k≤ n et L[k]=X, alors on s'arrête avec j=k; si on a k=n+1, alors on va s'arrêter avec j=-1.

*Remarque :* La complexité dépend de la taille des données, mais aussi, pour une taille fixée, des différentes données possibles, de leur possible redondance.

* **Complexité dans le meilleur et le pire des cas:** La complexité se situe entre 

  - Min(n) = 1 : meilleur des cas
  - et Max(n) = n : pire des cas

* **Complexité en moyenne:**  

<p>$$Moy_A(n) = \sum_{d \in D_n} p(d).coût_A(d)$$</p>

où p(d) est la probabilité que l'on ait la donnée d en entrée de l'algorithme.

et coût_A(d) représente la complexité en temps de l'algorithme A sur la donnée d.

## Algorithme de recherche dichotomique
### Programme python recursif
```python
def rechDichoAux(tabTrie,x,debut,fin):
    if debut == fin :
        if tabTrie[debut] == x:
            return debut
        else:
            return -1
    else:
        milieu= (fin-debut)//2
        if x <= tabTrie[debut+milieu]:
            return rechDichoAux(tabTrie,x,debut,debut+milieu)
        else : return rechDichoAux(tabTrie,x,debut+milieu+1,fin)

def rechDich(tab,x):
    n=len(tab)
    return rechDichoAux(tab,x,0,n-1)
```

On peut alors tester le programme (jupyter notebook):

<table>
    <tr>
        <th scope="row">IN</th>
        <td>tab = [23, 34, 45, 56, 67, 104]<br>
          rechDich(tab,67)
        </td>
    </tr>
   
    <tr>
        <th scope="row">OUT</th>
        <td>
         4
        </td>
    </tr>
</table>



### Complexité
Le second algorithme demandera dans le pire des cas de séparer en deux l'annuaire, puis de séparer à nouveau cette sous-partie en deux, ainsi de suite jusqu'à n'avoir qu'un seul nom. Le nombre d'étapes nécessaire sera le nombre entier qui est immédiatement plus grand que log<sub>2</sub>(N), qui vaut 15 lorsque N=30 000.

La complexité est alors O(log<sub>2</sub>(N))

# Exemple 2 : multiplication de matrices carrées
## Enoncé du problème
soit A = (a<sub>ij</sub>) et B = (b<sub>ij</sub>) deux matrices n*n à coefficients dans **R**.

i = numero de ligne et j = colonne

L'algorithme suivant devra calculer les coefficients (c i j) de la matrice C = A*B selon la formule : 

<p>$$c_{ij} = \sum_{k=1}^n a_{ik}.b_{kj}$$</p>

## Algorithme
```python
import numpy as np
def matrice(a,b):
    """
    calcule et retourne la matrice c produit des matrices a*b
    a et b sont supposées être des matrices carrées, de même dimension
    """
    nblignes = a.shape[0]
    nbcolonnes = b.shape[1]
    if nblignes != nbcolonnes:
        raise "value error !"
    c = np.zeros(nblignes*nbcolonnes).reshape(nblignes,nbcolonnes)
    for i in range(nblignes):
        for j in range(nbcolonnes):
            for k in range(nbcolonnes):
                c[i,j] += a[i,k]*b[k,j]
    return c
```

Voici un exemple d'utilisation de ce programme (avec jupyter notebook) : 

<table>
    <tr>
        <th scope="row">IN</th>
        <td>M1 = np.matrix((1,2,3,4,5,6,7,8,9)).reshape(3,3)<br>
          M2 = np.matrix((2,4,6,8,10,12,14,16,18)).reshape(3,3)<br>
        matrice(M1,M2)
        </td>
    </tr>
   
    <tr>
        <th scope="row">OUT</th>
        <td>
          $$\begin{align}
        array([&[60.&, 72.&, 84.],\\
       &[132.&, 162.&, 192.],\\
       &[204.&, 252.&, 300.]])\\
       \end{align}$$

        </td>
    </tr>
</table>

## Complexité
La complexité de l'algorithme matrice, comptée en nombre de multiplications de réels ne dépend que de la taille des matrices :  

* Le nombre de multiplication est :
$$\sum_{i=1}^n \sum_j \sum_k 1 = n^3 $$

* Le nombre d'additions est :
$$n^2(n-1)$$

* La complexité asymptotique est alors : 
$$Min(n) = Max(n) = Moy(n) = n^3 $$



# Exercices
## Exercice 1
Déterminer la complexité des fonctions suivantes en terme de nombre d’additions et de soustractions. On donnera d’abord la valeur exacte T(n) puis l’ordre de grandeur O(n).


```python
def truc(n): 
  res=0
  for i in range(0,n): 
    res +=1
  return res


def machin(n):
  res=truc(n)
  for i in range(0,n):
    res -=1 
  return res

def chose(n):
  res=0
  for i in range(n):
    res+=machin(i) 
  return res

def fonctionFinale(n):
  res =[]
  for i in range(0,n):
    res.append(chose(n)) 
  return res
```

## Exercice 2 : polynôme de Horner
Soit x ∈ R. On souhaite calculer 3x<sup>2</sup> + 2x + 1. 

On propose dans un un premier temps, un algorithme *naîf*, qui calcule les puissances au fur et à mesure des itérations dans la boucle : 
```python
def poly(a,x):
    """
    fonction qui calcule la valeur d'un polynôme en x
    a : liste des coefficients du polynôme de dimension quelconque
    x : valeur à renseigner
    """
    c=0
    p=1
    for i in range(len(a)):
        c += a[i] * p
        p *= x
    return c
```

1. Déterminer la liste des coefficients `a` qu'il faudra renseigner avant d'appeller la fonction `poly`.

2. Calculer le nombre d'additions et de multiplications qui sont réalisées par cette fonction, lorsque le polynôme est 3x<sup>2</sup> + 2x + 1. 
3. Généraliser ce calcul pour un polynôme de degré n, où n serait la longueur de la liste a.
4. Deuxième exemple : pour  3x<sup>3</sup> + 2x<sup>2</sup> − x + 7 : mettre l'expression sous une forme nécessitant trois multiplications. (s'aider de l'écriture de P(x) plus bas)
5. Soit x ∈ R, soit P un polynôme, soit n son degré, a<sub>0</sub>, ..., a<sub>n</sub> ses coefficients. On écrit P (x) sous la forme :
􏰃􏰁$$P(x) = a_0 + x\times(a_1+x\times(a_2+x\times(a_3+...x\times(a_n)...)))$$
Écrire un algorithme pour calculer P(x) selon cette méthode. (méthode de Horner)<br>
Combien de multiplications sont effectuées pour calculer P(x) avec cet algorithme ?

## Exercice 3 : calcul de la complexité en moyenne
On considère une liste de 4 éléments, différents, mis dans un tableau aux rangs 1 à 4. 

Si on cherche une valeur X aléatoire dans ce tableau par une méthode itérative, et que l'on fait 16 essais, il y a de plus nombreuses chances que l'on ait des résultats équiprobables : 

| n° essai | valeur aléatoire cherchée X | parcours de la liste | nombre de comparaisons T |
| --- | --- | --- | --- |
| 1 | 1 | 1 | 1 |
| 2 | 1 | 1 | 1 |
| 3 | 1 | 1 | 1 |
| 4 | 1 | 1 | 1 |
| 5 | 2 | 1 -> 2 | 2 |
| 6 | 2 | 1 -> 2 | 2 |
| 7 | 2 | 1 -> 2 | 2 |
| 8 | 2 | 1 -> 2 | 2 |
| 9 | 3 | 1 -> 2 -> 3 | 3 |
| ... | ... | ... | ... |
| 16 | 4 | 1 -> 2 -> 3 -> 4 | 4 |

On supposera que X est bien présent dans le tableau.

1. Déterminer le nombre total de comparaisons qui sont faites avec 16 essais.
2. Déterminer le nombre moyen de comparaisons qui sont effectuées.
3. Généraliser le résultat à un tableau comprenant n éléments, équiprobables, de probabilité p. Montrer que l'on trouve :
$$T(n) = p \times \tfrac{n(n+1)}{2}$$ (somme des termes d'une suite arithmétique)
4. Déterminer alors que la compléxité &Theta; de l'algorithme de recherche itérative  est linéaire en n.

## Exercice 4 : 
Vous êtes face à un mur qui s’étend à l’infini dans les deux directions. Il y a une porte dans ce 􏰒􏰑
mur, mais vous ne connaissez ni la distance, ni la direction dans laquelle elle se trouve. Par ailleurs, l’obscurité vous empêche de voir la porte à moins d’être juste devant elle.
Décrire un algorithme vous permettant de trouver cette porte en un temps linéaire vis-à-vis de la distance qui vous sépare de celle-ci.

## Exercice 5 : 
Dans un groupe de n individus , une star est quelqu’un que tout le monde connait mais qui ne 􏰒􏰑
connait personne. Pour trouver une star, s’il en existe une, vous ne pouvez poser aux individus de ce groupe que des questions du type : « connaissez-vous x ? ».
Combien de stars au maximum peut-il exister dans un groupe ?
Donner un algorithme trouvant une star s’il en existe une (ou déterminant qu’il n’en existe pas) et de coût linéaire (en prenant comme mesure de la complexité le nombre de questions posées).

## Exercice 6 : 
Le problème est de déterminer à partir de quel étage d’un immeuble sauter par une fenêtre est 􏰒􏰑
fatal. Vous êtes dans un immeuble à n étages (numérotés de 1 à n) et vous disposez de k étudiants. Il n’y a qu’une opération possible pour tester si la hauteur d’un étage est fatale : faire sauter un étudiant par la fenêtre. S’il survit, vous pouvez le réutiliser ensuite, sinon vous ne pouvez plus.
Vous devez proposer un algorithme pour trouver la hauteur à partir de laquelle un saut est fatal en faisant le minimum de sauts.

*Donnée :* on suppose k > log n


# Corrections
## correction de l'ex 2
```python
def PHorner(taba,x):
    """
    calcul de la valeur de l'expression polynome avec la methode 
    de Horner
    taba : tableau des coefficient a_i
    x : valeur de x
    sortie : P(X)=a0.1 + a1.X + a2.X^2 + ... an.X^n
    sans utiliser ** pour la puissance
    """
    v = 0 # variable accumulateur
    n = len(taba) # longueur tableau
    for i in range(0,n-1):
        v = v * x + taba[n-i-1]
    return v
```
On peut alors tester le programme (jupyter notebook):

<table>
    <tr>
        <th scope="row">IN</th>
        <td>tab = [0,1,2]<br>
        PHorner(tab,3)
        </td>
    </tr>
   
    <tr>
        <th scope="row">OUT</th>
        <td>
         7
        </td>
    </tr>
</table>




[^1]: itération : succession d'états dans un processus
[^2]: wikipedia : analyse de la complexité : [wikipedia.org/wiki/Analyse_de_la_complexité_des_algorithmes](https://fr.wikipedia.org/wiki/Analyse_de_la_complexité_des_algorithmes)

[^3]: recherche linéaire et dichotomique : [document eduscol 1ere NSI](https://cache.media.eduscol.education.fr/file/NSI/76/3/RA_Lycee_G_NSI_algo-dichoto_1170763.pdf)

