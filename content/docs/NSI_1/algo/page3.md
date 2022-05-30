---
Title: algorithmique avancé
---

# Le problème du rendu de monnaie
Le problème du rendu de monnaie est un problème d'algorithmique. Il s'énonce de la façon suivante : étant donné un système de monnaie (pièces et billets), comment rendre une somme donnée de façon optimale, c'est-à-dire avec le nombre minimal de pièces et billets ?

Par exemple, la meilleure façon de rendre 7 euros est de rendre un billet de cinq et une pièce de deux, même si d'autres façons existent (rendre 7 pièces de un euro, par exemple).

<figure>
  <img src="../images/caisse.png" width="350px" alt="caisse rendu monnaie">
  <figcaption>Image by <a href="https://pixabay.com/users/conmongt-1226108/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2048569">Christian Dorn</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2048569">Pixabay</a></figcaption></a>
</figure>

## algorithme naif
Une première idée, naïve serait de commencer par rendre la piece de plus grande valeur, puis sur la somme restante, la pièce un peu moins grande, et ainsi de suite.

> **S'entrainer à rendre la monnaie de manière optimale:**

<figure>
<a href="https://maths-au-quotidien.fr/college/caissiere.php" target=_blank>
<img src="../images/rendu_monnaie.png">
<figcaption>Cliquer pour lancer l'animation</figcaption>
</a>
</figure>

## Programmation Python
Pour une `somme` à rendre, et un systeme de monnaie appelé `caisse`, contenant par exemple la liste`[20, 10, 5, 1]`:

```python
caisse = [piece4, piece3, piece2, piece1]
rendu = {piece4 : 0, piece3: 0, piece 2: 0, piece1: 0}
tant que la somme a rendre est > 0:
  si la piece de montant caisse[i] est inferieure a somme:
    somme = somme - caisse[i]
    rendu[caisse[i]] += 1
```
On utilisera le notebook <i>TP5/rendu_monnaie_NSI1.ipynb</i> sur <a href="https://tix06.github.io/jupyterlite_NSI/lab/index.html" target="_blank">Jupyterlite</a>

