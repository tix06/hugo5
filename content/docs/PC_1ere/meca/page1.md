---
Title: enregistrer une trajectoire
---

# Enregistrer une trajectoire
Le but de la séance est d'enregistrer la trajectoire de plusieurs mouvements, sous la forme d'une chronophotographie.

Les chronophotographies sont utiles pour repérer les phases accélérées du mouvement. C'est à dire, les phases du mouvement où il y a une/des interaction(s).

## Préparer la tablette Android
Il sera nécessaire de charger, dans cet ordre, les 2 applications suivantes:

{{< img src="../images/app.png" >}}
* *Cx explorateur de fichiers* (Play Store, gratuit)
* *Motion shot*, qui n'est pas sur le Play store: 
  * à l'aide du navigateur (chrome par exemple), aller à l'adresse: [https://motion-shot.fr.uptodown.com/android](https://motion-shot.fr.uptodown.com/android)
  * Télecharger l'application (version en cours: 2.2.1)
* Ouvrir l'application *Cx explorateur de fichiers*. Choisir le stockage *principal*.

{{< img src="../images/explo1.png" >}}
* Aller dans le dossier *Download* et rechercher le fichier *motion-shot-2-2-1.apk*. Cliquer sur le fichier et *accepter l'installation*. Un message vous avertit des risques encourus pour l'installation d'une application non distribuée par le Play store. Accepter.

{{< img src="../images/explo2.png" >}}
## Premiers tests
On pourra alors utiliser l'application pour enregistrer les trajectoires de quelques mouvements (pas trop rapides). Comme présenté sur la video ci-dessous.

{{< img src="../images/video_motionshot.png" link="https://www.youtube.com/watch?v=FF8Qd48FO7o" caption="video de la chaine spc Richard Escudé" >}}
Vous pouvez alors vous tester l'application avec un premier mouvement.<br>
Choisissez un objet présentant un contraste suffisant par rapport au fond de l'image. Démarrez la vidéo, enregistrez le mouvement. 

La chronophtographie est générée lors de l'arrêt de l'enregistrement. Il s'agit d'une image qui se trouve dans le dossier *Pictures/Motion_Shot*

{{< img src="../images/explo3.png" >}}
{{< img src="../images/explo4.png" >}}
Un exemple de chronophotographie obtenue:

{{< img src="../images/Motion_Shot.jpg" >}}
# Travail pratique
## Expérimentations
Le matériel dans la classe permet de réaliser plusieurs situations expérimentales:

* Une bille lancée sur un plan horizontal
* Une bille lancée sur un plan incliné
* Une bille lâchée en haut d'un plan incliné, guidée par un rail
* Un pendule suspendu au plafond, en oscillation
* ...

Pour chacune de ces expériences, vous réaliserez la chronophotographie la plus précise possible, à l'aide de l'application téléchargée.

Vous téléchargerez ensuite l'image obtenue sur votre ordinateur (envoi en piece jointe d'un mail par exemple, ou partage par *Drive*). Il faut utiliser pour cela le menu *partager* en bas à droite de l'écran.

{{< img src="../images/explo5.png" >}}
## Pointage des positions
Télécharger le fichier compressé{{< a link="/scripts/meca/chronophotographie.zip" caption="chronophotographie.zip" >}}
Celui-ci contient:

* le fichier python à executer: chronophotograpie.py
* un dossier images avec divers enregistrements tests 


Déplacer et décompresser (dézipper) le fichier dans un dossier de vos documents: *Documents/physique/* par exemple.

Dans *Winpython*: Lancer un IDE Python, comme par exemple *IDLEX Python*. Dans le menu *Fichier*, ouvrir le programme *chronophotographie.py*. Puis *Executer* depuis le menu *Run > Run Module F5*.

Dans la fenêtre graphique, cliquer sur *select image* et suivre les instructions:

* Faire la calibration en cliquant sur le centre du cercle rouge
* Et réaliser le pointage, c'est à dire, cliquer sur la position du même point, au fur et à mesure de son avancée dans le mouvement. Des marqueurs s'ajoutent à l'image.<br>
La liste des coordonnées s'affiche alors à droite.

{{< img src="../images/imTest.png" alt="programme python chronophotographie" >}}
Lorsque la saisie est terminée, cliquer sur *valider*. Un fichier *coordonnees.txt* est alors créé dans le même dossier, avec les coordonnées du point. On peut consulter le contenu avec un editeur de texte (Visual Studio, ou Notepad++).

## Exploitation
Dans le programme IDLE python: ouvrir le programme *traitement.py*: Construisez et complétez votre script python au fur et à mesure des instructions. Executez régulièrement le script avec *Run > Run Module F5*.

* Après l'import des modules *pandas* et *matplotlib*, ajouter les instructions qui permettent de charger les coordonnées dans la variable *data*:

```python
import pandas as pd  # import de la librairie pandas (traitement données)
import matplotlib.pyplot as plt # et celle matplotlib (graphiques)
data = pd.read_csv("coordonnees.txt")
print(data)
```

{{< img src="../images/data.png" >}}
* Ajouter l'instruction suivante pour explorer l'objet *data*

```python
print(data.columns)
```

* Pour obtenir les valeurs de la seule colonne Y, on peut alors faire:

```python
print(data.Y)
```

{{< img src="../images/dataY.png" >}}
* Pour afficher le tracé (X,Y), on ajoute le module `matplotlib` et on écrit:

```python
plt.axis([0, 600, 0, 400])  # choix des echelles
plt.scatter(data.X,data.Y)
plt.show()
```

{{< img src="../images/output0.png" >}}
On remarque que la coordonnée Y est repérée à partir du bord inférieur de la fenêtre graphique. Alors que pour le pointage, c'était à partir du bord supérieur. On peut modifier les valeurs de TOUTE la colonne Y en faisant par exemple:

```python
data.Y = 400 - data.Y
```

Le graphique généré est alors le suivant:

{{< img src="../images/output.png" >}}
* Enfin, pour sauvegarder le graphique, il faudra remplacer `plt.show()` par `plt.savefig('output.png')`. Le programme complet devrait alors être:

```python
import pandas as pd  
import matplotlib.pyplot as plt
data = pd.read_csv("coordonnees.txt")
data.Y = 400 - data.Y
plt.axis([0, 600, 0, 400])
plt.scatter(data.X,data.Y)
plt.savefig('output.png')
```





