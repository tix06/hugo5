---
Title: vecteur vitesse
---

# Seance précédente: enregistrements de trajectoires
Lors de la [séance précédente](/docs/PC_1ere/meca/page1/#pointage-des-positions), vous avez obtenu 3 chronophotographies:

* mouvement rectiligne uniforme
* mouvement rectiligne accéléré
* mouvement parabolique

Comme indiqué dans le guide du [TP](/docs/PC_1ere/meca/page1/#pointage-des-positions), vous avez utilisé le programme *chronophotographie.py* pour réaliser le pointage des positions, et généré 3 fichiers de coordonnées:

| mouvement | fichier |
|--- |--- |
| rectiligne uniforme | coordonnees1.txt |
| rectiligne accéléré | coordonnees2.txt |
| parabolique | coordonnees3.txt |

Vous avez utilisé le programme *traitement.py* pour afficher les graphiques (0,X,Y) pour les positions des points, pour ces 3 expériences. 

# TP: coordonnées du vecteur vitesse
## Traitement avec un logiciel tableur
Télécharger le fichier compressé <a href="/scripts/meca/chronophotographie.zip" download="chronophotograpie.zip">chronophotographie.zip</a>. Le déplacer dans vos *Documents* et Extraire.

Avec un logiciel tableur de votre ordinateur (EXCEL):

* ouvrir le fichier *coordonnees1.txt*. Préciser que le séparateur des colonnes est le symbole virgule ",".

<figure>
  <img src="../images/import.png">
<figcaption>exemple de fenêtre d'aide à l'import (Excel)<br>
Les données sont bien mises en colonnes (prévisualisation)</figcaption>
</figure>

* Ajouter une colonne à droite de celle d'etiquette **X** (clic droit sur la colonne **Y**, puis insérer une colonne). Nommer cette colonne **X_suivant**
* Copier les données de la colonne **X** dans **X_suivant**

<figure>
  <img src="../images/excel1.png">
</figure>

* Supprimer la première donnée de **X_suivant** puis décaler les données comme sur l'image ci-dessous.

<figure>
  <img src="../images/excel2.png">
</figure>

> Sur une même ligne (même repère de temps *n*), le fichier vous renseigne la coordonnée X<sub>n</sub> du point ainsi que sa coordonnée X<sub>n+1</sub>, qu'il aura lorsque l'on passe à la ligne suivante (temps n+1)

* Faire le même travail pour obtenir la colonne **Y_suivant**

* Supprimer la dernière ligne, celle qui est incomplète (pas de valeur pour **X_suivant** et pour **Y_suivant**)

<figure>
  <img src="../images/excel3.png">
</figure>

* Sauvegarder alors le fichier avec l'extension *.csv*. Le séparateur des colonnes est alors le symbole point-virgule ";". Appelez le *coordonnees11.csv* pour conserver aussi le fichier d'origine.

## Traitement en Python: calcul des vitesses
* Ouvrir le fichier *vitesse.py*, qui contient le script suivant:

```python
import pandas as pd  
import matplotlib.pyplot as plt
data = pd.read_csv("coordonnees11.csv",sep=";")
Dt = 0.5
data["t"] = data["T"] * Dt
data["vx"] = (data.X_suivant - data.X)/Dt
data["vy"] = (data.Y_suivant - data.Y)/Dt
print(data)
plt.scatter(data.t,data.X)
plt.show()
```

On suppose que l'intervale de temps qui s'écoule entre 2 positions successives de la chronophotographie dure 0,5s. On utilise une variable appelée *Dt* pour stocker cette valeur.

> Sur votre cahier: recopier le script en expliquant le rôle de chacune des lignes. 

*Remarques:*

* Vous pouvez empêcher l'execution d'une ligne du script en ajoutant le symbole `"#"` en debut de ligne par exemple:

```python
#data["vy"] = (data.Y_suivant - data.Y)/Dt
```  

* UNITE: Les vitesses sont calculées en pixels par seconde.


## Evolution de la vitesse
Les instructions suivantes permettent de tracer X = f(t) (X en fonction du temps)

```python
plt.scatter(data.t,data.X)
plt.show()
```

Adapter ces lignes pour tracer les graphiques:

* Y = f(t)
* vx = f(t)
* vy = f(t)

Commenter chacune des courbes obtenues.

## Tracé des vecteurs vitesse
En utilisant le document donné par le professeur, tracer les vecteurs vitesses selon une méthode *géometrique*.


