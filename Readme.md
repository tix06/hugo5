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

# notes
cours sur l'adressage, les memoires, etc.. (super bien)
https://wcours.gel.ulaval.ca/GIF1001/old/h23/cours/8.%20Memoire%20et%20bus.pdf

TP QR-code guadeloupe
https://pedagogie.ac-guadeloupe.fr/enrichissez_vos_productions_avec_codes_qr_0?language_content_entity=fr
