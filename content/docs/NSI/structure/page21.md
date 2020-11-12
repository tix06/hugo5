---
Title : autres structures lineaires
---

# Structures de données: rappels
Les piles, files et listes sont des structures de données **linéaires**. Ce sont des types **abstraits**.

Structure de données **linéaire** : les données sont rangées sur un ligne ou une colonne.

Un **type abstrait** décrit essentiellement une interface, indépendamment du  langage de programmation.


# Files
## Definition et interface
Une file (queue ou FIFO pour first in, first out) est une collection d’objets munie  des opérations suivantes:  
 
* savoir si la file est vide (is_empty);  
* ajouter un élément dans la file (enfiler ou enqueue) en temps constant;  
* retirer et renvoyer l’élément le plus ancien de la file (defiler ou dequeue). 

C'est une structure de données utilisée en informatique pour par exemple gérer la file d'attente lors de la gestion des impressions.

## Implémentations en python
L'implementation d'une File est imparfaite avec une liste en python pour l'opération de *defiler*. On peut utiliser l'instruction `file.pop(0)`. Le problème est que celle-ci ne s'effectue pas en temps constant.

La bibliothèque standard possède toutefois un module nommé `collections`  qui contient quelques structures de données supplémentaires, dont le type `deque`, qui est une implémentation de file:

```python
from collection import deque
f = deque()
f.append("Premier")
f.append("Deuxieme")
print(f.popleft())
f.append("Troisieme")
while f:
  print(f.popleft())
```

affiche:

```
Deuxieme
Troisieme
```


# Listes
## Principe
Le types abstrait *Liste* ne concerne pas le type *list* en python. C'est une liste *chaînée* (ou liste *liée*): une structure de données composées d’une séquence d’*éléments* de liste.

Ces éléments sont aussi appelés *noeuds* ou *maillons*.

La **tête** d’une liste est son premier *maillon*. La **queue** d’une liste, son dernier.

Chaque maillon **M** contient:

* une valeur, de n'importe quel type.
* un lien (ou pointeur) vers le maillon suivant de la séquence.

Il s'agit d'une structure *linéaire*, mais dans laquelle les éléments n'occupent pas *à priori*, des positions contigües dans la mémoire:

*illustration:*

<figure>
  <div>
  <img src="../images/listeElem.png" alt="elements d'une liste chainée">
  <figcaption>elements dans une liste</figcaption>
</div>
</figure>


Pour relier ces éléments ensembles, dans une même structure de données, il faut alors utiliser des *pointeurs*.

<figure>
  <div>
  <img src="../images/listeElemPoint.png" alt="liste chainée grâce aux pointeurs">
  <figcaption>liste chainée grâce aux pointeurs</figcaption>
</div>
</figure>

L'élément **A** pointe sur **B**, qui pointe sur **C**, qui pointe sur **D**. **D**, lui, ne pointe sur ... **rien**!

La plupart du temps, le lien du dernier maillon a pour valeur *None* en python, signifiant un pointeur sur *rien*.

On pourra consulter la vidéo suivante jusqu'à 18min: 

<a href="https://youtu.be/qB00WgCsbqo?t=495" target="blank">listes chainées de Jaques Olivier Lapeyre <img src="../images/video.png"></a>


## Interface
On trouve en général les opérations suivantes pour l'interface d'une *Liste*:

* `est_vide` : renvoie `True` si Liste vide
* `taille` : renvoie le nombre de *maillons* de la séquence
* `get_dernier_maillon`  
* `get_maillon_indice`  
* `ajouter_debut`  
* `inserer_apres` 
* `ajouter_fin`  
* `supprimer_apres`  
* ...

## Implémentation
L'implémentation est plus naturelle en *programmation orientée objet* (<a href="/docs/NSI/structure/page3/">voir le chapitre POO</a>). 

> Un maillon est une instance de la classe `Maillon`

```python
class Maillon:
  def __init__(self):
    self.val = None
    self.suiv = None
```

> Une *Liste* est une instance de la classe `Liste`

```python
class Liste:
  def __init__(self):
    self.tete = None
```

Son attribut `tete`  est de type `Maillon` , ou bien vaut `None` si la liste est vide.

Cette classe ne comporte pour l'instant que sa définition de la variable `tete`, mais elle est créée pour contenir, plus tard, l'implementation des différentes méthodes prévues par l'interface.

<figure>
  <div>
  <img src="../images/listeC.png" alt="liste chainée">
  <figcaption>illustration d'une liste chainée</figcaption>
</div>
</figure>

On peut alors créer une liste ainsi :

```python
L = Liste()
M1, M2, M3 = Maillon(), Maillon(), Maillon()
M1.val = 'A'
M2.val = 'C'
M3.val = 'D'
M1.suiv = M2
M2.suiv = M3
M3.suiv = None
L.tete = M1
```

> **Questions:** à votre avis, que vaut `L.tete.val` ?

