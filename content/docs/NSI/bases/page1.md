---
Title : modele
---
# Structurer les données
**Exemple:**

Voici plusieurs informations: *M Dupont, un policier, uniforme noir et chapeau rond, Tintin.*

{{< img src="../images/dupont.png" >}}

Il peut exister une **relation** entre ces informations: Dupont a pour métier *policier* et c'est l'ami de *Tintin*.

Des relations de ce genre définissent des **structures**.

# Des problèmes de redondance

## Schéma relationnel

### Mauvais schéma

Avec un tableau simple, comme ceux manipulés par un tableur, on peut avoir la représentation suivante pour ce que l'on appelle une **relation**:

| **Titre** | **Annee** | **NomMES** | **PrenomMES** | **AnneeNaiss** |
|--- | --- |--- |--- | --- |
| Hana-bi | 1997 | Kitano | Takeshi | 1947 |
| Big fish | 2003 | Burton | Tim | 1958 |
| Edward aux mains d'argent | 1990 | Burton | Tim | 1958 |
| Sonatine | 1993 | Kitano | Takeshi | 1947 |
| Pulp Fiction | 1995 | Tarantino | Quentin | 1963 |
| Play Time | 1967 | Tati | Jacques | 1907 |
| Vertigo | 1958 | Hitchcock | Alfred | 1899 |
| Psychose | 1960 | Hitchcock | Alfred | 1899 |
| Parle avec elle | 2002 | Almodovar | Pedro | 1949 |
| Mon oncle | 1958 | Tati | Jacques | 1907 |
| Volver | 2006 | Almodovar | Pedro | 1949 |
|  Reservoir Dogs | 1992 | Tarantino | Quentin | 1963 |

Une **relation** est donc une table. Cette table possède un *en-tête*, constitué des attributs *Titre, Annee, NomMES, PrenomMES, AnneeNaiss*. La table contient des *n-uplets*, comme par exemple: *Hana-bi, 1997, Kitano, Takeshi, 1947*.

Cette table respecte 2 règles importantes pour la création d'une base de données:

* chaque entrée (n-uplet) du tableau renseigne bien tous les attributs, et respecte bien le *domaine* de cet attribut (voir plus loin).
* la table ne contient pas deux n-uplets identiques.

Celle-ci présente toutefois plusieurs problèmes de *redondance*, ce qui va entrainer des *anomalies*:

* **Anomalie d'insertion:** Rien n'empêche dans la gestion d'une table par un tableur de faire plusieurs entrées pour le même film. Il pourrait alors y avoir une répétition des données. A moins qu'il ne s'agisse de 2 films différents mais portant le même nom... 



