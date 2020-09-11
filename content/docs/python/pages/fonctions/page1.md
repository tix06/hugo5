---
Title : Fonctions
---

# Fonctions
Les fonctions permettent de rendre le script plus efficace, plus facile à lire et à vérifier. Un bonne pratique est de faire régulierement du *remaniement* de son code : C'est à dire ré-écrire les parties du programme qui *fonctionnent* et les mettre dans une fonction ou un module. Cela evite aussi les répétitions. On remplace alors le code par un appel à une fonction.

## Généralités
Tous les langages de programmation fournissent un large ensemble de fonctions prêtes à être utilisées. Nous avons déjà rencontré diverses fonctions prédéfinies, de la librairie standart : `print`, `input`, `range`, `len`.


> *Définition :* Une fonction est un bloc de code auquel on donne un nom en vue de le reutiliser. L'appel de son nom exécute tout le bloc de code que cette fonction contient.

Pour créer une fonction, il faut la definir avec le mot clé `def`, suivi du nom de la fonction, d'une paire de parenthèses suivies de `:`.

## Return
La fonction peut retourner une valeur. Celle-ci est alors mise après le mot clé `return`.

```python
def salut():
  """Acueillir tout le monde"""
  return 'bonjour tout le monde'
```

On appelle cette fonction à l'aide de son nom, suivi des parenthèses : 

```python
salut()
# retourne (et affiche) 'bonjour tout le monde'
```

## Docstring
Il est d'usage dans les *bonnes* pratiques d'ajouter une chaine de documentation, à la première ligne de la fonction : le *Docstring*.

Le *Docstring* est accessible à l'aide de la fonction `help` : 

```python
help(salut)
# affiche
Help on function salut in module __main__:

salut()
    Acueillir tout le monde
```

Pour plus d'informations sur le *Docstring*, et principalement le *Prototypage*, consulter la page [mise au point](/docs/NSI/langages/page5/#prototypage-d-une-fonction)

# Passage d'argument
## Définitions
> Un **paramètre** est une information dont la fonction a besoin pour s'exécuter.
> Un **argument** est une valeur transmise à une fonction.

Les paramètres sont placés à l'intérieur des parenthèses dans la définition de la fonction.

```python
def salut(nom):
  """Acueillir tout le monde par son nom"""
  return 'bonjour {}'.format(nom)
```

Lors de l'appel de la fonction, on place l'argument entre parenthèses : 

```python
salut('Brendon')
# retourne (affiche) 'Salut Brendon'
```

## Variable interne
Lors de l'exécution de la fonction, la valeur `Brendon` est affectée à la variable `nom` : `nom = 'Brendon'`.

Seulement, la variable `nom` est une variable interne à la fonction, et n'existe que dans celle-ci. Elle n'est pas définie en dehors.

## Arguments positionnés

> Lorsqu'une fonction a besoin de plusieurs valeurs, ces dernières doivent correspondre aux paramètres qu'elle attend. Les arguments doivent être placés dans l'ordre des valeurs reçues.

```python
def publier_msg(message,user):
  """publier le message de l'utilisateur"""
  return '{} : {}'.format(user,message)
```

Que l'on appelle en renseignant les 2 arguments : 

```python
publier_msg('Ok pour moi','Branda')
# retourne (affiche) 'Branda : Ok pour moi'
```

*Rq : il existe aussi la possibilité d'utiliser des arguments non positionnés, et nommés. Un petite recherche sur le net devrait vous permettre d'en prendre connaissance si besoin.*

## Valeur par défaut
> Définir la *valeur par défaut* d'un paramètre dans une fonction permet à l'appel de la fonction d'utiliser cette valeur, sauf si une autre valeur est spécifiée à l'appel. 

Lorsqu'il y a plusieurs arguments, il faudra mettre les paramètres avec valeur par défaut à la fin : 

```python
def servir_cafe(client,nombre=1):
  """servir le nombre de café voulus au client"""
  return '{} commande {} café(s)'.format(client,nombre)
```

*Exemple d'utilisation :*

```python
servir_cafe('George')
# retourne 'George commande 1 café(s)'
servir_cafe('Jean',2)
# retourne 'Jean commande 2 café(s)'
```

# Importer des fonctions
> Utiliser le mot clé `import` pour importer un module et accéder à toutes ou partie de ses fonctions.

La manière avec laquelle on utilise la fonction dépend de l'import du module.

Les exemples suivants sont issus du cours [https://www.courspython.com/modules.html](https://www.courspython.com/modules.html)

| import | appel de la fonction | commentaire |
| --- | --- | --- |
| import puissance | u = puissance.carre(a)  |  |
| from puissance import carre, cube | u = carre(a)  | on importe que les fonctions necessaire |
| from puissance import * | u = carre(a)  | déconseillée car elle "pollue" l'espace de nom |
|   `import puissance as pu`| u = pu.carre(a) | import du module avec un alias |
|  `from puissance import carre as ca`| u = ca(a) | import d'une fonction d’un module et on lui donne un alias |
| `import package1.module1`| u = package1.module1.carre(a) | import d'une partie du package (le dossier) |


# Flash cards
[Lien](/docs/python/pages/fonctions/ex1/)


