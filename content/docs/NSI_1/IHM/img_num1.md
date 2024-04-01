---
Title: images numeriques
---

# Images numeriques
Les images numériques matricielles sont des tableaux de pixels. On peut concevoir images de *synthèse* à partir d'instructions en python (ou autre langage). Des librairies comme `PIL` permettent de manipuler les pixels comme les données d'une table.

Dans cette seance, nous allons:

* créer des images de synthèse
* modifier des images existantes.

{{< img src="../images/img5.png" >}}

## formats de données
Le portable pixmap file format (PPM), le portable graymap file format (PGM) et le portable bitmap file format (PBM) sont des formats de fichier graphique utilisés pour les échanges. Ils correspondent respectivement à des images en noir et blanc (ppm), en niveaux de gris (pgm), et en couleur (pbm).

Les fichiers bruts comportent alors l’indication du format sur leur première ligne avec l’information : P1 pour le format ppm, P2 pour le pgm et enfin P3 pour le pbm.


## Couleurs : RVB
Il  existe  plusieurs  modes  de  codage  informatique  des  couleurs,  le  plus  utilisé  pour  le  maniement  des images  est  l'espace  colorimétrique  Rouge,  Vert,  Bleu (RVB  ou  RVG:  Red  Green  Blue)  par  synthèse additive. 

Une image RVB est composée de la somme des trois rayonnements lumineux Rouge, Vert,  Bleu dont les  faisceaux sont superposés. A l'intensité maximale  ils produisent une  lumière blanche 255, 255, 255 en codage décimal, ou FF FF FF en hexadecimal.

## profondeur de couleur
* norme HD: la profondeur en haute definition est de 1 octet par canal coloré R, V ou B

* norme 4K : UHD = 10 bits par canal coloré

## Gimp: colorimètre
{{< img src="../images/img1.png" link="../images/img1.png" caption="clic droit: telecharger" >}}

