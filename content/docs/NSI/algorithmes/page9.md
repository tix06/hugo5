---
Title: rotation quart de tour d'une image
---

# Coder une image numérique
## Qu'est ce qu'une image numériques?
*Rappels de SNT:* Une image numérique est constituée de pixels colorés (ou noirs et blanc). Le fichier comportant l'image numérique contient alors une succession de valeurs qui codent la couleur de chaque pixels: lire le cours de SNT, paragraphe{{< a link="/docs/SNT_2nde/pages/page5/photo_num/#codage-de-l-image" caption="codage de l'image" >}}
## Librairie PIL
Pour manipuler les images, nous pouvons utiliser le module `PIL` de Python. Celui-ci permet de traiter les pixels d'une image, un par un. Souvent, il faudra parcourir l'image pixel par pixel, sur toute la largeur et toute la hauteur. Cela est possible avec deux boucles imbriquées, à condition de connaitre ses dimensions `largeur, hauteur`:

```python
from PIL import Image
imageSource=Image.open("crabePortrait.bmp")
largeur,hauteur=imageSource.size

for x in range(largeur): # x varie de 0 à largeur - 1
    for y in range(hauteur): # x varie de 0 à hauteur - 1
      # traitement pixel (x,y)

planPixels.save("crabe2.jpg")
planPixels.show()
```

*imageSource est une instance de la classe `Image` et possède une methode `getPixel((x,y))` qui renvoie la valeur du pixel pour l'argument (x,y)*

Nous allons travailler sur l'image suivante: **crabePortrait.bmp** 

{{< img src="../images/crabePortrait.bmp" link="../images/crabePortrait.bmp" caption="image de dimension 247 * 330 en format bitmap, RGB 3 octets" >}}
Dans un premier temps, explorons cette structure de données:

> *A vous de jouer:* une fois l'image téléchargée, ouvrir un notebook dans le **même** dossier que l'image, puis, à partir du script précédent:

