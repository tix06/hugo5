---
Title: tableur et format des données
---

# Format des données
Les **données structurées** sont stockées dans des **fichiers** contenant des caractères. Ces fichiers peuvent être utilisés par plusieurs logiciels (**interopérabilité**), à condition que les données y soient mises dans un le bon **format**.

Nous allons voir ici l'un de ces formats: Le **csv**, ou *comma separated values*.

Voici un exemple de données en format *csv*. Il s'agit d'informations sur les vendeurs de fruits d'une compagnie, sur le territoire français.

```
;;;;;
;;;;;
Région;Commercial;Produit;Unités;;
Est;Maurice;Pommes;6380;;
Ouest;Alain;Raisins;5619;;
Nord;Ariane;Poires;4565;;
Sud;Marie;Bananes;5323;;
Est;Claude;Pommes;4394;;
Ouest;Noël;Raisins;7195;;
Nord;Jérôme;Poires;5231;;
Sud;Sébastien;Bananes;2427;;
Est;Maurice;Bananes;4213;;
Ouest;Alain;Poires;3239;;
Nord;Ariane;Raisins;6420;;
Sud;Marie;Pommes;1310;;
Est;Claude;Bananes;6274;;
Ouest;Noël;Poires;4894;;
Nord;Jérome;Raisins;7580;;
```

> Copiez ces données et collez les dans un fichier à l'aide du *bloc notes* (du menu Programmes > accessoires de l'ordinateur).

> Sauvegardez le fichier dans *vos documents* en écrivant entre guillemets le nom du fichier `"fruits.csv"`
Les guillemets vous permettent de choisir l'extension du fichier et de remplacer celle par defaut choisie par le bloc note (`.txt`).

**Question a:** A partir de vos connaissances, ou bien après une petite recherche sur le *net*, que contient un fichier `.txt`? Les données y-sont-elles mises dans un format special (structuré)? 

**Question b:** Même question, mais cette fois pour les fichiers `.csv`. Précisez, pour les données de votre fichier *fuits.csv*, si les données sont séparées, et si oui, quel est le caractère séparateur?

# Présenter les données à l'aide d'un tableur
> Démarrer le logiciel Excel (un tableur de la suite bureautique microsoft). Puis ouvrir le fichier *fruits.csv*.

A l'ouverture, il vous sera demandé de préciser le format des données.

{{< img src="../images/excel_import1.png" caption="le format n'a pas été correctement renseigné" >}}

{{< img src="../images/excel_import2.png" caption="le format a été correctement renseigné" >}}

Le logiciel Excel sert à PRESENTER les données. C'est à dire à reconstruire le tableau. Le visuel peut être important pour lire les informations contenues. Modifier les propriétés des éléments du tableau (lignes, colonnes, cellules, texte) pour copier celui présenté ci-dessous:



{{< img src="../images/tableau_orig_2.png" caption="exemple de présentation structurée des données en tableau" >}}

**Question c:** Quelles sont les **propriétés** que vous avez modifiées? (le nom des boutons que vous avez utilisés, comme par exemple *couleur de fond*)

Maintenant que la présentation est satisfaisante, ajoutez l'information suivante, en renseigant certaines valeurs dans le tableau:

> *le commercial Sébastien a vendu 9814 Pommes dans la région Sud*

**Question d:** Quelle est la réference (la coordonnée) de la case dans laquelle vous avez renseigné *9814*? 

# Rechercher et Filtrer 
## Rechercher
Souvent, les tables contiennent de très nombreuses lignes, et ne peuvent pas toutes être présentées à l'écran. Il faut alors utiliser la fonction de recherche (bouton LOUPE à droite). 

> Utiliser le bouton pour *rechercher* le nom **Alain**. Cliquer sur *Suivant*. 

**Question e:** Quelles sont les réferences des cases qui sont sélectionnés lorsque l'on clique plusieurs fois sur *Suivant*?

## Filtrer par critère simple
* Commencer par selectionner toutes les colonnes A, B, C, D, E dans laquelles se trouvent les données du tableau.

{{< img src="../images/excel1.png" >}}
Dans le bandeau *Données*, choisir Filtrer (entonoir).

Il apparait alors des listes de choix au dessus des descripteurs du tableau. Pour filtrer selon l'un des descripteurs, cliquer sur l'une de ces listes de choix:

{{< img src="../images/excel2.png" >}}
* Sur le filtre appliqué à la première colonne (étiquette: Région), choisir **Est**.

{{< img src="../images/filtrer.png" caption="menu permettant la sélection par Région" >}}
## Filtrer selon un 2e critère
* Sur le filtre appliqué à la troisième colonne (étiquette: Produits), choisir **Pommes**.

Vous devriez obtenir un tableau ressemblant à celui-ci, mais avec plus de lignes:

{{< img src="../images/tableau_tri_2.png" caption="exemple de tableau filtré par Région ET par Produit (n'affiche que la 1ere ligne)" >}}

**Question f:** Combien de lignes sont affichées dans ce tableau filtré?

# Les fonctions de calcul

## Somme de toutes les valeurs de la colonne *Unités*
Pour revenir au tableau initial, rappuyer sur Filtre dans le bandeau d'Excel.

Cela retire tous les filtres.

> Dans le tableau d'origine: 

> * cliquer dans la cellule juste sous la dernière valeur de la colonne *Unités*. 
* Ecrire debut de la formule: `= SOMME(` 
* puis faire une **sélection étendue** de toutes les valeurs de la colonne. 
* Valider avec la touche *Entrer*

**Question g:** Quel est le resultat du calcul?

**Question h:** Cliquer dans la case. Recopier la formule du calcul généré par le logiciel.

# Conclusion
Un logiciel tableur (Excel, Calc, Number) permet de présenter les données à l'utilisateur en tableau, mais apporte aussi des fonctions de traitement. Ce sont les mêmes fonctions que l'on peut programmer avec un langage de traitement sur une Base de Données (SQL).

**Question i:** Quelles sont les fonctions de traitement que vous avez utilisées lors de ce TP? Donner leur nom.

# Document
Fiche reponse à {{< a link="/pdf/SNT/C21_TP_Excel.pdf" caption="télecharger / remplir" >}}



