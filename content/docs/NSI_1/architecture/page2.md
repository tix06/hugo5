---
Title: architecture 2
---

# architecture 2
## Rappels
Dans l'architecture Von Neumann:

* une machine universelle est contrôlée par un programme.
* Les données et programmes sont écrits sur une même mémoire (en binaire). Ce qui donne la possibilité de changer les instructions au cours d'un calcul par exemple. C'est le concept de **programme enregistré**. C'est un ordinateur qui enregistre les instructions des programmes qu'il exécute dans sa mémoire vive.
* Les instructions sont executée de manière séquentielle, par un **processeur**.
* Les mémoires RAM et mémoires non volatiles (Disques durs, mémoires flash) sont reliées au processeur (donc aux registres du processeur) par une liaison appelée Bus, que l'on peut considérer comme unique.

# Description d'un ordinateur

<figure><a href="https://www.youtube.com/watch?v=cQjllS45ReU" target=blank>
  <img src="../images/architectureN1.png">
  <figcaption>MooC Arduino #4 - Architecture de Von-Neumann, Harvard et Microcontrôleurs<br> - Youtube</figcaption></a>
</figure>

## Echelle macro: périphériques
Un ordinateur comprend des périphériques d'entrée et sortie:

* écran, haut-parleur, souris, clavier...

## Echelle intermédiaire
A une echelle plus proche du processeur: Un ordinateur a une carte mère sur laquelle on trouve différents ports et supports de cartes:

* port de branchement des mémoires, disques durs, port RJ45 (reseau), carte wifi, carte son, carte graphique, ...

Certains ports vont ajouter des extensions à l'ordinateur (carte son, video, wifi). Certains vont être essentiels au fonctionnement de l'ordinateur (mémoires).

## Echelle micro
Les constituants de l'ordinateur sont composés de circuits intégrés. On trouve 2 grandes catégories de circuits intégrés:

* les circuits combinatoires: l'état de sortie de ces circuits ne dépend que des états d'entrée.
* les circuits séquentiels: l'état de sortie dépend des états d'entrée, mais aussi de l'état courant du circuit. Ces circuits peuvent ainsi stocker une valeur appelée état courant. Les registres sont typiquement des circuits intégrant des circuits séquantiels.

## Le processeur
<figure>
  <img src="../images/architectureN2.png">
  <figcaption>Architecture de Von-Neumann - processeur</figcaption>
</figure>

L'architecture d'un **processeur** (CPU) comporte 2 parties: 

* L'**UC**: C'est l’*unité de commande*, **UC**, qui traduit chacune des instructions successives du programme en opérations élémentaires. Ces instructions sont déposées dans un **registre** spécial.  L'**UC** interprète les instructions des programmes, et provoque leur exécution.
* La **partie opérative** qui comprend les outils permettent de réaliser les actions élémentaires ordonnés par l'UC. Cette **unité de traitement** est constituée de:
  * l'**UAL** (Unité Arithmétique et Logique) qui réalise les opérations arithmétiques sur des entiers.
  * des **registres internes**, pour stocker de manière très provisoire les retenues des calculs par exemple.

*L'UC traite une séquence d'instructions, alors que l'UAL traite une séquence de données*. L’**UC** est chargée de la reconnaissance des instructions et de leur exécution par l’unité de traitement au *rythme de l’horloge*.

Le processeur réalise le cycle de Von Neumann:

1. Lire une case mémoire d’adresse PC (envoyer l’adresse à la mémoire, et recevoir en retour la donnée à cette adresse).
2. Interpréter cette donnée comme une instruction, et l’exécuter
3. Ajouter 1 au *program Counter* (PC)
4. Recommencer



# L'assembleur
Un langage d'assemblage ou langage assembleur est, en programmation informatique, le langage de plus bas niveau qui représente le langage machine sous une forme lisible par un humain. ([wiki](https://fr.wikipedia.org/wiki/Assembleur))

Le premier programme assembleur a été écrit par Nathaniel Rochester pour l'IBM 701 (le premier ordinateur commercialisé par IBM) en 1954.

<figure>
  <img src="../images/archi6.png">
<figcaption>exemple de programme assembleur pour  le microprocessor Motorola 6800 8-bit  - source : <a href="https://fr.wikipedia.org/wiki/Assembleur">wikipedia</a></figcaption>
</figure>


Pour échanger des données avec la mémoire, le processeur transfert l'état d'un registre dans une case mémoire (STA) ou l'état d'une case mémoire dans un registre (LDA). On rappelle que la mémoire contient à la fois les instructions et les données.

Les instructions de traitement que l'on verra ici concernent uniquement les registres. 

L'un de ces registres est le *Program Counter*, PC. Celui-ci repère l'état courant dans le programme (la ligne du script à executer).

