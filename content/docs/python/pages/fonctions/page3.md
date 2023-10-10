---
Title: fonctions et Turtle
---

Le module Turtle ![](../images/t1.png) permet d’avoir un environnement simple muni d’une interface graphique. 

La [page suivante](https://perso.limsi.fr/pointal/_media/python:turtle:turtleref.pdf) présente un aide-mémoire avec les principales instructions.


# Premier tracé
Se rendre sur l'editeur en ligne: [https://pythonandturtle.com/turtle](https://pythonandturtle.com/turtle)

Copier-coller le script ci-dessous. Executer et analyser celui-ci.

```python
import turtle

t = turtle.Turtle('turtle')
t.speed(8)
t.width(2)

def carre(largeur):
    t.pendown()
    t.color('red')
    t.forward(largeur)
    t.left(90)
    t.forward(largeur)
    t.left(90)
    t.forward(largeur)
    t.left(90)
    t.forward(largeur)
    t.left(90)
    t.penup()
          
largeur = int(input('entrer la largeur'))
carre(largeur)
turtle.done()
```

Un script Python devra suivre une certaine structure pour la position de l'import des modules, déclaration de variables, des fonctions, et enfin le programme principal:

{{< img src="../images/t2.png" caption="premier script avec le module turtle" >}}

Le programme principal finira par `turtle.done()`, ce qui execute le tracé.

### 1. Modifier la fonction `carre`: utiliser une boucle bornée
Modifier pour avoir un script qui utilise le moins de lignes possibles pour cette fonction. Utiliser une boucle `for`.

**question 1.:** recopier le script de votre fonction

### 2. Une variante du programme: dessiner un rectangle
Definir et utiliser une fonction `rectangle` pour tracer un rectangle. On définira une nouvelle variable `longueur` qui sera utile comme paramètre de la fonction. 

La valeur de cette variable sera introduite par une fonction `input`, comme pour `largeur`.

**question 2.:** recopier le script de votre fonction

# 3. Dessiner des spirales
## 3.1. Avec des carrés emboités
Dans un carré de côté 100, on trace un carré dont les sommets sont situés au tiers des côtés du carré initial, et on répète *indéfiniment* l’opération.

{{< img src="../images/t5.png" >}}

Effacer les instructions de la partie *Programme principal*.

On utilisera une boucle non bornée avec le variant `largeur`. La condition d'execution pourrait être par exemple, `largeur>20`:

```python
while largeur > 20:
	# instructions
```

A chaque itération: 

* dessiner un carré avec la fonction `carre` et le paramètre `largeur`.
* avancer de $1/3 \times largeur$ 
* tourner de 26.565 degrés
* reduire la largeur d'un facteur 0.745: `largeur = largeur * 0.745`

**question 3.1.:** recopier le script de votre programme principal

## 3.2. Avec des segments
Effacer les instructions de la partie *Programme principal*.

Ajouter une fonction `spirale` qui devra reproduire une figure sur le modèle de la suivante:

{{< img src="../images/t4.png" >}}

* La fonction utilisera un paramètres: la `longueur` du segment initial
* le nombre d'itérations `N` voulues

Dans la fonction  `spirale`: utiliser une boucle bornée `for` pour executer un certain nombre de traits.

**question 3.2.:** recopier le script de votre fonction


