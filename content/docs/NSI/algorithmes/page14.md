---
Title: recherche dichotomique
---

# TP: Recherche dans une liste de mots

* Télécharger la liste de mots liste_francais.txt à partir du lien suivant: <a href="../datas/liste_francais.txt" download="liste_francais.txt">liste_francais.txt</a>.

* Ouvrir un notebook et mettre le fichier dans le MÊME dossier.
* Importer la liste de mots sous forme de liste et afficher les 13 premiers éléments de la liste à l'aide du script suivant:

```python
mots = []

# Lecture du fichier txt et remplissage de la liste
with open('liste_francais.txt', encoding='iso-8859-1') as f:
    for mot in f.read().splitlines():
        mots.append(mot)
        
# Affichage des 13 premiers mots
print(len(mots))
mots[:13]
```


## Recherche séquentielle
On lance le chronomètre au debut du script avec l'instruction `%%timeit`

```python
%%timeit
def recherche_mot(X,mots):
    """
    recherche un mot dans une liste et renvoie l'indice si le mot est trouvée, -1 sinon
    Params :
    -------------------
    X : str, mot à trouver
    mots : list, une liste de mots, dans un ordre quelconque.
    Sortie : 
    ------
    j : int, indice dans la liste
    Principe :
    --------
    on parcourt la liste avec une boucle non bornée, tant que X n'est pas trouvé dans la liste
    on augmente la valeur de j à chaque nouvelle itération
    """
    j = 0
    n = len(mots)
    
    while j<n and X!=mots[j]:
        ... # à completer
    if j==n : return -1
    return j

recherche_mot('tracts',mots)
# affiche 
1.88 ms ± 46.7 micosec per loop (mean ± std. dev. of 7 runs, 1000 loops each)
```

> Recopier et compléter le script. Mesurer également le temps mis par la fonction pour trouver le mot *tracts*.

## Recherche dichotomique

```python
%%timeit
def recherche_dicho_mot(X,mots):
    """recherche dans une liste de mots un mot X
    Params:
    ------
    mots : list, contient des mots triés
    X : str, mot à trouver
    Return :
    --------
    milieu (indice de mot dans la liste) si X est présent dans la liste
    -1 sinon"""
    # on initialise les indices début et fin aux extrémités de la liste
    gauche = 0
    droite = len(mots)
    trouve = False
    
    while gauche <= droite and not trouve:
        # On se place au milieu de la liste, entre gauche et droite
        milieu = ... 
    
        if mots[milieu] == X:
            #print(élément, "trouvé à l'indice:", milieu , liste[milieu])
            trouve = True
            # on arrête la boucle
            #début = fin - 1
        elif mots[milieu] < X:       
            gauche = milieu + 1
        else:
            droite = milieu - 1
    #print(élément, "non trouvé")
    if not trouve : 
    	return ...
    return 
    	...

recherche_dicho_mot('tracts',mots)
# affiche
2.48 micosec ± 45.9 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)
```

> Recopier et compléter le script. Mesurer également le temps mis par la fonction pour trouver le mot *tracts*. Commenter la différence de temps entre les 2 algorithmes. Cette différence est-elle toujours significative, quel que soit le mot recherché? (Faire des tests).

# Comparer les fonctions g(n)
Comme sur l'image suivante, vous allez représenter sur la même figure les fonctions:

* $y = 1$
* $y = log_2(x)$

<figure>
  <img src="../images/graphique1.png">
  <figcaption>1 et log(n) : log(n) a une croissance faible</figcaption>
</figure>

> On s'aidera du [lien suivant](https://python.doctor/page-creer-graphiques-scientifiques-python-apprendre) pour représenter des graphiques avec *Matplolib*.


Puis vous ajouterez sur le même graphique les fonctions:

* $y = x$
* $y = x * log_2(x)$

<figure>
  <img src="../images/graphique2.png">
  <figcaption>n*log(n) et n ont une croissance comparable</figcaption>
</figure>

Ajouter enfin:

* $y = x**2$
* $y = x**3$

Puis 

* $y = 2**x$

> Comparer alors ces fonctions: Sont-elles classées selon leur *divergence* lorsque x augmente?