---
Title: architecture 2
---

# architecture 2
Un ordinateur est une *machine* qui traite de *l'information*, stockée dans la *mémoire*, par le *processeur*. Ces traitements sont aussi stockés dans la mémoire, sous forme de *programmes*.

## Rappels
Dans l'architecture Von Neumann:

* une machine universelle est contrôlée par un programme.
* Les données et programmes sont écrits sur une même mémoire (en binaire). L'ordinateur enregistre les instructions des programmes qu'il exécute dans sa mémoire vive.
* Les instructions sont executée de manière séquentielle, par un **processeur**.
* Les mémoires RAM d'une part et les mémoires non volatiles d'autre part (Disques durs, mémoires flash) sont reliées au processeur (donc aux registres du processeur) par une liaison appelée Bus. En réalité, seule la RAM est directement accessible au processeur.

## Liaisons entre composants: les Bus
Il existe des Bus de différentes nature pour relier les composants:

* **bus d'adresse:** permet au processeur d'indiquer à la mémoire l'emplacement pour lire/écrire.
* **bus de données:** transporte les données entre la mémoire et le processeur.
* **bus de contrôle:** permet de coordonner le fonctionnement du processeur et de la mémoire.

Les bus peuvent être bi-directionnels: les données transitent dans les 2 sens. Mais aussi directionnel: c'est le cas du bus d'adresse entre le processeur et la RAM, qui n'est parcouru que dans le sens processeur => RAM.

# Description d'un ordinateur
## CPU et MCU: des architectures différentes
* Certaines machines comportent des composants séparés sur la carte mère. Le microprocesseur (CPU) est relié aux autres composants par des bus.

* Pour d'autres machines, les composants occupent une même puce (un même *chip*). Ces machines sont moins chères et consomment moins d'électricité. 

{{< img src="../images/architectureN1.png" link="https://www.youtube.com/watch?v=cQjllS45ReU" caption="MooC Arduino #4 - Architecture de Von-Neumann, Harvard et Microcontrôleurs" >}}

*Compléments sur la différence des architectures: [www.arrow.com/fr-fr/research-and-events](https://www.arrow.com/fr-fr/research-and-events/articles/mpu-v-mcu)*

## Echelle macro: périphériques
Un ordinateur comprend des périphériques d'entrée et sortie:

* écran, haut-parleur, souris, clavier...

Ces périphériques sont connectés aux 3 *Bus* définis plus loin et se comportent comme une mémoire. On leur affecte des adresses (différentes de celles de la RAM) et on communique avec eux en écrivant à ces adresses. Le Bus de contrôle va detecter un changement sur l'une de ces adresses et interrompre le traitement en cours.

## Echelle intermédiaire
A une echelle plus proche du processeur: Un ordinateur a une carte mère sur laquelle on trouve différents ports et supports de cartes:

* port de branchement des mémoires, disques durs, port RJ45 (reseau), carte wifi, carte son, carte graphique, ...

Certains ports vont ajouter des extensions à l'ordinateur (carte son, video, wifi). Certains vont être essentiels au fonctionnement de l'ordinateur (mémoires).

## Echelle micro
Les constituants de l'ordinateur sont composés de circuits intégrés. On trouve 2 grandes catégories de circuits intégrés:

* les circuits combinatoires: l'état de sortie de ces circuits ne dépend que des états d'entrée.
* les circuits séquentiels: l'état de sortie dépend des états d'entrée, mais aussi de l'état courant du circuit. Ces circuits peuvent ainsi stocker une valeur appelée état courant. Les registres sont typiquement des circuits intégrant des circuits séquantiels.

# Le fonctionnement du processeur
## Généralités
{{< img src="../images/architectureN2.png" caption="Architecture de Von-Neumann - processeur" >}}
L'architecture d'un **processeur** (CPU) comporte 2 parties: 

* L'**UC**: C'est l’*unité de commande*, **UC**, qui traduit chacune des instructions successives du programme en opérations élémentaires. C'est cette partie du processeur  qui est chargée d'obtenir les instructions successives du programme et de les executer. L'**UC** contient:
  * le registre Program Counter, PC
  * le registre d'instruction RI 
  * une horloge.
* La **partie opérative** qui comprend les outils permettent de réaliser les actions élémentaires ordonnés par l'UC. Cette **unité de traitement** est constituée de:
  * l'**UAL** (Unité Arithmétique et Logique) qui réalise les opérations arithmétiques sur des entiers.
  * des **registres internes**, pour stocker de manière très provisoire les retenues des calculs par exemple.

*L'UC traite une séquence d'instructions, alors que l'UAL traite une séquence de données*. L’**UC** est chargée de la reconnaissance des instructions et de leur exécution par l’unité de traitement au *rythme de l’horloge*.

Le processeur réalise le **cycle de Von Neumann**:

1. Lire une case mémoire d’adresse PC (envoyer l’adresse à la mémoire, et recevoir en retour la donnée à cette adresse).
2. Interpréter cette donnée comme une instruction, et l’exécuter
3. Ajouter 1 au *program Counter* (PC), qui stocke l'adresse de la prochaine instruction.
4. Recommencer

## Un cycle d'execution
Le processeur ne manipule *pas directement* les données mais leurs *adresses*.

Des **registres** servent à lire et écrire les données en mémoire. Ce sont les registres d'adresse et de données.

### Utilisation en lecture
* registre d'adresse: stocke l'adresse de la donnée, avant d'envoyer le signal de lecture
* registre de données: la mémoire va chercher le contenu de l'adresse qui lui est envoyée, et retourne la donnée vers le registre de données.

La donnée peut être interprétée comme une instruction. Celle-ci est alors décomposée en un code d'opération (OP) ainsi qu'en 2 opérandes, qui sont les adresses d'une données (A et B). OP, A et B sont stockés dans le registre d'instruction (RI).

### Execution de l'opération
La figure ci-contre représente un schéma classique d'UAL. Celle-ci possède deux entrées A et B sur lesquelles on présente les données à traiter. L'entrée F désigne l'opération à effectuer (vient du code OP). [Source: wikipedia - Unité Arithmétique et Logique](https://fr.wikipedia.org/wiki/Unit%C3%A9_arithm%C3%A9tique_et_logique)

Enfin, l'UAL possède deux sorties, R qui est le résultat de l'opération, et D les éventuels drapeaux. (information d'erreur ou de dépassement)

{{< img src="../images/ALU.png" caption="UAL - Unité Arithmétique et Logique" >}}

### Utilisation en écriture
* registre d'adresse: envoie à la mémoire l'adresse pour l'écriture
* registre de données: envoie la donnée à la mémoire, qui va écrire celle-ci à l'adresse reçue.

# Travail pratique
[programmer en assembleur](../page3/)

# Liens

* Cours de David Roche sur [pixees.fr/informatiquelycee](https://pixees.fr/informatiquelycee/n_site/nsi_prem_sim_cpu.html)
* Livre numérique sur le [fonctionnement d'un ordinateur](https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur)
* activité sur [l'architecture Von Neumann](http://nsi4noobs.fr/IMG/pdf/e1_1nsi_architecture_von_neumann.pdf)

* architecture von Neumann [wikipedia](https://fr.wikipedia.org/wiki/Architecture_de_von_Neumann)
* UAL et multiplexeur [wikipedia](https://fr.m.wikipedia.org/wiki/Unit%C3%A9_arithm%C3%A9tique_et_logique)