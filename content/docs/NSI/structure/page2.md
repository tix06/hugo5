---
Title : structures lineaires
---

*Prérequis*: Cours sur les <a href="/docs/NSI/structure/page1/">types abstraits</a>.

* Ce cours sur les structures lineaires se prolonge à la <a href="../page21/">page 2 avec: Listes et Files</a>
* Ce cours peut necessiter quelques connaissances en <a href="/docs/NSI/structure/page3/">Programmation orientée objets</a>.

# Structure linéaire : La Pile
## Les structures de données
<p class="definition">Definition: Une <b>structure de données</b> est une manière de stocker, d’accéder à, et de manipuler des données (comme les types list ou dict de Python).</p>
<p class="definition">Definition: Un <b>type abstrait</b> décrit essentiellement une interface, indépendamment du  langage de programmation.</p>

## Un premier exemple
La pile est une manière de ranger les données.

Elle correspond exactement à l’image traditionnelle d’une pile de cartes ou d’assiettes posée sur une table. En particulier, on ne peut accéder qu’au dernier élément ajouté, qu’on appelle le sommet de la pile.

L'illustration suivante montre que c'est la structure de données à adopter si l'on veut sortir d'un labyrinthe...

<figure>
  <div>
  <img src="../images/turt.gif" alt="parcours utilisant une pile">
  <figcaption>parcours pour sortir d'un labyrinthe</figcaption>
</div>
</figure>

Le labyrinthe peut être modélisé par les coordonnées de ses noeuds, ainsi qu'une liste de directions possibles (ouvertures) pour chacun de ses noeuds : 

<figure>
  <div>
  <img src="../images/laby.png" alt="labyritnhe modelisation">
  <figcaption>modelisation d'un labyrinthe</figcaption>
</div>
</figure>

En observant l'animation de la tortue dans le labyrinthe, on peut supposer que la pile des sommets visités (les cases du labyrinthe) sont, dans l'ordre : 

(4,0), (3,0), (3,1), (3,2), (4,2), (4,1) ...

puis le chemin inverse jusqu'au sommet (3,0) : 

(4,2), (3,2), (3,1), (3,0), ...

Une fois revenu au sommet (3,0), on reprend l'exploration vers (2,0), (2,1),... 

