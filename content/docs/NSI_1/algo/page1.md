---
Title: data analyse
---

# Intelligence artificielle?
Les machines sont-elles intelligentes? On peut en douter, au vu du comportement de certains logiciels. Imaginez vous un humain vous repondre qu'il est impossible de choisir une heure de stationnement pour le parking désiré, sans vous dire qu'il est toutefois possible de stationner moins de temps...?

<figure>
  <img src = "../images/IA1.png">
</figure>

Et pourtant les logiciels sont souvent comme çà. Leur ergonomie est souvent mal pensée, ce qui peut rendre leur utilisation *énervante*.

> L'**intelligence artificielle** décrit l'ensemble des techniques permettant à des machines de *simuler l'intelligence humaine*. 

Concrêtement, il s'agit de programmer les machines pour qu'elles s'adaptent en fonction des données reçues afin d'effectuer au mieux les tâches qui leur sont assignées.

Dans certains domaines, l'essor de l'*intelligence artificielle* est lié à l'*explosion des données accessibles* et des *capacités de traitement*.

# Apprentissage automatique
Le *machine learning* est l'un des domaines de l'intelligence artificielle. Il s'agit:

* d'abord de construire un modèle à partir de données. C'est la *phase d'entrainement, ou d'apprentissage*.
* Puis d'effectuer des prédictions ou prendre des décisions, sur d'autres données.

En apprentissage automatique, on distingue les algorithmes d'apprentissage: 

* **supervisés**: apprentissage à partir d'exemples déjà etiquettés (classes discretes ou valeurs Y=f(X) connues)
* **non supervisées**: découverte de la structure de données sans exemples étiquettés.


# Analyse données par regression lineaire
Une étude statistique permet de repérer si certains paramètres sont liés entre eux. Alors, si ces données étaient suffisamment nombreuses et précises, il est possible d’établir des lois mathematiques sur ces données. Une manière de représenter ce lien entre paramètres est, par exemple d’établir une loi de regression linéaire.

## Régression linéaire
La régression linéaire est un algorithme qui va trouver une droite qui se rapproche le plus possible d’un ensemble de points. Les points représentent les données d’entraînement (Training Set).

<figure>
  <img src="../images/courbe_bruit.png">
  <figcaption>Nuage de points avec Regression Lineaire</figcaption>
</figure>

A partir de données d'entrée, les points oranges (X1,Y1), on cherche s'il existe un modèle mathématique. Par exemple:

$$Y1 = a \times X1 + b$$

Les écarts entre les points et la courbe du modèle devront être les plus petits possibles. 

<figure>
  <img src="../images/nuage_points_bruit.png">
  <figcaption>Regression linéaire impossible</figcaption>
</figure>

## Modèle prédictif
Un modèle prédictif ne peut être établi qu’à partir d’une étude prealable de données. 

A partir de nouvelles données, on peut alors, grâce à une simulation, prédire le comportement futur du nouvel objet. A condition que celui-ci fasse partie de la même famille d’objets que ceux qui ont permis d’établir le modèle.

