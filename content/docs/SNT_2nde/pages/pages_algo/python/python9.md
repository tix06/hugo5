---
Title: prog fonction version pydroid
---

# Situation - problème
La randonnée du Col des Fourches jusqu'au fort de Pelousette est décrite [ici](https://www.visorando.com/randonnee-fortins-de-pelousette-et-du-mont-des-fou/). Il s'agit d'un itinéraire dans les alpes du Sud, près du col de la Bonette.

Le but de la séance est de placer des marqueurs sur la carte IGN, afin de matérialiser l'itinéraire, comme sur l'image suivante:

<figure>
  <img src="../images/map5.png">
</figure>

# PROGRAMME 1 : conversion DM => DD
DM et DD sont des formats de repères d'angles:

* DM: signifie Degrès Minutes
* DD: signifie Degrès Décimal

## L’editeur de programme
Pour créer un nouveau programme: **Menu Fichier: New** 

<figure>
  <img src="../images_android/android1.png">
</figure>

* Saisir alors le script python:

```python
degres = float(input('Entrer les degres :'))
minutes = float(input('Entrer les minutes :'))
DD = degres + minutes / 60
print("l'angle en notation DD est :")
print(DD)
```
<figure>
  <img src="../images_android/android8.png">
</figure>

* Sauvegarder le programme: 
  * **Menu Fichier: Save as**

<figure>
  <img src="../images_android/android2.png">
</figure>

  * Internal storage

<figure>
  <img src="../images_android/android3.png">
</figure>

  * Créer un nouveau dossier appelé `python`: New Folder puis saisir `python`

<figure>
  <img src="../images_android/android4.png">
</figure>

  * Nommer le fichier: `localisation.py` 

<figure>
  <img src="../images_android/android7.png">
</figure>

* Executer alors le programme avec le bouton jaune en bas de l'écran

<figure>
  <img src="../images_android/android13.png">
</figure>

* Renseigner les valeurs de degrés et minutes pour convertir en DD:

<figure>
  <img src="../images_android/android9.png">
</figure>

<br>

> Utilisez alors votre programme pour définir les coordonnées DD du départ de la randonnée:

<br>

| | latitude | longitude |
|--- |--- |--- |
| Départ | 44°20,01612' | 6°52,1109' |

*Remarque:* il vous faudra executer une 2e fois le programme pour le calcul de la longitude

# Programme 2 : Créer une fonction **conversion**
Une meilleure approche du langage python consiste à créer une fonction, puis appeler celle-ci depuis le *Shell* pour afficher le résultat.

## Modifier le programme pour créer une fonction **conversion**
Revenir dans l'editeur et modifier le programme pour créer une fonction:

<figure>
  <img src="../images_android/android10.png">
</figure>

La fonction **conversion** a alors 2 paramètres, `degres` et `minutes` qui devront être renseignés lors de l'appel de la fonction. Cela se fera depuis le *Shell* python.

## Le Terminal
* Depuis le menu principal, à gauche, choisir *Terminal* 

<figure>
  <img src="../images_android/android5.png">
</figure>


* Utiliser alors les instructions UNIX:

```
$ ls
$ cd python
$ python
```

*explications...* 

| instruction UNIX | commentaire |
|--- |--- |
| ls | affiche le contenu du dossier courant |
| cd python | changer de dossier et aller dans le dossier `python` |
| python | lancer le shell python |


<figure>
  <img src="../images_android/android11.png">
</figure>

## Le Shell python
Les instructions python seront alors saisies après les chevrons `>>>` `
`
Chaque ligne saisie sera alors exécutée.

Saisir:

```python
>>> from localisation import *
>>> conversion(40,23)
```

<figure>
  <img src="../images_android/android12.png">
</figure>

Voilà, vous pourrez utiliser maintenant la fonction `conversion` pour transformer n'importe quelle valeur du format DM vers le format DD. 

Voici celles du départ et de l'arrivée de la randonnée:

| | latitude | longitude |
|--- |--- |--- |
| Départ | 44°20,01612' | 6°52,1109' |
| Arrivée | 44°20,04108'| 6°51,91188' |


# Positionner des marqueurs sur une carte

Vous allez placer 2 marqueurs sur une carte, correspondant au départ et à l'arrivée de la randonnée.

Rendez vous sur le portail <a href="https://www.geoportail.gouv.fr/carte" target=_blank>Geoportail</a>

* Dans le menu outil, choisir *Annoter la carte*:

<figure>
  <img src="../images/map1.png">
</figure>

* Dans les outils de creation, choisir le marqueur: Placer des points.

<figure>
  <img src="../images/map2.png">
</figure>

* Renseigner alors les coordonnées dans la barre de recherche à partir des résultats calculés en format DD (voir plus haut)

<figure>
  <img src="../images/map3.png">
</figure>

* Il vous reste alors à cliquer sur le cercle-cible pour placer les 2 points départ et arrivée sur la carte.

<figure>
  <img src="../images/map4.png">
</figure>

* On pourra placer d'autres points de l'itinéraire avec la même méthode...

| | latitude | longitude |
|--- |--- |--- |
| étape 1 | 20,43636' | 6°51,54288' |
| étape 2 | 44°20,49468'| 6°51,99768' |
| étape 3 | 44°20,10228'| 6°52,15908' |
| étape 4 | 44°19,81248'| 6°52,28124' |
| étape 5 | 44°19,83708'| 6°52,27248' |





