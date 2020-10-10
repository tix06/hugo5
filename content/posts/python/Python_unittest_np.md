---
author: "Eric Tixidor"
date: 13-10-2020
linktitle: fiche exercices python
menu:
  main:
    parent: 
next: 
prev: 
title: Python unittest 
weight: 14
---

# Utilisation du module unittest avec le calcul des nombres premiers

**Définition:** Un test unitaire est un test réalisé sur une portion du programme, typiquement sur une fonction.

Le module `unittest` offre des outils de test de code, comme la classe TestCase. Le but est des vérifier que votre code génère des résultats corrects, conformes au attentes.

> En pratique: test du calcul de la liste de nombres premiers

* Créer un premier fichier python contenant les fonctions à tester, par exemple `prime.py`
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

Les noms des classes de test se terminent généralement par `TestCase` (scenario de test). La classe créée pour le test, `PrimeTestCase` doit être une classe enfant de `unittest.TestCase`.

Chaque test à créer est une méthode. Toute méthode dont le nom commence par `test_` est exécutée lors du test. La méthode `test_prime1` appelle donc la fonction `liste_prime` du module `prime` avec la valeur 100, puis vérifie que son résultat est conforme à la liste `wiki`, grâce à un test d'assertion `assertEqual`.

Ici, la fonction `prem1` n'est pas bien renseignée, et le test échoue. On peut remonter jusqu'à l'erreur dans le Traceback qui est affiché en console. 

```
# extrait du Traceback
Tests failed in  PrimeTestCase.test_prime  
Ran 1 tests, passed: 0 failed: 1
```

Cet exemple peut être testé dans l'éditeur en ligne *Trinket*:

<iframe src="https://trinket.io/embed/python/88b7bfcc89?toggleCode=true&runOption=run&start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


> A vous de jouer
Le légendaire mathématicien suisse Léonhard EULER(1707-1783), proposait la formule suivante pour obtenir des nombres premiers : pour tout entier naturel n,
$$f(n) = n^2 − n + 41$$

> Tester dans l'editeur Trinket précédent si cette fonction renvoie bien les nombres premiers entre 0 et 100.
