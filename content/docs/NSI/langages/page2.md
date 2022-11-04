---
Title : recursivité
---

Le cours comprend une [page d'exercices](../page6/) avec un *editeur python online*.

# Récursivité
## Principe 
Un algorithme récursif est un algorithme qui fait appel à lui-même dans le corps de sa propre définition. Ce principe est aussi appelé : *de l'autoréférence*. 

<!--
Les questions à se poser pour élaborer l'algorithme : 

- Est-ce que le problème dépend d’un (ou plusieurs) paramètre(s) ?
- Est-il possible de résoudre le problème lorsque la (les) valeur(s) du paramètre est "petite(s)" ?
- Est-il possible de résoudre le problème à l’aide de la résolution du problème portant sur une (des) "plus petite(s)" valeur(s) du paramètre ?
-->

## Analyse d'un exemple: itératif => récursif
Considérons une fonction `ajoute2_iter` qui prend N comme paramètre, et qui ajoute N fois 2. 

### Algorithme itératif
Supposons que nous souhaitions éviter la multiplication. L'algorithme itératif utilisera alors une boucle bornée:

```python
def ajoute2_iter(N):
  """ajoute 2 un nombre N de fois
  """
  s = 0
  for i in range(N):
    s = s + 2
  return s
``` 
*Résultat*

```
>>> ajoute2_iter(10)
20
```

### Algorithme récursif
*Rappel de math:* Une suite est une succession ordonnée d’éléments pris dans un ensemble donné.

On a la **relation de récurence** sur les éléments de la suite $u_n$:

$$u_{n+1} = 2 + u_n$$


On va adapter cette relation dans l'appel de la fonction:


```python
def ajoute2(N):
    """fonction qui s'appelle elle-meme N fois
    """
    if N==0 : 
        return 0
    else:
        return 2 + ajoute2(N-1)
```
*Résultat*

```
>>> ajoute2(10)
20
```

## Principe d'un algorithme récursif

L'algorithme récursif comprend 2 parties importantes: 

- La **Base** : c'est le cas pour lequel le problème se resoud immediatement, par exemple : 

```
  if N==0 : 
        return 0
```

dans le script `ajoute2`: le problème se resoud immediatement pour N == 0).

- **L'Hérédité**  : calcul à partir de paramètres plus "petits" : `return 2 + ajoute2(N-1)`. 

Une définition plus générale serait que, pour l'hérédité, il y a un appel recursif avec un argument qui se rapproche plus de la condition de base.

```
def fonction_recursive(param):
  if <cas de base> : 
    return value
  else:
    # instructions
    fonction_recursive(f(param))
```
 
*Remarque:* Une instruction conditionnelle est incluse dans le corps de la fonction pour forcer la fonction à retourner sans que l’appel de récurrence soit exécuté (La **Base**). Sans cela, le programme pourrait tourner en boucle...

## Comparatif itératif - récursif
Une grande partie des problèmes peut se résoudre avec une implémentation récursive, comme avec une implémentation itérative. L'une ou l'autre peut paraître plus ou moins naturelle suivant le problème, ou suivant les habitudes du programmeur.


|  |  Itératif | Récursif |
|--- |--- |--- |
| Principe | Permet d'executer plusieurs fois l'ensemble des instructions | La fonction s'appelle elle-même |
| Format | L'itération comprend  l’initialisation, la condition, l’exécution de l’instruction dans une boucle et la mise à jour (incrémenter et décrémenter) la variable de contrôle. | Seule la condition de terminaison est spécifiée. |
| Terminaison | L’instruction d’itération est exécutée plusieurs fois jusqu’à ce qu’une certaine condition soit atteinte. | Si la fonction ne converge pas vers une condition appelée (cas de base), elle conduit à une récursion infinie. |
| Taille du script | L'itération rend le script plus long | Taille du script réduite |

Enfin, l'algorithme récursif utilise une *pile d'appels*, comme vu sur l'animation suivante:

<figure>
  <img src="https://lyceum.fr/644c0bfaf567173ce9856250e140d861/animation-puiss-recursive.gif" alt="animation recursivité puissance">
  <figcaption>animation issue de la page <a href="https://lyceum.fr/tg/nsi/4-langages-et-programmation/4-recursivite">lyceum - puissance recursive</a></figcaption>
</figure>

Il est facile de traiter des suites avec la méthode récursive:

* factorielle
* suite de Fibonacci.


## exemple : factorielle
### programme itératif

```python
def fact(n):
  res = 1
  for i in range(1,n+1):
    res=res*i
  return res 
```



