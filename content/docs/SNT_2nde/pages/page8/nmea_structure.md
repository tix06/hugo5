---
Title : NMEA données structurées
---

# NMEA : des données structurées

## Principe et objectifs
Lors de séances précedentes, nous avons découvert que les programmes échangent des données *structurées* : Le logiciel qui met en forme les données issues des satellites GPS fabrique une trame NMEA, dans laquelle les différents champs sont séparés par une virgule.

Cette séparation des données s'appelle : comma separated value (csv). 

Le format CSV permet d'organiser les informations dans un ordre précis. Dans chaque ligne, les données respectent le même ordre. Le fichier de données csv peut alors être facilement ouvert avec un tableur (ou être sauvegardé en `.csv` à partir d'un tableur : Un caractère particulier – généralement la virgule –  permet au logiciel de placer les valeurs dans des colonnes différentes.


{{< img src="../docs/exemple_csv.png" alt="exemple de fichier csv" caption="passage d'un tableau au fichier csv" >}}
Une librairie Python peut être utilisée pour découper ces informations et les mettre sous forme de liste.


## librairies utilisées 
* folium (pour la creation de carte openstreetmap)
* csv (apporte la fonction `reader()` pour le decoupage d'une ligne en csv.

## Que contient la trame NMEA ?
Parmi les différentes lignes constituant la trame, l'une d'entre elles débute par les symboles $GPGGA

Les données sont mises dans un format particulier expliqué ici : 

{{< img src="../docs/exemple_trame.png" alt="extrait trame NMEA" caption="détail d'une trame NMEA" >}}


<TABLE width=100% border=0>
<TR> 
<TD width=15%>$GPGGA</TD> 
<TD width=2%>:</TD> 
<TD>Type de trame</TD>
</TR> 
<TR> 
<TD width=15%>4836.5375,N</TD> 
<TD width=2%>:</TD> 
<TD>Latitude 48,608958° Nord = 48°36'32.25" Nord</TD>
</TR> 
<TR> 
<TD width=15%></TD> 
<TD width=2%></TD>
<TD>car le renseignement donné initialement est sous la forme DDMM.MMMM soit : 48°36,5375’</TD>
</TR> 
<TR> 
<TD width=15%></TD> 
<TD width=2%></TD>
<TD>en base 10 : 36,5375’ = 36,5375 / 60 ° = 0,608958 °</TD>
</TR> 
<TD width=15%></TD> 
<TD width=2%></TD>
<TD>en base 60 : 36,5375’ = 36’ + 0,5375 x 60’’ = 36'32.25"</TD>
</TR>
<TR> 
<TD width=15%>00740.9373,E</TD> 
<TD width=2%>:</TD> 
<TD>Longitude 7,682288° Est = 7°40'56.238" Est</TD>
</TR> 
</TABLE></CENTER>

Les valeurs numériques recherchées sont celles de la latitude et de la longitude du lieu.

Ces valeurs sont mises sous la forme **DDMM.MMMM** : 

lorsque l'on lit 4836.5375, la valeur doit être comprise comme  : 48°36,5375'

c'est à dire : 
- 48°
- 36,5375 minutes d'arc

## Traitement des trames NMEA sous forme de chaine de caractère
Après l'ouverture du fichier avec l'instruction `fichier = open('docs/nmea.log','r')` :

Chaque ligne du fichier `nmea.log` est mise dans la liste `lignes` avec l'instruction `lignes = fichier.readlines() `

Pour acceder à la ligne n°2, par exemple, il faut écrire : `lignes[1]` 

Le script suivant permet d'afficher tous les éléments de la liste `lignes` grâce à la boucle bornée `for i,ligne in enumerate(lignes):` 


```python
fichier = open('docs/nmea.log','r')

lignes = fichier.readlines() 
     
for i,ligne in enumerate(lignes):
                  
    if ligne !='\n':  #  tester si la ligne est non vide
        print('lignes['+ str(i)+'] \n'+ ligne)             
                
fichier.close()                    

```

# Utiliser la librairie csv et manipuler une liste
## la fonction reader de la librairie csv
**executer le script suivant** pour créer l'objet trames qui contient tous les éléments du fichier nmea.log

Repérer que la fonction utilisée *reader()* utilise pour paramètre le caractère ','. On pourrait choisir d'autres types de séparateurs, comme ';' par exemple. Mais ici, le fichier nmea.log utilise bien ','.

## manipulation d'une liste
La boucle bornée `for row in trames: ` a pour rôle de créer une liste `trame` où chaque élément correspond à l'une des lignes du fichier nmea.log. 
Ces éléments sont ajoutés dans la liste `trame` à l'aide de la fonction `append` 

Chaque élément `trame[i]` est lui même une liste. Ainsi, pour afficher un élément de la liste `trame`, il faut faire `trame[i]`.
On peut également  atteindre chaque élément de `trame[i]` en faisant `trame[i][j]`.


```python
from csv import reader
trame = []
trames = reader(lignes, delimiter=',')

for row in trames:
    trame.append(row)
```

## à vous de jouer
1. dans la cellule suivante, taper `trame[0]` pour afficher le premier élément de la liste `trame` (correspond à la première ligne du fichier nmea.log)
2. dans la cellule qui suit, taper `trame[0][0]` pour afficher le premier champs de `trame[0]` : s'agit-il bien de $GPGSA, comme on peut le voir dans la liste des lignes de nmea.log ?
3. Modifier alors le contenu des 2 cellules que vous venez d'utiliser pour accéder aux valeurs des coordonnées GPS latitude et longitude indiquées dans le fichier.


```python
trame[]
```


```python
trame[0][]
```

## transformer la chaine de caractère en un nombre
La valeur retournée par `trame[6][2]` est de la forme : '4341.9791', avec des **guillemets**. C'est une chaine de caractères, même si le contenu est constitué de chiffres. On ne pourra pas faire d'opérations mathématiques dessus, à moins de la transformer en nombre.

Il faut utiliser pour cela la fonction float() : 
par exemple : `float(trame[6][2])` qui devrait renvoyer 4341.9791 : un **nombre**

Deiviser ce résultat par 100 pour avoir la partie entière qui sera constituée uniquement des degrés : `trame[6][2]/100`

Mettre le résultat dans la variable `lat` puis afficher le résulat : `print(lat)` 


```python
lat = float(trame[][])/100
print(lat)
```

Pour conserver les 2 premiers chiffres : extraire la partie entière avec la fonction int():

`int(lat)`

Mettre le résultat dans la variable `lat_deg` (la partie correspondant aux degrés entiers) puis afficher le résultat


```python
lat_deg = 
print(lat_deg)
```

Retirer la partie entière de `lat` pour ne conserver que les nombres après la virgule : `lat - lat_deg`

Affecter le résultat à la variable `lat_min` et afficher le résultat 



```python
lat_min = 
print(lat_min)
```

Enfin : transformer `lat_min` en une valeur decimale : `lat_min *100 /60` 
Affecter à nouveau le résultat à `lat_min` . Afficher `lat_min` 



```python
lat_min = 
print(lat_min)
```

### Reconstituer la valeur numérique

- affecter alors à la variable `lat` la nouvelle valeur `lat_deg + lat_min`

Afficher la valeur de `lat` 


```python
lat = 
print(lat)

```

### Pour aller plus loin (partie facultative...mais conseillée)
Vous allez écrire une fonction appelée `conversion_base10(latlon)` qui devra transfromer la chaine de caractère extraite de la trame NMEA (chaine de caractères 'ddmm.mmmm') en une valeur décimale. Le traitement sera identique à celui que vous avez réalisé. On donne l'algorithme de cette fonction : 
```
fonction conversion_base10(latlon):
    l ← flottant(latlon)/100
    l_deg ← entier(l)
    l_min ← l - l_deg
    l_min ← l_min*100/60
    l ← l_deg + l_min
    retourne l
```


```python

```

## Faire le même travail pour la longitude. 
Créer les variables lon, lon_deg et lon_min à partir du fichier nmea.log. On pourra, au choix, utiliser la même procedure que pour lat, ou bien, utiliser la fonction `conversion_base10()` 


```python


```

## Vérification
Pensez à vérifier vos résultats en affichant avec `print()` les valeurs de chacune des variables (lat, lon, lat_deg, lat_min...)

Lorsque vous êtes satisfaits du résultat, executez la cellule suivante pour afficher un marqueur sur la carte, qui sera géolocalisé à partir de votre latitude et longitude...

Remarque : lors de la permière execution du code suivant, il peut être utile d'enlever le # au debut de la première ligne afin de charger la librairie folium.

Remettre alors le commentaire pour les prochaines fois où vous executez ce code (il n'est pas necessaire de recharger cette librairie une deuxieme fois au cours de la même session)


```python
#!pip install folium
import folium
carte = folium.Map(location=[lat,lon], zoom_start=10)
folium.Marker([lat,lon]).add_to(carte)
display(carte)
```


<div style="width:100%;"><div style="position:relative;width:100%;height:0;padding-bottom:60%;"><iframe src="data:text/html;charset=utf-8;base64,PCFET0NUWVBFIGh0bWw+CjxoZWFkPiAgICAKICAgIDxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PVVURi04IiAvPgogICAgPHNjcmlwdD5MX1BSRUZFUl9DQU5WQVM9ZmFsc2U7IExfTk9fVE9VQ0g9ZmFsc2U7IExfRElTQUJMRV8zRD1mYWxzZTs8L3NjcmlwdD4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xlYWZsZXRAMS40LjAvZGlzdC9sZWFmbGV0LmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMS4xMi40Lm1pbi5qcyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvTGVhZmxldC5hd2Vzb21lLW1hcmtlcnMvMi4wLjIvbGVhZmxldC5hd2Vzb21lLW1hcmtlcnMuanMiPjwvc2NyaXB0PgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xlYWZsZXRAMS40LjAvZGlzdC9sZWFmbGV0LmNzcyIvPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLz4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzIi8+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4zL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyIvPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5jc3MiLz4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vcHl0aG9uLXZpc3VhbGl6YXRpb24vZm9saXVtL21hc3Rlci9mb2xpdW0vdGVtcGxhdGVzL2xlYWZsZXQuYXdlc29tZS5yb3RhdGUuY3NzIi8+CiAgICA8c3R5bGU+aHRtbCwgYm9keSB7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDtwYWRkaW5nOiAwO308L3N0eWxlPgogICAgPHN0eWxlPiNtYXAge3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO308L3N0eWxlPgogICAgCiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLAogICAgICAgIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubyIgLz4KICAgIDxzdHlsZT4jbWFwXzAzYmNmN2E1OGQwZDRjOGViMDg2M2M5NDMxMzdkM2QyIHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgd2lkdGg6IDEwMC4wJTsKICAgICAgICBoZWlnaHQ6IDEwMC4wJTsKICAgICAgICBsZWZ0OiAwLjAlOwogICAgICAgIHRvcDogMC4wJTsKICAgICAgICB9CiAgICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PiAgICAKICAgIAogICAgPGRpdiBjbGFzcz0iZm9saXVtLW1hcCIgaWQ9Im1hcF8wM2JjZjdhNThkMGQ0YzhlYjA4NjNjOTQzMTM3ZDNkMiIgPjwvZGl2Pgo8L2JvZHk+CjxzY3JpcHQ+ICAgIAogICAgCiAgICAKICAgICAgICB2YXIgYm91bmRzID0gbnVsbDsKICAgIAoKICAgIHZhciBtYXBfMDNiY2Y3YTU4ZDBkNGM4ZWIwODYzYzk0MzEzN2QzZDIgPSBMLm1hcCgKICAgICAgICAnbWFwXzAzYmNmN2E1OGQwZDRjOGViMDg2M2M5NDMxMzdkM2QyJywgewogICAgICAgIGNlbnRlcjogWzQzLjY5OTY1MTY2NjY2NjY2LCA3LjI0ODQ5MTY2NjY2NjY2Nl0sCiAgICAgICAgem9vbTogMTAsCiAgICAgICAgbWF4Qm91bmRzOiBib3VuZHMsCiAgICAgICAgbGF5ZXJzOiBbXSwKICAgICAgICB3b3JsZENvcHlKdW1wOiBmYWxzZSwKICAgICAgICBjcnM6IEwuQ1JTLkVQU0czODU3LAogICAgICAgIHpvb21Db250cm9sOiB0cnVlLAogICAgICAgIH0pOwoKCiAgICAKICAgIHZhciB0aWxlX2xheWVyXzM3MDE1ZDFmODA0MDQ5YjI5NjZjNzRhMjAyYmRjZTkzID0gTC50aWxlTGF5ZXIoCiAgICAgICAgJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywKICAgICAgICB7CiAgICAgICAgImF0dHJpYnV0aW9uIjogbnVsbCwKICAgICAgICAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsCiAgICAgICAgIm1heE5hdGl2ZVpvb20iOiAxOCwKICAgICAgICAibWF4Wm9vbSI6IDE4LAogICAgICAgICJtaW5ab29tIjogMCwKICAgICAgICAibm9XcmFwIjogZmFsc2UsCiAgICAgICAgIm9wYWNpdHkiOiAxLAogICAgICAgICJzdWJkb21haW5zIjogImFiYyIsCiAgICAgICAgInRtcyI6IGZhbHNlCn0pLmFkZFRvKG1hcF8wM2JjZjdhNThkMGQ0YzhlYjA4NjNjOTQzMTM3ZDNkMik7CiAgICAKICAgICAgICB2YXIgbWFya2VyX2VkN2VlZDVmOTE5OTQ5ZGI4YzEwMzc0MjlkYTY4YTgyID0gTC5tYXJrZXIoCiAgICAgICAgICAgIFs0My42OTk2NTE2NjY2NjY2NiwgNy4yNDg0OTE2NjY2NjY2NjZdLAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpY29uOiBuZXcgTC5JY29uLkRlZmF1bHQoKSwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMDNiY2Y3YTU4ZDBkNGM4ZWIwODYzYzk0MzEzN2QzZDIpOwogICAgICAgIAo8L3NjcmlwdD4=" style="position:absolute;width:100%;height:100%;left:0;top:0;border:none !important;" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe></div></div>



```python

```
