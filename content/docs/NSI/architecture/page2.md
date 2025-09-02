---
Title : systeme d'exploitation
---



# Systeme d'exploitation
En informatique, un système d'exploitation (souvent appelé OS — de l'anglais Operating System) est un ensemble de programmes qui dirige l'utilisation des ressources d'un ordinateur par des logiciels applicatifs. [Lien Wikipedia](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27exploitation)

Il reçoit des demandes d'utilisation des ressources de l'ordinateur — ressources de stockage des mémoires (par exemple des accès à la mémoire vive, aux disques durs), ressources de calcul du processeur central, ressources de communication vers des périphériques (pour parfois demander des ressources de calcul au GPU par exemple ou tout autre carte d'extension) ou via le réseau — de la part des logiciels applicatifs. Le système d'exploitation gère les demandes ainsi que les ressources nécessaires évitant les interférences entre les logiciels.

# Processus et blocages
## Définitions
**Exécution d'un programme:** le lancement d’un programme entraîne des lectures et écritures dans des registres et une partie de la mémoire. Le microprocesseur réalise des opérations sur les données mises dans les registres.

**Un processus** représente une instance d’exécution d’un programme dans une  machine donnée, qui a sa propre zone mémoire virtuelle.  

## Les états d’un processus  
Les systèmes d'exploitation sont capables de gérer l'execution de plusieurs processus en même temps. En réalité, ce n'est pas tout à fait *en même temps*: pour gérer ce *chacun son  tour*, les **systèmes d'exploitation** attribuent des *états* au processus.

Ces états sont résumés ci-dessous.  

* Lorsqu'un processus est créé, il démarre dans l’état *prêt*: il attend l'accès au processeur.  
* Le processus obtient, grâce au systeme d'exploitation, l’accès au processeur. Il passe alors dans l’état *élu*.  
* Alors qu’il est *élu*, le processus peut avoir besoin d’attendre une ressource quelconque comme, par exemple, une ressource en mémoire ou sur le disque dur. Il doit alors quitter  momentanément le processeur pour que celui-ci puisse être utilisé à d’autres tâches  (le processeur ne doit pas attendre!). Le processus passe donc de l'état élu à l’état *bloqué*. (c'est un *blocage*) 
* Lorsque le processus a obtenu la ressource attendue mais s’est fait prendre sa place dans le  processeur par un autre processus, il se met en attente: C'est l'état *prêt*, en attente que la *place se libère*. Cette étape, de bloqué à prêt est l'opération de *déblocage*.
* Le passage de l'état *prêt* vers l'état *élu* constitue l'opération *d'élection*.
* Un processus ne pourra *terminer* que s’il est déjà dans l’état *élu*. 

{{< img src="../images/election.png" caption="mecanisme d'election" >}}
Un processus peut créer un ou plusieurs nouveaux processus. Il y a alors une filiation père-fils.

Chaque processus possède un numéro **PID** qui lui est attribué automatiquement. Il possède aussi un **PPID** qui est le numéro d'identification du processus père.


## Ordonnancement
Plusieurs processus peuvent être dans l'état prêt: comment choisir celui qui sera élu?

*L'ordonnanceur* (sheduler) classe les processus prêts dans une file et les fait passer du statut **prêt à élu** (et **inversement**). Il planifie l'exécution des processus.

Dans les systèmes d'exploitation, l’ordonnanceur désigne le composant du noyau du *système d'exploitation* choisissant l'ordre d'exécution des processus sur les processeurs d'un ordinateur. Cette organisation permet d'occuper au mieux le (ou les) processeurs.

{{< img src="../images/ordonnancement.jpg" caption="gestion des processus" >}}

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



### Modélisation par un graphe orienté
Il y a interblocage lorsque des cycles sont présents dans le graphe réalisé de la manière suivante:

* un arc de la ressource Ri au processus Pj signifie que le processus Pj a obtenu la ressource
* un arc Pj vers Ri signifie que le processus Pj demande la ressource Ri.

 
{{< img src="../images/interblocage.png" caption="interblocage - wikipedia" >}}

*Exemple:  le processus P1 utilise la ressource R2 qui est attendue par le processus P2 qui utilise la ressource R1, attendue par P1.*

### Illustration d'un interblocage routier
{{< img src="../images/thread2.png" caption="saurez vous modéliser la situation suivante par un graphe présentant un cycle?" >}}

### Gestion des tâches par une même application
Un *thread* est un élément d'un processus qui va partager avec un programme l'espace des données et va s'exécuter de façon simultané avec d'autres thread. On parle aussi de processus légers. 

