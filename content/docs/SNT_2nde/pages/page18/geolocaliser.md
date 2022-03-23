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
La géolocalisation est un procédé qui permet de repérer une personne, un objet, un lieu sur une carte (le plus souvent numérique) à l’aide de ses coordonnées géographiques qui sont : 

* Sa latitude (en degrés) 
* Sa longitude (en degrés) 
* Son altitude par rapport au niveau moyen de la mer (en mètres) 

<figure>
  <img src="../images/france.png">
</figure>

<figure>
  <img src="../images/latlongitude.png">
</figure>

Le format numérique de la longitude est différent de celui de la latitude avec un chiffre significatif supplémentaire. Ceci s’explique par la valeur de l’angle qui ne dépasse pas 90° pour une latitude et qui peut atteindre 180° pour une longitude. 

Les coordonnées géographiques sont traditionnellement exprimées dans le système sexagésimal, parfois noté DMS : degrés minutes secondes. 
De nos jours, les notations équivalentes en degrés minutes décimales (DM) ou degrés décimaux (DD) sont également utilisées : 

* DMS : Degré : Minute : Seconde (49°30’00”) ;
* DM : Degré : Minute (49°30,0’) ;
* DD : Degré décimal (49,5000°), généralement avec quatre décimales 

| norme | exemple |
|--- |--- |
| Degrés DD | 48.225833 |
| Degrés, minutes DM | 48°13,54998' |
| Degrés, minutes, secondes | 48°13'32.9988'' |


# Trame NMEA
Protocole NMEA 0183 : (National Marine Electronics Association): protocole utilisé par les récepteurs GPS pour fournir la localisation sous une forme de trame normalisée facilement décodable. Ces données sont mises dans un format standard :

<figure>
  <img src="../images/nmea.png">
</figure>

Sur cette trame:

* Quel est le caractère de début de la trame?
* Quel est le séparateur entre les données?
* Que signifient les lettres N, E, M?
* Comment convertit-on 4836.5375 en 48°36’32.25’’? *Aide: il s’agit d’une conversion DD vers DMS.* 


# Positionner
Voici une trame affichée sur votre smartphone (utilisation de l’appli nmeaGPS):

`$GPGGA,093642.126,4342.1254,N,00103.2814,O,1,04,3.2,200.2,M,,,,0000*0E$`

* Déterminer l'heure de réception de la trame. On précisera les heures, les minutes et les secondes.
* Déterminer les coordonnées géographiques envoyées par la trame NMEA (DM)
* Convertir ces données en format DD.
* Positionner le point sur la carte

<figure>
  <img src="../images/carte.png">
</figure>

# Liens
* activité de SNT sur la synchronisation des horloges: [vittasciences.fr](https://fr.vittascience.com/learn/tutorial.php?id=253/9.-synchroniser-des-horloges)