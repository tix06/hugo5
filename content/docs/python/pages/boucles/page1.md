---
Title : boucles
---

# Boucle `for`
La boucle `for` est aussi appelée *boucle bornée*. Elle permet de repeter des instructions.

On l'utilise souvent avec un objet itérable, c'est à dire une liste que l'on peut parcourir.

`range(n)` fournit ainsi une liste d'entiers successifs que l'on peut parcourir et créer une repetition: 

```python
list(range(10))
# affiche : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

On peut alors utiliser cette liste itérable avec la boucle `for` : 

```python
for i in range(10):
  print(i)
#
0
1
2
3
4
5
6
7
8
9
```


## Boucle `for` et listes
On peut parcourir une liste de 2 manières avec une boucle `for`, selon si l'on veut avoir accès à l'indice ou seulement aux éléments:

* acceder aux seuls éléments : `for element in Liste:`
* acceder à l'indice ET aux elements : `for i,element in enumerate(Liste):`


### exemples d'algorithmes sur les listes

#### Faire la somme des éléments d'une liste
On parcours chaque élément de la liste, que l'on ajoute à `somme` : 

```python
notes = [6,5,10,18]
somme = 0
for i in notes:
    somme += i
print(somme)
# affiche : 39
```

#### Parcourir les seuls indices de la liste
Le programme suivant est équivalent au précédent. Sauf qu'ici, on ne parcours que les indices de la liste et non ses éléments : 

```python
notes = [6,5,10,18]
somme = 0
for i in range(len(notes)):
    somme += notes[i]
print(somme)
# affiche : 39
```

#### recherche d'un élément de liste et son indice
Soit no la liste des valeurs d'une population radioactive, decroissante au cours du temps. On recherche le moment où cette population est inférieure à 50. (Le rang i correspond à une durée comptée de manière itérative) : 

```python
popu = [100, 90, 81, 74, 67, 60, 54, 49, 45, 40, 36, 33]
for i,no in enumerate(popu):
  if no<=50:
    print(i)
    break
```


### comprehension de listes

Les compréhensions de listes fournissent un moyen de construire des listes de manière très concise. Une application classique est la construction de nouvelles listes où chaque élément est le résultat d’une opération appliquée à chaque élément d’une autre séquence.
[voir complement de cours](https://docs.python.org/fr/2/tutorial/datastructures.html) 

**méthode** : `[f(x) for x in <iterable>]`

exemples : 
```python
squares = [x**2 for x in range(10)]
squares
# affiche : [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
popu = [int(100*2.71**(-i/10)) for i in range(12)]
popu
# affiche : [100, 90, 81, 74, 67, 60, 54, 49, 45, 40, 36, 33]
``` 

# Boucle `while`
Un boucle `while` (tant que) s'éxecute tant qu'une condition est `True` : 

```python
num = 0
while num < 3:
  print(num)
  num += 1
# affiche
0
1 
2
```

Elle est aussi appelée *boucle non bornée*.
Il faudra veiller à ce que la boucle finisse à un moment donné. Par exemple, dans le script suivant, on met l'instruction `break` qui a pour effet d'interrompre la boucle lorsque `break` est executée : 

```python
while True : # boucle qui à priori ne finit jamais
  nom = input('Quel est votre nom ?')
  if nom == 'quitter':
    break
  print('Bonjour, {}'.format(nom))
print('sortie de la boucle')
```

Quel est votre nom ? **John** <br>
Bonjour, John!<br>
Quel est votre nom ? **quitter** <br>
sortie de la boucle<br>

# Liens
* comprehension de listes : [voir complement de cours sur python.org](https://docs.python.org/fr/2/tutorial/datastructures.html) 