> et que vaut `L.tete.suiv.val`?


## Interêt par rapport aux listes en python
L'interface d'une liste chainée fournit des méthodes en O(1) qui n'existent pas avec les listes standarts en python. Par exemple, lorsque l'on veut **insérer** un élément dans la séquence:

<figure>
  <div>
  <img src="../images/listeC2.png" alt="insertion liste chainée">
  <figcaption>insertion dans une liste</figcaption>
</div>
</figure>

Cette opération est prévue par l'interface d'une liste chainée => O(1): `inserer_apres(i)`, où `i` est l'indice de l'élément après lequel on veut *insérer*.

Mais avec une liste python, cela necessite de décaler toutes les valeurs de rang supérieur à `i `. C'est une opération qui est évaluée en O(n) pour sa complexité asymptotique.

Il s'agit du même problème lorsque l'on veut *supprimer après `i`*, ou accéder au maillon de rang `i`.

Un autre avantage est la possibilité de faire pointer le dernier élément sur le premier de la liste. On créé ainsi une liste *périodique*.


# Exercices
## Exercice 1: Créer une liste chainée
**1.** Completer le script ci-dessous pour créer une liste chainée appelée `ma_liste` qui contiendra la éléments suivants:

`'Premier', 'Troisieme'`, `'Quatrieme'`

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5faa722d44d4d&mode=code"></iframe>

**2.** Tester dans la console les instructions suivantes:

```python
>>> ma_liste.tete.val
>>> ma_liste.tete.suiv.val
>>> ma_liste.tete.suiv.suiv.val
```

**3.** Rendez-vous sur <a href="http://pythontutor.com/visualize.html#mode=edit" target="blank">pythontutor.com</a> et coller le script dans l'editeur. Dérouler alors le script pour obtenir la représentation complète de la liste chaînée comme sur l'image suivante:

<figure>
  <div>
  <img src="../images/pythontutor.png" alt="liste chainée et pythontutor">
  <figcaption>liste chainée et pythontutor</figcaption>
</div>
</figure>

**4.** Modifier le script dans la fenêtre d'edition de *pythontutor*. Ajouter les lignes suivantes et dérouler le programme ligne par ligne:

```python
s = ma_liste.tete
s.val = '1'
print(ma_liste.tete.val)
print(M1.val)
```

> Qu'affiche la console? Ce résultat était-il prévisible? Pourquoi?

## Exercice 2: afficher les éléments de liste
On cherche à parcourir les éléments d'une liste chainée `L`.

On propose un premier algorithme itératif. Celui-ci stocke l'élément de tête de `L` dans une variable `M`.

Puis une boucle non bornée parcourt les différents maillons de `L` jusqu'à ce que `M.suiv` soit `None`, marquant le maillon de *queue*.

On affiche alors les valeurs `M.val` de ces maillons avec `print`.

Et on passe au maillon suivant: `M = M.suiv`

**1.** Ecrire le script itératif.<br>
**2.** Adapter ce script pour en faire une fonction **recursive** qui prend en paramètre un maillon M, et affiche toutes les valeurs jusqu'à la fin de la liste. La condition d'arrêt (Base) sera `M.suiv is None`. 

La fonction doit renvoyer une chaine de caractères fabriquée de la manière suivante : `A => ... => ... => D`

Compléter après le return: 

```python
def affiche(M):
    if M.suiv is None:
        return M.val  # affiche la valeur de queue
    else:

    .....
```

<br>

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5faa752e1c9a3&mode=code"></iframe>
<br>

**3.** Comment appeler cette fonction afin qu'elle affiche TOUS les éléments de la liste L, du premier (*tête*) au dernier? Tester avec la liste **ACD** décrite dans le cours.

## Exercice 3: Insertion d'un élément
On souhaite maintenant modifier la séquence de `ma_liste` créée dans l'exercice 1. On va insérer un élément de valeur `Deuxieme` à la 2<sup>e</sup> position.

<figure>
  <div>
  <img src="../images/listeC2.png" alt="insertion liste chainée">
  <figcaption>insertion dans une liste</figcaption>
</div>
</figure>

Ajouter dans votre programme les instructions qui permettront de:
 
**1.** Créer un nouveau maillon `M4`.<br>
**2.** Affecter 'Deuxieme' comme valeur à `M4`.<br>
**3.** Modifier le lien `M4.suiv` pour que celui-ci pointe vers le 3<sup>e</sup> élément de `ma_liste`.<br>
**4.** Modifier le lien `ma_liste.tete.suiv` pour recréer la liste chainée.<br>
**5.** Utiliser la fonction `affiche` pour afficher les éléments de `ma_liste`.<br>


# Correction des exercices
## Exercice 1
(à venir)

## Exercice 2
(à venir)

## Exercice 3
(à venir)

# Liens
* Retour vers la page [introduction aux structures de données: les Piles](../page2/)


