---
Title: exercices sur la recursivité
---

[RETOUR au cours sur la recursivité](../page2/)

# Ex 1: Fonction `impair`

La fonction récursive impair accepte un paramètre, N, entier positif. A chaque appel récursif, la fonction s'appelle elle-même avec l'argument N-2.

La condition de base est que N == 1 au bout d'un certain nombre d'appels.

> Completez le script de cette fonction. 

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f87256293a25&mode=code"></iframe>

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

# Ex 3: Les tours de Hanoï

1. Dans l'editeur plus bas: Executer le script. Puis aller dans la console et tester l'exemple proposé dans le prototypage de la fonction.
2. Tester egalement avec 4 disques. Noter chaque fois le nombre de deplacements effectués.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f8727ed29a8a&mode=code"></iframe>

Les questions relatives à cet exercice sont sur la fiche d'exercices: *Langages 2 - exercices - recursivité*

# Ex 4: Nombre d'occurences dans une chaine de caractères
il s'agit d'écrire une fonction recursive nombre_r(lettre, phrase) qui renvoit le nombre de fois où la lettre apparaît dans la phrase. 

On réduit la phrase en eliminant le premier caractère après chaque appel recursif: on met comme argument `phrase[1:]` à la place du paramètre `phrase`.

* Si le caractère `phrase[0]` est identique à `lettre`: on applique la formule de recurence suivante: u<sub>n</sub> = 1 + u<sub>n-1</sub> 

que l'on adapte ici en: `return 1 + nombre_r(lettre,phrase[1:]`

* sinon, on adapte la formule de recurence : u<sub>n</sub> = u<sub>n-1</sub> 

> Compléter le script et testez votre fonction avec, par exemple les arguments: `u` et `lustucru`.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f872924a7977&mode=code"></iframe>

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
Définition des variables: 

* la chaine seq est transformée en une liste: `seq = list(seq)`.
* a prend la valeur de l'index i : `a = i`
* b prend la valeur de l'index `len(seq) - i - 1`, c'est à dire le symétrique de la position i dans la chaine. Par exemple, i = 0 => a est l'index du premier caractère et b celui du dernier caractère.

<figure>
  <img src="../images/page6/reverse.png">
</figure>

La première étape est de définir notre scénario de base, qui vérifiera si la différence d'index `b-a` est égale à 0 et, si oui, retourne la chaîne seq.

La deuxième étape est d'appeler de manière récursive la fonction d'inversion après avoir permuté les caractères aux index a et b: `seq[a], seq[b] = seq[b],seq[a]`. La fonction récursive sera appelée avec le nouveaux arguments `seq` et `i+1`.


> Dans l'editeur ci-dessous:

1. Tester dans la console l'exemple proposé : `reverse_iterative('abcd')
2. Ecrire le script de la fonction `reverse_recur` qui prend la chaine de caractères `seq` ainsi que l'index `i` en paramètres.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f872e51766b0&mode=code"></iframe>

[RETOUR au cours sur la recursivité](../page2/)
# Ressources
* L'editeur en ligne est proposé par [https://fr.vittascience.com/python/](https://fr.vittascience.com/python/)