Voici une liste non exaustive des instructions du <a href="" target=blank>simulateur ARM</a>:

* `MOV Rd, operand2`: copie la valeur de opérande2 dans Rd (le registre d)<br>
exemple: `MOV R0, #23` place la valeur R3 dans le registre 0.
* `ADD Rd, Rn, operand2`: additionne opérande et Rn et place le résultat dans Rd. Opérande peut être un nombre (précédé de dièse) ou la valeur d'un registre Rm
* `SUB Rd, Rn, operand2`: idem mais soustraction
* `LSL Rd, Rn, operand2`: déplace les bits de Rn de 'opérande' bits vers la gauche et stocke dans Rd (multiplication par 2, souvenez vous!)
* `LSR Rd, Rn, operand2`: déplace les bits de Rn de 'opérande' bits vers la droite et stocke dans Rd (division par 2!)
* HALT: arret du programme
* `INP R0,2`: attend un nombre en entrée
* `OUT Rd, nombre`: affiche à l'écran. out Rd,4 affiche un nombre signé ou non(Rd,5). Rd,6 affiche en hexadécimal et Rd,7 affiche un caractère.
* `CMP Rn, operand2`: effectue la comparaison entre Rn et l'opérande. Attention, cette instruction ne traite pas le résultat de la comparaison! C'est le rôle de la commande suivante.
* B ou BGT, ... sont les opérations de branchement (voir plus loin)<br>

