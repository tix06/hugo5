---
Title: IOT
---

# Robot: Mythe et réalité

{{< img src="../images/atlas_frontview.jpeg" caption="Atlas (2013), robot androïde de Boston Dynamics. Wikipedia." >}}

Le terme robot est issu des langues slaves et formé à partir du radical rabot, rabota (работа en russe) qui signifie travail, corvée que l'on retrouve dans le mot Rab (раб), **esclave** en russe. [wiki](https://fr.wikipedia.org/wiki/Robot).

*Dans l'antiquité: Le mythe de Pygmalion racontait déjà comment la statue Galatée devint vivante et s’affranchit de son créateur afin de partir à la conquête du monde des hommes.*

*A la Renaissance, Le premier exemple d’un robot de forme humaine fut donné par Léonard de Vinci en 1495. Ses notes à ce sujet recelaient des croquis montrant un cavalier muni d’une armure qui avait la possibilité de se lever, bouger ses membres.*

*La litterature de science fiction du XIXe et XXe regorge d'exemples, mettant en scène des robots. Une oeuvre majeure est celle de Isaac Asimov: [Les Robots (1950)](https://fr.wikipedia.org/wiki/Les_Robots), dans laquelle il énonce les [3 lois de la robotique](https://fr.wikipedia.org/wiki/Trois_lois_de_la_robotique). Ces trois lois forment un principe d'organisation, qui donne un cadre aux différentes nouvelles.*

{{< img src="../images/wiki_robots.png" caption="Diversité des robots. Wikipedia." >}}

Cette diversité de machines montre que le *robot* fait partie d'une plus grande famille d'objets, dont l'enjeu dépasse aujourd'hui le simple fait d'agir de manière autonome. Ce sont aussi et surtout des *objets connectés*, en reseau.

# Informatique des objets

{{< img src="../images/robot0.png" link="https://www.youtube.com/watch?v=DOECi_ZKaYI"  caption="Video du mooc SNT sur IOT" >}} 

> A partir de la video: citer un ou des *capteurs*, *actionneurs*, un exemple de *programme*. Qu'est-ce qu'un objet connecté?

## Premier exemple: robots agricoles
Ces robots ont en commun qu'ils:

* utilisent la reconnaissance de formes et de couleurs
* analysent, déclenchent une action en rapport avec cette mesure
* utilisent une source d'énergie adaptée, qui les rend autonome
* communiquent sur le reseau (internet)
* echangent avec un logiciel (IHM)

{{< img src="../images/robot2.png" link="https://www.youtube.com/watch?v=HIpelnM1NBE&list=PLTvT0yWRovX-at4Dmg9kej99798ndCPrR&index=1"  caption="Exemple 1" >}}

{{< img src="../images/robot3.png" link="https://www.youtube.com/watch?v=Li9eWpLGFiU&list=PLTvT0yWRovX-at4Dmg9kej99798ndCPrR&index=11"  caption="Exemple 2" >}}

{{< img src="../images/robot4.png" link="https://www.youtube.com/watch?v=3xL8Db60YUk&list=PLTvT0yWRovX-at4Dmg9kej99798ndCPrR&index=12"  caption="Exemple 3" >}}

On parlera plus d'*objets connectés* que de *robots*.

## Constitution d'un objet connecté
Un objet connecté a une **fonction**: il est prévu pour réaliser certaines **tâches** en rapport avec la **mission** qu'il doit accomplir.

Un objet connecté est muni de:

* Capteur: transfomation d'une mesure physique en un signal électrique.
* Actionneur: transformation d'un signal electrique en un moyen physique
* Processeur: pour un traitement local des données, plus ou moins complexe
* Source d'énergie: adaptée à la fonction
* Moyen de communication: du codage à la transmission des données selon des protocoles standards ou dédiés.

Enfin, l'objet peut disposer également d'une IHM (interface homme-machine), souvent par l'intermédiaire d'une application.



{{< img src="../images/syst_embarque.png" link="/pdf/SNT/syst_embarque.pdf"  caption="Chaine d'information et chaine d'énergie, structure des systèmes" >}}

