---
Title : méthodes et types
---

  
  <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
  <style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

# méthodes de chaines
Les chaines sont des objets qui possèdent leurs méthodes. il est difficile de se souvenir de toutes les méthodes travaillant sur les chaînes de caractères. Aussi il est toujours utile de recourir à la documentation embarquée


```python
help(str)
```

Ce qui donne:

```
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |  
 |  Methods defined here:
 | ...
 |  format(...)
 |      S.format(*args, **kwargs) -> str
 |      
 |      Return a formatted version of S, using substitutions from args and kwargs.
 |      The substitutions are identified by braces ('{' and '}').
 |  ...
 |  join(self, iterable, /)
 |      Concatenate any number of strings.
 |      
 |      The string whose method is called is inserted in between each given string.
 |      The result is returned as a new string.
 |      
 |      Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'
 | ...
``` 


### Découpage - assemblage : `split` et `join`

Les méthodes `split` et `join` permettent de découper une chaîne selon un séparateur pour obtenir une liste, et à l'inverse de reconstruire une chaîne à partir d'une liste.

`split` permet donc de découper :


```python
'abc=:=def=:=ghi=:=jkl'.split('=:=')
# affiche ['abc', 'def', 'ghi', 'jkl']
```

Et à l'inverse :


```python
"=:=".join(['abc', 'def', 'ghi', 'jkl'])
# affiche abc=:=def=:=ghi=:=jkl
```

*Remarque:* Si le séparateur est un terminateur, comme par exemple ';', ou`"\n"`, il conviendra d'utiliser d'abord la méthode `strip`. Voir *[compléments](http://localhost:1313/docs/python/pages/variables/page2/#compl%C3%A9ments-sur-les-strings)* en bas de page.


### Remplacement : `replace`

`replace` est très pratique pour remplacer une sous-chaîne par une autre, avec une limite éventuelle sur le nombre de remplacements :


```python
"abcdefabcdefabcdef".replace("abc", "zoo")
```


### modifier la casse d'une chaine
utiliser les méthodes `title()` (titre), `upper()` (mise en majuscule), `lower()` (minuscule).

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
Les listes sont présentées à la page [variables](/docs/python/pages/variables/page1/#séquences-les-listes-et-les-tuples)

Pour commencer, rappelons comment retrouver la liste des méthodes définies sur le type list :

```python
help(list)
```

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

## index
**index(element)** retourne la position (index) de cet élément dans la liste (ou du moins la première occurence s'il y en a plusieurs).

```python
aeroports = ['CDG','ORY','LIS','NY']
aeroports.index('ORY')
# retourne 1
```

## insert
**insert(index, element)** insère l'élément à l'index précisé.

```python
aeroports = ['CDG','ORY','LIS','NY']
aeroports.insert(2,'LCY')
# la liste aeroport est alors
# ['CDG','ORY', 'LCY', LIS','NY']
```

## remove et del
**remove(element)** supprime un élément d'une liste. Si l'élément apparait plusieurs fois dans la liste, seule la premiere occurence est supprimée.

**del liste[indice]** supprime l'élément de la liste à partir de son indice.

```python
aeroports = ['CDG','ORY','LIS','NY']
aeroports.remove('LIS')
aeroports
# affiche ['CDG','ORY','NY']
del aeroports[0]
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

* La fonction **sorted** renvoie une copie de la liste triée dans l'ordre naturel (alphanumerique) sans modifier la liste d'origine.

```python
L = [9, 5, 1, 3, 4]
sorted(L)
# affiche [1, 3, 4, 5, 9]
```

Puis:

```python
L
# affiche [9, 5, 1, 3, 4]
```

* La méthode **sort** permet de trier la liste en place.

```python
L = [9, 5, 1, 3, 4]
L.sort()
# L est transformee en
# [1, 3, 4, 5, 9]
```


## Choix d'un élément aléatoire dans une liste.

Il faut importer la fonction `choice` de la librairie `random`:

```python
from random import choice
L = [1, 10, 100, 1000]
print(choice(L))
```

Affiche un élément au hasard: 1, 10, 100 ou 1000.

# méthodes de dictionnaires
Les dictionnaires sont présentés à la page sur les [variables](/docs/python/pages/variables/page1/#mappages-les-dictionnaires)

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

# Compléments sur les strings

Si le séparateur est un terminateur, comme par exemple ';', ou`\n`, la liste résultat contient alors une dernière chaîne vide. En pratique, on utilisera la méthode `strip`, que nous allons voir ci-dessous, avant la méthode `split` pour éviter ce problème.


```python
"abc;def;ghi;jkl;".split(';')
# affiche ['abc', 'def', 'ghi', 'jkl', '']
```

alors que 

```python
"abc;def;ghi;jkl;".strip(';')
# affiche abc;def;ghi;jkl
```


# Flash cards
Lien : 

* Lien vers les [Flash cards](../ex1) sur les variables et séquences C22
* Lien vers les [Flash cards](../ex3) sur les séquences et boucles C32

