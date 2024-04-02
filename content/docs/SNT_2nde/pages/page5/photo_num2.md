---
Title: codage d'une image
---

# Coder une image
## Une image: un tableau de pixels

{{< img src="../images/grille_a.png" alt="image pixelisée monochrome" caption="image pixelisée monochrome" >}}

> Comment représenter l'image de ce symbole de manière numérique?




## Construire une image numérique

{{< img src="../images/algo1.png" caption="pixels sur une ligne: boucle simple" >}}

{{< img src="../images/algo2.png" caption="tableau de pixels. boucles imbriquées" >}}

{{< img src="../images/algo3.png" caption="tableau de pixels. utiliser un variant de boucle" >}}

## codage de l'image dans un fichier
Les plus petits détails de l'image sont ses *pixels* : des petits carrés remplis chacun avec une seule couleur.
Coder les pixels de l'image revient à coder les couleurs de ses pixels.
Les valeurs des couleurs des pixels sont alors mises les unes à la suite des autres, et constituent ainsi le fichier image en s'ajoutant aux métadonnées.

```
P1
5 6
0 1 1 1 0
0 0 0 0 1
...
```

Grâce aux métadonnées du fichier, l'ordinateur va traiter cette suite de chiffres selon une matrice de valeurs:

{{< img src="../images/zlatan.jpg" alt="image pixelisée couleur" caption="image pixelisée couleur" >}}

**Le poids de cette image** : pour 100 pixels sur 100 pixels (10 000 px)
$$nombre\quad pixels \times 3 octets = 10000\times 3 = 30000 octets $$
Ce qui correspond à 
$$\tfrac{30000}{1024} = 29ko$$


## Codage d'une image dans un tableau de données
On a vu en [travaux pratiques](/docs/SNT_2nde/pages/page5/photo_num3/), que le programme qui permet l'affichage des données en tableau utilise 2 boucles bornées, imbriquées:

```python
# L est un tableau python 5 * 5
  for j in range(5):
    for i in range(5):
      if L[j][i] == 1 : 
        display.set_pixel(i, j, 9)
```

On obtient alors une image de type Noir et Blanc, sur une matrice de diodes 5 * 5.

## Profondeur de couleur
La représentation *bitmap* d’une image par une matrice de pixels ne se limite pas à des images binaires en noir (0) et blanc (1).

En modifiant la profondeur de l’image, on peut coder plus de couleurs dans un pixel 

### niveaux de gris
(voir image plus bas).

Par exemple, le tableau suivant représente des valeurs allant du plus foncé au plus clair:

```
# fichier
P2
3 3
0 50 100 150 200 255
# matrice
pix = [[0,50,100],[150,200,255]]
```

