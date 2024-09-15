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
Le programme suivant demande de renseigner votre age (à la premiere ligne), et vous laisse entrer en discothèque, seulement si vous avez plus de 18 ans. La fonction `input` est ce que l'on appelle une **entrée**. Elle permet se saisir une valeur qui sera *utilisée par le programme*. La valeur saisie par l'utilisateur sera TOUJOURS de type **str**.

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

> Tester puis adapter ce script, pour demander à l’utilisateur un entier, puis afficher si cet entier pair.

*Aide:* Vous devrez utiliser la fonction de conversion `int` pour transformer la valeur saisie par l'utilisateur en un entier: `n = int(input(' ... '))` 

* **Question a:** Recopier ce nouveau programme.



## Ex 2: Comparer 2 nombres
> Completer (et tester avec plusieurs valeurs de a et de b) le programme suivant qui compare a et b et retourne un message selon leur ordre ou leur egalité.

```python 
a = int(input("entrer la valeur de a: "))
b = int(input("entrer la valeur de a: "))
if a ... :
  print("a est plus grand que b")
elif ... :
  print("a et b sont égaux")
else:
  print(...)
```

* **Question b:** Qui a la plus grande valeur parmi `a` et `b` après le `else`?



## Ex 3: IMC
L'Indice de Masse Corporelle (IMC) est un indicateur chiffré utilisé en médecine. L'IMC d'une personne est donné par la formule:

$$IMC = \tfrac{masse}{taille^2}$$

où la masse est en kilos et la taille en mètres.

Proposez un algorithme qui demande à l'utilisateur sa taille et sa masse puis qui affiche l'IMC de la personne.

*Pensez à écrire un texte clair à destination de l'utilisateur pour qu'il sache quoi saisir.*

Utilisez le tableau suivant pour fournir une information à la personne en fonction de son IMC:

{{< img src="../images/imc.png" alt="classification de l'IMC" caption="classification de l'IMC - source: has-sante.fr" >}}

* **Question e:** Recopier la série d'instructions conditionnelles qui affichent une information sur l'IMC.

## Ex 4: Compter les ballons 
On utilise un programme pour compter le nombre de ballons touchés lors d'un jeu de fête foraine.

{{< img src="../images/ballons.jpg" caption="tir aux ballons" >}}

source image: {{< a link="https://fr.vecteezy.com/membres/stockgiu" caption="vecteezy - Giuseppe Ramos" >}}

Lorsqu'un ballon est touché, il faut saisir "O". Lorsque le ballon est manqué, saisir un "X". Le jeu termine lorsque le nombre total de tirs est égal à 6.

Les variables utilisées seront: 

* `n`: compteur du nombre total de tirs
* `touches`: nombre de ballons touchés
* `manques`: nombre de ballons manqués
* `choix`: caractère saisi par le joueur ("O" ou "X")

> Ecrire et tester le script du programme. Afficher le score à la fin du jeu.

```python
n = 0
touches = 0
manques = 0
while ...:
  choix = input("X pour manqué ou O pour touché: ")
  if ...
```

* **Question f**: Dans votre programme, quel est le variant de boucle? Etes-vous sûr que le programme finira, quelles que soient les entrées saisies par l'utilisateur?

<!--
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
-->

# Portfolio
* Quand faut-il utiliser `input("blabla")` ou `int(input("blabla"))`?
* A quoi sert l'indentation en python sous une instruction conditionnelle?
* Que faut-il contrôler dans une boucle non bornée (`while`) pour s'assurer que celle-ci finira toujours?



# Liens
* [TP1 sur les opérations et types de base](../../generalites/page2_D)
* [TP2 sur les variables](../../variables/page4_D/)
* [cours: structures conditionnelles](../../conditions/page2_D/)
* [TP3 structures conditionnelles](../../conditions/page3_D/)



