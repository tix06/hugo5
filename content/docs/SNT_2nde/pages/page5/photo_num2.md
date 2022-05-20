---
Title: codage d'une image
---

# Afficher les pixels d'une image
On a vu en [travaux pratiques](/docs/SNT_2nde/pages/page5/photo_num3/), que le programme qui permet l'affichage des données en tableau utilise 2 boucles bornées, imbriquées:

```python
  for j in range(5):
    for i in range(5):
      if L[j][i] == 1 : 
        display.set_pixel(i, j, 9)
  ```

  On obtient alors une image de type Noir et Blanc, sur une matrice de diodes 5 * 5.

# codage de l'image
Les plus petits détails de l'image sont ses *pixels* : des petits carrés remplis chacun avec une seule couleur.
Coder les pixels de l'image revient à coder les couleurs de ses pixels.
Les valeurs des couleurs des pixels sont alors mises les unes à la suite des autres, et constituent ainsi le fichier image en s'ajoutant aux métadonnées.

Grâce aux métadonnées du fichier, l'ordinateur va traiter cette suite de chiffres selon une matrice de valeurs:

<figure>
<img src="../images/matrice1.png"></figure>

On distingue 3 cas : 

## image en Noir et Blanc
Il suffira d'un seul bit par pixel. Les données sont alors une succession de 1 et de 0.

Par exemple, l'image : 
<figure>
<img src="../images/dessin1.png"></figure>

est codée avec la serie de valeurs suivantes (100 valeurs) : 
<p class="formule">0 0 1 0 0 0 0 1 0 0 1 0 0 1 0 0 1 0 0 1 1 0 1 1 1 1 1 1 0 1 1 1 1 0 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 1 0 0 0 1 0 1 1 0 1 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0</p>

**Le poids de cette image**, c'est à dire la place que celle-ci prend sur le disque dur est égale à :

$$nombre\quad pixels \times 1 bit = 100\times 1 = 100 bits$$
*pour une image de 100 pixels*
 
## image en niveaux de gris
La valeur numérique associée à chaque pixel sera choisie entre 0 et 255 (1 octet par pixel).
Cette valeur correspondra au niveau de gris de chacun des pixels.
On dit que la **profondeur de couleurs** (c'est à dire le nombre de couleurs par pixel), est de 1 octet.

* 255 correspond en général à un pixel blanc (intensité lumineuse au maximum)
* 0 correspond au pixel noir.
* pour des valeurs proches de 0 : gris foncé
* pour des valeurs proches de 255 : gris clair

Un exemple de données relatives à une image 10*10 pixels, en 255 niveaux de gris : 
<p class="formule">122 117 132 127 124 127 125 130 122 123 137 117 126 137 117 125 137 127 125 135 137 118 134 128 128 133 127 131 125 130 128 137 128 126 133 134 120 135 132 133 136 133 136 128 135 136 130 127 127 127 126 134 131 130 127 127 134 134 134 125 126 120 137 117 130 136 121 134 124 117 134 129 127 122 125 118 125 122 134 132 127 123 121 127 127 123 126 127 121 118 126 118 125 119 117 123 121 126 125 123</p>

**Le poids de cette image** : pour 100 pixels
$$nombre\quad pixels \times 1 octet = 100\times 1 = 100 octets $$

## image en couleur
Pour exprimer les couleurs, on utilise le principe de *synthèse additive*. Une couleur s'exprime par la synthèse de trois couleurs primaires, rouge, vert et bleu. Pour représenter une couleur parmi les 16 millions possibles, on règle indépendamment l'intensité lumineuse de chacun de ces trois canaux colorés, avec une valeur comprise entre 0 (minimum) et 255 (maximum).

Chaque pixel sera codée cette fois-ci par 3 octets.
La première valeur exprimée est celle du rouge, puis du vert, et enfin du bleu.

Ainsi, le pixel rouge est représenté par 255 0 0. Le pixel vert : 0 255 0. Le pixel bleu : 0 0 255.
Le blanc : 255 255 255, le noir 0 0 0.
Le jaune : 255 255 0. Le jaune orangé : 238 160 73...etc

Exemple d'une image 100*100 pixels, de profondeur de couleur d'environ 16 millions $$255\times 255 \times 255$$


<figure>
<img src="../images/zlatan.jpg" alt="image pixelisée couleur" width="60%">
<figcaption>image pixelisée couleur</figcaption>
</figure>


**Le poids de cette image** : pour 100 pixels sur 100 pixels (10 000 px)
$$nombre\quad pixels \times 3 octets = 10000\times 3 = 30000 octets $$
Ce qui correspond à 
$$\tfrac{30000}{1024} = 29ko$$

# Caractéristiques des images
## Travail pratique
Ouvrir le notebook en cliquant sur le lien : <a href="https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master" target="blank">
```
https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master
```
</a>


Lorsque l'environnement est créé : cliquer sur le notebook : 
`image numeriques.ipynb`

Et répondre aux questions sur la fiche à compléter.

*Pensez à faire `Executer` lorsque la cellule est une cellule de code (In [1], In[2], In[3] et In[4])*

## Luminosité d'une image
La luminosité d'une image représente la clarté de l'image. 
Pour un pixel donné, on peut établir une mesure de la luminosité de la manière suivante : 
Soient R, V et B les valeurs des intensités de chaque canal coloré. La luminosité L est égale à :
$$L = R+V+B$$

*Exemple :*

<figure>
<img src="../images/dessinGrisclair.png" alt="image de forte luminosité" width="150 px">
<img src="../images/dessinGrisfonce.png" alt="image de faible luminosité" width="150 px">
<figcaption>images de forte (à gauche) et faible (à droite) luminosité</figcaption>
</figure>


## Contraste
Les deux images présentées dans le paragraphe précédent, sur la luminosité, sont trop peu **contrastées** pour en apprécier le contenu. 

En effet, l'amplitude de luminosité entre les pixels clairs et les pixels foncés est trop petite.
En d'autres termes, les tons sombres et les tons clairs de l'image ont des luminosités qui ont des valeurs trop proches.

Le **contraste** mesure la différence de luminosité entre les tons clairs et les tons sombre.


## Qualité des images imprimées
La  **résolution**  R d'une  image  numérique  correspond  à sa **densité** en points (pixels).  On mesure la densité de pixels sur l'écran en pixels par pouce (ppi) et la densité de points sur l'image imprimée en points par pouce (dpi).

La **définition**  D d'une  image  est  définie  par  un  nombre  de  pixels  selon la longueur et la largeur de l’image  numérique.

On l'exprime le plus souvent en donnant les dimensions du plan de pixels, par exemple, une image de définition : 

$$1900 \times 1700 pixels$$

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
A partir de ce qui a été vu plus haut, le poids d'une image nn compressée de définition D et de profondeur de couleur C a un poids P : 
$$P = D \times C$$

*Exemple :* D = 1900 pixels * 1700 pixels et C = 3 octets 

$$P = 1900 \times 1700 \times 3 = 9,7.10^6 octets = 9,7 Mo$$ 

La **compression** d'une imagec’est la réduction de la quantité d’informations nécessaires pour décrire l’image. Les idées générales sont : 

- De rassembler plusieurs pixels de même couleur, et établir une couleur moyenne des pixels sur une zone donnée.
- supprimer des informations : par exemple en diminuant le nombre de couleurs possibles. On fait une réduction de l'espace des couleurs à celles qui sont  les plus fréquentes dans l'image.

# Suite du cours
* [Enjeux ethiques et societaux de l'image](/docs/SNT_2nde/pages/page5/photo_num4/)

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>