[Télécharger l'image](../images/img1.png).

A l'aide du logiciel Gimp, ouvrir l'image du carré rouge et relever les valeurs RVB du colorimètre.


# Synthèse d'images
## Rectangle rouge
Utiliser un IDE python pour les exercices suivants: *Pyzo* ou *Spyder*

Vous allez créer une image (rectangle rouge) à partir d'un programme python.

* Définir les variables globales largeur et hauteur:

```python
largeur=600
hauteur=420
```

* Créer un nouveau fichier texte avec les instructions:

```python
f=open('red_square','w') 

############ entête du fichier ##################
f.write('P3'+'\n') # P1 était le code pour un pbm format ascii
			  # P3 correspond au ppm format ascii
f.write(str(largeur)+' '+str(hauteur)+'\n')
# valeur max pour l'intensité des couleurs :
f.write('255'+'\n')
############### fin de l'entête ##################
```

* Definir une fonction pour remplir le fichier avec les valeurs codant la couleur:

```python
#########  declaration de la fonction ############
def rectangle(couleur,h,l) :
	""" 
	@param couleur: str
	couleur est un triplet d'entiers, code RGB
	@example: dessiner un rectangle entierement noir
	>>> rectangle('0 0 0',largeur,hauteur)
	"""
	for i in range(h*l) :
			f.write(couleur+'\n')
```

* Puis appel de la fonction et fermeture du fichier:

```python
rectangle('255 0 0',largeur,hauteur)
f.close()
```

* On peut alors ouvrir le fichier avec un editeur de texte et observer les données.

* Enfin, remplacer le nom de fichier dans l'instruction: `f=open('red_square.ppm','w')`

* Ajouter la librairie PIL. Et ajouter les 2 lignes suivantes pour ouvrir l'image:

```python
im = Image.open("red_square.ppm")
im.show()
```

Ce qui donne le script complet suivant:

```python
from PIL import Image
largeur=600
hauteur=420

#f=open('red_square','w') 
f=open('red_square.ppm','w') 

############ entête du fichier ##################
f.write('P3'+'\n') # P1 était le code pour un pbm format ascii
			  # P3 correspond au ppm format ascii
f.write(str(largeur)+' '+str(hauteur)+'\n')
# valeur max pour l'intensité des couleurs :
f.write('255'+'\n')
############### fin de l'entête ##################

#########  declaration de la fonction ############
def rectangle(couleur,h,l) :
	""" 
	@param couleur: str
	couleur est un triplet d'entiers, code RGB
	@example: dessiner un rectangle entierement noir
	>>> rectangle('0 0 0',largeur,hauteur)
	"""
	for i in range(h*l) :
			f.write(couleur+'\n')
######## appel fonction ############################			
rectangle('255 0 0',largeur,hauteur)
########### fermeture fichier ############################
f.close()
# affichage image
im = Image.open("red_square.ppm")
im.show()
```

## Drapeaux de pays
Adapter maintenant le script du rectangle rouge pour editer en python les drapeau suivants.

Attention à BIEN faire correspondre le nombre de valeurs codantes pour la couleur des pixels. Si le nombre ne correspond par exactement à la dimension $largeur \times hauteur$ définie dans l'en-tête du fichier, vous risquez d'avoir une image sombre (erreur à l'affichage)

{{< img src="../images/img2.png" link="../images/img2.png" caption="drapeau allemand. 3 appels de la fonction rectangle('255 0 0',largeur,hauteur//3)" >}}

{{< img src="../images/img3.png" link="../images/img3.png" caption="drapeau belge. Utiliser une boucle bornée pour créer le drapeau ligne par ligne." >}}

# Lecture puis traitement des pixels de l'image
## Lire les pixels de l'image
Le module PIL permet de manipuler divers formats d'images plus ou moins complexes sans avoir à se préoccuper de la façon dont sont réellement codés ces formats.

Le module PIL permet de manipuler un fichier image (reconnaissance automatique de la largeur et de la hauteur en pixels de l’image, création d’une grille de pixels, où chaque ligne de la grille correspondant à une ligne de pixels, idem pour les colonnes). 


{{< img src="../images/chats.bmp" link="../images/chats.bmp" caption="Image de chatons à télécharger" >}}

Voici le programme minimal pour lire les pixels de l'image

```python
from PIL import Image


imageSource=Image.open("chat.bmp")
largeur,hauteur=imageSource.size
planPixels=Image.new("RGB",(largeur,hauteur))
```

Les structures de données imageSource  et planPixels sont des objets qui stockent les couleurs des pixels dans un tableau. Ces objets possède les methodes `getpixel` et `putpixel` suivantes:

```
>>> imageSource.getpixel((x,y))
retourne un tuple constitué des couleurs (R, V, B) du pixel de coordonnée (x,y)
>>> planPixels.putpixel((x,y),p)
place le tuple p de valeurs (R,V,B) sur le pixel (x,y)
```

*Remarques*: 
* pour la fonction `putpixel`, la position (x,y) d'un pixel sur l'image varie de `(0,0)` à `(l-1,h-1)`, si `l` et `h` designent les dimensions de l'image.
* le tuple de couleurs p: imaginons que nous voulions placer un pixel bleu, alors: 

```python
p= (0, 0, 255)
planPixels.putpixel((x,y),p)
```


## Ecrire dans un nouveau fichier
Après lecture du fichier, on peut constituer une nouvelle image. Voici le programme complet que vous modifierez selon le traitement voulu:

```python
### traitement d'une image ##########
from PIL import Image


imageSource=Image.open("chat.bmp")
largeur,hauteur=imageSource.size
planPixels=Image.new("RGB",(largeur,hauteur))

for y in range(hauteur): # y varie de 0 à hauteur - 1
    for x in range(largeur): # x varie de 0 à largeur - 1
        p=imageSource.getpixel((x,y)) # p est la valeur RGB du pixel
        # la position d'un pixel sur l'image varie de (0,0) à (l-1,h-1)
        planPixels.putpixel((x,y),p) # nouvelle image identique a la precedente

planPixels.save("chatModif.jpg")
planPixels.show()
```

> Quelle opération doit on réaliser sur chacun des pixels pour que les chats regardent de l’autre côté ? Compléter le programme ci-dessus afin d'obtenir cette nouvelle image, avec des petits chats qui regardent à DROITE.

# Pix-Art
Avec l'image d'origine suivante:

{{< img src="../images/marylin_original.JPEG" link="../images/marylin_original.JPEG" caption="Marylin Monroe" >}}

> Apporter les modifications necessaires pour filtrer les couleurs par zone, de manière selective. On pourra obtenir une nouvelle oeuvre insipirée de l'image suivante:

{{< img src="../images/img4.jpg" caption="Marylin Monroe type Pop-art" >}}

*Aide:* La condition suivante permet de selectionner les pixels de la partie gauche de l'image, et qui ont une composante Rouge supérieure à 100:

```python
if (x<largeur//2 & p[0] > 100) :
	# traitement sur p
```
