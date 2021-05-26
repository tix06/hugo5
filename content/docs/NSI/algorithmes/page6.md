---
Title : programmation dynamique
---
# Pré requis
* Complexité : [lien](/docs/NSI/algorithmes/page1/)
* Récursivité : [lien](/docs/NSI/langages/page2/)


# Programmation dynamique
## Principe de la méthode
La programmation dynamique permet de résoudre plus *efficacement des problèmes d'optimisation.* 

<!--
1. On établit une relation de récurrence entre la valeur de la solution optimale au problème et les valeurs des solutions optimales d'un nombre fini de problèmes plus petits.
2. On calcule la valeur de la solution optimale
3. On reconstruit la solution optimale en remontant les calculs de la valeur de la solution optimale.
-->

La programmation dynamique consiste à résoudre un problème en le décomposant en sous-problèmes, puis à **résoudre les sous-problèmes**, des plus petits aux plus grands **en stockant les résultats intermédiaires**.

Cela differe des algorithmes de type diviser pour régner par le fait que les sous-problèmes considérés ne sont pas nécessairement indépendants.

Cette méthode a été introduite au début des années 1950 par Richard Bellman.

## Des solutions pas toujours optimales
Parfois, le calcul des valeurs de sous problèmes est redondant : on calcule plusieurs fois la même chose. Cela n'est pas *efficace*.
La méthode demande alors de *mémoriser* ce résultat intermédiaire dans un dictionnaire ou un tableau afin de le réutiliser au besoin. Sans avoir besoin de les recalculer. La complexité spatiale augmente, mais celle temporelle diminue.

Cette méthode s'appelle : la **mémoïzation**.

# Exemple : le triangle de Pascal
## Principe
En mathématiques, le triangle de Pascal est une présentation des coefficients binomiaux dans un triangle. Il fut nommé ainsi en l'honneur du mathématicien français Blaise Pascal. Il est connu sous l'appellation « triangle de Pascal » en Occident, bien qu'il fût étudié par d'autres mathématiciens, parfois plusieurs siècles avant lui.

<figure>
  <img src="../images/page6-Pascal_triangle.jpg" width="350px" alt="triangle de Pascal">
  <a href="https://commons.wikimedia.org/w/index.php?curid=3105222"><figcaption>premières lignes du triangle de Pascal</figcaption></a>
</figure>

Cette figure permet de calculer les coefficients binomiaux d'un polynôme (x+y) à la puissance n: 

<p>
$$\begin{matrix}\begin{align}n=2, (x+y)^2 & = x^2+2xy+y^2\\n=3, (x+y)^3 & = x^3+3x^2y+3xy^2+y^3\\n=4, (x+y)^4 & = x^4+4x^3y+6x^2y^2+4xy^3+y^4\end{align}\end{matrix}$$
</p>
<p>
voir compléments sur la page wikipedia : <a href="https://fr.wikipedia.org/wiki/Triangle_de_Pascal">Lien</a>
</p>
<p>
Un coefficient quelconque du triangle, situé à la ligne i et à la colonne j est calculé à partir de la formule de récurrence : (i et j superieurs à 1)

$$C\left(\begin{matrix}i\\j\end{matrix}\right)=C\left(\begin{matrix}i-1\\j-1\end{matrix}\right)+C\left(\begin{matrix}i-1\\j\end{matrix}\right)$$
</p>

<figure>
  <img src="../images/page6_calcul.png"  width=300px>
</figure>

## Algorithme récursif non optimisé

```python
def pascal_recur(n,p):
    if p==0:return 1
    if p>n:
        return 0
    else:
        return pascal_recur(n-1,p) + pascal_recur(n-1,p-1)

def pascal(n):
    T = [[0] * (n+1) for p in range(n+1)]
    for n in range(n+1):
        for k in range(n+1):
            T[n][k] = pascal_recur(n,k)
    return T
```


On peut alors tester le programme (jupyter notebook):

<table>
    <tr>
        <th scope="row">IN</th>
        <td>pascal(9)
        </td>
    </tr>
   
    <tr>
        <th scope="row">OUT</th>
        <td>
         [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],<br>
 [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],<br>
 [1, 2, 1, 0, 0, 0, 0, 0, 0, 0],<br>
 [1, 3, 3, 1, 0, 0, 0, 0, 0, 0],<br>
 [1, 4, 6, 4, 1, 0, 0, 0, 0, 0],<br>
 [1, 5, 10, 10, 5, 1, 0, 0, 0, 0],<br>
 [1, 6, 15, 20, 15, 6, 1, 0, 0, 0],<br>
 [1, 7, 21, 35, 35, 21, 7, 1, 0, 0],<br>
 [1, 8, 28, 56, 70, 56, 28, 8, 1, 0],<br>
 [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]]
        </td>
    </tr>
</table>

