---
Title : diviser
---
*Prérequis :* 

* voir la [page sur la complexité](../page1)
* et la [page sur la récursivité](/docs/NSI/langages/page2/)


# Diviser pour regner
C'est une technique informatique qui consiste à : 

1. Diviser : découper un problème initial en sous-problèmes ;
2. Régner : résoudre les sous-problèmes (récursivement ou directement s'ils sont assez petits) ;
3. Combiner : calculer une solution au problème initial à partir des solutions des sous-problèmes.

Cette méthode, lorsqu'elle s'applique, fournit un algorithme de complexité plus réduite, et donc plus efficace.

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




