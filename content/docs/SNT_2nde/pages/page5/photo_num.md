---
Title : Photographie numérique
---
# L'appareil photographique numérique
*Présentation*

<figure><a href="https://youtu.be/Rs5ab3X9Oxo" target=_blank>
  <img src="../images/video_photo_num.png">
  <figcaption>Video: Fonctionnement d'un appareil photo numérique<br>
    Chaine: <i>Monsieur Techno</i></figcaption></a>
</figure>

## Composants principaux
On retrouve dans un appareil photographique numérique, ou pour la partie photographie d'un smartphone ou d'une tablette, les constituants suivant : 

* L’objectif photographique : c'est un système optique, amovible ou non, convergent et composé généralement de plusieurs lentilles. 

<figure>
<img src="../images/objectif-photo.jpg" width="60%" alt="objectif AP">
<figcaption>objectif d'appareil photo</figcaption>
</figure>

<figure>
<img src="../images/detail.png" width="60%" alt="objectif sur un smartphone">
<figcaption>objectif photographique smartphone</figcaption>
</figure>

* La cellule d'exposition : c’est un composant électronique qui permet de mesurer la lumière renvoyée par le sujet et de régler l'ouverture du diaphragme, le temps d'ouverture de l'obturateur, et le déclenchement du flash. Cela permettra d’obtenir une *exposition* correcte.

* L'obturateur est une piece qui s'ouvre et se ferme pour laisser passer la lumiere pendant un temps appelé temps d'obturation, choisi par le logiciel.
* Le diaphragme : c'est une piece dont le diamètre (l'ouverture) est réglable. Ceci permet de limiter la quantité de lumière qui rentre dans l'appareil photographique.

* un filtre de Bayer (RVB), sans qui la photo serait en N&B

<figure>
<img src="../images/bayer.png" width="60%" alt="filtre de bayer">
<figcaption>filtre de bayer et photosite <br>(image de Gilles Boisclair)</figcaption>
</figure>

Ce filtre de bayer est en réalité constitué de 3 filtres. La lumière issue de l'objectif traverse la grille de filtres colorés avant d'éclairer la grille de photosites.

* un capteur, constitué de photosites, répartis sur une grille. Ce capteur se trouve à l'endroit où la lumière est focalisée (nette). Les photosites transforment l’intensité lumineuse en signal électrique. 
 
 Cette grille de photosites correspond à la pellicule photosensible des appareils photo argentiques. Sauf qu'avec un appareil photo numérique, l’image est construite en données ...*numériques*, qui correspondent aux pixels. 

Sur l'image suivante, on voit que la grille contient des carrés constitués de 2 cellules sensibles au vert, 1 cellule au bleu et 1 cellule au rouge. Il y a donc 2 fois plus de cellules vertes que de cellules rouge ou bleu.

<figure>
<img src="../images/photosites.png" width="60%" alt="photosites">
<figcaption>plan de photosites</figcaption>
</figure>

* Une carte mémoire (SDcard), pour y enregistrer les images.
* un ordinateur interne capable de traiter des programmes.

## Le plus petit détail d'une image: le PIXEL
L’image est construite en données numériques qui correspondent aux pixels.

C’est le grain de coloration d’une image, l’atome de l’image numérique.

Un des algorithmes possibles consiste à créer un pixel à partir de 4 photosites : un bleu, un rouge et deux verts. Un pixel sera alors composé de 3 couleurs : rouge, vert, bleu (RVB). 


# réglages lors de la prise de photographie
Les réglages de l'appareil photographique se font la plupart du temps de manière automatique. 

**Mise au point:** La mise au point est l'opération qui consiste, pour un photographe, à régler la netteté de l'image qu'il veut obtenir. 

## Algorithmes de prise de vue

l'appareil photographique est capable de mesurer la quantité de lumière, et de régler seul:

* le diapragme : c’est la taille de cette ouverture qui détermine la quantité de lumière arrivant sur le capteur.
* la vitesse d'obturation : correspond à l’intervalle de temps durant laquelle l’obturateur de l’appareil photo laisse entrer la lumière. Plus cette vitesse est lente et plus l’appareil photo capte la lumière. L' image sera alors plus lumineuse. *Ce réglage influe aussi sur la profondeur de champs, et la netteté des images pour des sujets en mouvement (mode sport)*.

## Algorithme d'aide à la mise au point
Parfois, la mise au point automatique n'est pas possible. Certains appareils photographiques proposent une option d'aide appelée le *Focus Peaking* (l’intensification de la mise au point). C'est utile lorsque le sujet manque de lumière, ou que l'on utilise un objectif manuel.

<figure>
<img src="../images/focus.png">
<figcaption> En rouge, le focus peaking qui indique la zone de mise au point</figcaption>
</figure>

Voici un exemple d'algorithme utilisé:

```
pour chaque pixel:
  si le contraste avec un pixel voisin est fort alors:
    colorier le pixel en rouge
```

## Algorithmes de correction
**Correction du flou**: Une image floue est une image dont la valeur radiométrique de chaque pixel a été altérée localement par les valeurs des pixels au voisinage. Ce problème est du au temps d'exposition qui est trop long.

Les algorithmes de correction de flou on beaucoup progressé avec la cartographie mobile. En effet, il n'était pas possible de ralentir le vehicule lors des prises de vues (circulation routière de jour), ni d'utiliser de flash puissant pour éclairer les façades (nuit).

<figure>
<img src="../images/img_urbaine1.png">
<figcaption> véhicules terrestres de
cartographie mobile</figcaption>
</figure>

L'[algorithme utilisé](http://recherche.ign.fr/labos/matis/pdf/articles_revues/2017/daval2016_v1.4.pdf) va alors calculer le *mouvement des pixels* pour reconstruire l'*image nette*.

<figure>
<img src="../images/img_urbaine2.png">
<figcaption>résultat du traitement par algorithme</figcaption>
</figure>

**algorithme de correction des couleurs** L'intensité de la couleur est mesurée par la *saturation*. Les applications de traitement d'image permettent la correction de la *saturation* grâce à des *filtres*, qui seront appliqués à tous les pixels de l'image.

# Qu'est ce qu'une photographie numérique ?
Une photographie numérique, comme tout autre objet numérique, c'est un **fichier de données numériques**, c'est à dire des valeurs codées en binaire.

Une partie des données correspond à des métadonnées, c'est à dire des données *périphériques*. L'autre partie contient les données relatives à l'image.

On pourra consulter la page sur les 

* [codages numeriques](/docs/SNT_2nde/pages/page5/photo_num2/) pour la suite du cours sur le codage de l'image.
* [enjeux éthiques et sociétaux](/docs/SNT_2nde/pages/page5/photo_num4)  de l'image
* [Données EXIF](/docs/SNT_2nde/pages/page2/donnees2/) pour plus de détails sur les métadonnées.



<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
