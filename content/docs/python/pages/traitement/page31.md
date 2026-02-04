---
Title: TP exoplanets.db
---

# Base de données exoplanetes.db
## Principe
Nous allons utiliser un **script Python** pour nous connecter à la base de données `exoplanetes.db` et tester quelques requêtes en langage SQLite.

Nous utiliserons la librairie `sqlite3` de Python.

Utiliser un IDE comme *Pyzo*, *Spyder*, ou bien *Jupyter Notebook* pour editer et interpréter les scripts écrits en Python.

La base de données, issue du site [exoplanet.eu](https://exoplanet.eu/catalog/#downloads-section) doit être téléchargée ici : [exoplanetes.db](/scripts/BDD/exoplanets_migrated.db)

## Script de base
### Connexion à la BDD
```python
import sqlite3

try:
    conn = sqlite3.connect('exoplanets_migrated.db')
    cur = conn.cursor()
    print("Base de données crée et correctement connectée à SQLite")

    sql = "SELECT sqlite_version();"
    cur.execute(sql)
    res = cur.fetchall()
    print("La version de SQLite est: ", res)
    


except sqlite3.Error as error:
    print("Erreur lors de la connexion à SQLite", error)
```

### Table `planets`
Pour avoir des informations sur la table:

```python
sql = """
    PRAGMA table_info(planets);
    """
```

```python
try:
    cur.execute(sql)
    res = cur.fetchall()
    print(f"{'Attribut':<20} {'Domaine':<10}")
    print("-" * 30)
    for row in res:
        print(f"{row[1]:<20} {row[2]:<10}")


except sqlite3.Error as error:
    print("Erreur lors de la connexion à SQLite", error)
```

*Résultat:*

```
Attribut             Domaine   
------------------------------
planet_id            INTEGER   
name                 TEXT      
planet_status        TEXT      
mass                 REAL      
radius               REAL      
orbital_period       REAL      
semi_major_axis      REAL      
eccentricity         REAL      
discovered           INTEGER   
detection_type       TEXT      
molecules            TEXT      
star_id              INTEGER
```

### table `stars`
Adapter le script précédent pour avoir les informations de la table `stars`

## Selection avec jointure
La requête suivante va donner les informations sur les premières exoplanètes de la table, ainsi que leur étoile, avec *jointure* entre les 2 tables.

```python
try:
    sql = """
        SELECT p.name, p.mass, p.radius, s.star_name, s.star_teff
        FROM planets p
        JOIN stars s ON p.star_id = s.star_id
        LIMIT 5;
    """
    cur.execute(sql)
    res = cur.fetchall()
    print(f"{'Planète':<20} {'Masse':<10} {'Rayon':<10} {'Étoile':<15} {'Teff'}")
    print("-" * 60)
    for row in res:
        print(f"{str(row[0]):<20} {str(row[1]):<10} {str(row[2]):<10} {str(row[3]):<15} {row[4]}")
    


except sqlite3.Error as error:
    print("Erreur lors de la connexion à SQLite", error)
```

*Résultat:*

```
Planète              Masse      Rayon      Étoile          Teff
------------------------------------------------------------
11 Com b             None       None       11 Com          4742.0
11 Oph b             21.0       None       11 Oph          2375.0
11 UMi b             None       None       11 UMi          4340.0
14 And b             None       None       14 And          4813.0
14 Her b             None       None       14 Her          5311.0
```

# Travail
## Explorer la base de données
> Rechercher:

1. Toutes les données relatives à l'étoile *Kepler-89 b*
2. Tous les noms des planètes dont la masse est plus de 10 fois supérieure à celle de Jupiter (Indiquer quelles sont ces planètes dans l'extrait de la table)
3. Les planètes ainsi que le nom de l'étoile hôte, dont l'étoile est située à moins de 40 pc de la Terre.
4. Les noms des 20 étoiles les plus proches de la Terre où des planètes ont été détectées.
5. Nombre total de planètes dans la table `(utiliser COUNT(*))`
6. Nombre total d'étoiles dans la table (utiliser `COUNT(DISTINCT ... )`)
7. Table des planètes qui n'ont été détectées ni par "Radial Velocity", ni par "Primary Transit" 
8. Le nombre de planètes qui n'ont été détectées ni par "Radial Velocity", ni par "Primary Transit"
9. Moyenne des distances entre le Soleil et les différentes étoiles de la table (utiliser `AVG`). *Attention à ne compter qu'une seule fois chacune des étoiles.*
10. Table des planètes où le type de l'étoile est G ... (utiliser `LIKE "G%"`)
11. Nom des planètes et distances au soleil, où de l'eau a été détectée (utiliser `LIKE`)
12. Le classement des étoiles, par ordre décroissant de leur nombre de planètes. (`GROUP BY, ORDER BY`). Limiter à 10 étoiles.

## Traitement
### Ajouter une colonne masse volumique
* Commencer par créer une nouvelle colonne `density` dans la table `planets`

```python
sql1 = """
    ALTER TABLE planets ADD COLUMN "Rho" REAL;
    """
```

Les données de la table `planets` sont relative à Jupiter. On rappelle que:

```python
RJup = 71e6      # en m
MJup = 1.898e27  # en kg
```

La masse volumique de Jupiter est alors:

$$\rho = \tfrac{MJup}{\tfrac{4}{3}\times \pi \times (RJup)^3}$$

On peut définir une densité pour la planète comme le rapport $\tfrac{\rho_{planete}}{\rho_{Jupiter}} = \tfrac{mass}{radius^3}$.

On ajoutera simplement dans la colonne `density`

$$density = \tfrac{mass}{radius^3}$$

* Ajouter les valeurs calculées (`UPDATE SET`) pour la `density` de chaque planète.



*Retrouver les fonctions mathematiques en SQL [ici](https://sqlite.fr/fonctions-mathematiques/)*

# Etude graphique
La recherche de dépendances entre grandeurs se fera en traçant un graphique, avec différents essais pour les axes x,y: On peut chercher par exemple la *dépendance* masse <-> rayon:

```python
import matplotlib.pyplot as plt
plt.clf()
axes = plt.gca()
x = [P[1] for P in res] # mass
y = [P[2] for P in res] # radius

plt.scatter(x,y,color='silver',marker='.')
# ajout d'une etiquette
z = "Jupiter"
MJ, RJ = 1,1
plt.plot(MJ,RJ,marker='o',color='red')
axes.text(MJ, RJ, f"({z})", fontsize=8)

plt.show()
```

