---
Title : diviser
---
*Prérequis :* 

* voir la [page sur la complexité](../page1)
* et la [page sur la récursivité](/docs/NSI/langages/page2/)


# Diviser pour regner
C'est une technique informatique qui consiste à : 

1. Diviser : découper un problème initial en sous-problèmes de tailles équivalentes;
2. Régner : résoudre les sous-problèmes (récursivement ou directement s'ils sont assez petits) ;
3. Combiner : calculer une solution au problème initial à partir des solutions des sous-problèmes.

Cette méthode, lorsqu'elle s'applique, fournit un algorithme de complexité plus réduite, et donc plus efficace.

**Definition :** Un problème est de type *diviser pour regner* si sa resolution se ramène à celle de un ou plusieurs problèmes indépendants dont la taille des entrées passe de **n** à **n/2**, ou une fraction de n. Ou bien, si la division en plusieurs problèmes permet de réduire la durée necessaire pour sa resolution.

<!--si sa complexité u<sub>n</sub> se ramène à l'étude de suites vérifiant : 
$$u\_n = a.u\_{\tfrac{n}{2}} + b.u_{\tfrac{n}{2}} + f(n)$$
-->

# Exemple introductif : téléphone en chaîne
Les 15 joueuses d’une équipe de volleyball ont la liste des joueuses de l’équipe avec leur numéro de téléphone. La capitaine reçoit l’information que le prochain match a été déplacé. Il faut prévenir toutes les autres joueuses.

* Solution 1 : la capitaine se charge d’appeler toutes les autres joueuses. Si elle passe 5 minutes au téléphone avec chacune d’entre-elles.<br>

> **Question à propos de la solution 1** *: En combien de temps (noté t1) l’ensemble de l’équipe est informé? En déduire la complexité de cette solution en fonction de n (taille de l’équipe)*

* Solution 2 : Une solution plus efficace et plus confortable pour la capitaine est qu’elle divise la liste de joueuses en deux moitiés. Elle appelle alors la première joueuse de chacune des deux listes obtenues. Elle leur donne l’information de report de match et leur demande à leur tour de faire la même chose : diviser en deux la demi-liste à laquelle elles appartiennent, appeler la première joueuse de chacune des parties et ainsi de suite ... jusqu’à ce qu’il n’y ait plus personne à prévenir.<br>
Représentons l’arbre des appels pour la liste de 15 joueuses numérotées de 1 à 15.

<figure>
  <img src="../images/page5_appels.png" width="250px" alt="arbre binaire des appels">
  <figcaption>arbre des appels</figcaption>
</figure>

> **Question à propos de la solution 2:** *Si on suppose qu’un appel téléphonique dure 5 min. En combien de temps (noté t2) l’ensemble de l’équipe est informé ? En déduire la complexité de cette solution en fonction de n (taille de l’équipe)*

**Conclusion:** La solution 2 illustre bien la méthode *Diviser pour regner* puisqu'à chaque nouvel appel telephonique, le nombre de joueuses contactées avec le même message va doubler. La durée necessaire pour la resolution du problème initial (téléphoner à toutes les joueuses) est alors réduite de manière significative.

# Exponentiation
L'exponentiation consiste à trouver une méthode pour calculer x à la puissance n, SANS utiliser l'opérateur *puissance*. L'idée est de se rappocher de l'algorithme utilisé par le processeur d'un ordinateur, qui n'utilise que les 3 opérateurs de base pour effectuer les calculs (+,-,*).

## Programme itératif
```python
def exp1(n,x) : 
  """
  programme qui donne x^n en sortie
  n : entier
  x : reel
  exp1 : reel
  """
  acc=1
  for i in range(1,n+1):
    acc*=x
  return acc
```

<div class="preuve">
  <div class="entete">
    Complexité
  </div>
  <div class="demo">
    La boucle for est exécutée n fois. Il y a, à chaque itération, une opération arithmétique qui est réalisée (multiplication par x), et une affectation (le résultat est affecté à <span class="ital">acc</span>).<br>
    Il y a donc au total : 
    <strong>2n + 1</strong> opérations.<br>
    La complexité est O(n).
  </div>
</div>

## Programme récursif
```python
def exp2(n,x):
    """
    n : entier
    x : reel
    exp2 : reel
    """
    if n==0 : return 1
    else : return exp2(n-1,x)*x
```

On pourrait montrer que la complexité est aussi O(n).

## Exponentiation rapide : application de la méthode diviser pour regner
Comme de nombreux algorithmes utilisant cette méthode, celui-ci fait des appels recursifs. Mais à la différence du précédent, l'appel recursif se fait avec un paramètre que l'on divise par 2 (le paramètre n). C'est ce qui fait que le nombre d'appels récursifs est plus réduit.
On retrouve l'étape 3 évoquée en introduction (la combinaison des sous problèmes) lorsque l'on réalise l'opération : `return y*y` ou bien `return x*y*y`.

```python
def exp3(n,x):
    """
    programme plus efficace que le precedent car
    le nombre d'operations est log2(n)
    """
    if n== 0 : return 1
    else :
        y = exp3(n//2,x)  # on prend la valeur inferieure de n/2
        if n%2==0:
            return y*y
        else : return x*y*y
```

<div class="preuve">
  <div class="entete">
    Complexité
  </div>
  <div class="demo">
    Prenons pour exemple n = 8 : <br>
    Dans la phase de descente: 
    exp3(8,x) appelle exp3(4,x) appelle exp3(2,x) qui appelle exp3(1,x) puis exp3(0,x). <br>
    Dans la phase de remontée: Une seule opération est réalisée à chaque appel recursif : y*y<br>
    C'est comme si l'on <b>dupliquait</b> le résultat de chaque multiplication (voir représentation en arbre plus bas)
    <ul>
      <li>exp3(0,x) retourne 1</li>
      <li>exp3(1,x) retourne x * 1 * 1</li>
      <li>exp3(2,x) retourne x * x</sup></li>
      <li>exp3(4,x) retourne x<sup>2</sup> * x<sup>2</sup></li>
      <li>exp3(8,x) retourne x<sup>4</sup> * x<sup>4</sup></li> 
    </ul>
    Le nombre d'opérations est le nombre de divisions par 2 qu'il faut faire pour reduire n à 0. Ce nombre est justement egal à : $$log_2(n)$$

  </div>
</div> 

<br>
<figure>
  <img src="../images/expo.png" alt="exponentiation rapide: représentation en arbre">
  <figcaption>représentation en arbre</figcaption>
</figure>

L’exponentiation rapide peut être utilisée pour des “multiplications” plus compliquées, comme la multiplication de matrices, la composition de fonctions,... Dans ces cas, il ne faut pas oublier de compter le coût de la multiplication dans les calculs, qui n’est pas toujours constant.

# Le Tri Fusion
## Principe
Le tri fusion est un autre [algorithme de tri](/docs/NSI/algorithmes/page8/). Celui-ci présente l'avantage d'utiliser la méthode *Diviser pour Regner*.

Les étapes 1 et 2 de la méthode *Diviser pour Regner* consistent à diviser la liste en 2 sous-listes, de manière recursive, jusqu'à obtenir des listes de 1 élément.

L'étape 3, enfin consiste à **interclasser** les sous-listes deux à deux.

Le tri fusion est réalisé par la fonction `fusion` suivante:

```python
def fusion(L):
    if len(L) <=1:
        return L
    m = len(L)//2
    gauche = fusion(L[:m])
    droite = fusion(L[m:])
    return interclassement(gauche,droite)
```

La fonction `fusion` ressemble à celle du *parcours récursif* d'un arbre dans lequel, pour un noeud contenant une liste L: 

* le fils gauche est la sous-liste de gauche (la première moitié de L)
* le fils droit est la sous-liste de droite (la deuxième moitié de L)

Le traitement se faisant APRES les 2 appels recursifs (gauche puis droite), le parcours s'apparente à celui appelé POSTFIXE.

<figure>
  <img src="../images/trifusion0.png" alt="tri fusion">
  <figcaption>parcours de l'arbre pour le tri fusion</figcaption>
</figure>

## Etude du tri fusion sur la liste L = [1,10,8,4,3,6]

> **Question 1:** <i>Compléter la séquence avec l'ordre des branches parcourues et les sous-listes à chaque noeud, jusqu'à ce que tout le sous-arbre gauche soit "divisée"</i>.

La **remontée** dans la pile d'appels commence lorsque l'on arrive à une sous-liste d'un seul élément pour *droite*.

La **fonction `interclassement`** prend deux listes en paramètres, L1 et L2, et retourne une seule liste avec les éléments de L1 et L2, mais classés.

> **Question 2:** *Décrire les étapes jusqu'à ce que la liste L soit triée.*

La **complexité** de la fonction `interclassement` est O(n), où n est égal à la taille de chaque sous-liste.

> **Question 3:** *Combien de fois cette fonction `interclassement` est-elle appelée pour la liste L de taille 6 vue en exemple?. Généraliser le résultat à celui d'une liste L de taille N. En déduire la complexité du tri-fusion.* 

## Complexité du tri fusion
Le tri fusion est un tri qui est **optimal** du point de vue de la complexité temporelle: il est de l'ordre O(N*log(N)). On ne peut pas trouver un algorithme plus efficace en temps.

Par contre, cet algorithme demande beaucoup de ressources *spatiales*, du fait de la construction de nombreuses sous-listes pour réaliser le tri. Ce n'est pas un *tri en place*, comme on a pu le voir avec les algorithmes essentiels vus en classe de 1ere NSI.

# Liens
* page wikipedia [https://fr.wikipedia.org/wiki/Diviser_pour_régner_(informatique)](https://fr.wikipedia.org/wiki/Diviser_pour_régner_(informatique))
* page wikipedia [https://fr.wikipedia.org/wiki/Tri_fusion](https://fr.wikipedia.org/wiki/Tri_fusion)
* animation tri fusion [lwh.free](http://lwh.free.fr/pages/algo/tri/tri_fusion.html)