> 1. créer une double boucle sur x (position en largeur qui varie de 0 à largeur//10) et sur y (position en hauteur qui varie de 0 à hauteur//10). On ne parcourt qu'une petite partie de l'image. Le pixel (0,0) est en haut sur le coin gauche.
2. dans la boucle: stocker dans p la valeur RGB du pixel de coordonnée (x,y) de imageSource: `p=imageSource.getpixel((x,y))`
3. afficher la valeur de p...


On souhaite maintenant diminuer le contraste, en divisant par 2 chacune de composantes RGB de chacun des pixels de l'image. L'image sera egalement plus sombre. On va créer cette fois une nouvelle instance de la classe `Image`, mais pour former une image completement NOIRE:

`planPixels=Image.new("RGB",(largeur,hauteur))`

On remplira cette image avec des pixels, un par un.

> *A vous de jouer:* Ecrire un script qui parcourt TOUS les pixels de l'image.

> 1. Avant la boucle de parcours des pixels, ajouter `planPixels=Image.new("RGB",(largeur,hauteur))`
2. Parcourir tous les pixels de l'image, largeur * hauteur.
2. Lire la valeur RGB de chaque pixel (`getpixel`) et modifier cette valeur, en diminuant le contraste de couleur: p = (p[0]//2,p[1]//2,p[2]//2)
3. puis placer ce pixel sur la nouvelle image en construction planPixels. Utiliser pour cela la methode putpixel((x,y),p) de l'objet `planPixels` où x et y sont les nouvelles coordonnées du pixel p que l'on veut dessiner.


# Rotation d'une image
## Premier algorithme: permutation de pixels
On va cherche à écrire un script Python qui réalise la rotation d'un quart de tour dans le sens horaire, comme sur l'image ci-dessous:

{{< img src="../images/rotation.png" caption="principe de la rotation horaire d'un quart de tour" >}}
> *Questions:*

> 1. Quelles sont les coordonnées des points A et B avant transformation?
2. Quelles sont les nouvelles coordonnées des points A' et B' après transformation?
3. pour un pixel situé initialement en (x,y), quelles sont ses coodonnées (x',y') après transformation? Exprimer ces coordonnées x' et y' en fonction de x, y, largeur, hauteur.
4. Ecrire le script du programme qui devra réaliser la transformation de *crabePortrait.bmp*, d'un quart de tour, dans le sens horaire.
5. Donner la complexité de cet algorithme.

## Méthode diviser pour régner
On cherche maintenant à effectuer cette transformation, SANS utiliser de nouvelle image *planPixels* comme précédemment. Ce sera une méthode dite en O(1) du point de vue de la complexité spatiale.

On utilisera l'image suivante (carrée) pour cette méthode: **woody.jpg** 

{{< img src="../images/woody.jpg" link="../images/woody.jpg" caption="image woody.jpg" >}}
### Compléter la fonction `echange_pix` suivante

```python
def echange_pix(image,x0,y0,x1,y1):
    """procedure qui echange les pixels d'une image entre une position 
    de depart start et d'arrivée end
    Params:
    ------
    image : objet de la classe Image
    x0,y0: int, int: coordonnées du pixel de depart
    x1,y1: int, int: coordonnées du pixel d'arrivée
    
    Example: echange du pixel (0,0) avec celui (120,120)
    --------
    >>> echange_pix(imageSource,0,0,120,120)
    """
    start = image.getpixel((x0,y0))
    end = image.getpixel((x1,y1))
    # à compléter


```

### Compléter la fonction `echange_quadrant` suivante
Cette fonction permet d'echanger les pixels de 2 zones carrées de même dimensions.

{{< img src="../images/deplaceBloc.png" caption="exemple: echange des blocs A et B" >}}
```python
def echange_quadrant(image,x0,y0,x1,y1,n):
    """procedure qui echange tous les pixels du bloc de pixels A
    avec ceux du bloc B, de même dimension n*n.
    L'image doit être carrée, de largeur et hauteur égaux à n
    A et B occupent une position quelconque parmi les 4 quarts de l'image
    Params:
    -------
    image : objet de la classe Image
    x0,y0: int, int: coordonnées du pixel du coin superieur gauche de A
    x1,y1: int, int: coordonnées du pixel du coin superieur gauche de B
    n : int : largeur ou hauteur de l'image, en nombre de pixels
    Example: echange du quart d'image en haut à gauche (A) avec celui 
    ------------ en haut à droite (B) sur une image de largeur 420
     
   
    >>> echange_quadrant(imageSource,0,0,120,0,120)
    """
    for x in range(n):
        for y in range(n):
            echange_pix(image, # à compléter

```

> **Questions:**

> * On veut echanger les blocs A et D, qui font chacun 120*120 pixels. Quelle instruction faut-il écrire, utilisant la procedure `echange_quadrant`.
* Même question pour echanger les blocs A et C.

### analyser la fonction `rotate`
La fonction (ou plutôt *méthode*, vue qu'elle ne retourne rien), permet de faire tourner l'image d'un quart de tour par une méthode de type *diviser pour régner*.

Une fois la partie **divisée** executée (appels recursifs), lorsque les subdivisions de l'image sont constituées d'un seul pixel, les pixels sont déplacés (**règne**) à l'aide de 3 permutations successives, selon le schéma suivant:

{{< img src="../images/echanges.png" caption="trois permutations réalisées sur les subdivisions de l'image" >}}
Il sont alors recombinés pour reformer l'image, tout en suivant les mêmes permutations, mais avec des blocs de pixels plus gros (**fusion**).

```python
def rotate(image,x0,y0,n):
    """procedure recursive qui tourne d'un quart de tour un carré
    de l'image de dimension n.
    à chaque appel recursif, la taille de l'image est divisée par 2.
    Si l'image fait plus d'un seul pixel, la rotation se fait par 
    permutation des (zones de) pixels A<=>B, B<=>D, D<=>C
    Params:
    -------
    image
    x0,y0: int, int: coordonnées du pixel du coin superieur gauche du carré
    n: dimansion du carré
    Example:
    --------
    rotate(imageSource,0,0,420)
    """
    if n>=2:
        m = n//2
        rotate(image,x0,y0,m)
        rotate(image,x0,y0+m,m)
        rotate(image,x0+m,y0,m)
        rotate(image,x0+m,y0+m,m)
        echange_quadrant(image,x0,y0,x0+m,y0,m)
        echange_quadrant(image,x0,y0,x0+m,y0+m,m)
        echange_quadrant(image,x0,y0,x0,y0+m,m)
```

> *Analysez la procedure:* A l'aide de l'image suivante, que vous découperez, montrer pas à pas ce qui est réalisé par la fonction rotate.


{{< img src="../images/procedure.jpg" link="../images/procedure.jpg" >}}
### efficacité de la méthode

Pour executer cette méthode, vous écrirez le script suivant dans une nouvelle cellule:

```python
def quart_tour(image):
    largeur,hauteur=image.size
    assert largeur == hauteur
    rotate(image,0,0,largeur)
    
    
img = Image.open("woody.jpg")
quart_tour(img)
img.save("woody_endroit.jpg")
img.show()
```

> *Tester l'efficacité de cet algorithme*

> * Est-il plus rapide ou plus lent que votre premier algorithme?
* Le nombre d'opérations significatives suit une loi de recurence: $T(n) = 4 \times T(\tfrac{n}{2}) + C \times n^2$ Cela confirme t-il votre reponse à la question pécédente?

On rappelle que l'intérêt de la méthode est surtout de ne PAS utiliser de nouvelle image *planPixels* comme précédemment. Il s'agit d'une transformation *en place*.

# Liens et aides
* En cas de difficulté, consulter la page et les videos du site: [monlyceenumerique.fr](http://www.monlyceenumerique.fr/nsi_terminale/a/a3_div_regner.php)