On remarque que l'on calcule souvent les mêmes coefficients binomiaux : 

<figure>
  <img src="../images/page6_arbre_binomiaux.png" alt="arbre de calculs binomiaux" width=300px>
  <figcaption>arbre de calcul des coefficients pour n=4 p=2</figcaption>
</figure>

La mémoïzation consistera alors à stocker dans un tableau les solutions pour les sous-problèmes afin de ne pas les recalculer...

## Algorithme avec mémoïzation
Chaque valeur du triangle n'est calculée qu'une seule fois.

```python
def trianglePascal(n):
    T = [[0] * (n+1) for p in range(n+1)]
    for n in range(n+1):
        if n == 0:
            T[n][0] = 1
        else:
            for k in range(n+1):
                if k == 0:
                    T[n][0] = 1
                else:
                    T[n][k] = T[n-1][k-1] + T[n-1][k]
    return T
```


# Le problème du rendu de monnaie 
## énoncé du problème
Le problème du rendu de monnaie est un problème d'algorithmique. Il s'énonce de la façon suivante : étant donné un système de monnaie (pièces et billets), comment rendre une somme donnée de façon optimale, c'est-à-dire avec le nombre minimal de pièces et billets ?

Par exemple, la meilleure façon de rendre 7 euros est de rendre un billet de cinq et une pièce de deux, même si d'autres façons existent (rendre 7 pièces de un euro, par exemple).

<figure>
  <img src="../images/caisse.png" width="350px" alt="caisse rendu monnaie">
  <figcaption>Image by <a href="https://pixabay.com/users/conmongt-1226108/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2048569">Christian Dorn</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2048569">Pixabay</a></figcaption></a>
</figure>

## algorithme naif 
Une première idée, naïve serait, pour une somme `cost` à rendre, et un systeme de monnaie appelé `caisse` :

```python
pour chaque piece de caisse, parcouru en sens decroissant:
    si cost > piece
    n = cost // piece
    ajouter n pieces dans le rendu de monnaie
    cost = cost - n * piece
```

Le programme python est donné en annexe. Les essais sont proposés ci-dessous:

```python
>>> caisse = {1,2,5,10,20,50}
>>> rendre(93,caisse) # OK optimal
{1: 1, 2: 1, 5: 0, 10: 0, 20: 2, 50: 1}
>>> caisse = {1,10,15}
>>> rendre(21,caisse) # non optimal
{1: 6, 10: 0, 15: 1}
``` 

* Lorsque l'on veut rendre 93 à l'aide d'une caisse constituée de billets ou de pieces de {1,2,5,10,20,50}, le résultat est:

    * 1 billet de 50
    * 2 billets de 20
    * 1 piece de 2
    * 1 piece de 1

Ce rendu est optimal: on ne peut pas rendre moins de billets/pieces.

* Lorsque l'on veut rendre 21 à l'aide d'une caisse constituée de billets ou de pieces de {1, 10, 15}, le résultat est:

    * 1 piece de 15
    * 6 pieces de 1

Ce rendu n'est pas optimal. On trouve une solution, mais celle-ci contient trop de pieces.

Contrairement aux problèmes étudiés précédement (tri d’un tableau, calcul de x<sub>n</sub>...), où il y avait toujours une unique solution, dans les problèmes d’optimisation, il peut y avoir des solutions valides (satisfaisant les contraintes) non optimales, une ou plusieurs solutions (valides), optimales (minimisant/maximisant une certaine mesure), voire pas du tout de solution valide. 

Si la taille du ou des paramètres en entrée est importante, il n'y a pas d'algorithme déterministe efficace. (on ne peut pas trouver LA solution au problème en parcourant toutes les solutions possibles car la complexité est trop grande).

On utilise alors d'autres stratégies, qui donneront parfois une solution, parfois une solution optimale. C'est ce que l'on réalise avec la programmation dynamique.

Le problème du rendu de monnaie est *NP-difficile* relativement au nombre de pièce et billet du système monétaire considéré. (voir annexe).

## algorithme de type dynamique

On cherche à créer une liste de rendu de monnaie pour chaque montant de 0 à x. L'idée est que si le rendu de monnaie pour x < `valeur_seuil` est connu de manière optimale, alors pour x > `valeur_seuil`, on recherche le meilleur moyen de rendre la monnaie. 

Pour rendre x, il faut au moins une pièce, à prendre parmi n pieces possibles. Une fois choisie cette pièce, la somme restante inférieure strictement à x, donc on sait la rendre de façon optimale. Il suffit donc d'essayer les n possibilités.

Exemple: Rendre 15 avec des pieces de {1, 7, 9}. Ce type de caisse ne donnerait pas le résultat optimum avec le précédent algorithme. Ici, cela peut-être souvent réalisé, comme le montre le tableau ci-dessous:

