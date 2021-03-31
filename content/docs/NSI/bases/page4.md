---
Title : SQL
---

# langage SQL
Structured Query Language, ou langage de requêtes structuré

(cours donné en classe)

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

# Murder Party à SQL City

<figure>
  <a href="https://replit.com/@ToniScullion1/Silver-TASK-2-SQL-Murder-Mystery"target="blank">
  <img src="../images/clue-illustration.png">
  <figcaption>retrouvez le meurtrier grâce aux bases de données de la police</figcaption></a>
</figure>

* Aller à la ressource sur Repl.it : <a href="https://replit.com/@ToniScullion1/Silver-TASK-2-SQL-Murder-Mystery" target="blank">Lien ici</a>

* Mettre le bouton sur `Code` à gauche
* Lire les consignes avec le fichier *activity.md*
* Cliquer sur le bouton `Fork` à droite
* Créer un compte
* fichier *main.sql*: mettre les 2 dernière lignes en commentaire, puis editer et executer  vos propres commandes SQL

**Aide**: votre première requête sera probablement:

```SQL
SELECT * from crime_scene_report 
where date = <a completer> and city = <a completer>;
```

Cette requête devrait normalement retourner:

| date | type  | description | city |
| --- | --- |--- | --- |
|20180215  | murder  | REDACTED | REDACTED | REDACTED  | SQL City|
|20180215  | murder  | Someone killed the guard! He took an arrow to the knee! |SQL City|
|20180115  | murder  | Security footage shows that there were 2 witnesses. The first witness lives at the **last house** on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave". | SQL City|

<br>

> à vous de jouer: explorez les bases de données pour retrouver le meurtrier...

# Ressources

* Cours complet en SQL, avec référencement des différentes instructions: [https://sql.sh/cours](https://sql.sh/cours)
* Correction partielle de l'activité Murder Party à SQL City: [mystery.knightlab.com](https://mystery.knightlab.com/walkthrough.html)