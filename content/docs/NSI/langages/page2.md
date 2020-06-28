---
Title : recursivité
---

# Récursivité
## Principe 
Un algorithme récursif est un algorithme qui fait appel à lui-même dans le corps de sa propre définition. Ce principe est aussi appelé : *de l'autoréférence*. 

Les questions à se poser pour élaborer l'algorithme : 

- Est-ce que le problème dépend d’un (ou plusieurs) paramètre(s) ?
- Est-il possible de résoudre le problème lorsque la (les) valeur(s) du paramètre est "petite(s)" ?
- Est-il possible de résoudre le problème à l’aide de la résolution du problème portant sur une (des) "plus petite(s)" valeur(s) du paramètre ?

Définir alors : 

- La **Base** : où on s’arrête, pas d’appel récursif (par exemple `if b = 0 then return a` dans l'algo PGCD)
- **L'Hérédité**  : calcul à partir de paramètres plus "petits"

Une grande partie des problèmes peut se résoudre avec une implémentation récursive, comme avec une implémentation itérative. L'une ou l'autre peut paraître plus ou moins naturelle suivant le problème, ou suivant les habitudes du programmeur.

## Complexité d'un algorithme recursif
Pour un algorithme récursif, on compte le nombre d’appel récursif et il suffit en général de se ramener à une relation définissant une suite récurrente. On se ramène souvent à évaluer une relation du type : 

$$C_n =a\times C_{f(n)} + C$$

où : 

* C<sub>n</sub> est la complexité pour une donnée de taille n ; o a est le nombre d’appel récursif ;
* f(n) décrit la variation de n dans l’appel récursif;
* C est la complexité des calculs hors appel récursif.

| relation de récurrence | solution | comportement asymtotique |
| --- | --- | --- |
| C(n) = C(n-1) + b | C(n) = C(0) + b×n (suite arithmétique) | O(a<sup>n</sup>) |
| C(n) = a×C(n-1) + b, a ≠ 1 | C(n) = an × (C(0) – b/(1-a)) + b/(1-a) (suite géométrique)| O(a<sup>n</sup>) |
| C(n) = C(n-1) + a×n + b | C(n) = C(0) + a×n×(n+1)/2 + n×b | O(n<sup>2</sup>) |
| C(n) = C(n/2) + b | C(n) = C(1) + b×log<sub>2</sub>(n) | O(log<sub>2</sub>n) |
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

```python
def fact_recur(n):
  if (n=0) :return 1 else: return n*fact_recur(n-1)
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

# Preuve de correction d'un algorithme récursif

- terminaison : recherche du convergent
- correction / validité : recherche de l'invariant de boucle pour démontrer sa variation selon un argument de recurence
- puis finir en montrant que l'invariant de boucle ou bien le resultat obtenu repond bien à la specification de l'algorithme

# Application : recherche du PGCD
## Problème  
Etant donné deux entiers naturels n et m, calculer leur pgcd (plus grand commun diviseur)

## algorithme d'Euclide 
Euclide propose l’algorithme suivant:

1. Calculez le reste r dans la division de a par b
2. Si r est nul alors le pgcd est b
3. Sinon recommencer l’étape 1 avec a = b et b = r

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
    x=a
    y=b
    while y>0 :
        temp=y
        y=x%y
        x=temp
    return x
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
    c = a % b;
    return PGCD(b,c)
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

Les nombres de Fibonacci apparaissent aussi dans la croissance des plantes. Le nombre de pétales des différentes fleurs est souvent un nombre de la suite de Fibonacci. On remarque que l’ angle entre deux primordia successifs, tend vers L’ANGLE D’OR, et que plus les nombres successifs sont grands, plus le rapport s’approche du NOMBRE D’OR.

# Application : suite de Fibonacci
## Définitions
Fibonacci était le surnom de Léonard de Pise ( 1170 -1250) . Il a posé un problème dans lequel il cherche à calculer le nombre de couples de lapins au bout de n années, lorsqu’ils se reproduisent selon les règles suivantes :

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
    return fibonacci(n-1) + fibonacci(n-2);
```

# Application : les tours de Hanoï
## Principe
On considère trois tiges plantées dans une base. Au départ, sur la première tige sont enfilées N disques de plus en plus étroits. Le but du jeu est de transférer les N disques sur la troisième tige en conservant la configuration initiale.

**On ne peut déplacer qu'un seul disque à la fois et il est interdit de poser un disque sur un autre plus petit.**

il faut à un moment ou à un autre faire la place pour pouvoir déplacer le gros disque du dessous, ce qui impose d’avoir déplacé préalablement les N–1 plus petits sur un seul et même piquet, c’est-à-dire, d’avoir résolu préalablement le problème des tours de Hanoï pour ces N–1 disques : 

Le problème initial (déplacer N disques de A à C en utilisant B) devient donc "déplacer N-1 disques de A à B, déplacer le Nème disque de A à C, puis déplacer les N-1 disques de B à C". Dans les deux déplacements de N-1 disques, on dispose d'un troisième pilier dont on peut se servir...

<a href="http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/">
<figure>
  <img src="../images/page2/hanoi.png" alt="algorithme des tours de Hanoï" width=80%>
  <figcaption>image issue du site :<br>http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/</figcaption>
</figure></a>

## algorithme récursif
L'algorithme récursif pour ce problème est étonnament réduit : 

```python
def hanoi(n,a=1,b=2,c=3):
    if (n > 0):
        hanoi(n-1,a,c,b) # on deplace les n-1 disques de A vers B en utilisant C
        print ("Déplace ",a,"sur",c)
        hanoi(n-1,b,a,c)
```

# D'autres domaines exploitant la récursivité
La récursivité se retrouvent dans d'autres situations, où elle prend parfois d'autres noms.

L'**autosimilarité** est le caractère d'un objet dans laquelle on peut trouver des similarités en l'observant à différentes échelles.
*Exemple :* le Tapis de Sierpiński.

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sierpinski_carpet_6%2C_white_on_black.svg/440px-Sierpinski_carpet_6%2C_white_on_black.svg.png" width=300px alt="le Tapis de Sierpiński">
  <figcaption>le Tapis de Sierpiński et l'autosimilarité</figcaption>
</figure>

Les **fractales** ont cette propriété d'autosimilarité, mais elles ont plutôt à voir avec un phénomène un peu différent qui s'appel la corécurisivité (ou corécursion). Le tapis de Sierpiński, du nom de Wacław Sierpiński, est une fractale obtenue à partir d'un carré. Le tapis se fabrique en découpant le carré en neuf carrés égaux avec une grille de trois par trois, et en supprimant la pièce centrale, et en appliquant cette procédure récursivement aux huit carrés restants.

La **mise en abyme** est un procédé consistant à représenter une œuvre dans une œuvre similaire, par exemple en incrustant dans une image cette image elle-même. 

*Approfondir :* voir la page [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)

# Exercices
## Ex 1 : 
Pour les algorithmes itératifs proposés : 

* réaliser la preuve de l'algorithme. 
* écrire l'algorithme récursif
* prouver l'algorithme récursif

### algorithme 1 : longueur d'une liste
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
*Aide pour l'écriture de l'algorithme recursif :* la fonction récursive s'appelera `len_recursive`, et aura aussi pour argument `seq`. Si on veut passer en argument la liste `seq` de laquelle on retire le premier élément, on fait : `len_recursive(seq[1:])`. Il faudra alors s'inspirer de la relation de récurence suivante : $$u_{n+1} = 1 + u_n$$

### algorithme 2 : retournement d'une liste
```python
def reverse_iterative(seq): 
    """
    Return the reverse of a string 
    use insert(index, elem) -- inserts the element at the given index, shifting elements to the right.
    """
    reversed_seq = []
    for i in range(len(seq)):
        reversed_seq.insert(0, seq[i])
    return reversed_seq
```

On peut tester cette fonction dans une cellule d'un jupyter notebook : 

<table>
    <tr>
        <th scope="row">IN</th>
        <td>seq = 'abcd'<br>
        reverse_iterative(seq)
        </td>
    </tr>
   
    <tr>
        <th scope="row">OUT</th>
        <td>
         ['d', 'c', 'b', 'a']
        </td>
    </tr>
</table>

*Aide pour l'écriture de l'algorithme récursif :* 
La première étape est de définir notre scénario de base, qui vérifiera si la chaîne est égale à 0 et, si oui, retourne la chaîne elle-même.

La deuxième étape est d'appeler de manière récursif la fonction d'inversion afin d'extraire le premier caractère et ensuite l'ajouter à la fin de la chaîne (par concaténation).
On pourra s'inspirer de la relation de recurence suivante : 
$$seq_{n+1} = seq_n[1:] + seq_n[0]$$

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
    exp1 : reel
    """
    if n==0 : return 1
    else : return exp2(n-1,x)*x
```
1. Combien de produits sont necessaires pour calculer une puissance n-ième avec la fonction `exp1` ?
2. Pour la fonction `exp2` : Soit u<sub>n</sub> le nombre de produits nécessaires pour calculer une puissance n-ième. Quelle est la relation de récurrence vérifiée par u<sub>n+1</sub> ? $$u_{n+1} = u_n + ...$$
3. En déduire la complexité pour ces 2 fonctions.

# Liens
* article sur les tours de Hanoi [http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/](http://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/)
* algorithmes recursifs : [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)


