---
Title: Jeu de dominos
---

# jeu de Dominos et POO - version classique
Le jeu de *Dominos* est un jeu très simple, ou, pour gagner, il faut être le premier joueur à avoir posé tous ses dominos.
Une fois le premier domino placé sur la table, le joueur suivant doit à son tour poser un domino ayant le même nombre de points sur au moins un côté du domino précédemment posé.

Un domino est constitué de côtés, droite/gauche ou haut/bas selon comment la pièce sera disposée.



{{< img src="../images/domino1.jpg" caption="un début de partie" >}}

La disposition importe peu: il faut que la chaine reste ouverte.



{{< img src="../images/domino2.png" caption="Exemple de disposition juste (à gauche) et fausse (à droite)" >}}

On utilise la définition de classes suivantes:

```python
class Domino:
    def __init__(self,val1,val2):
        self.val1 = val1
        self.val2 = val2
        self.suiv = None

    
class Partie:
    def __init__(self,first):
        self.first = first
        
    def last(self):
        M = self.first
        while not M.suiv is None:
            M = M.suiv
        return '{}:{}'.format(M.val1,M.val2)
        
    def atteindre_domi(self,val1,val2):
    	"""docstring a ajouter
    	"""
        D = self.first
        while not D.suiv is None and (D.val1,D.val2) != (val1,val2):
            D = D.suiv
        if (D.val1,D.val2) == (val1,val2):
            return D
        else:
            return self.first    
            
    def inserer(self,D_place,D_a_inserer):
    		#à completer

    def __repr__(self):
        M = self.first
        s = '{}:{} '.format(M.val1,M.val2)
			# à completer
        return s
```

**Qu a.** On cherche à représenter la partie de l'image de gauche (voir plus haut).
Les dominos seront instanciés à l'aide des noms D1, D2, D3, ... Ecrire les instructions qui instancient tous les dominos de la partie, avec, pour chacun, leurs valeurs et le domino suivant.

**Qu b.** Ecrire l'instruction qui doit créer l'objet `partie1` à partir de ce plateau de jeu. (classe `Partie`)

**Qu c.** Compléter la méthode de classe `__repr__` qui surcharge la fonction `print`

**Qu d.** Commenter la méthode de classe `atteindre_domi`. A quoi sert-elle? Quelle est sa complexité asymtotique?

**Qu e.** Imaginons que l'état de la partie soit celui-ci:

```python
print(partie1)
4:4 => 4:6 => 6:1 => 1:5 => 5:4 => 4:2 => 2:1 => 1:3 
```

> Compléter la méthode de classe `inserer` qui permet d'insérer un domino (double) dans la chaine de dominos à partir des instructions suivantes:

```python
D = partie1.atteindre_domi(4,2)
D10 = Domino(2,2)
partie1.inserer(D,D10)
```

> Le nouvel état de la partie devrait alors être :

```python
print(partie1)
4:4 => 4:6 => 6:1 => 1:5 => 5:4 => 4:2 => 2:2 => 2:1 => 1:3 
```

**Qu f.** Insérer le domino `1:1` à sa place, dans la partie.

# Corrections
## Jeu de dominos *classique*

```python
class Partie:
    def __init__(self,first):
        self.first = first
        
    def last(self):
        M = self.first
        while not M.suiv is None:
            M = M.suiv
        return '{}:{}'.format(M.val1,M.val2)
    
    def atteindre_domi(self,val1,val2):
        D = self.first
        while not D.suiv is None and (D.val1,D.val2) != (val1,val2):
            D = D.suiv
        if (D.val1,D.val2) == (val1,val2):
            return D
        else:
            return self.first
        
    def inserer(self,D_place,D_a_inserer):
        D_a_inserer.suiv = D_place.suiv
        D_place.suiv = D_a_inserer
    
    def __repr__(self):
        M = self.first
        s = '{}:{} '.format(M.val1,M.val2)
        while not M.suiv is None:
            M = M.suiv
            s += '=> {}:{} '.format(M.val1,M.val2)
        return s
                
D1 = Domino(4,4)
D2 = Domino(4,6)
D3 = Domino(6,1)
D4 = Domino(1,5)
D5 = Domino(5,4)
D6 = Domino(4,2)
D7 = Domino(2,1)
D8 = Domino(1,3)
D1.suiv = D2
D2.suiv = D3
D3.suiv = D4
D4.suiv = D5
D5.suiv = D6
D6.suiv = D7
D7.suiv = D8
partie1 = Partie(D1)
```


