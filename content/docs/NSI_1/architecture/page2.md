---
Title: architecture 2
---

# architecture 2
# Le processeur
Dans l'architecture Von Neumann:

* une machine universelle est contrôlée par un programme.
* Les données et programmes sont écrits sur une même mémoire (en binaire). Ce qui donne la possibilité de changer les instructions au cours d'un calcul par exemple. C'est le concept de **programme enregistré**. C'est un ordinateur qui enregistre les instructions des programmes qu'il exécute dans sa mémoire vive.
* Les instructions sontexecutée de manière séquentielle, par un **processeur**.

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
Le premier programme assembleur a été écrit par Nathaniel Rochester pour l'IBM 701 (le premier ordinateur commercialisé par IBM) en 1954.

<figure>
  <img src="../images/archi6.png">
<figcaption>exemple de programme assembleur pour  le microprocessor Motorola 6800 8-bit  - source : <a href="https://fr.wikipedia.org/wiki/Assembleur">wikipedia</a></figcaption>
</figure>


Pour échanger des données avec la mémoire, le processeur utilise deux procédés qui permettent l'un de transférer l'état d'un registre dans une case mémoire et l'autre de transférer l'état d'une case mémoire dans un registre.

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

# Liens
* Livre numérique sur le [fonctionnement d'un ordinateur](https://fr.wikibooks.org/wiki/Fonctionnement_d%27un_ordinateur)
* activité sur [l'architecture Von Neumann](http://nsi4noobs.fr/IMG/pdf/e1_1nsi_architecture_von_neumann.pdf)
* architecture von Neumann [wikipedia](https://fr.wikipedia.org/wiki/Architecture_de_von_Neumann)