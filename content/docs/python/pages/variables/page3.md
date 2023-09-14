---
Title : TP variables
---
# Travaux pratiques
## Les types mutables et non mutables en python
Vous traiterez chacun des exemples suivants en utilisant l'editeur de  [pythontutor](http://www.pythontutor.com/visualize.html#mode=edit)

> Saisir les 2 lignes de code suivantes : 

{{< img src="../images/pythontutor1.png" >}}
> Cliquer sur **Visualize execution**.

{{< img src="../images/pythontutor2.png" >}}
> Dérouler alors le script ligne par ligne avec **next**.

### créer des tests sur l'identité des variables

> Revenir à la page d'edition et ajouter à la suite du script les 3 tests suivants : 

{{< img src="../images/pythontutor3.png" >}}
> Executer le programme

Chaque test ajouté est une assertion, qui arrête le programme lorsque l'un des tests retourne `False`. Sinon, le programme poursuit normalement, sans rien signaler.

L'interêt est plus grand si on ajoute un commentaire explicite. C'est le message qui serait normalement affiché dans le `Traceback` de la console. (trace d'erreur).

{{< img src="../images/pythontutor4.png" >}}
Si le programme s'arrête sur un test renvoyant `False`, mais que l'on veut poursuivre les autres tests, il faudra mettre la ligne du test en commentaire:

{{< img src="../images/pythontutor5.png" >}}


**Question a:** Quelles expressions donnent `True`.

> Revenir dans la fenêtre d'edition et modifier maintenant la ligne : `b = a` par `b = 3`. 

**Question b:** Refaire les tests et préciser quelles sont les expressions qui donnent `True`. 

> Tester l'affectation multiple: Exprimer en une seule ligne l'affectation de 2 à `a` et de 3 à `b`: 

```python
a, b = 2, 3
``` 

**Question c:** Que donnent les tests d'assertion? Le résultat de l'affectation en une seule ligne est-il le même qu'en plusieurs lignes?

## types mutables
> Remplacer le script précédent par celui-ci :

```python
a = [1, 2, 3]
b = a
# a et b pointent-ils vers la même reference?
print(a is b)
# puis modifier b
b.append(4)
# afficher b puis a
print('b = {}, a = {}'.format(b,a))
``` 
> Puis réaliser les mêmes opérations : *Visualiser pas à pas*, tester l'identité des variables avec les assertions.

**Question d:** Que valent `a` et `b` après l'execution du programme? La copie `b = a`, est-elle une copie par valeur ou par reference?




# Fonctions et objets mutables/non mutables
Les objets mutables passés en argument d'une fonction sont copiés par **référence**. Les autres sont copiés par **valeur**.

## Objets non mutables : copie par valeur

```python
# définition d'une fonction carre()
def carre(x):
    x = x**2
    return x

# programme principal
z = 5
resultat = carre(z)
print(resultat)
```

> Tester ce script avec l'editeur de Pythontutor.

**Question e:** Et resumer les étapes observées lors du déroulement du script.

> On pourra s'aider du cours en ligne [Université Diderot](https://python.sdv.univ-paris-diderot.fr/09_fonctions/#96-variables-locales-et-variables-globales)

## Objets mutables : copie par référence

Cette fois, c'est une liste (objet mutable) qui est passée en argument : 

```python
L1 = [1,2,3]
def mafonction(L2):
    L2[2]=4
    print(L1 is L2)
    return L2

mafonction(L1)
```


> tester le script avec pythontutor

**Question f:** Et resumer les étapes observées lors du déroulement du script.


# Conclusion : objets mutables et non mutables
## Objets non mutables en python 
Les variables simples sont non mutables. On peut réaliser des affectations, ce qui a pour effet de mettre à jour la valeur stockée dans la mémoire réservée.

## Objets mutables en python
La copie d'un objet *mutable* se fait par *référence*. Cela peut entrainer des erreurs lors de la manipulation de ces objets, puisque la modification de l'un va aussi modifier toutes les variables mutables possédant la même référence.

De même, un objet mutable passé en argument d'une fonction est modifié par ce que l'on appelle : un *effet de bord* dans la fonction. 

Imaginons un script qui prend les coordonnées de depart d'un point, `coordonnees_init`, et realise une translation (ajoute 1 à x et 2 à y).

```python
def fonction1(deplacement):
    deplacement[0] = deplacement[0] + 1
    deplacement[1] = deplacement[1] + 2
    return deplacement

coordonnees_init = [0,0]
print(fonction1(coordonnees_init))
print(coordonnees_init)
``` 

> Tester le script de la fonction1

**Question g:** Les nouvelles coordonnées sont stockées dans la Liste `deplacement`. Comment évoluent les coordonnées dans les 2 listes? La liste de coordonnées d'origine est-elle modifiée par le script?

> Tester le script de la fonction2 

```python
def fonction2():
    deplacement = coordonnees_init
    deplacement[0] = deplacement[0] + 1
    deplacement[1] = deplacement[1] + 2
    return deplacement

coordonnees_init = [0,0]
print(fonction2())
print(coordonnees_init)
```

**Question h:** Comment évoluent les coordonnées dans chacune des listes? `deplacement` et `coordonnees_init` pointent-ils vers la même reference?


Pour faire une copie de la liste a par *valeur*, il faudra la découper sans mentionner les 2 indices avec `b = a[:]`, ou bien utiliser la fonction `list` , avec `b = list(a)`, ou bien utiliser la méthode `copy()`:

```python
def fonction3():
    deplacement = coordonnees_init.copy()
    deplacement[0] = deplacement[0] + 1
    deplacement[1] = deplacement[1] + 2
    return deplacement

coordonnees_init = [0,0]
print(fonction3())
print(coordonnees_init)
```

**Question i:** Cette fois, `deplacement` est-il une copie par valeur ou par reference de `coordonnees_init`? Précisez ce qu'est une copie par *valeur*.





<input type="button" class="btn btn-lg" value="Retour à la page : Variables" onclick="window.location.href = '../page1/'">