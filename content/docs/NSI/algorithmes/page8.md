---
Title : algorithmes de tri
---

Ce cours comporte plusieurs parties

* voir la [page sur la complexité](../page1)
* la [page sur la récursivité](/docs/NSI/langages/page2/)
* [principaux algorithmes de tri](/docs/NSI/algorithmes/page8/)
* méthodes [Diviser pour regner](/docs/NSI/algorithmes/page5/)

# Algorithmes de tri
Les activités de tri sont très fréquents en informatique. Dans un projet informatique, on préfère qu'un programme passer du temps à trier les données plutôt qu'à les rechercher.

On presente dans ce chapitre TROIS algorithmes de tri. Mais il en existe de très nombreux, dont l'efficacité diffère grandement. Voici un aperçu de la durée comparée de quelques [algorithmes de tri](https://toptal.com/developers/sorting-algorithms), selon la nature de la liste à trier:

{{< img src="../images/sort_comp.png" link="https://toptal.com/developers/sorting-algorithms" caption="comparatif de performance de quelques algorithmes de tri" >}}

| Nombre d’éléments « n » | Nombre d’opérations pour un tri en « O(n²)  » |   Durée pour un tri en « O(n²) » |
|--- |--- |--- |
|10 | 100 |100 ns|
|100| 10 000 | 10 us|
|1 000 |  1 000 000 |  1 ms|
|10 000 | 100 000 000| 100 ms|
|100 000 |10 000 000 000 | 10 s|
|1 000 000 |  1 000 000 000 000  | 16 min 40 s|
|10 000 000  |100 000 000 000 000 |27 heures|
|100 000 000 |10 000 000 000 000 000 | 115 jours|
|1 000 000 000 |  1 000 000 000 000 000 000  | 31 ans|
| 8 000 000 000 (population mondiale) | 64 000 000 000 000 000 000 | 1984 ans |

Pour un algorithme de complexité O(n.log(n)), la durée de tri d'un ensemble de 8 000 000 000 valeurs prendrait 4 min!

