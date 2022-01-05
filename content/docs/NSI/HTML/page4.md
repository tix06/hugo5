---
Title : Formulaires
bookShowToc: false
---


# TP creation d'un mini site Web
Au cours de cette séance, vous allez créer 3 pages Web, formant un mini site Web. 

Commencez par créer un dossier dans vos *Documents* appelé *siteWeb*.<br>
Créez également 2 sous dossiers, *images* et *static*.<br>
A l'aide d'un editeur de texte, comme VisualCode ou bien Notepad++, créez 3 fichiers: page1.html, page2.html, page3.html, que vous mettrez à la racine de votre projet.

Voici l'arborescence des fichiers proposée pour ce projet, dans ce dossier *siteWeb*:


```
|- page1.html
|- page2.html
|- page3.html   
|- static/
     |- style.css
     |- xxx.png
```


Ces pages, page1.html, page2.html, et page3.html devront posséder chacune des **liens de navigation** vers l'ensemble des pages du site. 

Il est souhaitable que ces liens se situent dans le bandeau de navigation, comme sur l'exemple traité sur la page: [CSS positionnement et display](/docs/NSI/CSS/page2/)

Par exemple, pour la page 1:

<figure>
  <img src="../images/form.png">
  <figcaption>Exemple de page avec formulaire</figcaption>
</figure>

Commencer par intégrer le squelette HTML pour chacune des pages comme vu en cours: <a href="/docs/NSI/HTML/page3/#le-html-et-la-page-web">Lien</a>

# Page avec formulaire
Pour la mise en forme de la page, il est fortement suggéré de lire:

* la page sur le `display` des éléments HTML: [CSS positionnement et display](/docs/NSI/CSS/page2/)
* la page sur les *bonnes pratiques* à propos de l'usage des *labels*: [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label)

Un formulaire peut posséder plusieurs éléments comme: 

* des éléments `input` de type `text`
* des éléments `input` de type `radio`
* des éléments `input` de type `button`
* des `textarea`

La liste complète, ainsi que quelques exemples sont donnés à la page: [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)


# Page thématique
Vous aimez le vélo? Et bien présentez votre passion dans cette page thématique.

Cette 2<sup>e</sup> page appelée `velo.html` présentera un court texte, et une image libre de droit, comme par exemple: [https://pixabay.com/fr/photos/vélo-enfants-graffiti-art-3045580/](https://pixabay.com/fr/photos/vélo-enfants-graffiti-art-3045580/)

Pour respecter les droits d'auteur, vous pouvez ajouter un lien vers la page de l'auteur de l'image lorsque l'on clique sur l'image.

Le court texte peut être celui du Poëme de Ernest Pérochon:

```
Si j'avais une bicyclette,
J'irais dès le soleil levant,
Par les routes blanches et nettes
J'irais plus vite que le vent.

Si j'avais une automobile
Je roulerais au clair matin,
Je roulerais de ville en ville
Jusqu'aux murailles de Pékin.
``` 
*Connseil: Utiliser la balise `<pre>` pour conserver les retours à la ligne du poëme.*
  
Vous pourrez également ajouter un lien textuel vers la biographie de l'auteur.

# Autre page
Vous avez tout loisir pour le contenu de la 3<sup>e</sup> page du site.




