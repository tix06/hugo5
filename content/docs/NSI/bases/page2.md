---
Title : BDR
---

# bases de données relationnelles
## Le modèle entité-association
La première étape pour aboutir à un modèle permettant de stocker les données dans une base consiste à *identifier les objets* et définir leurs *liens*.

### Définitions
#### Entité
on désigne par **entité** tout objet identifiable et pertinent pour l’application. Par exemple, pour la base de donnée précédente, les entités sont:

* *Films*: les films
* *Réalisateurs*: les réalisateurs

Pour chacune des entités, les individus ou objets ont en commun les même propriétés. Ce sont des **tables**. 

#### Attributs
Les entités sont caractérisées par des propriétés appelées attributs. Un attribut est désigné par un **nom** et prend ses valeurs dans un **domaine** énumérable. (notion à rapprocher du *type* en Python).


On exprime ici chaque attribut par son *nom: domaine*. Ces attributs doivent être *insécables*, ce qui empêche d'en choisir un du genre *adresse* (qui se decomposerait alors en n° + rue + ville).

Pour l'entité *Films*, ces attributs sont *Titre* et *Annee*.

#### Association
Une association représente un **lien** entre les entités.

Il y a un lien représenté par le **verbe** *a réalisé* entre les entités *Réalisateurs* et *Films*.

On distingue:

* **L'association binaire fonctionnelle**: chaque occurence de l'entité A est liée à au plus une occurence de l'entité B. C'est équivalent à dire **A=>B** (la connaissance de A détermine celle de B).



<figure>
  <img src="../images/a_implique_b.png" alt="association binaire fonctionnelle">
  <figcaption>association binaire fonctionnelle</figcaption>
</figure>

* **L'association non fonctionnelle**: Une occurence de A peut être liée à plus d'une occurence de B. 



<figure>
  <img src="../images/b_implique_a.png" alt="association binaire non fonctionnelle">
  <figcaption>association binaire NON fonctionnelle</figcaption>
</figure>

## du modèle entité-relation au modèle relationnel


### Définitions
#### Schéma d'une relation
Une relation possède un nom, et se compose de colonnes désignées par un nom d’attribut avec des valeurs d’un certain domaine.

Le **degré** d’une relation est le nombre d’attributs (ou de colonnes) et le **cardinal** d’une relation est le nombre de tuples (ou de lignes).

Le **schéma d'une relation** est un ensemble de tuples de la forme $S = ((A_1,domaine_1, (A_2,domaine_2) ...(A_n,domaine_n))$ où les A<sub>i</sub> sont les attributs.

*Exemple: le schéma de la relation Films est: $((Titre,str),(Annee,int))$*

Une **table** R, ou **relation** est un ensemble fini de n-upplets $(x_1, x_2, ... x_n)$ où les x<sub>i</sub> prennent leurs valeurs dans A<sub>i</sub>.


Une **occurence** (ou élément d'une table R) est une ligne dans un tableau.

Lorsqu'une base de données comporte plusieurs tables, l'ensemble des schémas de ces relations s'appelle le **schéma relationnel** de la base de données.

> Exercez vous: donner le schéma relationnel de la base de données définie plus haut sur les Films et Réalisateurs de cinéma.

#### Clé (ou identifiant)
**Une clé** est un attribut d'une relation.

**clé primaire** : une clé conçue pour identifier de manière unique les éléments d'une table.  Si un attribut est considéré comme clef primaire, on ne doit pas trouver dans toute la relation 2 fois la même valeur pour cet attribut.

Dans la situation fréquente où on a du mal à déterminer quelle est la clé d’un type d’entité ; on crée un identifiant abstrait appelé id (un numéro séquentiel) indépendant de tous les autres attributs.

Dans une table, l'un des attributs peut être la clé primaire d'une autre table. Il s'agit alors d'une **clé étrangère**. Cet attribut permet de faire reference à un enregistrement dans une autre table, et caractérise parfaitement cette autre entité.

*Exemple:* **idMES** est la clé étrangère dans la relation *Films*:

| **Titre** | Annee | **idMES** |
|--- | --- | --- |
| Hana-bi | 1997 | 1 |
| Big fish | 2003 | 2 |
| Edward aux mains d'argent | 1990 | 2 |


#### Association binaire
Une association binaire entre les entités E<sub>1</sub> et E<sub>2</sub> est un *ensemble de couples* (e<sub>1</sub>, e<sub>2</sub>) avec e<sub>1</sub>∈E<sub>1</sub> et e<sub>2</sub>∈E<sub>2</sub>. 

Cette association peut être représentée à l'aide d'une *clé etrangère*, ou peut necessiter la création d'une nouvelle relation (et donc d'un nouveau tableau) pour répondre aux contraintes d'intégrité.

