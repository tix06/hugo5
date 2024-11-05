---
Title: exercices sur la recursivité
bookShowToc: false
---

[RETOUR au cours sur la recursivité](../page2/)

# Ex 1: Fonction `impair`

La fonction récursive impair accepte un paramètre, N, entier positif. A chaque appel récursif, la fonction s'appelle elle-même avec l'argument N-2.

La condition de base est que N == 1 au bout d'un certain nombre d'appels.

> Completez le script de cette fonction. 

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f87256293a25&mode=code"></iframe>

{{< vitta 5f87256293a25 >}}

# Ex 2: Suite de Fibonacci
On définit la suite (f<sub>n</sub>) des nombres de Fibonacci par :
$$\left\\{\begin{matrix}\begin{align}f\_0 & =0\\\f\_1 & =1\\\f\_{n+1} & =f\_{n}+f\_{n-1}, \forall n \in \mathbb{N}^+\end{align}\end{matrix}\right.$$

```python
def fibo(n):
    """
    algo recursif
    """
    if (n==0) : return 0
    if (n==1) : return 1
    return fibo() + fibo()
```


1. Compléter la dernière ligne de la fonction `fibo` avec les bons arguments
2. Ajouter quelques lignes au script pour afficher tous les nombres de la suite de Fibonacci, du rang 0 au rang n=10.


<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f8726ff0f497&mode=code"></iframe>

{{< vitta 5f8726ff0f497 >}}

# Ex 3: Les tours de Hanoï
Le problème des tours de Hanoi est présenté en détails dans le cours sur la recursivité [ici](/docs/NSI/langages/page22/#application-les-tours-de-hanoï)


1. Dans l'editeur plus bas: Executer le script. Puis aller dans la console et tester l'exemple proposé dans le prototypage de la fonction.
2. Tester egalement avec 4 disques. Noter chaque fois le nombre de deplacements effectués.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f8727ed29a8a&mode=code"></iframe>

{{< vitta 5f8727ed29a8a >}}

*3.* Proposez une loi de recurence entre le nombre de déplacements T(N) pour N disques, et le nombre de déplacements T(N-1) pour N-1 disques.

*Aide: on pourra consulter la page [accromath](https://accromath.uqam.ca/2016/02/les-tours-de-hanoi-et-la-base-trois/).*

# Ex 4: Nombre d'occurences dans une chaine de caractères
il s'agit d'écrire une fonction recursive nombre_r(lettre, phrase) qui renvoit le nombre de fois où la lettre apparaît dans la phrase. 

* Dans le cas de base: on retourne 0 si la phrase est vide `""`.
* Pour l'heredité: On réduit la phrase en eliminant le premier caractère après chaque appel recursif: on met comme argument `phrase[1:]` à la place du paramètre `phrase`.

    * Si le caractère `phrase[0]` est identique à `lettre`: on applique la formule de recurence suivante: $u_n = 1 + u_{n-1}$ que l'on adapte ici en: `return 1 + nombre_r(lettre,phrase[1:])`

    * sinon, on adapte la formule de recurence : $u_n = u_{n-1}$

> Compléter le script et testez votre fonction avec, par exemple les arguments: `u` et `lustucru`.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f872924a7977&mode=code"></iframe>

{{< vitta 5f872924a7977 >}}

# Ex 5: Retournement d'une liste
La fonction suivante realise un retournement d'une chaine de caractères:

```python
def reverse_iterative(seq): 
    """
    Return the reverse of a string 
    use insert(index, elem) -- inserts the element at the given index, shifting elements to the right.
    Example:
    >>> reverse_iterative('abcd')
    dcba
    """
    reversed_seq = []
    for i in range(len(seq)):
        reversed_seq.insert(0, seq[i])
    return reversed_seq
```

On peut tester cette fonction dans l'editeur ci-dessous : 


```python
seq = 'abcd'
reverse_iterative(seq)
# affiche
# ['d', 'c', 'b', 'a']
```

*Aide pour l'écriture de l'algorithme récursif :* 

* le paramètre est la chaine s
* pour un caractère au rang `i`, on le permute avec le caractère au rang b: b prend la valeur de l'index `len(s) - i - 1`, c'est à dire le symétrique de la position i dans la chaine. 

Par exemple, i = 0 => a est l'index du premier caractère et b celui du dernier caractère.

{{< img src="../images/page6/reverse.png" >}}
**La condition de base:** On traite le retournement des caractères aux extremités d'une chaine dont la taille diminue au fur et à mesure des appels recursifs. 

* si la longueur de chaine est un nombre impair: Au moment où la longueur de chaine est égale à 1: Le dernier caractère non retourné est au milieu de la chaine. On renvoie ce dernier caractère: `return s`

* si la longueur de chaine est un nombre pair: Au moment où la longueur de chaine est nulle, on termine l'execution de la fonction en renvoyant `s` qui vaut `''`.


dans tous les cas, on pourra exprimer cette condition de base avec:

```python
 if len(s) <= 1:
        return s
```

La deuxième étape (la partie heredité) consiste à appeler de manière récursive la fonction après avoir permuté les caractères aux extremités: `return s[m] + milieu + s[0]`

Le milieu est constitué de la chaine retournée par l'appel recursif de la fonction avec pour paramètre le mot privé de ses 2 extremités.


> Dans l'editeur ci-dessous:

1. Tester la fonction itérative: `reverse_iterative('abcd')
2. Compléter le script de la fonction `reverse_recur` 

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=63677ac691291&mode=code"></iframe>

{{< vitta 63677ac691291 >}}

L'editeur Vittascience peut présenter des problèmes. Choisir alors un IDE local sur votre machine.

# Exercice 6: algorithme d'Euclide 
Euclide propose l’algorithme suivant:

1. Calculez le reste r dans la division de a par b
2. Si r est nul alors le pgcd est b
3. Sinon recommencer l’étape 1 avec a = b et b = r


{{< img src="../images/page2/euclide.png" >}}
> Exemple d’exécution : a = 32, b = 12 :

– 32 = (2 x 12) + 8

– 12 = (1 x 8) + 4

– 8 = (2 x 4) + 0

On a donc pgcd(32, 12) = 4

La page dédiée sur [wikipedia](https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide) propose une illustration géométrique de cette méthode. *Un couple d'entiers est vu comme un rectangle, dont le PGCD est la longueur du côté du plus grand carré permettant de carreler entièrement ce rectangle:*

{{< img src="../images/page2/euclide2.png" caption="Explication géométrique de l'algorithme d'Euclide sur les entiers 21 et 15. - source wikipedia" >}}

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

1. Tester l'algorithme itératif avec un couple de valeurs de votre choix.

Le PGCD d'Euclide calcule une suite définie par une récurence à 2 termes:

$r_0 = a$

$r_1 = b$

$r_2 = r_0 \\% ~r_1$

$r_{n+1} = r_{n-1} \\% r_n$

```python
def PGCD(a,b):
  """
  PGCD : entier correspondant au plus grand diviseur commun de a par b
  a et b : entiers tels que a > b
  b correspond à r_n, a correspond à r_{n-1}, r à r_{n+1}
  return:
  -------
  appel recursif avec b et r
  """
  if b == 0 : return a
  else:
    r = .. % ..
    return PGCD(...,...)
```

2. Compléter la fonction recursive du calcul du PGCD et vérifier son (bon) fonctionnement.



[RETOUR au cours sur la recursivité](../page2/)
# Ressources
* L'editeur en ligne est proposé par [https://fr.vittascience.com/python/](https://fr.vittascience.com/python/)
