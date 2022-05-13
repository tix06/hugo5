---
Title: bac donnees structurees1
---

# Bac 2022 Polynesie: Exercice 4
*Cet exercice traite du thème « structures de données », et principalement des piles.*

La classe Pile utilisée dans cet exercice est implémentée en utilisant des listes Python et propose quatre éléments d'interface :

* Un constructeur qui permet de créer une pile vide, représentée par `[]` ;
* La méthode `est_vide()` qui renvoie `True` si l'objet est une pile ne contenant aucun élément, et `False`sinon ;
* La méthode `empiler` qui prend un objet quelconque en paramètre et ajoute cet
objet au sommet de la pile. Dans la représentation de la pile dans la console, cet objet apparaît à droite des autres éléments de la pile ;
* La méthode `depiler` qui renvoie l'objet présent au sommet de la pile et le retire de la pile.

Exemples :

```
>>> mapile = Pile()
>>> mapile.empiler(2)
>>> mapile
[2]
>>> mapile.empiler(3)
>>> mapile.empiler(50)
>>> mapile
[2, 3, 50]
>>> mapile.depiler()
50
>>> mapile
[2, 3] 
```

La méthode `est_triee` ci-dessous renvoie `True` si, en dépilant tous les éléments, ils sont traités dans l'ordre croissant, et `False` sinon.

```python
def est_triee(self):
  if not self.est_vide() :
    e1 = self.depiler()
    while not self.est_vide():
      e2 = self.depiler()
      if e1 ... e2 :
        return False
      e1 = ...
    return True
```

## Question 1
Recopier sur la copie les lignes 6 et 8 en complétant les points de suspension.

On créé dans la console la pile A représentée par `[1, 2, 3, 4]`

## Question 2
A.  Donner la valeur renvoyée par l’appel `A.est_triee()`.

B. Donner le contenu de la pile A après l'exécution de cette instruction.

On souhaite maintenant écrire le code d’une méthode `depileMax`d'une pile non vide ne contenant que des nombres entiers et renvoyant le plus grand élément de cette pile en le retirant de la pile.

Après l'exécution de `p.depileMax()`, le nombre d'éléments de la pile `p`  diminue donc de 1.

```python
def depileMax(self):
  assert not self.est_vide(), "Pile vide"
  q = Pile()
  maxi = self.depiler()
  while not self.est_vide() :
    elt = self.depiler()
    if maxi < elt :
      q.empiler(maxi)
      maxi = ...
    else :
      ...
  while not q.est_vide():
    self.empiler(q.depiler())
  return maxi
```

## Question 3
Recopier sur la copie les lignes 9 et 11 en complétant les points de suspension.

On créé la pile `B` représentée par `[9, -7, 8, 12, 4]` et on effectue l’appel
`B.depileMax()`.

## Question 4
A.  Donner le contenu des piles `B` et `q` à la fin de chaque itération de la boucle `while` de la ligne 5.

B. Donner le contenu des piles `B` et `q` avant l’exécution de la ligne 14.

C. Donner un exemple de pile qui montre que l'ordre des éléments restants n’est
pas préservé après l’exécution de `depileMax`.

On donne le code de la méthode `traiter()`:

```python
def traiter(self):
q = Pile()
while not self.est_vide():
q.empiler(self.depileMax())
while not q.est_vide():
self.empiler(q.depiler())
```

## Question 5
A.  Donner les contenus successifs des piles `B` et `q`

* avant la ligne 3,
* avant la ligne 5,
* à la fin de l’exécution de la fonction traiter lorsque la fonction traiter est appliquée sur la pile B contenant `[1, 6, 4, 3, 7, 2]`.

B.  Expliquer le traitement effectué par cette méthode.

# Bac 2022 Metropole 1: Exercice 1
*Cet exercice composé de deux parties A et B, porte sur les structures de données.*

## Partie A : Expression correctement parenthésée
On veut déterminer si une expression arithmétique est correctement parenthésée.
Pour chaque parenthèse fermante ")" correspond une parenthèse précédemment
ouverte "(".

Exemples :

* L’expression arithmétique "(2 + 3) × (18/(4 + 2))" est correctement parenthésée.
* L’expression arithmétique "(2 + 3) × (18/(4 + 2" est non correctement
parenthésée.

Pour simplifier les expressions arithmétiques, on enregistre, dans une structure de données, uniquement les parenthèses dans leur ordre d’apparition. 

On appelle expression simplifiée cette structure.


