---
Title: indice de similarité avec la Terre
---

# Creation d'une table unique
On prépare un dataframe avec les données d'exoplanètes issues d'une BDD (TOUTES les exoplanètes):

```python
# Toutes exoplanetes
sql = "PRAGMA table_info(planetes_es);"
cur.execute(sql)
res = cur.fetchall()
L = [ligne[1] for ligne in res]
sql = "select * from planetes_es"
cur.execute(sql)
res = cur.fetchall()
dataset = pd.DataFrame(res,columns=L)
dataset
```

{{< img src="../images/exoplanetes_bdd.png" caption="table des exoplanetes" >}}

## Créer un dataframe avec les données de la Terre

```python
R_Jup = 71e6  # m
M_Jup = 1.898e27 # kg
M_earth = 5.9724e24
R_earth = 6378.137e3
M_sun = 1
R_sun = 1
planete1 = {
    '_name':'earth',
    'star':'Sun',
    'mass': M_earth/M_Jup,
    'radius': R_earth/R_Jup,
    'eccentricity': 0.0167,
    'orbital_period': 365.25,
    'semi_major_axis': 1,
    'M_star':M_sun,
    'R_star':R_sun

}
df2 = pd.DataFrame([planete1])
df2
```

## Créer un dataframe avec les exoplanètes du systeme TOI

Préparer un fichier *csv* ou *txt* avec tous les résultats de vos recherches sur les planètes *observées*. 

{{< img src="../images/datas_P_TOI.png" caption="données issues des observables (transits)" >}}

On peut même y ajouter les données des masses apportées par le document suivant:

{{< img src="../images/donnees_TOI.png" caption="données des masses pour les planetes de TOI" >}}

*Rappel: les masses des exoplanetes sont souvent exprimées en `M_J`, (en masses de Jupiter). Exprimer directement ces masses en `M_J`. Cela va necessiter de realiser une convertion:*

$$mass = m \times M_{Terre} / M_J$$

*m: masse de l'exoplanete `TOI_x` dans le tableau precedent, exprimée en masses Terre*.

```python
df = pd.read_csv('donnees_planetes.txt',sep=';')
G = 6.67e-11
R_Jup = 71e6 
M_Jup = 6.9911e7
df['tau']=(df['fin_transit']-df['debut_transit'])*24*3600
df['delta']=1-df['lum_min']

df['M_star']=7.158780e+29
df['R_star']=257512600.0
df['R_p']= np.sqrt(df['delta']) * df['R_star']
df['radius']=df['R_p']/R_Jup
# vitesse planete : V_p = 2*R_star/tau
df['V_p']= 2*df['R_star']/df['tau']
# rayon orbital : r = G*M_star/V_p**2
df['r_orb']= G * df['M_star']/df['V_p']**2
# periode revolution: T = 2*np.pi*r/V_p
df['T'] = 2*np.pi*df['r_orb']/df['V_p']
df['T_jours'] = df['T']/(24*3600)
df_new_col = df[['planete','radius','T_jours','etoile','M_star','R_star']]
df_new_col = df_new_col.rename(columns={'planete':'_name',
                                        'T_jours':'orbital_period',
                                        'etoile':'star_name',
                                        'M_star':'star_mass',
                                        'R_star':'star_radius'})
df_new_col
```

Et si votre fichier contient les informations de masse des exoplanetes `TOI_x`, alors il faudra nommer la colonne `mass` pour fusionner avec le tableau de la BDD.


{{< img src="../images/df_TOI.png" caption="table des exoplanetes du systeme TOI" >}}

## Concatenation des 3 tableaux

```python
dataset = pd.concat([dataset,df2,df_new_col],ignore_index = True)
dataset
```

{{< img src="../images/exo_concat.png" caption="table toutes exoplenetes + earth" >}}

# Calcul du coefficient IST
Ajout d'une colonne IST, indice de similarité avec la Terre: voir methode de calcul [ici](https://www.wikiwand.com/fr/articles/Indice_de_similarité_avec_la_Terre)


```python
# Recuperer la valeur de M_earth et l'exprimer en M_Jup
M_earth = float(dataset[dataset['_name']=='earth']['mass'])
# idem avec R_earth
R_earth = float(dataset[dataset['_name']=='earth']['radius'])
# definir un coefficient adimentionné pour l'IST
# et calculer pour toutes les planetes du tableau
dataset['IST'] = 1-abs(dataset['radius']-R_earth)/(dataset['radius']+R_earth)
# trier
dataset.sort_values('IST', ascending=False, inplace=True)
dataset = dataset[['_name','planet_status','mass','radius','orbital_period','semi_major_axis','eccentricity','IST']]
dataset[dataset['IST']>0]
```

*L'IST a été calculé sur la seule valeur du rayon de la planete*

{{< img src="../images/tab_IST.png" caption="liste ordonnée par IST decroissant" >}}

Puis rechercher dans cette table nos exoplanètes de TOI:

```python
dataset[dataset['_name'].str.startswith('TOI-270')]
```

Les extensions a-b-c sont celles des exoplanetes de la base de données. Celles avec 1-2-3 sont celles de notre étude. Ces 2 séries d'information se referent aux 3 mêmes exoplanètes.

{{< img src="../images/tab_TOI_IST.png" caption="Place des TOI dans la table" >}}

*On peut bien sûr ajouter d'autres caractéristiques des planetes pour le calcul de l'IST et les comparer à la Terre.*

