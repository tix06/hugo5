---
Title : programmation objet
---

# Programmation objet

## Principe
En programmation orientée objet, on cherche à organiser les données avec la volonté de se rapprocher de l'architecture *d'objets physiques*.

Un *objet physique*, comme par exemple, une planche de skateboard, possède des caractéristiques propres. 

<figure>
  <a href="https://urbanart-paris.fr/event/chalk-custom-board-lart-dhabiller-skate/">
    <img src="https://urbanart-paris.fr/wp-content/uploads/2016/04/12963624_1877786249114590_5321151849406456199_n.jpg" alt="chalk custom board">
    <figcaption>image: CHALK CUSTOM BOARD : L’ART D’HABILLER UN SKATE (urban art)</figcaption>
  </a>
</figure>

Une planche, malgré la diversité, est toujours constituée: 

* d'un deck (court, long)
* d'un tail (plat, relevé)
* de trucks (hauts, bas)
* de roues (à gommes tendres, dures)
* d'une décoration (image sous le deck)

C'est son **état**.

Cette planche peut repondre egalement à un ensemble de messages, qui forment ce que l'on appelle l'*interface* de l'objet. C'est au travers de ces méthodes que l'on peut interagir avec l'objet, ou que les objets peuvent interagir entre eux.

On peut lui associer une méthode `skateboard_pour_parc` qui renvoie `True` si la planche est de type *street* ou `False` si la planche est de type *cruising*, ou prevue pour la decoration.

Un objet comprend donc :

* une partie **figée** qui représente son **état**, et qui est constituée de champs ou **attributs**.
* une partie **dynamique** qui décrit son **comportement**, à l'aide de déclarations de **méthodes**, qui doivent répondre à des **messages**. 

## Classe et instance de classe
La structure interne des objets et les messages auxquels ils repondent sont définis dans une **classe**. Une *classe* décrit les méthodes de création d'objets de ce type (on parle d'*instance* de classe), et les méthodes auxquelles répondront les objets de ce type dans la reception des messages.

Avec l'exemple précédent, la **class**e Skateboard pourrait contenir:

* les méthodes de création des instances des différents skateboards. On y définit les attributs pour chaque nouvelle planche de skateboard que l'on créé. Chaque planche de skate constitue une *instance* de classe.
* les méthodes de la classe skateboard, qui repondent aux messages du genre: `skateboard_pour_parc`? Un *message* est constitué du nom de la méthode, et permet d'interagir avec celui-ci. Ces méthodes sont accessibles à tous les skates qui sont des instances de la classe skateboard.

En **python**, la création d'une classe commence par le mot clé **class** suivi du nom de la classe, de deux points et d'une indentation. 

```python
class Skateboard:
``` 

Toute la partie indentée contient les *méthodes de création* des *instances* de cette classe et les *méthodes* de cette classe.

Lors de la programmation, on devra faire référence à l'instance de l'objet sur lequel on travaille: le mot clé `self` permet ceci en python.

La méthode de création d'un objet est définie par `def __init__` suivi au minimum de l'argument `self`, et eventuellement d'autres arguments.

```python
class Skateboard:
    def __init__(self,deck='court',tail='releve',truck='bas',roues='dures',deco='None'):
        self.deck = deck
        self.tail = tail
        self.truck = truck
        self.roues = roues
        self.deco = deco
``` 

Les attributs des objets de cette classe sont définis dans cette méthode. Ils sont codés sous la forme `self.attribut`, et peuvent faire référence aux arguments passés lors de l'instanciation.

Enfin, chaque méthode de classe est définie à l'aide de: `def nom_de_la_methode`. Celle-ci prend aussi au minimum, l'argument `self`.

*Script complet:*

```python
class Skateboard:
    def __init__(self,deck='court',tail='releve',truck='bas',roues='dures',deco='None'):
        self.deck = deck
        self.tail = tail
        self.truck = truck
        self.roues = roues
        self.deco = deco
        
    def skateboard_pour_parc(self):
        if self.deck == 'court' and self.tail == 'releve' and self.roues == 'dures':
            return True
        else:
            return False
```

