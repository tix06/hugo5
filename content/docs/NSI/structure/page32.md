---
Title: correction des exercices en ligne sur POO
--- 

# Correction des exercices
## Exercice 1

```python
class Sept_Familles:
    """
    NAME
        Sept_Familles
    DESCRIPTION
        constructeur pour les cartes du jeu
    PARAMETERS
        famille (str): nom de la famille
        qui(str): membre de la famille 
            choix parmi ('Grand-père','Grand-mère','Pére','Mère','Fils','Fille')
    FUNCTIONS
        get_Attributs
    """
    def __init__(self,famille,qui):
        self.famille = famille
        self.qui = qui
        
    def get_Attributs(self):
      return (self.famille,self.qui)
      
    def __repr__(self):
      return "la carte est de la famille des {}. C'est le {}".format(self.famille,self.qui)
      

carte1 = Sept_Familles('Jongleurs','Grand-père')
carte2 = Sept_Familles('Jongleurs','Fille')
carte3 = Sept_Familles('Musiciens','Père')
carte4 = Sept_Familles('Musiciens','Fille')
```

En console:

```
>>> print(carte1)
la carte est de la famille des Jongleurs. C'est le Grand-père
```

## Exercice 2
Compléter la classe Joueur avec les méthodes:

```python
def get_cartes(self):
  return self.C

def __repr__(self):
  return "le joueur possède les cartes : {}".format(self.C)
  
def demande(self,carte):
  if carte in self.C:
    return "le joueur a la carte"
  else:
    return "pioche"
```

Puis tester en console:

```
>>> joueur1 = Joueur(carte1,carte2)
>>> print(joueur1)
le joueur possède les cartes : [('Jongleurs', 'Grand-père'), ('Jongleurs', 'Fille')]
>>> joueur1.demande(('Jongleurs','Grand-père'))
le joueur a la carte
>>> joueur1.demande(('Jongleurs','Grand-mère'))
pioche
>>> joueur1.demande(carte2.get_Attributs())
le joueur a la carte
```