Plusieurs *threads* peuvent exister dans le même processus. Ces *threads* partagent la mémoire et l’état du processus. En d’autres termes: ils partagent le code ou les instructions et les valeurs de ses variables.

{{< img src="../images/thread1.png" caption="partage des ressources par 3 threads" >}}

Ils peuvent aussi causer de multiples problèmes (accès concurent, interblocage).

On a vu un problème identique sur la gestion concurente des accès à une même ressource sur le chapitre sur les SGBD.

Le TP2 plus bas permet d'explorer ces notions avec le multi-threading...

# Utiliser la console Linux
## Les bases du langage en console LINUX
* [Fiche résumé](/pdf/NSI/archi6_Linux.pdf)
* [TP utilisant la console UNIX](https://mcoilhac.forge.apps.education.fr/site-nsi/Linux/4_TD_commandes_linux/)
    <li>TP utilisant la console UNIX: <a href="https://mcoilhac.forge.apps.education.fr/site-nsi/Linux/4_TD_commandes_linux/">Lien</a></li>



## Les commandes d'exploration
* `PWD`: nom du repertoire courant
* `cd ..`: remonter au repertoire parent
* `ls`: lister le contenu du repertoire courant. Nombreuses options possibles comme `l` (affiche le contenu et les droits), `-r` (parcours et affichage recursif), ...


## La commande `cat`
Cette commande permet à la fois:

* de consulter le contenu d'un fichier: `cat nom_du_fichier`
* de créer et editer le contenu d'un fichier: `cat > nom_du_fichier`. Le curseur (carré) permet d'editer le contenu. Pour sortir de l'editeur, faire CTRL + D.

## afficher un contenu trop long
Si vous utilisez `ls -R`, qui affiche de manière recursive le contenu de tous les repertoires et fichiers à partir du repertoire courant, l'affichage est trop rapide pour en voir le detail.

On peut alors utiliser l'option `| more`, qui attend un appui sur le clavier pour passer à la suite de l'affichage: `ls -R | more`.

Une autre possibilité est de rediriger le contenu dans un fichier, nouveau ou existant: `ls -R > fichier1.txt`

Le symbole `>` va *mettre* le contenu dans le fichier, alors que `>>` va *ajouter* le contenu au fichier.

## La commande `ps` ou 'ps -l'
Pour la liste des processus obtenue par `ps`

* PID : numéro du processus (processus identifier)
* PPID : identifiant du parent qui a engendré le processus
* PRI : numero pour indiquer la priorité
* TTY : le terminal utilisé
* TIME : temps d'occupation du processeur
* CMD : commande qui a lancé le processus
* STAT : statut

Les status possibles

* R (Running et Runnable) : en cours d'exécution. Nous verrons que cela correspond aux états PRET (Runnable) ou ELU (Running) de la partie 2.
* S (Sleeping) : endormi. Cela correspond à l'état BLOQUE de la partie 2.
* D (Device) : en attente d'une ressource (généralement d'entrée/sortie) (le processus ne peut pas être interrompu). Cela correspond à l'état BLOQUE de la partie 2.

Les trois états terminaux FINI :

* T (sTopped) : terminé et va transmettre sa réponse à son parent. On libère une partie de la mémoire mais on garde encore des informations sur son état final.
* Z (Zombie) : processus terminé ayant répondu mais dont le parent n'a pas encore eu le temps de totalement finir la destruction.
* X (Dead) : processus terminé et détruit (vous ne devriez jamais voir de X dans votre liste).
On peut trouver une deuxième lettre derrière l'état : il s'agit de la priorité du processus :

* `<` : Priorité haute
* `+` : Processus au premier plan
* `s` : Leader de session
* `l` : multi-theads
* `N` : Priorité basse
* `L` : ressources verrouillées en mémoire

