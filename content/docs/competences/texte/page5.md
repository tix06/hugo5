---
Title: de Writer a HTML
---

# Partie 2: Rédiger un document pour le Web
## Le HTML : Structurer le document
Un document pour le Web est constitué d’un ou plusieurs fichiers de type texte, avec un format qui précise le contenu (en langage HTML), et le style (en langage CSS). Il est prévu pour être ouvert avec un **navigateur**.

La manière avec laquelle vous allez construire ce document suit les même étapes que la rédaction d’un document textuel. Mais ici, les instructions de **mise en page** seront ajoutées au **contenu**, dans le même fichier. Ce fichier aura pour extension **.html**

Le HTML s'occupe de la **structure du document**, grâce à des **balises** qui intègrent le **contenu**.

## Format de document
Le contenu doit être mis dans un document avec l'extension `.html`.

> **A vous de jouer:** Télecharger et ouvrir le document textuel sur {{< a link="/pdf/competences/plastiques.txt" caption="les plastiques" >}} avec le logiciel *Writer*. Copiez l'ensemble du texte (CTRL + a, CTRL + c)

> **Dans un editeur de texte**: Rechercher parmi les logiciels installés: **Bloc notes, Notepad**, ou mieux, **Notepad++** (ajoute la coloration syntaxique): coller le texte. Sauvegarder dans vos *Documents* avec le nom `plastiques.html`

> **Ouvrir à l'aide d'un navigateur**: Double clic sur le document depuis l'*explorateur windows*, ou bien, depuis le menu fichier du *navigateur*: `Ouvrir..` et rechercher le document.

**Problèmes:** On obtient alors un document qui n'a aucune structure, et où certains caractères ne sont pas reconnus...

{{< img src="../images/html3.png" caption="fichier texte non formaté ouvert avec un navigateur" >}}

On va résoudre certains de ces problèmes en déclarant le format d'encodage des caractères. Cette information est très importante pour le navigateur.

> **Au début du document `html`**: Ajouter avec l'editeur les lignes suivantes:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>page principale</title>
</head>
<body>

Le plastique, une « antiquité » !
Plusieurs siècles av. J.C, les hommes utilisaient déjà ...
```

* Ajouter aussi les lignes suivantes en FIN de document:

```html
</body>
</html>
```

> **Navigateur:** Recharger la page (CTRL + r). Que remarquez vous?


## Définir des éléments dans la page
Pour créer un paragraphe, le contenu devra être inséré entre une balise de début `<p>` et une balise de fin `</p>`.

Les autres balises principales sont:

* Titre 1: `<h1> ... </h1>`
* Titre 2: `<h2> ... </h2>`
* Titre 3: `<h3> ... </h3>`
* Bloc de citation: `<blockquote> ... </blockquote>`
* liens: `<a> ... </a>`

Où les `...` signifient le contenu.






> **Balises HTML**: modifier la structure du document à l'aide des balises HTML: 

### 1. ajouter la balise `h1` pour le titre principal

{{< img src="../images/html1.png" caption="" >}}

### 2. ajouter les balises `h2` pour les titres des chapitres

{{< img src="../images/html2.png" caption="" >}}

### 3. ajouter les balises `p` pour les paragraphes

### 4. ajouter les balises `a` pour les liens: Le lien se trouve en fin de document dans cet exemple. 
Il s'agit du texte: `Article issu de la page histoire du plastique de cabriolice.com https://www.carbiolice.com/blog/lhistoire-du-plastique-en-15-dates-cle/`

* Identifier l'URL de redirection (l'adresse du lien): `https:/ ... dates-cle/`
* Identifier la cible du lien (le mot sur lequel vous devez cliquer): *histoire du plastique*
* Remplacer le texte non formaté par le mélange de texte et de balises suivant:

`Article issu de la page <a href="https://www.carbiolice.com/blog/lhistoire-du-plastique-en-15-dates-cle/">histoire du plastique</a> de cabriolice.com`

> **Questions**: Dans les instructions de la balise `<a>`:
* où se place la cible du lien?
* où se place l'adresse du lien?

### 5. Ajouter un autre lien
Placer après cette dernière ligne un autre lien, vers la page de wikipedia sur les matières plastiques par exemple.



> **Navigateur:** Recharger la page (CTRL + r). Que remarquez vous? Les liens sont-ils actifs lorsque l'on clique dessus?

## *Facultatif*: Ajouter une image
L'ajout d'image diffère de la procédure d'un logiciel d'edition de texte comme *Word* ou *Writer*. Ici, on n'insère pas l'image elle-même, mais on indique son adresse sur le net. La syntaxe est la suivante:

```html
<img src="https://adresse_sur_le_net.jpg">
```

On choisira une image libre d'être diffusée, comme par exemple celle sur le site *wikipedia* d'adresse:

```
https://upload.wikimedia.org/wikipedia/commons/8/80/Compounding.png
```



Faites référence à l'auteur de l'image si vous l'identifiez, ou bien la page dont est issue l'image, à l'aide d'un élément `html` qui suivra l'image. On peut utiliser une balise `<caption> ... légende ... </caption>`.

{{< img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Compounding.png" caption="production de granulés de polymères - image de la page *Matières plastiques* (wikipedia)" >}}

# Modifier les styles des éléments
Les instructions de style se mettent entre les balises `<style>`. Ces balises seront placées après la fermeture `</head>` et avant l'ouverture du contenu `<body>`

```html
</head>

<style>
  instructions de style en langage css
</style>

<body>
.. contenu ..
``` 

Les instructions de style, en langage CSS, vont déclarer:

* l'élément HTML auquel on fait référence (un selecteur p, h1, ...)
* la propriété que l'on veut styliser
* la valeur que l'on veut mettre pour cette propriété

Suivre le tutoriel à la page [developper.mozilla](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics) sur le CSS niveau débutant.

Vous pouvez tester les effets de certaines de ces instructions en les plaçant entre les balises `<style>` de votre document. Par exemple:

```html
<style>
h1 {
  font-size: 60px;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
</style>
