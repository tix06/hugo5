---
Title : Photographie numérique
---
# L'appareil photographique numérique
Lire le cours et compléter la fiche à télécharger ici <a href="../images/C32_cours photographie numérique.pdf">(faire un clic droit sur le lien et choisir : téléchargement)</a>

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
<figcaption>filtre de bayer</figcaption>
</figure>

Ce filtre de bayer est en réalité constitué de 3 filtres. La lumière issue de l'objectif est partagée en 3 faisceaux, chacun traversant l'un des filtres avant d'éclairer la grille de photosites.

* un capteur, constitué de photosites, répartis sur une grille. Ce capteur se trouve à l'endroit où la lumière est focalisée (nette). Les photosites transforment l’intensité lumineuse en signal électrique. 
 
 Cette grille de photosites correspond à la pellicule photosensible des appareils photo argentiques. Sauf qu'avec un appareil photo numérique, l’image est construite en données ...*numériques*, qui correspondent aux pixels. 

Sur l'image suivante, on voit que la grille contient des carrés constitués de 2 cellules sensibles au vert, 1 cellule au bleu et 1 cellule au rouge. Il y a donc 2 fois plus de cellules vertes que de cellules rouge ou bleu.

<figure>
<img src="../images/photosites.png" width="60%" alt="photosites">
<figcaption>plan de photosites</figcaption>
</figure>

* Une carte mémoire (SDcard), pour y enregistrer les images.
* un ordinateur interne capable de traiter des programmes.


## réglages lors de la prise de photographie

Les réglages de l'appareil photographique se font la plupart du temps de manière automatique. 
Ainsi, l'appareil photographique est capable :

* de mesurer la netteté de l'image, et de corriger la mise au point de l'*objectif* si celle-ci est floue.
* de mesurer la quantité de lumière, et de régler :
	* le diapragme : c’est la taille de cette ouverture qui détermine la quantité de lumière arrivant sur le capteur.
	* la vitesse d'obturation : correspond à l’intervalle de temps durant laquelle l’obturateur de l’appareil photo laisse entrer la lumière. Plus cette vitesse est lente et plus l’appareil photo capte la lumière. L' image sera alors plus lumineuse. *Ce réglage influe aussi sur la profondeur de champs, et la netteté des images pour des sujets en mouvement (mode sport)*.

# La photographie numérique
## qu'est ce qu'une photographie numérique ?
Une photographie numérique, comme tout autre objet numérique, c'est un fichier de données numériques, c'est à dire des valeurs codées en binaire.

Une partie des données correspond à des métadonnées, c'est à dire des données *périphériques*. L'autre partie contient les données relatives à l'image.
### métadonnées
Ce sont des informations relatives à la capture de l'image (données EXIF): 

* la marque et le type d'appareil photographique
* la lentille de l'objectif
* les réglages lors de la prise de vue
* la date, les coordonnées de géolocalisation
* la dimension de l'image *pixels horizontaux, pixels verticaux*
* la profondeur de couleurs (nombre de couleurs possibles par pixel)
* ...

### format des données EXIF
Ces données peuvent être mises en forme de *dictionnaire*. Ceci est réalisé en langage python avec le programme suivant : 
```
from PIL import Image
img = Image.open( 'photo.jpg' )
exif_data = img._getexif()
```

On peut alors explorer cette variable *dictionnaire* à partir de ses clés.
Le dictionnaire est une structure de données où les valeurs sont associées à une clé. Un dictionnaire peut contenir plusieurs clés. Elles sont alors séparées par des vigules, comme par exemple : 

`monDictionnaire = {clé1 : valeur1, clé2 : valeur2, clé3 : valeur3}`

Pour accéder à `valeur3` du dictionnaire `monDictionnaire`, il faudra faire par exemple : 
`monDictionnaire[clé3]`

Le petit programme suivant stocke les données EXIF d'une image dans la variable `exif_data`. Puis on explore ce dictionnaire `exif_data` pour afficher la coordonnée de latitude à laquelle la photographie a été prise.

Pour faire cela, on repère d'abord que les coordonnées de localisation se trouvent à la clé 34853. => `exif_data[34853]` 

La valeur contenue dans cette clé est aussi un dictionnaire. L'angle est exprimé en degrés à la clé 1 : `exif_data[34853][1]`
La valeur retournée est un tuple de 2 valeurs. On cherche la valeur du premier élement, celui de rang 0 : on fait alors : `exif_data[34853][1][0]`

On complète cette valeur de longitude avec les minutes et secondes d'angle, comme sur l'exemple interactif ci-dessous. Cliquer sur *Executer* pour executer ces quelques lignes en python.

<div data-pym-src="https://www.jdoodle.com/embed/v0/1Zot?stdin=0&arg=0"></div>


# codage de l'image
Les plus petits détails de l'image sont ses *pixels* : des petits carrés remplis chacun avec une seule couleur.
Coder les pixels de l'image revient à coder les couleurs de ses pixels.
Les valeurs des couleurs des pixels sont alors mises les unes à la suite des autres, et constituent ainsi le fichier image en s'ajoutant aux métadonnées.

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
La  **définition**  d'une  image  numérique  correspond  à sa **densité** en points (pixels).  On mesure la densité de pixels sur l'écran en pixels par pouce (ppi) et la densité de points sur l'image imprimée en points par pouce (dpi).

La **résolution**  d'une  image  est  définie  par  un  nombre  de  pixels  unité  de  longueur de  l’image  numérique.
ainsi : *1 pouce valant 2,54 cm* : 72 ppi correspond à 28,3 points par cm

$$resolution(px) = \tfrac{definition(px/pouce)}{2,54(cm/pouce)}\times longueur(cm)$$

*Exemple :* Soit une image de définition 800x533 que l'on imprime sur du papier photo de taille 15x10 (en cm), calculez la résolution de cette image en ppp (rappel 1 pouce = 2,54 cm).

*Réponse : On prendra :*

*Définition : D = 800px et Longueur : L = 15 cm*. *On cherche R : resolution*
$$R = \tfrac{D}{L}\times 2,54 = \tfrac{800}{15}\times 2,54 = 135 ppp$$

# formats d'images
Le calcul du poids des images a été réalisé dans les paragraphes précédents, en supposant que l'image est non compressée, dans un *format brut*.

En réalité, les images sont compressées. Ce qui permet d'avoir un poids moindre pour leur stockage, leur transfert...

Les formats suivants sont des exemples de formats images compressés : png, jpg.


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
