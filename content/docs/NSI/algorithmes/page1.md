---
Title : Complexité
---

# cout spatial et temporel
L'execution d'un algorithme nécessite l'utilisation des ressources de l'ordinateur : 

- complexité en temps : temps de calcul pour executer les operations. On supposera qu'il correspond au nombre d'opérations effectuées par le programme.
- complexité spatiale : occupation de la mémoire pour contenir et manipuler le programme et ses données. Peut s'exprimer en nombre de mots mémoires.

## Complexité temporelle
C'est une estimation du temps d'execution d'un programme, independamment de la machine.
En pratique, cela correspond au nombre d'opérations effectuées par le programme.

Pour evaluer la complexité temporelle, on peut mettre en evidence plusieurs opérations fondamentales. Le temps d'éxecution d'un algorithme resolvant ce genre de problème est toujours proportionnel au nombre de ces opérations : 

Pour le tri, par exemple : ces opérations fondamentales sont le nombre de comparaisons entre 2 élements et le nombre de deplacements de ces élements.


## Complexité spatiale
Il faut souvent définir une mesure sur les données qui réflète la quantité d'informations contenues. Exemple : nombre de chiffre des nombres, le nombre d'éléments manipulés, dimension d'une matrice, nombre de noeuds d'un graphe...
C'est la complexité spatiale.

# Evaluer la complexité (temporelle)
## Principe
Étant donné que la durée d'exécution d'un algorithme peut varier entre différentes entrées, on considère généralement la complexité temporelle dans le cas le plus défavorable, qui correspond à la durée maximale. 

Par exemple, avec l'algorithme de recherche séquentielle, ce temps correspondrait à trouver l'élément dans la liste comme s'il occupait la dernière position (voir [plus loin](#algorithme-de-lecture-exhaustif-recherche-linéaire)).

La complexité d’un algorithme sera alors (sauf mention contraire) exprimée sous la forme : *O*(*g*(*n*)). Ce qui correspond à la complexité *dans le pire des cas* (sa borne supérieure), ou bien, lorsque cela est pertinent, la complexité asymptotique.

En pratique, on ne comptera que les opérations estimées **importantes** : celles qui ne changent pas selon les nuances du langage utilisées lors de la programmation (boucle while et boucle for...) mais qui changent selon le problème.

## Exemple avec une boucle bornée
Voici le principe de base pour calculer la complexité d’une boucle bornée. Soit (deb,fin) ∈ Z<sup>2</sup>, considérons une boucle de type `for i in range(deb, fin):`

Alors la complexité de cette boucle est :
$$\sum_{i=deb}^{fin-1} C_i$$
où C représente la complexité de l’itération[^1] i

```python
def multiplie1(b,n)
for i in range(n):
  L.append(b*i)
```

Le programme execute n fois la ligne 3. Sa complexité est égale à n : 
$$g(n) = n$$

Si on ajoute des lignes dans la boucle `for`, pour faire par exemple : 

```python
def multiplie2(b,n)
for i in range(n):
  y = b * i
  L.append(y)
```

On pourrait penser que la complexité est $g(n) = 2\times n$. Or cette différence ne vient que d'une différence d'implémentation du même algorithme, et ne doit pas être considérée pour le calcul de la complexité. On aura alors pour cette 2^e fonction: $$g(n) = n$$.

## Boucle non bornée : variant de boucle
Le principe est le même pour une boucle non bornée (non conditionnelle), mais il est moins facile de déterminer le nombre d’itérations de la boucle. Pour ce faire, la méthode classique est d’étudier plus en détails le **variant de boucle** déjà utilisé pour prouver la terminaison de la boucle. On détermine :

* La valeur initiale du variant de boucle ;
* Sa valeur finale ;
* De combien il diminue strictement à chaque étape.

on peut alors en déduire le nombre d’itérations de la boucle.

