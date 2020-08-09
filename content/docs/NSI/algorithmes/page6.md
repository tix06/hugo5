---
Title : programmation dynamique
---
# Pré requis
* Complexité : [lien](/docs/NSI/algorithmes/page1/)
* Récursivité : [lien](/docs/NSI/langages/page2/)


# Programmation dynamique
## Principe de la méthode
La programmation dynamique permet de résoudre plus *efficacement des problèmes d'optimisation.* 

1. On établit une relation de récurrence entre la valeur de la solution optimale au problème et les valeurs des solutions optimales d'un nombre fini de problèmes plus petits.
2. On calcule la valeur de la solution optimale
3. On reconstruit la solution optimale en remontant les calculs de la valeur de la solution optimale.

Cela differe des algorithmes de type diviser pour régner par le fait que les sous-problèmes considérés ne sont pas nécessairement indépendants.

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

$$\left(\begin{matrix}i\\j\end{matrix}\right)=\left(\begin{matrix}i-1\\j-1\end{matrix}\right)+\left(\begin{matrix}i-1\\j\end{matrix}\right)$$
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



