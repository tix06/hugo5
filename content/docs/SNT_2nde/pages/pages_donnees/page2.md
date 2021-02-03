---
Title: Analyse de données
---


# Modèle prédictif
## Principe
Un modèle prédictif ne peut être établi qu'à partir d'une étude prealable de données. Une étude statistique permet de repérer si certains paramètres sont liés entre eux. Alors, si ces données étaient suffisamment nombreuses et précises, il est possible d'établir des lois mathematiques sur ces données. Une manière de représenter ce lien entre paramètres est d'établir une loi de regression linéaire, par exemple.

A partir de nouvelles données, on peut alors, grâce à une simulation, prédire le comportement futur  du nouvel objet. A condition que celui-ci fasse partie de la même famille d'objets que ceux qui ont permis d'établir le modèle.

## Un exemple de prédiction
Aller sur la page <a href="http://exoplanet.eu/GCM1D/" target = "blank">Exoplanet.eu</a>.

Cliquer sur le lien *online tool here* au milieu de la page de description.

La page suivante permet de simuler le comportement d'une planete dans son système stellaire. Il suffit de choisir certains paramètres comme par exemple:

* la distance de la planète à son étoile
* la courbure de sa trajectoire
* sa période de revolution
* le type d'étoile
* sa couverture oceanique
* ...

<figure>
<img src = "../images/params.png" alt="choix des paramètres de la planète">
<figcaption>Choix des paramètres de la planète</figcaption>
</figure>

La simulation demarre une fois que l'on clique sur le bouton **START**.

<figure>
<img src = "../images/modeles.png" alt="modeles predictifs">
<figcaption>Simulation du comportement de la planète</figcaption>
</figure>

Le logiciel utilise alors un modèle prédictif, établi à partir de l'observation de nombreuses autres planètes ou corps celestes, pour déterminer la temperature de surface de l'astre au cours du temps, sa trajectoire, etc...

> A tester vous même: faire un test à l'aide du simulateur.

# Utilisation de la basse de données
## Ouvrir la base de données
Pour consulter la base de données de toutes les planetes observées, cliquer sur *Tous les catalogues*.

<figure>
<div>
<img src = "../images/catalogues.png" >
<figcaption>accès à la base de données</figcaption>
</div>
</figure>

Le tableau donne les caractéristiques connues pour ces planètes. Leur nombre est gigantesque. Vous allez utiliser les formules de filtre pour en selectionner quelques unes.

## Filtrer
Par exemple, si l'on cherche à étudier les seules planètes telluriques, on choisira celles dont le rayon est un peu supérieur ou un peu inférieur à celui de la Terre. 

D'après le <a href="https://media.afastronomie.fr/PetiteOurse/SIDERAL_PDF/outilPO%20-%20doc%20-%20tableau%20comparatif%20simplifié%20des%20planetes.pdf" target="blank">tableau comparatif des planètes du système solaire</a>, la masse (*mass en anglais*) de la Terre est 317 fois plus petite que celle de Jupiter, ce que l'on peut exprimer sous la forme:

$$mass:mjup = 0.00315$$

* 1/317 = 0.00315
* `mass` = masse Terre
* `mjup` = masse Jupiter
* `masse:mjup` = masse de la Terre rapporté à celle de Jupiter

On pourrait donc selectionner uniquement les planètes dont la masse (rapporté à celle de Jupiter) est comprise entre 0.001 et 0.004, soit:

$$mass{:}mjup > 0.001 ~AND ~mass{:}mjup < 0.004$$ 

> **A vous de jouer:** 

> 1. Dans la barre de formule, vous écrirez la relation qui permettra de filtrer les planètes, et conserver celles dont les masses sont comprises entre 0.001 et 0.004 fois celle de Jupiter.
> 2. Ajouter aussi un filtre sur le rayon: $$radius{:}rjup < 0.1$$

<figure>
<img src = "../images/filtre.png">
<figcaption>appliquer un filtre sur la base de données</figcaption>
</figure>

## Loi de régréssion linéaire
### Entrer les données dans un tableau
On cherche maintenant une loi entre les grandeurs *mass* et *radius* pour ces planètes. Le modèle mathematique possible est le suivant:

$$\rho= \tfrac{mass{:}rjup}{(radius{:}rjup)^3}$$

Soit: la masse volumique relative à celle de Jupiter est égale à sa masse relative, divisée par son rayon relatif, à la puissance 3.

> Entrer les données dans un tableur:

> * Sur votre **calculatrice Ti-83**, commencer par effacer les listes: appuyer sur `2nde +` pour accéder au menu `mém`.
* Choisir `4:EffTtesListes`
* Appuyer sur le bouton `stats` puis `1:Modifier`.
* Entrer alors les données issues de la base de données: celle correspondant à *mass* dans `L1` et celles correspondant à *radius* dans `L2`
* Ajouter en dernière entrée la valeur 0 dans chacune des 2 colonnes (une planète de rayon 0 aura aussi une masse de 0...)
* Quitter alors le tableur: `2nde mode` ce qui correspond à `quitter`.
* Dans la fenêtre de calcul, saisir: `L2^3` puis touche **STO &rarr;** et `L3` pour obtenir: $$L2^3 \rightarrow L3$$

Si vous revenez sur la fenêtre d'edition du tableau, celui-ci devrait ressembler à ceci:

<figure>
<img src = "../images/Capture1.png">
<figcaption>fenêtre tableur de la Ti-83</figcaption>
</figure>

### Afficher le nuage de points

> * Sur votre **calculatrice Ti-83**, choisir les listes de valeurs: faire `2nde f(x)`, ce qui correspond à `graph stat`. Choisir `1:Graph1...Aff` puis: 
	* `Aff`
	* Type: le nuage de points
	* XListe : `L3`
	* YListe : `L1` 

<figure>
<img src = "../images/Capture2.png">
<figcaption>selection des séries L1 et L3 pour X et Y</figcaption>
</figure>

> * Réglage des axes: bouton `fenêtre`. Choisir:
	* Xmin=0
	* Xmax=0.001
	* Ymin=0
	* Ymax=0.005

<figure>
<img src = "../images/Capture3.png">
<figcaption>Réglage des axes</figcaption>
</figure>

> * Appuyer alors sur le bouton `graphe` pour visualiser la distribution de points.

### Régréssion linéaire

> * Appuyer sur le bouton `stats`, puis menu `CALC`
* Choisir `4:RégLin(ax+b)`
	* Xliste: `L3`
	* Yliste: `L1` 
	* puis descendre et appuyer sur `calculer` en bas de la fenêtre

Recopier alors le coefficient obtenu pour `a`. Celui-ci représente la masse volumique relative d'une planète tellurique moyenne, rapportée à celle de Jupiter (1,3g.cm<sup>-3</sup>).

# Prolongement et liens
* On pourra faire ce même travail pour une série de planètes gazeuses. Il faudra cette fois choisir des planètes dont les masses et les rayons sont proches de ceux de Jupiter.

* Les planètes telluriques et gazeuses diffèrent grandement par leur densité, comme on peut le voir sur le dossier suivant: [futura-sciences](https://www.futura-sciences.com/sciences/questions-reponses/astronomie-planete-tellurique-planete-gazeuse-differences-6462/)

* Exoplanète : première mesure de la densité d’une très jeune planète avec SPIRou: [article du CNRS.fr](https://www.cnrs.fr/fr/exoplanete-premiere-mesure-de-la-densite-dune-tres-jeune-planete-avec-spirou)



