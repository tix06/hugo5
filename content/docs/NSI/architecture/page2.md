---
Title : systeme d'exploitation
---



# Systeme d'exploitation
En informatique, un système d'exploitation (souvent appelé OS — de l'anglais Operating System) est un ensemble de programmes qui dirige l'utilisation des ressources d'un ordinateur par des logiciels applicatifs. [Lien Wikipedia](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27exploitation)

Il reçoit des demandes d'utilisation des ressources de l'ordinateur — ressources de stockage des mémoires (par exemple des accès à la mémoire vive, aux disques durs), ressources de calcul du processeur central, ressources de communication vers des périphériques (pour parfois demander des ressources de calcul au GPU par exemple ou tout autre carte d'extension) ou via le réseau — de la part des logiciels applicatifs. Le système d'exploitation gère les demandes ainsi que les ressources nécessaires évitant les interférences entre les logiciels.

# Processus et blocages
## Définitions
**Exécution d'un programme:** le lancement d’un programme entraîne des lectures et écritures dans des registres et une partie de la mémoire. Le microprocesseur réalise des opérations sur les données mises dans les registres.

**Un processus** représente une instance d’exécution d’un programme dans une  machine donnée.  

## Les états d’un processus  
Les systèmes d'exploitation sont capables de gérer l'execution de plusieurs processus en même temps. En réalité, ce n'est pas tout à fait *en même temps*: pour gérer ce *chacun son  tour*, les **systèmes d'exploitation** attribuent des *états* au processus.

Ces états sont résumés ci-dessous.  

* Lorsqu'un processus est créé, il démarre dans l’état *prêt*: il attend de pouvoir  avoir accès au processeur.  
* Le processus obtient, grâce au systeme d'exploitation, l’accès au processeur. Il passe alors dans l’état *élu*.  
* Alors qu’il est *élu*, le processus peut avoir besoin d’attendre une ressource quelconque comme, par exemple, une ressource en mémoire ou sur le disque dur. Il doit alors quitter  momentanément le processeur pour que celui-ci puisse être utilisé à d’autres tâches  (le processeur ne doit pas attendre!). Le processus passe donc de l'état élu à l’état *bloqué*. (c'est un *blocage*) 
* Lorsque le processus a obtenu la ressource attendue mais s’est fait prendre sa place dans le  processeur par un autre processus, il se met en attente: C'est l'état *prêt*, en attente que la *place se libère*. Cette étape, de bloqué à prêt est l'opération de *déblocage*.
* Le passage de l'état *prêt* vers l'état *élu* constitue l'opération *d'élection*.
* Un processus ne pourra *terminer* que s’il est déjà dans l’état *élu*. 

<figure>
  <img src="../images/election.png">
  <figcaption>mecanisme d'election</figcaption>
</figure>

Un processus peut créer un ou plusieurs nouveaux processus. Il y a alors une filiation père-fils.

Chaque processus possède un numéro **PID** qui lui est attribué automatiquement. Il possède aussi un **PPID** qui est le numéro d'identification du processus père.


## Ordonnancement
Plusieurs processus peuvent être dans l'état prêt: comment choisir celui qui sera élu?

*L'ordonnanceur* (sheduler) classe les processus prêts dans une file et les fait passer du statut **prêt à élu** (et **inversement**). Il planifie l'exécution des processus.

Dans les systèmes d'exploitation, l’ordonnanceur désigne le composant du noyau du *système d'exploitation* choisissant l'ordre d'exécution des processus sur les processeurs d'un ordinateur. Cette organisation permet d'occuper au mieux le (ou les) processeurs.

<figure>
  <img src="../images/ordonnancement.jpg">
  <figcaption>gestion des processus</figcaption>
</figure>


Il existe plusieurs politiques d’ordonnancement dont le choix va dépendre des  objectifs du système. Voici quelques exemples:  

• Premier arrivé, premier servi: simple, mais peu adapté à la plupart des  situations.  
• Plus court d’abord: très efficace, mais il est la plupart du temps impossible de  connaître à l’avance le temps d’exécution d’un processus.  
• Priorité: le système alloue un niveau de priorité aux processus (SCHED_FIFO sur  Linux). Cependant des processus de faible priorité peuvent ne jamais être élus.  
• Tourniquet: un quantum de temps est alloué à chaque processus (SCHED_RR  sous Linux). Si le processus n’est pas terminé au bout de ce temps, il est mis en  bout de file en état prêt.  
• Un système hybride entre tourniquet et priorité qu’on retrouve dans les systèmes Unix. 



