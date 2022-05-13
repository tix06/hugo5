---
Title: bac donnees structurees2
---

# Bac 2022 Polynesie: Exercice 5
*Cet exercice traite du thème « algorithmique », et principalement des algorithmes sur les arbres binaires.*

On manipule ici les arbres binaires avec trois fonctions :

* `est_vide(A)` qui renvoie `True` si l'arbre binaire `A` est vide, `False` s'il ne l'est pas ;
* `sous_arbre_gauche(A)` qui renvoie le sous-arbre gauche de l'arbre binaire `A` ;
* `sous_arbre_droit(A)` qui renvoie le sous-arbre droit de l'arbre binaire `A`.
 
L'arbre binaire renvoyé par les fonctions `sous_arbre_gauche` et `sous_arbre_droit` peut éventuellement être l'arbre vide.

On définit la **hauteur** d'un arbre binaire non vide de la façon suivante :

* si ses sous-arbres gauche et droit sont vides, sa hauteur est 0 ;
* si l'un des deux au moins est non vide, alors sa hauteur est égale à 1 + M, où M est la plus grande des hauteurs de ses sous-arbres (gauche et droit) non vides.

## Question 1
A. Donner la hauteur de l'arbre ci-dessous.
 
<figure>
  <img src="../images/page3_1.png">
  <figcaption>304 × 232</figcaption>
</figure>


B. Dessiner sur la copie un arbre binaire de hauteur 4.

La hauteur d'un arbre est calculée par l'algorithme récursif suivant :

```
Algorithme hauteur(A):
  test d'assertion : A est supposé non vide
  si sous_arbre_gauche(A) vide et sous_arbre_droit(A) vide:
    renvoyer 0
  sinon, si sous_arbre_gauche(A) vide:
    renvoyer 1 + hauteur(sous_arbre_droit(A))
  sinon, si ... :
    renvoyer ...
  sinon:
    renvoyer 1 + max(hauteur(sous_arbre_gauche(A)),
    hauteur(sous_arbre_droit(A)))
```

## Question 2
Recopier sur la copie les lignes 7 et 8 en complétant les points de suspension.
## Question 3
On considère un arbre binaire `R` dont on note `G` le sous-arbre gauche et `D` le sous-arbre droit. On suppose que `R` est de hauteur 4 et `G` de hauteur 2.

A.  Justifier le fait que `D` n'est pas l'arbre vide et déterminer sa hauteur.

B.  Illustrer cette situation par un dessin.

Soit un arbre binaire non vide de hauteur h. On note `n` le nombre de nœuds de cet arbre. On admet que $h+1 \leqslant n \leqslant 2^{h+1}−1$.

## Question 4
A.  Vérifier ces inégalités sur l'arbre binaire de la question 1.A.

B.  Expliquer comment construire un arbre binaire de hauteur h quelconque
ayant h+1 nœuds.

C. Expliquer comment construire un arbre binaire de hauteur h quelconque ayant
$2^{h+1}−1$ nœuds.

*Indication* : $2^{h+1}−1 = 1+2+4+...+2^h$

L'objectif de la fin de l’exercice est d'écrire le code d'une fonction `fabrique(h, n)` qui prend comme paramètres deux nombres entiers positifs `h` et `n` tels que $h+1 \leqslant n \leqslant 2^{h+1}−1$, et qui renvoie un arbre binaire de hauteur h à n nœuds.

Pour cela, on a besoin des deux fonctions suivantes:

* `arbre_vide()`, qui renvoie un arbre vide ;
* `arbre(gauche, droit)` qui renvoie l'arbre de fils gauche `gauche` et de fils
droit `droit`.

## Question 5
Recopier sur la copie l'arbre binaire ci-dessous et numéroter ses nœuds de 1 en
1 en commençant à 1, en effectuant un parcours en profondeur préfixe.

<figure>
  <img src="../images/page3_2.png">
  <figcaption>546 × 322</figcaption>
</figure>

La fonction `fabrique` ci-dessous a pour but de répondre au problème posé. Pour cela, la fonction `annexe` utilise la valeur de `n`, qu'elle peut modifier, et renvoie un arbre binaire de hauteur `hauteur_max` dont le nombre de nœuds est égal à la valeur de `n` au moment de son appel.

