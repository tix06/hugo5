---
Title: fonctions python NSI1_1
---

# Fonctions programmées
Les fonctions permettent de rendre le script plus efficace, plus facile à lire et à vérifier. Un bonne pratique est de faire régulierement du *remaniement* de son code : C'est à dire ré-écrire les parties du programme qui *fonctionnent* et les mettre dans une fonction ou un module. Cela evite aussi les répétitions. On remplace alors le code par un appel à une fonction.



> *Définition :* Une fonction est un bloc de code auquel on donne un nom en vue de le reutiliser. L'appel de son nom exécute tout le bloc de code que cette fonction contient.

Pour créer une fonction, il faut la definir avec le mot clé `def`, suivi du nom de la fonction, d'une paire de parenthèses suivies de `:`.

## Return
La fonction peut retourner une valeur. Celle-ci est alors mise après le mot clé `return`.

*Exemple:* 

```python
def salut():
  """Accueillir tout le monde"""
  return 'bonjour tout le monde'
```

On appelle cette fonction à l'aide de son nom, suivi des parenthèses : 

```python
salut()
# retourne (et affiche) 'bonjour tout le monde'
```

Souvent, cette donnée retournée doit être *affectée à une variable*:

```python
message = salut()
print(message)
# affiche: bonjour tout le monde
```

# Travaux pratiques 
## fonction sans paramètre
Un cours sur les fonctions se trouve à la page suivante: [Lien](/docs/python/pages/fonctions/page2/)

* *Question a*: Ecrire une fonction appelée `etoiles` en python qui écrit une série de 5 symboles `*`, séparés chacun par un espace:

```
* * * * * 
```

> Appeler (exécuter) la fonction: faire suivre le nom de la fonction par des parenthèses `()`: 

```
> etoiles()
```

Pour afficher la ligne, faire: `print(etoiles())`

> utiliser une **boucle bornée** pour répéter 5 fois l'appel de la fonction et afficher l'image suivante:

```
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
```



* *Question b*:  **Sur document-reponse:** Recopier le script utilisé

## Fonction avec paramètres
### Principe
Souvent, la fonction calcule sur un ou plusieurs paramètres qui lui sont passés lors de l'appel de la fonction.

Pour prévoir ceci, il faudra définir un ou plusieurs paramètres lors de la constuction de la fonction.

Par exemple, si l'on souhaite améliorer la fonction `salut` et personnaliser le message:

```python
def salut(nom):
  """Accueillir chacun par son nom"""
  return 'bonjour '+ nom
```

> Tester cette fonction avec les prenoms successifs de John, Paul, Ringo et George.

Vous devrez afficher en console:

```
bonjour John
bonjour Paul
bonjour Ringo
bonjour George
``` 

**ex1:** Recopier le script sur votre *feuille réponse*. 

*Attention, lors de l'appel de la fonction, il devra y avoir autant d'arguments que de paramètres définis (donc un seul pour ce dernier exemple).* 

## TP: ASCII-art
On cherche à realiser des figures en à partir de caractères, comme vu dans le paragraphe precedent.



**ex2:** Utilisez la fonction `etoiles` pour que celle-ci utilise un paramètre **(nb)**. Ce paramètre definit le nombre d'espaces entre les 2 symboles `*` de la ligne. La ligne n'affiche que 2 symboles `*`. 

Par exemple, `etoiles(5)` retourne `*     *` avec 5 espaces:

```python
def etoiles(nb):
    return '*' + nb*' ' + '*'
``` 

**ex3:** afficher la figure suivante (un seul espace à chaque ligne entre 2 etoiles)?

```python
for i in range(..):
  print(etoile(..))

# resultat
* *
* *
* *
* *
```



**ex4:** Vous appelerez ensuite cette fonction avec des arguments judicieusement choisis, afin de dessiner les figures suivantes:

figure 1:

```python
for i in range(..):
  print(etoile(..))

# resultat
**
* *
*  *
*   *
*    *
```

figure 2:

```
*    *
*   *
*  *
* *
**
```

figure 3:
```
**
* *
*  *
*   *
*    *
*    *
*   *
*  *
* *
**
```

*Astuce: avez vous fait en sorte d'utiliser au maximum des boucles bornées avec un variant de boucle?*

**ex5:** modifier la fonction ainsi que le programme pour afficher maintenant un sapin de Noel:

```
      **
     *  *
    *    *
   *      *
  *        *
      **
      **
```

# Fonctions utiles pour calculer
## Loi de Descartes
On propose de programmer les fonctions qui seront utiles pour aider au calcul de l'angle de refraction **r** lors de la traversée d'un rayon à la surface d'un dioptre.

L'angle **r** est donné par la relation:

$$n_1\times sin(i_1) = n_2\times sin(i_2)$$