## Définition d'un objet connecté
*Définitions d’un objet connecté et de l'Internet des Objets (IdO), ou Internet of Things (IOT):*

* L'IOT (IdO), désignent l'ensemble des architectures et des systèmes destinés à assurer le fonctionnement de différents objets via une connexion internet. Ce fonctionnement peut se faire par communication entre appareils eux-mêmes, ou entre appareils et le Cloud.

* Les objets connectés sont donc des objets physiques connectés ayant leur propre identité
numérique et capables de communiquer les uns avec les autres.

**Un objet connecté a deux rôles principaux:**

* La **collecte de données** issues de son univers *(surveillance)*
* Un **seuil d’ action**: selon les données recueillies et communiquées. Ainsi, par exemple, déclencher l’arrosage du gazon lorsque la chaleur externe est trop élevée.  

**Etude de quelques exemples d'objets connectés du quotidien:** [SNT, Lycee Lafayette Brioude](https://sites.google.com/view/snt-brioude/accueil/informatique-embarqu%C3%A9e-et-objects-connect%C3%A9s/activit%C3%A9-2-objet-connect%C3%A9)

> Retrouver tous les constituants de l'objet connecté à partir de l'un des exemples proposés.

{{< img src="../images/brosse.png" link="/pdf/SNT/brosse.pdf"  caption="Exemple 3" >}}



**A quoi servent-ils?:**

les objets connectés proposent un certain degré de commodité dans notre quotidien. Grâce à cet objet, nous pouvons gagner beaucoup de temps et parfois d’énergie. L’idO est employé dans différents domaines d’activité. Par ailleurs, l’Internet des objets vise à relever différents challenges majeurs actuels et futurs. [page eurotechconseil.com](https://www.eurotechconseil.com/blog/definition-internet-des-objets/):

* Les smart-cities: pilotent le flux de circulation ou les illuminations en temps réel en fonction de l’heure de la journée. Une telle avancée technologique permet de régler certains des problèmes de saturation des centres-villes et de la pollution par la lumière, et de réduire les émissions de CO2.

* transports publics: plusieurs capteurs existent pour diffuser des informations précieuses ainsi que pour réguler la circulation et renseigner les passagers en temps réel.

* Dans les secteurs industriel et agricoles, l’idO augmente la productivité.

## Un objet connecté dans le reseau internet

Comme toute machine sur internet, un objet est identifié par son adresse IP. Dans son réseau, le canal de communication privilégié sera le Wi-Fi, le Bluetooth, la puce RFID… 

**RFID**: Radio Frequency Identification: c'est une méthode permettant de mémoriser et récupérer des données à distance. Le système est activé par un transfert d’énergie électromagnétique entre une étiquette radio et un émetteur RFID.  L’étiquette radio  composée d’une puce électronique et d’une antenne reçoit le signal radio émis par le lecteur lui aussi équipé d’une technologie RFID. Les composants permettent à la fois de lire et de répondre aux signaux.

{{< img src="../images/RFID.png" link="https://sbedirect.com/fr/blog/article/comprendre-la-rfid-en-10-points.html" caption="fonctionnement du RFID" >}}

On trouve cette technologie dans les puces pour animaux, clés de voiture, badges d'entrée,... [voir article sur RFID et NFC](https://sbedirect.com/fr/blog/article/comprendre-la-rfid-en-10-points.html)

**Le programme et les données**: souvent, le programme n'est pas **dans l'objet**, mais **dans le serveur** prévu. L'utilisation du serveur necessite souvent de renseigner des informations personnelles lorsque l'on utilise un service connecté. Cela peut poser un problème sur la protection et l'usage de ces données.



## Le robot supérieur aux humains?
Ces videos virales sur Youtube. Vrai ou Faux Robot?

{{< img src="../images/robot1.png" link="https://www.youtube.com/watch?v=bV3jWBr-9Ok"  caption="Exemple avec cette vidéo montrant un robot qui fait un superbe point contre le Polonais Pavel Sirucek" >}} 

les vidéos de robotique virales nous conduisent à la prudence et à une analyse plus critique de ce que nous voyons.