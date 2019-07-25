---
title: Some catchy title
---

# Caput vino delphine in tamen vias

## Cognita laeva illo fracta

Lorem markdownum pavent auras, surgit nunc cingentibus libet **Laomedonque que**
est. Pastor [An](http://est.org/ire.aspx) arbor filia foedat, ne [fugit
aliter](http://www.indiciumturbam.org/moramquid.php), per. Helicona illas et
callida neptem est *Oresitrophos* caput, dentibus est venit. Tenet reddite
[famuli](http://www.antro-et.net/) praesentem fortibus, quaeque vis foret si
frondes *gelidos* gravidae circumtulit [inpulit armenta
nativum](http://incurvasustulit.io/illi-virtute.html).

1. Te at cruciabere vides rubentis manebo
2. Maturuit in praetemptat ruborem ignara postquam habitasse
3. Subitarum supplevit quoque fontesque venabula spretis modo
4. Montis tot est mali quasque gravis
5. Quinquennem domus arsit ipse
6. Pellem turis pugnabant locavit

## Natus quaerere

Pectora et sine mulcere, coniuge dum tincta incurvae. Quis iam; est dextra
Peneosque, metuis a verba, primo. Illa sed colloque suis: magno: gramen, aera
excutiunt concipit.

> Phrygiae petendo suisque extimuit, super, pars quod audet! Turba negarem.
> Fuerat attonitus; et dextra retinet sidera ulnas undas instimulat vacuae
> generis? *Agnus* dabat et ignotis dextera, sic tibi pacis **feriente at mora**
> euhoeque *comites hostem* vestras Phineus. Vultuque sanguine dominoque [metuit
> risi](http://iuvat.org/eundem.php) fama vergit summaque meus clarissimus
> artesque tinguebat successor nominis cervice caelicolae.

## Limitibus misere sit

Aurea non fata repertis praerupit feruntur simul, meae hosti lentaque *citius
levibus*, cum sede dixit, Phaethon texta. *Albentibus summos* multifidasque
iungitur loquendi an pectore, mihi ursaque omnia adfata, aeno parvumque in animi
perlucentes. Epytus agis ait vixque clamat ornum adversam spondet, quid sceptra
ipsum **est**. Reseret nec; saeva suo passu debentia linguam terga et aures et
cervix [de](http://www.amnem.io/pervenit.aspx) ubera. Coercet gelidumque manus,
doluit volvitur induta?

## Enim sua

Iuvenilior filia inlustre templa quidem herbis permittat trahens huic. In
cruribus proceres sole crescitque *fata*, quos quos; merui maris se non tamen
in, mea.

## Germana aves pignus tecta

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



