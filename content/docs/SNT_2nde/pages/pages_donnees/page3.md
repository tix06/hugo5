---
Title: table
---
# Matchs de Football Nice - Marseille

<figure>
  <div>
  <img src="../images/ligue1.png">
</div>
</figure>



Le fichier suivant rescence tous les matchs de football de Ligue 1 depuis 2002.

Il s'agit d'un document tenu à jour sur le site *L'Equipe*.

Les fichier à télecharger: <a href="../datas/L1.xlsx" target="blank"><i>L1.xlsx</i></a> 

<a href="../datas/L1.xlsx" target="blank"><img src="/images/download.png"></a> 

Vous aurez besoin pour mener à bien ce travail pratique de revoir:

* les calculs avec un logiciel tableur: <a href="/docs/SNT_2nde/pages/pages_donnees/page1/#les-fonctions-de-calcul">TP Excel</a>
* les sommes conditionnelles: <a href="/docs/SNT_2nde/pages/pages_donnees/page1/#somme-conditionnelle-avec-plusieurs-critères-somme-si-ens">TP Excel</a>

## Comprendre les descripteurs du tableau
**1.** Noter sur la fiche reponse le nom de ces descripteurs

**2.** Ecrire la plage des cellules contenant des valeurs pour chacun de ces descripteurs, sous la forme `cellule depart : cellule arrivée`

Exemple : Les valeurs du descripteur *Ligue* sont sur la plage `A2:A7221`

**3.** Comment peut-on savoir, en lisant le tableau, quelle est l'équipe qui joue son match à domicile?

**4.** Retrouver, en parcourant le tableau, les dates des matchs Nice - Marseille (Nice reçoit à domicile) lors des saisons 2002-2003 et 2003-2004.<br>
Compter le nombre de victoires de Nice sur ces 2 matchs.

**5.** Compter le nombre de matchs Nice-Marseille:

* Utiliser la colonne de descripteur *equipe_domicile*. Utiliser une cellule à la suite du tableau, après la ligne 7221. Dans cette cellule, écrire `= NB.SI.ENS(`
* Avec l'outil d'aide ![](../images/nb_si_ens.png): compléter les champs pour faire la somme de tous les matchs tels que:
  * `equipe_domicile` = "Nice"
  * `equipe_exterieur` = "Marseille"

Ce qui signifie que vous devrez remplir:

  * Plage_critères1: F2:F7221
  * Critères1: "Nice"
  * ...

**6.** Calculer le score *moyen* entre ces 2 équipes.<br>
Pour faire ceci: 

* Utiliser la colonne de descripteur *score_domicile*. Utiliser une cellule à la suite du tableau, après la ligne 7221. Dans cette cellule, écrire `= SOMME.SI.ENS(`
* Avec l'outil d'aide ![](../images/somme_si_ens.png): compléter les champs pour faire la somme de tous les buts marqués par Nice lorsque l'équipe reçoit Marseille. C'est à dire, lorsque:

  * critère 1: `equipe_domicile` = "Nice"
  * critère 2: `equipe_exterieur` = "Marseille"
  * somme_plage: celle de `score_domicile`

* Faire de même pour les buts marqués par Marseille, en utilisant la colonne sous `score_exterieur`

* Enfin: sous le score moyen de Nice: écrire une formule qui calcule le nombre moyen de buts marqués par Nice
* Faire de même avec Marseille puis compléter le tableau des scores sur votre feuille de reponse.

<figure>
  <img src="../images/score.png">
</figure>