Où **i** est l'angle d'incidence, n<sub>1</sub> et n<sub>2</sub> sont les indices de refraction des milieux traversés.

{{< img src="../images/descartes.png" caption="schema de la refraction sur diotre plan" >}}
## Fonction  degrès - radians
Python manipule les angles en radians pour les fonctions trigonometriques.

Commençont par programmer la fonction qui transforme les angles de degrès en radians:

```python
def fonc1(angle):
    radian = angle * 3.14/180
    return radian
```

On peut alors tester la fonction:

```python
>>> fonc1(90)
...
```

Le résultat manque de précision à cause de la valeur utilisée pour PI. Il faut alors importer le module `math` pour avoir la valeur precise de PI 

> Importer ce module. Et afficher en console la valeur de PI:

```python
import math
math.pi
```

Puis modifier la fonction `fonc1` en `fonc2`:

```python
def fonc1(angle):
    radian = angle * math.pi/180
```

## Fonctions `sin` et `asin` du module math
Le module `math` apporte aussi les fonctions trigonométriques `sin` et son inverse `asin`. 


> Tester ces fonctions pour quelques valeurs:

* `math.sin(1.57)`

* `math.sin(math.pi/2)`

* `math.asin(1)`


## Fonction à plusieurs paramètres
On cherche maintenant à écrire la fonction qui permettra de calculer l'angle **r** selon la relation:

$$r = asin(\tfrac{n_1\times sin(i_1)}{n_2})$$

On definira une fonction appelée `angleRefraction`, qui aura cette fois 3 parametres `i1, n1, n2`. Ces 3 paramètres seront écrits entre parenthèses, séparés par une virgule:

```python
def angleRefraction(i1,n1,n2):
    radian = fonc1(i1)
    r = math.asin(...           ...)
    return r * 180 / math.pi
```

> Compléter les pointillés `...` 

> Tester votre fonction: avec un angle d'incidence de 30°, des indices de refraction n1=1 et n2=1.5, on doit avoir r = 19.47°.

**ex 7**: Recopier le script de la fonction `angleRefraction`, ainsi que l'instruction utilisée pour résoudre l'exercice.

# Compléments
* Un cours sur les fonctions se trouve à la page suivante: [Lien](/docs/python/pages/fonctions/page2/)

<!--
# Fonctions utiles pour la représentation des nombres en binaire
## Inversion de bits
On veut créer une fonction `inverse_bits` qui fait le complement à 1 de la chaine de bits passée en argument.

La boucle bornée `for` peut aussi servir à parcourir une chaine de caractères. Le variant de boucle prend alors successivement la valeur de chacun des caractères.

On utilise N comme paramètre qui devra contenir une chaine de caractères binaires (des 0 et des 1, entre guillemets, comme par ex '11000001').

On definit dans la fonction une variable interne `inverse`, qui stocke les bits au fur et à mesure de l'écriture de la sequence inversée.

Voici le debut de la fonction:

```python
def inverse_bits(N):
    inverse = ''
    for bit in N:
        if bit == '0':
```

**ex1.** Compléter cette fonction. Tester alors celle-ci pour vérifier son bon fonctionnement.

## Complément à 2
**ex2.** Programmer la fonction qui réalise le complément à 2 d'un nombre entier signé. Tester alors cette fonction à partir des résultats donnés pour quelques entiers signés à partir du site [http://www.binaryconvert.com](http://www.binaryconvert.com/index.html)

# Mini projet: jeu du shifumi
## version de niveau intermediaire
Créer en console un jeu du Shifumi (Pierre-Feuille-Ciseaux)

* Le jeu questionne le joueur pour connaitre son choix (`input en console`)
* le joueur rentre une valeur de 0 à 2 selon son choix
* l'ordinateur tire au hasard une valeur entre 0 et 2
* Le programme evalue lequel des deux, joueur ou ordinateur remporte la manche.

On pourra ajouter un compteur et permettre au joueur de jouer plusieurs parties d'affilée.

* Au fur et à mesure de votre avancée dans le projet, vous devrez tenir à jour un fichier `readme.txt` expliquant les tâches effectuées.

## version du projet difficile

* Telecharger le dossier à l'adresse: [/scripts/TP3_fonctions_shifumi.zip](/scripts/TP3_fonctions_shifumi.zip)

* Completer le script du fichier `shifumi_gameplay.py` afin de proposer un jeu complet contre l'ordinateur, avec affichage du score.

* Remarquer que la sequence Pierre-Feuille-Ciseaux-Pierre suit un ordre que l'on peut modéliser à l'aide de la fonction modulo (`//`).

* Au fur et à mesure de votre avancée dans le projet, vous devrez tenir à jour un fichier `readme.txt` expliquant les tâches effectuées.

-->