> Voir aussi le TP au paragraphe 3 LINUX de la page [Levasseur.xyz: NSI](https://www.levavasseur.xyz/NSI_T/Archi/Archi_Processus.html#partie_3)

> Et l'exercice 3 sujet 1 metropole 2021 sur la fiche d'[exercices](/pdf/NSI/archi3_processus.pdf)

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
| `top` |  | suivi en temps réel des processus (sortir avec la touche `q`) |

Sous windows, on peut aussi utiliser le Task manager

## Edition de fichiers ou dossiers
### Créer un nouveau fichier vide
`touch <nom fichier>`

On rappelle que la commande `cat` permet aussi de créer ET editer un fichier.

### Copie
`cp <chemin du fichier a copier> <dossier destination>`

`cp -r <chemin dossier a copier> <destination>`

*Rappel:* Le chemin est:

* absolu s'il commence par `/`
* relatif sinon

### deplacer
`mv <chemin du fichier a copier> <dossier destination>`

*Remarque*: cette commande sert aussi à *renommer* un fichier. 

`mv <ancien nom> <nouveau nom>`

## Gestion des droits
Les utilisateurs et les groupes sont utilisés sous Linux pour le contrôle d'accès c'est-à-dire pour contrôler l'accès aux fichiers, répertoires et périphériques du système.

### Consulter les droits
Un utilisateur est toute personne qui utilise un ordinateur. Il doit porter un nom, vrai ou faux (alice, pirate, votre prenomnom, ...). Tout ce qui compte, c'est que l'ordinateur ait un nom pour chaque compte qu'il crée.

Les utilisateurs peuvent être regroupés dans un "groupe", regroupant les contrôles d'accès prévus pour chaque fichier.

L'utilisateur peut avoir le *statut*:

* `u` (user) propriétaire de la ressource
* `g` (group) fait partie du groupe d'utilisateurs propriétaires de ce fichier
* `o` (other) autres (ceux qui ne sont pas propriétaires)

Ce statut est indiqué dans la 3e colonne sur l'image suivante:

{{< img src="../images/term_usr.png" caption="image de linux-console.net" >}}

*La 4e colonne indique le groupe d'utilisateurs propriétaires. (Souvent, c'est le même que le propriétaire). Le numero dans la 2e colonne est le nombre de lien pointant vers la ressource.*

L'utilisateur est repéré dans le systeme par son numero *user id* (uid) et *group id* (gid). 

Chaque fichier sur un système GNU/Linux appartient à un utilisateur et à un groupe.

Différentes autorisations d'accès peuvent être appliquées à l'utilisateur propriétaire d'un fichier, au groupe propriétaire et aux *autres*.

L'utilisateur possède selon son statut les *droits*:

* `r` en lecture
* `w` en écriture
* `x` en execution ou ouverture (dossier)

avec la commande `ls -l` on affiche le contenu du repertoire ainsi que les droits, dans l'ordre *user group other*

*Exemple*: 

`drwx r-x --x` signifie que *user* possède les droits *rwx*, que *group* possède les droits *rx* et *other* uniquement *x*. Le *d* initial signifie *directory*, le type d'élément (dossier, fichier). Le tiret signifie que le droit est *desactivé*.

### Changer les droits
* `chmod <ressource> g-x`  va *retirer* le droit en execution à *g*
* `chmod <ressource> g+x`  va *ajouter* le droit en execution à *g*

# Vocabulaire
## Terminal
Un terminal est un programme qui permet d'interagir avec le systeme d'exploitation. On peut utiliser le terminal au lieu de passer par une interface utilisateur graphique pour donner des commandes.

## Editeur de texte et IDE
* Editeur de texte : C'est un programme conçu pour ecrire et modifier du code. La plupart des editeurs offrent des fonctions pour faciliter l'edition (coloration syntaxique) : notepad++, sublime text, Vim, Atom, Geany...
* IDE : c'est un editeur de texte doté de fonctionnalités de gestion de projet. Pour developper en python, c'est par exemple PyCharm, Spyder, Visual studio...

# TP2 multi-treading et Python
[Lien vers le TP](../page8): parallélisme en Python

# Liens
* ce cours est inspiré de [David Roche, sit Pixees term NSI](https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_proc.html) partagé sous licence CC0
* Processeur, programmes, processus: [très bon cours de levasseur.xyz](https://www.levavasseur.xyz/NSI_T/Archi/Archi_Processus.html)
* cours NSI qkzk : [systeme de fichiers](https://qkzk.xyz/docs/nsi/cours_terminale/architecture/processus/processus/#système-de-fichiers)
* [multiprocessing](https://en.wikipedia.org/wiki/Multiprocessing)
* [(multi)threading](https://fr.wikipedia.org/wiki/Thread_(informatique))
* [multiprocessing or multithreading](https://timber.io/blog/multiprocessing-vs-multithreading-in-python-what-you-need-to-know/)
* Guide complet sur la propriété et les groupes de fichiers Linux: [linux-console.net](https://fr.linux-console.net/?p=12841)
* Bref historique (fiche) de l'evolution des ordinateur et des systemes d'exploitation: [courstechinfo.be](https://courstechinfo.be/Techno/Historique2.pdf)
