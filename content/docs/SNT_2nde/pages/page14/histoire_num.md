---
Title : codage
bookShowToc: false
---


# Civilisations anciennes
Le document suivant donne un aperçu des périodes d'existence d'anciennes civilisations. On pourra se référer à la page suivante pour plus de détails : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)

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
  ['Sumériens puis Babyloniens (Mésopotamie)', -3500, -550],
  ['Egyptiens', -3000, -550],
  ['Civilisations en Inde', -2500, -500],
  ['Période égéenne', -2000, -1200],
  ['Grèce antique et empire romain', -1200, 500],
  ['Chine ancienne', -2000, 500]

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

# La naissance du nombre

Dans les temps préhistoriques, les hommes ont eu besoin de recourir à une numération. Ils ont naturellement utilisé des artefacs pour compter (des objets, des os...). L'écriture n'existait pas. 

Pour certains peuple primitifs, la numération se limitait d'ailleurs à 3 : un, deux, trois, beaucoup... 

Au néolithique, la société devient sédentaire et se structure davantage. Alors l'homme éprouve un besoin plus urgent de dénombrer, et de calculer.

Au VII millénaire avant JC : des vestiges de jetons en pierre montrent l'activité de compter.

> Comment ça se passe en pratique, le dénombrement ?

Au quotidien, les hommes ont d'abord utilisé leurs doigts ou leur phalanges pour compter. Selon la méthode employée, ils ont alors compté en base 10 (10 doigts de la main), ou en base 20 (en incluant les doigts de pied), en base 12 (en utilisant les phalanges), ou en base 60.

Au IV millénaire avant JC : On trouve les plus anciennes traces de chiffres écrits (Mésopotamiens et Egyptiens).

> Comment ces chiffres constituent-ils des nombres ?

*Les systèmes de numération antiques variaient d'une aire culturelle à l'autre :*

Pour chacun des systèmes de numération, la valeur d'un nombre est égale à la somme des symboles qui le composent. Les Egyptiens, pour écrire le chiffre 7, répétaient le symbole de l'unité | sept fois par exemple ( ||||||| ).

Et lorsque ces symboles devaient être répétés dix fois, on remplaçait ces 10 symboles unitaires par un nouveau symbole correspondant à la dizaine. 

Il s'agit d'une numération en base 10 (numération décimale).

Un autre symbole correspond à la dizaine de dizaine, etc.

Toutes les civilisations n'ont pas adopté la numération décimale, ni les même symboles  pour compter : 

- Les Sumériens au proche-orient comptaient en base 60 (numération sexagésimale).
- La base 12 (système duodécimal) était connue et utilisée par certaines populations (Moyen-Orient, Roumanie, Égypte, etc.)
- En Eurasie, les peuples indo-européens utilisaient un système décimal mais avec des symboles alphabétiques.

> Comment additionne t-on deux nombres ?

Au départ, une opération aussi simple que l'addition demande de la mémoire, d'utiliser les doigts de la main, ou des artefacs (petits cailloux ou des petits jetons en argile) : jusqu'à 3300 ans avant JC, voire plus tard selon les civilisations.

Les Sumériens ont progressivement remplacé les petits objets en argile représentant les nombres par l'écriture sur des tablettes en argiles. Ils gravaient dessus avec un calame en roseau. Le comptage *matériel* est alors devenu un comptage *conceptuel*. Ainsi sont nés les plus vieux chiffres connus de l'histoire, et surtout, l'invention du ZERO. C'est justement le zero qui va faciliter les opérations arithmétiques, comme on va le voir plus loin.


> Comment est apparu le ZERO ?

Sans l'écriture du ZERO, l'usage des nombres ne permet pas de réaliser facilement des opérations. On ne peut pas facilement reporter des retenues depuis les unités vers les dizaines par exemple (base 10). L'invention du ZERO implique que l'écriture du nombre va suivre la règle de la position des symboles : les dizaines sont écrites avec un symbole mis à la position des *dizaines*, les unités sont écrites avec un symbole mis à la position des *unités*. Et lorsque le nombre par exemple ne comporte pas de dizaine, on met un ZERO à la position du chiffre des dizaines. 

