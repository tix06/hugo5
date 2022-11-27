---
Title: Traitement csv
---

# Un exemple de données ouvertes
{{< img src="../images/page13/data.gouv.png" link="https://www.data.gouv.fr/fr/" caption="Plateforme ouverte des données publiques françaises" >}}
Le Répertoire National des Élus (RNE) a pour finalité le suivi des titulaires d’un mandat électoral. Il est renseigné et tenu à jour par les préfectures et hauts commissariats et par les services du ministère de l'intérieur, notamment sur la base des éléments fournis par les élus lors de la phase d’enregistrement des candidatures.

{{< img src="../images/page13/elus.png" caption="Données du RNE pour les conseillers municipaux - extrait en csv" >}}
Les données du RNE sont structurées par mandat. Neuf fichiers sont publiés ici :

1.{{< a link="https://www.data.gouv.fr/fr/datasets/r/d5f400de-ae3f-4966-8cb6-a85c70c6c24a" caption="les conseillers municipaux ;" >}}2. les conseillers communautaires ;
3. les conseillers départementaux ;
4. les conseillers régionaux ;
5. les membres des assemblées des collectivités à statut particulier ;
6. les représentants au Parlement européen ;
7. les sénateurs ;
8. les députés ;
9. les maires.


En [bas de page](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-elus-1/#community-reuses), vous pourrez observer les réutilisations de ces documents:

{{< img src="../images/page13/utilisation.png" link="https://www.spallian.com/2020/03/01/donnees-parite-aux-sein-des-conseils-municipaux/" caption="exemples de réutilisation des données ouvertes sur les elus municipaux" >}}
*Ouvrir les données jugées d'intérêt public, c'est encourager leur réutilisation par tout un chacun. Cela permet d'encourager la transparence démocratique, de bénéficier de services au quotidien ou de prendre des décisions plus éclairées.*

# Exploration et traitement de données 
Télécharger sur le site gouvernemental le fichier des élus municipaux `rne-cm.csv`
Ouvrir un nouveau notebook en local. Déplacer le fichier `rne-cm.csv` dans le même dossier que le notebook.

Lire et stocker le contenu du fichier dans une liste python que vous appelerez `table`. 

> On pourra s'aider de la page [Python > entrées / sorties](/docs/python/pages/ES/page1/#lire-écrire-dans-un-fichier) pour importer le fichier csv.

Explorer la liste table pour qu'elle affiche les informations suivantes:

```python
> len(table)
500100
```

```python
> table[1]
['32',
 'Gers',
 '',
 '',
 '32249',
 'Mauvezin',
 'MASAROTTI',
 'Sylvie',
 'F',
 ...
```

## Traitements
### Fonction recherche
Ecrire une fonction `recherche` qui *recherche* le premier élu dans un departement donné. La fonction *recherche* aura pour seul argument la variable textuelle `dpt` correspondant au departement recherché.

Cette fonction prend les éléments du tableau un par un, en commençant par le debut, et recherche la premiere occurence (le premier élu de ce departement).

Par exemple:

```python
> recherche('06')
363891
```

### Fonction pariteHF
Ecrire une fonction *pariteHF* qui compte le nombre d'élus Hommes et le nombre d'élues Femmes pour un departement donné. La fonction renvoie alors le couple de valeurs H/F.

Exemple:

```python
> score_M,score_F = pariteHF('34')
> score_M,score_F
(3143, 2646)
```

### Graphique
Représenter alors cette parité dans votre notebook sur un diagramme circulaire.

> On s'aidera du [lien suivant](https://python.doctor/page-creer-graphiques-scientifiques-python-apprendre) pour représenter des diagrammes avec *Matplolib*.

{{< img src="../images/page13/diagramme.png" caption="exemple de diagramme sur la proportion des élus H/F" >}}
