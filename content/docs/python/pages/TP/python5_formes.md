---
Title: images et formes
---

# Traitement d'images
Le traitement d'images est un domaine très riche en algorithmes. Ici, nous nous intérèsserons à la **detection de formes** dans une image.

Nous utiliserons la librairie de traitement d'images [scikit-images](https://scikit-image.org/docs/stable/auto_examples/). Le lien propose de nombreux exemples à partir d'images tests.

A partir d'une image prise au microscope, nous allons chercher à obtenir les contours des billes. Il faudra au préalable obtenir une image *binarisée*. 

Puis, à partir de cette image *binaire*, approximer la forme de ces billes, soit par des polygones, soit par des ellipses. 

Cette approximation va permettre de faire des mesures sur ces formes, et peut être de présenter ces mesures à l'aide d'un histogramme.

{{< img src = "../images/essai_23_04_04_bis.bmp" caption = "observation au microscope" >}}

{{< img src = "../images/img_bin.png" caption = "image binarisée" >}}

{{< img src = "../images/img_bin_poly.png" caption = "approximation par un polygone" >}}

{{< img src = "../images/img_ellipse.png" caption = "approximation par une ellipse" >}}
