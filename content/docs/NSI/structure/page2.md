---
Title : structures lineaires
---

# Structure linéaire : La Pile
## Un premier exemple
La pile est une manière de ranger les données.

Elle correspond exactement à l’image traditionnelle d’une pile de cartes ou d’assiettes posée sur une table. En particulier, on ne peut accéder qu’au dernier élément ajouté, qu’on appelle le sommet de la pile.

L'illustration suivante montre que c'est la structure de données à adopter si l'on veut sortir d'un labyrinthe...

<figure>
  <img src="../images/turt.gif" alt="parcours utilisant une pile">
  <figcaption>parcours pour sortir d'un labyrinthe</figcaption>
</figure>

Le labyrinthe peut être modélisé par les coordonnées de ses noeuds, ainsi qu'une liste de directions possibles (ouvertures) pour chacun de ses noeuds : 

<figure>
  <img src="../images/laby.png" alt="labyritnhe modelisation">
  <figcaption>modelisation d'un labyrinthe</figcaption>
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

## Application 1 : une expression correctement parenthésée

**Principe :** On lit l'expression de gauche à droite et on empile au fur et à mesure les caractères ouvrants : [, {, (. On dépile lorsqu'on lit le caractère fermant correspondant. A la fin, la pile doit être vide.

Dans l'exemple suivant, on voit que l'expression `[a+(b+c)]` est correctement parenthesée. Ce qui ne serait pas le cas pour `[a+(b+c])`.

<figure>
  <img src="../images/parentheses.png">
</figure>

## Définitions

La pile est une structure de données appropriée quand :

* On veut stocker des éléments dontle nombre est variable, et inconnu à l’avance.
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


## Implémenter un pile en Python
Le type *List* en Python possède déjà toutes les méthodes d'une pile :

```python
pile = []           # creation d'une pile
pile == []          # tester si la pile est vide
pile.append(valeur) # empile valeur dans la pile
pile.push()         # depiler l'element au sommet
pile[-1]            # lire l'element au sommet de la pile
```

Lorsque l'on fait référence à une structure de données de type *pile* en traduisant un algorithme en Python, il faudra se contenter de ces 5 instructions.

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
pile.depile(valeur)
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
  Une <b>Pile</b> est une structure de données <b>linéaire</b> (les données sont rangées sur un ligne ou une colonne). Le dernier élément entré sera aussi le premier à sortir (<b>L</b>ast <b>I</b>n <b>F</b>irst <b>O</b>ut : LIFO).

  Les méthodes (= fonctions) disponibles pour cette structure sont : 
  <ul>
  <li> <b>construction</b> (d'une pile vide)</li>
  <li> <b>test</b> d'une pile <b>vide</b> (renvoie `True` si la pile est vide)</li>
  <li> ajout d'un élément (<b>empiler</b> = `push`), mis au sommet de la pile</li>
  <li> retire le premier élément de la pile, celui au sommet (<b>dépiler</b> = pop) si la pile est non vide et renvoie cet élément.</li>
  <li> lire le sommet de la pile.</li>
  </ul>

  Pour implémenter une pile en Python, on utilisera les méthodes déjà existantes pour le type <b>List</b> : 

  <pre><code class=language-python data-lang=python>
  pile = []           # creation d'une pile
  pile == []          # tester si la pile est vide
  pile.append(valeur) # empile valeur dans la pile
  pile.push()         # depiler l'element au sommet
  pile[-1]            # lire l'element au sommet de la pile
</code></pre>
 </div>
</div>

# Exercices sur les piles
## Exercice 1 : pile d'instructions
Considérons l'exemple suivant : 

```python
def h(x):
  return x+1

def g(x):
  return h(x)+2

def f(x)
  return g(x)+1
```

Que se passe-t-il lors de l'appel `f(5)` ? Représenter la pile d'instructions correspondante. Puis calculer le résultat.

## Exercice 2 : déverser une pile
Ecrire une fonction `deversepile` qui déverse une pile `p1` dans une pile `p2`.

Cette fonction sera utilisée de la manière suivante : On utilise une pile intermédaire `p3` : 

```python
p1,p2,p3=Pile(),Pile(),Pile()
deversepile(p1,p3)
deversepile(p3,p2)
```

Les fonctions que vous pourrez utiliser pour les piles seront celles définies en cours : `Pile,est_vide,empile,depile,sommet`.

## Exercice 3 : Evaluation d'une opération en notation polonaise inversée
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

## Exercice 4 : Parcours en profondeur