<figure>
  <img src="../images/page2_1.png">
  <figcaption>1158 × 248</figcaption>
</figure>

## Question 1
Indiquer si la phrase « les éléments sont maintenant retirés (pour être lus) de cette structure de données dans le même ordre qu’ils y ont été ajoutés lors de l’enregistrement » décrit le comportement d’une file ou d’une pile. Justifier.

Pour vérifier le parenthésage, on peut utiliser une variable `controleur` qui :

* est un nombre entier égal à 0 en début d’analyse de l’expression simplifiée ;
* augmente de 1 si l’on rencontre une parenthèse ouvrante "(" ;
* diminue de 1 si l’on rencontre une parenthèse fermante ")".

Exemple : On considère l’ expression simplifiée A : "( )( ( ) )"
Lors de l’analyse de l’expression A, `controleur` (initialement égal à 0) prend
successivement pour valeur 1, 0, 1, 2, 1, 0. Le parenthésage est correct.

## Question 2
Écrire, pour chacune des 2 expressions simplifiées B et C suivantes, les valeurs successives prises par la variable `controleur` lors de leur analyse.

* Expression simplifiée B : " ((( )( )"
* Expression simplifiée C : "(( )))("

## Question 3
L’expression simplifiée B précédente est mal parenthésée (parenthèses fermantes
manquantes) car le `controleur` est différent de zéro en fin d’analyse.

L’expression simplifiée C précédente est également mal parenthésée (parenthèse
fermante sans parenthèse ouvrante) car le `controleur` prend une valeur
négative pendant l’analyse.

Recopier et compléter uniquement les lignes 13 et 16 du code ci-dessous pour
que la fonction `parenthesage_correct` réponde à sa description.

```python
 def parenthesage_correct(expression):
    """fonction retournant True si l'expression arithmétique
    simplifiée (str) est correctement parenthésée, False
    sinon.
    Condition: expression ne contient que des parenthèses
    ouvrantes et fermantes """
    controleur = 0
    for parenthese in expression: #pour chaque parenthèse
      if parenthese == '(':
        controleur = controleur + 1
      else:# parenthese == ')'
        controleur = controleur - 1
        if controleur ... : # test 1 (à recopier et compléter)
          #parenthèse fermante sans parenthèse ouvrante
          return False
    if controleur ... : # test 2 (à recopier et compléter)
        return True #le parenthésage est correct
      else:
        return False #parenthèse(s) fermante(s) manquante(s)
 ```

## Partie B : Texte correctement balisé
On peut faire l’analogie entre le texte simplifié des fichiers HTML (uniquement
constitué de balises ouvrantes <nom> et fermantes </nom>) et les expressions
parenthésées :
Par exemple, l’expression HTML simplifiée :

`"<p><strong><em></em></strong></p>"` est correctement balisée.

On ne tiendra pas compte dans cette partie des balises ne comportant pas de
fermeture comme `<br>` ou `<img …>`. 

Afin de vérifier qu’une expression HTML simplifiée est correctement balisé, on peut utiliser une pile (initialement vide) selon l’algorithme suivant :

On parcourt successivement chaque balise de l’expression :

* lorsque l’on rencontre une balise ouvrante, on l’empile ;
* lorsque l’on rencontre une balise fermante :
* si la pile est vide, alors l’analyse s’arrête : le balisage est incorrect ,
* sinon, on dépile et on vérifie que les deux balises (la balise fermante
rencontrée et la balise ouvrante dépilée) correspondent (c’est-à-dire ont le
même nom) si ce n’est pas le cas, l’analyse s’arrête (balisage incorrect).

Exemple : État de la pile lors du déroulement de cet algorithme pour l’expression simplifiée `"<p><em></p></em>"` qui n’est pas correctement balisée.

<figure>
  <img src="../images/page2_2.png">
  <figcaption>État de la pile lors du déroulement de l’algorithme - 1242 × 258</figcaption>
</figure>


## Question 4
Cette question traite de l’état de la pile lors du déroulement de l’algorithme.

A.  Représenter la pile à chaque étape du déroulement de cet algorithme pour
l’expression `"<p><em></em></p>"` (balisage correct).

B.  Indiquer quelle condition simple (sur le contenu de la pile) permet alors de dire que le balisage est correct lorsque toute l’expression HTML simplifiée a été entièrement parcourue, sans que l’analyse ne s’arrête.

## Question 5
Une expression HTML correctement balisée contient 12 balises.
Indiquer le nombre d’éléments que pourrait contenir au maximum la pile lors de
son analyse. 




