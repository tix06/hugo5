---
Title : SQL
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

# Travaux pratiques en SQL

([cours en ligne](../page7), ou [version en pdf](/pdf/NSI/bdd2-e.pdf))

> Traiter au choix l'un des sujets suivants. Au démarrage, représenter le schéma de la database comme sur l'exemple suivant. Puis répondre aux questions.

{{< img src="../images/bdd_films.png" caption="schema de la base de données films" >}}


## Pays, villes et langues parlées
Exercice sur le langage SQL rédigés par N. Revéret sur [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/51_world/world/)
## Base de données Netflix
Exercice sur le langage SQL rédigés par N. Revéret sur [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/52_netflix/netflix/)


## Murder Party à SQL City

{{< img src="../images/clue-illustration.png" link="https://replit.com/@ToniScullion1/Silver-TASK-2-SQL-Murder-Mystery" caption="retrouvez le meurtrier grâce aux bases de données de la police" >}}
* Pour le **TP guidé**: Aller à la ressource sur {{< a link="https://mystery.knightlab.com/walkthrough.html" caption="mystery.knightlab.com" >}} et suivre les instructions.

* Le fichier *sql-murder-mystery.db*: peut être télechargé pour une utilisation en *[local](/scripts/BDD/sql-murder-mystery.db* avec dbBrowserSQLite. Le projet peut être directement consulté sur {{< a link="https://github.com/NUKnightLab/sql-mysteries" caption="Github" >}}.

* Pensez à **prendre des notes** au fur et à mesure de votre avancée dans l'enquête.

{{< img src="../images/bdd_murder.png" caption="schema de la base de données murders" >}}

**Aide**: 
* Observez bien le *Diagramme Entité Relation* de cette base de données. Vous pourrez y lire le *schéma relationnel* de ces tables. Les *clés primaires* sont indiquées avec une clé *jaune* et les *clés étrangères* avec une flèche *bleue*.

* La relation entre tables est indiquée par une flèche.

* La liste des tables peut être obtenue avec:

```SQL
SELECT name 
  FROM sqlite_master
 where type = 'table';
```

* Pour obtenir la liste des 10 premières entrées de la table `crime_scene_report`: 

```SQL
SELECT * FROM crime_scene_report
LIMIT 10;
```

* La clause `WHERE` permet d'ajouter un filtre à votre requête. Elle est suivie d'une condition, par exemple: `WHERE city = 'SQL City'`.

* Lire le rappel sur les *wildcards* par exemple `'P%'` pour obtenir les noms qui commencent par `P`. Remplacer alors le signe `=` par `LIKE` dans la clause `WHERE`.


# base de données exoplanetes.db
## Principe
Nous allons utiliser un **script Python** pour nous connecter à la base de données `exoplanetes.db` et tester quelques requêtes en langage SQLite.

Nous utiliserons la librairie `sqlite3` de Python.

Il est conseillé d'utiliser l'IDE Spyder pour editer et interpréter les scripts écrits en Python.

La base de données doit être téléchargée ici : [exoplanetes.db](/scripts/BDD/exoplanetes.db)

## Script de base

```python
import sqlite3

try:
    conn = sqlite3.connect('exoplanetes.db')
    cur = conn.cursor()
    print("Base de données crée et correctement connectée à SQLite")

    sql = "SELECT sqlite_version();"
    cur.execute(sql)
    res = cur.fetchall()
    print("La version de SQLite est: ", res)
    


except sqlite3.Error as error:
    print("Erreur lors de la connexion à SQLite", error)


cur.close()
conn.close()
print("La connexion SQLite est fermée")
``` 

Rappel: Le mécanisme `try ... except` est détaillé à la page [mise au point d'un programme Python](/docs/NSI/langages/page5/#gestion-des-exceptions-try-except)

Voici la traduction de ce script en langage naturel:

```python
essayer:
  connexion a la base de donnees exoplanetes.db
  creation d un curseur SQL
  Afficher ("Base de données cree et correctement connectee à SQLite")
  executer la requete SQL "SELECT sqlite_version();"
  affecter le resultat de la requête dans la variable res

si une erreur survient:
  Afficher ("La version de SQLite est: ", sqlite3.Error)

sinon:
  # autres requetes SQL

fermeture du curseur
fermeture de la connexion
Afficher ("La connexion SQLite est fermée")
```

## Explorer la base de données
* L'instruction suivante permet d'explorer la base de données:

`"PRAGMA table_info(planetes_es);"`

> **Q1.** Ajouter cette requête à votre script python pour afficher les attributs de la table `planetes_es` de la base de données `exoplanetes.db`

* Voici un extrait de la reponse à cette requête:

```
[(0, '_name', 'VARCHAR(38)', 1, None, 1), (1, 'planet_status', 'VARCHAR(9)', 1, None, 0), (2, 'mass', 'NUMERIC(19, 14)', 0, None, 0), (3, 'radius', 'NUMERIC(19, 14)', 0, None, 0), ...]
```

> **Q2.** Quel est l'attribut du nom des planetes de cette table?


> **Q3.** Tester quelques unes des requêtes sur cette base, vues en TD (BDD2 - exercices). Utiliser pour cela un mécanisme de contrôle des erreurs de type `try .. except`, afin d'afficher les erreurs SQL dans la console de l'IDE.



