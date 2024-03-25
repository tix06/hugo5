---
Title: tableaux Excel et python
---

{{< img src="../images/exc17.png" >}}

Prérequis:

* Cours sur les tableaux et listes Python: [page du site](/docs/python/pages/boucles/page2/)

# Partie 1: Tableaux et traitement sur Excel
Commencer par remplir les notes de l'élève comme sur l'image ci-dessous (cellules $C2$ à $K2$)

{{< img src="../images/exc1.png" caption="tableau de données" >}}

Ajouter une fonction pour calculer la moyenne de ces notes. Dans la cellule $B2$, ecrire le signe `=` puis le nom de la fonction $= moyenne($ 


{{< img src="../images/exc2.png" caption="saisie de la fonction moyenne" >}}

Compléter avec la plage de cellule contenant les valeurs: 

$$= moyenne(C2:K2)$$ 

{{< img src="../images/exc3.png" caption="plage de valeurs de C2 à K2" >}}

La valeur moyenne comprend trop de décimales...

{{< img src="../images/exc4.png" caption="" >}}

Ajouter une fonction d'arrondi:

$$= arrondi(moyenne(C2:K2);1)$$

{{< img src="../images/exc5.png" caption="arrondir à 1 ou 2 décimale-s" >}}

Ajouter des etiquettes aux colonnes. Commencer par ecrire $note1$ dans la cellule $C1$.

{{< img src="../images/exc6.png" caption="etiquette note1" >}}

Puis positionner le curseur en bas à droite dans la cellule. Et cliquer-glisser vers la droite pour *reproduire la mise en forme*.

{{< img src="../images/exc7.png" caption="remplissage automatique des noms des colonnes" >}}

Faire la même manipulation pour obtenir des etiquettes aux lignes (eleve1, eleve2,...)

{{< img src="../images/exc9.png" caption="" >}}

Dans la cellule $C3$, mettre une note aleatoire entre 0 et 20 avec:

$$= alea() * 20$$

{{< img src="../images/exc8.png" caption="ajout d'une valeur aleatoire" >}}

La valeur contient trop de décimales. 


{{< img src="../images/exc10.png" caption="" >}}

Ajouter la fonction $arrondi$ pour limiter à une seule décimale.

{{< img src="../images/exc11.png" caption="=arrondi(alea..." >}}

Cliquer-glisser avec le curseur vers la droite et vers le bas pour obtenir un tableau de valeurs aleatoires:

{{< img src="../images/exc12.png" caption="" >}}

{{< img src="../images/exc13.png" caption="tableau de valeurs aleatoires" >}}

Puis sauvegarder le tableau avec l'extension $.csv$

{{< img src="../images/exc14.png" caption="classe.csv" >}}

Ce format est echangeable entre logiciels et peut être traité en langage python (Partie 2). 

Si vous l'ouvrez avec un editeur textuel (notepad++, ...), vous devriez obtenir à peu près ceci:

{{< img src="../images/exc15.png" caption="contenu du fichier classe.csv" >}}

Un fichier dans lequel les lignes représentent les $eleves$. Les valeurs sont separées par des points virgules ";"

# Fonctions moyenne et autres traitement sur les listes Python
Programmez vos fonctions en python pour analyser une liste de notes:

Notebook à telecharger: [tableur_vers_python.ipynb](/scripts/notebooks/tableur_vers_python.ipynb)

Utiliser une distribution python en *local*.

> Traiter la partie 1 du notebook

# Partie 2: Tableaux python
> 1. Commencer par traiter la feuille d'exercices sur les tableaux en python: [lien vers le pdf](/pdf/NSI_1/TP_excel_vers_python.pdf)

Puis...

> 2. Traiter la partie 2 du notebook
Il s'agit de la partie 2 du notebook. Vous allez placer le fichier $classe.csv$ à proximité du notebook. 

{{< img src="../images/exc16.png" >}}

* Vous pouvez le placer dans le même dossier que le notebook: Depuis le script python, ouvrez le alors avec l'instruction `with open('classe.csv', newline='') as csvfile:`
* ou bien dans un sous dossier `datas`. Ouvrir alors avec `with open('datas/classe.csv', newline='') as csvfile:` 


> 3. Animation sur Pythontutor: modifier une liste, copie par référence.

Pour finir, voir l'execution du script suivant sur [Pythontutor](https://pythontutor.com/render.html#code=classe%20%3D%20%5B%5B'%5Cufeff','moyenne','note1','note2','note3','note4','note5',%0A%20%20'note6','note7','note8','note9'%5D,%0A%20%5B'eleve1',%20'12,5',%2010.0,%208.9,%209.9,%2012.3,%2011.1,%2012.3,%2013.1,%2014.5,%2020.0%5D,%0A%20%5B'eleve2',%20'',%204.2,%202.1,%2016.5,%2015.0,%2019.6,%207.5,%2010.3,%2018.8,%2017.4%5D%5D%0A%0Adef%20moyenne%28tab%29%3A%0A%20%20%20%20s%20%3D%200%0A%20%20%20%20for%20note%20in%20tab%3A%0A%20%20%20%20%20%20%20%20s%20%2B%3D%20note%0A%20%20%20%20return%20s%20/%20len%28tab%29%0A%0Aeleve%20%3D%20classe%5B2%5D%0Aeleve%5B1%5D%20%3D%20round%28moyenne%28eleve%5B2%3A%5D%29,2%29%0Aprint%28eleve%29%0Aprint%28classe%5B2%5D%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false)

```python
classe = [['\ufeff','moyenne','note1','note2','note3','note4','note5',
  'note6','note7','note8','note9'],
 ['eleve1', '12,5', 10.0, 8.9, 9.9, 12.3, 11.1, 12.3, 13.1, 14.5, 20.0],
 ['eleve2', '', 4.2, 2.1, 16.5, 15.0, 19.6, 7.5, 10.3, 18.8, 17.4]]

def moyenne(tab):
    s = 0
    for note in tab:
        s += note
    return s / len(tab)

eleve = classe[2]
eleve[1] = round(moyenne(eleve[2:]),2)
print(eleve)
print(classe[2])
```

