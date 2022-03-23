---
Title: GPS services
---

# Services sur smartphone
Sur Iphone: Réglages > Confidentialité > Services de localisation.

On peut paramétrer les permissions pour chacune des app de son smartphone.

<figure><div>
  <img src="../images/localisation_iphone.jpg"></div>
</figure>

Lorsque l'on choisit une app, celle-ci précise à quoi serviront les données de localisation (celles de la <a href="http://localhost:1313/docs/SNT_2nde/pages/page18/geolocaliser/#trame-nmea">trame NMEA</a>) partagées avec le smartphone. 



* Booking, Expedia: "pour trouver des hébergements et hôtels près de chez vous"
* Facebook, Instagram: "pour aider à indiquer votre présence dans un lieu, pour être notifié des évènements locaux, pour personnaliser du contenu"
* météo: "quand des épisodes de pluie ou de neige commencent"
* ...

# Les cartes numériques
Elles offrent de nombreux avantages par rapport aux cartes papier.
## Géoportail
Les cartes de <a href="https://www.geoportail.gouv.fr/carte">Géoportail</a> affichent des couches de données sur un fond de carte.

Elles permettent de zoomer, et ainsi de modifier dynamiquement l'echelle, mais aussi de mesurer une surface, créer un itinéraire, ... (<a href="https://www.sport-nature.net/astuces-geoportail/">voir ici</a>)

## Openstreetmap
<a href="https://www.openstreetmap.org/#map=13/43.6869/7.2203&layers=O">OpenStreetMap</a> autorise en plus l'ajout collaboratif de données cartographiques. (nommer un lieu, une rue, un magasin, la présence d'une boite postale, d'une fontaine, d'une oeuvre de street-art, ...).


Les fichiers d’itinéraires sont un autre exemple de données standardisées afin de pouvoir être échangées entre applis de cartes numériques: c’est le format .GPX

# Calcul d'initéraire
La recherche du meilleur itinéraire d'un point à un autre peut être représenté sur un graphe pondéré. Le calcul d'itinéraire se fait à l'aide d'algorithmes prenant de nombreux paramétres en compte.

*Exemple:* 

```python
fonction recherche_itineraire(depart, arrivee, graphe):
  ville_courante <- depart
  itineraire.ajouter(ville_courante)
  tant que ville_courante != arrivee:
    ville_courante <- ville_voisine_plus_proche(ville_courante, graphe)
    itineraire.ajouter(ville_courante)
  retourner itineraire
```

<figure>
  <img src="../images/graphe1.png">
  <figcaption>graphe</figcaption>
</figure>

> Questions:

> 1. Quel itineraire est retourné par l'appel de la fonction avec les paramètres suivants: `recherche_itineraire("Montpellier", "Lyon", graphe)` ?
<figure>
  <img src="../images/graphe2.png">
  <figcaption>Montpellier => Lyon</figcaption>
</figure>
2. Quel autre itineraire est retourné par l'appel de la fonction avec les paramètres suivants: `recherche_itineraire("Lyon", "Montpellier", graphe)` ?
<figure>
  <img src="../images/graphe3.png">
  <figcaption>Lyon => Montpellier </figcaption>
</figure>
3. Cet algorithme donne t-il à coup sûr le chemin le plus court? Pourquoi?

*Remarque:* L'algorithme le plus efficace pour la recherche de l'itinéraire le plus court est l'[algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/).

# Documents
Livre Delagrave, activité 5 page 89



