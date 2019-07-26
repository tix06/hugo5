---
title: numeriser
---

# Numériser un signal sonore
## Principe
Lorsque l’on numérise un signal, on transforme une valeur continue (qui peut prendre une infinité de valeurs) en une valeur discrète (qui ne peut prendre qu’une petit nombre de valeurs).
Ainsi, avec un codage en 1 seul bit, les valeurs prises par le signal numérique sont 0 et 1, soit 2 valeurs différentes.
Avec un codage sur 2 bits, les valeurs prises par le signal numérique sont au nombre de 4. Si on numérote ces valeurs, il y aura la valeur 0, 1, 2 ou 3.
Convertir un signal de tension en 2 bits consiste alors à le transformer en une valeur de 0 à 3.

Associons ces bits et observons la qualité du signal numérisé…


## Un premier travail d'écoute
Sur la page dont le lien est donné ici, vous écouterez les morceaux et notes de musique numérisés sur 2 à 8 bits : *(utiliser un casque)*

[http://culturesciencesphysique.ens-lyon.fr/ressource/numerisation-acoustique-Chareyron1.xml](http://culturesciencesphysique.ens-lyon.fr/ressource/numerisation-acoustique-Chareyron1.xml)

Commencer l’écoute par le signal numérisé sur 2 bits et finir par ce même signal numérisé sur 8 bits : Comment évolue la qualité sonore ?  

> Sur votre cahier : Expliquer pourquoi.

## Dégradation du signal sonore

A partir de l’animation en lien : 
[http://www.ostralo.net/3_animations/js/CAN/index_v2n.htm](http://www.ostralo.net/3_animations/js/CAN/index_v2n.htm)

Observer les modifications apportées par le choix de la *quantification*.

> Répondre aux questions suivantes sur votre cahier : 

- Comment évolue la qualité sonore d’un signal numérisé sur 3 bits, 4 bits, et 5 bits ? 
- Quelle caractéristique visuelle de la courbe numérisée montre que la précision augmente ? 
- Comment pourrait-on obtenir une précision infinie sur la numérisation d’un signal sonore, c’est à dire telle que le signal numérisé est exactement conforme à celui d’origine ? 

# Programmation python
## Développer un programme
Ouvrir le notebook python que vous trouverez sur votre disque dur, dans *vos documents*: *conversion_signal_2bits.ipynb*

Compléter le programme python pour réaliser la numérisation des valeurs en 2 bits.

## utiliser le programme

On souhaite numériser les points de la courbe représentant un signal sonore : 

![signal à numériser](../CAN_graphique2.png)

- Executer le programme et coder chacune des valeurs (les points sur la courbe d'origine) sur 2 bits.
- Relever les valeurs numérisées. 
- Compléter alors le tableau de valeurs dans le paragraphe suivant, et afficher la courbe du signal numérisé.
- Recopier l'image de cette courbe dans vos documents, sur votre ordinateur.


<form></form>

<div id="tableau">
<input type="button" value="tracer le graphique" onclick="updata()">
<canvas id="graph" width="400" height="400"></canvas>
</div>

<style>
div[id=tableau], form {
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



