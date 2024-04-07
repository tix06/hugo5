---
Title: codage d'une image
---

# Coder une image
## Une image: un tableau de pixels

{{< img src="../images/grille_a.png" alt="image pixelisée monochrome" caption="image pixelisée monochrome" >}}

> Comment représenter l'image de ce symbole de manière numérique?




## Construire une image numérique
On utilise des boucles simples ou imbriquées, constituées d'une seule ou plusieurs instructions pour peindre les pixels (voir activité sur le site Algorea):

{{< img src="../images/algo1.png" caption="pixels sur une ligne: boucle simple" >}}

```
faire 6 fois:
  peindre en rouge
faire 6 fois:
  peindre en bleu
```

{{< img src="../images/algo2.png" caption="tableau de pixels. boucles imbriquées" >}}

```
faire 12 fois:
  faire 6 fois:
    peindre bleu
    peindre rouge
```


{{< img src="../images/algo3.png" caption="tableau de pixels. utiliser un variant de boucle" >}}

```
pour i variant de 0 à 11:
  pour j variant de 0 à i:
    peindre bleu
  pour k variant de i+1 à 11:
    peindre en magenta
```

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

Pour calculer la luminosité moyenne d'une image, voici l'algorithme:

```
s = 0
pour chaque ligne:
  pour chaque colonne:
    p <- couleur du pixel
    s = s + (p[0] + p[1] + p[2])/3
luminosite <- s / (ligne*colonne)
``` 

Pour chaque pixel, on fait la moyenne de ses 3 couleurs primaires. 

On ajoute la valeur à l'accumulateur s. Puis on fait la moyenne des valeurs de s en divisant par le nombre de pixels `(ligne*colonne)`.



## Contraste
Les deux images présentées dans le paragraphe précédent, sur la luminosité, sont trop peu **contrastées** pour en apprécier le contenu. 

En effet, l'amplitude de luminosité entre les pixels clairs et les pixels foncés est trop petite.
En d'autres termes, les tons sombres et les tons clairs de l'image ont des luminosités qui ont des valeurs trop proches.

Le **contraste** mesure la différence de luminosité entre les tons clairs et les tons sombre.

*Exemple :*

{{< img src="../images/dessinGrisclair.png" alt="image et contrastes" caption="images faible contraste" >}}

Soient les fonctions `recherche_du_max` et `recherche_du_min` qui retournent la valeur du max ou du min dans une liste python simple.

img est un tableau de valeurs des couleurs en niveau de gris des pixels. Par exemple:

```
img = [[101,202,210,255,213,...], 
       [101,202,210,255,213,...], 
       [...]]

```

Le programme va parcourir chaque ligne, c'est à dire chaque sous-liste de img.

Si la fonction `max_ligne` retourne une valeur supérieure à max, c'est qu'une valeur plus grande d'intensité a été trouvée dans cette ligne. On remet à jour la valeur max de l'image avec `max = max_ligne`, et on passe à la ligne suivante.

(même principe pour `min_ligne`)

```
max = 0
min = 255
pour chaque ligne de img:
  max_ligne = recherche_du_max(ligne)
  min_ligne = recherche_du_min(ligne)
  si max_ligne > max: max = max_ligne
  si min_ligne < min: min = min_ligne
```

## Qualité des images





La **définition**  D d'une  image  est  définie  par  un  nombre  de  pixels  selon la longueur et la largeur de l’image  numérique. C'est une caractéristique propre de l'image.

On l'exprime le plus souvent en donnant les dimensions du plan de pixels, par exemple, une image de définition : 

$$1900 \times 1700~pixels$$

La  **résolution**  R d'une  image  numérique  correspond  à sa **densité** en points (pixels).  On mesure la densité de pixels sur l'écran en pixels par pouce (ppi) et la densité de points sur l'image imprimée en points par pouce (dpi). Ce n'est pas une caractéristique de l'image elle-même, mais de sa restitution par un écran (ou imprimé).

Selon le cas, on calculera la résolution selon l'un des côtés de l'image. Ou bien selon la diagonale de l'iamge.

La résolution peut s'exprimer en pixels par pouce. On peut en déduire la résolution en pixels par cm à l'aide de la relation suivante 