```python
def fabrique(h, n):
  def annexe(hauteur_max):
    if n == 0 :
      return arbre_vide()
    elif hauteur_max == 0:
      n = n - 1
      return ...
    else:
      n = n - 1
      gauche = annexe(hauteur_max - 1)
      droite = ...
      return arbre(gauche, droite)
  return annexe(h)
```

## Question 6
Recopier sur la copie les lignes 7 et 11 en complétant les points de suspension.

# Bac 2022 Mettropole 1: Exercice 4
*Cet exercice, composé de deux parties A et B, porte sur le parcours des arbres
binaires, le principe “diviser pour régner” et la récursivité.*

Cet exercice traite du calcul de la somme d’un arbre binaire. Cette somme consiste à additionner toutes les valeurs numériques contenues dans les nœuds de l’arbre.

L’arbre utilisé dans les parties A et B est le suivant :

<figure>
  <img src=../images/page3_3.png>
  <figcaption>314 × 252</figcaption>
</figure>

## Partie A : Parcours d’un arbre
## Question 1
Donner la somme de l’arbre précédent. Justifier la réponse en explicitant le calcul qui a permis de l’obtenir.

## Question 2
Indiquer la lettre correspondante aux noms ‘racine’, ‘feuille’, ‘nœud’, ‘SAG’ (Sous Arbre Gauche) et ‘SAD’ (Sous Arbre Droit). Chaque lettre **A, B, C, D** et **E** devra être utilisée une seule fois.

<figure>
  <img src=../images/page3_4.png>
  <figcaption>Arbre avec les lettres à associer - 578 × 310</figcaption>
</figure>


## Question 3
Parmi les quatre propositions A, B, C et D ci-dessous, donnant un parcours en
largeur d’abord de l’arbre, une seule est correcte. Indiquer laquelle.

* **Proposition A :** 7 - 6 - 4 - 3 - 9 - 2 - 1
* **Proposition B :** 3 - 6 - 7 - 4 - 2 - 9 - 1
* **Proposition C :** 3 - 6 - 2 - 7 - 4 - 9 - 1
* **Proposition D :** 7 - 4 - 6 - 9 - 1 - 2 – 3

## Question 4
Écrire en langage Python la fonction somme qui prend en paramètre une liste de
nombres et qui renvoie la somme de ses éléments.

Exemple : `somme([1, 2, 3, 4])` est égale à 10. 

## Question 5
La fonction `parcourir(arbre)` pourrait se traduire en langage naturel par :

```python
parcourir(A):
  L = liste_vide
  F = file_vide
  enfiler A dans F
  Tant que F n est pas vide
    défiler S de F
    ajouter la valeur de la racine de S dans L
      Pour chaque sous arbre SA non vide de S
        enfiler SA dans F
  renvoyer L
``` 

Donner le type de parcours obtenu grâce à la fonction `parcourir`.

## Partie B : Méthode ‘diviser pour régner’
## Question 6
Parmi les quatre propositions A,B, C et D ci-dessous, indiquer la seule
proposition correcte.

En informatique, le principe diviser pour régner signifie :

* **Proposition A**: diviser une fonction en deux fonctions plus petites
* **Proposition B**: utiliser plusieurs modules
* **Proposition C**: séparer les informations en fonction de leur types
* **Proposition D**: diviser un problème en deux problèmes plus petits et
indépendants.

## Question 7
L’arbre présenté dans le problème peut être décomposé en racine et sous
arbres : 

<figure>
  <img src=../images/page3_5.png>
  <figcaption>376 × 258</figcaption>
</figure>

Indiquer dans l’esprit de ‘diviser pour régner’ l’égalité donnant la somme d’un arbre en fonction de la somme des sous arbres et de la valeur numérique de la racine. 

## Question 8
Écrire en langage Python une fonction récursive `calcul_somme(arbre)`.
 Cette fonction calcule la somme de l’arbre passé en paramètre.
 Les fonctions suivantes sont disponibles :

* `est_vide(arbre)` : renvoie `True` si `arbre`est vide et renvoie `False`
sinon ;
* `valeur_racine(arbre)` : renvoie la valeur numérique de la racine de
`arbre`;
* `arbre_gauche(arbre)` : renvoie le sous arbre gauche de `arbre`;
* `arbre_droit(arbre)` : renvoie le sous arbre droit de `arbre`. 