Par exemple : pour écrire 307, un scribe *babylonien* écrit un 3, puis un signe représentant le zero à la place des dizaines, et enfin un 7 pour les unités. Ainsi, 307 et 37 ne s'écrivent pas de la même façon, et on ne les confond pas à la lecture. L'avantage de l'utilisation du zero est alors essentiellement dans le but d'utiliser les même chiffres pour représenter les unités, les dizaines, les centaines et autres. C'est la position du chiffre qui permet de savoir si celui-ci représente unité, dizaine ou centaine. C'est ce que l'on appelle la numération de POSITION.

Ce signe signifiant *RIEN*, et appelé le ZERO sera décisif pour l'apparition de la science du calcul, *l'arithmétique*.

Fondamentalement, ce sont les savants indiens qui vont faire évoluer le zéro vers le sens que nous lui reconnaissons aujourd'hui, à savoir d'un nombre entier non naturel, pair, ni premier, ni positif, ni négatif. 

<figure>
  <a href="https://youtu.be/kH3S8vIt-8g">
    <img src="../images/zero.png" width=350px alt="video Futura Sciences">
    <figcaption>video Futura Sciences : Les découvertes du zero</figcaption>
  </a>
</figure>

Au IXe siècle, les Arabes emprunteront aux Indiens le zéro, le mot sunya devenant sifr. Ce ne sera finalement qu'au XIIe siècle que le nombre arrivera en Occident, le mot devenant zefiro pour devenir zéro à la fin du XVe siècle.

# Epoque médievale

Le savoir circule à travers le monde, au rythme lent des voyageurs à pied ou à cheval, des mulets portant des malles de manuscrits, des bateaux à voile qui naviguent de l'Extrême-Orient à l'Egypte, de la Méditerranée à l'lslande.

Les chiffres dits arabo-indiens supplantent progressivement les chiffres romains. Plus que les chiffres eux-mêmes, c'est surtout la numérotation positionnelle qui va assurer leur succès: un chiffre qui peut représenter plusieurs valeurs, suivant sa position dans le nombre, simplifie les calculs et permet d'en aborder de plus difficiles. Le système actuel de numérotation, appelé système décimal de position, qui nous semble si naturel, est donc le résultat de plusieurs milliers d'années d'évolution, d'échanges et de réflexions.

# A quoi ça sert de calculer ?
Ou bien, en reformulant la question : 

> comment est venu le besoin d'automatiser le calcul ?

Au départ, les besoins scientifiques sont limitées à l'astronomie. Les mouvements des corps célestes pouvant seulement s'exprimer en termes mathématiques, on a utilisé les nombres pour décrire et prévoir les ephémérides. Cela a servi à reprérer le temps, pour la navigation, et également pour la divination.

Les progrès du calcul répondront ensuite principalement à des besoins pratiques: comptabilité, commerce, calculs d'intérêts sur les prêts, arpentage ou architecture. La géométrie, elle, progresse en relation avec l'architecture et la représentation graphique: I'invention de la perspective par des artistes italiens révolutionne la vision en Occident et marie les mathématiques avec la peinture, deux mille ans après la musique. A la même époque sont construites les premières horloges, donnant naissance du même coup à un nouveau rapport au temps et à une nouvelle industrie.

On va enfin remplacer la méthode de calcul utilisant le boulier, où les opérations et le report des retenues sont réalisés par un humain.

la mécanique de précision, créera les conditions de possibilité matérielle des futures machines à calculer.

# Informatique et numérique
Le numérique regroupe toutes les activités qui ont été modifiées par la *numérisation* : le calcul, la photographie numérique, la cartographie, les médias numériques, la communication, l'usage de machines à commande numérique...

Tous les objets ou outils dits numériques ont en commun de fonctionner avec de l'informatique, c'est à dire avec des machines qui exécutent des programmes pour traiter de l'information en suivant un algorithme.

Les données manipulées par une machine sont des nombres binaires. Pour toutes ses activités, la machine a besoin de calculer sur ces données.

# Liens

* les grandes civilisations anciennes et leur chronologie : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)
* La numération par civilisation :[https://fr.wikipedia.org/wiki/Catégorie:Numération_par_civilisation](https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Num%C3%A9ration_par_civilisation)