entre la **Définition** D, la **Résolution** R, et le nombre de cm par pouces (2,54).

$$R(px/cm) = \tfrac{R(px/pouce)}{2,54(cm/pouce)}$$

En effet : *1 pouce vaut 2,54 cm*. Un petit calcul montre que R = 72 ppi correspond à 28,3 pixels pour 1 cm.



*Exemple :* Soit une image de définition 800x533 que l'on imprime sur du papier photo de taille 15x10 (en cm), calculez la résolution de cette image en ppp.

*Réponse : On prendra :*

*Définition : D = 800px et Longueur : L = 15 cm*. *On cherche R : resolution*
$$R = \tfrac{D}{L}\times 2,54 = \tfrac{800}{15}\times 2,54 = 135 ppp$$

**Agrandissement et perte de qualité**: lorsque le nombre de points codés dans l'image est inférieur au nombre de pixels de l'écran, il n'y a pas assez de points. L'agrandissement va déteriorer l'image, car un même point va être placé sur plusieurs pixels côte à côte. C'est ce que l'on appelle la pixelisation de l'image.

{{< img src="../images/bmp1.png" caption="agrandissement jusqu'à pixelisation" >}}

*La selection d'une partie des points de l'image montre qu'il n'y a plus assez de points avec le zoom x12. On peut afficher une image à partir de cet agrandisement, mais il y a pixelisation.*

# formats d'images
Le calcul du poids des images a été réalisé dans les paragraphes précédents, en supposant que l'image est non compressée, dans un *format brut*.

En réalité, les images sont compressées. Ce qui permet d'avoir un poids moindre pour leur stockage, leur transfert...

Les formats suivants sont des exemples de formats images compressés : png, jpg.

# Calcul du poids d'une image avec/sans compression
A partir de ce qui a été vu plus haut, le poids d'une image non compressée de définition D et de profondeur de couleur C a un poids P : 
$$P = D \times C$$

*Exemple :* D = 1900 pixels * 1700 pixels et C = 3 octets 

$$P = 1900 \times 1700 \times 3 = 9,7.10^6 octets = 9,7 Mo$$ 

La **compression** d'une image c’est la réduction de la quantité d’informations nécessaires pour décrire l’image. Les idées générales sont : 

- De rassembler plusieurs pixels de même couleur, et établir une couleur moyenne des pixels sur une zone donnée.
- supprimer des informations : par exemple en diminuant le nombre de couleurs possibles. On fait une réduction de l'espace des couleurs à celles qui sont  les plus fréquentes dans l'image.

# Transformation de la taille d'une image
Certains logiciels permettent de reduire ou agrandir la taille d'une image (resize). Cela modifie le nombre de pixels. Cette transformation se fait en conservant les proportions de l'image (homothétie).

La reduction consiste à choisir certains points de l'image d'origine pour les placer dans celle reduite.

{{< img src="../images/transfo3.png" >}}

Un agrandissement simple peut se faire en reportant la valeur d'un point sur un carré de points de l'image agrandie:

{{< img src="../images/transfo4.png" >}}

L'agrandissement peut aussi se faire en faisant une interpolation des valeurs des points (on invente les couleurs manquantes par un calcul de moyenne)


{{< img src="../images/transfo2.png" >}}

Merci à [zonensi.fr](https://www.zonensi.fr/NSI/Premiere/C04/ImagesBMP/ImagesBMP.pdf) pour le travail sur cette partie du cours.

# Travail pratique

<!--
Ouvrir le notebook en cliquant sur le lien :{{< a link="https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master" caption="```https://mybinder.org/v2/gh/tix06/notebook_snt_images.git/master```" >}}

Lorsque l'environnement est créé : cliquer sur le notebook : 
`image numeriques.ipynb`

Et répondre aux questions sur la fiche à compléter.
-->

# Suite du cours
* [Enjeux ethiques et societaux de l'image](/docs/SNT_2nde/pages/page5/photo_num4/)
* Exercices de niveau 1ere NSI: [site de frederic-junier](https://frederic-junier.gitlab.io/parc-nsi/chapitre7/NSI-Images-Tableaux2d--2021V2.pdf)

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>