La liste complète des instructions se trouve à la page INFO accessible depuis le bouton [info](https://www.peterhigginson.co.uk/AQA/info.html) du simulateur.


<figure>
  <img src="../images/ARM.png">
  <a href="https://www.youtube.com/watch?v=mhpwogkbtDU&t=17s" target=blank><figcaption>Explications (video) sur le simulateur ARM -<br> monlyceenumerique.fr</figcaption></a>
</figure>

Le <a href="https://www.peterhigginson.co.uk/AQA/" target=blank>simulateur ARM</a> contient quelques exemples dont:

* ADD: programme qui ajoute 2 nombres entrés par l'utilisateur

```
      INP R0,2
      INP R1,2
      ADD R2,R1,R0
      OUT R2,4
      HALT
      // Output the sum of two numbers
```

* MAX: programme qui retourne le plus grand des 2 nombres saisis par l'utilisateur

```
      INP R0,2
      INP R1,2
      CMP R1,R0
      BGT HIGHER
      OUT R0,4
      B DONE
HIGHER:
      OUT R1,4
DONE:
      HALT
      // Input two numbers and output the higher
```

Dans ce 2<sup>e</sup> exemple, si R1 est supérieur à R0 (test à la ligne 3), alors le programme effectue un *branchement conditionnel* à la ligne 4 (BGT est le branchement pour Greater Than). Il execute à ligne 4 l'appel de la fonction HIGHER), sinon il passe à la ligne 5 (OUT R0,4).

*Remarque:* la ligne 6 `B DONE` est necessaire pour eviter de repeter les instructions qui suivent le repère `HIGHER: OUT R1,4`. Il s'agit d'un branchement vers le repère `DONE`.

# Travail pratique: Assembleur
Utiliser le <a href="https://www.peterhigginson.co.uk/AQA/" target=blank>simulateur</a>  pour réaliser les exercices suivants.

## Opérations simples
**1.** Il s'agit d'obtenir le nombre 84 à partir des nombres 50,25,8,7,3 et 1 avec les opérations : addition et soustraction uniquement.

Testez le script dans le simulateur:

```
MOV R0,#50
ADD R0,R0,#25
ADD R0,R0,#8
ADD R0,R0,#1
HALT
```

**2.** Obtenir 84 à partir de 90,25,8,7,3 et 1 avec les opérations : addition et soustraction uniquement.

**3.** Obtenir 128, en partant de la valeur 1 stockée dans R0. Utilisez les  instructions de multiplication par 2 du langage. *Voir la documentation du simulateur ARM (cliquer sur INFO) et chercher dans le paragraphe The AQA Instruction Set les commandes LSL et LSR*

## Programmmer avec des boucles
**1.** Cliquer sur SELECT et choisir le programme `max` en assembleur qui affiche le plus grand de deux entiers entrés au clavier, le comprendre et l'exécuter (Bien comprendre les instructions B, CMP et BGT voir le manuel)

**2.** Ecrire en assembleur un programme utilisant des fonctions parmis LSL, LSR, B et BNE qui affiche 1 si le nombre est pair , 0 sinon. (BNE: Branchement si Not Equal).

## Calculer 1+2+3...+n où n est entré au clavier:
**1.** Compléter le programme en assembleur ci-dessous pour résoudre le problème puis essayer avec n = 3 en mode pas à pas
Exécuter avec RUN en vitesse maximale pour n = 10

```
INP R0,2
MOV R1,#0 // compteur de boucle
MOV R2,#0 // somme 
boucle:
ADD ...........
ADD ...........
CMP ...........
.... boucle
OUT R2,4
HALT
```

**2.** Estimer le nombre d'opérations significatives effectuées pour n = 10. Combien d'opérations significatives seraient réalisées pour n = 100?

<!--
# Compléments et corrections

* Exemple de programme qui affiche toutes les puissances de 2 jusqu'à 128:*


```
  0       MOV R0, #1
  1       MOV R1, #0
    multiplie:
  2       LSL R0, R0, #1
  3       OUT R0,4
  4       ADD R1,R1,#1
  5       CMP R1, #7
  6       BLT multiplie
  7       HALT
  ```

* Correction de l'exercice somme 1..N

```
      INP R0,2 // demander n
      MOV R1, #0 // somme attention inversion / enonce
      MOV R2, #1 // compteur
boucle:
      ADD R1, R1, R2 // somme
      ADD R2, R2, #1 // compteur incrementer de R1
      CMP R2, R0
      BLT boucle
      OUT R1,4
      HALT
```

* Assembleur pour  le microprocessor Motorola 6800 8-bit (voir image plus haut):

Supposons qu'il existe 2 registres, A et B: Les deux opérations qui s'appellent le stockage (**STA**) et le chargement (**LDA**) du contenu d'une case mémoire dans le registre A (ST pour STore, LD pour LoaD). Il y a bien entendu des opérations similaires pour le registre B (**STB** et **LDB**).

Une autre opération que peut exécuter le processeur est l'addition du contenu du registre A et du contenu du registre B. Et le résultat de l'opération peut être stocké dans le registre A (**ADD A**) ou dans le registre B (**ADD B**). De même, **DEC A** décrémente la valeur contenue dans le registre A, c'est-à-dire soustrait 1 à la valeur contenue dans le registre A et stocke la valeur ainsi obtenue dans le registre A et DEC B réalise le même calcul sur la valeur contenue dans le registre B.

*Exemple:* 

* LDA 7 <=> charger dans la registre A le contenu de la case mémoire n°7.
* LDB 8
* ADD A <=> ajouter le contenu des registres A et B et mettre le résultat dans le registre A
* STA 11 <=> mettre le contenu du registre A dans la case 11.

on pourrait exprimer le programme ci-dessus en binaire en décidant par exemple que l'instruction LDA s'écrit 0, l'instruction LDB s'écrit 1, l'instruction STA s'écrit 2, l'instruction STB s'écrit 3 et l'instruction ADD s'écrit 4, DEC s'écrit 5. A s'écrit 0 et B s'écrit 1. 

Supposons que l'adresse de la première donnée de ce programme en mémoire soit le n°100, on a la suite d'instructions entre les cases mémoires 100 et 107: 0,7,1,8,4,0,2,11

Le processeur doit donc disposer d'un registre appelé *compteur de programme*, PC, qui débute à 100, et qui est incrémenté de 2 après chaque instruction.

A chaque nouvelle instruction, l'**UC** du processeur charge le contenu des cases mémoires d'adresses PC et PC + 1 dans des registres. Son **UAL** décode (operation + argument) et execute:

Par exemple, pour la séquence précédente, les codes **0 et 7** correspondent à l'opération et la donnée pour la première instruction. (LDA 7). Puis viennent **1 et 8**, correspondant à LDB 8, ...etc.

*Tests et branchements:*  Deux instructions supplémentaires seront nécessaires:

**JMP** (jump) suivi de l'argument n charge le nombre n dans le registre PC : sert à détourner le programme de sa route et le forcer à continuer son exécution à l'adresse n. 

**JMZ** (jump if zero): effectue un saut si le contenu du registre A est 0, permet de faire des tests. On ajoute enfin l'instruction END, qui termine le programme. En langage machine, on suppose que JMP s'écrit 6. JMPZ s'écrit 7. END s'écrit 8 avec un argument puisqu'il en faut un : 0.

**JMN** et **JMP** suivi de l'argument n, effectuent un saut si le contenu du registre A est négatif (JMN) ou positif (JMP).

Pour construire une boucle ou un test avec ces nouvelles instructions, il faut tout d'abord trouver une façon de traduire la condition du test ou la condition d'arrêt de la boucle par un test d'égalité à zéro.
-->


# Liens
* TP inspiré de [http://www.mathly.fr/archi.php](http://www.mathly.fr/archi.php)
* Livre numérique sur le [fonctionnement d'un ordinateur](https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur)
* activité sur [l'architecture Von Neumann](http://nsi4noobs.fr/IMG/pdf/e1_1nsi_architecture_von_neumann.pdf)
* architecture von Neumann [wikipedia](https://fr.wikipedia.org/wiki/Architecture_de_von_Neumann)