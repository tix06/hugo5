---
Title : structures conditionnelles
---

# Conditions
## Instruction conditionnelle
*Définition :* Une *instruction conditionnelle* vérifie si une certaine condition est vraie avant d'executer son code : 

```
if instruction_conditionnelle : 
  code_à_executer
``` 

*Exemple :*

```python
if prix_camion > 10000:
  print('Trop cher')
```

## Tests logiques
Il s'agit d'une expression booléenne qui est évaluée est qui renvoie `True` si elle est vrai, `False` sinon.

### Opérateurs de comparaison

*Quelques exemples de tests logiques :*

```python
age == 18   # egalité
age != 18   # inegalité
age <= 18   # inferieur ou egal
nom == 'John' # egalité de chaines
```

### Opérateurs logiques
L'expression peut aussi contenir des opérateurs logiques : `and`, `or`, `not`:

```python
n = int(input('entrer un nombre entier: '))
if n%2 == 0 and n > 0:
    print('vous avez entré un entier pair et positif')
```

### Test sur une liste
On peut aussi vérifier si un élement existe dans une liste : 

```python
'Paris' in capitales  # True si 'Paris' est dans la liste capitales
```

Une instruction `if` peut également tester une valeur booléenne et exécuter son code si cette valeur vaut `True` :

```python
if jeu_actif : 
  print('jouons !')
```

### Test sur un dictionnaire
Le mot-clé `in` permet de tester si une clé est présente dans le dictonnaire:

```python
dico = {'cle1':'val1','cle2':'val2','cle3':'val3'}

print('cle1' in dico)
# affiche True

print('val1' in dico)
# affiche False car `'val1'` est une valeur et non une clé.
```


## Les blocs du programme
En Python, on utilise l'indentation (le retrait de la ligne) pour rendre compte des blocs de code.

{{< img src="../images/pybloc1.png" alt="pybloc et indentation" caption="de pybloc au script python" >}}
Le bloc de code à executer peut contenir plusieurs lignes, à condition de respecter l'indentation.

# L'alternative `if - else`
Une instruction `if - else` contient une instruction `if` qui s'execute si la condition est `True` et une clause `else` qui s'execute si la condition est `False`.

```python
if hauteur_plant < 3 : 
  print('laisser le plant dans la serre')
else : 
  print('la mettre dehors')
```

Un bloc `if - elif - else` comprend une premiere instruction `if`, puis une suite de conditions de tests `elif` si le premier test echoue, puis un bloc `else` qui s'execute si tous les autres tests échouent.

Même s'il n'est pas obligatoire, il est fortement recommandé de finir une série de conditions `elif` par le bloc `else`.

```python
if hauteur_plant < 3 : 
  print('laisser le plant dans la serre')
elif hauteur_plant < 15 : 
  print('la mettre dehors')
else : 
  print('Pret pour la recolte')
```

# Remarque : 0 et None 
Dans le test logique, 0 et None se comportent comme s'il s'agissait de `False`:

```python
ch = input('Entrez un nombre entier quelconque')
n =eval(ch)
if n:
 print("vrai")
else:
 print("faux")
```

Ce petit script, lorsqu'il est executé, renvoie toujours `True` quel que soit le nombre saisi, mais `False` dans les cas suivants. Si on saisit 

* 0     # zero
* None  # le type Rien

# Flash cards
Lien vers les flash cards sur le theme{{< a link="/docs/python/pages/conditions/ex1/index.html" caption="Structures conditionnelles" >}}