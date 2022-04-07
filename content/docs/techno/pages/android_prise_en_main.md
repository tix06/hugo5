---
Title: Pydroid prise en main
---

La version complète de cette fiche: 

* version Pydroid3: [TP3 geolocalisation](/docs/SNT_2nde/pages/pages_algo/python/python9/)
* version TI83: [TP3 geolocalisation](/docs/SNT_2nde/pages/pages_algo/python/python8/)

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

# Programme 2 : Créer une fonction **conversion**
Une meilleure approche du langage python consiste à créer une fonction, puis appeler celle-ci depuis le *Shell* pour afficher le résultat.


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
