---
Title : ipython notebooks PC
---


# Notebooks en PC

Sur chaque TP, cliquer sur le titre (téléchargement), ou bien Binder pour lancer *Binder* avec le TP ouvert, ou encore avec *Basthon*.

L'environnement de développement utilisé est Jupyter. 

* Si vous téléchargez le fichier en local, vous devrez l'executer avec Jupyter notebook déjà installé. Au lycée, le fichier doit être mis dans le dossiers *notebooks*, et lancé avec le programme *ipython_win10.bat*:

<figure>
<img src ="/images/environment.png">
<figcaption>Glisser le fichier d'extension<br>
<i>.ipynb</i> dans le dossier <i>notebooks</i></figcaption>
</figure>

* Si vous utiliser Jupyter avec *Binder* <a href="https://mybinder.org/v2/gh/tix06/notebooks_Physique.git/master" target="_blank"><img src="/images/binder.svg"></a> (serveur distant): Attention : les données ne sont pas sauvegardées sur Binder. Pensez à download/upload votre travail à la fin.

* <a href="https://basthon.fr/" target=_blank>Basthon</a> est l'acronyme de "Bac À Sable pour pyTHON". Permet l'execution d'un notebook sans installer de distribution Python. Il vous faudra choisir: *Notebook* à la page d'accueil, puis charger vos documents depuis le menu *Ouvrir*.

# Contenu du depôt :
Accéder au depot: cliquer sur *launch binder* <a href="https://mybinder.org/v2/gh/tix06/notebooks_Physique.git/master" target="_blank"><img src="/images/binder.svg"></a>

## Traitement RVB d'une photographie numerique
* `P13_Traitement_filtre/notebook filtre.ipynb` programme pour parcourir les données d'une image et modifier les composantes RVB de chaque pixel.


## Simulation d'une onde progressive
* `P21_simulation onde.ipynb` programmme pour représenter une courbe sinusoidale qui se deplace au cours du temps.

## Graphique et modelisation
* `graphique modelisation.ipynb` programme pour tracer une droite de regression linéaire et obtenir les coefficients de la modélisation.

## Chronophotographie
* <a href="/scripts/meca/chronophotographie.zip" download="chronophotographie.zip">chronophotographie.zip</a>: programme qui permet le traitement d'une chronophotographie (pointage), et de générer un fichier de coordonnées (*coordonnees.txt*). Il faudra télécharger le dossier complet (fichier .py et dossier images) et executer en local avec un IDE Python. Notice [ici](/docs/PC_1ere/meca/page1/)

## Trajectoire parabolique et conservation de l'énergie mécanique
* <a href="/scripts/meca/paraboliqueEm.zip" download="parabolique.zip">parabolique.zip</a>: notebook qui permet de traiter les données issues de l'enregistrement d'une trajectoire parabolique. Les données sont dans le fichier `data_parabolique.csv`.

<!--
<form id="fs-frm" name="bouton">
<a href="https://mybinder.org/v2/gh/tix06/notebooks_Physique/HEAD" target="_blank">
    <input type="button" value="ouvrir le depôt dans un nouvel onglet"></a>
</form>

lien sur mybinder : 
https://mybinder.org/v2/gh/tix06/notebooks.git/master


<style>
#fs-frm:hover { font-size: 105% }







#fs-frm input,

#fs-frm label {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend {
  font-size: .825em;
  margin-bottom: .5em;
}
/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea {
  border: 1px solid rgba(0,0,0,0.2);
  background-color: rgba(255,255,255,0.9);
  padding: .75em 1em;
  margin-bottom: 1.5em;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
  width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
  outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  margin-bottom: 0;
}
#fs-frm select {
  text-transform: none;
}

/* address, locale */
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  display: inline;
}
#fs-frm fieldset.locale input[name="city"] {
  width: 52%;
}
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  width: 20%;
}
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"] {
  margin-right: 3%;
}
</style>
-->
