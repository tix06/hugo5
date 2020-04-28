---
author: "Eric Tixidor"
date: 06-28-2020
linktitle: data_analyse
menu:
  main:
    parent: 
next: 
prev: /AlgoKnn
title: Datas analyse
weight: 16
---
# Analyse de données et machine learning

## Les domaines professionnels 
Tous les champs professionnels, du moment où il y a des données qui sont collectées : 
dans l'entreprise, le commerce, dans la recherche, .... 

Ces données sont collectés à partir d’objets connectés, à partir de l’activité des internautes sur les sites de e-commerce (marketing digital), des statistiques d’utilisation de produits, de véhicules, de bâtiments, voire des données collectées suite à des évènements naturels, biologiques, etc.

Ces données peuvent servir les domaines de la santé (suivi de la propagation d’épidémies, aide au diagnostic,… des transports (analyse de flux,), de l’environnement (prévisions météorologiques, contrôle de la pollution), mais aussi dans l’analyse de la clientèle  dans l’industrie et le commerce.

En se basant sur des informations passées, les techniciens spécialisés dans l’observation des grosses données (big datas) peuvent ainsi faire des prévisions dans chacun de ces domaines.

Le principe : on récupère les données, on les nettoie, on les explore, puis on utilise nos algorithmes pour créer de l’intelligence (artificielle) qui aide à la décision.

## Vocabulaire 

* dataset : jeu de données. Ce jeu de données peut en contenir un petit nombre ou un très grand nombre de données (big data). Ces données peuvent être discretes (qualitatives) ou continues (valeurs numériques).

* big data : données massives. Des données qui sont collectées en continu et en grande quantité. Cela constitue un flux si important qu'il est obligatoire d'utiliser des techniques de traitement spécifiques au domaine du machine learning pour pouvoir les exploiter.

* Une classe : c'est un champ particulier à valeurs discrètes.

* La classification : consiste à examiner les caractéristiques d'un objet et lui attribuer une classe : 
	* attribuer ou non un prêt à un client
	* établir un diagnostice
	* placer une roche, une espèce végétale, animale... dans une catégorie

* Prédiction : consiste à prédire la valeur future d'un attribut en fonction d'autres attributs.

* Association : consiste à déterminer les attributs qui sont corrélés : 
	*	analyse du panier de la ménagère : ex : poisson et vin blanc
	* prix du loyer en fonction de la surface de l'habitation

* Segmentation : consiste à former des groupes homogène à l'intérieur d'une  population (des *clusters*)

* Modèles prédictifs : utilisent les données avec des résultats connus pour développer des modèles permettant de prédire les valeurs d'autres données.

* Modèle descriptif : popose des descriptions des données pour aider à la prise de décision. C'est un modèle surtout utilisé en segmentation et association.

* Apprentissage supervisé : les données à analyser comprennent à la fois des **données d'entrée et de sortie**. On connait la *classe* des objets, et on cherche à prévoir l'appartenance à une de ces classes pour tout nouvel objet.

* Apprentissage non supervisé : Seules les entrées sont fournies.

## Des exemples de méthodes de fouille de données

<table>
	<tr>
		<td></td><td>Supervisées</td><td>Non supervisées</td>
	</tr>
	<tr>
	  <td>
	  		Classification prédiction
	  </td>
		<td>
			<ul>
				<li>Arbre de décision (analyse discriminante)</li>
				<li>Réseaux de neurones</li>
				<li>Modèles relatifs aux réseaux Bayésiens</li>
				<li>Machines à vecteurs de supports</li>
				<li>...</li>
			 </ul>
		 </td>
		 <td>
		 	<ul>
				<li>Segmentation</li>
				<li>k plus proches voisins</li>
				<li>Recherche de séquences</li>
				<li>Reconnaissance de formes</li>
				<li>...</li>
			 </ul>
		 </td>
		</tr>
	<tr>
		<td>Association</td><td></td><td>Règles d'association</td>
	</tr>
</table>

## Les étapes du traitement de données
* Aggréger ces données dans un data lake.
* Nettoyer les données. C'est à dire s'assurer qu'elles sont consistantes, sans valeurs aberrantes ni manquantes, et mises dans le bon format.
* Explorez les données. Cette étape doit permettre de mieux comprendre les différents comportements et de bien saisir le phénomène sous-jacent. On cherche:
	* soit à réaliser une classification, par exemple sous forme arborescente. C'est ce que l'on cherche à réaliser lorsque l'on peut discriminer la population à trier à partir de critères qualitatifs. L'idée est alors de trouver les bonnes clés de tri, qui vont partager la population.
	*  soit à chercher une corrélation entre grandeurs, si celle-ci sont numériques. Chaque donnée observée est l'expression d'une variable aléatoire générée par une distribution de probabilité. On cherche alors à énoncer une conclusion du type : "suite à l'exploration, il y a clairement une relation entre X et Y, ces 2 grandeurs semblent liées par une relation de regression linéaire (ou non linéaire) du type Y = a*X + b (ou autre)".
* Modéliser les données. 
	* Dans le premier cas, à partir de valeurs dites **discrètes** (des *catégories*), on devra réaliser une segmentation des objets en entrée en différentes catégories. La prédiction réalisée à partir d'une nouvelle entrée donne en sortie une liste de labels possibles.
	* Dans le deuxième cas, il s'agira d'un traitement statistique des données. 

<figure>
<img src="../images/donneesRegression.png" width = 80% alt="classification et regression">
<figcaption>illutration de la différence entre classification et regression linéaire</figcaption>
</figure>

* Déployer le modèle. Une fois le modèle établit, on va encore le vérifier et l'ajuster à partir de certaines des données : il faudra donc prévoir une séparation initiale de ces données : certaines des données servent à générer le modèle (le *training set*). Les autres sont celles qui vont permettre de valider (tester) ou améliorer si besoin le modèle (le *testing set*). 
* Prévoir la catégorie ou faire de la prédiction à partir des nouvelles données. 

> Le machine learning est l'apprentissage d'un modèle statistique par la machine grâce à des données d'entraînement. Un problème de machine learning comporte parmi les étapes une **mesure des performances**. S'il améliore les performances sur cette tâche lorsqu'on lui fournit les données d'entraînement, on dit alors qu'il apprend.


# Exemples
*On pourra retrouver ces exemples plus en détail dans leur page originale : [https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/5868296-transformez-des-besoins-metiers-en-problemes-de-machine-learning](https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/5868296-transformez-des-besoins-metiers-en-problemes-de-machine-learning)*

## Comment recommander un produit à un client
**mots clés :** *Données discretes*, *règles d'association*, *apprentissage non supervisé*.

La recommandation est une problématique qui revient très souvent dans l'ananlyse de données pour le marketing électronique. La recommandation se base sur des similarités entre utilisateurs, ou bien des similarités entre produits. Ce *filtrage collaboratif* repose sur l’adage : Si deux personnes ont aimé des contenus identiques par le passé, elles ont une probabilité élevée d’aimer les mêmes choses dans le futur.

Sur l'image ci-dessous, on regarde par exemple ce qu'ont voté les utilisateurs similaires, c'est-à-dire ceux qui ont déjà voté la même chose sur d'autres produits (surlignés en vert). On peut alors prédire ce qu'aurait voté notre utilisateur sur le produit cherché, et ne proposer que les produits sur lesquels il aurait mis un pouce vert.

<figure>
<img src="../images/recommandation.png" width = 80% alt="recommandation à partir de pouces verts">
<figcaption>Les utilisateurs similaires (en vert) n'ont pas aimé le produit que notre utilisateur n'a pas encore noté. L'algorithme aura donc tendance à prédire une mauvaise note et à ne pas recommander le produit ici</figcaption>
</figure>

Les utilisateurs similaires (en vert) n'ont pas aimé le produit que notre utilisateur n'a pas encore noté. L'algorithme aura donc tendance à prédire une mauvaise note et à ne pas recommander le produit ici.

> En pratique : On peut voir la liste des profils utilisateurs comme une **matrice**. L’objectif d’un algorithme de recommandation est de remplir les cases vides de cette matrice. Quel serait le score de Gregory (dernière ligne du tableau) pour l’article "*ordinateur portable*", marqué avec un `?`.  Il faudra établir une correspondance entre les objets et les profils.

Il existe alors plusieurs méthodes d'association : 

* l'association basée sur les clients (voir exemple ci-dessus)

> On pourrait par exemple, calculer un coefficient de similitude entre Gregory et les autres usagers pour tous les articles renseignés, puis établir une liste triée.

* l'association basée sur les objets (l'exemple dit du *panier de la ménagère*)

