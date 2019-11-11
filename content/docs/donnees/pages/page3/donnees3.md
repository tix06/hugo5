---
Title : ipython notebooks
---

# Contenu du depôt : 
## numériser
* `SNT_CAN_3bits.ipynb` : conversion numérique - analogique d'un son
* `ISN_D12_numerizing` : les fonctions en python; numeration de position et le type `tuple` en python

## géolocaliser
* `SNT_C13_NMEA.ipynb` : principe de la géolocalisation avec l'analyse d'une trame NMEA; découpage d'une chaine de caractères à partir du rang des caractères; les coordonnées de repérage sur la Terre longitude latitude; les fonctions en python
* `ISN_D14_NMEA.ipynb` : idem SNT mais version ISN
* `ISN_D14_NMEA_csv.ipnb` : lecture d'un fichier *csv* et découpage en listes; traitement des listes; géolocalisation.

## format_csv
* ISN et SNT : dans le dossier `format_csv` ouvrir le fichier `data_csv.ipynb`

Au programme : formulaire, création d'un fichier `.csv`. Ouverture du fichier avec un tableur et analyse des données.



<form id="fs-frm" name="bouton">
<a href="https://mybinder.org/v2/gh/tix06/notebooks.git/master" target="_blank">
    <input type="button" value="Cliquer pour ouvrir le depôt"></a>
</form>
<style>
#fs-frm:hover { font-size: 105% }

lien sur mybinder : 
https://mybinder.org/v2/gh/tix06/notebooks.git/master





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