{{< img src="../images/alive.png" caption="film Alive sur senscritique.com" >}}
Le site [senscritique.com](https://www.senscritique.com/liste/Ces_films_homonymes/1949422#page-1/) rescence plus de 240 films *homonymes*.

> **Question:** Que va t-il se passer si vous recherchez le nom du réalisateur d'un film qui comporte un homonyme dans la même table? Le nom retourné par la fonction `recherche` sera t-il assurement le bon?

* **Anomalie de modification:** La tenue d'une table de ce type peut entrainer des problèmes lors de la modification: Par exemple, la modification de l’année de naissance d’Hitchcock pour Vertigo et pas pour Psychose entraîne des informations incohérentes. Ou alors il faudrait modifier la table à plusieurs endroits, ce qui n'est pas réaliste si celle-ci est très grande...
* **Anomalie de suppression:** On ne peut pas supprimer un film sans supprimer son metteur en scène, ... et les informations sur celui-ci.

> La redondance d'informations dans une table va entrainer des anomalies d'insertion, de modification, et de suppression. Cela va entrainer un coût d'espace et des preformances moindres de la base de données.

* Mais alors, comment faire pour corriger ces problèmes? ... L'idée est de travailler avec 2 relations au lieu d'une seule et créer un *lien* entre ces 2 relations.



{{< img src="../images/split.png" caption="creation de 2 relations" >}}
### La bonne méthode
La base de données doit:

1. être capable de représenter individuellement les films et les réalisateurs, de manière à ce qu’une action sur l’un n’entraîne pas systématiquement une action sur l’autre,
2. définir une méthode d’identification d’un film ou d’un réalisateur, qui permette d’assurer que la même information est représentée une seule fois. On utilisera pour chaque table une **clé primaire**.
3. préserver le lien entre les films et les réalisateurs mais sans introduire de redondance.

Pour notre exemple, les deux tables s'appeleront *Films* et *Réalisateurs*.

Ensuite, il faudra décider si deux films différents peuvent avoir ou non le même titre. Nous déciderons que deux films NE peuvent PAS avoir le même nom, par contre, 2 réalisateurs le peuvent, comme vu sur la liste des réalisateurs: 



{{< img src="../images/rea.png" caption="cineclubdecaen.com" >}}
#### Première proposition
On sépare les données en 2 tables. On s'assure que l'une des colonnes fournit un identifiant unique.


*Films*

| **Titre** | Annee | **idMES** |
|--- | --- | --- |
| Hana-bi | 1997 |  |
| Big fish | 2003 |  |
| Edward aux mains d'argent | 1990 |  |
| Sonatine | 1993 |  |
| Pulp Fiction | 1995 |  |
| Play Time | 1967 |  |
| Vertigo | 1958 |  |
| Psychose | 1960 |  |
| Parle avec elle | 2002 |  |
| Mon oncle | 1958 |  |
| Volver | 2006 |  |
|  Reservoir Dogs | 1992 |  |


*Réalisateur:*

| **idMES** | NomMES | PrenomMES | AnneeNaiss |
| --- |--- | --- |--- |
| 1 | Kitano | Takeshi | 1947 |
| 2 | Burton | Tim | 1958 |
| 3 | Tarantino | Quentin | 1963 |
| 4 | Tati | Jacques | 1907 |
| 5 | Hitchcock | Alfred | 1899 |
| 6 | Almodovar | Pedro | 1949 |

<br>

> **A faire:** Compléter la première table avec les valeurs correspondantes pour *idMES*.

> Puis vérifier que la première colonne pour chacune de ces tables contient des valeurs qui sont toutes différentes. Pour la première table, l'attribut **idMES**, aurait-il pu consituer une *clé primaire*?

> Vérifier enfin que la base de données produite ne présente plus aucune des anomalies citées plus haut.

#### Deuxième proposition

*Films*

| **Titre** | Annee |
|--- | --- |
| Hana-bi | 1997 | 
| Big fish | 2003 | 
| Edward aux mains d'argent | 1990 | 
| Sonatine | 1993 | 
| Pulp Fiction | 1995 | 
| Play Time | 1967 | 
| Vertigo | 1958 | 
| Psychose | 1960 | 
| Parle avec elle | 2002 | 
| Mon oncle | 1958 | 
| Volver | 2006 | 
|  Reservoir Dogs | 1992 | 

*Réalisateur:*

| **idMES** | NomMES | PrenomMES | AnneeNaiss |
| --- |--- | --- |--- |
| 1 | Kitano | Takeshi | 1947 |
| 2 | Burton | Tim | 1958 |
| 3 | Tarantino | Quentin | 1963 |
| 4 | Tati | Jacques | 1907 |
| 5 | Hitchcock | Alfred | 1899 |
| 6 | Almodovar | Pedro | 1949 |

L'association entre ces 2 tables est assurée par une nouvelle table *FilmsRéalisés*:


*FilmsRéalisés* (à compléter)

| **Titre** | **idMES** |
|--- | --- |
| Hana-bi |  | 
| Big fish |  | 
| Edward aux mains d'argent |  | 
| Sonatine |  | 
| Pulp Fiction |  | 
| Play Time | | 
| Vertigo |  | 
| Psychose |  | 
| Parle avec elle |  | 
| Mon oncle |  | 
| Volver |  | 
|  Reservoir Dogs |  | 


Ces deux descriptions suivent le modèle *entité-association*. Mais la manière avec laquelle cette association est représentée est différente.

> **Question:** expliquer quelle est cette différence.

## Suite du cours

* retour sur la page [SGBD](/docs/NSI/bases/page3/)
* page suivante : [concevoir une base de données relationnelles](/docs/NSI/bases/page2/)