<figure>
<img src="../images/achats.png" width = 80% >
<figcaption>une liste d'achats</figcaption>
</figure>

> Cette fois on ne s'interesse plus au profil du client, mais on cherche une règle d'occurence entre les objets. Pour trouver les associations entre 2 produits, on construit le tableau de co-occurrence montrant combien de fois 2 produits ont été achetés ensemble.

<figure>
<img src="../images/produits.png" width = 80% >
<figcaption>tableau de co-occurence</figcaption>
</figure>

*Ici : le produit A apparaît dans 80% des achats, le produit C n'apparaît jamais en même temps que le produit E, les produits A et D apparaissent simultanément dans 40% des achats.
Ces observations peuvent suggérer une règle de la forme : « Si un client achète le produit A ALORS il achète le produit D ».*

On cherche alors à générer des règles du type : *si A alors D* avec, pour chacune, un pourcentage de confiance. Par exemple, cette règle apparaissant ici apparaissant dans 40% des achats, on considère que le pourcentage de confiance est égal à 40%.

## Le clustering
**mots clés :** *Données continues*, *apprentissage non supervisé*, *algorithme des k-plus proches voisins*

Le clustering désigne les méthodes de regroupement automatique de données qui se ressemblent le plus en un ensemble de "nuages", appelés clusters. On cherche repérer, et mesurer la similarité entre les différentes données. Par exemple, les points sur le graphe ci-dessous peuvent être considérés comme similaires s'ils sont proches en termes de distance.

