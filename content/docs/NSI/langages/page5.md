---
Title : mise au point 
---

# Mise au point d'un programme, gestion des bugs
Les consignes suivantes sont adaptées au langage Python. Il s'agit d'un recueil de *bonnes* pratiques.

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

# des fondamentaux aux concepts avancés du langage
En Python, il existe deux types d’objets: les mutables (listes, dictionnaires, sets, objets custo, etc) et les non mutables (string, int, float, tuple, etc).

Les mutables sont ceux qu’on peut modifier après leur création. Les non mutables sont ceux qu’on ne peut pas modifier après création.

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

Pour chacun des exemples suivants, il est conseillé de copier le code dans l'editeur sur le site <a href ="http://www.pythontutor.com/visualize.html#mode=display" target="blank">PYTHONTUTOR</a> qui permet de visualiser l'état des variables et objets lorsque l'on déroule le script, pas à pas.

**Illustration avec des copies de variables passées en argument  d'une fonction :**

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

Voir le cours en ligne [Université Diderot](https://python.sdv.univ-paris-diderot.fr/09_fonctions/#96-variables-locales-et-variables-globales)

## Objets mutables : copie par référence

```python
L1 = [1,2,3]
def mafonction(L2):
    L2[2]=4
    print(L1 is L2)
    # affiche True
    # malgre la modif de L2, L1 et L2 restent rigoureusement les mêmes objets
    return L2
mafonction(L1)
# [1,2,4]
```

La liste a été modifiée. C’est parce que l’on passe une référence à la liste quand on la passe en argument. Toute modification de la liste dans la fonction est donc visible en dehors de la fonction.

Comme la liste est mutable, notre fonction possède ce qu’on nomme un effet de bord: quand on l’appelle, elle a des conséquences sur des objets qui existent en dehors d’elle même.

Pour les objets : Même principe: toute variable de classe pointe pour toute la durée du programme sur la même réference. La référence va être partagée entre toutes les instances de la classe. C’est donc la même liste !

```python
class glace():
    supplements = ['chantilly', 'praline']

g1 = glace()
g2 = glace()

g1.supplements.pop()
g2.supplements
# ['chantilly']
```








