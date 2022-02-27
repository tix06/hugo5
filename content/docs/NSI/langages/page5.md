---
Title : mise au point 
---

# Mise au point d'un programme
Les consignes suivantes sont adaptées au langage Python. Il s'agit d'un recueil de *bonnes* pratiques.

Pour créer une cohérence dans le code, il est recommandé d'utiliser un *guide de style*. Il s'agit de PEP8 sur [https://python.org](https://python.org).

Une première façon de gérer les erreurs passe par la documentation. Le but de la documentation est de permettre à l'utilisateur d'une fonction de savoir comment l'appeler correctement et comment interpréter sa valeur de retour.

## Spécification d'un algorithme
Construire un algorithme consiste à découvrir les actions qu'il faut organiser dans le temps, et à choisir la manière de les organiser pour obtenir le résultat escompté par leurs effets cumulés. La *spécification* doit permettre d'aider à cette construction, sans ambiguïté.

La spécification de l'agorithme doit comprendre : 

* Le nom donné à cet algorithme. Ce nom soit être explicite, en rapport avec la tâche effectuée par l'algorithme
* Une description du résultat de cet algorithme, ainsi que la manière avec laquelle on va s'y prendre
* Le type et la nature des données en *entrée* 
* Le type et la nature des données en *sortie*
* eventuellement, le type et la nature des variables internes

*Exemple :* recherche_maximum
```
"""
L'algorithme recherche la valeur maximale dans la liste.
variables en entrée : 
------------------
:ma_liste : list, une liste de valeurs entieres, uniques, mises dans un ordre aléatoires.
:max : int, stocke la valeur maximale actuelle. Initialisé à 0.
Sortie :
------
:max : int, prend la valeur de l'élément le plus grand de la liste
Principe : 
--------
on parcourt la liste avec une boucle bornée.
si la valeur la valeur de max est inferieure à la valeur courante, max est actualisée avec cette valeur courante
Exemple:
> recherche_maximum([0,2,3,1])
3
--------
"""
max := 0
pour i allant du premier au dernier element de ma_liste faire
    si i > max  
        max := i
    fin
fin
afficher max
```

Le *pseudo langage* adopté est celui utilisé dans wikipedia : [exemple](https://fr.wikipedia.org/wiki/Tri_fusion)

## Prototypage d'une fonction
Une fonction doit être déclarée avant son utilisation. Cette déclaration est le prototype de la fonction. Le prototype doit indiquer à l'utilisateur le nom de la fonction, le type de la valeur de retour et le type des paramètres.

Pour de nombreux langages, ce prototypage est explicite, et cela provoque une erreur de compilation si ce prototypage n'est pas correct.

*Exemple de déclaration d'une fonction en langage ADA :*

```ada
function A_Rect(larg : natural ; long : natural) return natural is
  A : natural ; 
begin
  A:= larg * long;
  return A;
end A_Rect ;
```

En python, malheureusement, ce prototypage est facultatif, mais il fait partie des *bonnes méthodes* de le réaliser.

En python, on pourra construire le prototypage dans le commentaire, mis tout de suite après la déclaration de la fonction : 

```python
def a_rect(larg,long):
    """Le produit de 2 nombres.
    Renvoie le produit des 2 nombres passés en argument
    
    :param larg : int ou float
           la largeur du rectangle
           
    :param long : int ou float
           la longueur du rectangle
    
    :return a: int ou float
            larg * long
    
    Exemple
    -------
    >>> a_rect(2,3)
    6
    """
    a = larg * long
    return a
``` 

On voit que le prototypage d'une fonction donne à peu près les mêmes informations que la *spécification d'un algorithme*.

Pour accéder au contenu du prototypage depuis le shell python, il faudra charger le fichier: `> from fichier import *`, puis utiliser `help`:

```python
> help(a_rect)
```

Pour sortir de la fenêtre de l'aide, appuyer sur la touche `q`.



On pourra consulter la page du site [Lyceum](https://lyceum.fr/1g/nsi/7-langages-et-programmation/6-fonctions) pour plus d'informations.

## Ajouter un Doctest
Le doctest est un module qui recherche dans le prototypage (docstring) de la fonction ce qui pourrait s'apparenter à des tests sur la fonction.

Comme par exemple:

```
>>> a_rect(2,3)
6
```


On écrit alors une simulation d'un essai directement dans le docstring, en écrivant de manière explicite les 3 chevrons. Ainsi que la valeur attendue pour des arguments choisis. (voir le paragraphe précédent)

Pour réaliser des tests sur la fonction, on ajoutera alors à la suite du script les lignes suivantes:

```python
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```
Supposons que l'on ait fait une erreur dans la fonction `a_rect` sur la valeur calculée, et que l'on ait écrit:

```python
    a = long * long
    return a
```

alors la console affichera, à l'execution du programme:

```
Failed example:
    a_rect(2,3)
Expected:
    6
Got:
    9
```

Documentation officielle :[Lien](https://docs.python.org/fr/3/library/doctest.html#module-doctest)

# Prévoir et gérer les erreurs
## Traceback
L'exécution d'un programme peut provoquer une erreur, une *exception*. Lorsque c'est le cas, l'exécution s'arrête immédiatement et l'interpréteur Python affiche une trace d'erreur.

Cette dernière fournit des informations quant au chemin d'exécution qui a mené jusqu'à l'erreur et sur la cause de cette dernière.

La console affiche `Traceback`, qui marque le début de la trace d'erreur.

On peut distinguer 3 types d'erreurs : 

* erreur de syntaxe
* erreur d'execution
* erreur de logique

```python
def inverse (x):
    y = 1.0 / x
    return y

a = inverse(2)
print(a)
b = inverse(0)
print(b)
```
L’interpréteur Python affiche ce qu’on appelle la pile d’appels ou pile d’exécution. La pile d’appel permet d’obtenir la liste de toutes les fonctions pour remonter jusqu’à celle où l’erreur s’est produite.

```python
ZeroDivisionError                         Traceback (most recent call last)
<ipython-input-24-bdb719052d31> in <module>
      5 a = inverse(2)
      6 print(a)
----> 7 b = inverse(0)
      8 print(b)

<ipython-input-24-bdb719052d31> in inverse(x)
      1 def inverse (x):
----> 2     y = 1.0 / x
      3     return y
      4 
      5 a = inverse(2)

ZeroDivisionError: float division by zero
``` 
### Messages d'exception
Les messages d'exception affichés par le Traceback. 


| message | type erreur |
|--- |--- |
| SyntaxError | parenthèse, crochet ou guillemet mal fermé |
| IndentationError | mauvaise indentation |
| ZeroDivisionError | division par zero |
| NameError | nom de fonction ou de variable mal orthographié|
| IndexError | accès à une position en dehors d’une liste |
| AttributeError | accès à une méthode ou à un attribut inconnu.  *Exemple: 'list' object has no attribute 'appand'* |
| TypeError | types incompatibles pour l’opération demandée.  *Exemple: unsupported operand type(s) for '-': 'range' and 'int'*|
| ValueError | une valeur est inappropriée pour une certaine opération |
| KeyError | Une clé est utilisée pour accéder à un élément d’un dictionnaire dont elle ne fait pas partie |


## Déclencher des exceptions
### **`Raise`**
L’instruction `raise` permet au programmeur de déclencher une exception spécifique: 

*Exemple:*

```python
raise NameError('HiThere')
```
Affiche:
```
NameError  Traceback (most recent call last)
<ipython-input-27-72c183edb298> in <module>
----> 1 raise NameError('HiThere')

NameError: HiThere
```



### **Assertions: `assert`**
**Les assertions sont les hypothèses avec vérification**.

Le rajout *provisoire* d'assertions dans le script va permettre d'anticiper sur les erreurs possibles de logique.

Le mécanisme d'assertion est là pour empêcher des erreurs qui ne devraient pas se produire, en arrêtant prématurément le programme. C'est un mode de programmation *défensif*, dans lequel on vérifie les *préconditions*.

*Méthode :*  `assert <expression logique>, 'commentaire facultatif'`

L'expression logique doit être egale à `True` pour que le programme se poursuive.

*Exemple avec une erreur d'execution :*

```python
def inverse (x):
    assert b!=0,'argument nul'
    y = 1.0 / x
    return y
```

Lorsque l'on execute la fonction `inverse` avec zero comme argument, le programme s'arrête et renvoie le message suivant dans le `Traceback`: 

```python
inverse(0)

AssertionError : argument nul
```

Mais l'interêt réside surtout dans l'utilisation d'*assertion* pour prévenir une possible erreur logique: 

On souhaite maintenant obtenir le même comportement (arrêt pour une valeur sortant de l'ensemble de définition d'une fonction) pour la fonction de conversion de degré Celsius en degré Fahrenheit. En effet, il n’y aurait aucun sens de convertir une température inférieure à la température correspondant au zéro absolu. (exemple issu de [univ.lille](https://www.fil.univ-lille1.fr/~wegrzyno/portail/Info/Doc/HTML/seq2_booleens_conditionnelles.html))

```python
def en_fahrenheit(c) :
    """
      conversion en Fahrenheit d'une température donnée en Celsius
      C.U. c doit être supérieure au zéro absolu.

    """
    assert c>-273.15, valeur inferieure au zero absolu
    return 9*c/5+32
```

Alors : 

```python
en_fahrenheit(-500)
# Affichage
AssertionError valeur inferieure au zero absolu
``` 

## Créer un module de test unitaires avec **`unittest`**
**Définition:** Un test unitaire est un test réalisé sur une portion du programme, typiquement sur une fonction.

Le module `unittest` offre des outils de test de code, comme la classe TestCase. Le but est de vérifier que votre code génère des résultats corrects, conformes au attentes.

> Exemple

```python
import unittest

def add(x,y):
    return x + y

class MyTest(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(3,4), 7)

if __name__ == '__main__':
    unittest.main()
```


> Explications 

On commence par importer le module `unittest`.

Les noms des classes de test se terminent généralement par `TestCase` (scenario de test). La classe créée pour le test, `MyTest` doit être une classe enfant de `unittest.TestCase`, d'où l'instruction `class MyTest(unittest.TestCase):`


Chaque test à créer est une méthode. Toute méthode dont le nom commence par `test_` est exécutée lors du test. La méthode `test_add` appelle donc la fonction `add`  avec les arguments 3 et 4, puis vérifie que son résultat est conforme, grâce à un test d'assertion `assertEqual`.

Ici, le test reussit:

En console:

```
Ran 1 tests, passed: 1 failed: 0
```

On ajoute maintenant un deuxième test:

```python
import unittest

def add(x,y):
    return x + y

class MyTest(unittest.TestCase):
    def test_add1(self):
        self.assertEqual(add(3,4), 7)
        
    def test_add2(self):
        self.assertEqual(add(3,4), 8)

if __name__ == '__main__':
    unittest.main()
```

Le deuxième test échoue. On peut remonter jusqu'à l'erreur dans le Traceback qui est affiché en console: 

```
# Traceback
Fail: Expected 7 to equal 8
Tests failed in  MyTest.test_add2  
Ran 2 tests, passed: 1 failed: 1
```

Le module `unittest` fournit d'autres fonctions comme par exemple `assertRaises`. La liste complète est [ici](#autres-tests-d-assertion)

```python
  def test_split(self):
    s = 'hello world'
    # check that s.split fails when the separator is not a string
    self.assertRaises(TypeError,s.split,1)
``` 

Console: Test reussi
```
Ran 1 tests, passed: 1 failed: 0
```

> Explications

La fonction `split` prend en argument un caractère et decoupe la chaine de caractères au niveau de ce caractère. (et retourne une liste).

Par exemple:

```python
s = 'hello world'
print(s.split(' '))
# affiche
['hello','world']
```

L'argument DOIT être un caractère et non un nombre entier ou autre type. Sinon, l'execution génère un *TypeError*:


```python
s = 'hello world'
print(s.split(1))
# affiche
TypeError          Traceback (most recent call last)
<ipython-input-32-6acfb0b512b4> in <module>
      1 s = 'hello world'
----> 2 print(s.split(1))
TypeError: must be str or None, not int
```

Or, ici, on fait le test d'assertion suivant: on vérifie si lorsque l'on appelle la fonction `s.split` avec l'argument **1**, cela génère un *TypeError*, ce qui est VRAI. Donc le test REUSSI!

Par contre, avec `self.assertRaises(TypeError,s.split,' ')`, cela echoue...

```
Fail: 
Tests failed in  MyTest.test_split  
Ran 1 tests, passed: 0 failed: 1
```

> Testez ces exemples

Ces exemples peuvent être testés dans l'éditeur en ligne *Trinket*:

<iframe src="https://trinket.io/embed/python/b55ced5652" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


### Autres tests d'assertion
En fait, `unittest.TestCase` propose plusieurs méthodes d'assertion que nous utiliserons dans nos tests unitaires. 

| Méthode | Explications |
|--- |--- |
| assertEqual(a, b) | a == b |
| assertNotEqual(a, b) | a != b |
| assertTrue(x) | x is True |
| assertFalse(x) | x is False |
| assertIs(a, b) | a is b |
| assertIsNot(a, b) | a is not b |
| assertIsNone(x) | x is None |
| assertIsNotNone(x) | x is not None |
| assertIn(a, b) | a in b |
| assertNotIn(a, b) | a not in b |
| assertIsInstance(a, b) | isinstance(a, b) |
| assertNotIsInstance(a, b) | not isinstance(a, b) |
| assertRaises(exception, fonction, *args, **kwargs) | Vérifie que la fonction lève l'exception attendue.|

# Gestion des exceptions: **`try-except`**
[compléments sur la gestion des exceptions](https://docs.python.org/fr/3.5/tutorial/errors.html#handling-exceptions)


Le mécanisme des exceptions permet au programme de « rattraper » les erreurs, de détecter qu’une erreur s’est produite et d’agir en conséquence afin que le programme ne s’arrête pas.

Afin de rattraper l’erreur, on insère le code susceptible de produire une erreur entre les mots clés `try` et `except`. 

*Méthode :*

```python
try:
    # ... instructions à protéger
except:
    # ... que faire en cas d'erreur
else:
    # ... que faire lorsque aucune erreur n'est apparue
```

L’instruction try fonctionne comme ceci.

* Premièrement, la clause try (instruction(s) placée(s) entre les mots-clés try et except) est exécutée.
* Si aucune exception n’intervient, la clause except est sautée et l’exécution de l’instruction try est terminée.
* Si une exception intervient pendant l’exécution de la clause “try”, le reste de cette clause est sauté. Si son type correspond à un nom d’exception indiqué après le mot-clé except, la clause “except” correspondante est exécutée, puis l’exécution continue après l’instruction try.

*Exemple 1:*

```python
def inverse(x):
    y = 1.0 / x
    return y


try:
    a = inverse(2)
    print(a)
    b = inverse(0)  # déclenche une exception
    print(b)
except:
    print("le programme a déclenché une erreur")

# affiche : 
0.5
le programme a déclenché une erreur
```

*Exemple 2:*
Si on veut convertir un caractère en entier, cela génère une erreur de type *ValueError*:
```python
>>> int(input("Please enter a number: "))
Please enter a number: q
ValueError: invalid literal for int() with base 10: 'q'
```

On peut utiliser un mecanisme d'exception pour rattraper cette erreur possible:


```python
while True:
     try:
         x = int(input("Please enter a number: "))
         break
     except ValueError as typ:
         print("Oops!  That was no valid number.  Try again...: {}".format(typ))
print('=> vous avez entré le nombre {}'.format(x))
```

Executons ce script:
```
Please enter a number: d
Oops!  That was no valid number.  Try again...: invalid literal for int() with base 10: 'd'
Please enter a number: Z
Oops!  That was no valid number.  Try again...: invalid literal for int() with base 10: 'Z'
Please enter a number: 2
=> vous avez entré le nombre 2
``` 


# Flash cards
[Lien vers les flash cards](/docs/NSI/langages/ex1/)

# Sources
* [python.developpez.com](https://python.developpez.com/tutoriels/apprendre-programmation-python/notions-avancees/?page=gestion-d-erreurs)
* Pour aller plus loin sur la gestion des Exceptions : [xavierdupre.fr les bases en python](http://www.xavierdupre.fr/app/teachpyx/helpsphinx/c_exception/exception.html)
* Documentation officielle : [unittest](https://docs.python.org/3/library/unittest.html)






