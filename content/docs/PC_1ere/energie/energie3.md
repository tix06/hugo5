---
Title : grandeurs electriques

---

Ce cours est en lien avec la <a href="/pdf/PC_1/elec_carte_mentale.pdf" target=_blank>carte mentale à compléter.</a>

# les grandeurs et les lois de l'électricité
## Grandeurs U, I, R, P
*(Rappel) C'est quoi l'électricité?* : L'électricité, ou l'*énergie électrique* désigne le déplacement de porteurs de charges, qui permet d'assurer diverses applications utilisant des *circuits électriques* par conversion de cette énergie : en mouvement, en chaleur, en lumière ou autre. 
Sa modélisation demande de définir plusieurs grandeurs : le potentiel électrique (ou tension), l'intensité du courant, la resistance, et la puissance électrique. 

Des illustrations sur ces grandeurs : voir la vidéo : Volts ou ampères le plus dangereux ?, par la chaine : *Incroyables expériences*

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kv8MfeoicRU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Le potentiel électrique (V)
Le potentiel, exprimé en volts (symbole V), désigne l'état électrique d'un point d'un circuit.

Si on prend l'exemple d'une pile : La borne négative d'une pile possède un excès d'électrons (produits par une réaction chimique), alors que ces électrons sont en défaut à la borne positive. Le potentiel électrique désigne alors la concentration des charges.
La tension U(CD)  est alors la différence de potentiel entre les points C et D. 

$$U_{CD} = U\_C - U\_D$$

C'est à cause de cette différence de potentiel que la pile est capable de mettre en mouvement les électrons libres, par une *force électromotrice*, si cette pile est branchée sur un circuit. Cette différence de potentiel est parfois représentée sur le schéma par une flèche vecteur de D vers C s'il sagit de U(CD), ou B vers A s'il s'agit de U(AB). *voir schéma au paragraphe suivant.*