*Exemple :* Avec `multiplie3`, le variant de boucle, c'est `i`. Sa valeur passe de n - 1 à 0. Le nombre d'instructions élementaires dans la boucle est de 3.

```python
def multiplie3(b,n)
i = n - 1
while i >=0 : 
  y = b * i
  L.append(y)
  i -= 1
```

La complexité serait alors $g(n) = 3 \times n$, mais on prendra $g(n) = n$


## Notations de **Landau** 

* **Notation O : la borne superieure :** g domine f
on note f = O(g) s'il existe un nombre réel positif a et un rang n de f<sub>n</sub> tels que f(n) ≤ a.g(n) : 

$$\exists c \in \mathbb{R}^+, tels \quad que\quad   \forall n_o \in \mathbb{N},  |f(n_o)|\leq c.|g(n)| $$

En pratique, la recherche de la complexité revient à déterminer cette fonction (ou cette suite) g. On note la complexité **O(g)**. On ignore l'eventuel coefficient multiplicateur c et on ne conserve que le terme le plus divergent dans le cas où g contienne plusieurs termes. **T(n) = O(g(n))**.

Pour l'exemple précédent, la complexité est notée **O(n)** en notation de Landau.

* **Notation &Theta; :** Lorsqu'il est possible de déterminer une fonction asymptotique de la complexité, la notation devient &Theta;(g).

# Principales classes de la complexité 
Ces complexités sont classées par temps d'execution croissant de l'agorithme correspondant.

| complexité | classe |
| --- | --- |
| &Theta;(1) | temps constant |
| &Theta;(log n) | logarithmique en base 2 : log<sub>2</sub>(n) | 
| &Theta;(n) | linéaire |
| &Theta;(n*log n) | quasi linéaire  |
| &Theta;(n<sup>2</sup>) | quadratique, polynômial   |
| &Theta;(n<sup>3</sup>) | cubique, polynômial   |
| &Theta;(2<sup>n</sup>) |  exponentiel (problème très difficiles) |

On peut observer l'evolution des courbes t(n) en fonction de n (nombre de données). t(n) sera le *temps linéaire*:

<figure>
  <img src="../images/graphique1.png">
  <figcaption>1 et log(n) : log(n) a une croissance faible</figcaption>
</figure>

<figure>
  <img src="../images/graphique2.png">
  <figcaption>n*log(n) et n ont une croissance comparable</figcaption>
</figure>

<figure>
  <img src="../images/graphique3.png">
  <figcaption>n<sup>2</sup> domine largement, et diverge</figcaption>
</figure>

<figure>
  <img src="../images/graphique4.png">
  <figcaption>n<sup>3</sup> domine largement et diverge</figcaption>
</figure>

<figure>
  <img src="../images/graphique5.png">
  <figcaption>2<sup>n</sup> domine largement et diverge encore plus</figcaption>
</figure>

Les problèmes à résoudre ont le plus souvent un nombre n de données bien supérieur à 15, comme présenté sur le dernier graphique. Les effets de convergence sont donc encore plus marqués.

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

Il en est de même pour la comparaison `j<n` : il ne faudra pas les prendre en compte pour évaluer l'algorithme.

Les opérations significatives sont donc les comparaisons de X avec les elements de la liste : il en existe une par itération.


### Calcul de la complexité
* **Complexité dans le meilleur et le pire des cas:** La complexité se situe entre 

  - Min(n) = 1 : meilleur des cas
  - et Max(n) = n : pire des cas

En notation de Landau, on écrit que la complexité (dans le pire des cas) est: **O(n)**

* **Complexité en moyenne &Theta;(g(n)):**  

<p>$$Moy_A(n) = \sum_{d \in D_n} p(d).coût_A(d)$$</p>

où p(d) est la probabilité que l'on ait la donnée d en entrée de l'algorithme.

et coût_A(d) représente la complexité en temps de l'algorithme A sur la donnée d.

## Algorithme de recherche dichotomique
### Programme python itératif
> Principe

