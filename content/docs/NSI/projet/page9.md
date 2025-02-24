---
Title: Recherche Exoplanetes
---

# Recherche d'exoplanètes

Proposition de systèmes planétaires qui seront observés avec ASTEP
Année 2024-2025

*Dossier complet: [donnees-astep2024.tgz](/scripts/astro/donnees-astep2024.tgz)*

## TOI-270
* Système avec 3 planètes déjà confirmées mais avec des inconnues sur leurs masses/tailles/orbites dû à l’interaction des unes avec les autres.
* Suivi par ASTEP pour déterminer les variations de temps de transit qui aideraient à la détermination complète du système.

{{< img src="/scripts/astro/donnees-astep2024/TOI-270/TOI-270.01/TIC259377017-01_20240513_ASTEP-ANTARCTICA_R_lightcurve.png" caption="données pour la planète 1" >}}


* Collaboration avec MaxGuenther – chercheur à l’ESA(ESTEC,PaysBas).
* Données de l’étoile (naine M)
  * Température : 3551 ± 74 K
  * Rayon : 0.37 ± 0.01 Rsun (Rayon solaire)
  * Masse : 0.36 ± 0.02 Msun (Masse solaire) 
  * Luminosité : 0.020 ± 0.001 Lsun (Luminosité solaire) 
  * Distance : 22.48 ± 0.01 parsec

* Liens de téléchargement
	* [planète 1](/scripts/astro/donnees-astep2024/TOI-270/TOI-270.01/TIC259377017-01_20240513_ASTEP-ANTARCTICA_R_measurements.csv)
	* [planète 2](/scripts/astro/donnees-astep2024/TOI-270/TOI-270.01/TIC259377017-01_20240622_ASTEP-ANTARCTICA_R_measurements.csv)
	* [planète 3](/scripts/astro/donnees-astep2024/TOI-270/TOI-270.02/TIC259377017-02_20230623_ASTEP-ANTARCTICA_R_measurements.csv)

## TOI-201
Système avec possiblement 3 planètes. Seule la 2ème a été détectée par ASTEP. La profondeur du transit de la planète la plus proche à l’étoile est trop faible pour être détecté par ASTEP et ce n’est pas encore sûr si la 3ème peut transiter et sa période est en train d’être déterminée.

* Lesystème n’est pas encore bien connu,la détermination de masses des planètes par  vitesse radiale est en cours mais pas encore finie.
* La planète 01 (2ème depuis son étoile) a des variations de temps de transit de quelques minutes/dizaines de minutes qu’ASTEP suit pour mieux déterminer les interactions et essayer de comprendre si la 3ème planète existe.
* ASTEP suit cette cible en collaboration avec Ismael Mireles (Université de New Mexico, USA)
* Données de l’étoile (typesolaire)
	* Température : 6461 ± 133 K
	* Rayon : 1.33 ± 0.06 Rsun (Rayon solaire)
	* Masse : 1.31 ± 0.21 Msun (Masse solaire) 
	* Luminosité : 2.78 ± 0.12 Lsun (Luminosité solaire) 
	* Distance : 113.8 ± 0.3 parsec

Lien de téléchargement: [Planète 2](/scripts/astro/donnees-astep2024/TOI-201/TIC350618622-01_20240319_ASTEP-ANTARCTICA_R_measurements.csv)


# Analyser la courbe de transit
* Lire les données d'un fichier *csv*: [python - entrées/sorties - lire csv](/docs/python/pages/ES/page1/)
* Ecrire des données (table) dans un fichier: [python - entrées/sorties - ecrire](/docs/python/pages/ES/page1/)
* Sauvegarder une liste/dictionnaire dans un fichier: [python - entrées/sorties, module pickle](/docs/python/pages/ES/page1/)
* Tracer un graphique avec matplolib: [matplotlib.pyplot](/docs/python/pages/traitement/page1/)
* Lissage de courbe bruitée: [tuto moyenne glissante](/docs/NSI/structure/page11/)
* Regression linéaire: [tuto](/docs/python/pages/traitement/page2/)


# Traitement de données en table - Pandas Dataframe
* Manipulation de dataframe: [tuto](../page10)
* Base de données et python: [tuto](/docs/python/pages/traitement/page3)

