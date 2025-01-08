---
Title: solution aux problèmes de transvasement
---

# Problème à 2 bidons: AB = 5L, 3L
Le tableau de correspondance numero_sommet <-> volumes AB peut être mis sous forme d'un dictionnaire: *(voir le schéma avec la position des sommets sur la page [enoncé](../page61))*

```python
# Correspondance numero_sommet : volumes AB
tab = {1: '00',
        2:'10',
        3:'20',
        4:'30',
        5:'40',
        6:'50',
        7:'51',
        8:'52',
        9:'53',
        10:'43',
        11:'33',
        12:'23',
        13:'13',
        14:'03',
        15:'02',
        16:'01'
    } 
```

Le graphe peut être représenté à l'aide d'une matrice de sommets successeurs:

```python
# Graphe des sommets voisins à volume non constant
D = {1:[6,14],
    2:[1,6,13,16],
    3:[1,6,12,15],
    4:[1,6,11,14],
    5:[1,6,10,13],
    6:[1,9,12],
    7:[6,9,16],
    8:[6,10,15],
    9:[6,14],
    10:[5,8,9,14],
    11:[4,7,9,14],
    12:[3,6,9,14],
    13:[2,5,9,14],
    14:[1,4,9],
    15:[1,3,8],
    16:[1,2,7]
    }
```

Utiliser alors le script python de la page [enoncé](../page61) pour définir la matrice d'adjacence.

Le plus court chemin nécessite 6 transvasements. Il s'agit de: 1=>6=>12=>3=>15=>8=>10

Remplacer les numéros de sommets par les volumes AB pour déduire les transvasements.

# Problème à 3 bidons: ABC = 5L, 3L, 8L
Cette fois, les volumes sont repérés par 3 valeurs ABC. La somme des volumes est toujours egale à 8, car il n'y a ni vidange ni remplissage.

Le tableau de correspondance numero_sommet <-> volumes ABC est:

*solution à venir*
<!--
```python
tab = {1: '008',
        2:'107',
        3:'206',
        4:'305',
        5:'404',
        6:'503',
        7:'512',
        8:'521',
        9:'530',
        10:'431',
        11:'332',
        12:'233',
        13:'134',
        14:'035',
        15:'026',
        16:'017'
    } 
```

Le graphe est identique au précedent. Réutiliser le dictionnaire D. Pour le parcours, le sommet de depart est celui tel que ABC = (0,0,8); celui d'arrivée est ABC = (4,0,4) 
-->