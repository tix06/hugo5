---
Title: images numeriques 2
---

*Prérequis:* TP images numeriques ([partie1](../img_num1/))
# Filtres appliqués à une image

Quand on applique un filtre vert à une image numérique, on parcourt l'image entière en ne récupérant pour chaque pixel que sa composante verte, et en mettant le rouge et le bleu à 0. 

{{< img src="../images/naruto1.png" >}}

## Fonction filtreCouleur
Créer une fonction `filtreCouleur` qui prend en argument un objet de type Image et un tuple (r, g, b) , où r, g, et b sont des booléens, et qui renvoie une nouvelle image pour lesquelles les couleurs RGB sont conservées si le booléen
correspondant est True . Par exemple, l'image de Naruto verte ci-dessus est obtenue par le code :

```python
naruto = Image.open("Naruto.png")
narutoGreen = filtreCouleur(naruto, (False, True, False))
narutoGreen.show()
```

## Assembler les personnages
Créer ainsi des images NarutoRouge.png , NarutoBleu.png , NarutoJaune.png , NarutoMagenta.png et NarutoCyan.png

Correction: (à venir)

<!--
```python
def filtreCouleur(img, filtre) :
    fr, fg, fb, fa = filtre
	copie = Image.new(img.mode, img.size)
	width, height = img.size
	for x in range(width) :
		for y in range(height) :
			pr, pg, pb, pa = img.getpixel((x,y))
			copie.putpixel((x,y), (pr*fr, pg*fg, pb*fb, pa*fa))
			# ou copie.putpixel((x,y), tuple(f*p for f, p in zip(filtre, img.getpixel(x,y))
	return copie
```
-->

Créer maintenant l'image suivante: 

{{< img src="../images/naruto2.png" >}}



# Incrustation d'image sur fond vert
[L'incrustation d'image](https://fr.wikipedia.org/wiki/Incrustation) sur un nouveau décors est largement utilisé dans le cinéma.

L'algorithme qui *fabrique* la nouvelle image parcourt les pixels de l'image d'origine (celle avec le fond vert). A partir d'un certain seuil, si la couleur du pixel est franchement verte, c'est le pixel du decors qui placé dans la nouvelle image.

Utilisez les 2 images suivantes pour en créer une nouvelle, artificielle, en incrustant la première image dans la seconde.

{{< img src="../images/fond_vert.jpeg" caption="image issue du site www.event-picture.com" >}}



{{< img src="../images/apesanteur.jpeg" caption="une station spatiale" >}}

# Liens
* effets speciaux: [tpeeffetsspeciauxnumeriques.wordpress.com](https://tpeeffetsspeciauxnumeriques.wordpress.com/2016/12/08/lincrustation-sur-fond-vert-ou-fond-bleu/)
<!--
* remerciements à [www.zonensi.fr](https://www.zonensi.fr/NSI/Premiere/C04/ImagesBMP/ImagesBMP.pdf) pour l'idée du premier exercice
* et [labodemaths.fr](https://labodemaths.fr/WordPress3/nsi-fin-correction-tp-traitement-image/) pour l'idee du 2e exercice
-->

