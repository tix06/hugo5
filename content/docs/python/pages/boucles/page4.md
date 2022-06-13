---
Title: TP2 listes et boucles
bookShowToc: false
---

  
  <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
  <style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
<py-env>
    - matplotlib
</py-env>

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div >
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

# TP2: Boucles bornées et parcours d'une liste
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

## Ex 2: table de 3

```python
L = []
for  i in  range(11):
  L.append(i  * 3)
```

* **Question b:** Que vaut la liste `L` après ce programme? Quelles sont les valeurs prises par l'iterable `i`? 

## Ex 3: Energies en SPC
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

Pour réaliser cela, vous completerez la boucle bornée sur les valeurs de `vitesse`:

```python
for v in vitesse:
  E.append(...)
```

* **Question c:** Afficher le graphique de l'Energie cinétique E au cours du temps. (abscisses: t, ordonnées: E). Recopier le script entier dans votre cahier. Identifier dans le script les parties qui servent à:
  * déclarer des variables et des listes
  * calculer les termes d'une liste avec une boucle bornée
  * importer un module
  * tracer un graphique

## Ex 4: algorithmes simples utilisant une boucle bornée
Le script suivant calcule la somme des 99 premiers entiers:

$$0 + 1 + 2 + 3 + ...99$$

> Tester ce script et lire le résultat.

```python
somme = 0
for n in range(100):
  somme = somme + n
somme
```

* **Question d:** adapter ce script pour que celui-ci calcule la somme des termes 2<sup>i</sup> pour `i` variant de 0 à 99: $$2^0 + 2^1 + 2^2 + ... + 2^{99}$$

* **Question e:** adapter ce script pour calculer le nombre de boules de la pyramique à 7 étages suivante. Quel est ce nombre? Quel serait ce nombre pour une pyramide à 99 étage?

<figure>
  <img src="../images/pyramide.jpeg">
  <figcaption>ID 32142797 © [Ekostsov](https://fr.dreamstime.com/ekostsov_info) | Dreamstime.com</figcaption>
</figure>

