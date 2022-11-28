---
Title: TP CSS
bookShowToc: false
---



# TP langage CSS 
## Présentation

La page est constituée de 3 container `div`. Chaque container contient un titre (bloc 1, bloc 2, bloc 3), ainsi que d'autres éléments. 

{{< img src="../images/csspage.png" caption="page avec les 3 blocs" >}}

On peut observer cela dans le script **HTML**. Les containers `div` sont les éléments *parents* de leur contenu (titre, paragraphe, image). *voir editeur ci-dessous*


{{< trinket 203576e986 >}}

# Travail

**1.** Commencez par ajouter le *style* pour les éléments `h2`. Dans la page *style.css*, ajouter la déclaration suivante:

```css
h2 {
  text-align: center;
  font-size: 18px;
  color: black;
}
```

> Comment ces règles ont-elles modifié les sous titres **h2**? 

Maintenant, nous allons modifier chaque container div, independemment. Pour faire cela, il faut utiliser un autre selecteur que `div`au debut de la déclaration, sinon c'est le style de TOUS les containers qui sera affecté. On ajoute alors à la balise `div` un attribut de classe. Par exemple, pour le bloc 1:

```html
<div class="bloc1">
```

Le selecteur va utiliser cet attribut de classe, mais cette fois, en ajoutant un point `.` devant.

**2.** Ajouter maintenant chacune des règles suivantes dans la propriété css `.bloc1`, entre les accolades `{` et `}`

```css
.bloc1 {
  border: 2px solid red;
  }
``` 

puis 

```css
background-color: #FFDDDD;
color: red;
margin: 5px;
```

> Quel est le rôle de chacune des règles sur la mise en forme de ce bloc 1?

**3.** Pour le bloc 2: Quelle sont les differences de mise en forme que vous observez avec le bloc 1? Quelles sont les ressemblances? 

**4.** Avec les consignes suivantes, essayez de reproduire la mise en forme du bloc 2, comme sur l'image. On s'aidera aussi des règles du bloc 1.

* la couleur de fond est exprimée par `#DDDDFF` en hexadecimal
* le texte et les bordures sont en bleu
* la marge interieure gauche est obtenue avec la propriété `padding-left`, qui prend une valeur en pixels (px) comme pour `margin`
* pour centrer tout le contenu d'un container, il faut appliquer la règle:  `text-align:center;` Ajouter cette règle à la propriété 

```css
.imagecentree {

 }
```

**5.** Pour le bloc 3: les éléments paragraphe et image doivent être côte à côte. Il faut changer leur disposition naturelle. Pour faire cela:

* Pour l'élément qui va se placer à gauche:

```css
.colonneG{
  display: inline-block;
  /*width: 200px;*/
}
```
* Pour l'élément qui va se placer à droite:

```css
.colonneD{
   float:right;
}
```

**6.** A partir de vos *nouvelles* connaissances, essayer de reproduire la mise en forme suivante pour les bloc 3:

{{< img src="../images/cssbloc3.png" caption="Le bloc 3: le paragraphe et l'image sont maintenant côte à côte" >}}


> Comment avez vous déplacé l'image à gauche du paragraphe? Comment lui avez vous appliqué un style (bordures, couleur de fond...)?


# Liens
Revenir au cours [introdution au langage CSS](/docs/SNT_2nde/pages/page4/web5/)
