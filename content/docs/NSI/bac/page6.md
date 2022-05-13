---
Title: bac architecture
---

# Bac 2022 Polynesie: Exercice 2
*Cet exercice traite du thème « architecture matérielle », et principalement d'ordonnancement et d'expressions booléennes.*

Un système est composé de 4 périphériques, numérotés de 0 à 3, et d'une mémoire, reliés entre eux par un bus auquel est également connecté un dispositif ordonnanceur. 
À l'aide d'un signal spécifique envoyé sur le bus, l'ordonnanceur sollicite à tour de rôle les périphériques pour qu'ils indiquent le type d'opération (lecture ou écriture) qu'ils souhaitent effectuer, et l'adresse mémoire concernée.

Un tour a lieu quand les 4 périphériques ont été sollicités. **Au début d'un nouveau tour, on considère que toutes les adresses sont disponibles en lecture et écriture.**

Si un périphérique demande l'écriture à une adresse mémoire **à laquelle on n'a pas encore accédé** pendant le tour, l'ordonnanceur répond "OK" et l'écriture a lieu.
Si on a déjà demandé la lecture ou l'écriture à cette adresse, l'ordonnanceur répond "ATT" et l'opération n'a pas lieu.

Si un périphérique demande la lecture à une adresse à laquelle on n'a pas encore accédé en écriture pendant le tour, l'ordonnanceur répond "OK" et la lecture a lieu.
Plusieurs lectures peuvent avoir donc lieu pendant le même tour à la même adresse.

Si un périphérique demande la lecture à une adresse à laquelle on a déjà accédé en écriture, l'ordonnanceur répond "ATT" et la lecture n'a pas lieu.

Ainsi, pendant un tour, une adresse peut être utilisée soit une seule fois en écriture, soit autant de fois qu'on veut en lecture, soit pas utilisée.

Si un périphérique ne peut pas effectuer une opération à une adresse, il demande la même opération à la même adresse au tour suivant.

## Question 1
Le tableau donné en annexe 1 indique, sur chaque ligne, le périphérique
sélectionné, l'adresse à laquelle il souhaite accéder et l'opération à effectuer sur cette adresse. Compléter dans la dernière colonne de cette annexe, à rendre avec la copie, la réponse donnée par l'ordonnanceur pour chaque opération.

On suppose dans toute la suite que :

* le périphérique 0 écrit systématiquement à l'adresse 10 ;
* le périphérique 1 lit systématiquement à l'adresse 10 ;
* le périphérique 2 écrit alternativement aux adresses 11 et 12 ;
* le périphérique 3 lit alternativement aux adresses 11 et 12 ;

Pour les périphériques 2 et 3, le changement d’adresse n’est effectif que lorsque l’opération et réalisée. 

## Question 2
On suppose que les périphériques sont sélectionnés à chaque tour dans l'ordre
0 ; 1 ; 2 ; 3. Expliquer ce qu'il se passe pour le périphérique 1.

Les périphériques sont sollicités de la manière suivante lors de quatre tours successifs :

* au premier tour, ils sont sollicités dans l’ordre 0 ; 1 ; 2 ; 3 ;
* au deuxième tour, dans l’ordre 1 ; 2 ; 3 ; 0 ;
* au troisième tour, 2 ; 3 ; 0 ; 1 ;
* puis 3 ; 0 ; 1 ; 2 au dernier tour.
* Et on recommence...

## Question 3
A.  Préciser pour chacun de ces tours si le périphérique 0 peut écrire et si le
périphérique 1 peut lire.

B.  En déduire la proportion des valeurs écrites par le périphérique 0 qui sont
effectivement lues par le périphérique 1.


On change la méthode d'ordonnancement : on détermine l'ordre des périphériques au cours d'un tour à l'aide de deux listes d'attente `ATTL_L` et `ATT_E` établies au tour précédent.

Au cours d'un tour, on place dans la liste `ATT_L` toutes les opérations de lecture mises en attente, et dans la liste d'attente `ATT_E` toutes les opérations d'écriture mises en attente.

Au début du tour suivant, on établit l'ordre d'interrogation des périphériques en procédant ainsi :

* on interroge ceux présents dans la liste ATT_L, par ordre croissant d'adresse,
* on interroge ensuite ceux présents dans la liste ATT_E, par ordre croissant
d'adresse,
* puis on interroge les périphériques restants, par ordre croissant d’adresse.

## Question 4
Compléter et rendre avec la copie le tableau fourni en annexe 2, en utilisant
l'ordonnancement décrit ci-dessus, sur 3 tours.

