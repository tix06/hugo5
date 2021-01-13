---
Title: tableur
---

# Qu'est ce qu'un logiciel tableur
Un logiciel tableur permet de structurer et représenter les informations en tableau. On peut réaliser à l'aide de ce logiciel du tri, du filtrage, ou du calcul sur les données.

Il existe de nombreux logiciels tableurs, comme Excel (Microsoft Office), Calc (Open Office), Number (Apple), ...

La première partie du TP utilise le fichier <a href="../datas/fruits.xlsx" target="blank"><i>fruits.xlsx</i></a> que vous devrez télécharger. 

<a href="../datas/fruits.xlsx" target="blank"><img src="/images/download.png"></a> 

Puis vous réaliserez ce *premier travail*:

<figure>
<div>
<img src="../images/tableau_orig.png">
<figcaption>exemple de présentation structurée des données en tableau</figcaption>
</div>
</figure>

> Testez vous-même:

> * Ouvrir Excel
* Ouvrir avec Excel le fichier *fruits.xlsx*
* Ajouter les informations suivantes dans le tableau: *le commercial Sébastien a vendu 9814 Pommes dans la région Sud*.

# Les fonctions de tri
## La notion de variable
Dans le tableur, une cellule EST une variable.

On peut accéder à la valeur d'une cellule à partir de ses coordonnées. C'est equivalent au nom de la variable que l'on a vu pour le langage Python.

### Copie par valeur

> Testez vous-même:


> * Dans la case **jaune**, de coordonnée **H2**, vous allez copier-coller le contenu de la cellule **C5**: 
> 	* Faites un clic droit dans la cellule **C5**. Choisir *copier*
>	* Faites un clic droit dans le cellule **H2**. Choisir *collage special*, puis *valeur*.
* Modifier alors le mot écrit dans la case **C5**: Est-ce que cela modifie le contenu de la case **C5**?

### Copie par référence

> Testez vous-même:


> * Dans la case **rose**, de coordonnée **I2**, vous allez copier-coller la référence de la cellule **C5**: 
> 	* écrire `=` dans la cellule **I2**
>	* puis cliquer dans le cellule **C5**.  Valider (touche Entrer).
* Modifier alors le mot écrit dans la case **C5**: Est-ce que cela modifie le contenu de la case **C5**?

Que remarque t-on? 

*Cette fois, le contenu de la cellule se met automatiquement à jour: dès que l'on saisie et valide une entrée, toute la feuille est recalculée, et les cellules copiées par référence sont modifiées.*


## Filtrer

### Recopier le tableau
> Dans une zone située sous le tableau original: 

> * faire un copier coller des **etiquettes** du tableau
* recopier une cellule: écrire le signe ``=` dans la premiere ligne, et la premiere colonne de ce nouveau tableau. 
* Puis cliquer dans la case correspondante du tableau d'origine. Que constatez vous? ... Vous venez de faire une copie de la VALEUR de la cellule d'origine.
* **étendre la formule** de la cellule: en largeur, puis en hauteur. (voir <a href="https://www.cours-gratuit.com/tutoriel-excel/tutoriel-excel-comment-etendre-une-formule#:~:text=Vous%20devez%20faire%20ce%20qui,en%20une%20croix%20noire%20%C3%A9paisse." target="blank">l'image suivante</a>)



Vous avez réalisé une copie de votre tableau original. Une modification de ce tableau entraine une modification du 2e tableau.


### Filtrer par critère simple
Dans le bandeau *Données*, choisir Filtrer (entonoir).

* Sur le filtre appliqué à la première colonne (étiquette: Région), choisir **Est**.

<figure>
<div>
<img src="../images/filtrer.png">
<figcaption>menu permettant la sélection par Région</figcaption>
</div>
</figure>

* Sur le filtre appliqué à la troisième colonne (étiquette: Produits), choisir **Pomme**.

Vous devriez obtenir le tableau suivant:

<figure>
<div>
<img src="../images/tableau_tri.png">
<figcaption>exemple de tableau filtré par Région et par Produit</figcaption>
</div>
</figure>

# Les fonctions de calcul
## Ajouter 2 variables
On souhate calculer la somme des valeurs filtrées.

> Dans la case située sous la dernière ligne du tableau filtré, dans la colonne *Unités*: 

> * Cliquer dans la case.
* Ecrire `=`
* puis cliquer dans la case de la première valeur *Unités* (celle contenant 6380)
* écrire `+`
* et cliquer dans la seconde case contenant une valeur *Unités* (contient 4394)
* Valider (touche Entrer)

Vous devriez voir le résultat du calcul...

## Fonction Somme

> Dans le tableau d'origine: 

> * cliquer dans la cellule juste sous la dernière valeur de la colonne *Unités*. 
* Ecrire les caractères: `= SOMME` 
* puis faire une sélection étendue de toutes les valeurs de la colonne. 
* Valider avec la touche *Entrer*

## Somme conditionnelle: SOMME.SI
La fonction SOMME.SI permet de sélectionner certaines cellules d'une selection étendue.

> On va s'aider du concepteur de formule:

> * Cliquer sur le bouton *Filtre* pour enlever les filtres.
* Cliquer dans la cellule dans laquelle vous souhaitez rentrer la formule, sous le tableau.
* écrire `= SOMME.SI`

<figure>
<div>
<img src="../images/cadre_tab.png">
<figcaption></figcaption>
</div>
</figure>

> * cliquer sur le bouton *fx* de la barre de saisie.
* Aidez vous des champs suivants pour remplir les plages pour cette formule:
	* Plage: faire une selection étendue des valeurs de la colonne *Produits*
	* Critères: écrire "Pommes", ou bien cliquer sur le mot "Pomme" dans l'une des cellules du tableau (la *C24* dans cet exemple.
	* Somme_plage: selectionner toutes les valeurs numériques de la colonne *Unités*:

<figure>
<div>
<img src="../images/sommesi.png">
<figcaption>concepteur de formule pour SOMME.SI</figcaption>
</div>
</figure>

On a alors le nombre de Pommes vendues dans toute la France.

## Somme conditionnelle avec plusieurs critères: SOMME.SI.ENS
On souhaite maintenant evaluer le nombre total de Pommes vendues en Région Est. C'est une somme conditionnelle avec 2 critères.

> Cette fois, vous allez écrire directement la formule dans la cellule:

> * Commencez par écrire `= SOMME.SI.ENS(`
* faire une selection étendue sur toute la plage de somme (les valeurs numériques. Ajouter à la fin `;` comme séparateur.
* faire une selection étendue sur toute la plage correspondant au premier critère. Ici, la plage de valeurs sous l'etiquette **Région**. Puis `;`
* écrire le critère: `Est`
* faire une selection étendue sur toute la plage correspondant au 2e critère. Ici, la plage de valeurs sous l'etiquette **Produit**. Puis `;`
* puis ajouter `Pommes` et terminer par `)`

# Prolongement
Le fichier suivant rescence tous les matchs de football de Ligue 1 depuis 2002.

Les fichier à télecharger: <a href="../datas/L1.ods" target="blank"><i>L1.ods</i></a> 

<a href="../datas/L1.ods" target="blank"><img src="/images/download.png"></a> 

> A l'aide des techniques vue plus haut, vous allez:

> * sélectionner tous les matchs Nice - Marseille (Nice reçoit à domicile)
* compter le nombre de victoires de Nice
* calculer le score *moyen* entre ces 2 équipes.





