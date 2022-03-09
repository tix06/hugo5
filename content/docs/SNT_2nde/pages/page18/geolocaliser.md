---
Title : geolocaliser
---

# Géolocaliser
## principe de la trilatération
Les systèmes américains GPS et européens Galiléo permettent la *géolocalisation* par satellite d'un recepteur.

La *géolocalisation* est le calcul de la position sur Terre.


Le récepteur va recevoir en continu 2 types d'informations de la part de chacun des satellites:

* la position du satellite
* l'heure d'envoi du signal depuis le satellite

Le recepteur va utiliser ces informations pour réaliser un calcul de positionnement. D'abord en calculant sa distance au satellite: Il utilise les temps t0 d'emission du signal et t1, celui de reception:

<figure>
  <img src="../images/Ti-9-SNT-2.png">
</figure>


Le signal se deplaçant à la vitesse de la lumière, c = 300 000 km/s.

<figure>
  <img src="../images/Ti-9-SNT-1.png">
</figure>

Cette durée, t1 - t0 est calculée à partir des temps t1 et t0, mesurés par deux horloges différentes, et qu’il faudra synchroniser au mieux. 

<figure>
  <img src="../images/Ti-9-SNT-4.png">
</figure>

L’horloge du récepteur nécessite d’être régulièrement synchronisée avec celle des satellites émetteurs. C’est grâce à un algorithme calculant sur  les écarts de positionnement, que l’horloge du récepteur se met à l’heure des émetteurs. Cela nécessite de capter les signaux ﻿d’au moins 4 satellites GPS.

Pour déterminer la position précise du recepteur sur Terre, il faut utiliser le resultat du calcul de la distance à ces 4 satellites, et déterminer le point d'intersection de 4 sphères (video explicative).

<a href="https://youtu.be/WoqpQbWdacQ" target=_blank>
<figure>
  <img src = "../images/videoGPS.png">
  <figcaption>KEZAKO: Comment fonctionne un GPS?</figcaption>
</figure>
</a>

## Coordonnées terrestres


# Liens
* activité de SNT sur la synchronisation des horloges: [vittasciences.fr](https://fr.vittascience.com/learn/tutorial.php?id=253/9.-synchroniser-des-horloges)