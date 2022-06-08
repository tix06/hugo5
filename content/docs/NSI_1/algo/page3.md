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
  sinon:
    changer de piece
```
On utilisera le notebook <i>TP5/rendu_monnaie_NSI1.ipynb</i> sur <a href="https://tix06.github.io/jupyterlite_NSI/lab/index.html" target="_blank">Jupyterlite</a>

## Amélioration de la méthode
Quelques essais avec le script précédent montrent que le rendu n'est pas toujours optimal. Il faut envisager d'**autres possibilités** de rendre la monnaie. 

Une autre méthode pourrait être de mélanger l'ordre des pieces utilisées pour le rendu de monnaie. On pourrait alors imaginer que l'on rend la monnaie avec la premiere piece de la caisse (pas forcément la plus haute), puis la 2e, etc...

On créé alors une combinaison de caisses, par permutation des pieces. On teste les possibilités pour chacune d'entre elles, en recherchant celle qui donne une solution optimale. *Par exemple, avec une caisse `[50, 10, 1]`, il y a aussi `[50,1,10], [10, 50, 1],` ... soit en tout 6 caisses différentes par permutations*

Le rendu avec une piece se fait comme dans la méthode précédente: On rend autant de pieces possibles pour une valeur de piece donnée. *Par exemple, pour rendre 16 euros avec une piece de 5, on rend 3 pieces*.

On utilisera le notebook <i>TP5/rendu_monnaie_NSI1.ipynb</i> sur <a href="https://tix06.github.io/jupyterlite_NSI/lab/index.html" target="_blank">Jupyterlite</a>

## Questions
1. Parfois la solution est impossible à trouver, il n'y a pas de rendu possible avec la caisse considérée: V / F
2. La solution dépend de l'ordre des pieces dans la caisse: V / F
3. La solution est toujours optimale en commençant par rendre la monnaie avec la plus grande piece, puis la piece moins grande, etc...: V / F
4. Avec la 2e méthode, celle des permutations de caisse: cette méthode permet de tester toutes les possibilités, toutes les combinaisons possibles pour le rendu de monnaie: V / F
5. Suposons que le programme, pour la méthode 2, commence par calculer le rendu pour pour la somme 99 avec la caisse `[50,10,1]`. Plus loin, dans le programme, il calcule le rendu pour 99 avec la caisse `[50, 1, 10]`. Doit-il aller au bout du calcul de la solution avec cette autre caisse, ou bien, peut-il arrêter son calcul au milieu, vu qu'il a déjà trouvé une meilleur solution? Cela est-il réalisé par le programme, tel que vous l'avez écrit?

# Conclusion
En analysant les 2 méthodes précédentes, on voit que le rendu de monnaie sera optimal pour toute somme à rendre, et pour tout type de caisse, à condition de tester toutes les combinaisons de rendu possible. Pas seulement une permutation des pieces dans la caisse. Le programme 2 améliore la méthode, en proposant plus de solutions. Mais ces solutions ne sont pas assez nombreuses. Il faudra envisager une autre méthode de rendu que celle qui prend la même piece pour rendre un montant intermédiaire, tant que la piece est inferieure au montant à rendre.

Cela risque toutefois de générer un programme dont la complexité va être très grande.



