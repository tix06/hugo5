---
Title: reseaux sociaux
---

# Definition d'un reseau social

Les reseaux sociaux sont des applications qui servent à créer des « communautés ». Il permettent aux usagers d’utiliser un compte public ou privé. 
Il permet de communiquer de manière instantanée, et se substituent peu à peu aux mails. 

<figure>

  <img src="../images/rs6.png">

</figure>

Les applications de type RS ont des fonctionnalités étendues qui sont en convergence (utilisation de hashtag, post de texte, img, video, reactions de type LIKE, interopérabilité…)

<figure>

  <img src="../images/rs5.png">

</figure>

Une conséquence de l’usage d’un ou plusieurs RS est la constitution d’une veritable identité numérique pour la personne, puisque chaque reaction/publi, surf, se fait avec sa propre identité.

> Les réseaux sociaux combinent trois fonctions fondamentales :

> - support de l'identité numérique ;
- moyen de sociabilité sur la base de critères d'affinité ; 
- média réticulaire de communication interpersonnelle et/ou intergroupe.

# e-reputation et identité numérique
## e-reputation
La e-reputation est due à l'identité numérique que l'on se construit, mais aussi par ce qu'en disent les autres.

La **e-réputation** a tendance à définir, aux yeux des autres, ce que vous êtes, **selon la manière dont on parlera de vous**, positivement ou négativement. Cette notoriété Internet peut pencher d’un côté comme de l’autre, en tout cas elle sera très représentative de la manière dont on vous percevra, qui que vous soyez.

<figure>
  <div>
  <img src="../images/rs3.png">
 </div>
</figure>

## identité numérique
L’identité numérique est de son côté le lien entre une personne et ses informations virtuelles, pouvant être trouvées par le biais d’une simple recherche sur Internet. Cette identité est **multiple**.

Toute activité sur le Web implique la création de traces. Certaines sont volontaires, d'autres involontaires. Elles sont collectées, partagées entre applications et stockées dans des bases de données. Leur addition construit l'identité numérique de chacun.

> Une journaliste parisienne inscrite sur un fameux site de rencontre a décidé de réclamer ses données personnelles auprès dti site.
Pour 1'équivalent d'une fréquentation de 4 années, el1e a reçu
pas moins de 800 pages résumant les différents aspects de sa vie privée : ses « likes » sur Facebook, ses photos postées sur Instagram, ses diplômes universitaires, mais aussi ies dates, lieux et contenus de ses conversations... Que pourrait-il se passer dans le cas oit
ces informations seraient divulguées ou revendues à une autre entreprise ?
<br>
> Ténroignage : elte réclarne ses données et reçoit". " 800 pages !
*D'après Libération*

Les **reseaux sociaux** peuvent repondre à un besoin de reconnaissance. Cela peut entrainer un **comportement addictif** dans leur usage, en multipliant les parutions ou autres activités (partage, like).

*C'est à partir de ce constat que Beomseok Yang, réalisateur sud-coréen, a décidé de produire un court-métrage montrant l'addiction aux réseaux sociaux. Notamment chez les jeunes.*

*La vidéo, intitulée "Social Network", nous permet de suivre la journée d'un jeune homme en mettant en avant toutes les interactions sociales qu'il a au cours de cette journée.*

<figure>
  <a href="https://youtu.be/QBHMO7PRqs0">
  <img src="../images/rs_video1.png">
  <figcaption>Are You Living an Insta Lie? Social Media Vs. Reality</figcaption></a>
</figure>

<figure>
  <a href="https://youtu.be/0EFHbruKEmw">
  <img src="../images/rs_video2.png">
  <figcaption>Are You Living an Insta Lie? Social Media Vs. Reality</figcaption></a>
</figure>

# Cyberviolence

> Avec Ies spécificités du numérique, on ajoute un impact plus conséquent aux violences. En effet, les contenus offensants peuvent se répandre très rapidement grâce aux reseaux qui accelerent et grandissent l'échelle des échanges. D'autre part, le caractere anonyme des echanges favorise le sentiment d'impunité. Une certaine distance s'installe et diminue la capacité d'empathie ou la conscience de ses actes
la conscience de ses actes.
Dans certains cas, il rend aussi difficile l'identification de l'auteur. Enfin, les cyberviolences n'ont pas de limite temporelle: elles laissent toujours une trace. Une fois diffusée sur la toile, on ne peux plus maitriser son cheminement.<br><i>d'après un document de SNT Nathan p76</i>