<div class="preuve">
  <div class="entete">
    Prouver l'algorithme itératif
  </div>
  <div class="demo">
    <ol>
      <li>terminaison : l'algorithme consiste en une boucle qui execute n itérations. Le <strong>convergent</strong> n-i decroit strictement à chaque itération et on sort de la boucle quand il vaut 0.</li>

      Chaque iteration contient un nombre fini d'opérations élémentaires : 1 mutiplication et 1 affectation. Donc il termine après 2n+1 operations.
      <li>correction (ou validité) : 
      On prouve par recurrence sur le nombre d'iterations qu'apres la ieme iteration de la boucle for : res=i!</li>

      Preuve par récurrence : après la 1ere itération, res = 1  ! (OK)<br>

      Hypothèse de récurrence : (H.R.) supposons qu'après la ieme itération, res=i ! Montrons qu'après la (i+1)ieme iteration, res=(i+1)! :

      avant la (i+1)e iteration, res = i ! 

      La (i+1)e iteration multiplie res par i+1, donc après la (i+1)e iteration, $$res= i! \times (i+1) = (i+1)!$$

      Après n iterations, res contient n ! donc le resultat est celui attendu.
    </ol>
  </div>
</div>


### Programme recursif
On a la **relation de récurence** suivante: $$u_{n} = n\times u_{n-1}$$

et $$u_0 = 1$$:

```python
def fact_recur(n):
  if (n==0) :return 1 else: return n*fact_recur(n-1)
```

On pourrait représenter la pile d'execution de cette fonction de la manière suivante : 

```
Appel à fact_recur(4)
| 4*fact_recur(3) = ? 
| Appel à fact_recur(3)
| | 3*fact_recur(2) = ? 
| | Appel à fact_recur(2)
| | | 2*fact_recur(1) = ? 
| | | Appel à fact_recur(1)
| | | | 1*fact_recur(0) = ? 
| | | | Appel à fact_recur(0) 
| | | | Retour de la valeur 1
| | | | 1*1
| | | Retour de la valeur 1
| | | 2*1
| | Retour de la valeur 2
| | 3*2
| Retour de la valeur 6
| 4*6
Retour de la valeur 24
```



<div class="preuve">
  <div class="entete">
    Prouver l'algorithme recursif
  </div>
  <div class="demo">
  Dans le cas d'un algo recursif, pas de convergent ni d'invariant de boucle. On prouve par recurrence sur n.

  <ol>
    <li>Teminaison : si n=0, fact(0) fait un test et renvoie 1, sans appel recursif.</li>

    Hypothèse de récurrence : fact(n) termine après n appels recursifs. Montrons que fact(n+1) termine après (n+1) appels recursifs.<br>

    fact(n+1) fait un test n+1>0 donc on passe au `else` puis on appelle fact(n) par recurrence qui termine apres n appels recursifs. Finallement fact(n+1) termine après (n+1) appels recursifs.

    <li>correction : par recurrence fact(n) = n ! :</li>

    pour n = 0 : fact(n) = fact(0) = 1 = 0! (OK)<br>

    si vrai pour n, alors fact(n+1) = (n+1)*fact(n) et par hyp H.R., fact(n) = n! donc (n+1)*n! = (n+1)! (OK)
  </ol>
  </div>
</div>

### Complexité
Calcul de la complexité : Soit T(n) le nombre d'opérations fondamentales. Pour une fonction récurrente, c'est le nombre de résolution de la fonction de récurence.<br>
On a T(n) = T(n-1) + 1 donc T(n) = n

# Analyser un algorithme récursif
## Preuve de correction d'un algorithme récursif

- terminaison : recherche du convergent
- correction / validité : recherche de l'invariant de boucle pour démontrer sa variation selon un argument de recurence
- puis finir en montrant que l'invariant de boucle ou bien le resultat obtenu repond bien à la specification de l'algorithme

## Complexité d'un algorithme recursif
Pour un algorithme récursif, on compte le nombre d’appel récursif et il suffit en général de se ramener à une relation définissant une suite récurrente. On se ramène souvent à évaluer une relation du type : 

T<sub>n</sub> =a * T<sub>f(n)</sub> + T

où : 

* T<sub>n</sub> est la complexité pour une donnée de taille n ; a est le nombre d’appel récursif ;
* f(n) décrit la variation de n dans l’appel récursif;
* T est la complexité des calculs hors appel récursif.

| relation de récurrence sur T | solution | comportement asymtotique |
| --- | --- | --- |
| T(n) = T(n-1) + b | T(n) = T(0) + b×n (somme de termes constants)| O(n) |
| T(n) = a×T(n-1) + b, a ≠ 1 | T(n) = an × (T(0) – b/(1-a)) + b/(1-a) (suite géométrique)| O(a<sup>n</sup>) |
| T(n) = T(n-1) + a×n + b | T(n) = T(0) + a×n×(n+1)/2 + n×b (suite arithmetique pour le 2e terme) | O(n<sup>2</sup>) |
| T(n) = T(n/2) + b | T(n) = T(1) + b×log<sub>2</sub>(n) | O(log<sub>2</sub>n) |

