---
Title: tri à partir d'une cle
---

# Partie 1: Appliquer un algorithme de tri
Nous allons appliquer les 2 algorithmes de tri (insertion et selection) sur des listes non ordonnées.

## Trier une petite liste
* Reprendre pour cette première partie le TP de [recherche dans un dictionnaire de mots](/docs/NSI/algorithmes/page14_bis/).
* Ajouter au script python les **fonctions de tri** vues dans le cours: [Lien](/docs/NSI/algorithmes/page8/)

* Utiliser la fonction `shuffle` du module `random` pour mélanger la liste... avant de la trier:

```python
import random
L = [3, 4, 6, 8, 10, 20]
random.shuffle(L)
print(L)
tri_selection(L)
#tri_insertion(L)
print(L)
```

## Fonction `est_triee`
Programmer une fonction `est_triee` qui vérifie si la liste est bien triée. Cette fonction sera utile pour contrôler que la fonction  `tri` effectue bien le tri demandé, sans avoir à parcourir celle-ci après traitement.

Utiliser la base suivante pour la fonction: (et compléter):

```python
def est_triee(L):
	triee = True
	for i in range(1,len(L)):
		if ...:
			...
	return triee
```

## Dictionnaire de mots
Vous allez tester maintenant vos fonctions de tri sur la liste [dictionnaire-de-mots](/docs/NSI/algorithmes/page14_bis/), une fois celle-ci mélangée.

* **Question 1:** Comparer le temps mis par chacune des 2 fonctions (faire plusieurs essais).

**Remarque importante**: Si vous voulez comparer 2 algorithmes de tri en place, sur la même liste, il faudra faire une copie par valeur de la liste mélangée. Le tri par insertion puis par selection doit être realisé sur la MEME liste si vous voulez comparer les durées de traitement:

```python
L2 = L1.copy()
```

On *rappelle* que la mesure du temps peut être réalisée de la manière suivante:

```python
start_time = time.time()
L1 = tri(L1)
stop_time = time.time()
interval1 = stop_time - start_time
```

# Partie 2: TP tri à partir d'une clé
On peut réaliser un tri à l'aide d'une **clé**. Les objets (les lignes d'un fichier *csv*) contiennent ainsi des valeurs sur plusieurs colonnes. On peut choisir l'une de ces colonnes pour réaliser le tri.

On prendra pour exemple le fichier du classement UEFA des équipes feminines sur plusieurs années. Le tableau est consultable à la page de l'[UEFA.com](https://fr.uefa.com/nationalassociations/uefarankings/womensclub/#/yr/2022)

* fichier csv *[classement_uefa.csv](/pdf/NSI/classement_uefa.csv)* à telecharger

> Ci-dessous, le programme minimal pour lire le fichier csv. Testez le à l'aide d'un IDE (Pyzo ou autre). Adaptez le chemin vers le fichier comme vu dans la partie 1:

```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile)
    teams = []
    for row in spamreader:
        teams.append(row)
print(teams[:10])
```

La premiere ligne contient l'en-tête du tableau. Il faudra supprimer cette premiere ligne. 

```
['\ufeffClub', 'Pays', '16/17', '17/18', '18/19', '19/20', '20/21', '\xa0pts\xa0', '\xa0Ass\xa0']
```

De plus, le parametrage de la fonction par defaut decoupe les lignes au niveau des virgules ',':

```
['AC Sparta Praha;CZE;3;9;3;3;8;26;11', '715']
```

> Essayer à nouveau, mais cette fois, avec le paramètre `delimiter = ";"`.


```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter = ";")
    teams = []
    for row in spamreader:
        teams.append(row)
del(teams[0])
print(teams[0])

>>> ['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11,715']
```

Une autre option possible: joindre les 2 sous-listes avec un point '.', puis séparer les éléments de la chaine de caractères au niveau des ';':

> Tester également cette 2e option:

```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile)
    teams = []
    for row in spamreader:
        s = ".".join(row) 
        # instruction necessaire pour le format de la derniere valeur decimale
        # .join(row) créé une chaine de caractères à partir de la liste
        s = s.split(";")
        # on recréé une liste
        teams.append(s)

del(teams[0])
print(teams[0])

>>> ['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11.715']
```


L'execution du programme affiche au depart les équipes classées par ordre alphabetique:

```
['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11.715']
['AFC Ajax', 'NED', '-', '5', '8', '-', '3', '16', '9.9']
['Akadimia Elpides Karditsas', 'GRE', '-', '-', '2', '-', '-', '2', '2.145']
['ALG Spor Kulübü Derneği', 'TUR', '-', '-', '-', '-', '0', '0', '2.145']
['Apollon Ladies FC', 'CYP', '4', '3', '-', '2', '0', '9', '4.62']
...
```

*Remarque sur la valeur decimale (dernière colonne): Le classement par coefficient des associations ou des pays prend en compte les résultats de tous les clubs d'une association. Il est utilisé pour déterminer le nombre de clubs que pourra engager une association dans les compétitions de l'UEFA les saisons suivantes. Cette valeur n'est pas retenue pour notre classement dans cet exercice.*

On veut adapter l'agorithme de tri par selection pour classer les equipes selon une *clé*, qui sera l'indice de la colonne contenant les points UEFA de l'équipe.

> **A vous de jouer**: adapter le script de `tri2`:

> 1. Ajouter un nouveau paramètre `cle` aux fonctions `tri_insertion` et `tri_selection`.
> 2. Adapter les programmes des 2 fonctions pour trier par rapport à une clé. Modifier par exemple la condition dans la boucle `for` de la fonction de recherche du minimum (ttri par selection) avec `if float(T[k][cle])<float(T[indiceDuMin][cle]) :`
> 3. Trier maintenant la liste `teams` selon la colonne de rang 7. Si vous affichez cette liste, elle presente 2 inconvenients:
  * elle est triée telle que l'equipe la plus faible est au debut du tableau et la meilleure à la fin.
  * l'affichage ne facilite pas la lecture
> 5. Modifier la fonction de tri pour réaliser un tri par l'élément le plus grand d'abord.
> 6. Ajouter les instructions suivantes qui permettront d'afficher les equipes : 
  * Créer un tableau vide T.
  * faire une boucle bornée `for` sur la liste `teams` : `for t in range(...)`
  * Dans la boucle for, à chaque itération, ajouter dans T un tuple constitué des colonnes 0, 1 et 7 pour chacune des équipes.
  * afficher classement et equipe avec :  `print(t,T[t])` 



Vous devriez obtenir:

```
0 ('Olympique Lyonnais', 'FRA', '99')
1 ('FC Barcelona', 'ESP', '78')
2 ('VfL Wolfsburg', 'GER', '77')
3 ('Paris Saint-Germain', 'FRA', '60')
4 ('Manchester City WFC', 'ENG', '59')
5 ('FC Bayern München', 'GER', '57')
6 ('Chelsea FC Women', 'ENG', '45')
...
``` 

* **Question 2:** Quel est le classement des équipe entre la $10^e$ et la $15^e$ equipe? 