Les colonnes e0 et e1 du tableau suivant recensent les deux chiffres de l'écriture binaire de l’entier n de la première colonne.

| nombre n | écriture binaire de n sur deux bits | e1 | e0 |
|--- |--- |--- |--- |
| 0 | 00 | 0 | 0 |
| 1 | 01 | 0 | 1 |
| 2 | 10 | 1 | 0 |
|3  | 11 | 1 | 1 |


L'ordonnanceur attribue à deux signaux sur le bus de données les valeurs de **e0** et **e1** associées au numéro du circuit qu’il veut sélectionner. On souhaite construire à l'aide des portes ET, OU et NON un circuit pour chaque périphérique.

Chacun des quatre circuits à construire prend en entrée deux signaux **e0** et **e1**, le signal de sortie **s** valant 1 uniquement lorsque les niveaux de **e0** et **e1** correspondent aux bits de l'écriture en binaire du numéro du périphérique correspondant.

Par exemple, le circuit ci-dessous réalise la sélection du périphérique 3. En effet, le signal **s** vaut 1 si et seulement si **e0** et **e1** valent tous les deux 1.

<figure>
  <img src="../images/page6_1.png">
  <figcaption>470 × 138</figcaption>
</figure>

## Question 5
A.  Recopier sur la copie et indiquer dans le circuit ci-dessous les entrées e0 et e1 de façon à ce que ce circuit sélectionne le périphérique 1.

<figure>
  <img src="../images/page6_2.png">
  <figcaption>566 × 170</figcaption>
</figure>

B.  Dessiner un circuit constitué d'une porte ET et d'une porte NON, qui
sélectionne le périphérique 2.
c. Dessiner un circuit permettant de sélectionner le périphérique 0.

<figure>
  <img src="../images/page6_3.png">
  <figcaption>1252 × 590</figcaption>
</figure>

<figure>
  <img src="../images/page6_4.png">
  <figcaption>1252 × 788</figcaption>
</figure>

# Bac 2022 Metropole1: Exercice 3
Cet exercice porte sur les représentations binaires et les protocoles de routage.

## Question 1
Une adresse IPv4 est représentée sous la forme de 4 nombres séparés par des
points. Chacun de ces 4 nombres peut être représenté sur un octet.

A.  Donner en écriture décimale l’adresse IPv4 correspondant à l’écriture binaire :

11000000.10101000.10000000.10000011

B.  Tous les ordinateurs du réseau A ont une adresse IPv4 de la forme :
192.168.128._ _ _ , où seul le dernier octet (représenté par _ _ _ ) diffère.
Donner le nombre d’adresses différentes possibles du réseau A.

## Question 2
On rappelle que le protocole RIP cherche à minimiser le nombre de routeurs
traversés (qui correspond à la métrique). On donne les tables de routage d’un
réseau informatique composé de 5 routeurs (appelés A, B, C, D et E), chacun
associé directement à un réseau du même nom obtenues avec le protocole RIP : 

<figure>
  <img src="../images/page6_5.png">
  <figcaption>1234 × 916</figcaption>
</figure>

A.  Donner la liste des routeurs avec lesquels le routeur A est directement
relié.

B.  Représenter graphiquement et de manière sommaire les 5 routeurs
ainsi que les liaisons existantes entre ceux-ci.

## Question 3
Le protocole OSPF est un protocole de routage qui cherche à minimiser la
somme des métriques des liaisons entre routeurs.

Dans le protocole de routage OSPF le débit des liaisons entre routeurs agit
sur la métrique via la relation : $metrique = \tfrac{10^8}{debit}$  dans laquelle le débit est exprimé en bit par seconde (bps).

On rappelle qu’un kbps est égal à $10^3$  bps et qu’un Mbps est égal à $10^6$  bps.

Recopier sur votre copie et compléter le tableau suivant : 

| Débit | 100 kbps | 500 kbps | ? | 100 Mbps |
|--- | --- | --- | --- | --- |
| Métrique associé | 1000 | ? | 10 | 1 |

<figure>
  <img src="../images/page6_6.png">
  <figcaption>1230 × 644</figcaption>
</figure>

Les nombres présents sur les liaisons représentent les coûts des routes avec le
protocole OSPF.

A.  Indiquer le chemin emprunté par un message d’un ordinateur du réseau F à
destination d’un ordinateur du réseau I.
Justifier votre réponse.

B.  Recopier et compléter la table de routage du routeur F.

C.  Citer une unique panne qui suffirait à ce que toutes les données des échanges de tout autre réseau à destination du réseau F transitent par le routeur G.
Expliquer en détail votre réponse. 