*tableau issu de [podcastscience.fm](https://www.podcastscience.fm/dossiers/2014/09/04/les-tris/)*



# Le tri par insertion
## Principe
Pour cet algorithme, trier, c’est déplacer des éléments, et y insérer l’élément rangé, depuis le debut déjà trié de la liste, jusqu’à la fin. C'est un peu la manière avec laquelle on range les cartes à jouer au debut d'une partie:

{{< img src="../images/jeu_cartes.jpeg" caption="main d'une partie de cartes" >}}

* *Hypothèse :* l'élément non rangé est le j. Tous les autres éléments sont rangés jusqu’à j.
* Il faut d’abord conserver sa valeur à l’aide d’une variable temp
* On décale tous les éléments i, depuis le rang j jusqu’à l’élément dont la valeur est inférieure à celle de j (et donc de temp), en redescendant.

{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=3QwCnoa_6FY"  caption="animation sur le tri par insertion" >}}

*Sur l'animation:* on devine le script de la boucle interne:

1. Dans la partie non triée, selectionner la premiere carte. La reserver en laissant la place libre
2. faire glisser les cartes de la partie gauche (triée) vers la droite pour laiser la place libre à la carte à insérer (correspond à un copier-coller des cartes i-1 => i)
3. insérer la carte réservée à sa place.

```python
def tri1(L):
    for j in range(len(L)):
        temp = L[j]
        i = j
        while i>0 and L[i-1]>temp:
            L[i]=L[i-1]
            i-=1
        L[i]=temp
    return L
```

## Preuve de correction
Montrons qu'à la fin d'un tour de boucle, les valeurs de la liste sont triées jusqu'au rang j inclus:

* au début, j vaut 0. Il ne se passe rien.
* puis j vaut 1. temp vaut L[1]. Dans la boucle secondaire (`while`), à la ligne 5, si L[0] > temp, alors L[1] = L[0] puis L[0] = temp. La liste est alors triée jusqu'à j = 1 inclus.
* supposons qu'à la fin du tour j-1, les valeurs sont triées jusqu'à j-1 inclus. Il faut alors montrer que, lors du tour j, la valeur temp (qui vaut L[j]) sera insérée au bon endroit.

Pour aider le raisonnement, on utlisera le *tableau exemple suivant*:

{{< img src="../images/tri_insertion.png" caption="liste triée jusqu'au rang j = 3" >}}

**Cas n°1: Soit `L[j] >= L[0]`**: 

Après la ligne 4, on entre dans la boucle `while`. A la fin de cette boucle, avant la ligne 8, on a la configuration *milieu* pour la liste.

Alors la boucle n'est plus executée car `L[i-1] > temp` vaut `False`, donc, ligne 9: `L[i] = temp`. La liste est alors dans la configuration *fin de boucle* sur l'image suivante.


{{< img src="../images/liste_triee.png" caption="liste triée jusqu'au rang j = 4 inclus" >}}



**Cas 2: `L[j] < L[0]`**: prendre l'élement au rang j = 5 de la liste précédente.

On verifie que `while` quitte pour i = 0 et que la clé `temp` est bien insérée dans la case 0. La liste est bien triée jusqu'à j = 5 inclus.

*Conclusion:* Lorsque la boucle `for` execute son dernier tour, j designe la dernière case, et on a bien montré que la liste sera bien triée jusqu'à cette case. Donc la liste est *entièrement triée*.

## Complexité
### Calcul du nombre d'opération
Supposons que la taille de la liste est **n**.

Les opérations significatives sont:

* l'affectation
* la comparaison
* l'une des opérations arithmetiques: +, -, *, /

La boucle `for`est executée n fois.

Dans le pire des cas, où la liste classerait les éléments dans l'ordre décroissant, T(n) sera alors:

$$T_1(n) = n \times 2~(lignes~3~et~4)+ n~(ligne~8)$$
$$T_2(n) = [2~(ligne~5) + 2~(ligne~6)+2~(ligne~7)]\times[1+2+ ... +(n-1)]$$
$$T(n) = T_1 + T_2$$
Soit $$T(n) = 3n + 6\times \tfrac{n\times(n-1)}{2}$$

$$T(n) = 3n^2$$

La complexité est donc $O(n^2)$. (coût quadratique). Et si la liste est déjà triée, le nombre d'opérations est quand même T(n) = 5.n (coût linéaire).

### Evaluation rapide de la complexité
On peut compter le nombre de déplacaments / affectations réalisés pour trier les valeurs de la liste, en fonction de la valeur j:

| j | nombre d'opérations dans le pire des cas |
| --- | --- |
| 1 | 3 |
| 2 | 4 |
| 3 | 5 |
| 4 | 6 |
| ... | ... |
| n-1 | n+1 |

La somme de cette série arithmétique est alors $S_n = (n+4)\times(n-1)$

Soit $O(n^2)$ pour la complexité asymptotique.

# Le tri par selection
## Tri par selection du plus petit élement
Sur un tableau de n éléments (numérotés de 0 à n-1), le principe du tri par sélection est le suivant :

* rechercher le plus petit élément du tableau, et l'échanger avec l'élément d'indice 0 ;
* rechercher le second plus petit élément du tableau, et l'échanger avec l'élément d'indice 1 ;
* continuer de cette façon jusqu'à ce que le tableau soit entièrement trié (jusqu'au rang n-2).

{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=qpeeRU_K90k"  caption="animation sur le tri par selection" >}}

*Sur l'animation:* on devine le script de la boucle interne:

1. On *selectionne la premiere carte* de la partie non triée
2. On *observe* la première carte à sa droite
3. Si la carte *marquée* est *inférieure* à la carte du debut, on *marque* la nouvelle carte (et on retire la marque de la precedente marquée)
4. Une fois arrivée au bout de la liste: si la carte marquée est différente de la carte selectionnée (donc inférieure), on *permute* les 2 cartes.

```python
def select(T,debut) :
    indiceDuMin=debut # (1)
    for k in range(debut+1,len(T)) : # (2)
        if T[k]< T[indiceDuMin] : 
            indiceDuMin=k # (3)
    if indiceDuMin !=debut : # (4)
        T[debut],T[indiceDuMin]=T[indiceDuMin],T[debut]

        
def tri2(T):
    for j in range(0,len(T)-1) :
        select(T,j)
    return T
```

## Tri par selection du plus grand élément
Dans cette variante du tri par selection, la liste est triée depuis le plus grand élément jusqu'au plus petit.


On modifie pour cela la fonction `select`: on remplace les instructions `ndiceDuMin=debut` et `T[k]< T[indiceDuMin]` afin de rechercher la valeur max et non celle min.

```python
def select(T,debut) :
    indiceDuMax=debut
    for k in range(debut+1,len(T)) :
        if T[k]> T[indiceDuMax] :
            indiceDuMax=k
    if indiceDuMax !=debut :
        T[debut],T[indiceDuMax]=T[indiceDuMax],T[debut]
```

### Exemple
Le tri peut aussi se faire à partir du rang des caractéres dans l'alphabet (lexicographique).

Soit la liste à trier ['T', 'I', 'M', 'O', 'L', 'E', 'O', 'N']
La liste prend successivement les valeurs:

| j | Liste à la fin de `select` | nombre de comparaisons effectuées |
| --- | --- | --- |
| 0 | ['T', 'I', 'M', 'O', 'L', 'E', 'O', 'N'] | 7 |
| 1 | ['T', 'O', 'M', 'I', 'L', 'E', 'O', 'N'] | 6 |
| 2 | ['T', 'O', 'O', 'I', 'L', 'E', 'M', 'N'] | 5 |
| 3 | ['T', 'O', 'O', 'N', 'L', 'E', 'M', 'I'] | 4 |
| 4 | ['T', 'O', 'O', 'N', 'M', 'E', 'L', 'I'] | 3 |
| 6 | ['T', 'O', 'O', 'N', 'M', 'L', 'E', 'I'] | 2 |
| 7 | ['T', 'O', 'O', 'N', 'M', 'L', 'I', 'E'] | 1 |


## TP: Tri à l'aide d'une clé
On peut réaliser un tri à l'aide d'une **clé**. Les objets (les lignes d'un fichier *csv*) contiennent ainsi des valeurs sur plusieurs colonnes. On peut choisir l'une de ces colonnes pour réaliser le tri.

On prendra pour exemple le fichier du classement UEFA des équipes feminines sur plusieurs années. Le tableau est consultable à la page de l'[UEFA.com](https://fr.uefa.com/nationalassociations/uefarankings/womensclub/#/yr/2022)

* fichier csv *[classement_uefa.csv](/pdf/NSI/classement_uefa.csv)* à telecharger

> Ci-dessous, le programme minimal pour lire le fichier csv. Testez le à l'aide d'un IDE (Pyzo ou autre):

```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile)
    teams = []
    for row in spamreader:
        teams.append(row)
print(teams[:10])
```

La premiere ligne contient l'en-tête du tableau. Il faudra supprimer cette premiere ligne. 

```
['\ufeffClub', 'Pays', '16/17', '17/18', '18/19', '19/20', '20/21', '\xa0pts\xa0', '\xa0Ass\xa0']
```

De plus, le parametrage de la fonction par defaut decoupe les lignes au niveau des virgules ',':

```
['AC Sparta Praha;CZE;3;9;3;3;8;26;11', '715']
```

> Essayer à nouveau, mais cette fois, avec le paramètre `delimiter = ";"`.


```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter = ";")
    teams = []
    for row in spamreader:
        teams.append(row)
del(teams[0])
print(teams[0])

>>> ['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11,715']
```

Une autre option possible: joindre les 2 sous-listes avec un point '.', puis séparer les éléments de la chaine de caractères au niveau des ';':

> Tester également cette 2e option:

```python
import csv
with open('datas/classement_uefa.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile)
    teams = []
    for row in spamreader:
        s = ".".join(row) 
        # instruction necessaire pour le format de la derniere valeur decimale
        # .join(row) créé une chaine de caractères à partir de la liste
        s = s.split(";")
        # on recréé une liste
        teams.append(s)

del(teams[0])
print(teams[0])

>>> ['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11.715']
```


L'execution du programme affiche au depart les équipes classées par ordre alphabetique:

```
['AC Sparta Praha', 'CZE', '3', '9', '3', '3', '8', '26', '11.715']
['AFC Ajax', 'NED', '-', '5', '8', '-', '3', '16', '9.9']
['Akadimia Elpides Karditsas', 'GRE', '-', '-', '2', '-', '-', '2', '2.145']
['ALG Spor Kulübü Derneği', 'TUR', '-', '-', '-', '-', '0', '0', '2.145']
['Apollon Ladies FC', 'CYP', '4', '3', '-', '2', '0', '9', '4.62']
...
```

*Remarque sur la valeur decimale (dernière colonne): Le classement par coefficient des associations ou des pays prend en compte les résultats de tous les clubs d'une association. Il est utilisé pour déterminer le nombre de clubs que pourra engager une association dans les compétitions de l'UEFA les saisons suivantes. Cette valeur n'est pas retenue pour notre classement dans cet exercice.*

On veut adapter l'agorithme de tri par selection pour classer les equipes selon une *clé*, qui sera l'indice de la colonne contenant les points UEFA de l'équipe.

> **A vous de jouer**: adapter le script de `tri2`:

> 1. Ajouter un nouveau paramètre `cle` aux fonctions `select` et `tri2`.
> 2. modifier la condition dans la boucle `for` de la fonction `select` avec `if float(T[k][cle])<float(T[indiceDuMin][cle]) :`
> 3. modifier la 3e ligne de la fonction `tri2` avec `select(T,j,cle)`
> 4. Trier maintenant la liste `teams` selon la colonne de rang 7. Si vous affichez cette liste, elle presente 2 inconvenients:
  * elle est triée telle que l'equipe la plus faible est au debut du tableau et la meilleure à la fin.
  * l'affichage ne facilite pas la lecture
> 5. Modifier la fonction de tri pour réaliser un tri par l'élément le plus grand d'abord.
> 6. Ajouter les instructions suivantes qui permettront d'afficher les equipes : 
  * Créer un tableau vide T.
  * faire une boucle bornée `for` sur la liste `teams` : `for t in range(...)`
  * Dans la boucle for, à chaque itération, ajouter dans T un tuple constitué des colonnes 0, 1 et 7 pour chacune des équipes.
  * afficher classement et equipe avec :  `print(t,T[t])` 



Vous devriez obtenir:

```
0 ('Olympique Lyonnais', 'FRA', '99')
1 ('FC Barcelona', 'ESP', '78')
2 ('VfL Wolfsburg', 'GER', '77')
3 ('Paris Saint-Germain', 'FRA', '60')
4 ('Manchester City WFC', 'ENG', '59')
5 ('FC Bayern München', 'GER', '57')
6 ('Chelsea FC Women', 'ENG', '45')
...
``` 





## Complexité
On voit que le nombre d'operations de comparaisons est constant quelle que soit la liste à trier. Alors que l'affectation est aleatoire, et depend de la position des elements. On decide donc de compter le nombre de comparaisons. 

Pour l'exemple ci-dessus, ce nombre T(8) = 2 + 3 +' 4 + 5 + 6 + 7 = 27

De manière plus générale: $T(n) = \tfrac{n \times (n-1)}{2}$, ce qui fait une complexité $O(n^2)$


# Le tri fusion
## Principe
Le tri pas fusion procède en 2 étapes distinctes. Il s'agit d'un algorithme de type récursif. Au cours de la descente, la liste de valeurs non triées est divisée en 2 parties égales (ou presque) à chaque appel recursif. Puis, lors de la remontée, ces listes, triées sont interclassées, comme vu sur l'animation suivante:

{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=A4uGnjEQsN0"  caption="animation sur l'interclassement de 2 listes triées" >}}

C'est donc sur la remontée que l'on range les éléments par valeur croissante.

*Sur l'animation:* on devine le script de la fonction d'interclassement:

1. comparer les valeurs des bords gauche de chaque sous liste triée
2. ajouter le plus petit élément des 2 sous listes dans une troisieme liste
3. déplacer le bord gauche de la sous liste dont on a selectionné l'élément

L'algorithme est naturellement décrit de façon récursive.

* Si le tableau n'a qu'un élément, il est déjà trié.
* Sinon, séparer le tableau en deux parties à peu près égales.
* Trier récursivement le sous-tableau de gauche avec ce même algorithme du tri
* Trier récursivement le sous-tableau de droite avec ce même algorithme du tri
* Fusionner les deux tableaux triés en un seul tableau trié.


{{< img src="/images/video.png" link="https://youtu.be/OEmlVnH3aUg?t=235"  caption="introduction au tri fusion" >}}


```python
def interclassement(L1,L2):
    lN = []
    n1, n2 = len(L1),len(L2)
    i1, i2 = 0,0
    while i1<n1 and i2<n2:
        if L1[i1] <= L2[i2]:
            lN.append(L1[i1])
            i1 += 1
        else:
            lN.append(L2[i2])
            i2 += 1
    return lN + L1[i1:] + L2[i2:]
    
def tri3(L):
    if len(L) <=1:
        return L
    m = len(L)//2
    gauche = tri3(L[:m])
    droite = tri3(L[m:])
    return interclassement(gauche,droite)

```

Le tri fusion est traité en détail au chapitre [diviser pour regner](/docs/NSI/algorithmes/page5/)

# Liens

 
* TP1: Comparaison de l'efficacité de divers algorithmes de tri:{{< a link="/pdf/NSI/algo4_algorithmes_tri.ipynb" caption="notebook a telecharger " >}}  
* TP1: version{{< a link="https://drive.google.com/file/d/1TFnknrNxeMdtlzIonrdyw6iyexj3mDC1/view?usp=sharing" caption="Colab du notebook" >}}  
* TP2: variations sur le tri par selection, indice UEFA:{{< a link="https://colab.research.google.com/drive/1qUHTnjr4jxbKXsbwu6Af2USlJuSB7U4W?usp=sharing" caption="version colab" >}}
* Suite: Diviser pour Regner:{{< a link="/docs/NSI/algorithmes/page5/" caption="Cours " >}} 