| montant à rendre | rendu |
| --- | --- |
| 15 | 3 pieces avec **[1,1],[7,2],[9,0]** (Bon) ou 7 avec [1,6],[7,0],[9,1] |
| 14 | 2 pieces avec **[1,0],[7,2],[9,0]** (Bon) ou 6 avec [1,5],[7,0],[9,1] |
| 13 | 7 pieces avec [1,6],[7,1],[9,0] ou 5 avec **[1,4],[7,0],[9,1]** (Bon) |
| 12 | [1,5],[7,1],[9,0] ou **[1,3],[7,0],[9,1]** (Bon) |
| 11 | [1,4],[7,1],[9,0] ou **[1,2],[7,0],[9,1]** (Bon) |
| 10 | [1,3],[7,1],[9,0] ou **[1,1],[7,0],[9,1]** (Bon) |
| 9 | [1,2],[7,1],[9,0] ou **[1,0],[7,0],[9,1]** (Bon) |
| 8 | [1,1],[7,1],[9,0] |
| 7 | [1,0],[7,1],[9,0] |
| 6 | [1,6],[7,0],[9,0] |
| 5 | [1,5],[7,0],[9,0] |
| 4 | [1,4],[7,0],[9,0] |
| 3 | [1,3],[7,0],[9,0] |
| 2 | [1,2],[7,0],[9,0] |
| 1 | [1,1],[7,0],[9,0] |

L'algorithme remplit le tableau depuis la valeur 1 jusqu'à 15.

Le tableau montre les choix que réalise l'algorithme.

