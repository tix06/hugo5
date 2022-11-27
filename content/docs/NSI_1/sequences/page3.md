---
Title: Donnees en table
---

# Données en table - intro

{{< img src="../images/voyage1.png" >}}

Pour une agence de voyage, les données sont organisées en 2 tables *clients* et *sejours*.

Les tables *clients* et *sejours* ont un identifiant unique attribué lors de leur enregistrement.

**CLIENTS** 

| IDC | NOM | AGE | ACTIVITE |
|--- |--- |--- |--- |
| 27 | Ritta | 19 | Danse |
| 19 | Blaise | 29 | Cinema |
| 11 | Dede | 59 | Nature |
| 18 |  Indie| 58 | Histoire |
| 12 | Kelly | 30 | Surf |
| 17 | Dupond | 35 | Surf |
| 28 |  Nono | 65 | Plongée | 

**SEJOURS** 

| IDS | VILLE | ACTIVITE |
|--- |--- |--- |
| 1 | Cayenne | Nature |
| 10 | Rio | Danse |
| 11 | Havane | Danse |
| 12 | Oahu | Surf |
| 20 | Durban | Plongée |
| 65 | Sydney | Surf |
| 88 | Rome | Art |
| 90 | Durban | Surf |

L'agence de voyage a besoin d'un programme prenant en entrée un nom de ville **v**, et affichant la table contenant la reponse à la question:

*Donner les couples (nom de client, identifiant de sejour) tel que ce sejour est est dans la ville **v**, et propose l'activité favorite de ce client*.

*Exemple:* ``suggestion_client(V = 'Oahu')``

**Sortie:**

| V | Client | IDS |
|--- |--- |--- |
| Oahu | Kelly | 12 |
| Oahu | Dupond | 12 |

*Le but de l'activité est de comprendre les différentes étapes utiles à ce programme*.

