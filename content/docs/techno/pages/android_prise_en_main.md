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

{{< img src="../images_android/android1.png" >}}
* Saisir alors le script python:

```python
degres = float(input('Entrer les degres :'))
minutes = float(input('Entrer les minutes :'))
DD = degres + minutes / 60
print("l'angle en notation DD est :")
print(DD)
```
{{< img src="../images_android/android8.png" >}}
* Sauvegarder le programme: 
  * **Menu Fichier: Save as**

{{< img src="../images_android/android2.png" >}}
  * Internal storage

{{< img src="../images_android/android3.png" >}}
  * Créer un nouveau dossier appelé `python`: New Folder puis saisir `python`

{{< img src="../images_android/android4.png" >}}
  * Nommer le fichier: `localisation.py` 

{{< img src="../images_android/android7.png" >}}
* Executer alors le programme avec le bouton jaune en bas de l'écran

{{< img src="../images_android/android13.png" >}}
* Renseigner les valeurs de degrés et minutes pour convertir en DD:

{{< img src="../images_android/android9.png" >}}
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

{{< img src="../images_android/android10.png" >}}
La fonction **conversion** a alors 2 paramètres, `degres` et `minutes` qui devront être renseignés lors de l'appel de la fonction. Cela se fera depuis le *Shell* python.

## Le Terminal
* Depuis le menu principal, à gauche, choisir *Terminal* 

{{< img src="../images_android/android5.png" >}}

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


{{< img src="../images_android/android11.png" >}}
## Le Shell python
Les instructions python seront alors saisies après les chevrons `>>>` `
`
Chaque ligne saisie sera alors exécutée.

Saisir:

```python
>>> from localisation import *
>>> conversion(40,23)
```

{{< img src="../images_android/android12.png" >}}
Voilà, vous pourrez utiliser maintenant la fonction `conversion` pour transformer n'importe quelle valeur du format DM vers le format DD. 

Voici celles du départ et de l'arrivée de la randonnée:

| | latitude | longitude |
|--- |--- |--- |
| Départ | 44°20,01612' | 6°52,1109' |
| Arrivée | 44°20,04108'| 6°51,91188' |
