---
Title: Debuter en Python
bookShowToc: false
---

# Python, un langage de programmation
## Un premier programme
Python est un *langage de programmation*. Comme d'autres langages, il permet d'exprimer des idées. Dans le cas d'un langage de programmation, ces idées sont appelées des *commandes*, et permettent de communiquer avec l'ordinateur.

Ces *commandes* peuvent être écrites dans un fichier texte, dont l'extension est `.py` (pour le langage Python). Ces fichiers sont appelés des *programmes*.

Executer un *programme* signifie que l'on demande à l'ordinateur de lire ce fichier, de le traduire en une suite d'opérations compréhensibles (pour lui), et de les réaliser.

On dit que chacune des *instructions* est *interprétée*.

```python
# mon premier programme
mon_nom = "Carl"
print("Bonjour et bienvenue " + mon_nom)
```

Lorsque l'on execute ce programme, il devrait s'afficher à l'écran:

`Bonjour et bienvenue Carl` 

> **Testez le** vous-même:

* Lancer l'interpréteur et editeur python: Dans le dossier *Winpython* de votre ordinateur, lancer le programme appelé **Spyder**.
* Dans la fenêtre de script **(1)**, au dessous des premières lignes, saisir les 3 instructions de votre programme (voir plus haut).



<figure>
  <img src="../images/spyder.png" alt="IDE Spyder">
  <figcaption>IDE Spyder</figcaption>
</figure>

* Sauvegardez votre fichier **(2)**. Donnez lui le nom `hello.py`. Mettez le dans votre dossier *mes Documents* (Windows).
* Executez le programme avec le bouton *Executer* **(3)**.
* Vous devriez voir l'affichage dans la console **(4)**.
* Remplacez *Carl* par votre propre nom. Modifiez le programme pour afficher, lorsque vous execcutez:

> **Bienvenue à toi, `<ton nom>`, parle et j'executerai !**


# Commentaire, sortie `print`, et variables
## Commentaire
**Commentaire**: tout ce qui est écrit sur la ligne commençant par `#` n'est pas interprété: il s'agit d'un commentaire.

## Sortie
**Sortie**: La fonction `print` est utilisée pour demander à l'ordinateur d'afficher un message. Celui-ci doit être écrit entre guillemets (simples ou double), et mis entre parenthèses. Il s'agit d'une *sortie*.

> *Exemple: `print("mon premier message")`* affiche: `mon premier message`

## Variables
**Variables**: Les langages de programmation permettent de stocker des données afin de pouvoir les réutiliser. Cela peut être un nom, un texte, une date, un identifiant... En python, on assigne une valeur à une variable en utilisant le symbole `=`.

> *Exemple: `mon_nom = Carl`* stocke `Carl` dans la variable `mon_nom`.

Lorsque l'on veut afficher le contenu d'une variable, on met cette variable SANS les guillemets, en argument de la fonction `print` (entre les parenthèses):

```
print(mon_nom)
```

Lorsque le programme arrive à cette instruction, il affiche:

`Carl`

*Remarque:* On peut choisir toute chaine de caractère pour nom de variable, de la simple lettre jusqu'à la longue chaine de caractères (sans espaces):

```
n = 2020
la_2e_meilleure_annee_de_ma_vie = 2020
```

# Opérations sur les variables
## Opérateur `+` sur les chaines de caractères
On vient de voir une première opération sur les chaines de caractères:

Lorsque l'on fait `"Bonjour et bienvenue " + mon_nom`, Python créé une nouvelle chaine de caractères en *ajoutant* les deux chaines: 

* `"Bonjour et bienvenue "` 
* et le contenu de la variable `mon_nom`.

On peut affecter l'ensemble à une nouvelle variable `message` puis l'afficher:

```
message = "Bonjour et bienvenue" + mon_nom
print(message)
``` 

L'affichage sera identique à celui du premier programme.

## Opération sur les entiers
Python peut aussi servir de calculatrice. On peut en effet réaliser toutes les opérations *classiques*, et plus encore. Ces opérations peuvent être réalisées, au choix, avec des nombres, ou avec des variables contenant ces nombres.

> **Testez** dans la console (Spyder, **(4)**) les exemples proposés pour chaque opérateur

| opérateur | opération réalisée | exemple |
|--- |--- |--- |
| + | addition | 12 + 10 |
| * | multiplication | a = 12 <br> b = 10 <br> a * b |
| / | division | 12 / 10 |
| // | division entière | 12 // 10 |
| - | soustraction | 10 - 12 |
| ** | exposant | 2**8 |
| e | puissance de 10 | 12e-3 <br> equivalent à <br> 0.012 |

## Types de variables
On vient de voir 3 types de variables possibles en python:

* Le type *chaine de caractères*, appelé **str**, comme par exemple: `Carl`
* Le type *entier*, appelé **int**, comme par exemple 12
* Le type *nombre décimal à virgule*, noté **float**, comme par exemple 1.2

Les opérations vues plus haut ne peuvent pas mélanger les types:

*Exemple:* Si on essaie d'ajouter une chaine de caractères avec un entier:

```python
message = 'Bienvenue en ' + 2021
```

<figure>
  <img src="../images/spyder2.png" alt="TypeError en console spyder">
  <figcaption>TypeError en console</figcaption>
</figure>

cela affiche un message d'erreur dans la console: Le *Traceback* vous permet de remonter jusqu'à la ligne où se situe l'erreur. Le type d'erreur, en rouge (ici, c'est un *TypeError*) ainsi qu'un message explicite, en blanc, vous permet de repérer et corriger l'erreur: L'interpréteur ne peut pas *ajouter* une chaine de caractère avec un entier.

Une solution, pour afficher le bon message, serait de remplacer `2021` par `"2021"`, entre guillemets, afin de le convertir en une autre chaine de caractères.

> **Testez le**. En console, essayez de faire: 

```python
message = 'Bienvenue en ' + 2021
print(message)
```

# TP: Débuter en Python
**But du jeu:** Traiter TOUTES les enigmes et sortir du labyrinthe.

Vous aurez besoin pour vous lancer dans l'aventure, de télécharger les 3 fichiers ci-dessous. Faire pour chaque fichier un *clic droit* et choisir *télécharger sous...*.

* [programme1.py](../datas/programme1.py)
* [programme2.py](../datas/programme2.py)
* [programme3.py](../datas/programme3.py)

Démarrez sur **D**. La Sortie est marquée par la lettre **A**. Vous traiterez toutes les enigmes sur votre chemin, voire, parfois, vous ferez des detours pour atteindre ces enigmes:
![](../images/play.png)

Vous aurez parfois besoin de revenir en arrière: Bouton: ![](../images/back.png)


<iframe src="https://trinket.io/embed/python/78730099d1?outputOnly=true" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


# Liens
[Retour](/docs/SNT_2nde/SNT_python/index.html)