*Remarque: L'altitude d'un lieu ne peut se définir que par rapport à une altitude repère (niveau de la mer, niveau d'un aérodrome...)*

*De même, le potentiel en un point ne peut se définir que par sa différence avec un potentiel de référence ("masse" du circuit, potentiel de la borne négative...)*

**Mesure de la tension**
Elle se mesure avec un voltmètre, branché sur ses bornes marquées *V* et *COM*.

symbole du voltmètre : 

![symbole voltmètre](../images/syvoltm.png)

Pour mesurer la tension U<sub>AB</sub> : 
Le point du circuit A serait branché sur la *borne V* et le point B sur *COM*.

![mesure de tension](../images/mesureV.png)


## Le courant électrique (A)
Le courant électrique est mesuré par son intensité (notée i ou I), exprimée en ampères (A). Le courant désigne le débit de charge électriques. La valeur de l'intensité est alors d'autant plus importante que la quantité et la vitesse des électrons dans le conducteur est importante.

**Définition à partir du débit de charges électriques :**
si *i* représente l'intensité du courant éléctrique, la quantité de charge qui circule dans un fil conducteur pendant un temps t est notée Q : 

$$i = \tfrac{Q}{t}$$

unités : 

* i : en ampère (A)
* t : en s
* Q en Coulomb (C )

Si un circuit électrique est relié à la pile, les électrons libres du circuit sont attirés par la borne positive, repoussés par la borne négative de la pile. Ils circulent de la borne moins vers la borne plus à l'extérieur du générateur.

Le schéma suivant représente un circuit série avec une pile et une portion de conducteur présentant une certaine resistance. On y représente le sens de parcours de électrons. Le potentiel U(A) est supposé être supérieur à celui U(B). On repère la tension U(AB), entre les points A et B, et le courant I(1) (qui va de A vers B dans le circuit).

![circuit série simple](../images/courant.png) 

Le sens conventionnel du courant est celui qui part de la borne positive vers la borne négative, c'est-à-dire l'inverse du sens de déplacement des électrons. On le repère pour chacun des branches du circuit, à l'aide d'une flèche sur l'un des fils conducteurs.

![sens du courant](../images/sensCourant.gif)

**Effets du courant**
Le courant qui circule dans un circuit peut avoir un effet : 

* thermique, par effet Joule
* magnétique (production d'un champs électro magnétique à proximité des cables électriques)
* chimique (Lorsqu'un courant électrique circule dans un liquide conducteur (électrolyte), il se produit des réactions chimiques au niveau des électrodes (conducteur solide en contact avec le liquide): dégagement gazeux, dépôt d'un métal...)



**Mesure de courant**
L'amperemètre permet de mesurer l'intensité du courant dans un circuit. Il doit être branché en série dans la branche. Cela nécessite "d'ouvrir" le circuit pour y insérer l'amperemètre.
Il est prudent de placer l'ampèremètre sur son plus fort calibre lors du branchement.

Il faut ensuite réduire ce calibre, si nécessaire, pour obtenir un meilleur affichage: Le bon calibre est immédiatement supérieur à la mesure.
mesureI

![mesure du courant](../images/mesureI.gif)

**Circuit série**
Le courant passe dans la première lampe ET dans l'autre.
Il n'existe qu'un seul circuit possible pour le courant.

![circuit série](../images/circuitSerie.gif)

**Banches en parallèle : circuit avec dérivation**
Dans la situation suivante, le courant passe dans la première lampe OU dans la deuxième lampe. Le courant se partage en arrivant au carrefour (noeud).
Une branche est une portion de circuit entre deux noeuds.
*La branche principale* est celle du générateur.
Les deux dipôles fonctionnent indépendamment l'un de l'autre.

![circuit avec derivation](../images/circuitDerive.gif)

Soit le courant i<sub>1</sub> dans la brache principale, le courant i<sub>2</sub> dans la branche de la première lampe (courant repéré en bleu), et le courant i<sub>3</sub> dans la deuxième lampe (en rouge), la loi des noeuds est telle que : 

$$i_1 = i\_2 + i\_3$$

## La résistance électrique (&Omega;)
La résistance électrique désigne :  un composant électrique, un élément électrique chauffant utilisant l'effet Joule , ou bien l'aptitude d'un matériau conducteur à ralentir le passage du courant électrique (et donc réduire l'intensité du courant électrique).

La valeur d'une resistance (notée R) est mesurée en Ohm &#937;

Le symbole d'une resistance est le suivant : 

![symbole d'une resistance électrique](../images/resistance.png)

Cas particuliers de certains matériaux : 

Un isolant = Resistance infinie

Un conducteur idéal = Resistance nulle

Les résistors sont des composants électroniques fabriqués spécialement pour leur résistance électrique. Ils permettent d'ajuster les courants et les potentiels dans un circuit électrique.

## Loi du potentiel électrique
Deux points d'un circuit électrique reliés par un conducteur idéal sont au même potentiel électrique.
Si l'on branche un voltmètre entre ces 2 points, la différence de potentiel est alors nulle. C'est le cas si ces 2 points sont séparés par un fil électrique ou un interrupteur fermé : 


<figure>
<img src="../images/mesuretension.jpeg" width = 80% alt="schéma branchement voltmètre">
<figcaption>schémas du branchement du voltmètre</figcaption>
</figure>

Par contre, la tension aux bornes d'un interrupteur ouvert est égale à la tension aux bornes du générateur (circuit simple) ou à la tension aux bornes de la branche dans laquelle il est placé.

![circuit](../images/circuit5.gif)

**Loi d'additivité des tensions dans un circuit en série :**
La tension aux bornes d'un ensemble de dipôles en série est égale à la somme des tensions aux bornes de chacun d'eux.

Dans l'exemple ci-contre:
P et A sont au même potentiel
B et C sont au même potentiel
D et N sont au même potentiel

$$U\_{PN} = U\_{AD} = U\_{AB} + U\_{CD}$$

![circuit](../images/circuit6.gif)

**Loi d'égalité des tensions dans un circuit en dérivation :**
Deux dipôles branchés en dérivation aux bornes d'un générateur sont soumis à la même tension qui est celle du générateur.

Dans l'exemple ci-contre:
P, E, A et C sont au même potentiel
N, F, B et D sont au même potentiel

$$U\_{PN} = U\_{EF} = U\_{AB} = U\_{CD}$$

![circuit](../images/circuit7.gif)

**Court circuit**

Un court-circuit se produit lorsque deux fils ayant des potentiels différents viennent en contact. 
Le dipôle dont les bornes sont reliées par un conducteur est court-circuité.
Un dipôle court-circuité cesse de fonctionner car la tension à ses bornes devient négligeable et que le courant qui le traverse est également négligeable.

L'intensité augmente dans le circuit car la résistance électrique du court-circuit est beaucoup plus faible que celle du dipôle court-circuité. 

![circuit](../images/circuit8.gif)

**DANGER :** Lorsqu'un *générateur est court-circuité*, le courant débité peut être très important car il n'est freiné que par la résistance interne du générateur et la résistance des fils (très faible). Ce courant peut détruire le générateur ou échauffer fortement les fils jusqu'à *provoquer un incendie*.


*compléments sur la tension (cours de collège)* : [physique-chimie au collège](http://pccollege.fr/quatrieme-2/electricite-les-lois-du-courant-continu/chapitre-ii-la-tension-electrique/)

*cours plus complet :*[webtab.ac-bordeaux.fr](http://webetab.ac-bordeaux.fr/Pedagogie/Physique/Physico/Electro/e04tensi.htm)

## Loi d'Ohm
Pour un dipôle de résistance R, parcouru par un courant i, et dont la tension à ses bornes et U<sub>AB</sub> : d'après la loi d'Ohm : 

$$U_{AB} = R \times I$$

*Question 1 :*
Calculer la résistance du filament d'une lampe 6V - 250 mA en fonctionnement normal.

*Question 2 :* 
Calculer l'intensité du courant qui traverse un résistor de 120 &Omega; lorsqu'il est soumis à une tension de 9V.


<pre>
*Réponse question 1 :*
U = 6V        
I = 250 mA = 0,250 A        
R = U/I        
R = 6V / 0,250 A         
R = 24 ohms

*Réponse question 2 :*
U = 9 V        
R = 120              
I = U / R        
I = 9V / 120            
I = 0,075 A = 75 mA
</pre>

## Loi des noeuds
L'intensité du courant est additive. Au niveau d'un noeud, la somme des courants arrivant est egale à la somme des courants quittant le noeud.

Exercice : Calculer la valeur manquante sur le schéma suivant : 

![loi des noeuds](../images/loiNoeuds.png)

*Réponse : i<sub>3</sub> = 5,4 A*

## Loi de puissance
La puissance électrique est la quantité d'énergie électrique échangée par seconde. (P = E/t). Son unité dans le système international (SI) est le Watt (W)
Pour une branche d'un circuit : Elle peut être déduite des mesures de courant et de tension.
$$P = U \times I$$
Comme l'énergie, la puissance est une grandeur qui se conserve : 
Dans un circuit, la puissance fournie par la source (pile, ou alimentation) est égale à la somme des puissances consommées par chaque élément du circuit (resistance, lampe, moteur...)

La puissance nominale d'un récepteur est la puissance consommée par l'appareil en fonctionnement normal. Elle est en général indiquée par le fabricant : 

Lampe de poche : 1W, lampe fluocompacte : 10W, lampe halogène : 50W, appareil électroménager : 1kW

**Cas particulier d'un conducteur ohmique :**
Pour un conducteur ohmique de resistance R, la puissance électrique est dissipée par *effet Joule* sous forme de rayonnement thermique. (Chaleur)
Comme d'après la loi d'Ohm, la tension U aux bornes de la resistance vaut :

$$U = R \times I$$

et que la loi de puissance est : $$P = U\times I$$
alors : 

$$P = U\times I = (R.I)\times I = R\times I^2$$

**Mesure de la puissance**
On peut la mesurer directement à l'aide d'un *Wattmètre*.
On peut aussi la mesurer indirectement à l'aide d'un amperemètre et d'un voltmètre. Il faudra alors calculer la puissance avec la loi P = U.I

Exercice : 
On brache une lampe aux bornes d'un générateur. On régle la tension à la valeur nominale U= 12V. On mesure l'intensité I qui traverse la lampe : I = 1,75 A.
Calculer la valeur de la puissance consommée par cette lampe.

![circuit pour mesure de puissance avec voltmètre et amperemètre](../images/puissance1.gif)

*Réponse :* 
*P = U x I = 12V x 1,5 A = 21W*




# Exercices
## Exercice 1 :
Un circuit série est un circuit qui ne possède qu'une seule branche.
Dans ce circuit série, il y a 3 dipoles : une pile, une lampe et un moteur.
La tension U mesurée aux bornes de la pile est de 4,45 V. La tension U2 mesurée aux bornes du moteur est de 1,95 V. 

![circuit serie pile, lampe, moteur](../images/circuit1.png)

1. Calculer la tension U1 que l’on pourrait mesurer aux bornes de la lampe.

2. Compléter le tableau suivant, donnant les résultats de différentes 
mesures réalisées au voltmètre : 

| tension | U<sub>PN</sub>| U<sub>PA</sub>| U<sub>AB</sub> | U<sub>BC</sub>| U<sub>CD</sub>| U<sub>DN</sub>|
| :--- | :---: |  :---: |  :---: |  :---: |  :---: | :---: |
| valeur mesurée (V) | 4,45 |  |  |  | 1,95 |  |

Réponse : 
1. U1 = 2,5V
2. U~PA~ = 0 ; U~AB~ = 2,5V ; U~BC~ = 0; U~DN~ = 0


## Exercice 2
On mesure une tension de 20,8 V. Quel est le meilleur calibre à utiliser : 

2V, 20V, 200V, 600V ?

Réponse : 200V

## Exercice 3
On a mesuré deux tensions du montage schématisé ci-contre. 

![circuit dérivation](../images/circuit2.png)

1. Déterminer la valeur de la tension aux bornes de la lampe L3
2. Complèter le tableau ci-dessous en inscrivant les valeurs des tensions aux bornes de L1 et de L3:

| tension | U<sub>PN</sub>| U<sub>PA</sub>| U<sub>AB</sub> | U<sub>BC</sub>| U<sub>CN</sub>|
| :--- | :---: |  :---: |  :---: |  :---: |  :---: |
| valeur mesurée (V) | 4,94 |  |  | 1,95 |  |

Réponse : 
1. U3 = 4,94V
2. U<sub>PA</sub> = 0; U<sub>AB</sub> = 2,99V; U<sub>CN</sub> = 0

## Exercice 4

![montage transformateur, lampes, amperemetres](../images/circuit3.png)

1. Représenter le circuit correspondant au montage ci dessus.
2. Quelle est la loi que l’on a voulu vérifier en réalisant ce montage ? (loi des potentiels, loi d'additivité des tensions, loi des noeuds)
3. Cette loi, est elle effectivement vérifiée ?

## Exercice 5 :

![circuit série](../images/circuit4.png)

Lorsqu'il est fermé, le transformateur'interrupteur  est supposé se comporter comme un conducteur idéal.

1. La tension U<sub>CD</sub> aux bornes de l’interrupteur est : égale, supérieure à U<sub>AB</sub> infèrieure à U<sub>AB</sub> ou nulle ?

2. La tension U<sub>FE</sub> aux bornes de la lampe est : égale, supérieure à U<sub>AB</sub> infèrieure à U<sub>AB</sub> ou nulle ?

## Exercice 6 :
La situation suivante, présente t-elle un risque de court cicuit pour le générateur ?

![court circuit](../images/courtCircuit.png)

## Exercice 7
Sur une multiprise, on lit l'indication suivante : 2500W.
On branche sur cette multiprise : une cafetière (800W), un grille pain (900W), et un fer à repasser (1500W).
Cette situation présente t-elle un risque de surintensité?

## Exercice 8
Sur un sèche-cheveux français, on lit les indications : 1200 W, 5 A. Ce sèche-cheveux peut-il être branché sur le secteur au Mexique (tension de secteur de 120V)?

<!--
## feuille d'exercices pour le cours P4 Energie
Ex 1. Parmi les unités suivantes, lesquelles sont des unités d’énergie?
a) W·h b) W c) J/s d) kJ

Ex 2. Un kilowatt-heure équivaut à combien de joules?

Ex 3. Quelle tension doit-on appliquer aux bornes d’une résistance de 50Ω pour avoir un courant de 3,5A circulant dans celle-ci ?

Ex 4. Une calculatrice de 0,3 mW est alimentée par deux piles AA de 1,5 V chacune.
4.1 Quelle est l’intensité du courant circulant dans la calculatrice?
4.2 Si chaque pile peut fournir un total de 15 390 J, pendant combien d’heures la calculatrice peut-elle fonctionner sans arrêt?


Ex 5. Une lampe est traversée par un courant de 2 A, la tension à ses bornes est 24 V. Déterminer :
5.1 Sa résistance.
5.2 Sa puissance.

Ex 6. Un fer à repasser porte les indications suivantes : U = 220 V, P = 880 W. 
6.1 Calculer l’intensité du courant absorbé.
6.2 Calculer (en Wh) l’énergie consommée en 1 h 30 min de repassage.

Ex 7. L’éclairage d’une chambre est obtenue au moyen d’une rampe de spots schématisées ci-dessous:

![circuit éclairage chambre](../images/circuitD.png)

La puissance d’un spot est de 44 W.
La tension d’alimentation est de 220 V, chematisée avec le vecteur U.
Le fusible de protection est de 10 A dans la branche principale.

7.1 Calculer l’intensité du courant qui traverse un spot.

7.2 Calculer l'intensité du courant dans la branche principale lorsque la rampe comporte 3 spots.

7.3 Calculer le nombre maximum de spot que l’on peut disposer sur le rail au vu de la valeur du fusible de protection.

7.4 EDF facture le kilowattheure 0,10 € T.T.C. Quel sera le prix correspondant à 4 heures de fonctionnement de la rampe à 3 spots

Ex 8. Une installation de chauffage électrique est composée de 4 radiateurs montés en parallèle :

* un radiateur d’une puissance de 1,5 kW ;
* deux radiateurs d’une puissance de 1 kW chacun ;
* un radiateur d’une puissance de 750 W.

La tension d’alimentation est de 220 V et un fusible de 20 A protège l’installation.

8.1 Calculer:

* La puissance de l’installation
* L’intensité du courant absorbé par l’installation quand tous les radiateurs fonctionnent.
* L’énergie absorbée par ces 4 radiateurs après 2 h 30 min de fonctionnement.

8.2 Peut-on ajouter un radiateur supplémentaire de 1 000 W à cette installation ? justifier la réponse.

Ex 9. Un récepteur absorbe une puissance de 1600W et la transforme en une puissance mécanique de 1480W.
Déterminez les pertes puis le rendement en pourcentage


Ex 10. Un moteur électrique absorbe un courant de 6A sous une tension de 400V. Déterminer la puissance du moteur?
Sachant qu’il a un rendement de 80% , calculer la puissance utile.



**Correction partielle**

*Réponse Ex 3 : U = 175V*

*Réponse Ex 4 :* 

**4.1**
*P=0,3mW=0,3×10−3 W U = 2 × 1, 5 V = 3 V*

$$I = P/U =0,3×10^{−3} W / 3V = 0,1mA$$

**4.2**

$$E = 2 × 15 390 J = 30 780 J$$

$$\Delta t = E/P$$

$$\Delta t= 30780J$$

$$P=0,3×10^{−3} W$$

$$\Delta t t=1,026×10^8 s$$

$$\Delta t = 28500 h$$

*Réponse Ex 9 :*  
pertes = 120W

r = 0,925 

r = 92,5%

*Réponse Ex 10 :*
Pa = 2400W

Pu = = 1920W



<input type="button" class="btn btn-lg" value="retour page précédente" onclick="window.location.href = '../energie2/index.html'">

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

-->
