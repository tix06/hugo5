---
Title : HTML CSS les bases
---

# Les langages web
## des langages interprétés

## des tâches différentes
Les langages web se partagent les tâches : 
Une bonne pratique dans le développement d'un site internet (côté front-end, ce qui est executé sur la machine du client) consiste à utiliser HTML pour le contenu (avec un contenu correctement balisé, sémantique, accessible), CSS pour la mise en forme et la mise en page, et JavaScript pour gérer les interactions (qui peuvent éventuellement amener à modifier le contenu via les méthodes du DOM[^1]).

Le langage HTML est un langage constitué de *balises*, comme par exemple : 
`<title>le titre de ma page</title>` qui permet d'afficher le titre de la page dans l'onglet du navigateur.

Les éléments mis dans le programme à l'aide de ces balises vont permettre d'ajouter et structurer le contenu de la page : des titres de différents niveaux, du texte, des images, mais surtout, des hyperliens : 

* entre les pages du sites
* vers les pages de sites externes

Le *web*[^2] est justement basé sur l'utilisation de ces *hyperliens*, qui permettent de *naviguer* de pages en pages, sur internet[^3].

# Les balises HTML
## Deux balises pour tout écrire
On pourrait utiliser une ou deux balises uniques pour tous les usages, par exemple :

* la balise `DIV` pour des éléments qui devront s'afficher l'un **sous** l'autre.
* la balise `SPAN` pour des éléments qui devront s'afficher l'un **à côté** de l'autre.

Voici le code HTML utilisé : 

```html
<body>
<div class="main">
  <div class="titre">La bataille de Marignan</div>
    <div class="contenu">
      <div class="paragraphe">
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span class="lien" onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div class="paragraphe">
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>
</body>
```

* Résultat obtenu SANS aucune règle CSS : 
<div >
  <div>La bataille de Marignan</div>
    <div>
      <div>
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div>
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>

* Résultat obtenu AVEC les règles CSS : 

<style>
.cont{
  border:solid;
}
.titreDIV{
  font-size:1.5em;
  text-decoration: bold;
}

.paragraphe{
  margin:1.2em;
  text-indent:20px;
  text-align:justify;
}
.lien{
  color:blue;
  cursor: pointer;
}

</style>

<div class="cont">
  <div class="titreDIV">La bataille de Marignan</div>
    <div class="contenu">
      <div class="paragraphe">
        La bataille de Marignan (Marignano en Italie, aujourd’hui Melegnano, ville à 16 km au sud-est de Milan) eut lieu les 13 et 14 septembre 1515 et opposa le roi de France <span class="lien" onclick="window.location.href = 'https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)'">François Ier</span> et ses alliés vénitiens aux mercenaires suisses qui défendaient le duché de Milan.
      </div>
      <div class="paragraphe">
        Première victoire du jeune roi François Ier, acquise dès la première année de son règne, elle fit environ 16 000 morts en seize heures de combat.
      </div>
  </div>
</div>




[^1]: DOM : Document Object Model
[^2]: web : (www) world wide web : c'est la toile. On y *surfe*, c'est à dire que l'on va y chercher des ressources. C'est un service, comme il en existe d'autres (FTP, mail,...). C'est un système distribué qui opère au dessus d'internet.
[^3]: internet (Internet Network) est un réseau de réseaux, à l'echelle mondiale, qui interconnecte les ordinateurs et permet d'echanger des données. C'est système réparti (l'inverse de distribué) : un ensemble d'ordinateurs indépendants, présenté à l'utilisateur comme un système unique cohérent (un seul paradigme). Souvent une couche logicielle intermédiaire appelée middleware située au dessus du système d'exploitation est responsable de son implémentation. Un exemple est le web dans lequel toute information apparait comme un document. C'est dons un logiciel élaboré au dessus du réseau.