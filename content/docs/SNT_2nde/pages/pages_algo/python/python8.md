---
Title: scratch python TP3
---

Aller sur la page <a href="https://fr.vittascience.com/TI-83/?mode=mixed&console=bottom&toolbox=texas-instruments" target=_blank>Vittascience.com mode Texas Instruments</a>

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

Sur l'interface Scratch de Vittascience:

### Menu **Var** : Créer une variable que vous nommerez **degres**

<figure>
  <img src="../images/math0.png">
</figure>

... puis:

<figure>
  <img src="../images/math1.png">
</figure>
 


### Menu **Var** : affecter à degres la valeur “ “



### Menu **E/S** :
Choisir le bloc demander à l’utilisateur “Entrer un nombre“
<figure>
  <img src="../images/math2.png">
</figure>

Le programme devrait ressembler à ceci :
<figure>
  <img src="../images/math3.png">
</figure>
Entre les guillemets : modifier le texte : Entrer les degres : 
<figure>
  <img src="../images/math4.png">
</figure>
 
Compléter le programme pour qu’il demande aussi les minutes et qu’il stocke la valeur dans la nouvelle variable minutes :
<figure>
  <img src="../images/math5.png">
</figure>

### Opération math
Enfin, vous allez créer une nouvelle variable DD. Et lui affecter le résultat de l’opération degres + minutes / 60 :

Menu **Math** : choisir le premier bloc (opération +)  : <img src="../images/math6.png">

Modifier et combiner 2 blocs comme celui-ci pour écrire l’opération degres + minutes / 60
<figure>
  <img src="../images/math7.png">
</figure>
 
### Afficher le résultat
Il ne reste plus qu’à afficher le résultat avec la fonction écrire dans la console du menu **E/S**. 

Le script complet est donné ci-dessous :

<figure>
  <img src="../images/math8.png">
</figure>
 
Il ne vous reste plus qu’à <a href="/scripts/SNT/degresDM_DD.py" download="degresDM_DD.py">télécharger</a> le programme sur la calculatrice. 
<img src="../images/math9.png">

Utiliser le programme TI-CONNECT pour le transfert de fichier.

## Transfert sur calculatrice TI83
Brancher la caclulatrice. Dans le logiciel TI-CONNECT, appuyer sur le bouton de transfert ordinateur => calculatrice

<figure><div>
  <img src="../images/math10.png"></div>
</figure>

## IDE Python
Avec le bouton **prgm** de la calculatrice, choisir **2: Python App** 

<figure><div>
  <img src="../images/math11.png"></div>
</figure>

Choisir le programme PYTHON01 avec le curseur.

Les boutons du menu en bas de l’ecran sont accessibles avec chacune des touches situées au dessous.

Par exemple, touche **fx** pour **Exéc**uter.

<figure><div>
  <img src="../images/math12.png"></div>
</figure>

Utiliser alors le programme depuis la fenêtre du shell:

<figure><div>
  <img src="../images/math13.png"></div>
</figure>

<br>

> Utilisez alors votre programme pour définir les coordonnées DD du départ de la randonnée:

<br>

| | latitude | longitude |
|--- |--- |--- |
| Départ | 44°20,01612' | 6°52,1109' |

*Remarque:* il vous faudra executer une 2e fois le programme pour le calcul de la longitude. Aller dans le menu **Script** puis executer à nouveau le programme.

# PROGRAMME 2: Créer une fonction **conversion**
Une meilleure approche du langage python consiste à créer une fonction, puis appeler celle-ci depuis le *Shell* pour afficher le résultat.

## Aller sur **Editer**
Le script est alors le suivant:

```python
degres = float(input('Entrer les degres :'))
minutes = float(input('Entrer les minutes :'))
DD = degres + minutes / 60
print("L'angle en notation DD est :")
print(str(DD))
``` 


<figure><div>
  <img src="../images/math14.png"></div>
  <figcaption>script affiché dans l'éditeur de la TI83</figcaption>
</figure>

Aller sur la première ligne et insérer la *définition* de la fonction:

* Menu **Fns...**: onglet **Fonc**: choisir **1: def fonction()**
* ajouter le nom de la fonction en passant en clavier alphanumérique (bouton **2nde** puis **alpha**): `def conversion():`
* ajouter des paramètres entre les parenthèses, que vous nommerez `degres` et `minutes`
* adaptez alors le script: supprimez toutes les lignes sauf celle du calcul de `DD`, rectifier les indentations dans le bloc de la fonction.

<figure><div>
  <img src="../images/math15.png"></div>
</figure>

* ajouter l'instruction `return DD` à partir du menu **Fns...**: onglet **Fonc**: choisir **2: Return** 

<figure><div>
  <img src="../images/math16.png"></div>
</figure>

* **Exéc**uter le programme

## Le Shell python
Dans la fenêtre du Shell, il ne se passe rien. C'est normal, vous allez appeler la fonction avec des arguments placés:

* avec le bouton **var**: choisir `conversion` (OK)
* le Shell affiche le nom de la fonction. 

<figure><div>
  <img src="../images/math17.png"></div>
</figure>

* Il faut completer avec les arguments

<figure><div>
  <img src="../images/math18.png"></div>
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





