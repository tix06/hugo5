---
Title : mise au point 
---

# Mise au point d'un programme
Les consignes suivantes sont adaptées au langage Python. Il s'agit d'un recueil de *bonnes* pratiques.

Pour créer une cohérence dans le code, il est recommandé d'utiliser un *guide de style*. Il s'agit de PEP8 sur [https://python.org](https://python.org).

Une première façon de gérer les erreurs passe par la documentation. Le but de la documentation est de permettre à l'utilisateur d'une fonction de savoir comment l'appeler correctement et comment interpréter sa valeur de retour.

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






