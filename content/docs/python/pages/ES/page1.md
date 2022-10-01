---
Title : Entrées Sorties
---

# Entrées/Sorties en console
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

Le problème de cette méthode de concaténation est que chaque partie composant la chaine doit être de type `str`. Cela est possible avec la fonction `str(variable`, mais il existe une méthode plus efficace : **formater la chaine**.

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

# Lire/écrire dans un fichier
## Lire le contenu d'un fichier
On utilise la fonction `open` de la librairie standart en python:

La fonction `open` crée donc un fichier. Elle renvoie un objet de la classeTextIoWrapper. Par la suite, nous allons utiliser des méthodes de cette classe pour interagir avec le fichier.

*Exemple de programme : lit un fichier .txt et créé une liste mots*

```python
# initialisation de la liste vide
mots = []

# Lecture du fichier txt et remplissage de la liste
with open('liste_francais.txt', encoding='iso-8859-1') as f:
    for mot in f.read().splitlines():
        mots.append(mot)
```

* open : renvoyer un objet TextIOWrapper
* as : « en tant que »

Le mot-clé `with` permet de créer un "context manager" (gestionnaire de contexte) qui vérifie que le fichier est ouvert et fermé, même si des erreurs se produisent pendant le bloc.

Plus d'informations : [https://python.sdv.univ-paris-diderot.fr/07_fichiers/](https://python.sdv.univ-paris-diderot.fr/07_fichiers/)

## Ecrire dans un fichier

```python
animaux2 = ["poisson", "abeille", "chat"]
with open("zoo2.txt", "w") as filout:
    for animal in animaux2:
         filout.write(animal)
```

à la ligne 2 : ouverture du fichier `zoo2.txt` en mode écriture, avec le caractère `w pour write.`

Si nous ouvrons le fichier zoo2.txt avec un éditeur de texte, voici ce que nous obtenons :

`poissonabeillechat`

Ce n'est pas exactement le résultat attendu. Le script peut être amélioré en utilisant une écriture formatée, comme vu plus haut, à la dernière ligne du script : 

```python
         filout.write("{}\n".format(animal))
```
Ce qui donne maintenant, à l'ouverture du fichier : 

```
poisson
abeille
chat
```

Exemple issu de la page [python.sdv.univ-paris-diderot.fr/07_fichiers](https://python.sdv.univ-paris-diderot.fr/07_fichiers/#72-ecriture-dans-un-fichier)

## Caractères speciaux
Certains caractères sont fort utiles lors de l’écriture de fichiers texte afin d’organiser les données. Le symbole ; est très utilisé comme séparateur de colonnes pour une matrice, on utilise également le passage à la ligne ou la tabulation. Comme ce ne sont pas des caractères « visibles », ils ont des codes :

* `\` caractère d'echapement (par exemple pour écrire des guillemets dans une chaine)
* `\n` : passage à la ligne
* `\t` : tabulation, indique un passage à la colonne suivante dans le format tsv (Tabulation-separated values).

On peut avoir besoin de supprimer ces caractères spéciaux:

```python
table = []
# Lecture du fichier
with open('datas/rne-cm.csv', encoding='utf-8') as f:
    for line in f.read().splitlines():
        table.append(line)

table[2]
# affiche
'32\tGers\t\t\t32249\tMauvezin\tPASCOLINI\tJean-Marc\tM\t'
```

On peut alors remplacer la chaine de caractères `line` par `line.split('\t')` avant de la placer dans `table`, ce qui découpe la chaine au niveau des `\t`:

```python
with open('datas/rne-cm.csv', encoding='utf-8') as f:
    for line in f.read().splitlines():
        table.append(line.split('\t'))
table[2]
# affiche
['32',
 'Gers',
 '',
 '',
 '32249',
 'Mauvezin',
 'PASCOLINI',
 'Jean-Marc',
 'M',...]
```



# Liens
* Voir cours sur le formatage des sorties : [Lien python.org](https://docs.python.org/fr/3/tutorial/inputoutput.html)