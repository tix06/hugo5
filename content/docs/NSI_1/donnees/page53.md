---
Title: transformer image ascii
---

# Projet ascii art
On va remplacer dans une image la couleur d'un pixel par un caractère ascii dont le remplissage permettra de faire varier la clarté de l'image.

Video explicative:

{{< img src="../images/video_ascii.png" link="https://www.youtube.com/watch?v=2U11986Ro9o" caption="lire la video" >}}

* Télécharger les [documents sources](../datas/src.zip) et décompresser l'archive.



Votre code devra donc :

* importer une image, éventuellement en couleur
* convertir cette image en niveaux de gris
* redimensionner cette image de façon à ce qu'elle n'ait qu'une centaine de pixels de large/haut afin de pouvoir être affichée dans le prompt de python ou qu'elle soit lisible dans un fichier texte.
* déterminer une série de caractères allant dans un ordre croissant d'opacité:
  * " " l'espace correspond à un pixel blanc
  * "@" peut être choisi comme le caractère le plus noir
  * choisir des caractères intermédiaires
* attribuer à chaque pixel un caractère et l'écrire dans une liste ou chaine de caractères
* afficher la liste/chaine de caractère de façon à visualiser le résultat
* éventuellement proposer de l'enregistrer au format txt
* afficher le contenu de ce même fichier comme une image.


# Liens et sources
* notebook du site [clogique](https://clogique.fr/nsi/notebook/?from=/nsi/premiere/td_tp/TP_Art_Ascii.ipynb#Exercice-7)
* [correction](../page541) du Projet ascii-art