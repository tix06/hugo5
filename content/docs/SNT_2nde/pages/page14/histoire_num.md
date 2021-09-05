---
Title : codage
---


# Civilisations anciennes
Le document suivant donne un aperçu des périodes d'existence d'anciennes civilisations. On pourra se référer à la page suivante pour plus de détails : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)

L'apparition des grandes civilisations commence alors que le néolithique prend fin. C'est l'usage de la metallurgie qui aura pour conséquence de structurer davantage la société, avec l'usage d'armes en métal par des soldats spécialisés. La protection des richesses accumulées par les producteurs est confiée à des guerriers professionnels. La société se hiérarchise.

<div class="timeline">
<div class="grid">
  <div>-7000</div>
  <div>-6000</div>
  <div>-5000</div>
  <div>-4000</div>
  <div>-3000</div> 
  <div>-2000</div>
  <div>-1000</div>
  <div>0</div>
  <div>1000</div>
  <div>2000</div>
</div>
<div class="wrapper" id="wrapper"></div>
</div>

<script>
  let wrapper = document.getElementById('wrapper');
let data = [
  ['Néolithique', -7000,-3000],
  ['Sumériens puis Babyloniens (Mésopotamie)', -3500, -550],
  ['Egyptiens', -3000, -550],
  ['Civilisations anciennes en Inde', -1600, 1200],
  ['Période égéenne', -2000, -1200],
  ['Grèce antique et empire romain', -1200, 500],
  ['Chine ancienne', -2000, 500],
  ['numération indienne',400,500],
  ['numération indo-arabe',800,900],
  ['numération arabe adoptée en occident',900,1000],
  ['numération binaire',1700,1800]

];
data.sort((a, b) => {
  if (a[1] < b[1]) {
    return -1;
  } else if (a[1] > b[1]) {
    return 1;
  } else if (a[2] < b[2]) {
    return -1;
  } else if (a[2] > b[2]) {
    return 1;
  } else {
    return 0;
  }
});
for (let i = 0; i < data.length; i++) {
  let entry = data[i];
  let div = document.createElement('div');
  div.classList.add('entry');
  div.style.width = 2000*0.9/9000*(entry[2]-entry[1]) + 'px';
  //div.style.left = entry[1]*2 - 2000 + 'px';
  div.style.left = (entry[1] + 7000)*2000*0.9/9000 + 'px';
  div.style.top = 20 * i + 'px';
  div.innerHTML = entry[0];
  div.title = entry[0] + ' (' + entry[1] + '-' + entry[2] + ')';
  wrapper.appendChild(div);
}
</script>


<style>
  .grid {
  display:grid;
  grid-template-columns:repeat(10, 200px) 40px;
}
.grid > div {
  width:40px;
  box-sizing:border-box;
  /*border:1px solid green;*/*
  color:#303;
  background-color:#cfc;
  text-align:center;
}
.grid > div:last-child {
  width:40px;
}

.entry {
  position:absolute;
  box-sizing:border-box;
  height:20px;
  background-color:#201;
  border:1px solid black;
  color:white;
  white-space:nowrap;
  cursor:default;
}
.wrapper {
  position:relative;
  background-color:#804;
  height:400px;
  width:2040px;
}
</style>

<figure>
  <img src="../images/carte.png" alt="IREM Lille">
  <figcaption>Carte du monde. IREM Lille</figcaption>
</figure>

# La naissance de l'écriture... et du nombre

Dans les temps préhistoriques, les hommes ont eu besoin de recourir à une numération. Ils ont naturellement utilisé des artefacs pour compter (des objets, des os...). L'écriture n'existait pas. 

Le plus vieux vestige montrant cette activité date de 35 000 ans. Il s'agit d'un os qui a été utilisé comme baton de comptage. 

<figure>
  <a href="https://www.pourlascience.fr/sd/histoire-sciences/lafrique-berceau-des-mathematiques-5702.php">
  <img src="../images/baton.jpeg" width="300px" alt="baton de comptage">
  <figcaption>Le bâton d’Ishango (à gauche), exposé à l’Institut royal des sciences naturelles de Belgique</figcaption></a>
</figure>

*(source: PourlaScience.fr)*

Que comptaient-ils exactement avec ce baton? Les proies tuées, le nombre d'individus de leur clan, ..., il nous est impossible de le savoir.

Pour certains peuple primitifs, la numération se limitait d'ailleurs à 3 : un, deux, trois, beaucoup... 

Au néolithique, la société devient sédentaire et se structure davantage. Alors l'homme éprouve un besoin plus urgent de dénombrer, et de calculer.

