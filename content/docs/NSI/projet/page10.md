---
Title: dataframes
---

# Traitement de données d'observation en astrophysique
## Importer les données et librairies utiles

```python
import numpy as np
import pandas as pd
# Constantes solaires 
Rsol = 6.9598e8               # rayon solaire en m
rhosol = 1408                 # densite solaire kg/m3
Msol = 1.98855e30             # masses solaire en kg

# Mercure, Jupiter (SI)
V_merc = 47                   # m/s
R_Jup = 71e6                  # m
# Constantes terrestres
MEarth = 5.9736e24             # masses de la terre en kg
REarth = 6.371e6               # rayon de la terre en m
rhoEarth = 5514.               # densité de la terre  kg/m3
  
# Changements d'unité
onemasinrad = np.pi/180./3600000. # 1 mas in radian     
kparsec = 3.08567758e19           # 1 kpc en m
parsec = 3.08567758e16            # 1 pc en m

# Constantes physiques
G = 6.67e-11                   # m3 kg−1 s−2
UA = 149597870700              # m
```

## Exemple de traitement
Soit la planète TOI 270-01 du système TOI 270:

```python
# Données de l'etoile 
R_star = Rsol * 0.37
M_star = Msol * 0.36
# Observables sur la courbe de transit
delta = 0.0044
tau = 4600
```

### Rayon planete a partir de delta
$$R_p = R_{star}\times \sqrt{delta}$$

La racine carrée est une fonction de la librairie `numpy`, avec `numpy.sqrt`
Le résultat du calcul peut nécessiter l'écriture d'un format particulier pour faciliter la lecture:

```python
## Calcul du rayon planétaire    
Rp = np.sqrt(delta) * R_star
print("Rp = {:.3e} m.".format(Rp))    
print("Rp = {:5.3f} REarth.".format(Rp/REarth)) 
# ---- affichage console --- #
Rp = 1.708e+07 m.
Rp = 2.681 REarth. 
```

### Vitesse exoplanète Vp
$$V_p = \tfrac{2 \times R_{star}}{\tau}$$

On peut vérifier que l'on obtient:

```python
# ---- affichage console --- #
Vp = 1.120e+05 m/s.
Vp = 2382.170 V_merc.
```

### Rayon orbite planete
$$r = \tfrac{G \times M_star}{V_p^2}$$

### Periode revolution
$$T = \tfrac{2\pi \times r}{V_p}$$

*Format numérique*:

Une fois que l'on obtient T, en secondes, il peut être utile de représenter cette valeur en jours, heures, min, s:

```python
jours = T//(3600*24)
h = (T-jours*24*3600)//3600
m = (T-jours*24*3600-h*3600)//60
s = T-jours*24*3600-h*3600-m*60
print("{:3.0f} j, {:3.0f} h, {:3.0f} min {:3.2f} s".format(jours,h,m,s))
# ---- affichage console --- #
2 j,  11 h,  22 min 43.12 s
```

## Présenter les résultats: Dataframe
Les données relatives à la planète sont mises dans une liste l'ordre `'planete','etoile','M_star','R_star','delta','tau','date_debut_transit'`

Par exemple, ci-dessous, dans la liste `planete1`: *(la date de debut de transit est sous forme annee,mois,jour,heure)*

```python
planete1 = ['TOI 270-01','TOI 270',Msol*0.36,Rsol * 0.37,0.0044,4600,(2024,6,23,5)]
df1 = pd.DataFrame([planete1],columns=['planete','etoile','M_star','R_star','delta','tau','date_debut_transit'])
df
```

{{< img src="../images/df1.png" >}}



Les calculs se font en créant une nouvelle colonne dans le *dataframe*. Par exemple, pour le calcul du rayon de la planète (en fonction de `delta`):

```python
df1['R_p']= np.sqrt(df1['delta']) * df1['R_star']
df1
```

{{< img src="../images/df1.png" >}}

On peut créer également un *Dataframe* à l'aide d'un dictionnaire: (*remplacer les valeurs `None` par celles de la planète*)

```python
planete2 = {
    'planete':'TOI 270-02',
    'etoile':'TOI 270',
    'M_star':None,
    'R_star':None,
    'delta':None,
    'tau':None,
    'date_debut_transit':None
}
df2 = pd.DataFrame([planete2])
df2
```

{{< img src="../images/df3.png" >}}

*Remarque: On peut ajouter plusieurs planètes dans la liste, avec par exemple: `pd.DataFrame([planete1,planete2,...])`*

On peut alors ajouter les 2 *Dataframes* dans un nouveau tableau. Il s'agit d'une opération de *concaténation*:

```python
pd.concat([df1,df2],ignore_index = True)
```

{{< img src="../images/df4.png" >}}

*Remarques:*

* le premier paramètre de la fonction doit être un itérable: tooujours mettre la ligne entre `[]`
* Les tableaux concaténés peuvent avoir des nombres de colonnes différents. La valeur placée dans le tableau est alors `NaN`. Cette valeur peut être modifiée par la suite.
* le paramètre `ignore_index = True` permet de recréer une numérotation de l'index et eviter les doublons. Dans l'exemple proposé ici, cela permet d'eviter d'avoir 2 lignes avec l'index 0.

# Voir aussi: Les bases avec pandas
Pandas va permettre de lire et de modifier des tableaux (DataFrames). Chaque colonne de ton DataFrame sera appelée « descripteur ». 

* Création d'une série: une série est un vecteur de valeurs d'une variable (en général valeurs pour différents individus) :
`s = pandas.Series([1, 2, 5, 7])` : série numérique entière.

* Création d'un dataframe : un dataframe se comporte comme un dictionnaire dont les clefs sont les noms des colonnes et les valeurs sont des séries.

* Création d'un dataframe à partir d'un dictionnaire:on peut aussi donner un dictionnaire dont les clefs seront les index plutôt que les colonnes :


*source*: [python-simple.com](http://www.python-simple.com/python-pandas/creation-series.php)


# Analyse de données issues d'une BDD
* [liste des objets](https://cdsarc.cds.unistra.fr/viz-bin/VizieR-3?-source=+J%2FApJ%2F728%2F117%2Ftablea1&-from=nav&-nav=cat%3AJ%2FApJ%2F728%2F117%26tab%3A%7BJ%2FApJ%2F728%2F117%2Ftablea1%7D%26key%3Asource%3DJ%2FApJ%2F728%2F117%26HTTPPRM%3A%26%26-ref%3DVIZ67868ba83bb18f%26-oc.form%3Dsexa%26-c.r%3D++2%26-c.geom%3Dr%26-order%3DI%26-out%3DKOI%26-out%3DKIC%26-out%3DKp%26-out%3DRad%26-out%3DEpoch%26-out%3DPer%26-out%3DTeff%26-out%3Dlog%28g%29%26-out%3DR*%26-out%3DSimbad%26-ignore%3DSimbad%3D*%26Simbad%3DSimbad%26-out%3D_RA%26-out%3D_DE%26-file%3D-c%26-meta.ucd%3D2%26-meta%3D1%26-meta.foot%3D1%26-usenav%3D1%26-bmark%3DPOST%26-out.max%3D50%26-out.form%3DHTML+Table%26-c.eq%3DJ2000%26-c.u%3Darcmin%26)
* [table complète](https://cdsarc.cds.unistra.fr/viz-bin/VizieR-4)
* [page SQL](http://tapvizier.cds.unistra.fr/adql/?%20J/ApJ/728/117/tablea1)





