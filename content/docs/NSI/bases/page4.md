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

> Traiter au choix l'un des sujets suivants. Au démarrage, représenter le schéma relationnel de la database. Puis répondre aux questions.

*Exemple:* Pour la base de données ci-dessous, le schéma relationnel est:

rôle((#*idFilm*,int),(*#idActeur*,int),(nomRole,varchar))

films(**idFilm**,int),(titre,varchar),(annee,int),(idRealisateur,int),(resume,text),(codePays,varchar))

notes((*#idFilm*,int),(*#email*,varchar),(nom,varchar),(prenom,varchar),(*#codePays*,varchar))

pays((**code**,varchar),(nom,varchar),(langue,varchar))

artistes((**idArtiste**,int),(nom,varchar),(prenom,varchar),(anneeNaiss,int))

{{< img src="../images/bdd_films.png" caption="schema de la base de données films" >}}


## Pays, villes et langues parlées
Exercice sur le langage SQL rédigés par N. Revéret sur [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/51_world/world/). Interface en ligne.
## Base de données Netflix
Exercice sur le langage SQL rédigés par N. Revéret sur [forge.apps.education.fr](https://exercices-bdd-aa801f.forge.apps.education.fr/52_netflix/netflix/)


## Murder Party à SQL City

{{< img src="../images/clue-illustration.png" link="https://replit.com/@ToniScullion1/Silver-TASK-2-SQL-Murder-Mystery" caption="retrouvez le meurtrier grâce aux bases de données de la police" >}}
* Pour le **TP guidé**: Aller à la ressource sur {{< a link="https://mystery.knightlab.com/walkthrough.html" caption="mystery.knightlab.com" >}} et suivre les instructions.

* Le fichier *sql-murder-mystery.db*: peut être télechargé pour une utilisation en *[local](/scripts/BDD/sql-murder-mystery.db)* avec dbBrowserSQLite. Le projet peut être directement consulté sur {{< a link="https://github.com/NUKnightLab/sql-mysteries" caption="Github" >}}.

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

{{< img src="../images/exoplanets.png" caption="extrait de la base de données" >}}

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

**La suite du TP à la page: [python et BDD](/docs/python/pages/traitement/page3)**