On instancie alors un premier skateboard de la manière suivante:

```python
>>> mon_premier_skate = Skateboard()
```

<figure>
  <div>
  <img src="../images/sk8_classic.jpg" alt="skateboard classic">
  <figcaption>un premier skateboard bien classique</figcaption>
</div>
</figure>

Et on envoie le message suivant:

```python
>>> mon_premier_skate.skateboard_pour_parc()
True
```

Instanciation d'un second skateboard:

<figure>
  <div>
  <img src="../images/sk8_sector9.jpg" alt="skateboard cruiser">
  <figcaption>un skateboard cruiser</figcaption>
</div>
</figure>

```python
>>> mon_sector_9 = Skateboard('long','plat','haut','molles','Marley')
>>> mon_sector_9.skateboard_pour_parc()
False
```

## La méthode `__repr__()` 
Cette méthode `__repr__` s'utilise pour donner une représentation plus lisible de l'objet lorsqu'on veut l'afficher avec la fonction `print`.

*Exemple 1:* On essaie d'afficher notre instance de classe `mon_sector_9` créée plus haut:

```python
>>> print(mon_sector_9)
<__main__.Skateboard object at 0x7fc6b0847550>
``` 

Ce n'est pas très explicite pour un humain. On préfèrera souvent choisir un descriptif personnalisé. Nous allons programmer la chaine de caractères qui sera renvoyée lors du `print`.

On ajoute maintenant à la classe `Skateboard` la méthode `__repr__()` qui sera appelée lorsque l'on utilise `print(objet)`: 

```python
    def __repr__(self):
        if self.skateboard_pour_parc():
            return "skateboard de type {} qui permet de rider en parc".format(self.deck)

        else:
            return "skateboard de type {} qui ne permet pas de rider en parc".format(self.deck)
```

On construit à nouveau l'instance de classe `mon_sector_9`, et on fait `print(mon_sector_9)`:

```python
>>> mon_sector_9 = Skateboard('long','plat','haut','molles','Marley')
>>> print(mon_sector_9)
skateboard de type long qui ne permet pas de rider en parc
``` 

*Remarquer* que l'appel à la méthode `skateboard_pour_parc` se fait en identifiant l'objet qui possède cette méthode: `self.skateboard_pour_parc()`. Et ici, on n'ajoutera pas de nouvel argument. (On ne met pas `self` en argument lors du *message* envoyé à cet objet).

*Surcharge d'une fonction de la librairie standard:* Ce que l'on vient de réaliser est une surcharger de la fonction `print` de la librairie standard. 

Mais il existe d'autres méthodes de surcharge, prévues pour les **opérateurs**, ainsi que pour certaines **fonctions**. On pourra se référer au [lien suivant](https://riptutorial.com/fr/python/example/7334/surcharge-de-l-operateur) pour approfondir le sujet.

# Exercices
## Exercice 1: divers
![exercices du site Lyceum.fr](https://lyceum.fr/tg/nsi/4-langages-et-programmation/6-programmation-objet/exo)

## Exercice 2: Méthodes de la classe Pile

## Exercice 3: Classe Pile créée à partir d'une liste chaînée
La notion de *classe* permet de créer de nouveaux types de structure. Nous allons créer à la main une structure de liste chaînée; pour ce faire, nous allons utiliser une premiere classe *Maillon*; et une deuxième classe Pile, qui se servira de cette structure. Cette nouvelle structure n'utilise pas le type *List* de python.

On rappelle qu'une liste chaînée est une structure linéaire, constituée de cellules. ![voir cours sur les listes chainees](/docs/NSI/structure/page21/#listes)

1. Compléter la méthode `push` fournie dans la fenêtre de l'editeur.
2. Créer une méthode `pop`.
3. Créer la méthode `__repr__(self)` qui va être appelée lors de l'affichage d'une pile `P` à l'aide de l'instruction `print(P)`.




