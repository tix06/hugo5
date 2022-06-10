---
Title: listes
---

  
# Listes et boucles bornées
## Listes
**1. Definition:** Une **liste** est une collection ordonnée d'objets.
Une **liste** est entourée de **crochets** `[ ]`

On accède à un élément d'une liste grace à sa position, appelée *indice*. Le premier élément a pour indice zero. 

<figure>
  <img src="../images/liste.png">
  <figcaption>La liste `voyelles` est une collection contenant les caractères<br>
  "e","i" et "o"</figcaption>
</figure>

Un indice négatif donne accès à la liste à partir du dernier élément.

```python
voyelles = ['e','i','o']
voyelles[0]
# affiche e
voyelles[1]
# affiche i
voyelle[2]
# affiche o
voyelles[-1]
# affiche o
voyelles
# affiche ['e','i','o']
```

**2. Modifier les éléments d'une liste**
On ne peut modifier un élément d'une liste que si celui-ci existe. Par exemple, si l'on veut modifier l'élément "e" au rang zero de la liste `voyelles` par un "a", il faut faire:

```python
voyelles = ['e','i','o']
voyelles[0] = "a"
voyelles
# affiche ["a","i","o"]
``` 

Par contre, la liste ne contenant que 3 éléments, du rang 0 au rang 2, on ne peut pas ajouter l'élément "u" de la manière suivante:

```python
voyelles[3] = "u"
# affiche
IndexError: list assignment index out of range
``` 

> Mais alors, quelle est la bonne méthode pour ajouter un élément à une liste?

**Il faut utiliser une méthode de liste: la méthode** `append`

```python
voyelles = ['e','i','o']
voyelles.append("u")
voyelles
# affiche ["e","i","o","u"]
```

**3. Autres méthodes de liste TRES utiles**
> Retirer un élément de liste: méthode `pop`

```python
voyelles = ["e","i","o","u"]
voyelles.pop()
voyelles
# affiche ["e","i","o"]
```

> Longueur d'une liste: fonction `len`

```python
voyelles = ["e","i","o","u"]
len(voyelles)
# affiche 4 
# car la liste contient 4 éléments
```

**4. Liste de listes** 
Les éléments contenus peuvent aussi être une liste:

```python
positions = [[0,0], [1,2], [2,4]]
```

C'est la représentation d'un tableau, qui sur un tableur peut être représenté sous la forme suivante:

<figure>
  <img src="../images/tableau.png">
</figure>

Les éléments de la liste `positions` sont `[0,0]`, `[1,2]`, et `[2,4]`

Pour accéder au deuxieme élément `[1,2]`, on fait:

```python
positions[1]
# retourne
[1,2]
```

Et pour acceder au premier élément du 2e élément de `posiotns`, c'est à dire à la valeur 1, on fait:

```python
positions[1][0]
# retourne
1
```
Cela permet d'afficher ou modifier la valeur 1.

## Boucles bornées
**1. Definition:** Une **boucle bornée**  est un système d’instructions qui permet de répéter un certain nombre de fois toute une série d’opérations.

La syntaxe d'une boucle bornée, en langage algorithmique peut s'écrire:

```python
Pour i allant de 0 a n-1
Faire:
   instruction 1
   instruction 2
FinPour
```

En python, la syntaxe correspondante est:

```python
for i in range(n):
  instruction 1
  instruction 2
``` 

* **Remarques:**

  * Le bloc d'instruction sera executé n fois. Celui-ci peut contenir une ou plusieurs instructions, du moment qu'elles sont bien positionnées dans le bloc.
  * En *Python*, le **bloc** est identifié par une **indentation**: un retrait par rapport au bord gauche, comprenant 2 espaces (ou 4).
  * Pour sortir du bloc, on élimine l'indentation (on revient sur le bord gauche)
  * La fonction `range(n)` renvoie la liste des entiers de 0 à n-1. C’est un principe général en informatique, on commence toujours à compter à partir de 0, et il faut donc s’arrêter à n-1 pour effectuer n fois la boucle.
  * Pour chaque itération, le variant `i` prend une nouvelle valeur de l'ensemble `{0,1,2,... n-1}`, et peut être utilisé dans le bloc d'instructions. 
  * On peut choisir n'importe quel nom pour le variant, pas seulement `i`.

* *Exemple*

```python
for c in range(3):
  print(c)
# affiche
0
1
2
```

**2. Parcourir les éléments d'une liste L avec `range(len(L))`**

```python
L = ["a","b","c"]
for i in range(len(L)):
  print(i, L[i])
# affiche
0 a
1 b
2 c
```
**3. Parcourir les éléments d'une liste L avec `in L`**

```python
L = ["a","b","c"]
for c in L:
  print(c)
# affiche
a
b
c
```

**4. Tracer un graphique y = f(x)**
Pour tracer un graphique `y=f(x)`, il faut disposer de 2 listes de mêmes dimensions `x` et `y`. Les coordonnées des points sont alors:

* (x[0],y[0]) pour le point M<sub>0</sub> 
* (x[1],y[1]) pour le point M<sub>1</sub> 
* ...

On utilise la fonction `plt.scatter` (nuage de points) ou bien `plt.plot` (courbe) du module `matplotlib.pyplot` qui est importé à la premiere ligne du script de la manière suivante: `import matplotlib.pyplot as plt`

Les 2 listes sont positionnées entre parenthèses, dans l'ordre (liste des X, liste des Y). Ce sont les arguments de la fonction `plt.scatter` (ou de `plt.plot`).

```python
import matplotlib.pyplot as plt
temps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
T = [20, 20, 22, 24, 28, 32, 38, 44, 52, 60]
plt.clf()
plt.grid()
plt.scatter(temps,T)
plt.xlabel('temps(min)')
plt.ylabel('Temperature(°C)')
plt
```


<figure>
  <img src="../images/graphique.png">
</figure>



# Travaux pratiques
<a href="../page3" target=_blank>Lien vers l'editeur Python et l'énoncé du TP</a>
