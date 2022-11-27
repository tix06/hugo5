---
title: L'atome de Bohr
---
# Spectres de raies 
## Lampes spectrales 
On observe différentes lampes à l'aide d'un spectroscope:

{{< img src="../images/spectro1.png" caption="Détail du spectroscope et de l'emplacement pour le réseau dispersif" >}}
{{< img src="../images/spectro2.png" caption="Regarder vers la lampe de bureau avec le reseau dispersif" >}}
{{< img src="../images/spectro3.png" caption="Faire pivoter le reseau dispersif pour observer les spectres de la lumière blanche" >}}
> Mettre le reseau dispersif dans le spectroscope et l'Utiliser pour visualiser le spectre de quelques lampes.<br> 
**Question a** Quelle lampe a le spectre suivant?

{{< img src="../images/Hg.png" caption="Spectre inconnu" >}}

> **Question b:** Reconnaitre les autres lampes à partir du tableau suivant. 

<br>

| Element chimique | Raie 1  (nm)| Raie 2 | Raie 3 | Raie 4 | Raie 5 |
| --- | --- | --- | --- | --- | --- |
| Soufre | 410 | 470 | 500 | 570 | 605 |
| Néon | 585 | 620 | | | | 
| Hydrogène | 395 | 410 | 435 | 485 | 655 |
| Oxygène | 535 | 595 | 605 | 615 | 645 |
| Hélium | 445 | 500 | 590 | 670 | | 
| Mercure | 407 | 436 | 546 | 577 | 579 |


# Modèle de l'atome de Bohr - aspect theorique
## Niels Bohr
Niels Bohr, physicien danois, formule en 1913 l'hypothèse que les atomes occupent des niveaux d'énergie bien déteminés.
Son modèle atomique est adapté à l'atome d'hydrogène. Mais il sera aussi adapté aux autres atomes avec des enrichissements venant de la théorie quantique (*Hamilton*).

## Modèle atomique
Cette énergie est liée à l'interaction entre le noyau de l'atome et son électron.
Elle dépend de la position de l'électron, sur des niveaux électroniques (les orbitales) qui vont du plus près (niveau n=1) au plus loin de l'atome (niveau n=7).

L'électron occupe préférentiellement l'orbitale de plus basse énergie (n=1).
Lorsque l'électron change d'orbitale (de niveau d'énergie), on dit qu'il y a une transition électronique.

Une transitions électronique vers un niveau inférieur peut s'accompagner d'une emission d'une particule de lumière (un photon). La video suivante explique ceci plus en détail : 

<iframe width="560" height="315" src="https://www.youtube.com/embed/aoT8HHLRrSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# L'animation : lampe à décharge (utilise java)
## Interaction lumière - matière
L'expérience suivante simule une lampe à décharge : avec une tension suffisante, délivrée par une pile, des électrons sont émis dans un tube depuis l'électrode (-) vers l'électrode (+). <br>
Sur leur passage, ils rencontrent un atome constitutif du gaz de ce gaz.
L'énergie du choc est absorbée par l'atome. Son électron passe alors du niveau fondamental (n=1) vers un niveau supérieur.<br>
Puis, après un certain temps, il revient vers son niveau fondamental, directement, ou avec des étapes à des niveaux intermédiaires (par exemple 3 -> 2 puis 3 ->1). Il se produit une ou plusieurs transitions électroniques, avec émission de **photons**[^1]. 

Ces transitions sont représentées sur le diagramme d'énergie, à droite. Chaque plateau horizontal est une *orbitale*, possédant un certain *niveau d'énergie*, occupé ou non par l'électron.

Le spectromètre mesure le nombre de *photons* émis pour chaque longueur d'onde.
 
 
 <div style="position: relative; width: 300px; height: 197px;"{{< a link="https://phet.colorado.edu/sims/discharge-lamps/discharge-lamps_fr.jar" caption="" >}} 
## Travail
 
 Cocher les paramètres : *spectromètre, gribouillis, passer au ralenti*
<br>
 Les questions suivantes portent sur l'atome d'Hydrogène. Il s'agit de l'atome par defaut dans la lampe à decharge presentée ici.

 1. Légender le schéma fourni avec : électrode (-), électrode (+), pile, atome, électron, photon, diagramme d'énergie, fenêtre du spectrophotomètre, transition électronique
 2. Que signifie le numéro inscrit sur l'atome de gaz, au milieu du tube ?
 3. Les électrons qui percutent l'atome, sont ils ralentis par le choc ? Si oui, dans quel cas ?
 4. Combien de photons sont émis lors d'un choc entre électron et atome ?
 5. Comment soit être réglée la tension de polarisation des électrodes pour que les photons émis soient tous de couleur rouge ?
 6. Régler la pile pour avoir des photons de différentes couleurs. Attendre suffisament longtemps pour que le spectrophotomètre indique un certain nombre de radiations émises. Relever les valeurs des longueurs d'ondes des photons émis.
 7. Utiliser le [lien suivant](http://ressources.univ-lemans.fr/AccesLibre/UM/Pedago/physique/02/divers/raiehydro.html) pour repérer *quelles transitions sont responsables de l'émission des photons du domaine du visible*. (de quel niveau, et vers quel niveau électronique)
 8. Comment s'appelle cette série de transition avec emission dans le visible : Lyman, Balmer, Paschen, Brakett, Plund ?
 
 # Compléménts
 [^1]: Pour faire simple, un **photon** est un *grain* de lumière.