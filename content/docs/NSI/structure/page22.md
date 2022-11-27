---
Title: TD reduction chaine
bookShowToc: false
---
# Suite des exercices sur les Piles

On utilisera pour le TD suivant l'implementation d'un pile avec les definitions suivantes, comme vues dans les corrections des exercices 1 à 4, page des{{< a link="../page2/" caption="structures linéaires (Piles)" >}}
```python
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
```

## Exercice 5: Reduction d'une chaine de caractères
### Enoncé difficile
Certains jeux comme par exemple *Candie Crush* reposent sur l'*élimination de motifs adjacents*. Je vous propose ici d'utiliser une chaine de caractères dans laquelle les motifs vont être éliminé de la manière suivante:

{{< img src="../images/reduction.PNG" caption="méthode de reduction avec une chaine contenant" >}}
![méthode de reduction](../images/reduction.PNG)

> Programmez la fonction `reduction` qui va permettre de réaliser ceci.

*On se limitera aux caractères 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D' pour cette chaine.*

### Enoncé progressif
On va chercher un solution qui ressemble à celle de la notation polonaise inversée, utilisant une Pile (voir Ex 4 à la page{{< a link="../page2/" caption=" sur les structures linéaires" >}}
On donne 2 fonctions qui seront utiles pour la resolution:

```python
def deversePile(pile1,pile2):
    while not est_vide(pile1):
        empile(depile(pile1),pile2)
        
def motif(pile):
    p2 = Pile()
    i = 0
    if not est_vide(pile):
        c1 = depile(pile)
        empile(c1,p2)
    while not est_vide(pile) and sommet(pile) in dicoS and c1 == dicoS[sommet(pile)]:
        c2 = depile(pile) # c2 est le sommet
        empile(c2,p2)
        i = i + 1
        c1 = c2
    deversePile(p2,pile)
    #return i, p2, pile
    return i
```

**Partie 1**: fonction `motif(pile)`

cette fonction retourne le nombre de motifs consecutifs comptés à partir du sommet de la pile:

Pour ['z','a',**'a','A','a'**]

* la fonction compte un motif pour ['z','a','a',**'A','a'**]
* puis un motif pour ['z','a',**'a','A'**,'a']

Ce qui fait 2 motifs consécutifs.

> Testez la fonction avec les arguments suivants:

```
> motif(['z','a','a','A','a'])
> motif(['z','a','a','b','A','a','A','a'])
> motif(['z','a','c','a','A','a','A','a','C'])
> motif(['z','a','c','a','A','a','A','a','C'])
```

**Partie 2**: fonction recursive `destruction_pile`

```python
def destruction_recur(pile):
    if motif(pile) == 0:
      # a completer
    else:
        return destruction_recur(pile[:-1])
```

Completer la fonction `destruction_pile` avec pour paramètre `pile`.

Les 2 conditions d'arrêt seront:

* retourne `pile` si le nombre de motifs à partir du sommet est égal à zero
* retourne `pile` dont on supprime les 2 éléments du sommet si le nombre de motifs à partir du sommet est égal à 1
* appel recursif avec pour argument `pile` dont on a supprimé l'élément du sommet.

> Completer le script et tester la fonction avec les différents exemples de piles donnés plus haut.

**Partie 3**:  fonction `simplifier`
Dans la fonction `simplifier`:

* on utilise un dictionnaire pour mettre les caractères en correspondance 'a' : 'A', ...
* on parcours chaque caractères `c` d'une chaine `s` 
* on utilise une pile pour stocker des caractères au fur et à mesure du parcours de `s`
* si p n'est pas vide, si le caractere au sommet de la pile `p` est une clé du dictionnaire `dicoS`, et si ce caractère correspond à `c` selon la regle établie pour l'énoncé du problème ('a' : 'A', ...):
 * empiler `c` dans `p`
* sinon si `p` non vide, mais `c` et le sommet de `p` ne correspondent pas:
 * appel recursif de `destruction_recur`
 * empiler `c` dans `p`
 * nouvel appel recursif de `destruction_recur`
* sinon: empiler `c` dans `p`



```python
def simplifier(s):
    dicoS = {'a':'A','b':'B','c':'C','d':'D','A':'a','B':'b','C':'c','D':'d'}
    p = Pile()
    for c in s:
