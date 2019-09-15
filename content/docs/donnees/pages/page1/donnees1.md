---
title: numeriser
---

# Numériser un signal sonore
## Principe de la conversion numérique - analogique
Lorsque l’on numérise un signal, on transforme une valeur continue (qui peut prendre une infinité de valeurs) en une valeur discrète (qui ne peut prendre qu’une petit nombre de valeurs).
Ainsi, avec un codage en 1 seul bit, les valeurs prises par le signal numérique sont 0 et 1, soit 2 valeurs différentes.
Avec un codage sur 2 bits, les valeurs prises par le signal numérique sont au nombre de 4. Ce sont les valeurs :  0, 1, 2 ou 3.
Convertir un signal de tension en 2 bits consiste alors à le transformer en une valeur qui va de 00 à 11, en binaire.

Le fichier numérique est alors constitué d'une suite de caractères binaires, comme sur l'image suivante : 

![un fichier binaire](../bin.png)

Le travail suivant consiste à définir le rôle des paramètres de conversion analogique à numérique. On cherche à numériser un signal sonore dont la courbe est donnée ici : 

![signal à numériser](../CAN_graphique2.png)

## Créez vos données numériques : Programmation python
* Le notebook python se trouve sur votre disque dur à l'emplacement `documents/devoirs/tixidor/notebooks/conversion_signal.ipynb` : il s'agit du programme de numérisation. Pour l'executer, lancer le fichier .bat du dossier *devoirs*.
* Compléter ou modifier le programme python pour réaliser la numérisation du signal musical (voir graphique plus haut). La numérisation se fera sur 2 bits.
* Executer le programme : utilisez les valeurs de la tension lues sur la courbe.

>  **Question a** : Notez alors sur votre cahier les valeurs issues du programme de numérisation, telles qu'elles seraient enregistrées sur le fichier de données numériques.

# Restitution du signal 
## Conversion numérique - analogique
Une fois le signal musical numérisé, et stocké sur disque dur, on peut souhaiter le jouer. Il faut alors le restituer, c'est à dire le (re) transformer en signal analogique. Le signal aura alors suivi la chaine suivante : 

![image issue du site jl.domec sur le traitement numérique](../CAN_CNA.png)

* Pour chacune des valeurs binaires que vous avez calculées, convertir cette valeur en décimal.
 * Compléter alors le tableau de valeurs ci dessous, et afficher la courbe du signal numérisé.
* Recopier l'image de cette courbe à l'emplacement `documents/devoirs/tixidor/notebooks`, sur votre ordinateur.


<form></form>

<div id="tableau">
<input type="button" value="tracer le graphique" onclick="updata()">
<canvas id="graph" width="400" height="400"></canvas>
</div>

<style>
div[id=tableau], form {
		overflow: scroll;
	  	display: block;
   	justify-content: center;
	  }

	  input[type=button]{
	  display: block;
	  	margin-top: 50px;
 }
      canvas { 
      	margin-top: 50px;
      	border: 2px solid black; 
      }
   
   input[type="text"]
{
    font-size:12px;
}
</style>


<script type="text/javascript">

var canvas = document.getElementById('graph');
var ctx = canvas.getContext('2d');
var originX = 40, originY = 40;	// origine (0,0 graphique sur canvas
var taille = 12;				// taille police canvas
var newSize = taille + 'px';
ctx.font = newSize + ' ' + 'serif';
//ctx.font = '30px serif';


 window.onload = function(){
  // tableau de valeurs
  var body = document.getElementsByTagName("form")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 11; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      //var cellText = document.createTextNode("cell in row "+i+", column "+j);
      var cellText = document.createElement("INPUT");
  	  cellText.setAttribute("type", "text");
  	  cellText.setAttribute("size","3");

      if (j==0) {
      	if (i==0) {
        	cellText.setAttribute("value",'X');
        	}
        	else
        		{
			cellText.setAttribute("value",'Y');
        		}
        }
        else 
        {
  
  		cellText.setAttribute("value",i.toString(16)+j.toString(16));
      }
        
  document.body.appendChild(cellText);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");

  drawcanvas()


}

function drawcanvas(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.beginPath();
ctx.moveTo(originX, canvas.height-originY);
ctx.lineTo(canvas.width, canvas.height-originY);
ctx.lineTo(canvas.width -5, canvas.height-originY -5);
ctx.moveTo(canvas.width, canvas.height-originY);
ctx.lineTo(canvas.width -5, canvas.height-originY+5);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(originX, canvas.height-originY);
ctx.lineTo(originX, 0);
ctx.lineTo(originX -5, 5);
ctx.moveTo(originX, 0);
ctx.lineTo(originX +5, 5);
ctx.closePath();
ctx.stroke();

}


	
	

function updata() {
	drawcanvas();
	// fonction qui créé un tableau de valeurs
	var tabX = [];
	var tabY = [];
	var query = document.querySelectorAll('form td');
	for (var i = 1, c = query.length/2; i < c; i++) {
		tabX.push(parseFloat(query[i].childNodes[0].value));
		tabY.push(parseFloat(query[i+c].childNodes[0].value));
	}
	
  	ctx.fillText(query[0].childNodes[0].value, canvas.width/2, canvas.height- taille/2);
  	ctx.save();
  	ctx.rotate(-Math.PI/2);

	ctx.fillText(query[c].childNodes[0].value, -canvas.height/2, taille);
	ctx.restore();

	var dx = (canvas.width-originX)/Math.max(...tabX)*0.9 ; // pixel horizontaux par unité de X
	var dy = (canvas.height-originY)/Math.max(...tabY)*0.9 ; // pixel verticaux par unité de Y

	//console.log(dx, dy);

	for (var i=0, D = Math.trunc(Math.max(...tabX))/5; i<5; i++) {
		
		ctx.fillText(Math.round(i*D*100)/100, originX - taille/2 + D*i*dx, canvas.height - originY +taille + 5);
	}
	for (var i=0, D = Math.trunc(Math.max(...tabY))/10; i<10; i+=2) {
		console.log(i*D, originX - taille * 1.5, canvas.height - originY - i*D*dy)
		ctx.fillText(Math.round(i*D*100)/100, originX - taille * Math.round(Math.log(5*D))/4-18, canvas.height - originY - i*D*dy);
	}
	var periode = Math.max(...tabX)/(tabX.length);

	ctx.moveTo(originX + tabX[0]*dx,canvas.height-originY-tabY[0]*dy);
	for (var i=0; i<c-1; i++){
		//if (tabX[i]!= NaN & tabY[i]!=NaN & i< tabX.length){
		if (i<tabX.length-1){
			console.log('point '+i + ' c = '+c+ ' x= '+tabX[i]+ ' y= '+ tabY[i]);
			console.log(originX + tabX[i]*dx,canvas.height-originY-tabY[i]*dy);
			ctx.lineTo(originX + tabX[i]*dx,canvas.height-originY-tabY[i]*dy);
			ctx.lineTo(originX + (tabX[i+1])*dx,canvas.height-originY-tabY[i]*dy);
			ctx.stroke();}
			else
			{
			//	if (tabX[i]!= NaN & tabY[i]!=NaN){
					console.log('dernier point');
					console.log('point '+i + ' c = '+c+ ' x= '+tabX[i]+ ' y= '+ tabY[i]);
					ctx.lineTo(originX + tabX[i]*dx,canvas.height-originY-tabY[i]*dy);   // trait vertical
					ctx.lineTo(originX + (tabX[i]+periode)*dx,canvas.height-originY-tabY[i]*dy); // trait horizontal
					ctx.stroke();
				}
			//	}
			}
		
	
	//document.getElementById('valeurs').innerHTML = tabX +' '+tabY + ' max X : '+ Math.trunc(Math.max(...tabX));
}

</script>

## travail d'écoute sur de vrais signaux sonores
Sur la page dont le lien est donné <a href="http://culturesciencesphysique.ens-lyon.fr/ressource/numerisation-acoustique-Chareyron1.xml" target="_blank">ici</a>, vous écouterez les morceaux et notes de musique numérisés sur 2 à 8 bits : *(utiliser un casque)*

<a href="http://culturesciencesphysique.ens-lyon.fr/ressource/numerisation-acoustique-Chareyron1.xml" target="_blank">culturesciencesphysique.ens-lyon.fr/ressource/numerisation-acoustique</a>

Commencer l’écoute par le signal numérisé sur 2 bits et finir par ce même signal numérisé sur 8 bits : Comment évolue la qualité sonore ?  

> **Question b :** Sur votre cahier : Expliquer pourquoi.

## Dégradation du signal sonore

A partir de la page suivante : ouvrir l'application *Conversion analogique/numérique*

<a href="http://www.ostralo.net" target="_blank">site ostralo.net</a>

* Observer les modifications apportées par le choix de la *quantification*.

* Répondre aux questions suivantes sur votre cahier : 

> **Question c :** Comment évolue la qualité sonore d’un signal numérisé sur 3 bits, 4 bits, et 5 bits ? 

> **Question d:** Quelle caractéristique visuelle de la courbe numérisée montre que la précision augmente ? 

> **Question e:** Comment pourrait-on obtenir une précision infinie sur la numérisation d’un signal sonore, c’est à dire telle que le signal numérisé est exactement conforme à celui d’origine ? 

> **Question f:** Quel autre paramètre influe également sur la qualité du signal numérisé ? 

