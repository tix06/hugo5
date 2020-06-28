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

**Definition :** Un problème est de type *diviser pour regner* si sa complexité u<sub>n</sub> se ramène à l'étude de suites vérifiant : 
$$u\_n = a.u\_{\tfrac{n}{2}} + b.u_{\tfrac{n}{2}} + f(n)$$

# Exemple introductif : téléphone en chaîne
Les 15 joueuses d’une équipe de volleyball ont la liste des joueuses de l’équipe avec leur numéro de téléphone. La capitaine reçoit l’information que le prochain match a été déplacé. Il faut prévenir toutes les autres joueuses.

* Solution 1 : la capitaine se charge d’appeler toutes les autres joueuses. Si elle passe 5 minutes au téléphone avec chacune d’entre-elles.
**Question** : En combien de temps (noté t1) l’ensemble de l’équipe est informé? En déduire la complexité de cette solution en fonction de n (taille de l’équipe)

* Solution 2 : Une solution plus efficace et plus confortable pour la capitaine est qu’elle divise la liste de joueuses en deux moitiés. Elle appelle alors la première joueuse de chacune des deux listes obtenues. Elle leur donne l’information de report de match et leur demande à leur tour de faire la même chose : diviser en deux la demi-liste à laquelle elles appartiennent, appeler la première joueuse de chacune des parties et ainsi de suite ... jusqu’à ce qu’il n’y ait plus personne à prévenir.

Représentons l’arbre des appels pour la liste de 15 joueuses numérotées de 1 à 15.

<figure>
  <img src="../images/page5_appels.png" width="250px" alt="arbre binaire des appels">
  <figcaption>arbre des appels</figcaption>
</figure>

**Question :** Si on suppose qu’un appel téléphonique dure 5 min. En combien de temps (noté t2) l’ensemble de l’équipe est informé ? En déduire la complexité de cette solution en fonction de n (taille de l’équipe)

# Exponentiation
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
    exp3(8,x) appelle exp3(4,x) appelle exp3(2,x) qui appelle exp3(1,x) puis exp3(0,x). Une seule opération est réalisée à chaque appel recursif : y*y<br>
    Le nombre d'opérations est le nombre de divisions par 2 qu'il faut faire pour reduire n à 0. Ce nombre est justement egal à : $$log_2(n)$$

  </div>
</div> 

L’exponentiation rapide peut être utilisée pour des “multiplications” plus compliquées, comme la multiplication de matrices, la composition de fonctions,... Dans ces cas, il ne faut pas oublier de compter le coût de la multiplication dans les calculs, qui n’est pas toujours constant.

# Liens
* page wikipedia [https://fr.wikipedia.org/wiki/Diviser_pour_régner_(informatique)](https://fr.wikipedia.org/wiki/Diviser_pour_régner_(informatique))