A partir du VII millénaire avant JC : des vestiges de jetons en pierre montrent l'activité de compter. D'autres objets de comptage ont été utilisés, comme des petits jetons en argile (*calculis*) que l'on mettait dans une bourse:

Il s'agissait d'une sphère d'argile creuse dans laquelle on insérait des *calculis* et sur laquelle on marquait le contenu et qu'on signait avec un sceau-cylindre.

<figure>
    <img src="../images/calculis.jpeg">
    <figcaption>Bulle-enveloppe et ses jetons de comptabilité (Institute museum Chicago)</figcaption>
</figure>

## Comment ça se passe en pratique, le dénombrement ?

Au quotidien, les hommes ont d'abord utilisé leurs doigts ou leur phalanges pour compter. Selon la méthode employée, ils ont alors compté en base 10 (10 doigts de la main), ou en base 20 (en incluant les doigts de pied), en base 12 (en utilisant les phalanges), ou en base 60.

<figure>
    <img src="../images/duodecimal.png">
    <figcaption>systeme de numération duodecimal (base 12)</figcaption>
</figure>

*source: [wikipedia, systeme duodecimal](https://fr.wikipedia.org/wiki/Syst%C3%A8me_duod%C3%A9cimal)*

> Et l'écriture des chiffres ?

Au IV millénaire avant JC : On trouve les plus anciennes traces de chiffres écrits (Mésopotamiens[^1] et Egyptiens), gravés sur des supports en argile.

Les symboles que l'on peut observer sur la photographie suivante sont des formes de clous ou des barres verticales |, des chevrons <.

<figure>
  <img src="../images/tabletteArgile.png" width="300px" alt="tablette en argile. 3000 ajc">
  <figcaption>tablette en argile. 3000 ajc. Mésopotamie</figcaption>
</figure>

Les symboles des unités sont employés pour les chiffres de 1 à 9:

<figure>
  <img src="../images/unites_b.png">
</figure>

Ceux des dizaines: de 10 à 50 (1 à 5 dizaines):

<figure>
  <img src="../images/dizaines_b.png" width="300px">
</figure>

## Comment ces chiffres constituent-ils des nombres ?

*Les systèmes de numération antiques variaient d'une aire culturelle à l'autre :*

Pour chacun des systèmes de numération, la valeur d'un nombre est égale à la somme des symboles qui le composent. Ce sont des numérations dites **additives**. 

**Base 10:** **[Les Egyptiens](https://fr.wikipedia.org/wiki/Num%C3%A9ration_%C3%A9gyptienne)[^2]**, pour écrire le chiffre 7, répétaient le symbole de l'unité | sept fois par exemple ( ||||||| ). lorsque ces symboles devaient être répétés dix fois, on remplaçait ces 10 symboles unitaires par un nouveau symbole correspondant à la dizaine. 

Il s'agit d'une numération en base 10 (numération décimale), mais différente de la notre: Un autre symbole correspond à la dizaine de dizaine, etc.

<figure>
  <img src="../images/egyptien2.png" alt="tableau a remplir">
  <figcaption>symboles utilisés par les egyptiens, de 1 à 1 million</figcaption>
</figure>

> Comment les egyptiens écrivaient-ils le nombre 1637 ?

**Base 60:** Pour les **[Babylonniens](https://fr.wikipedia.org/wiki/Num%C3%A9ration_m%C3%A9sopotamienne)[^3]** cependant, cette numération ne permettait de compter que jusqu'à 59. Ils ont alors utilisé les mêmes chiffres pour dénombrer les **soixantaines**:

$$71 = 1 \times 60 + 11 \times 1$$

Ce qui s'écrira en notation babylonienne:

$$| ~ >|$$

> Comment les mésopotamiens écrivaient-ils le nombre 1637 ?

Toutes les civilisations n'ont pas adopté la numération décimale, ni les mêmes symboles  pour compter : 

- Les Sumériens au proche-orient comptaient en base 60 (numération sexagésimale).
- La base 12 (système duodécimal) était connue et utilisée par certaines populations (Moyen-Orient, Roumanie, Égypte, etc.)
- En Eurasie, les peuples indo-européens utilisaient un système décimal mais avec des symboles alphabétiques, notamment par les signes I, V, X, L, C, D et M, appelés chiffres romains: [voir article et exemples](https://fr.wikipedia.org/wiki/Num%C3%A9ration_romaine#Exemples)

<figure>
  <img src="../images/romain.png">
  <figcaption>symboles romains</figcaption>
</figure>









## Comment est apparu le ZERO ?

Les Sumériens ont progressivement remplacé les petits objets en argile représentant les nombres par l'écriture sur des tablettes en argiles. Ils gravaient dessus avec un calame en roseau. Le comptage *matériel* est alors devenu un comptage *conceptuel*. Ainsi sont nés les plus vieux chiffres connus de l'histoire, et surtout, l'invention du ZERO. 

Sans l'écriture du zero, il peut y avoir une confusion dans la lecture. Le nombre suivant, écrit en notation babylonienne :

$$| > |$$

Celui-ci peut ainsi signifier:

$$1 \times 60 + 11 \times 1 = 71$$

mais aussi, selon la position supposée de l'espacement:

$$11 \times 60 + 1 \times 1 = 661$$

ou encore:

$$11 \times 3600 + 0 \times 60 + 1 \times 1 = 39 601$$




L'invention du ZERO implique que l'écriture du nombre va suivre la règle de la **position** des symboles : les dizaines sont écrites avec un symbole mis à la position des *dizaines*, les unités sont écrites avec un symbole mis à la position des *unités*. Et lorsque le nombre par exemple ne comporte pas de dizaine, on met un ZERO à la position du chiffre des dizaines. 

C'est la position du chiffre qui permet de savoir si celui-ci représente unité, dizaine ou centaine. C'est ce que l'on appelle la **numération de POSITION**.



Ce signe signifiant *RIEN*, et appelé le ZERO sera décisif pour l'apparition de la science du calcul, *l'arithmétique*.

Sans l'écriture du ZERO, l'usage des nombres ne permet pas de réaliser facilement des opérations. On ne peut pas facilement reporter des retenues depuis les unités vers les dizaines par exemple (base 10). Le zero va faciliter les opérations arithmétiques.

Fondamentalement, ce sont les savants indiens qui vont faire évoluer le zéro vers le sens que nous lui reconnaissons aujourd'hui, à savoir d'un nombre entier non naturel, pair, ni premier, ni positif, ni négatif. 

<figure>
  <a href="https://youtu.be/kH3S8vIt-8g">
    <img src="../images/zero.png" width=350px alt="video Futura Sciences">
    <figcaption>video Futura Sciences : Les découvertes du zero</figcaption>
  </a>
</figure>



# Epoque médievale

Le savoir circule à travers le monde de l'Extrême-Orient à l'Egypte, de la Méditerranée à l'lslande.

Au IXe siècle, les Arabes emprunteront aux Indiens le zéro, le mot sunya devenant sifr. Ce ne sera finalement qu'au XIIe siècle que cette écriture arrivera en Occident, issue des « Ghubâr », les arabes occidentaux.

<figure>
  <img src="../images/indo-arabe.jpeg">
  <figcaption>origine des chiffres arabes et européens <a href="http://lechiffre.free.fr/chapter1/B-Naissance/titre1.html#cib5">(Source)</a></figcaption>
  </figure>

Les chiffres dits arabo-indiens remplacent progressivement les chiffres romains. La numérotation de **position** est bien plus efficace: un chiffre qui peut représenter plusieurs valeurs, suivant sa position dans le nombre, simplifie l'écriture. Et l'on va pouvoir **calculer** et aborder des problèmes mathématiques plus complexes. 

Le système actuel de numérotation, appelé système décimal de position, qui nous semble si naturel, est donc le résultat de plusieurs milliers d'années d'évolution, d'échanges et de réflexions.

# A quoi ça sert de calculer ?
Ou bien, en reformulant la question : 

> comment est venu le besoin d'automatiser le calcul ?

Au départ, les besoins scientifiques sont limitées à l'astronomie. Les mouvements des corps célestes pouvant seulement s'exprimer en termes mathématiques, on a utilisé les nombres pour décrire et prévoir les ephémérides. Cela a servi à repérer et mesurer le temps, le cycle des astres, utile pour la navigation, et également pour la divination.

Les progrès du calcul répondront ensuite principalement à des besoins pratiques: comptabilité, commerce, calculs d'intérêts sur les prêts, arpentage ou architecture. La géométrie, elle, progresse en relation avec l'architecture et la représentation graphique: I'invention de la perspective par des artistes italiens révolutionne la vision en Occident et marie les mathématiques avec la peinture. A la même époque sont construites les premières horloges, donnant naissance du même coup à un nouveau rapport au temps et à une nouvelle industrie.

On va enfin remplacer la méthode de calcul utilisant le boulier, où les opérations et le report des retenues sont réalisés par un humain, par une machine qui va automatiser les calculs.

la mécanique de précision, créera les conditions de possibilité matérielle des futures machines à calculer.

Au XX<sup>e</sup> siècle, la société vit une révolution numérique, où toutes les tâches que l'on parvient à numériser seront résolues par une machine.

# Informatique et numérique
Le numérique regroupe toutes les activités qui ont été modifiées par la *numérisation* : le calcul, la photographie numérique, la cartographie, les médias numériques, la communication, l'usage de machines à commande numérique...

Tous les objets ou outils dits numériques ont en commun de fonctionner avec de l'informatique, c'est à dire avec des machines qui exécutent des programmes pour traiter de l'information en suivant un algorithme.

Les données manipulées par une machine sont des nombres binaires. Pour toutes ses activités, la machine a besoin de calculer sur ces données.

# Liens

* Histoire illustrée de l'informatique, 2e Edition, EDP sciences
* Le livre des nombres, Hervé Lehning, Ed Flammarion
* les grandes civilisations anciennes et leur chronologie : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)
* La numération par civilisation :[https://fr.wikipedia.org/wiki/Catégorie:Numération_par_civilisation](https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Num%C3%A9ration_par_civilisation)
* site [maths-rometus.org](http://www.maths-rometus.org/mathematiques/maths-et-nombres/histoire-de-la-numeration.asp)



# Exercices 
## Numération Babylonienne
### La première représentation écrite des nombres
L'image suivante est le dessin d'une tablette sumérienne datant de 3 000 ans environ avant notre ère.

Cette tablette en argile indique le nombre d'animaux de chaque espèce possédés par un propriétaire de bétail. 

Les symboles des chiffres sont écrits à gauche. Il s'agit de dessins en forme de clou et de chevron. Il s'agit d'une numération en base 60. (les unités vont de 0 à 60, tout comme les *soixantaines*).

<figure>
  <img src="../images/tabletteBab.png" width="300px" alt="tablette Babylonienne">
</figure>

1. En vous aidant du documents suivant, traduire les inscriptions de la tablette sumérienne : compter le nombre d’animaux de chacune des espèces.
2. Combien de symboles différents utilisent les sumériens pour écrire les chiffres ? 
<figure>
  <img src="../images/base60.png" width="300px" alt="equivalence base 60 vers decimale">
  <figcaption>Equivalence entre la base 60 sumérienne et notre base décimale</figcaption>
</figure>
3. Ces symboles, sont-ils différents pour les unités, les soixantaines, et les soixantaines de soixantaines ? 
4. Expliquer en quoi on peut considérer que les sumériens utilisaient une numération de position ?

## Numération egyptienne
C’est une numération de type additif.

Les Égyptiens de l’Antiquité utilisaient des hiéroglyphes pour écrire leurs nombres. Ce système de hiéroglyphes est assez proche de notre système de numération décimale : chaque symbole possède une valeur (1,10,100,1 000...) et peut être écrit jusqu’à neuf fois.

1. En étudiant les trois exemples donnés ci-dessous, retrouver la valeur des sept hiéroglyphes utilisés. (voir images)
2. Comparer les numérations Babylonienne et Egyptienne : laquelle des deux est une numération de position ? Justifiez.

<figure>
  <img src="../images/egyptien1.png" alt="exemple de numeration egyptienne">
  <figcaption>exemples, numeration egyptienne</figcaption>
</figure>

<figure>
  <img src="../images/egyptien2.png" alt="tableau a remplir">
  <figcaption>tableau a remplir</figcaption>
</figure>

[^1]: Mésopotamiens : La civilisation babylonienne est héritière de Sumer, et elle s'est épanouie en Mésopotamie du Sud du début du IIe millénaire av. J.-C. jusqu'au début de notre ère. Elle est marquée par l'affirmation progressive, de la cité de Babylone, capitale de l'État qui connait son apogée à partir du VIe siècle av. J.-C. Cette cité prospère étend son influence du nord-est de la Syrie, au nord de l'Irak actuel, ainsi que les plaines plus au sud. Les milliers de tablettes cunéiformes découvertes sur les différents sites de Babylonie (Babylone, Ur, Uruk, Nippur, Sippar, etc.) ont permis de dresser le tableau d'une civilisation urbaine reposant sur une agriculture irriguée potentiellement très productive. [https://fr.wikipedia.org/wiki/Babylone](https://fr.wikipedia.org/wiki/Babylone)

[^2]: Numération egyptienne, [lien wikipedia](https://fr.wikipedia.org/wiki/Num%C3%A9ration_%C3%A9gyptienne)

[^3]: Numération babylonienne, [lien wikipedia](https://fr.wikipedia.org/wiki/Num%C3%A9ration_m%C3%A9sopotamienne)

