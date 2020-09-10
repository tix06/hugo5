---
Title : mise au point 
---

# Mise au point d'un programme
Les consignes suivantes sont adaptées au langage Python. Il s'agit d'un recueil de *bonnes* pratiques.

Pour créer une cohérence dans le code, il est recommandé d'utiliser un *guide de style*. Il s'agit de PEP8 sur [https://python.org](https://python.org).

Une première façon de gérer les erreurs passe par la documentation. Le but de la documentation est de permettre à l'utilisateur d'une fonction de savoir comment l'appeler correctement et comment interpréter sa valeur de retour.

## Spécification d'un algorithme
Construire un algorithme consiste à découvrir les actions qu'il faut organiser dans le temps, et à choisir la manière de les organiser pour obtenir le résultat escompté par leurs effets cumulés. La *spécification* doit permettre d'aider à cette construction, sans ambiguïté.

La spécification de l'agorithme doit comprendre : 

* Le nom donné à cet algorithme. Ce nom soit être explicite, en rapport avec la tâche effectuée par l'algorithme
* Une description du résultat de cet algorithme, ainsi que la manière avec laquelle on va s'y prendre
* Le type et la nature des données en *entrée* 
* Le type et la nature des données en *sortie*
* eventuellement, le type et la nature des variables internes

*Exemple :* recherche_maximum
```
"""
L'algorithme recherche la valeur maximale dans la liste.
variables en entrée : 
------------------
ma_liste : list, une liste de valeurs entieres, uniques, mises dans un ordre aléatoires.
max : int, stocke la valeur maximale actuelle. Initialisé à 0.
Sortie :
------
max : int, prend la valeur de l'élément le plus grand de la liste
Principe : 
--------
on parcourt la liste avec une boucle bornée.
si la valeur la valeur de max est inferieure à la valeur courante, max est actualisée avec cette valeur courante
"""
max := 0
pour i allant du premier au dernier element de ma_liste faire
    si i > max  
        max := i
    fin
fin
afficher max
```

Le *pseudo langage* adopté est celui utilisé dans wikipedia : [exemple](https://fr.wikipedia.org/wiki/Tri_fusion)

## Prototypage d'une fonction
Une fonction doit être déclarée avant son utilisation. Cette déclaration est le prototype de la fonction. Le prototype doit indiquer à l'utilisateur le nom de la fonction, le type de la valeur de retour et le type des paramètres.

Pour de nombreux langages, ce prototypage est explicite, et cela provoque une erreur de compilation si ce prototypage n'est pas correct.

*Exemple de déclaration d'une fonction en langage ADA :*

```ada
function A_Rect(larg : natural ; long : natural) return natural is
  A : natural ; 
begin
  A:= larg * long;
  return A;
end A_Rect ;
```

En python, malheureusement, ce prototypage est facultatif, mais il fait partie des *bonnes méthodes* de le réaliser.

En python, on pourra construire le prototypage dans le commentaire, mis tout de suite après la déclaration de la fonction : 

```python
def a_rect(larg,long):
    """Le produit de 2 nombres.
    
    Renvoie le produit des 2 nombres passés en argument
    
    Parameters
    ----------
    larg : int ou float
           la largeur du rectangle
           
    long : int ou float
           la longueur du rectangle
    
    Returns
    -------
    int ou float

    Variables
    ---------
    a : int ou float
        larg * long
    
    """
    a = larg * long
    return a
``` 

On voit que le prototypage d'une fonction donne à peu près les mêmes informations que la *spécification d'un algorithme*.

On pourra consulter la page du site [Lyceum](https://lyceum.fr/1g/nsi/7-langages-et-programmation/6-fonctions) pour plus d'informations.



# Méthodes de gestion des erreurs
## assertions
L'exécution d'un programme peut provoquer une erreur. Lorsque c'est le cas, l'exécution s'arrête immédiatement et l'interpréteur Python affiche une trace d'erreur.

Cette dernière fournit des informations quant au chemin d'exécution qui a mené jusqu'à l'erreur et sur la cause de cette dernière.

La console affiche `Traceback`, qui marque le début de la trace d'erreur.

On peut distinguer 3 types d'erreurs : 

* erreur de syntaxe
* erreur d'execution
* erreur de logique

Le rajout *provisoire* d'assertions dans le script va permettre d'anticiper sur les erreurs possibles de logique.

Le mécanisme d'assertion est là pour empêcher des erreurs qui ne devraient pas se produire, en arrêtant prématurément le programme.

Lien : [python.developpez.com](https://python.developpez.com/tutoriels/apprendre-programmation-python/notions-avancees/?page=gestion-d-erreurs)