L'algorithme de recherche dichotomique a été traité en classe de math pour rechercher la position sur l'axe des x qui donne une image nulle par la fonction f : [Lien vers l'activité de Y Monka sur maths-et-tiques.fr](https://www.maths-et-tiques.fr/telech/Algo_SolEqua.pdf)

L'idée est de réduire l'intervale des abscisses de moitié à chaque itération, jusqu'à ce que l'encadrement [a,b] de la valeur x soit inférieur à l'intervale de confiance voulu (valeur &epsilon;) : jusqu'à ce que : $b-a < \epsilon$

On va adapter le raisonnement réalisé avec la recherche du zero de la manière suivante : 

Soit une liste L d'objets triés dans l'ordre croissant (une liste de mots, ou de cartes à jouer...), et un objet X à trouver dans cette liste : On recherche la position (l'indice) de X dans la liste L en procédant par dichotomie si : 

* On part d'un intervale [a,b] sur les indices de la liste.
* On calcule le milieu (ou du moins la valeur proche) `m = (b-a) // 2`
* si X se trouve dans la partie inférieur, c'est à dire si `X < L[m]` : on prend l'intervale [a,m]
* sinon on prend l'intervale [m,b]

A chaque itération, l'intervale est réduit de moitié. Le programme s'arrête lorsque l'intervale ne contient qu'un seul indice (a et b son égaux).

*Illustration avec un jeu de cartes trié : rechercher la Dame de coeur*

<figure>
  <img src="../images/cartes_rechercheD.png">
  <figcaption>recherche dans un jeu de cartes triées</figcaption>
</figure>

Le script python complet se trouve ici : [lyceum rappels sur la recherche dichotomique](https://lyceum.fr/tg/nsi/5-algorithmique/0-rappels/#un-algorithme-efficace-la-recherche-dichotomique)

> Extrait du script 

```python
...
gauche = 0
droite = len(mots) 
trouve = False
while gauche <= droite and not trouve:
  milieu = (gauche + droite) // 2 # il, s'agit d'une division entière
...
``` 


> Complexité

* La dimension des données sera prise comme egale à `len(mots)`. Appelons cette valeur n.
* Le variant de boucle, c'est $droite-gauche$, qui vaut au départ n, et 0 à la fin de la boucle, si la valeur n'a pas été trouvée (pire des cas).
* Les instructions essentielles de la boucle, ce sont les comparaisons 
  * `mots[milieu] == X`
  * et `mots[milieu] > X`

Pour simplifier le raisonnement, disons qu'il n'y a qu'une seule instruction essentielle par itération.

A la fin de la première itération, le variant de boucle vaut n/2.

On peut alors exprimer le nombre d'opérations T(n) pour cet algorithme comme égal à : $$T(n) = 1 + T(n/2)$$

On aura, avec le même raisonnement, $$T(n/2) = 1 + T(n/4)$$

Et ainsi de suite jusqu'à ce que n//2, et le variant de boucle, soient egaux à 0. 

On a alors $T(n) = 1 + 1 + ...$ un nombre de fois égal au nombre de divisions par 2 de n, nécessaires pour amener n à 0. Cette valeur est egale à $log_2(n)$.

La complexité est alors **O(log(n))**.

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


<div class="essentiel">
 <div class="entete">
  L'essentiel à retenir
 </div>
 <div class="resume">
 </div>
 <h2>Complexité temporelle</h2>

<h3>Definition</h3>

<p>C&#8217;est une estimation du temps d&#8217;execution d&#8217;un programme, independamment de la machine.
En pratique, cela correspond au nombre d&#8217;opérations effectuées par le programme. Ce nombre d&#8217;opérations dépendant de la taille n des données en entrée, on évalue une fonction <strong>g(n)</strong>. </p>

<h3>Notation de Landau</h3>

<p>Le plus souvent, il s&#8217;agira d&#8217;estimer la complexité dans le pire des cas, exprimée sous la forme : <em>O</em>(<em>g</em>(<em>n</em>)).</p>

<p>Pour l&#8217;exemple sur la fonction <code>multiplie</code>, la complexité est notée <strong>O(n)</strong> en notation de Landau.</p>

<p>Lorsqu&#8217;il est possible de déterminer une fonction asymptotique de la complexité, la notation devient &Theta;(g).</p>

<h2>Règles pour estimer la complexité O(g(n))</h2>

<ul>
<li>Poser n = &#8220;la taille des paramètres&#8221;.</li>
<li>Ne compter que les instructions essentielles. Celles-ci apportent une unité au calcul de g(n).</li>
<li>Pour chacune des boucles du programme, repérer le <strong>variant de boucle</strong> et calculer le nombre d&#8217;itérations : combien de fois on passe dans la boucle.</li>
<li>Si g(n) contient une somme de termes, conserver uniquement le plus divergent.</li>
<li>Ne pas considérer les multiplicateurs C : si g(n) = C.f(n), alors g(n) = f(n). Par exemple, si g(n) = 3*n, prendre g(n) = n.</li>
<li>Sauf précision contraire, la complexité demandée est la complexité au pire en temps.</li>
</ul>

<h2>Principales classes de complexité</h2>

<p>Ces complexités sont classées par temps d&#8217;execution croissant de l&#8217;agorithme correspondant.</p>

<table>
<colgroup>
<col/>
<col/>
</colgroup>

<thead>
<tr>
  <th>complexité</th>
  <th>classe</th>
</tr>
</thead>

<tbody>
<tr>
  <td>&Theta;(1)</td>
  <td>temps constant</td>
</tr>
<tr>
  <td>&Theta;(log n)</td>
  <td>logarithmique en base 2 : log<sub>2</sub>(n)</td>
</tr>
<tr>
  <td>&Theta;(n)</td>
  <td>linéaire</td>
</tr>
<tr>
  <td>&Theta;(n*log n)</td>
  <td>quasi linéaire</td>
</tr>
<tr>
  <td>&Theta;(n<sup>2</sup>)</td>
  <td>quadratique, polynômial</td>
</tr>
<tr>
  <td>&Theta;(n<sup>3</sup>)</td>
  <td>cubique, polynômial</td>
</tr>
<tr>
  <td>&Theta;(2<sup>n</sup>)</td>
  <td>exponentiel (problème très difficiles)</td>
</tr>
</tbody>
</table>
</div>


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

> Décrire un algorithme vous permettant de trouver cette porte en un temps linéaire vis-à-vis de la distance qui vous sépare de celle-ci.

## Exercice 5 : 
Dans un groupe de n individus , une star est quelqu’un que tout le monde connait mais qui ne 􏰒􏰑
connait personne. Pour trouver une star, s’il en existe une, vous ne pouvez poser aux individus de ce groupe que des questions du type : « connaissez-vous x ? ».

1. Combien de stars au maximum peut-il exister dans un groupe ?
2. Donner un algorithme trouvant une star s’il en existe une (ou déterminant qu’il n’en existe pas) et de coût linéaire (en prenant comme mesure de la complexité le nombre de questions posées).

## Exercice 6 : 
Le problème est de déterminer à partir de quel étage d’un immeuble sauter par une fenêtre est 􏰒􏰑
fatal. Vous êtes dans un immeuble à n étages (numérotés de 1 à n) et vous disposez de k étudiants. Il n’y a qu’une opération possible pour tester si la hauteur d’un étage est fatale : faire sauter un étudiant par la fenêtre. S’il survit, vous pouvez le réutiliser ensuite, sinon vous ne pouvez plus.

> Vous devez proposer un algorithme pour trouver la hauteur à partir de laquelle un saut est fatal en faisant le minimum de sauts.

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
[^4]: invariant de boucle : [wikipedia](https://fr.wikipedia.org/wiki/Invariant_de_boucle)

