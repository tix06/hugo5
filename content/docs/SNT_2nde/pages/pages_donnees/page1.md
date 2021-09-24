---
Title: tableur
---

# Qu'est ce qu'un logiciel tableur
Un logiciel tableur permet de structurer et représenter les informations en tableau. On peut réaliser à l'aide de ce logiciel du tri, du filtrage, ou du calcul sur les données.

Il existe de nombreux logiciels tableurs, comme Excel (Microsoft Office), Calc (Open Office), Number (Apple), ...

On verra dans ce TP les opérations:

* de recopie des cases d'un tableau
* de filtrage
* de calcul sur les données

La première partie du TP utilise le fichier <a href="../datas/fruits.xlsx" target="blank"><i>fruits.xlsx</i></a> que vous devrez télécharger *(clic droit: Enregistrer sous)*. 

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

<!--
# La notion de variable
Dans le tableur, une cellule EST une variable.

On peut accéder à la valeur d'une cellule à partir de ses coordonnées. C'est equivalent au nom de la variable que l'on a vu pour le langage Python.

## Copie par valeur

> Testez vous-même:


> * Dans la case **jaune**, de coordonnée **H2**, vous allez copier-coller le contenu de la cellule **C5**: 
> 	* Faites un clic droit dans la cellule **C5**. Choisir *copier*
>	* Faites un clic droit dans le cellule **H2**. Choisir *collage special*, puis *valeur*.
* Modifier alors le mot écrit dans la case **C5**: Est-ce que cela modifie le contenu de la case **C5**?

## Copie par référence

> Testez vous-même:


> * Dans la case **rose**, de coordonnée **I2**, vous allez copier-coller la référence de la cellule **C5**: 
> 	* écrire `=` dans la cellule **I2**
>	* puis cliquer dans le cellule **C5**.  Valider (touche Entrer).
* Modifier alors le mot écrit dans la case **C5**: Est-ce que cela modifie le contenu de la case **C5**?

Que remarque t-on? 

*Cette fois, le contenu de la cellule se met automatiquement à jour: dès que l'on saisie et valide une entrée, toute la feuille est recalculée, et les cellules copiées par référence sont modifiées.*

-->
# Travailler sur une copie du tableau

## Copier le tableau par référence
> Dans une zone située sous le tableau original: 

> * faire un copier coller des **etiquettes** du tableau
* recopier une cellule: écrire l'opérateur `=` dans la premiere ligne, premiere colonne de ce nouveau tableau. 
* Puis cliquer dans la case correspondante du tableau d'origine. Que constatez vous? ... Vous venez de faire une copie de la VALEUR de la cellule d'origine.
* **étendre la formule** de la cellule: en largeur, puis en hauteur. (voir <a href="https://www.cours-gratuit.com/tutoriel-excel/tutoriel-excel-comment-etendre-une-formule#:~:text=Vous%20devez%20faire%20ce%20qui,en%20une%20croix%20noire%20%C3%A9paisse." target="blank">les explications sur cette page</a>)

<figure>
<div>
<img src = "../images/select.gif" >
<figcaption>faire une selection étendue</figcaption>
</div>
</figure>

Vous avez réalisé une copie de votre tableau original. Une modification de ce tableau entraine une modification du 2e tableau.

<figure>
<div>
<img src="../images/copie_tab.png">
<figcaption>Copie du tableau</figcaption>
</div>
</figure>

> Testez le vous même: Modifiez la valeur de la cellule en rouge du premier tableau. Vous devriez voir une modification sur le 2e tableau.

Annulez ensuite votre modification. (CTRL + z)


# Filtrer 
## Filtrer par critère simple
* Commencer par selectionner toutes les colonnes A, B, C, D, E dans laquelles se trouvent les données du tableau.

Dans le bandeau *Données*, choisir Filtrer (entonoir).

Devraient alors apparaitre des listes de choix au dessus des descripteurs du tableau. Pour filtrer selon l'un des descripteurs, cliquer sur l'une de ces listes de choix:

* Sur le filtre appliqué à la première colonne (étiquette: Région), choisir **Est**.

