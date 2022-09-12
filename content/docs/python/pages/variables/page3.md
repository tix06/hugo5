---
Title : TP variables
---
# Travaux pratiques
## Les types élémentaires en python
Vous traiterez chacun des exemples suivants en utilisant l'editeur de  [pythontutor](http://www.pythontutor.com/visualize.html#mode=edit)

> Saisir les 2 lignes de code suivantes : 

<figure>
  <img src="../images/pythontutor1.png">
</figure>

> Cliquer sur **Visualize execution**.

<figure>
  <img src="../images/pythontutor2.png">
</figure>

> Dérouler alors le script ligne par ligne avec **next**.

### créer des tests sur l'identité des variables

> Revenir à la page d'edition et ajouter à la suite du script les 3 tests suivants : 

<figure>
  <img src="../images/pythontutor3.png">
</figure>

> Executer le programme

Chaque test ajouté est une assertion, qui arrête le programme lorsque l'un des tests retourne `False`. Sinon, le programme poursuit normalement, sans rien signaler.

L'interêt est plus grand si on ajoute un commentaire explicite. C'est le message qui serait normalement affiché dans le `Traceback` de la console. (trace d'erreur).

<figure>
  <img src="../images/pythontutor4.png">
</figure>

Si le programme s'arrête sur un test renvoyant `False`, mais que l'on veut poursuivre les autres tests, il faudra mettre la ligne du test en commentaire:

<figure>
  <img src="../images/pythontutor5.png">
</figure>



> Reporter dans votre cahier de labo les expressions qui donnent `True`.

> Revenir dans la fenêtre d'edition et modifier maintenant la ligne : `b=2` par `b = 3`. 

> Refaire les tests et reporter les expressions qui donnent `True`. 

## Autres type numerique

> Sur le modèle du script précédent, vous allez maintenant choisir un autre type numérique pour les données affectées à `a` et à `b`.
> Conclure.


## types mutables
> Remplacer le script précédent par celui-ci :

```python
a = [1, 2, 3]
b = a
b.append(4)

print('a = {}'.format(a))
``` 
> Puis réaliser les mêmes opérations : *Visualiser pas à pas*, tester l'identité des variables avec les assertions.
> Que valent `a` et `b` après l'execution du programme? Conclure.




# Fonctions et objets mutables/non mutables
Les objets mutables passés en argument d'une fonction sont copiés par **référence**. Les autres sont copiés par **valeur**.

## Objets non mutables : copie par valeur

```python
# définition d'une fonction carre()
def carre(x):
    y = x**2
    return y

# programme principal
z = 5
resultat = carre(z)
print(resultat)
```

> Tester ce script avec l'editeur de Pythontutor.
> Et resumer les étapes observées lors du déroulement du script.
> On pourra s'aider du cours en ligne [Université Diderot](https://python.sdv.univ-paris-diderot.fr/09_fonctions/#96-variables-locales-et-variables-globales)

## Objets mutables : copie par référence

> refaire le même exercice, mais cette fois avec le script suivant. Cette fois, c'est une liste (objet mutable) qui est passée en argument : 

```python
L1 = [1,2,3]
def mafonction(L2):
    L2[2]=4
    print(L1 is L2)
    return L2
mafonction(L1)
```


> tester le script avec pythontutor (ne pas ré-écrire les commentaires)

> résumer sur la fiche réponse.


# Conclusion : objets mutables et non mutables
## Objets non mutables en python 
Les variables simples sont non mutables. On peut réaliser des affectations, ce qui a pour effet de mettre à jour la valeur stockée dans la mémoire réservée.
On peut illustrer ceci avec le scripts : 

**Exemple simple :**

```python
a = 2
b = a
(a is b)
# True car b est la copie de a. Ce sont les mêmes objets. 
```
puis : 
```python
a = 2
b = a
b = 3
print(a)
# 2
(a is b)
# False car on a affecté un nouvel objet à b, qui n'est alors plus rigoureusement identique à a
```

## Objets mutables en python
La copie d'un objet *mutable* se fait par *référence*. Cela peut entrainer des erreurs lors de la manipulation de ces objets, puisque la modification de l'un va aussi modifier toutes les variables mutables possédant la même référence : 

```python
a = [1, 2, 3]
b = a
b.append(4)

print('a = {}'.format(a))
# affiche a = [1, 2, 3, 4]
a is b
# affiche True car a et b sont deux noms pour un même objet.
``` 

Pour faire une copie de la liste a par *valeur*, il faudra la découper sans mentionner les 2 indices avec `b = a[:]`, ou bien utiliser la fonction `list` , avec `b = list(a)`: voir la page [méthode et types](/docs/python/pages/variables/page2/#copie-d-une-liste)

Un objet mutable passé en argument d'une fonction est modifié par ce que l'on appelle : un *effet de bord* dans la fonction.

<input type="button" class="btn btn-lg" value="Retour à la page : Variables" onclick="window.location.href = '../page1/'">