## Droit pénal
> Le fait de harceler une personne par des propos ou comportements répétés avantpour objet ou pour effet une dégradation de ses conditions de vie se traduisant par une altération de sa santé physique ou mentale est puni d'un an d'emprisonnement lorsque ces faits ont causé une incapacité totale de travai[ inférieure ou égale à huit jours. Ou et de 15 000 € d'amende si cela n'a entraîné aucune incapacité de travait.<br> Article 222-33-2-2 du code penal

<figure>

  <img src="../images/rs2.png">
 <figcaption>Typologie des Cyberviolences</figcaption>
</figure>

## Droit à l'oubli
grâce à l'arrêt de la Cour de justice de l'Union européeenne du 13 mai 2014, il est possible de réclamer le "droit à l'oubli". Pour l'appliquer, il faut demander au site d'origine de supprimer les information outrageuese et au moteur de recherche de ne plus les référencer.


# Modelisation d'un reseau social
## Graphe d'un reseau social
<figure>

  <img src="../images/rs8.png">

</figure>

**La distance** entre deux sommets d'un graphe est le nombre minimum d'arêtes pour aller du sommet à un autre. La distance entre a et f est 2.

**L'écartement d'un sommet** est la distance maximale existant entre ce sommet et les autres sommets du graphe. Pour le sommet a, la plus grande distance avec un autre sommet est 2. L'écartement est donc de 2.

**Le centre d'un graphe** est le sommet d'écartement minimal (le centre n'est pas nécessairement unique). Ci-contre, tous les sommets ont un écartement de 2, sauf d qui a un écartement de 1. Le centre est donc d.

**Le rayon d'un graphe** G est l'écartement d'un centre du graphe. Ici d est le centre et d a un écartement de 1. Donc le rayon est de 1

**Le diamètre** d'un graphe est la distance maximale entre deux sommets du graphe. Ici le diamètre est de 2.

> A vous de jouer. Pour simplifier, imaginons un réseau social ne possédant que 7 abonnés :

<figure>

  <img src="../images/rs9.png">

</figure>

1. Déterminez-le (ou les) centre(s) du graphe ci-contre.
2. En déduire le rayon du graphe.
3. Déterminer le diamètre du graphe.
4. Représenter les relations d'amitié dans un tableau

| L | M | N | O | P | Q | R |
| --- |--- | --- | --- | --- | --- | --- |
| M | |  |  |  |  |  |
| N | |  |  |  |  |  |
| O | |  |  |  |  |  |
| P | |  |  |  |  |  |
| Q | |  |  |  |  |  |
| R | |  |  |  |  |  |

Ce tableau, permet-il de repondre plus facilement aux 3 premieres questions?

## Experience de Milgram
> Milgram envoie soixante lettres à des recrues de la ville d'Omaha dans le Nebraska. Il leur demande de faire suivre cette lettre à un agent de change, vivant à une adresse fournie, dans la ville de Sharon dans le Massachusetts. Les participants pouvaient seulement passer les lettres, de main à main, à des connaissances personnelles qu'ils pensaient être capables d'atteindre l'objectif.

<figure>

  <img src="../images/rs10.gif">
<figcaption><a href="https://interstices.info/routage-dans-les-petits-mondes">Article interstices - Routage dans les petits mondes</a></figcaption>
</figure>

*Remarque*: Une des difficultés dans la conduite de ces études tient à la supposition que les gens dans la chaîne sont compétents pour découvrir le lien entre les deux personnes servant de terminaux. Ceci est plus evident avec des *communautés*, mais il n'est pas certain, au vu de son expérience que le monde lui-même suit un *petit monde*



`
## Une bulle d'informations
Sur le document suivant, on voit que les groupes communautaires peuvent avoir des liens fragiles entre-eux.

<figure>

  <img src="../images/rs7.png">

</figure>

> En 2015 à Bombey, en Inde, le gouvernement a interdit la consommation de viande. La situation a fait polemique dans le pays et notamment sur Twitter, où le hashtag `#BeefBar`a été largement repris.

> Sur le document suivant, on a colorié en vert et en rouge les tweets pour et contre l'interdiction de la consommation de viande. On constate un lien étroit entre les opinions et l'appartenance à une communauté.<br> extrait du livre Delagrave SNT p135.

<figure>

  <img src="../images/rs11.png">

</figure>

Les reseaux sociaux conduisent fréquemment à rester dans un "petit monde" où l'on est en relation avant tout avec des personnes qui nous ressemblent et pensent comme nous, au risuue d'un certain repli sur soi.