La base de données doit se conformer aux **contraintes d'intégrité référentielles**:

1. Contrainte de relation: chaque relation doit comporter une clé primaire.
2. Clé etrangère: doit être la clé primaire de l'autre relation à laquelle elle se réfère.
3. Modification: on ne doit pas faire de modification de la clé primaire d'une occurence si celle-ci est liée.

### Règles de conception d'une base de données
* **Unicité:** Toute entité donne lieu à une table dont la clé primaire est l'identifiant de l'entité.
* Toute **association binaire fonctionnelle** est implémentée par la presence d'une **clé étrangère** dans la table, qui représente l'entité origine de la dépendance fonctionnelle.
* **Normalisation:** Toute **association non fonctionnelle** génère une **nouvelle table** dont la clé primaire est l'ensemble des clés primaires des tables qu'elle relie. Un exemple d'association non fonctionnelle, c'est lorsqu'une information apparait plusieurs fois, et necessiterait de modifier plusieurs lignes s'il fallait effectuer un changement.

*Remarque:* *la clé d’une association* (binaire) entre une entité E<sub>1</sub> et une entité E<sub>2</sub> est le couple constitué de la clé c<sub>1</sub> de E<sub>1</sub> et de la clé c<sub>2</sub> de E<sub>2</sub>.

# TP
## SQLite Browser
* Le logiciel SQLite Browser se trouve sur le lecteur L:. Faites une recherche pour trouver le fichier executable.
* Notice: <a href="http://prof.math.free.fr/mgtmn/tp/bdd_pres_dbb_sqlite.pdf" target="blank">Consulter la notice</a>

## A faire vous même
Utiliser la page des Oscars pour les meilleurs films d'animation: https://fr.wikipedia.org/wiki/Oscar_du_meilleur_film_d%27animation

1. Dans SQLite Browser, commencer par créer une nouvelle Base de Données (en mémoire).
2. Créer table: créer *Films*((**`ID_film, INT`**),(Title,TEXT),(`ID_rea`,INT)) puis *Realisateurs*((**`ID_rea`, INT**), (`last_name`,TEXT), (`first_name`, TEXT))
3. Compléter chacune des tables avec au minimum 4 nouvelles entrées. Bien renseigner les valeurs de la clé secondaire `ID_rea` correspondante dans la table *Films*.
4. Tester alors les instructions SQL suivantes... Recopier ensuite l'instruction et expliquer dans chaque cas ce qui est renvoyé:

* requête 1: `SELECT * FROM Films`
* requête 2: `SELECT Title FROM Films`
* requête 3: 

```
SELECT * FROM Films
where ID_rea=1
```

* requête 4:

```
SELECT * FROM Films
where ID_rea=1 or date>2003
```

* requête 5:

```
SELECT * FROM Films
inner join Realisateurs on Films.ID_rea = Realisateurs.ID_rea
```




## Suite du cours
* retour sur la page [SGBD](/docs/NSI/bases/page3/)
* retour sur la page [modèle relationnel](/docs/NSI/bases/page1/)
* page sur [le langage SQL](/docs/NSI/bases/page4/)