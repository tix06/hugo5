---
Title: microbit ti83
---

La carte micro:bit peut être programmée à partir de la calculatrice TI-83 edition python. La programmation se fait en langage *Python*.

# Préparer le matériel

<figure>
  <div>
  <img src="../images/maj_ti7.png">
</div>
</figure>

Commencer par mettre à jour la calculatrice TI-83 Premium CE edition Python. [Voir la fiche explicative](/docs/SNT_2nde/pages/page12/TI_prisenmain/).

Puis changer de cable pour brancher la carte micro:bit sur l'ordinateur (cable USB: *ordinateur* vers micro usb B : *microbit*).

<figure>
  <div>
  <img src="../images/MB_maj.png">
</div>
</figure>

Télécharger le fichier [TI_Runtime_for_Microbit_ver_2.4.hex](/pdf/SNT_texas/microbit/TI_Runtime_for_Microbit_ver_2.4.hex) sur votre ordinateur.

Puis, à l'aide de l'explorateur windows, glisser-déposer ce fichier vers la carte micro:bit.

# Premier script
## le module Python

> Ecriture du premier programme:

> * Bouton **prgm** : Choisir `2:Python App`
* la fenêtre du shell Python s'ouvre alors. Vous pouvez selectionner l'une des options du menu en bas de l'écran à l'aide des touches `f(x)`, `fenêtre`, ... Ici, vous allez choisir `Nouveau`.

<figure>
  <div>
  <img src="../images/menu_shell.png">
</div>
</figure>

> * Saisir le nom de votre premier programme puis valider (par exemple `MBINIT` puisque vous demarrez un premier script d'initiation à la carte microbit).
* Pour importer la librairie *microbit* dans votre programme, aller dans le *catalogue* pour selectionner l'instruction `from SCRIPT import *`: Faire `2nde 0` qui lance le menu *catalogue*, puis la touche `alpha` et `F`. Selectionner la ligne `from SCRIPT import *`

<figure>
  <div>
  <img src="../images/catalogue.png">
</div>
</figure>

> * ecrire le nom du module `microbit` à la place du mot SCRIPT

A partir de maintenant, les autres modules relatifs à la carte micro:bit seront ensuite appelés à partir du menu « microbit »
qui vient d’être rajouté dans les modules.

<figure>

<img src="../images/fns_microbit.png">

</figure>

## Saisir le script

> A la ligne suivante de votre script, vous allez ajouter la librairie qui pilote l'affichage de la carte micro:bit:

> * menu du bas de la fenêtre `Fns`: Selectionner le menu `Module` en vous deplaçant avec les flèches.
* Choisir `8:micro:bit` puis `1:affichage`, ce qui devrait ajouter la ligne `from mb_disp import *`
* Dans le menu des `Modules`, il est apparu une nouvelle collection d'instructions: `9:affichage`. Choisir cette collection puis choisir `1.clear()`
* Faire de même et choisir cette fois `2.show` de cette même collection. Cela devrait afficher `display.show(,delay=400,wait=True)`. 
* Le curseur clignote au niveau du premier paramètre que vous devrez renseigner: mettez `"Image.HAPPY"` à l'aide de l'editeur de texte (bouton du bas `a A #`). Valider les symboles avec la touche **entrer**. Faites `Coller` lorsque vous avez terminé la saisie.

<figure>

<img src="../images/editeur.png">

</figure>

Votre programme devrait ressembler à ceci:

<figure>

<img src="../images/scriptini.png">

</figure>

## Executer
Relier alors la carte micro:bit à la calculatrice à l'aide du cable usb mini B vers micro B.

Puis executer le script: Option `Exec` de la fenêtre d'edition...

<figure>
<div>
<img src="../images/smiley.png">
</div>
</figure>

> A vous de jouer: remplacer l'image HAPPY par celle Image.SAD

# Liens
* [Découvrir la carte microbit](/pdf/SNT_texas/MBpresentation.pdf) par J.L Balas et A. Yazi

