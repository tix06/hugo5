---
Title: TP2 listes, indices, méthodes
bookShowToc: false
---

  
**Rappels de cours sur les listes**

* [page 1: listes et boucles bornées](/docs/python/pages/boucles/page2/)
* [page 2: types construits: list, tuple, dict](/docs/python/pages/variables/page2/)

**Editeur Python**

* Utiliser un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.




# TP6: Boucles bornées et parcours d'une liste
<!--
## Ex 1: Parcours d'une liste

* script 1

```python
L = [1, 10, 100, 1000]
for i in L:
  print(i)
```
* script 2

```python
L = [1, 10, 100, 1000]
for i in range(len(L)):
  print(i)
```
* **Question a:** Lequel des 2 scripts précédents affiche `1 10 100 1000`? Lequel des 2 affiche `0 1 2 3`? Expliquez.

-->
## Ex 1: table de 3
On peut créer une liste VIDE, en faisant `L = []`, puis lui ajouter des valeurs. C'est ce qui doit être réalisé par ce programme.

```python
L = []
for  i in  range(11):
  L.append(...)
```

> Recopier et compléter le programme. Celui-ci doit compléter la liste avec les valeurs de la table de 3.

* **Question a1:** Que vaut la liste `L` après ce programme? Quelles sont les valeurs prises par l'iterable `i`? 

* **Question a2:** Comment avez vous complété les `...`? Comment feriez-vous pour compléter les valeurs de la table de 7?

> Ecrire l'instruction en compréhension de liste qui construit la liste L. (voir cours sur les types sequentiels > listes > [comprehension de liste](/docs/python/pages/variables/page2/))

## Ex 2: Energie en sciences physiques
On donne les listes de relevés du temps et de la vitesse pour un mobile. 

La vitesse `vitesse[0]`est relevée au temps `t[0]`, `vitesse[1]`est relevée au temps `t[1]`, etc...

```python
t = [0,0.04,0.08,0.12,0.16,0.2,0.24]
vitesse = [5.2,4.8,4.41,4.02,3.63,3.23,2.84]
```

Dans une cellule Python, 

* Recopiez les 2 listes et leur contenu
* commencez par attribuer 100 à la variable `m`.
* créez une liste vide pour l'énergie: `E = []`
* calculer les éléments de la liste `E`, l'energie cinetique pour un systeme de masse 100kg et de vitesse v, selon la loi:

`E = 1/2 * m * v**2`

> Pour réaliser cela, vous completerez la boucle bornée sur les valeurs de `vitesse`:

```python
for v in vitesse:
  E.append(...)
```

> Ecrire l'instruction en compréhension de liste qui construit la liste E. (voir cours sur les types sequentiels > listes > [comprehension de liste](/docs/python/pages/variables/page2/))

* **Question b:** Recopier le script sur votre feuille.

<!--
* **Question c:** Afficher le graphique de l'Energie cinétique E au cours du temps. (abscisses: t, ordonnées: E). Recopier le script entier dans votre cahier. Identifier dans le script les parties qui servent à:
  * déclarer des variables et des listes
  * calculer les termes d'une liste avec une boucle bornée
  * importer un module
  * tracer un graphique
-->

## Ex 3: algorithmes simples utilisant une boucle bornée
Le script suivant calcule la somme des 99 premiers entiers:

$$0 + 1 + 2 + 3 + ...99$$

> Tester le script suivant et lire le résultat.

```python
somme = 0
for n in range(100):
  somme = somme + n
somme
```

* **Question d:** adapter ce script pour que celui-ci calcule la somme des termes $2^i$ pour `i` variant de 0 à 99: $$2^0 + 2^1 + 2^2 + ... + 2^{99}$$

* **Question e:** adapter ce script pour calculer le nombre de boules de la pyramique à 7 étages suivante. Quel est ce nombre? Quel serait ce nombre pour une pyramide à 99 étage?

{{< img src="../images/pyramide.jpeg" caption="ID 32142797 © [Ekostsov](https://fr.dreamstime.com/ekostsov_info) | Dreamstime.com" >}}

## Ex 4: Autres types construits
### Tuple
Soit le tuple `T` suivant:

```python
T = (("A",1),("B",2),("C",3))
```

L'interpreteur python construit l'objet `T` de la manière suivante:

{{< img src="../images/tuple1.png" caption="image - pythontutor" >}}

Lorsque l'on utilise la boucle bornée:

```python
for elem in T:
```

...cela créé un itérable (un ensemble), comme sur l'image suivante:

{{< img src="../images/tuple2.png" caption="en orange: ensemble des itérables" >}}

> Ecrire un programme qui parcourt les éléments de `T`, et affiche le caractère lu à la première position: 

```
"A"
"B"
"C"
```


### Dictionnaire
On souhaite construire un dictionnaire python `D` à partir du tuple `T`.

Les caractères seront les clés du dictionnaire, et les entiers, les valeurs correspondantes.

On souhaite que `D` soit constitué de: `{"A":1,"B":2,"C":3}`

> Adapter le script précédent pour construire `D` à partir des éléments de `T`.

On peut aussi construire un dictionnaire par compréhension, en une seule ligne.

*Exemple:*

```python
>>> L1 = ("a","b","c")
>>> dico = {i:L1[i] for i  in range(len(L1))}
>>> dico
{0: 'a', 1: 'b', 2: 'c'}
```

> Construire le dictionnaire `D` par compréhension de dictionnaire.

# Portfolio
* Utiliser l'un des exemples utilisant une compréhension de liste pour repérer ce qu'est le variant de boucle, à quels endroits il faut le placer pour construire la liste.

# Liens 
* activité sur les copies par valeur et par reference: [pythontutor](/docs/python/pages/variables/page3/)
* TP5 [listes, indices, méthodes](/docs/python/pages/boucles/page3/)
* TP6 [boucles et parcours de liste](../page4)
