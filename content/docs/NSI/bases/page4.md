---
Title : SQL
---

**La structuration des données:**

* Généralités sur les [SGBD: page 1](../page3/)
* TD sur le [modele relationnel: page 2](../page1/)
* TD sur le modele relationnel, [entité-relation: page 3](../page2/)
* TP sur la creation d'une [BDD cinéma](/docs/NSI/bases/page2/), utilisant un SGBD (Base de LibreOffice)
* TP sur la gestion d'une base de données de romans de sciences fiction, utilisant [SQLite Browser : page 4](../page6)

**Le langage de requêtes:**

* TD en ligne sur une base de données de prenoms: [Lien] (https://e-nsi.forge.aeif.fr/exercices_bdd/31_prenoms/prenoms/)"> vers le site e-nsi.forge.aeif.fr
* TP sur le langage SQL avec des requetes sur une base de données d'[exoplanetes: bas de la page 5](../page4)
* TP sur le langage SQL avec **plusieurs tables** et jointures: une [enquete de police: page 5](../page4)
* TP sur la creation d'un serveur avec gestion d'un formulaire [en python/SQL: page 6](../page5/)

# langage SQL
Structured Query Language, ou langage de requêtes structuré

([cours en pdf](/pdf/NSI/bdd2-e.pdf))

> Traiter au choix l'un des 2 sujets suivants

# Explorer une base de données à tables et liens multiples
## Base de données Films
Lien: [Exercices sur le langage SQL rédigés par N. Revéret](https://e-nsi.forge.aeif.fr/exercices_bdd/41_films/films/)

{{< img src="../images/bdd_films.png" caption="schema de la base de données films" >}}
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


# TP Python - SQL: base de données exoplanetes.db
## Principe
Nous allons utiliser un script Python pour nous connecter à la base de données `exoplanetes.db` et tester quelques requêtes en langage SQLite.

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