Il s'agit d'une méthode d'exploration du labyrinthe de type *parcours en profondeur*. L'algorithme est expliqué en détail à la page : [SNT algorithmes graphe : parcours en profondeur](/docs/SNT_2nde/pages/pages_algo/graphes/page2/#parcours-d-un-arbre-en-profondeur-dfs)

<figure>
  <img src="../images/logott.png" alt="turtle">
  <figcaption>fil d'ariane</figcaption>
</figure>

La tortue suit son chemin jusqu'à arriver à une impasse (ou un sommet déjà visité). Alors, elle doit être capable de *revenir sur ses traces*. C'est pour cela qu'elle mémorise son parcours dans une *pile*, qu'elle pourra remonter (c'est à dire *dépiler*) au besoin. Cette pile de sommets visités correspond au fil d'Ariane, rendu célèbre par la mythologie (Thésée et le Minautore).

Lorsqu'elle s'avance plus en profondeur dans le labyrinthe, vers des sommets encore non explorés, elle *empile*.

Lorsqu'elle revient sur ses traces, elle *dépile* (elle retire des sommets de la pile). 

<figure>
  <img src="../images/emdepile.png" alt="empiler depiler">
  <figcaption>pile de sommets du labyrinthe</figcaption>
</figure>

Lorsque la tortue arrive à la case (4,1), l'impasse, la pile a alors la configuration **pile a** (voir schéma plus bas).

Elle revient jusqu'à (3,0). 

Après avoir *dépilé* (4,1),(4,2),(3,2),(3,1), la pile est alors la **pile b**.

Puis, lorsqu'elle est parvenu à une bifurcation vers une nouvelle direction, elle poursuit son exploration (et *empile* à nouveau) : **pile c**. Qu'il faudra encore prolonger pour atteindre la sortie (en bas à droite).

<figure>
  <img src="../images/pileL.png" alt="pile DFS">
  <figcaption>pile du parcours en profondeur</figcaption>
</figure>

## Deuxieme exemple : une expression correctement parenthésée

**Principe :** On lit l'expression de gauche à droite et on empile au fur et à mesure les caractères ouvrants : [, {, (. On dépile lorsqu'on lit le caractère fermant correspondant. A la fin, la pile doit être vide.

Dans l'exemple suivant, on voit que l'expression `[a+(b+c)]` est correctement parenthesée. Ce qui ne serait pas le cas pour `[a+(b+c])`.

<figure>
  <img src="../images/parentheses.png">
</figure>

## Définitions
### La pile: interface
La pile est une structure de données appropriée quand :

* On veut stocker des éléments dont le nombre est variable, et inconnu à l’avance.
*  On peut ou on doit se contenter d’accéder au dernier élément stocké.

Dans d'autres cas, il faudra utiliser une autre structure de données, comme par exemple un tableau.

Une <b>Pile</b> est une structure de données <b>linéaire</b> (les données sont rangées sur un ligne ou une colonne). Le dernier élément entré sera aussi le premier à sortir (<b>L</b>ast <b>I</b>n <b>F</b>irst <b>O</b>ut : LIFO).

Les méthodes (= fonctions) disponibles pour cette structure sont : 
  <ul>
  <li> <b>construction</b> (d'une pile vide)</li>
  <li> <b>test</b> d'une pile <b>vide</b> (renvoie `True` si la pile est vide)</li>
  <li> ajout d'un élément (<b>empiler</b> = `push`), mis au sommet de la pile</li>
  <li> retire le premier élément de la pile, celui au sommet (<b>dépiler</b> = pop) si la pile est non vide et renvoie cet élément.</li>
  <li> lire le sommet de la pile.</li>
</ul>


### Implémenter un pile en Python
Le type *List* en Python possède déjà toutes les méthodes d'une pile :

```python
pile = []           # creation d'une pile
pile == []          # tester si la pile est vide
pile.append(valeur) # empile valeur dans la pile
pile.pop()         # depiler l'element au sommet
pile[-1]            # lire l'element au sommet de la pile
```

Lorsque l'on fait référence à une structure de données de type *pile* en traduisant un algorithme en Python, il faudra se contenter de ces 5 instructions.

### Interface ou implémentation ?


Les types abstraits, comme les piles, sont définis par leur **interface** (comment  on s’en sert) plutôt que par leur **implémentation** (comment ils fonctionnent). Ils permettent d’étudier des algorithmes indépendamment  du langage utilisé.  

<p class="definition">Definition: L’<b>interface</b> de la structure de données décrit de quelle manière on peut la  manipuler, par exemple en utilisant `append` pour le type list ou `get` pour le type  dict.</p>
<p class="definition">Definition: L’<b>implémentation</b> de la structure de données, contient le code de  ces méthodes (comment fait Python). Il n’est pas nécessaire de connaître l’implémentation pour manipuler la structure de données. Il faut connaitre l'interface.</p>
 

 
On verra ici deux manières d'implémenter la *pile*.


### Créer ses propres fonctions
Pour traduire un algorithme utilisant cette structure *pile*, il peut être préférable de définir des instructions portant les noms de ces 5 instructions:

```python
def Pile():
  """creation d'une pile vide à l'aide de l'instruction : 
  pile = Pile()
  """
  return []

def est_vide(pile)
  # à compléter

def empile(valeur,pile):
  # à compléter

def depile(pile):
  # à completer

def sommet(pile):
  # à completer
```

### Définir sa propre pile (construction d'un objet de type pile)
On peut créer un type (= une **classe**) `Pile` personnelle en Python. 

Les méthodes (fonctions) déclarées précédemment sont alors associées à l'objet `Pile`. L'appel d'une méthode se fait à l'aide de l'instruction : 

```python
pile = Pile()
pile.est_vide()
pile.empile(valeur)
pile.depile()
pile.sommet()
```

Voir le cours sur la [programmation orientée objet](/docs/NSI/structure/page3/).

**Rappel : Objet = type mutable**. Quelle que soit la façon avec laquelle la pile est implémentée, il faudra se souvenir que celle-ci est un objet *mutable*. Cela a des conséquences sur la manière avec laquelle la pile est passée en argument d'une fonction, et comment cette fonction modifie la pile.

## Pile et recursivité
Tout algorithme récursif peut être mis sous forme d'algorithme itératif avec une structure de données en pile.

La pile d'instruction doit être la même.

Voir le cours sur la [recursivité](/docs/NSI/langages/page2/)

# Résumé

<div class="essentiel">
 <div class="entete">
  L'essentiel
 </div>
 <div class="resume">
  Une <b>structure de données</b> est une manière de stocker, d’accéder à, et de manipuler des données.<br>
  Une <b>Pile</b> est une <em>structure de données</em> <b>linéaire</b> (les données sont rangées sur un ligne ou une colonne). Le dernier élément entré sera aussi le premier à sortir (<b>L</b>ast <b>I</b>n <b>F</b>irst <b>O</b>ut : LIFO).<br>

  <b>Interface</b><br>
  L’<em>interface</em> d'une structure de données décrit de quelle manière on peut la  manipuler.
  Les méthodes (= fonctions) disponibles pour la <em>Pile</em> sont : 
  <ul>
  <li> <b>construction</b> (d'une pile vide)</li>
  <li> <b>test</b> d'une pile <b>vide</b> (renvoie `True` si la pile est vide)</li>
  <li> ajout d'un élément (<b>empiler</b> = `push`), mis au sommet de la pile</li>
  <li> retire le premier élément de la pile, celui au sommet (<b>dépiler</b> = pop) si la pile est non vide et renvoie cet élément.</li>
  <li> lire le sommet de la pile.</li>
  </ul>

  <b>Implementation</b><br>
  L'<em>implementation</em> contient le code de  ces méthodes (comment fait Python). Il n’est pas nécessaire de connaître l’implémentation pour manipuler la structure de données. Il faut connaitre l'interface.<br>
  Pour <b>implémenter</b> une pile en Python, on utilisera les méthodes déjà existantes pour le type <b>List</b> : 

  <pre><code class=language-python data-lang=python>
  pile = []           # creation d'une pile
  pile == []          # tester si la pile est vide
  pile.append(valeur) # empile valeur dans la pile
  pile.pop()         # depiler l'element au sommet
  pile[-1]            # lire l'element au sommet de la pile
</code></pre>

 </div>
</div>


# Exercices sur les piles
## Exercice 1 : implementer une pile
1. Programmer les fonctions qui implémentent la *pile*: `Pile`,`est_vide`,`empile`,`depile`,`sommet`. (editeur python en fin d'exerice)
2. Tester votre implémentation pour resoudre l'exercice suivant: (utiliser l'editeur python):
* Soit une liste L = ['a',1,'b',2,'c',3,'d',4]
* Parcourir les éléments de la liste L avec une boucle bornée
  * empiler tous les nombres entiers dans une pile `p`.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f9d36caf37c6&mode=code"></iframe>

## Exercice 2 : lever des exceptions
Certaines des fonctions que vous avez écrites vont lever des exceptions dans le cas où la pile est vide.

1. Pour ces fonctions, ajouter des instructions pour lever les exceptions dans le cas où la pile est vide. (utiliser l'editeur python de l'exercice 1)
2. Tester vos fonctions avec une pile vide.


## Exercice 3 : déverser une pile
Dans l'editeur de l'exercice 1:

Ecrire une fonction `deversepile` qui déverse une pile `p1` dans une pile `p2`.

Cette fonction sera utilisée de la manière suivante : On utilise une pile intermédaire `p3` : 

```python
p1,p2,p3=Pile(),Pile(),Pile()
deversepile(p1,p3)
deversepile(p3,p2)
```

Les fonctions que vous pourrez utiliser pour les piles seront celles définies dans l'exercice 1 : `Pile,est_vide,empile,depile,sommet`.

## Exercice 4 : Evaluation d'une opération en notation polonaise inversée
Principe : la notation polonaise inversée permet d'écrire une opération sans utiliser de parenthèses. Il faut alors écrire les 2 opérandes avant l'opérateur. L'opérateur se trouve à droite des 2 opérandes.

En parcourant l'expression de gauche à droite, chaque fois que l'on rencontre un opérateur, on remonte vers la gauche pour rechercher les 2 opérandes et on remplace les 3 termes (2 operandes et 1 opérateur) par le resultat de l'opération.

On peut utiliser une pile pour réaliser la séquence de calculs.

Exemple : `1 2 + 4 * 3 +`

<figure>
  <img src='../images/npi.png'>
</figure>


<figure>
  <a href="https://www.youtube.com/watch?v=Ak8I7o-rXKg" target='blank'>
<img src='../images/video_NPI.png' alt='video notation polonaise inversée'>
<figcaption>Arnaud Bodin : Calculatrice polonaise - les piles</figcaption>
</a>
</figure>

La liste L contient les caractères de l'expression POSTFIXE à calculer.

1. Compléter les fonctions `add`, `soust`, et `multip` qui doivent additionner, soustraire, et multiplier les arguments x et y.
2. Testez vos fonctions à l'aide du tableau associatif: Executer en console l'instruction: `dicoP['-'](3,4)` qui doit renvoyer ... -1
3. Compléter la fonction evalNPI: Dans une boucle bornée qui parcourt tous les éléments de la liste L: `for a in L:`

* si `a` est un entier: empiler a dans une liste `p` qui sera utilisée comme une *pile*.
* si `a` est un opérateur présent dans le tableau associatif `dicoP`:
    * depiler `p` deux fois et stocker les valeurs dans les opérandes x et y. 
    * empiler la valeur calculée dans la pile `p`
* retourner la valeur finale stockée dans `p`

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f9d305edd765&mode=code"></iframe>

## Exercice 5: Reduction d'une chaine de caractères
Enoncé à la <a href="../page22/">page suivante</a>


# Correction des exercices
## Exercice 1

```python
# exercice 1
L = ['a',1,'b',2,'c',3,'d',4]

def Pile():
    return []

def est_vide(pile):
    return pile == []

def depile(pile):
    assert pile != [], 'impossible de depiler : pile vide'
    return pile.pop()

def empile(a,pile):
    pile.append(a)

def sommet(pile):
    assert pile != [], 'la pile n_a pas de sommet : pile vide'
    return pile[-1]



p = Pile()
for a in L:
    if isinstance(a,int):
        empile(a,p)
print(p)
```



## Exercice 2
Les modifications ont été faites directement dans le corrigé de l'exercice 1.

Tester le script suivant à la suite de celui de l'exercice 1:

```python
# exercice 2
p2 = Pile()
depile(p2)
```

<!--

## Exercice 3
Ajouter la fonction `deversePile` suivante à la suite de celles de l'exercice 1. (Les fonctions `est_vide`, `depile` et `empile` doivent être définies)


```python
# exercice 3
def deversePile(p1,p2):
    while not(est_vide(p1)):
        a = depile(p1)
        empile(a,p2)
    return p2
```

## Exercice 4
Il faut commencer par définir le dictionaire `dicoP` ainsi que les différentes fonctions des opérations:

```python
def add(x,y):
    return x+y

def soust(x,y):
    return x-y

def multip(x,y):
    return x*y

dicoP = {'+' : add,
        '-' : soust,
        '*' : multip
}
```

On peut tester une opération à l'aide de `dicoP`:

```python
>>> dicoP['-'](3,4)
-1
```

Puis on programme la fonction `evalNPI`.

On donne une autre version (plus avancée) de la fonction `evalNPI` utilisant des fonctions lambda, ce qui raccourcit le script:

```python
def evalNPI(L):
    dico = {'+' : lambda x,y : x+y,
            '-' : lambda x,y : x-y,
            '*' : lambda x,y : x*y
    }
    p=[]    
    for a in L:
        if a in dico:
            deuxieme = depile(p)
            premier = depile(p)
            r = dico[a](premier,deuxieme)
            empile(r,p)
        elif isinstance(a,int) : 
            empile(a,p)
    return p

evalNPI(L)
```

> A vous de jouer: Ecrire la liste d'instructions relatives au calcul de g, puis utiliser votre calculatrice en notation polonaise inversée pour résoudre:

> $$g = (3+6)*7 - (10-24)*4$$



<i>Aide: rappelez vous que l'instruction ne contient pas de parenthèses, alors il faudra bien respecter l'ordre des opérations à realiser, de gauche à droite. Le dernier caractère à saisir sera alors le symbole **-**. Relire la video si vous en avez besoin (énoncé de l'Ex 4).</i>


-->



# Autres structures linéaires
Lien vers la page <a href="../page21/">Listes et Files</a>