1. Prendre les lignes de `SEJOURS` pour ``VILLE = Durban` et les ajouter à la table `CHOIX_SEJOUR` 
2. Pour la table `CHOIX_SEJOUR`, ajouter les colonnes `IDC, NOM, AGE`
2. Pour chaque ligne de `CHOIX_SEJOUR`, coller bout à bout les lignes de `CLIENTS` ayant la même ACTIVITE. Représenter cette table.
3. Créer une nouvelle table `RESULTAT` à partir de `CHOIX_SEJOUR` en ne conservant que les colonnes `V, CLIENT, IDS`. Représenter cette table.
4. Attribuer à chaque instruction le nom de l'opération réalisée. Choisir parmi: 
  * Jointure
  * Projection
  * Selection
  * Modification de table

# COURS
## Tables - généralités
### Une table
Une table est une liste de lignes, dont les éléments partagent les mêmes colonnes.

{{< img src="../images/table1.png" >}}
### Une ligne
Chaque ligne est un p-uplet de valeurs (duet, triplet, ...)

{{< img src="../images/table4.png" >}}
### Une colonne
Dans chaque colonne, on trouve des valeurs de même type: le **domaine de valeurs**. 

Chaque colonne porte un nom: le **descripteur** de la colonne.

{{< img src="../images/table2.png" >}}
### Le schéma d'une table
Le schema d'une table est sa structure. C'est l'ensemble de ses descripteurs de colonnes avec leur type. C'est ce qui décrit une table.

> *Exemple:* Donner le schema de la table *clients*

> * IDC : entier
* NOM : caracteres
* AGE : entier
* ACTIVITE : caracteres


### Le contenu d'une table
Le contenu d'une table est formé de ses lignes, qui contiennent les *valeurs*

{{< img src="../images/table3.png" >}}


### L'identifiant ID
Parmi les colonnes, l'une d'entre-elles a un statut particulier: L'IDENTIFIANT. Celui-ci doit être **unique** pour chaque entité, et pour chaque ligne.



{{< img src="../images/table5.png" >}}


## Représentations en python
### Deux manières de représenter une table
La représentation d'une table est une LISTE de lignes en python.

**Ligne**: La représentation d'une ligne de la table peut être, au choix:

* une liste, un tuple: 
  * voir [Fiche 1: Listes](/pdf/python/listes1_Fiche.pdf)
  * voir [Fiche 2: algorithmes sur les listes](/pdf/python/listes2_Fiche.pdf)
  * voir [Fiche 4: tuple et dictionnaire](/pdf/python/listes4.pdf)
* un dictionnaire
  * voir [Fiche 4: tuple et dictionnaire](/pdf/python/listes4.pdf)

Pour une représentation en *tuple*:

```
ligne1 = (27, 'Ritta', 19, 'Danse')
```

Les valeurs doivent être placées, sans en omettre une.

Pour une représentation en *dictionnaire*:

```
ligne1 = {'IDC' : 27, 'NOM': 'Ritta', 'AGE': 19, 'ACITIVITE: 'Danse'}
```

Les *descripteurs* sont les *clés* du dictionnaire. A chaque clé est associée une valeur, en correspondance.

## Opérations sur les tables
Ces opérations vont créer une nouvelle table.
### Selection
**Definition:** Selectionner revient à extraire les lignes d'une table qui satisfont un critère. Pour réaliser une selection, on utilise une fonction `test` qui prend en paramètre une ligne de la table et retourne un booléen:

**Méthode utilisant une boucle bornée:**

```python
selection = []
for ligne in table:
  if test(ligne):
    selection.append(ligne)
```

**Méthode par compréhension** 

```python
[ligne for ligne in table if test(ligne)]
```

### Projection
**Definition:** Une projection revient à supprimer certaines colonnes de la table. Pour réaliser une projection, on créé une nouvelle table:

**Méthode utilisant une boucle bornée et une table de listes:**

```python
projection = []
colonnes = [0,1] # liste de colonnes à conserver
for ligne in table:
  nouvelle_ligne = []
  for i in colonnes:
    nouvelle_ligne.append(ligne[i])
  projection.append(nouvelle_ligne)
```

**Méthode utilisant une boucle bornée et une table dictionnaires:**
```python
table = [{'id':0, 'NOM':'Jean','AGE': 65},
        {'id':1, 'NOM':'Michel','AGE': 45},
        {'id':2, 'NOM':'Manu','AGE': 40}]

projection = []
colonnes = ['id','NOM'] # liste de colonnes à conserver
for ligne in table:
  nouvelle_ligne = {}
  for i in colonnes:
    nouvelle_ligne[i] = ligne[i]
  projection.append(nouvelle_ligne)
>>> projection
[{'id': 0, 'NOM': 'Jean'}, {'id': 1, 'NOM': 'Michel'}, {'id': 2, 'NOM': 'Manu'}]
```

**Méthode par compréhension, table de listes** 

```python
[[ligne[i] for i in [0,1]] for ligne in table]
```


**Méthode par compréhension, table de dictionnaires** 

```python
[{ligne[i] for i in ['id','NOM']} for ligne in table]
# affiche
[{0, 'Jean'}, {'Michel', 1}, {2, 'Manu'}]
```

## Jointure
**Definition:** Une jointure est la fusion de 2 tables pour un même attribut. (commun).
La jointure permet de regrouper des informations dans une même table.

```python
clients = [{'IDC':27, 'NOM': 'Ritta', 'AGE': 19, 'ACTIVITE': 'Danse'},
          {'IDC':19, 'NOM': 'Blaise', 'AGE': 29, 'ACTIVITE': 'Cinema'}]
sejours = [{'IDS': 1, 'VILLE': 'Cayenne', 'ACTIVITE': 'Nature'},
           {'IDS': 10, 'VILLE': 'Rio', 'ACTIVITE': 'Danse'}]
cle = 'ACTIVITE'
table_jointure = []
attribut_commun = 'ACTIVITE'
for sejour in sejours:
    for client in clients:
        if sejour[cle] == client[cle]:
            ligne = {}
            for attribut in sejour.keys():
                ligne [attribut] = sejour[attribut]
            for attribut in client.keys():
                ligne [attribut] = client[attribut]
            table_jointure.append(ligne)
>>> table_jointure
[{'IDS': 10, 'VILLE': 'Rio', 'ACTIVITE': 'Danse', 'IDC': 27, 'NOM': 'Ritta', 'AGE': 19}]
```

