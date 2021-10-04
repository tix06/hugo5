---
Title: Dosage colorimetrique
---

# Colorimétrie
## Mesurer la coloration

<figure>
  <img src="../images/colorants_BR.png">
  <figure>Solutions colorées</figure>
</figure>

La couleur perçue est celle complémentaire de ce qui est absorbé.

> Question: Quelle est la couleur absorbée pour chacune de ces solutions?

## Courbes d'absorbance

Le spectre d’absorption d’une espece chimique est une courbe obtenue à l’aide d’un spectrophotomètre. Cette courbe donne le profil de l’absorbance en fonction de la longueur d’onde.

Le maximum de la courbe est atteint pour une valeur de la longueur d’onde appelée « longueur d’onde du maximum d’absorption » (noté &#955;<sub>max</sub>)

Ce maximum d'absorption permet d'<b>identifier</b> la nature de l'espèce absorbante. Par exemple, ici, 3 des 4 solutions ont une même substance absorbante:

<figure>
  <img src="../images/absorbancesB.png">
  <figcaption></figcaption>
</figure>


<figure>
  <img src="../images/absorbancesDetail.png">
  <figcaption></figcaption>
</figure>

la <b>couleur</b> diffusée par le liquide est alors celle <b>complémentaire</b> de &#955;<sub>max</sub>. 

> Question: Pour chacun de ces solutions, quelle est la couleur absorbée? Quelle est la couleur perçue?

# Loi de Beer-Lambert
L’absorbance A d’une solution ne contenant qu’un seul soluté, à la longueur d’onde &#955;, est proportionnelle à la concentration molaire ou massique.

$$A = \epsilon \times l \times C$$

* &#949; : coefficient d'extinction molaire
* l : longueur de la solution traversée par la lumière
* C : concentration en soluté

# Dosage colorimétrique
Le document ci-dessous illustre la méthode du dosage par colorimétrie.

* L'absorbance de la solution dépend de la concentration. On peut donc, au préalable, créer une échelle de teinte en tubes à essais.
* On essai d'encadrer la solution inconnue entre 2 solutions étalons de l'echelle de teintes. On en deduit un intervalle pour la concentration.

<figure>
  <img src="../images/tubesEssai.png">
  <figcaption>Echelle de teinte et dosage colorimétrique</figcaption>
</figure>

# Utiliser un spectrophotomètre

Pour réaliser un dosage colorimétrique, on doit disposer d’une gamme de solutions étalons contenant un même soluté, à des concentrations différentes. On règle le spectrophotomètre à la longueur d’onde du maximum d’absorption pour ces solutions. 

## Resolution graphique
Le principe du dosage est alors:

* Réaliser une échelle de teintes avec des solutions étalons (de concentrations connues)
* Etalonner le spectrophotomètre avec de l'eau distillée (A=0)
* Pour chaque solution de concentration C, mesurer A
* Tracer A en fonction de C
* Mesurer A de la solution à analyser (inconnue) et utiliser la courbe d’etalonnage pour en déduire sa concentration. (resolution graphique)

<figure>
  <img src="../images/resolutionG.png">
  <figcaption></figcaption>
</figure>

## Regression linéaire
On peut aussi utiliser un *tableur* pour déterminer l'équation de la droite d'étalonnage A = f(C). On fait alors une *régression linéaire*.

On utilise alors cette loi pour déterminer C de la solution inconnue, à partir de la mesure de son absorbance, A.

<figure>
  <a href="https://youtu.be/uzMAL7uPE44">
  <img src="../images/regressionTI.png">
  <figcaption>Effectuer une régression avec la TI-83 Premium CE</figcaption></a>
</figure>