## Interblocage
### Concurents mal synchronisés
L'ordonnanceur fait passer les processus de *élu* à *commuté*. Mais Il peut y avoir une situation où 2 processus sont **interbloqués** car:

- P1 possède la ressource R1 mais souhaite R2: commutation pour P2
- P2 possède la ressource R2 mais souhaite R1: commutation pour P1

Dans cette situation, les deux processus légers sont définitivement bloqués.(wiki)

Des solutions de détection/guérison peuvent être mises en place.

### Définition sur Wikipedia
Deux processus en concurrence pour deux ressources dans un ordre opposé. Voici une chronologie possible qui mène à un interblocage.

A) Un seul processus se déroule. 

B) Le processus ultérieur doit attendre. 

C) Un blocage se produit lorsque le premier processus verrouille la première ressource en même temps que le second processus verrouille la seconde ressource. 

D) Le blocage peut être résolu en annulant et en redémarrant le premier processus.

*Exemple:  le processus P1 utilise la ressource R2 qui est attendue par le processus P2 qui utilise la ressource R1, attendue par P1.*

### Modélisation par un graphe orienté
Il y a interblocage lorsque des cycles sont présents dans le graphe réalisé de la manière suivante:

* un arc de la ressource Ri au processus Pj signifie que le processus Pj a obtenu la ressource
* un arc Pj vers Ri signifie que le processus Pj demande la ressource Ri.

 
 <figure>
  <img src="../images/interblocage.png">
  <figcaption>interblocage - wikipedia</figcaption>
</figure>

# TP en console (UNIX) ou avec l'editeur de commandes (WIN)
## La commande `ps`
Pour la liste des processus obtenue par `ps`

* PID : numéro du processus (processus identifier)
* PPID : identifiant du parent qui a engendré le processus
* TTY
* TIME
* CMD : commande qui a lancé le processus

## La commande `top` :
Cette commande est l'équivalent du gestionnaire de tâches de Windows. Elle apporte donc des renseignements sur la consommation mémoire, CPU, buffer et tous les processus en cours. Son intérêt est qu'elle apporte des statistiques de consommation en temps réel.

* PID : numéro du processus
* USER : utilisateur qui fait tourner le process
* %CPU: la consomation du CPU
* %MEM: la consomation de la RAM
* TIME+: le temps d'utilisation CPU depuis que le process est lancé
* COMMAND: le processus en lui-même

| unix | windows | commande |
| --- | --- | --- |
| `ps` | `tasklist / svc`, `tasklist /?` (processus) | liste des processus |
| `ps -aef` | `tasklist / svc`, `sc /?` (services) | liste des services |
| `kill <PID>` ou `kill <PPID>` | `taskkill <nom>`  |  fermer un processus, directement ou avec le PID du parent  |
| `top` |  | suivi en temps réel des processus (sortie avec `q`) |

Sous windows, on peut aussi utiliser le Task manager



# Vocabulaire
## Terminal
Un terminal est un programme qui permet d'interagir avec le systeme d'exploitation. On peut utiliser le terminal au lieu de passer par une interface utilisateur graphique pour donner des commandes.

## Editeur de texte et IDE
* Editeur de texte : C'est un programme conçu pour ecrire et modifier du code. La plupart des editeurs offrent des fonctions pour faciliter l'edition (coloration syntaxique) : notepad++, sublime text, Vim, Atom, Geany...
* IDE : c'est un editeur de texte doté de fonctionnalités de gestion de projet. Pour developper en python, c'est par exemple PyCharm, Spyder, Visual studio...



# Liens
* ce sours est inspiré de [David Roche, sit Pixees term NSI](https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_proc.html) partagé sous licence CC.
* cours NSI qkzk : [systeme de fichiers](https://qkzk.xyz/docs/nsi/cours_terminale/architecture/processus/processus/#système-de-fichiers)
* [multiprocessing](https://en.wikipedia.org/wiki/Multiprocessing)
* [(multi)threading](https://fr.wikipedia.org/wiki/Thread_(informatique))
* [multiprocessing or multithreading](https://timber.io/blog/multiprocessing-vs-multithreading-in-python-what-you-need-to-know/)