<figure>
<div>
<img src="../images/filtrer.png">
<figcaption>menu permettant la sélection par Région</figcaption>
</div>
</figure>

## Filtrer selon un 2e critère
* Sur le filtre appliqué à la troisième colonne (étiquette: Produits), choisir **Pommes**.

Vous devriez obtenir le tableau suivant:

<figure>
<div>
<img src="../images/tableau_tri.png">
<figcaption>exemple de tableau filtré par Région ET par Produit</figcaption>
</div>
</figure>



# Les fonctions de calcul
## Ajouter 2 variables
On souhaite calculer la somme des valeurs filtrées.

> Dans la case située sous la dernière ligne du tableau filtré, dans la colonne *Unités*: 

> * Cliquer dans la case.
* Ecrire `=`
* puis cliquer dans la case de la première valeur *Unités* (celle contenant 6380)
* écrire `+`
* et cliquer dans la seconde case contenant une valeur *Unités* (contient 4394)
* Valider (touche Entrer)

Vous devriez voir le résultat du calcul...

## Fonction Somme
Pour revenir au tableau initial, rappuyer sur Filtre dans le bandeau d'Excel.
<br>Cela retire tous les filtres.

> Dans le tableau d'origine: 

> * cliquer dans la cellule juste sous la dernière valeur de la colonne *Unités*. 
* Ecrire debut de la formule: `= SOMME(` 
* puis faire une **sélection étendue** de toutes les valeurs de la colonne. 
* Valider avec la touche *Entrer*

## Somme conditionnelle: SOMME.SI
La fonction SOMME.SI permet de sélectionner certaines cellules d'une selection étendue.

> On va s'aider du *concepteur de formule*:

* Cliquer dans la cellule dans laquelle vous souhaitez rentrer la formule, sous le tableau.
* écrire `= SOMME.SI(`

<figure>
<div>
<img src="../images/cadre_tab.png">
<figcaption></figcaption>
</div>
</figure>

> * cliquer sur le bouton *fx* de la barre de saisie.
* Aidez vous des champs suivants pour remplir les plages pour cette formule:
	* Plage: faire une selection étendue des valeurs de la colonne *Produits*
	* Critères: écrire "Pommes", ou bien cliquer sur le mot "Pommes" dans l'une des cellules du tableau (la *C24* dans cet exemple.
	* Somme_plage: selectionner toutes les valeurs numériques de la colonne *Unités*:

<figure>
<div>
<img src="../images/sommesi.png">
<figcaption>concepteur de formule pour SOMME.SI</figcaption>
</div>
</figure>

On a alors le nombre de Pommes vendues dans toute la France.

## Somme conditionnelle avec plusieurs critères: SOMME.SI.ENS
On souhaite maintenant evaluer le nombre total de *Pommes* vendues en Région *Est*. C'est une somme conditionnelle avec cette fois **2 critères**.



> * Commencez par écrire `= SOMME.SI.ENS(`
* cliquer sur le bouton *fx* de la barre de saisie.
* dans la case *somme_plage* (les valeurs numériques). Faire une selection étendue avec la colonne avec les valeurs numeriques.
* *plage 1* correspondant au premier critère. Ici, la plage de valeurs sous l'etiquette **Région**. 
* écrire le *critère*: `Est`
* La boite de dialogue affiche maintenant *plage 2* correspondant au 2e critère. Ici, la plage de valeurs sous l'etiquette **Produit**.
* puis ajouter `Pommes` et *terminer*

<figure>
<div>
<img src="../images/sommesiens.png">
<figcaption>selection des colonnes pour SOMME.SI.ENS</figcaption>
</div>
</figure>




# Prolongement
Le fichier suivant rescence tous les matchs de football de Ligue 1 depuis 2002.

Les fichier à télecharger: <a href="../datas/L1.xlsx" target="blank"><i>L1.xlsx</i></a> 

<a href="../datas/L1.xlsx" target="blank"><img src="/images/download.png"></a> 

> A l'aide des techniques vue plus haut, vous allez:

> * sélectionner tous les matchs Nice - Marseille (Nice reçoit à domicile)
* compter le nombre de victoires de Nice
* calculer le score *moyen* entre ces 2 équipes.