<figure>
<img src="../images/clustering.png" width = 50% alt="clustering">
<figcaption>L'objectif du clustering est de retrouver les différents clusters de données, c'est-à-dire de regrouper les données similaires entre elles</figcaption>
</figure>

*On pourra étudier cet exemple en détail avec la page `Python algo KNN` de ce même site*.

## utilisation d'un arbre de décision
**mots clés :** *Données discretes ou continues*, *classes*, *attributs*, *segmentation*.

* A partir dʼun ensemble de valeurs d'attributs, il sʼagit de prédire la valeur d'un autre attribut (variable cible).
* Un arbre est équivalent à un ensemble de règles de décision.

L'idée est de bien choisir l'(les) attribut(s) discriminant(s). L'arbre est construit en découpant successivement les données en fonction des variables prédictives. L'algorithme qui realise ce travail utilise des grandeurs statistiques pour mesurer la qualité de la segmentation.

Une fois l'arbre construit, pour prédire la classe (la variable cible) d'une nouvelle entrée (une instance), il faut parcourir l'arbre depuis la racine jusqu'à la feuille.

*Exemple 1 :*  Il s'agit de prédire si, selon la météo(ciel, temp., humidité et vent), on va aller jouer au tennis.

<figure>
<img src="../images/arbre.png" width = 80% alt="clustering">
<figcaption>construction d'un arbre de décision</figcaption>
</figure>

> Chaque chemin, depuis la racine jusqu'à une feuille est une règle de décision. Par exemple ici : `si ('ciel' == 'soleil') et ('temp.' == 'doux') et  ('humidité' = 'élevée') et ('vent' == 'faible' ) alors (classe = 'oui')` 


*Exemple 2 :* Arbres de classification et régression

On peut aussi réaliser ce type de segmentation avec des attributs à valeurs continues. On cherche alors à regrouper déterminer des clusters à partir du regroupement des classes.

L'exemple suivant montre la répartition des éléments dans un diagramme (x1;x2). Une fois ce premier travail réalisé, on pourra construire un arbre de classification à partir des tests sur x1 et x2. Par exemple 
```
si x2<0.42 alors classe = 'Vert'
``` 

<figure>
<img src="../images/splittedDatas.png" width = 50% alt="splittedDatas">
<figcaption>résultat obtenu par recherche de clusters sur un jeu de données bidimensionnelles à trois classes</figcaption>
</figure>


# Liens
* s'initier au machine learning [https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/4020611-identifiez-les-differents-types-dapprentissage-automatiques](https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning/4020611-identifiez-les-differents-types-dapprentissage-automatiques)
* Méthodes de fouilles : [http://www.lsis.org/espinasseb/Supports/DWDM/10-MethodesFouille-4p.pdf](http://www.lsis.org/espinasseb/Supports/DWDM/10-MethodesFouille-4p.pdf)

Approfondissement :

* machine learning : utiliser SciKit [https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-pratique](https://makina-corpus.com/blog/metier/2017/initiation-au-machine-learning-avec-python-pratique)
* apprentissage statistique avec scikit-learn : [https://www.math.univ-toulouse.fr/~besse/Wikistat/pdf/st-tutor3-python-scikit.pdf](https://www.math.univ-toulouse.fr/~besse/Wikistat/pdf/st-tutor3-python-scikit.pdf)


