---
Title : Entrées Sorties
---

# Entrées Sorties
## Sortie en console
La fonction `print` permet l'affichage d'une valeur en console, quel qu'en soit le type.

On peut afficher un texte simple, ou composé de plusieurs parties, par concaténation de chaine : 

```
clan = 'Vikings'
message = 'Fight Invaders'
print('We are the ' + clan + ' who say' + ' "'+ message + '!"')
# affiche 
# We are the Vikings who say "Fight Invaders!"
```

Pour afficher une chaine de caractère construite avec des variables, il faudra formater la chaine.

La méthode `str.format()` sur les chaines de caractères : 

La methode de base : 

```
clan = 'Vikings'
message = 'Fight Invaders'
print('We are the {} who say "{}!"'.format(clan, message))
# affiche 
# We are the Vikings who say "Fight Invaders!"
```

On peut aussi préciser le nombre de caractères ou de chiffres attendus, le type de données, etc. 

*Exemple : affichage d'une table*

```python
for x in range(1, 11):
    print('{:2d} {:3d} {:4d}'.format(x, x*x, x*x*x))
# affichage : 
 1   1    1
 2   4    8
 3   9   27
 4  16   64
 5  25  125
 6  36  216
 7  49  343
 8  64  512
 9  81  729
10 100 1000
```
Cela permet d'aligner des chaînes dans une largeur de taille fixe.

## Entrées au clavier : `input`
La fonction `input` met le programme en pause et attend que l'utilisateur entre une donnée.

```python
nom = input('Quel est votre nom ? ')
print('Bonjour, {}'.format(nom))
```

Toutes les données saisies sont converties en chaîne. Il est donc necessaire de convertir les données numériques dans le type approprié avant de les utiliser : 

```python
prix = input('Combien coute ce camion ?')
prix = float(prix)
if prix < 10000:
  print('Ok, je le prends.')
```


# Liens
* Voir cours sur le formatage des sorties : [Lien python.org](https://docs.python.org/fr/3/tutorial/inputoutput.html)