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
Le problème des tours de Hanoi est présenté en détails dans le cours sur la recursivité [ici](/docs/NSI/langages/page2/#application-les-tours-de-hanoï)


1. Dans l'editeur plus bas: Executer le script. Puis aller dans la console et tester l'exemple proposé dans le prototypage de la fonction.
2. Tester egalement avec 4 disques. Noter chaque fois le nombre de deplacements effectués.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f8727ed29a8a&mode=code"></iframe>

{{< vitta 5f8727ed29a8a >}}

*3.* Proposez une loi de recurence entre le nombre de déplacements T(N) pour N disques, et le nombre de déplacements T(N-1) pour N-1 disques.

# Ex 4: Nombre d'occurences dans une chaine de caractères
il s'agit d'écrire une fonction recursive nombre_r(lettre, phrase) qui renvoit le nombre de fois où la lettre apparaît dans la phrase. 

* Dans le cas de base: on retourne 0 si la phrase est vide `""`.
* Pour l'heredité: On réduit la phrase en eliminant le premier caractère après chaque appel recursif: on met comme argument `phrase[1:]` à la place du paramètre `phrase`.

    * Si le caractère `phrase[0]` est identique à `lettre`: on applique la formule de recurence suivante: u<sub>n</sub> = 1 + u<sub>n-1</sub> que l'on adapte ici en: `return 1 + nombre_r(lettre,phrase[1:]`

    * sinon, on adapte la formule de recurence : u<sub>n</sub> = u<sub>n-1</sub> 

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

1. Tester dans la console l'exemple proposé : `reverse_iterative('abcd')
2. Compléter le script de la fonction `reverse_recur` 

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=63677ac691291&mode=code"></iframe>

{{< vitta 63677ac691291 >}}

[RETOUR au cours sur la recursivité](../page2/)
# Ressources
* L'editeur en ligne est proposé par [https://fr.vittascience.com/python/](https://fr.vittascience.com/python/)
