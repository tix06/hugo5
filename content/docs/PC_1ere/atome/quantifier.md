---
Title: quantifier
---

# Ecarts multiplicatifs
Penser les nombres gigantesques nous est impossible. Si on pouvait vraiment concevoir, par exemple, les statistiques du loto, personne ne continuerait à y jouer: même en y jouant toute une vie, il est quasiment impossible de gagner.

Pour mieux appréhender le monde, on a recours aux nombres. Et les mathématiques nous apportent une manière plus abstraite et efficace d'utiliser les nombres. Si ceux-ci ne servaient qu'à dénombrer, on n'aurait pas recours aux nombres négatifs, par exemple. Or, un nombre négatif n'a pas de sens lorsque l'on dénombre: -1 est plus petit que zero, qui par definition est justement la plus petite valeur possible. Mais les nombres négatifs facilitent grandement les calculs.

On verra que la notation scientifique facilite justement l'utilisation des nombres, et, surtout, ce que l'on appelle *l'ordre de grandeur*.

> Test: sur l'echelle suivante: où se situe la graduation 1 million? Si ce dessin était représenté sur une bande de papier de 1m, à quelle distance de la graduation 1000 se situerait *1 million*?

<figure>
  <img src="../images/echelle.png">
  <figcaption>une echelle graduée</figcaption>
</figure>

*Réponse:* il y a plusieurs réponses possibles à cette question, selon si l'on considère que l'echelle représente des écarts multiplicatifs, ou des écarts additifs...

> des écarts relatifs et multiplicatifs:[^1] Lors d'un jeu de devinette, on demande à 2 groupes de joueurs: *à quelle distance se trouve la Lune de la Terre?*

<figure>
  <img src="../images/terre-lune.png">
  <figcaption>distance Terre-Lune</figcaption>
</figure>

* Le premier groupe répond: 10km
* Le 2e groupe repond: 1000 000 km

> Lequel des groupes est le plus proche de la réponse? Considérer les 2 cas, selon un écart relatif, puis selon un écart multiplicatif. S'il faut départager les 2 groupe, qui, selon vous, mérite de gagner, le premier ou le 2 groupe?

**Conclusion:** La distribution des grandeurs et nombres dans l'Univers est plus facile à appréhender si l'on considère des écarts multiplicatifs entre les nombres. Cela amène à utiliser la notation scientifique, et les ordres de grandeur pour comparer ces nombres.

# La mole
## Les grands nombres
> Combien de...

* étoiles dans la Voie Lactée
* étoiles dans l'Univers
* bactéries dans le corps humain
* bacteries sur une éponge
* molécules dans un verre d'eau
* grains de sable sur la Terre

Réponses possibles: 10 millions, 100 000 milliards, 100 milliards, 300 000 milliards de milliards, 10<sup>23</sup>

> Calculer en ordre de grandeur: Combien de grains de sable y-a-t-il sur la totalité des plages sur Terre?[^2]. Utilise les indices suivants:

* La totalité des côtes des différents continents fait environ 1 million de km (avec un intervalle de 100m): [Source](https://en.wikipedia.org/wiki/List_of_countries_by_length_of_coastline#List)
* Les plages de sable ont toutes une largeur de 100m et une profondeur de sable sur 10m
* Les géologues estiment qu'un m<sup>3</sup> de sable contient 100 milliards de grains.

<figure>
  <img src="../images/UK-coast.png">
  <figcaption>La longueur de côte de la Grande Bretagne dépend du modèle choisi (2400 km à droite)</figcaption>
</figure>

## Compter les atomes
Pour ramener la quantité d'atomes à une valeur numérique acceptable, on a introduit une unité de quantité de matière: **la mole**. Il s'agit d'une abstraction mathématique, comme vu plus haut.

Une mole correspond au nombre d'atomes de carbone C-12 contenu dans un echantillon de 12g. 

On peut vérifier que ce nombre vaut approximativement 

$$6,02.10^{23}$$

Ce nombre est appelé *Nombre d'Avogadro*. Pour connaitre exactement la contribution du scientifique Amadeo Avogadro (1811) sur l'atome, on pourra consulter le cours à la page [PC/seconde/La mole](/docs/PC_2nde/chimie/pages/mole/#contribution-d-avogadro-à-la-chimie-du-xixème-siècle)

> Vérifier que la masse d'une mole de chacun de ces échantillons atomiques amène à une valeur mesurable, avec une balance:

* atomes de cuivre Cu: 1,05.10<sup>-22</sup> g par atome
* atomes de fer Fe: 9,27.10<sup>-23</sup> g par atome

> Combien de mole(s) d'atomes y-a-t-il dans 10g d'atomes de Cu?

Pour simplifier le calcul, on utilise les masses molaires atomiques:

| atome | H | C | Cu | Na | Cl |
|--- | --- | --- | --- | --- | --- |
| masse molaire atomique (g.mol<sup>-1</sup>) | 1,0 | 12,0 | 63,5 | 23,0 | 35,5 |

<br>

> Répondre à nouveau à la question: combien de mole(s) d'atomes y-a-t-il dans 10g d'atomes de Cu? (utiliser les masses molaires)

> Combien de *couples d'atomes* NaCl y-a-t-il dans 10g de sel NaCl?

## Cours sur la quantité de matière: [Lien](/docs/esf/chimie/page1/)

# La dilution
La dilution est une opération chimique qui permet de diviser rapidement la concentration d'une solution.

La solution d'origine est la solution *mère*. Celle fabriquée est la solution *fille*. 

La solution fille et la solution mère ont des concentrations qui montrent un *écart multiplicatif*. Le rapport entre les concentrations est égal au *facteur de dilution*.

<figure>
  <img src="../images/dilution1.png">
  <figcaption>Principe d'une dilution. Solution mère/fille.</figcaption>
</figure>

<figure>
  <img src="../images/dilution2.png">
  <figcaption>Dilution à l'aide d'une pipette et fiole jaugée</figcaption>
</figure>

# Autres domaines
On a vu que l'utilisation d'une echelle multiplicative est bien adaptée au denombrement, ou aux distances dans l'Univers.

En sciences physiques, on utilise egalement des echelles multiplicatives:

* pour représenter les domaines d'ondes lumineuses, avec un axe multiplicatif en frequences ou longueurs d'ondes
* pour représenter les domaines d'ondes sonores
* pour représenter les niveaux sonores (dB)
* pour l'echelle des pH
* ...

L'utilisation d'une echelle multiplicative amène naturellement à utiliser les outils mathématiques:

* la notation scientifique
* la notation en ordre de grandeur

# Liens et bibliographie
[^1]: Problème issu du livre: Le théorème du parapluie, Mickaël Launay, éd. Flammarion (auteur egalement de la chaine [MicMaths](https://www.youtube.com/watch?v=Fw06FP62Rkc))

[^2]: Problème du nombre de grains de sable sur Terre: David Louapre, chaine et blog [scienceetonante.com](https://scienceetonnante.com/2012/07/23/y-a-t-il-plus-detoiles-dans-lunivers-que-de-grains-de-sable-sur-terre/)