# Application : recherche du PGCD
## Problème  
Etant donné deux entiers naturels n et m, calculer leur pgcd (plus grand commun diviseur)

## algorithme d'Euclide 
Euclide propose l’algorithme suivant:

1. Calculez le reste r dans la division de a par b
2. Si r est nul alors le pgcd est b
3. Sinon recommencer l’étape 1 avec a = b et b = r


<figure>
  <img src="../images/page2/euclide.png">
</figure>

> Exemple d’exécution : a = 32, b = 12 :

> – 32 = (2 x 12) + 8

> – 12 = (1 x 8) + 4

> – 8 = (2 x 4) + 0

> On a donc pgcd(32, 12) = 4

## Algorithme PGCD itératif
```python
def euclide(a,b):
    """
    a et b sont des entiers, a > b
    euclide retourne un entier qui est le PGCD de a et b
    """
    r = a % b
    while r>0 :
        a = b
        b = r
        r = a % b
    return b
```

<div class="preuve">
  <div class="entete">
    Prouver l'algorithme itératif
  </div>
  <div class="demo">
    <ol>
      <li>Terminaison : on utilise une boucle non bornée avec y qui est le convergent. On affecte à y le reste de la division par y (c'est donc inferieur à y). y décroit ainsi jusqu'à 0, ce qui est la condition de fin de la boucle.</li>
      <li>Correction : Tout diviseur commun de a et b divise aussi r = a - bq, et réciproquement tout diviseur commun de b et r divise aussi a = bq + r. Donc le calcul du PGCD de a et b se ramène à celui du PGCD de b et r. <br>l'invariant de boucle, c'est donc :<br>
      euclide(a,b) = euclide(b, a modulo b)<br>
      C'est ce qui est réalisé par la fonction, puisque l'on a comme valeurs pour les couples (x,y) successivement : <br>
      (a,b)<br>
      (b, a mod b)<br>
      (a mod b, (a mod b) mod (a mod b))...<br>
      (* , 0)<br>
    </li>
  </ol>
</div>
</div>

## algorithme recursif
```python
def PGCD(a,b):
  """
  PGCD : entier correspondant au plus grand diviseur commun de a par b
  a et b : entiers tels que a > b
  """
  if b == 0 : return a
  else:
    r = a % b;
    return PGCD(b,r)
```






# Application : suite de Fibonacci
## Définitions
Fibonacci était le surnom de Léonard de Pise (1170 -1250) . Il a posé un problème dans lequel il cherche à calculer le nombre de couples de lapins au bout de n années, lorsqu’ils se reproduisent selon les règles suivantes :

* Lors de la première année, l'éleveur démarre avec un couple de lapins nouveaux nés.
* Un couple de lapins donne naissance à un nouveau couple tous les ans, à partir de la 2ème année (la 1ère année, il est trop jeune).

On peut compléter le tableau suivant présentant l'effectif de ces couples de lapins : 

| numero de l'année | nombre de couples de l'année précédente | nouveau nombre de couples |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 2 | 1 | 1 + 0 |
| 3 | 1 | 1 + 1 |
| 4 | 2 | 2 + 1 |
| 5 | 3 | 3 + 2 |
| 6 | ... | ... |

On définit la suite (f<sub>n</sub>) des nombres de Fibonacci par :
$$\left\\{\begin{matrix}\begin{align}f\_0 & =0\\\f\_1 & =1\\\f\_{n+1} & =f\_{n}+f\_{n-1}, \forall n \in \mathbb{N}^+\end{align}\end{matrix}\right.$$

Les nombres de Fibonacci apparaissent aussi dans la croissance des plantes. Le nombre de pétales des différentes fleurs est souvent un nombre de la suite de Fibonacci. On remarque que l’ angle entre deux primordia successifs, tend vers L’ANGLE D’OR, et que plus les nombres successifs sont grands, plus le rapport s’approche du NOMBRE D’OR.

## Algorithme itératif
```python
def fibonacci(n) :
    """
    fonction qui prend en paramètre n, entier sup ou egal à O.
    cette fonction utilise une variable f de type tableau.
    A la fin, cette fonction retourne f[n], le terme de rang n du 
    tableau f qui contient les éléments entiers calculés selon l'algorithme 
    de fibonacci où l'élement de rang i est la somme des elements i-1 et i-2.
    """
    f = []
    f.append(0)
    f.append(1)
    if n<2:return f[n]
    for i in range (2,n+1): 
        f.append(f[i-1] + f[i-2])
    return f[n]
```

*Exercice :* Ecrire un programme qui permet d'afficher tous les nombres de la suite de Fibonacci, du rang 0 au rang n=10.

## Algorithme récursif
```python
def fibo(n):
    """
    algo recursif
    """
    if (n==0) : return 0
    if (n==1) : return 1
    return fibonacci(n-1) + fibonacci(n-2)
```

<div class="preuve">
  <div class="entete">
    Complexité
  </div>
  <div class="demo">
On prouve par récurrence que le cas le pire (c'est à dire celui où le nombre d'itérations à exécuter est le plus grand), est celui où a et b sont des termes consécutifs de la <strong>suite de Fibonacci</strong>. Cela revient à montrer que  deux termes successifs de la suite de Fibonacci sont premiers entre eux.
(si leur plus grand diviseur commun est 1)

<ul><li>La propriété est vraie pour n = 1 : f<sub>2</sub> et f<sub>1</sub> sont premiers entre eux.</li>
<li>Supposons que f<sub>n</sub> et f<sub>n-1</sub> soient premiers entre eux :<br>
Soit d le PGCD de fn et fn+1, alors d divise f<sub>n+1</sub>– f<sub>n</sub>.<br>
d est à la fois diviseur de f<sub>n+1</sub> et f<sub>n</sub><br>
Or : (suite de Fibonacci)<br>
$$f_{n+1} = f_n + f_{n-1}$$
Donc : 
$$f_{n-1} = f_{n+1} - f_n$$
Il faut alors que f<sub>n-1</sub>, f<sub>n+1</sub> et f<sub>n</sub> aient un même diviseur, d. Or le diviseur commun de f<sub>n-1</sub> et f<sub>n</sub> est 1, donc d = 1.
</li>
</ul>
Dans ce <strong>pire</strong> cas, la complexité de l'algorithme est alors O(log<sub>10</sub> b). C'est proportionnel au nombre de divisions euclidiennes réalisées.
</div>
</div>


Parfois, l'algorithme récursif n'est pas le plus performant: Pour l'exemple de la suite de Fibonacci, on constate que les mêmes calculs sont répétés plusieurs fois, comme fibo(2) dans le cas présent pour N = 4):

<figure>
  <img src="../images/page2/fibo.png">
  <figcaption>pile d'appels pour la suite de fibonacci recursive</figcaption>
</figure> 

# Suite du cours
La récursivité intervient aussi dans de nombreux problèmes où elle s’impose comme la méthode la plus adaptée, pour ne pas dire la seule. Un exemple historique est celui des tours de Hanoi. Un jeu inventé par Edouard Lucas, vers 1880. Son traitement sur ordinateur a fait sensation, grâce à la simplicité de son script récursif...

> <a href="../page22">Suite du cours sur la recursivité</a> (Les tours de Hanoi, fractales, permutations,...)

# Exercices
## Ex 1 : longueur d'une liste
 

### algorithme itératif : 
```python
def len_iterative(seq): 
    """
    Return the length of a list (iterative) 
    """
    count = 0
    for elt in seq:
        count = count + 1 
    return count
```

#### 1. réaliser la preuve de cet algorithme. 

### algorithme récursif

#### 2. Ecrire le script python de l'algorithme récursif

*Aide pour l'écriture de l'algorithme recursif :* la fonction récursive s'appelera `len_recursive`, et aura aussi pour argument `seq`. Si on veut passer en argument la liste `seq` de laquelle on retire le premier élément, on fait : `len_recursive(seq[1:])`. Il faudra alors s'inspirer de la relation de récurence suivante : $$u_{n+1} = 1 + u_n$$ lors de l'appel recursif.



## Ex 2 : Exponentiation
Etudions l'exponentiation à travers deux exemples.
```python
def exp1(n,x) : 
  """
  programme qui donne x^n en sortie sans utiliser **
  n : entier
  x : reel
  exp1 : reel
  """
  acc=1
  for i in range(1,n+1):
    acc*=x
  return acc

def exp2(n,x):
    """
    n : entier
    x : reel
    exp2 : reel
    """
    if n==0 : return 1
    else : return exp2(n-1,x)*x
```

1. Combien de produits sont necessaires pour calculer une puissance n-ième avec la fonction `exp1` ?
2. Pour la fonction `exp2` : Soit u<sub>n</sub> le nombre de produits nécessaires pour calculer une puissance n-ième. Quelle est la relation de récurrence vérifiée par u<sub>n+1</sub> ? $$u_{n+1} = u_n + ...$$
3. En déduire la complexité pour ces 2 fonctions.

# Autres exercices avec editeur online
[Lien vers la page des exercices](../page6/)

# Liens
* article sur les tours de Hanoi [http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/](http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/)
* algorithmes recursifs : [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)


