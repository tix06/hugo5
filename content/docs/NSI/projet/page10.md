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
delta = 0.0044 # sans unité
tau = 4600     # s
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

# Les bases avec pandas: présenter les données, calculer sur des colonnes
Pandas va permettre de lire et de modifier des tableaux (DataFrames). Chaque colonne de ton DataFrame sera appelée « descripteur ». La manipulation d'un dataframe peut ressembler à celle d'une base de données (voir SQL).

*Exemple:* La table suivante est issu de l'import d'une base de données d'exoplanètes:

{{< img src="../images/df10.png" >}}

Cette table fera l'objet d'une étude spécifique: [ici](/docs/python/pages/traitement/page3/)

## Présenter les résultats: CSV => Dataframe
**Importer les données depuis un fichier csv**

* Les [courbes de transit](/docs/NSI/projet/page9/) vont permettre de mesurer les valeurs de profondeur de transit $\delta$ et de durée de transit $\tau$. 
* Ces valeurs seront reportées dans un fichier *csv* avec les autres informations sur les planètes et leur étoile. Utiliser un tableur. *Attention à bien utiliser des points comme séparateur décimal*.

{{< img src="../images/tab_excel.png" caption="tableau rempli à l'aide d'un tableur" >}}

* **Exporter** (ou enregistrer) en format *csv*.

On peut vérifier en ouvrant le fichier *csv* que les données sont mises dans un format particulier (séparation à l'aide d'un point virgule...)
{{< img src="../images/tab_csv.png" caption="fichier csv" >}}

* **L'import depuis pandas** se fait alors de la manière suivante: *(rien de plus simple)*

```python
df = pd.read_csv('exoplanetes.csv',sep=';')
df
```

{{< img src="../images/df5.png" >}}

**Ajouter les colonnes utiles aux calculs**

un dataframe se comporte comme un *dictionnaire* dont les clefs sont les noms des colonnes et les valeurs sont des séries:

```python
G = 6.67e-11
R_Jup = 71e6 
M_Jup = 6.9911e7
df['tau']=(df['fin_transit']-df['debut_transit'])*24*3600
df['delta']=1-df['lum_min']

df['M_star']=7.158780e+29 # pour TOI-270
df['R_star']=257512600.0  # pour TOI-270
df['R_p']= np.sqrt(df['delta']) * df['R_star']
df['radius']=df['R_p']/R_Jup # pour exprimer en R_Jup
# vitesse planete : V_p = 2*R_star/tau
df['V_p']= 2*df['R_star']/df['tau']
# rayon orbital : r = G*M_star/V_p**2
df['r_orb']= G * df['M_star']/df['V_p']**2
# periode revolution: T = 2*np.pi*r/V_p
df['T'] = 2*np.pi*df['r_orb']/df['V_p'] # en s
df['T_jours'] = df['T']/(24*3600)  # en jours terrestres
df
```

{{< img src="../images/df13.png" >}}


## Autres méthodes (compléments)
### Importer les données d'une liste ou d'un dictionnaire python
Les données relatives à la planète peuvent être mises dans une liste dont l'ordre pourrait être par exemple:

`'planete','etoile','M_star','R_star','delta','tau','date_debut_transit'`

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

On peut alors ajouter les 2 *Dataframes* dans un nouveau tableau. Il s'agit d'une opération de **concaténation**:

```python
pd.concat([df1,df2],ignore_index = True)
```

{{< img src="../images/df4.png" >}}

*Remarques:*

* le premier paramètre de la fonction doit être un itérable: toujours mettre la ligne entre `[]`
* Les tableaux concaténés peuvent avoir des nombres de colonnes différents. La valeur placée dans le tableau est alors `NaN`. Cette valeur peut être modifiée par la suite.
* le paramètre `ignore_index = True` permet de recréer une numérotation de l'index et eviter les doublons. Dans l'exemple proposé ici, cela permet d'eviter d'avoir 2 lignes avec l'index 0.

## fusionner des tableaux aux etiquettes différentes
Les tableaux doivent avoir les **mêmes etiquettes** de colonne si on veut ajouter leur ligne l'une sous l'autre. Dans le cas contraire, il faudra **renommer** les colonnes.

*utile après l'import d'une base de données/sql*

```python
D = {
    'planete':'TOI 270-01',
    'etoile': 'TOI 270'
    }
df_new_line = pd.DataFrame.from_dict([D])
df_new_line
```

{{< img src="../images/df6.png" >}}

```python
df_new_line_2 = pd.DataFrame([{'_name':'TOI 270-02','star_name':'TOI 270'}])
df_new_line_2
```

{{< img src="../images/df7.png" >}}


```python
df_new_line_2 = df_new_line_2.rename(columns={'_name': 'planete','star_name':'etoile'})
df_new_line_2
```

{{< img src="../images/df8.png" >}}

```python
df = pd.concat([df_new_line,df_new_line_2],ignore_index=True)
df
```

{{< img src="../images/df9.png" >}}




## langage de requête
**projection (SELECT en sql)**: reduire le nombre de colonnes (equivalent de `select` en sql)

```python
df[['_name','mass']]
df
```

{{< img src="../images/df11.png" >}}

**selection (WHERE en sql)**: lignes (équivalent de `where` en sql)

```python
df[df['mass']>=1]
```

{{< img src="../images/df12.png" >}}

**recherche d'un motif (LIKE en sql)**:

```python
# Equivalent de LIKE en SQL
df0[df0['_name'].str.startswith('TOI-270')]
df0
```

{{< img src="../images/df17.png" >}}

### autres types de créations de df
* Création d'une série: une série est un vecteur de valeurs d'une variable (en général valeurs pour différents individus) :
`s = pandas.Series([1, 2, 5, 7])` : série numérique entière.

* Création d'un dataframe à partir d'un dictionnaire: on peut aussi donner un dictionnaire dont les clefs seront les index plutôt que les colonnes :


*source*: [python-simple.com](http://www.python-simple.com/python-pandas/creation-series.php)


## base de données d'exoplanetes et python
* [Lien vers le TP](/docs/python/pages/traitement/page3)
## Analyse de données issues de la BDD `unistra.fr`
* [liste des objets](https://cdsarc.cds.unistra.fr/viz-bin/VizieR-3?-source=+J%2FApJ%2F728%2F117%2Ftablea1&-from=nav&-nav=cat%3AJ%2FApJ%2F728%2F117%26tab%3A%7BJ%2FApJ%2F728%2F117%2Ftablea1%7D%26key%3Asource%3DJ%2FApJ%2F728%2F117%26HTTPPRM%3A%26%26-ref%3DVIZ67868ba83bb18f%26-oc.form%3Dsexa%26-c.r%3D++2%26-c.geom%3Dr%26-order%3DI%26-out%3DKOI%26-out%3DKIC%26-out%3DKp%26-out%3DRad%26-out%3DEpoch%26-out%3DPer%26-out%3DTeff%26-out%3Dlog%28g%29%26-out%3DR*%26-out%3DSimbad%26-ignore%3DSimbad%3D*%26Simbad%3DSimbad%26-out%3D_RA%26-out%3D_DE%26-file%3D-c%26-meta.ucd%3D2%26-meta%3D1%26-meta.foot%3D1%26-usenav%3D1%26-bmark%3DPOST%26-out.max%3D50%26-out.form%3DHTML+Table%26-c.eq%3DJ2000%26-c.u%3Darcmin%26)
* [table complète](https://cdsarc.cds.unistra.fr/viz-bin/VizieR-4)
* [page SQL](http://tapvizier.cds.unistra.fr/adql/?%20J/ApJ/728/117/tablea1)





