---
Title: exercice prenoms sql
---

*Plan du cours*:

**Le langage de requêtes:**
* TP tableur sur les prix Nobels. Opérations de recherche, filtre et tri sur une table: [Lien](/docs/competences/calc/page3)
* Cours langage SQL et TD sur une base de données de prenoms: [Lien](/docs/NSI/bases/page7/)

**La structuration des données:**
* Bases de données, règles pour construire une BDD en plusieurs tables, TP sur la creation d'une BDD cinéma (Base de Libre Office): [Lien](/docs/NSI/bases/page2/)
* Problèmes d'intégrité, modele entité-relation (2): [Lien](../page1/), cours [pdf](/pdf/NSI/bdd1_prof.pdf) et [exercices](/pdf/NSI/bdd1_eleve.pdf)
* SGBD, gestion de l'accès concurentiel, [Lien](../page3/)

**Travaux pratiques**
* TP requêtes sur une table de prenoms: [Lien](../page8)
* TP sur la gestion d'une base de données de romans de sciences fiction, utilisant [SQLite Browser](../page6)
* TP sur le langage SQL avec des requetes sur une base de données. Différents thèmes sont proposés : [Lien](../page4)
	* enquete de police
	* villes du monde
	* séries Netflix
	* exoplanètes
* TP sur la creation d'un serveur avec gestion d'un formulaire [en python/SQL: page 6](../page5/)

# TP sur la table des prenoms
## Télécharger la table en format csv
Aller sur la page des fichiers des prenoms de l'état civil: [Lien](https://www.insee.fr/fr/statistiques/7633685)

**Télécharger** le fichier en format *csv* (2Mo) dans l'onglet TELECHARGEMENT. Il sera peut être necessaire de *dezipper* le fichier si celui-ci est compressé.

La description de la table se trouve dans l'onglet DICTIONNAIRE DES VARIABLES.

## Ouverture du fichier
* Lancez votre gestionnaire de base de données (DB Browser for Sqlite), ou bien un gestionnaire en ligne [sqliteonline.com](https://sqliteonline.com/)

* Dans le menu du gestionnaire: Créer une nouvelle base de données. Placer le fichier dans vos Documents. Ne pas créer de nouvelle table au démarrage.

* Menu: Importer: depuis un fichier csv

Penser à bien cocher: **Column name in first line** et choisir le bon séparateur `;`


{{< img src="../images/prenom1.png" caption="import depuis sqliteonline.com" >}}

{{< img src="../images/prenom2.png" caption="import depuis db Browser for sqlite" >}}

## Affichage de la table
Aller dans l'onglet *Parcourir les données*.

On observe:

* que le nom de la table, c'est *nat2022*
* que le nom des colonnes n'est pas bien explicite

{{< img src="../images/prenom3.png" caption="Parcours des données - observer les noms de colonne et nom de la table" >}}

à l'import, on a les noms suivants:

| nom table | colonne 1 | colonne 2 | colonne 3 |
| --- | --- | --- | --- |
| nat2022 | sexe | preusuel | annais | nombre |

On va modifier ça: **Modifier** le nom de la table ainsi que celui des colonnes pour avoir les noms suivants:

| nom table | colonne 1 | colonne 2 | colonne 3 |
| --- | --- | --- | --- |
| naissances | sexe | prenom | annee | nombre |

*Rappels:*

pour **Renommer une colonne**:

```SQL
ALTER TABLE nom_table
RENAME COLUMN ancien_nom TO nouveau_nom
```

pour **Renommer la table**:

```SQL
ALTER TABLE table_name
RENAME TO new_table_name
```

**Afficher** les premières lignes de la table afin de prendre connaissance des étiquettes des colonnes:

```sql
SELECT * FROM nom_table LIMIT 10;
```

## Travail
voir fiche [question-reponses](/pdf/NSI/bdd2_fiche_reponse_prenoms.pdf)

Aller dans l'onglet **Executer SQL**, écrire et tester une à une les instructions qui permettent de:

1. Afficher les dix premières lignes de la table
2. Afficher les lignes correspondant à l'année 1923. Là encore, mieux vaut ne demander que les 10 premières lignes…
3. Afficher les prénoms des filles nées en 1978.
4. Combien de fois le prénom Nicolas a-t-il été donné en 1907 ?
5. Afficher les 10 prénoms de fille les plus donnés en 1978 rangés dans l'ordre décroissant du nombre de fois où ils ont été donnés. Utiliser les mots-clés:
`SELECT FROM WHERE ORDER BY DESC LIMIT`
6. Afficher les lignes des prénoms de garçons donnés entre 1960 et 1969 (inclus l'un et l'autre). Utiliser un AND pour tester l'encadrement des années.
7. Afficher le nombre de prénoms différents de garçons donnés en 1938.
`SELECT COUNT(*) FROM WHERE`
8. Afficher le nombre de naissances de garçons observées en 1938.
9. Afficher le nombre de filles et le nombre de garçons apparaissant dans la table.
`SELECT SUM(nombre) FROM GROUP BY`
10. Quel est le prénom, pour un certain sexe, en distinguant par exemple "Camille (fille)" et "Camille (garçon)", qui a été le plus donné durant une année donnée ? En quelle année ?
`SELECT FROM ORDER BY DESC LIMIT`
11. En quelle année y-a-t-il eu le plus de naissances ?
SELECT SUM(nombre) FROM GROUP BY ORDER BY DESC LIMIT
12. Quels sont les 10 prénoms les plus donnés en France au cours du XX-ème siècle ?
`SELECT SUM(nombre) FROM GROUP BY ORDER BY DESC LIMIT` 


# Liens
* memento SQL sur [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/memento_sql/)
* l'exercice sur les prenoms est inspiré du site [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/)
* autres themes sur [forge.apps.education.fr](https://forge.apps.education.fr/gbecker/terminale-nsi/-/blob/9b29abe61b7b7aef253f99a863c8d047924b4d02/Theme2_base_de_donnees/02_langage-sql-exercices.md) (disquaire)