---
Title : méthodes et types
---

# méthodes de chaines

Pour modifier la casse d'une chaine, utiliser les méthodes `title()` (titre), `upper()` (mise en majuscule), `lower()` (minuscule).

```python
nom = 'charles babbage'
nom.title()
# affiche Charles Babbage
nom.upper()
# affiche CHARLES BABBAGE
```

Les méthodes `lstrip()` (à gauche), `rstrip()` (droite), et `strip()` (à droite et à gauche) suppriment les espaces en trop dans les chaines.

> à tester vous-même : 

```python
nom = 'charles babbage'
nom.strip()
```

# méthodes de listes
## append
**append(element)** ajoute un élément en fin de liste
```python
aeroports = ['CDG','ORY','LIS']
aeroports.append('NY')
aeroports
# affiche ['CDG','ORY','LIS','NY']
```
## pop
**pop()** supprime le dernier élément et renvoie sa valeur.
```python
aeroports = ['CDG','ORY','LIS','NY']
aeroports.pop()
# affiche 'NY'
aeroports
# affiche ['CDG','ORY','LIS']
```

## remove et del
**remove(element)** supprime un élément d'une liste. Si l'élément apparait plusieurs fois dans la liste, seule la premiere occurence est supprimée.

**del liste[indice]** supprime l'élément de la liste à partir de son indice.

```python
aeroports = ['CDG','ORY','LIS','NY']
aeroport.remove('LIS')
aeroports
# affiche ['CDG','ORY','NY']
del aeroport[0]
aeroports
# affiche ['ORY','NY']
```
## découpe d'une liste
une *découpe* est une partie de liste, spécifiée à partir des indices : 
```python
etats = ['CH','GB','NL','PL','RO','SK']
etats[2:4]
# affiche ['NL','PL']
etats[:2] # sans specifier le premier indice
# affiche ['CH','GB'] # commence au debut
etats[3:] # sans specifier l'indice de fin
# affiche ['PL','RO','SK'] # jusqu'à la fin
```
## copie d'une liste
Une *copie* d'une liste permet d'utiliser le contenu de la liste copiée sans affecter la liste d'origine (voir [TP sur les variables](../page3/)). C'est une copie par *valeurs*.

Pour copier une liste, on peut : la découper sans mentionner les 2 indices, ou bien utiliser la fonction `list` : 
```python
etats = ['CH','GB','NL','PL']
mes_etats = etats[:] # liste copiée par valeur dans mes_etats
mes_etats = list(etats)
```
On peut alors vérifier qu'il s'agit maintenant d'une copie par valeurs : 
```python
mes_etats.append('DK')
mes_etats
# affiche ['CH','GB','NL','PL','DK']
etats
# affiche ['CH','GB','NL','PL']
```

Sans cette *astuce*, la copie se ferait par référence (Liste = mutable)

## Trier une liste
Il y a 2 fonctions de tri : 

**sorted** renvoie une copie de la liste triée dans l'ordre naturel (alphanumerique)

**sort** permet de trier la liste en place.

# méthodes de dictionnaires
## keys
méthode qui permet d'accéder aux clés d'un dictionnaire (retourne une liste de clés) :
```python
capitales = {'France':'Paris','Italie':'Rome','Allemagne':'Berlin'}
capitales.keys()
# affiche dict_keys(['France', 'Italie', 'Allemagne'])
``` 
## values
méthode pour accéder aux valeurs d'un dictionnaire (retourne une liste de valeurs):
```python
capitales = {'France':'Paris','Italie':'Rome','Allemagne':'Berlin'}
capitales.values()
# affiche dict_values(['Paris', 'Rome', 'Berlin'])
```
## items
méthode pour accéder aux paires clé-valeurs d'un dictionnaire (retourne une liste de tuples):

```python
capitales = {'France':'Paris','Italie':'Rome','Allemagne':'Berlin'}
capitales.items()
# affiche dict_items([('France', 'Paris'), ('Italie', 'Rome'), ('Allemagne', 'Berlin')])
```

## copier un dictionnaire
On peut utiliser la fonction `dict` pour faire une copie par *valeur* d'un dictionnaire : 

```python
mes_capitales = dict(capitales)
```

Sans cette *astuce*, la copie se ferait par référence (Dictionnaire = mutable)

<input type="button" class="btn btn-lg" value="Retour à la page : Variables" onclick="window.location.href = '../page1/'">


