connecté au **github hugo5**

# Pour la barre de menus laterale
tout est paramétré dans theme/book

# Ajouter une ligne de navigation dans la baniere

Il faut encore ajouter les liens de nav des autres classes puis les rubriques

Et enfin : 
A mettre dans Partial>Doc>Inject>head.html

```javascript
<script>
let chemin = window.location.pathname;
if (chemin.search('NSI')>-1) {
baniere=document.querySelector("#myHeader");

// debut creation du lien de navigation
let linkBox = document.createElement('div');
linkBox.classList.add('linkBox');
let newH = document.createElement('a');
newH.innerHTML='<a href="/docs/NSI/NSI_index/index.html">NSI</a>';
// ajouter ici une ou plusieurs classes à newH
newH.classList.add('nsi');

linkBox.appendChild(newH);
baniere.appendChild(linkBox); // le lien s'ajoute à la baniere
}
</script>

<style>

  .linkBox{
    background-color: pink;
  }
  .isn{
    display: inline-block;
    
  }
</style>
```


puis on peut retirer tous les liens de nav : 
```
let link = baniere.querySelectorAll("h2")

for(i=0;i<link.length;i++){
    link[i].parentNode.removeChild(link[i])} // on retire chaque lien
```

# notes sur le traitement de données
cours sur l'adressage, les memoires, etc.. (super bien)
https://wcours.gel.ulaval.ca/GIF1001/old/h23/cours/8.%20Memoire%20et%20bus.pdf

**traitement de données en tables - NSI term**: 
* données propres: 
https://help.tableau.com/current/pro/desktop/fr-fr/data_structure_for_analysis.htm

**traitement de données en table - NSI_1** site blaise pascal, avec selection par comprehension de liste puis pandas:
https://info.blaisepascal.fr/nsi-traitement-des-donnees-en-tables/
page equivalente sur pixees: https://pixees.fr/informatiquelycee/sec/s6_2.html

**données structurées en SNT**
* cours bien clair sur https://www.cours.jlrichter.fr/lycee/snt-sciences-numeriques-et-technologie/2snt-d-les-donnees-structurees-et-leur-traitement/
* voir dans le dossier SNT données sur le bureau (correction des activités du nathan)
* maxicours: https://www.maxicours.com/se/cours/le-traitement-des-donnees-structurees/

Lien avec le cours precedent: La granulation des données est important pour la représentation en mémoire des données. Par exemple, la longueur choisie pour chaque valeur dans la RAM dépend du type de donnée.

**SNT Resaux**: metrique pour calculer la viralité d'une information à travers les reseaux: https://jai-un-pote-dans-la.com/top-14-metrics-social-media-mesurer-2022/

L'idée dans ce cours serait:

* definir le nombre de branches dans un arbre (followers)
* l'engagement des followers à relayer l'information: joue sur le nombre de branches à selectionner, mais aussi le temps moyen re repost
* calculer le temps pour atteindre 20 000 personnes avec une information sensationnelle
* le temps avec la contre verité, cette fois non complotiste

sur l'idee du **snt nathan**, determiner les liens entre personnages de **GOT** pour savoir qui est finalement le personnage principal (graphe): le dossier SNT données sur le bureau (correction des activités du nathan)

# notes sur le pg de NSI architecture
voir le cours NSI_1 de [jlrichter.fr](https://www.cours.jlrichter.fr/lycee/1e-nsi/architecture-materielle-et-systemes-dexploitation/) = bonne synthèse, assez proche mais plus organisé que ce que je fais.

# defis autour de la cybersecurité: NSI_1
bon cours et surtout de bonnes idées pour les chalenges en python:

https://cours-nsi.forge.apps.education.fr/premiere/ChallengesProgrammation.html

Dans ce même cours:

6. Partie 6 : IHM et Web
6.1. Web statique
6.2. Web interactif
6.3. Web dynamique
