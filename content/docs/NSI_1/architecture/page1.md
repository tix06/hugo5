---
Title: architecture 1
---

# L'Histoire de l'Ordinateur
## Des machines mécaniques
En 1623 Wilhelm Schickard ou bien Blaise Pascal en 1642 créent des machines munies de rouages mécaniques pour faire des additions et des soustractions.

* **1834** La première machine sur le modèle d'un ordinateur. La [machine analytique](https://fr.wikipedia.org/wiki/Machine_analytique) (analytical engine, Charles Babbage) est une machine à calculer programmable imaginée par le mathématicien anglais [Charles Babbage](https://fr.wikipedia.org/wiki/Charles_Babbage). Il ne la réalisera jamais (sauf pour un prototype inachevé), mais il passera le reste de sa vie à la concevoir dans les moindres détails. La machine analytique reprend les différentes parties de nos ordinateurs actuels:
  * Une unité centrale
  * Une mémoire
  * Un lecteur de cartes des métiers à tisser Jacquard (l'équivalent d'un périphérique d'entrée)
  * Une imprimante (un périphérique de sortie).
  
La machine fonctionne en 5 étapes:
<ul><ul>
  <li>reçoit les opérations demandées des cartes,</li>
  <li>gère le transfert des nombres et leur mise en place dans le bon ordre,</li>
  <li>exécute les opérations,</li>
  <li>stocke les résultats ,</li>
  <li>imprime sous la forme demandées.</li> [source - wikidia](https://fr.vikidia.org/wiki/Machine_analytique)
</ul></ul>

<figure>
  <img src="../images/archi1.jpeg">
  <figcaption>Prototype (1871) non terminé de la machine analytique de Babbage, exposée au <a href="https://www.sciencemuseum.org.uk/">Science Museum de Londres</a></figcaption>
</figure>

C'est son élève, [Ada Lovelace](https://fr.wikipedia.org/wiki/Ada_Lovelace) qui formalise les idées de Babbage et développe le premier algorithme de programmation de l'histoire, devenant la première informaticienne de l'humanité. 

## Des machines pour chiffrer et decrypter des informations
* **1938-1943** La [Bombe](https://fr.wikipedia.org/wiki/Cryptanalyse_d%27Enigma), un supercalculateur est utilisé pour le [décryptage](https://fr.wikipedia.org/wiki/Cryptanalyse_d%27Enigma) d'[Enigma](https://fr.wikipedia.org/wiki/Enigma_(machine), une machine utilisant un système de rotors pour produire un chiffrement mécanique. Les anglais, français et polonais travaillent sur le déchiffrage en testant des combinaisons. La Bombe a été conçue pour les attaques de force brute. Cette machine abat par jour le travail de dix mille décrypteurs.  C'est le mathematicien [Alan Turing](https://fr.wikipedia.org/wiki/Alan_Turing) qui parvient à casser le chiffre grâce à l'utilisation d'une version améliorée de cette machine.

<figure>
  <img src="../images/archi3.jpeg">
  <figcaption>La Bombe - version britannique</figcaption>
</figure>

* **1943-1945** Les machines du projet [Colossus](https://fr.wikipedia.org/wiki/Colossus_(ordinateur)) permettent de décrypter les machines de Lorentz. Le premier, Colossus Mark 1, est opérationnel en décembre 1943: constitué de 1500 tubes à vide, il accomplissait 5000 opérations par seconde. 

<figure>
  <img src="../images/archi2.jpg">
  <figcaption>Colossus Mark2. Le panneau incliné à gauche sert <br>à entrer les clefs de Lorenz, la sortie papier est à droite.</figcaption>
</figure>

Le chiffrement Lorenz est beaucoup moins connu que celui d'Enigma. Il était utilisé par les hauts dirigeants allemands pour communiquer entre eux alors qu'Enigma était utilisée au quotidien pour les autres types de communication.

Colossus n'est pas une machine universelle, mais c'est bien le premier processeur électronique, numérique, et partiellement programmable de l'histoire. Cette machine montre que l'électronique peut être utilisé pour le traitement numérique à grande vitesse.

Vers 1940 plusieurs spécialistes développent des calculateurs à programme externe, suivant le projet de *machine analytique* de Babbage, en y incluant des relais électriques: Zuse, Coufignal, Aiken, Stibitz... Ces machines utilisaient des cartes ou rubans perforés, et étaient donc des calculateurs à *programme externe*.

Aucun n'avait eu l'idée d'une machine à **programme enregistré**, concept essentiel pour les **machines électroniques**.

## Machines électromécaniques dans la lignée conceptuelle de Babbage
La période de la seconde guerre mondiale a donc vu emerger des machines électromecaniques plus efficaces que celles mécaniques.

* **1938** le Z1, **1941** le [Z3 (Konrad Zuse)](https://fr.wikipedia.org/wiki/Zuse_3), est un ordinateur mécanique utilisant le système binaire et lisant son programme sur une bande perforée. Le Z3 contenait plus de 2000 relais électromécaniques, pesait une Tonne et consommait plus de 4kW. Il comprend une *mémoire*, un *dispositif de contrôle* et une *unité arithmétique* calculant en binaire sur des nombres à virgule flottante! Les données et les instructions sont perforées sur du film de cinema, plus solide que des rubans en papier. Il était capable d'effectuer une addition en 0,8 s. Sa fréquence était de 5,3 Hertz, assez lente à cause des relais. A l'epoque, aucun appareil ne pouvait rivaliser.

<figure>
  <img src="../images/archi4.png">
  <figcaption>Z3: the First Functional Programm-Controlled Automatic Calculating Machine - <a href="https://artsandculture.google.com/story/hQUBvBSY16WtIQ">Deutsches Museum</a></figcaption>
</figure>

L'institut de recherche aéronautique allemand l'utilisait pour réaliser des analyses statistiques sur les vibrations des ailes.

Zuse était le premier à concevoir que les *fonctions de contrôle* pouvaient aussi s'exprimer et être stockées sous forme *numérique*, donc à créer une *machine programmable*. Ce qui permettait de changer de **programme** sans avoir à modifier les **connexions**.

Si Ada Lovelace, élève de Babbage, fut la première programmeuse théorique d'une machine inexistante, Zuse fut pour sa part le premier programmeur d'une machine réelle en pratique.

## Les calculateurs géants
Les premiers ordinateurs étaient des *machines électromecaniques*, fabriquées à l'unité après des années de recherche et developpement. Leur taille était immense, de même que leur consommation électrique. Le temps passé à leur maintenance et réparation était important (plus de 50%). Leur programmation était très rudimentaire, et leurs pannes, fréquentes.

On ne pouvait pas implémenter des algorithmes trop complexes. Même s'il s'agissait, formellement, de machine universelle. Ils repondaient alors à un besoin de *calculer*.

Les opérations à réaliser sont entrées à la main. Les données sont lues sur une carte perforée.

Ces machines ont d'autres defauts:

* il n'y a pas de distinction entre la fonction mémoire et la fonction calcul.
* pas d'unité centrale généraliste, mais une juxtaposition d'accumulateurs et d'unités spécialisées
* la programmation se fait par cablage ou en positionnant des interrupteurs.


| année | machine | unité logique | vitesse de calcul | remarques |
| --- | --- | --- |--- |--- |
| 1944 | calculateur Harvard Mark 1 (IBM) | 3300 relais | 3 addition sur 23 chiffres par s |  |
| 1945 | ENIAC | 1800 tubes (technologie superieure aux relais) | 5000 additions par s | a servi à calculer la faisabilité de la bombe H |
| 1948 | EDSAC | lignes à retard sur mercure |  | programme écrit en binaire |
| 1951 | UNIVAC | 5 200 tubes à vide | 1 905 opérations par seconde | utilisé par CBS pour prédire l'issue de l'élection présidentielle de 1952. 13 tonnes. consomme 125 kW. L'unité accueillant la mémoire à mercure fait 4,3 m × 2,4 m × 2,6 m à elle seule. Le système au complet occupe 35,5 mètres carrés.  |
| 1962 | Atlas (Manchester) |  |  | Les 96 ko de mémoire, réalisée en tores de ferrite étaient étendus à l'aide des 576 ko stockés sur tambour magnétique |
| 1964 | CDC 6600 |  |  entre 1 et 10 mégaflops (millions d'opérations par s) |  |

*Remarque:* l'ENIAC sera améliorée en 1948: elle intègre alors la notion d'instruction et de programme, ce qui correspond au modèle classique d'ordinateur à programme enregistré. 
C'est aussi le *premier ordinateur binaire*, ne comportant plus de pièces mécaniques. (Mauchly et Eckert)

# Machines universelles
* **1945** En tirant les conclusions de réalisations électroniques secrètes menées pendant la guerre, deux documents apparaissent et definissent ce que l'on nommera *ordinateur*, le calculateur numérique à programme enregistré. Les motivations des deux hommes sont différentes:
  * [John Von Neumann](https://fr.wikipedia.org/wiki/John_von_Neumann):  qui cherche à developper des moyens pour les Universités pour leurs besoins de calculs mathématiques.
  * [Alan Turing](https://fr.wikipedia.org/wiki/Alan_Turing): qui veut réaliser une machine à traiter les informations.

<figure>
  <img src="../images/archi5.png">
</figure>

## Architecture Von Neumann
**Definition:** Un **ordinateur** est un **appareil programmable** qui stocke son **programme** dans une **mémoire modifiable**.
[article wikibook sur l'architecture de base d'un ordinateur](https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur/L%27architecture_de_base_d%27un_ordinateur)

**John Von Neumann** (1945) est le *concepteur* de l'architecture de la *machine universelle* et de ses différents dispositifs:

* processeur
* mémoires
* dispositifs d'entrée/sortie

Il est à l'origine du concept de **programme enregistré**: le stockage des données et des instructions sous forme d'impulsions électriques à l'intérieur même de la machine qui pourra les consulter à l'instant et à la vitesse qui lui convient. En remplacement du traitement mécanique alors utilisé, ce qui necessitait une vaste manipulation de cables et de boutons à placer sur la bonne position pour specifier le nouveau problème. Charles Babbage avait déjà eut cette idée un siècle plus tôt.

Cette architecture s'oppose à celle de Harvard (mémoires différentes pour les données et les programmes) du Mark1.

Von Neumann est également le concepteur de l'ordinateur **IAS** à Princeton.

Le stockage était alors réalisé par des tubes cathodiques, chacun de 1024 bits.

Dans l'architecture de Von Neumann, un ordinateur est constitué de quatre parties distinctes:

1. Le **CPU**: Central Processing Unit (unité centrale de traitement) appelé aussi processeur;
2. La **mémoire** où sont stockés les données et les programmes. La mémoire se divise entre:
  * une mémoire volatile (**RAM** ou mémoire vive) qui gère les programmes et les données
  * une mémoire permanente (**ROM**) qui gère les programmes de base de la machine.
3. des **bus** qui sont des fils conduisant des impulsions électriques et qui relient les différents composants;
4. des **entrées-sorties** (E/S ou I/O input/Output) pour échanger avec l'exterieur.

Les échanges entre la mémoire et les registres du CPU se font via les bus selon une chronologie séquencée par l'horloge et suivant la nature des échanges: données ou adresse. Cette horloge est externe au processeur.

Un **programme** est une suite d’instructions codées sous forme binaire. Il précise la suite d’instructions exécutées par l’ordinateur.  Ces instructions, codées en binaire peuvent être exprimées pour un humain en langage *assembleur*, le langage de *plus bas niveau* (une traduction mnémonique du binaire).

### Le processeur CPU
L'unité de traitement est un circuit qui s'occupe de faire des calculs et de manipuler l'information provenant des entrées-sorties ou récupérée dans la mémoire. Dans les ordinateurs, l'unité de traitement porte le nom de processeur, ou encore de Central Processing Unit, abrévié en CPU. Tout processeur est conçu pour effectuer un nombre limité d'opérations bien précises, comme des calculs, des échanges de données avec la mémoire, etc.

### mémoires ROM et RWM
Les mémoires ROM stockent des programmes à exécuter et sont lues directement par le processeur. Pour les mémoires RWM ou RAM, on peut y acceder en lecture et écriture.

Les RWM stockent les variables du programme à exécuter, des données que le programme va manipuler. Selon l'architecture de la machine, le programme peut être entièrement stocké dans la ROM, ou bien être partagé entre la ROM et la RWM.

<figure>
  <img src="../images/ram_rom.png">
<figcaption>architecture et utilisation des mémoires  - source : <a href="https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur/L%27architecture_de_base_d%27un_ordinateur">wikibooks</a></figcaption>
</figure>


### Les bus
Les données doivent circuler entre les différentes parties d’un ordinateur, notamment entre la mémoire vive et le CPU. Le système permettant cette circulation est appelé bus. Il existe, sans entrer dans les détails, 3 grands types de bus: adresses, données, de contrôle.



# Liens
* article presentant les technologies de la machine à calculer aux ordinateur de 4e génération: [Evolution des machines à calculer - Alexandre Faribault](https://www.physique.usherbrooke.ca/~afaribau/essai/)
* 5000 ans d'histoire [Deutsches Museum](https://artsandculture.google.com/story/hQUBvBSY16WtIQ)
* [Fiche pdf cours architecture - niveau terminale NSI](https://isn-icn-ljm.pagesperso-orange.fr/1-NSI/res/res_histoire_1.pdf)
