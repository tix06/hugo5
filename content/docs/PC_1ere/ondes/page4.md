---
Title: TP filtrage
---

# Filtrage simple
## Image numérique
Une image est constituée de pixels. Chacun de ces pixels est codé numériquement par sa couleur, sur 3 octets (un octet pour le canal rouge, 1 autre pour le vert, et un dernier pour le bleu). Un pixel rouge intense a ainsi pour codage numérique: 255, 0, 0.

## Filtre
Lorsque l'on applique un filtre sur une image, on modifie les valeurs de chaque canal coloré, de chaque pixel, que l'on met dans une nouvelle image.

<figure>
  <img src = "../images/filtre_orange.png">
</figure>

La modification se fait par une opération mathématique sur chacun des canaux.
Ces opérations peuvent être différentes pour chaque canal.

Par exemple, pour appliquer un filtre rouge, on peut décider de conserver la valeur d'origine du rouge, et modifier celle du vert et du bleu, en les mettant à zero:

```python 
def filtre(r,v,b):
  r = r
  v = 0
  b = 0
  return r, v, b
```

L'algorithme précédent du fitre rouge est donné en langage python.

*Remarquer que les lignes du bloc de code de la fonction sont indentées dans le script (2 espaces par rapport au bors gauche)*.

> **Question a**: Donner le script de la fonction `filtre` en langage python qui applique un filtre cyen (les canaux `v` et `b` sont transmis, pas le rouge). 
<br>
> **Question b**: Donner Donner le script de la fonction `filtre` en langage python qui applique un filtre orange (voir image plus haut).

## TP: utilisation d'un programme de filtrage
### Le programme
Le [programme](/scripts/anaglyphe.zip) se trouve dans le fichier *zippé* qui porte le nom *anaglyphe.zip*. Vous commencerez par *dezipper ce fichier* dans vos documents.

Le programme est constitué de deux modules: `filtres.py` et `interface.py`. Vous ouvrirez chacun de ces fichiers avec le logiciel *IDE Python* de la distribution *Winpython*.

Mettez vous dans la fenêtre contenant le script *interface.py*. Executez ce script (menu *Run* > *Run module F5*).

Organisez vos fenêtres comme sur l'image suivante:

<figure>
  <img src = "../images/ide_python.png">
</figure>

Vous avez alors sur l'écran:

* la fenêtre d'edition du script `interface.py`
* la fenêtre d'edition du script `filtres.py`
* la fenêtre du shell python (montrant les messages à l'execution)
* la fenêtre graphique du programme avec interface graphique (image, boutons).

**Comment utiliser le programme?**<br>
Il s'agit d'un programme permettant de créer 2 nouvelles images à partir de la premiere. (par defaut, l'image du film Avatar<sup>(R)</sup> de James Cameron)

* Le bouton *filtre 1* permet d'appliquer le filtre 1 à l'image et créé une nouvelle image, qui est alors affichée. (par defaut, cela applique un filtre rouge)
* Le bouton *filtre 1* permet d'appliquer le filtre 1 à l'image et créé une nouvelle image, qui est alors affichée. (filtre cyan par defaut)
* Le bouton interlacer va superposer les 2 images et créer une image visible en 3D avec des lunettes adaptées.

Vous pouvez créer cette image par appui successif sur ces 3 boutons.

**Comment mofifier le programme?**<br>
Au cours de la seance, vous aurez besoin de modifier les fonctions `filtre1` et `filtre2`. Vous modifierez directement le script du fichier `filtres.py`, dans la fenêtre d'edition deja ouverte. Pour que les modifications soient prises en compte, vous devrez fermer la fenêtre graphique, puis relancer le programme `interface.py`.

## à vous de jouer
Télécharger le fichier image [banane.jpg](../images/banane.jpg)

> Modifier alors le filtre appliqué pour que celle-ci apparaisse orange, comme dans l'exemple proposé plus haut. Vous pourrez utiliser la fonction `filtre1` du fichier `filtres.py` pour programmer les valeurs du filtre.

> Modifier encore le filtre à appliquer sur cette banane pour obtenir une couleur *achromatique* pour cette banane.<br>
**Question c:** indiquer le script de la fonction qui vous a permis de la rendre achromatique. Justifiez votre démarche.

## Améliorer des photographies numériques
D'autres images sont proposées dans le dossier *images*.
### Photographie astronomique
Les photographies astronomiques sont prises avec des réglages particuliers. A cause du manque de lumière, les temps de pose sont plus longs. Et les capteurs numériques sont très sensibles aux radiations rouge émises par l'hydrogène. Les photographies sont alors trop "rouges": [ciel profond trop rouge.jpg](../images/ciel profond trop rouge.jpg)

> Adaptez le filtre à appliquer à la photographie `ciel profond trop rouge.jpg` pour que celle-ci soit plus équilibrée au niveau des couleurs.
> **Question d:** Indiquer la fonction pour le filtre utilisé

<figure>
  <img src = "../images/photo_ciel_filtre.png">
  <figcaption>résultat à obtenir après filtrage</figcaption>
</figure>

### Fruits trop rouges
On pourra appliquer à nouveau ce filtre à l'image de fruits trop rouge. On essaiera de reconstruire une image sur le modèle suivant:

<figure>
  <img src = "../images/photo_fruits_filtre.png">
  <figcaption>résultat à obtenir après filtrage</figcaption>
</figure>

# Filtrages plus complexes
## Les structures conditionnelles en python
En python, les structures conditionnelles s'écrivent sous la forme:

```python
if <condition> :
  <bloc a executer si condition VRAIE>
else:
  <bloc a executer si condition FAUSSE>
```

Ainsi, il peut être utile, si l'on veut doubler la valeur du canal rouge `r`, à la condition que `r` soit inférieur à 127:

```python
if r < 127 :
  r = r * 2
```

## Image trop foncée
L'[image suivante](../images/image foncee.jpg) est trop foncée. Il faudra augmenter l'intensité de chaque canal coloré, `r`, `v`, `b`.

Mais il faudra faire attention à ne pas depasser la valeur maximale admise pour chacun de ces canaux (255)

> **Question e:** Recopier le script utilisé et justifier votre demarche.


## Image trop terne
L'[image suivante](../images/image terne.jpg) manque de contraste: les parties claires sont d'intensité trop proches de celles sombres. Retablir les contrastes de cette image.

> **Question f:** Recopier le script utilisé et justifier votre demarche.