### couleur
Le codage des couleurs utilise la synthèse additive. Voir animation sur Algorea > SNT V2 > photographie numerique > [ambiance lumineuse](https://parcours.algorea.org/contents/4707-4702-1067253748629066205-1625996270397195025-1089626022569595539/)

```
# fichier
P3
2 2
255 0 0 0 255 0 0 0 255 255 255 255
# matrice
pix = [
[[255,0,0],[0,255,0]],
[[0,0,255],[255,255,255]]
]
```

*Saurez-vous deviner le codage des couleurs sur cette image?*

{{< img src="../images/bmp2.png" caption="certains logiciels de design proposent de faire des essais de coloration. Ici, données en hex" >}}

# Caractéristiques des images
## Luminosité d'une image
La luminosité d'une image représente la clarté de l'image. 
Pour un pixel donné, on peut établir une mesure de la luminosité de la manière suivante : 
Soient R, V et B les valeurs des intensités de chaque canal coloré. La luminosité L est égale à :
$$L = R+V+B$$



## Contraste
Les deux images présentées dans le paragraphe précédent, sur la luminosité, sont trop peu **contrastées** pour en apprécier le contenu. 

En effet, l'amplitude de luminosité entre les pixels clairs et les pixels foncés est trop petite.
En d'autres termes, les tons sombres et les tons clairs de l'image ont des luminosités qui ont des valeurs trop proches.

Le **contraste** mesure la différence de luminosité entre les tons clairs et les tons sombre.

*Exemple :*

{{< img src="../images/dessinGrisclair.png" alt="image et contrastes" caption="images faible contraste" >}}

## Qualité des images

{{< img src="../images/bmp1.png" caption="agrandissement jusqu'à pixelisation" >}}



La **définition**  D d'une  image  est  définie  par  un  nombre  de  pixels  selon la longueur et la largeur de l’image  numérique. C'est une caractéristique propre de l'image.

On l'exprime le plus souvent en donnant les dimensions du plan de pixels, par exemple, une image de définition : 

$$1900 \times 1700~pixels$$

La  **résolution**  R d'une  image  numérique  correspond  à sa **densité** en points (pixels).  On mesure la densité de pixels sur l'écran en pixels par pouce (ppi) et la densité de points sur l'image imprimée en points par pouce (dpi). Ce n'est pas une caractéristique de l'image elle-même, mais de sa restitution par un écran (ou imprimé).

Pour les exercices, on prendra la dimension d'un seul des côtés de l'image pour utiliser la relation suivante entre la **Définition** D, la **Résolution** R, et le nombre de cm par pouces (2,54).

$$Definition(px) = \tfrac{resolution(px/pouce)}{2,54(cm/pouce)}\times longueur(cm)$$

En effet : *1 pouce vaut 2,54 cm*. Un petit calcul montre que R = 72 ppi correspond à 28,3 pixels pour 1 cm.



*Exemple :* Soit une image de définition 800x533 que l'on imprime sur du papier photo de taille 15x10 (en cm), calculez la résolution de cette image en ppp (rappel 1 pouce = 2,54 cm).

*Réponse : On prendra :*

*Définition : D = 800px et Longueur : L = 15 cm*. *On cherche R : resolution*
$$R = \tfrac{D}{L}\times 2,54 = \tfrac{800}{15}\times 2,54 = 135 ppp$$

# formats d'images
Le calcul du poids des images a été réalisé dans les paragraphes précédents, en supposant que l'image est non compressée, dans un *format brut*.

En réalité, les images sont compressées. Ce qui permet d'avoir un poids moindre pour leur stockage, leur transfert...

Les formats suivants sont des exemples de formats images compressés : png, jpg.

# Calcul du poids d'une image non compressée
A partir de ce qui a été vu plus haut, le poids d'une image non compressée de définition D et de profondeur de couleur C a un poids P : 
$$P = D \times C$$

*Exemple :* D = 1900 pixels * 1700 pixels et C = 3 octets 

$$P = 1900 \times 1700 \times 3 = 9,7.10^6 octets = 9,7 Mo$$ 

La **compression** d'une image c’est la réduction de la quantité d’informations nécessaires pour décrire l’image. Les idées générales sont : 

- De rassembler plusieurs pixels de même couleur, et établir une couleur moyenne des pixels sur une zone donnée.
- supprimer des informations : par exemple en diminuant le nombre de couleurs possibles. On fait une réduction de l'espace des couleurs à celles qui sont  les plus fréquentes dans l'image.

# Travail pratique
Ouvrir le notebook en cliquant sur le lien :{{< a link="https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master" caption="```https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master```" >}}

Lorsque l'environnement est créé : cliquer sur le notebook : 
`image numeriques.ipynb`

Et répondre aux questions sur la fiche à compléter.

# Suite du cours
* [Enjeux ethiques et societaux de l'image](/docs/SNT_2nde/pages/page5/photo_num4/)
* Exercices de niveau 1ere NSI: [site de frederic-junier](https://frederic-junier.gitlab.io/parc-nsi/chapitre7/NSI-Images-Tableaux2d--2021V2.pdf)

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>