## Exemple
Cet exemple est issu du [Blog mrmint.fr](https://mrmint.fr/regression-lineaire-python-pratique).

*Supposons que vous soyez le chef de direction d’une franchise de camions ambulants (Food Trucks). Vous envisagez différentes villes pour ouvrir un nouveau point de vente. La chaîne a déjà des camions dans différentes villes et vous avez des données pour les bénéfices et les populations des villes.*

> Vous devrez utiliser ces données pour vous aider à choisir la ville pour y ouvrir un nouveau point de vente.

Ce problème est de type apprentissage supervisé modélisable par un algorithme de régression linéaire. Il est de type supervisé car pour chaque ville ayant un certain nombre de population (variable prédictive X), on a le gain effectué dans cette dernière (la variable qu’on cherche à prédire : Y).

## Notebook
Vous utiliserez le notebook en ligne sur <a href="https://tix06.github.io/jupyterlite_NSI/lab/index.html" target="_blank">Jupyterlite</a>: Dossier `TP4/linear_regression.ipynb`


# Algorithme des K proches voisins Knn
## Principe
Il s'agit d'un algorithme d'apprentissage supervisé, initialisé par des exemples connus. Pour cela, on part d'un jeu de données existant dont on connait les *classes*.

L'algorithme KNN (k-nearest neightbors) permet de déterminer à quelle classe appartient un nouvel élément.

## Exemple: Les joueurs de NBA
On cherche une correspondance entre les **caractéristiques physiques** d'un joueur de basket et son **poste** sur le terrain.

Pour simplifier, on considerera que les postes sont au nombre de trois : 

* le joueur Centre, noté **'C'** (position 5 sur le schéma)
* Le joueur Ailier, noté **'F'** (positions 3 et 4 sur le schéma)
* Le joueur arrière ou meneur de jeu, noté **'G'** (positions 1 et 2 sur le schéma)

Les données sont issues de la page : [nba.com](https://fr.global.nba.com/playerindex)

La ligue de basket americaine contient environ 400 joueurs professionnels. La plupart de nationalité américaine. On dispose d'un extrait de ce fichier (voir dans le dossier `datas`), constitué de moins de 100 joueurs, classés par ordre alphabetique.

<figure>
  <img src="../images/nba1.png">
  <figcaption>extrait du tableau des joueurs NBA en 2020</figcaption>
</figure>

### Apprentissage supervisé
Chaque joueur de basket occupe un poste particulier sur le terrain:

<figure>
  <img src="../images/nba2.png">
  <figcaption>poste occupé sur le terrain</figcaption>
</figure>

Une étude des caractéristiques physique des joueurs montre une correlation entre le poids, la taille, et le poste du joueur. Dans un diagramme taille-poids, les joueurs se repartissent en îlots selon leur poste:

<figure>
  <img src="../images/centre.png">
  <figcaption>les joueurs <b>Centre</b> se repartissent en haut à droite</figcaption>
</figure>

### Prédiction
On peut alors prévoir le poste d'un nouveau joueur. Pour cela on observe ses k plus proches voisins, et on en déduit quel poste corresspnd à son physique, à partir de la classe majoritairement représentée.

<figure>
  <img src="../images/joueur9.png">
  <figcaption>Le joueur semble être à la limite des classes <b>F</b> et <b>G</b></figcaption>
</figure>

*Méthode:*

* on ajoute une nouvelle colonne calculée: Pour le joueur inconnu, on calcule la **distance** avec chaque élément *classé* dans le tableau .
* on *trie* le tableau selon la **distance**.
* on observe la classe majoritaire pour les k prremiers éléments classés de la liste triée. La valeur de **k** doit être représentative. On prendra la plupart du temps $k = \sqrt N$

### Notebook
  <ul>
    <li>IA2-notebook sur <b>l'algo Knn</b> et le <i>basket US</i> en ligne sur Jupyterlite: <a href="https://tix06.github.io/jupyterlite_NSI/lab/index.html" target="_blank">Lien vers Jupyterlite</a>: Choisir le fichier <i>TP4/AlgoKnn.ipynb</i> sur <i>Jupyterlite</i> et completer la fiche reponse <a href="/pdf/NSI/IA2_algo_KNN_TP.pdf" download="IA2_algo_KNN_TP.pdf">IA2_algo_KNN_TP.pdf</a> pour les questions</li> 
  </ul>

# Liens
* [Blog mrmint.fr](https://mrmint.fr/regression-lineaire-python-pratique)
## documents utilisés pour la redaction de la page
* s'initier au machine learning [https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/4020611-identifiez-les-differents-types-dapprentissage-automatiques](https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/4020611-identifiez-les-differents-types-dapprentissage-automatiques)
* Méthodes de fouilles : [http://www.lsis.org/espinasseb/Supports/DWDM/10-MethodesFouille-4p.pdf](http://www.lsis.org/espinasseb/Supports/DWDM/10-MethodesFouille-4p.pdf)
* La règlementation sur les algorithmes d'IA: Faut-il interdire ces algorithmes dans certains secteurs: [rapport du CNIL: garder la main](https://www.cnil.fr/sites/default/files/atoms/files/cnil_rapport_garder_la_main_web.pdf)
* Comment rendre les algorithmes responsables? [Le Monde.fr internetactu](https://www.lemonde.fr/blog/internetactu/2018/09/08/concretement-comment-rendre-les-algorithmes-responsables/)

## Approfondissement
* Différence entre Intelligence Artificielle, Machine Learning et Deep Learning : [http://penseeartificielle.fr/difference-intelligence-artificielle-machine-learning-deep-learning/](http://penseeartificielle.fr/difference-intelligence-artificielle-machine-learning-deep-learning/)
* Inférence bayesienne : Les probabilités conditionnelles (Bayes) - le blog de David Louapre : [https://sciencetonnante.wordpress.com/2012/10/08/les-probabilites-conditionnelles-bayes-level-1/](https://sciencetonnante.wordpress.com/2012/10/08/les-probabilites-conditionnelles-bayes-level-1/)
* theorie sur le machine learning : [https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-theorie](https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-theorie)

* machine learning : utiliser SciKit [https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-pratique](https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-pratique)
* apprentissage statistique avec scikit-learn : [https://www.math.univ-toulouse.fr/~besse/Wikistat/pdf/st-tutor3-python-scikit.pdf](https://www.math.univ-toulouse.fr/~besse/Wikistat/pdf/st-tutor3-python-scikit.pdf)