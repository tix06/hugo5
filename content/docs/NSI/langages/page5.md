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
ma_liste : list, une liste de valeurs entieres, uniques, mises dans un ordre aléatoires.
max : int, stocke la valeur maximale actuelle. Initialisé à 0.
Sortie :
------
max : int, prend la valeur de l'élément le plus grand de la liste
Principe : 
--------
on parcourt la liste avec une boucle bornée.
si la valeur la valeur de max est inferieure à la valeur courante, max est actualisée avec cette valeur courante
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
    
    Parameters
    ----------
    larg : int ou float
           la largeur du rectangle
           
    long : int ou float
           la longueur du rectangle
    
    Returns
    -------
    int ou float

    Variables
    ---------
    a : int ou float
        larg * long
    
    """
    a = larg * long
    return a
``` 

On voit que le prototypage d'une fonction donne à peu près les mêmes informations que la *spécification d'un algorithme*.

On pourra consulter la page du site [Lyceum](https://lyceum.fr/1g/nsi/7-langages-et-programmation/6-fonctions) pour plus d'informations.



# Méthodes de gestion des erreurs
## Traceback
L'exécution d'un programme peut provoquer une erreur. Lorsque c'est le cas, l'exécution s'arrête immédiatement et l'interpréteur Python affiche une trace d'erreur.

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

## assertions
**Les assertions sont les hypothèses avec vérification**.

Le rajout *provisoire* d'assertions dans le script va permettre d'anticiper sur les erreurs possibles de logique.

Le mécanisme d'assertion est là pour empêcher des erreurs qui ne devraient pas se produire, en arrêtant prématurément le programme. C'est un mode de programmation *défensif*, dans lequel on vérifie les *préconditions*.

*Méthode :*  `asset <expression logique>, 'commentaire facultatif'`

L'expression logique doit être egale à `True` pour que le programme se poursuive.

*Exemple avec une erreur d'execution :*

```python
def inverse (x):
    assert b!=0,'argument nul'
    y = 1.0 / x
    return y
```

Lorsque l'on execute la fonction `inverse` avec zero comme argument, le programme s'arrête et renvoie le message suivant dans le `Traceback` : 

```python
inverse(0)

AssertionError : argument nul
```

Mais l'interêt réside surtout dans l'utilisation d'*assertion* pour prévenir une possible erreur logique : 

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

## Créer un module de test avec `unittest`
Le module `unittest` offre des outils de test de code, comme la classe TestCase. Le but est des vérifier que votre code génère des résultats corrects, conformes au attentes.

> En pratique: test du calcul de la liste de nombres premiers

* Créer un premier fichier python avec les fonctions à tester, par exemple `prime.py`
* Créer un autre fichier avec les fonctions de test, que l'on appelera par exemple `test_unitaire.py`. Ce sera le fichier `main` à executer.

> Contenu du fichier `prime.py`

```python
def prem1(n) :
    """Renvoie True si l’entier est premier et False sinon"""
    # script à completer
    return True
    

def liste_prime1(N):
    """etablit une liste de nombres premiers de 0 a N"""
    L=[]
    for j in range(N+1):
        if prem1(j):
            L.append(j)
    return L
```

> Contenu du fichier `test_unitaire.py`

```python
import unittest
import prime 

class PrimeTestCase(unittest.TestCase):
  """Test pour prime.py"""
  
  def test_prime(self):
    """compare avec liste de nombres premiers"""
    
    wiki =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    
    premiers = prime.liste_prime1(100)
    self.assertEqual(premiers,wiki)
    
if __name__=='__main__':
  unittest.main()
``` 

Dans le fichier à executer, `test_unitaire.py`: On commence par importer le module `unittest` ainsi que le module `prime` qui contient les fonctions à tester.

Les noms des classes de test se terminent généralement par `TestCase` (scenario de test). La classe doit être une classe enfant de `unittest.TestCase`.

Chaque test à créer est une méthode. Toute méthode dont le nom commence par `test_` est exécutée lors du test. La méthode `test_prime1` appelle donc la fonction `liste_prime` du module `prime` avec la valeur 100, puis vérifie que son résultat est conforme à la liste `wiki`.

Ici, la fonction `prem1` n'est pas renseignée, et le test échoue: 

```
Tests failed in  PrimeTestCase.test_prime  
Ran 1 tests, passed: 0 failed: 1
```

Cet exemple peut être testé dans l'diteur en ligne *Trinket*:

<iframe src="https://trinket.io/embed/python/88b7bfcc89?toggleCode=true&runOption=run&start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


> A vous de jouer
Le légendaire mathématicien suisse Léonhard EULER(1707-1783), proposait la formule suivante pour obtenir des nombres premiers : pour tout entier naturel n,
$$f(n) = n^2 − n + 41$$

> Tester si cette fonction renvoie bien les nombres premiers entre 0 et 100.


# Mécanisme d'exception `try-except`
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

*Exemple :*

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


# Liens
* [python.developpez.com](https://python.developpez.com/tutoriels/apprendre-programmation-python/notions-avancees/?page=gestion-d-erreurs)
* Pour aller plus loin sur la gestion des Exceptions : [xavierdupre.fr les bases en python](http://www.xavierdupre.fr/app/teachpyx/helpsphinx/c_exception/exception.html)






