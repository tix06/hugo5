---
Title: IA
---

# IA
...

# Comment s'est developpée l'IA?
Des données sont collectés à partir d’objets connectés, à partir de l’activité des internautes sur les sites de e-commerce (marketing digital), des statistiques d’utilisation de produits, de véhicules, de bâtiments, voire des données collectées suite à des évènements naturels, biologiques, etc.

Ces données peuvent servir les domaines de la santé (suivi de la propagation d’épidémies, aide au diagnostic,… des transports (analyse de flux,), de l’environnement (prévisions météorologiques, contrôle de la pollution), mais aussi dans l’analyse de la clientèle  dans l’industrie et le commerce.

En se basant sur des informations passées, les techniciens spécialisés dans l’observation des grosses données (big datas) peuvent ainsi faire des prévisions dans chacun de ces domaines. Ou prendre des décisions en fonction des variables.

# Le principe de l'analyse de données

> Le principe : on récupère les données, on les nettoie, on les explore, puis on utilise nos algorithmes pour créer de l’intelligence (artificielle) qui aide à la prévision/décision. Ces algorithmes sont basés sur des outils statistiques. La machine qui execute un tel algorithme est capable d'apprendre de manière autonome, dans une séquence où les données collectées servent à établir un *modèle*. La machine améliore son modèle grâce à un *score* associé à l'exploitation des données. Puis elle utilise ce *modèle* lorsque le *score* est optimal pour *résoudre* une série de problèmes.

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

# Comment recommander un produit à un client
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

On cherche alors à générer des règles du type : *si A alors D* avec, pour chacune, un pourcentage de confiance. Par exemple, cette règle apparaissant ici apparaissant dans 40% des achats, on considère que le pourcentage de confiance est égal à 40%. Ces regles d'association vont constituer des **classes**. Ces *classes* étant à priori inconnues, il s'agit alors d'un système d'*apprentissage non supervisé*.

## Le clustering
**mots clés :** *Données continues*, *apprentissage non supervisé*, *algorithme des k-plus proches voisins*

Le clustering désigne les méthodes de regroupement automatique de données qui se ressemblent le plus en un ensemble de "nuages", appelés clusters. On cherche repérer, et mesurer la similarité entre les différentes données. Par exemple, les points sur le graphe ci-dessous peuvent être considérés comme similaires s'ils sont proches en termes de distance.

<figure>
<img src="../images/clustering.png" width = 50% alt="clustering">
<figcaption>L'objectif du clustering est de retrouver les différents clusters de données, c'est-à-dire de regrouper les données similaires entre elles</figcaption>
</figure>