**Remarque:** Ce problème est [NP-complet](https://fr.wikipedia.org/wiki/Probl%C3%A8me_NP-complet) dans le cas général, c'est-à-dire difficile à résoudre. Cependant pour certains systèmes de monnaie dits canoniques, l'[algorithme glouton](https://fr.wikipedia.org/wiki/Algorithme_glouton) est optimal.

# Le problème du sac à dos
Un problème très similaire est celui du sac-à-dos. Supposons que vous découvriez la caverne d'Ali Baba (et des 40 voleurs), il y a une infinité d'objets de valeur `v1, v2, · · · , vn` mais chaque objet de valeur `vi` a un poids de `pi`. Comment remplir votre sac-à-dos avec le contenu qui rapportera le plus, sachant que votre sac ne supporte qu’un poids `W`?

<figure>
  <img src="../images/sacados.png" width="350px" alt="probleme du sac a dos">
  <figcaption>illustration du probleme du sac à dos</figcaption></a>
</figure>

# Le problème du voyageur du commerce
le problème du voyageur de commerce, est un problème d'optimisation qui, étant donné une liste de villes, et des distances entre toutes les paires de villes, détermine un plus court circuit qui visite chaque ville une et une seule fois.

Malgré la simplicité de son énoncé, il s'agit d'un problème d'optimisation pour lequel on ne connait pas d'algorithme permettant de trouver une solution exacte rapidement dans tous les cas. Plus précisément, on ne connait pas d'algorithme en temps polynomial, et sa version décisionnelle (pour une distance D, existe-t-il un chemin plus court que D passant par toutes les villes et qui termine dans la ville de départ ?) est un problème [NP-complet](https://fr.wikipedia.org/wiki/Probl%C3%A8me_NP-complet). Voir annexe pour précisions.

Pour résoudre ce problème, une heuristique gloutonne (programmation dynamique) construit une seule solution, par une suite de décisions définitives sans retour arrière, parmi ces méthodes on cite le plus proche voisin, la plus proche insertion, la plus lointaine insertion et la meilleure insertion. Il n'est pas certain que la méthode donne la meilleure solution.

La figure suivante aide à la resolution. La solution optimale est celle qui va joindre tous les noeuds du graphe, une seule fois. (Cycle hamiltonien)<br>
Des solutions possibles, mais non optimales sont celles qui permettent de visiter tous les noeuds une seule fois, mais dont la distance parcourue cumulée n'est peut-être pas la plus courte.

<figure>
  <img src="../images/hamilton.png" width="350px" alt="cycle hamiltonien">
  <figcaption>illustration de la recherche d'un cycle hamiltonien dans un graphe.</figcaption></a>
</figure>

Mais une illustration plus concrête est celle par exemple du problème de la tournée du candidat pour les élections présidentielles aux état-unis:

<figure>
  <img src="../images/tournee.png" width="350px">
  <figcaption>tournée du candidat à la presidentielle</figcaption></a>
</figure>

# Annexes
## Programmes python du rendu de monnaie
### algo naîf
```python
def estvide(ensemble):
    """
    fonction qui teste si un ensemble est vide
    retourne True si vide
    False sinon
    """
    vide = True
    for i in ensemble:
        vide = False
    return vide

def nbPieces(monnaie):
    """
    calcule le nombre de pieces pour un dictionnaire monnaie
    clé=type de piece / valeurs=nombre de pieces
    """
    nb = 0
    for i in monnaie:
        nb = nb+monnaie[i]
    return nb

def rendre(cost,caisse):
    """
    fonction qui rend la monnaie sur une somme cost (int) selon le 
    contenu de la caisse (une variable de type set)
    en commençant par la plus grande des pieces.
    caisse : la caisse du commerçant (set)
    rendu : ce que rend le commerçant (dict)
    à chaque itération de la boucle, on retire la piece de l'ensemble caisse 
    qui est utilisée jusqu'à ce que caisse soit vide
    """
    ### initialisation ###
    rendu = {}
    for i in caisse : 
        rendu[i] = 0
    
    while not estvide(caisse):
        piece = max(caisse)
        n = cost//piece
        cost = cost - n*piece
        rendu[piece] = n
        caisse.remove(piece)       
    return rendu


    

caisse = {1,2,5,10,20,50}
rendre(93,caisse) # OK optimal

caisse = {1,10,15}
rendre(21,caisse)
```

essais

```python
>>> caisse = {1,2,5,10,20,50}
>>> rendre(93,caisse) # OK optimal
{1: 1, 2: 1, 5: 0, 10: 0, 20: 2, 50: 1}
>>> caisse = {1,10,15}
>>> rendre(21,caisse) # non optimal
{1: 6, 10: 0, 15: 1}
``` 

## Complexité
### Rappels

**Complexité temporelle d’un algorithme**. Il s’agit du nombre d’opérations élémentaires executées par l’algorithme dans un pire cas (une instance en entrée qui demande le plus de calculs). Cette complexité est exprimée en fonction de la “taille de l’entrée”. Par exemple, nous avons vu des algorithmes de tri avec des complexité en O(n2) ou en O(nlogn) avec n la longueur du tableau en entrée.


### Problèmes P

Un problème est dit **polynomial** si il existe un algorithme pour le résoudre dont la complexité peut s’exprimer comme un polynôme de la taille de l’entrée (comme c’est le cas pour des problèmes de tri). L’ensemble des problèmes polynomiaux est noté P et est considéré comme un ensemble de problèmes “faciles” (ils peuvent être résolus relativement efficacement).


Un *exemple de problème polynomial* est celui de la *connexité dans un graphe*. Étant donné un graphe à n sommets (on considère que la taille de la donnée, donc du graphe, est son nombre de sommets), il s'agit de savoir si toutes les paires de sommets sont reliées par un chemin. Un algorithme de parcours en profondeur construit un arbre couvrant du graphe à partir d'un sommet. Si cet arbre contient tous les sommets du graphe, alors le graphe est connexe.([wikipedia](https://fr.wikipedia.org/wiki/P_(complexité)))

### Problèmes NP

Une autre classe de problèmes importante est celle des problèmes dont on peut tester en temps polynomial si une solution est valide (par exemple, je vous donne un tableau et vous devez non pas le trier mais me dire si il est déjà trié ou non). Cette classe s’appelle NP pour **Non déterministe Polynomial**. 

Si un problème est connu comme étant NP et si une solution au problème est connue, la démonstration de l’exactitude de la solution peut toujours être réduite à une vérification P (temps polynomial). Les algorithmes de cette classe sont non déterministes.

Le problème de savoir si P = NP est un des problèmes du millénaire de l’institut de mathématiques Clay. Informellement, il s’agit de savoir si vérifier efficacement qu’une "solution à un problème est bien une solution valide" revient à "pouvoir trouver efficacement une solution valide au problème."

### Problèmes NP-complets

Les problèmes dits NP-complets sont des problèmes au moins aussi difficiles que les plus difficiles de la classe NP.

Tous les algorithmes connus pour résoudre des problèmes NP-complets ont un temps d'exécution exponentiel en la taille des données d'entrée dans le pire des cas, et sont donc inexploitables en pratique même pour des instances de taille modérée. On peut donc raisonnablement penser qu'il est inutile d'en chercher une solution sous forme d'un algorithme de complexité polynomiale.

*Exemples de problèmes NP-complets:*

On y retrouve les problèmes de décision (oui/non) et d'optimisation (max ou min d'une fonction), dont les problèmes vus plus haut.

# Liens
* [wikipedia: la programmation dynamique](https://fr.wikipedia.org/wiki/Programmation_dynamique)
* [wikipedia: le problème du rendu de monnaie](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_rendu_de_monnaie)
* [wikipedia: le problème du sac à dos](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_sac_%C3%A0_dos)
* [wikipedia: le problème du voyageur du commerce](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_voyageur_de_commerce)
* [programmation dynamique: site Pixees.fr, David Roche](https://pixees.fr/informatiquelycee/n_site/nsi_term_algo_progdyn.html)

