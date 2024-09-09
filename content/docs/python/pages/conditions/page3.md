---
Title: TP conditions
bookShowToc: false
---



# TP3: Structures conditionnelles
## Editeur Python
Au choix, utilisez:

* un **notebook**. 

{{< img src="/images/notebook.png" >}}

Dans une même **cellule**: Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

* l'editeur **Pyzo**:

Mettre **`##`** avant chaque script pour créer une *cellule*. Executer la cellule et passer à la suivante avec *MAJ+CTRL+ENTREE*.

* l'editeur **Spyder**:

Mettre **`#%%`** avant chaque script pour créer une *cellule*. Executer la cellule et passer à la suivante avec *MAJ+ENTREE*.

{{< img src="../images/cell.png" >}}

## Exemple
Le programme suivant demande de renseigner votre age (à la premiere ligne), et vous laisse entrer en discothèque, seulement si vous avez plus de 18 ans:

```python
age = input('Quel age avez-vous? ')
age = int(age)
if age >18:
    print('Vous pouvez entrer')
elif age == 18:
    print('Montrez moi votre carte d identite SVP')
else:
    print('Desole, ca ne va pas etre possible')
```

Cette structure servira pour les prochains scripts.

# Enoncé des exercices
## Ex 1: test sur un nombre divisible
Le script suivant permet de tester la parité d'un nombre `n`. Saisir dans l'editeur Python le script suivant.

```python
n = 33
if n%2 == 0:
  print("n est pair")
else: 
  print("n est impair")
```

> Tester puis adapter ce script, pour demander à l’utilisateur un entier, puis afficher si cet entier est divisible par 11.

* **Question a:** Recopier ce nouveau programme.



## Ex 2: Comparer 2 nombres
> Completer (et tester avec plusieurs valeurs de a et de b) le programme suivant qui compare a et b et retourne un message selon leur ordre ou leur egalité.

```python 
a = 10
b = 20
if a ... :
  print("a est plus grand que b")
elif ... :
  print("a et b sont égaux")
else:
  print(...)
```

* **Question b:** Qui a la plus grande valeur parmi `a` et `b` après le `else`?

## Ex 3: Comparer 3 nombres
### version 1
> Completer (et tester avec plusieurs valeurs de a de b et de c) le programme suivant qui compare a, b et c, et retourne un message précisant le plus grand des 3.

On suppose que les 3 nombres a, b et c ne sont jamais égaux. On utilisera l'opérateur `and` qui retourne `True` si les 2 conditions (à gauche et à droite de `and`) sont toutes les 2 évaluées à `True`, `False` sinon.

```python
a = 10
b = 20
c = 11
if a > b and a > c:
  print("a est le plus grand")
elif ...
```

* **Question c:** Combien de `elif` faut-il utiliser au minimum?

### version 2
> Completer (et tester avec plusieurs valeurs de a de b et de c) le programme suivant (version 2) qui compare a et b et retourne un message selon leur ordre.

Cette fois, on **n'utilisera pas** l'opérateur `and`, ce qui oblige à utiliser 2 structures conditionnelles imbriquées.

```python
a = 10
b = 20
c = 11
if a > b:
  if a > c:
    print("a est le plus grand")
  ...
...
```

* **Question d:** Traduire en langage naturel la double condition pour laquelle `a` est le plus grand: *si ... ... ... alors si ... ... ... alors ...*

## Ex 4: IMC
L'Indice de Masse Corporelle (IMC) est un indicateur chiffré utilisé en médecine. L'IMC d'une personne est donné par la formule:

$$IMC = \tfrac{masse}{taille^2}$$

où la masse est en kilos et la taille en mètres.

Proposez un algorithme qui demande à l'utilisateur sa taille et sa masse puis qui affiche l'IMC de la personne.

*Pensez à écrire un texte clair à destination de l'utilisateur pour qu'il sache quoi saisir.*

Utilisez le tableau suivant pour fournir une information à la personne en fonction de son IMC:

{{< img src="../images/imc.png" alt="classification de l'IMC" caption="classification de l'IMC - source: has-sante.fr" >}}

* **Question e:** Recopier la série d'instructions conditionnelles qui affichent une information sur l'IMC.

# Utiliser des fonctions
*Définition : Une fonction est un bloc de code auquel on donne un nom en vue de le reutiliser. L’appel de son nom exécute tout le bloc de code que cette fonction contient.*

Voir le cours: [Lien](/docs/python/pages/fonctions/page1/)

Une fonction possède des paramètres, mis entre parenthèses et séparés chacun par une virgule. Une fonction retourne une valeur ou un objet, mis après le mot-clé `return` 

Avec le programme en exemple:

```python
age = input('Quel age avez-vous? ')
age = int(age)
if age >18:
    print('Vous pouvez entrer')
else:
    print('Desole, ca ne va pas etre possible')
```

* les entrées et variables sont mises en paramètre: il s'agit de `age`
* Les `print` sont remplacés par `return`
* Il faut choisir un nom à la fonction, écrit après `def`

```python
def entrer_en_discotheque(age):
  if age >18:
      return 'Vous pouvez entrer'
  else:
      return 'Desole, ca ne va pas etre possible'
```

Lorsque vous executez le programme, ... il ne se passe rien. Vous avez seulement *chargé* la fonction.

Il faut appeler la fonction pour que celle-ci soit executée. 

Voici un exemple d'execution d'une fonction à partir du shell. 

{{< img src="../images/spyder_fct.png" caption="1:charger la fonction (executer cellule), 2: appel, 3: sortie" >}}

Son execution cesse lorsqu'elle arrive à l'instruction `return`. Le programme reprend alors son cours.

> Créer une fonction que vous nommerez IMC à partir de votre script de l'exercice 4. Testez la dans le shell de votre editeur.

# Portfolio
* Ecrire les fonctions pour chacun des programmes, pour remplacer les scripts: `parite`, `est_divisible`, `compare_2_nombres`, `compare_3_nombres`.
* Compléter le tableau suivant avec le nom et les paramètres que vous avez choisis pour les fonctions précédentes.

| nom de la fonction | paramètre-s | valeur de retour |
|--- |--- |--- |
| `entrer_en_discotheque` | `age` | 'vous entrez' si `age`>=18, 'desole' sinon |
| `parite`  | `N`  |   |
|  ... |   |   |


# Liens
* [TP1 sur les opérations et types de base](../../generalites/page2)
* [TP2 sur les variables](../../variables/page4/)
* [cours: structures conditionnelles](../../conditions/page2/)
* [TP3 conditions et fonctions](../../conditions/page3/)
* [TP4 Boucles non bornées - while](../../conditions/page4/)


