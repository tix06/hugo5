var canvas = document.getElementById('graph');
var ctx = canvas.getContext('2d');
var originX = 40, originY = 40;	// origine (0,0 graphique sur canvas
var taille = 12;				// taille police canvas
var newSize = taille + 'px';
ctx.font = newSize + ' ' + 'serif';
var avancement = 0; // l'avancement au debut de la reaction
var next = 0.5; // augmentation de l'avancement
var img = new Image(); 

//ctx.font = '30px serif';


window.onload = function(){
img.addEventListener('load', function() {
  ctx.drawImage(img,-canvas.width * 0.1,-canvas.height*0.1,canvas.width*1.2,canvas.height*1.2);
 //exécute les instructions drawImage ici 
}, false);
img.src = "../src/chemistry.png";
// utiliser extract pour recuperer les molR à l'EI et les coef stoechio
// ainsi que les molP
// mettre dans la ligne EF les valeurs pour x=0 (les memes)
// ajouter la valeur maximale au curseur calculée selon les regles de l'avancement (majorer)
// 
// ajouter une fonction attachée au curseur pour rectifier les valeurs du tableau lorsque l'on
// modifie la position du curseur
// <input type="range"> 
// https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/range
let tabX=[];	// nom des especes
let tabY=[];	// quantités
let label=[];	// etiquette des axes
let coef=[];	// coef stoechiometriques
//let x=[]; 		// tableau contenant toutes les valeurs possibles pour xmax
let xmax; 		// avancement maximal

[tabX,tabY,label,coef] = extract();

etat(); // essai de lancer directement le dessin du tableau puis de mettre visibility : hiiden
// afin que la section prenne la bonne dimension


/*
xmax=0;
for (let i = 0; i<tabY.length; i++){
	if (-tabY[i]/coef[i] > xmax) {x.push(-tabY[i]/coef[i])};
	// astuce : on parcourt TOUTE la liste reactifs+produits
	// si mol/coef est > 0 memorise mol/coef
	// pour les produits, le rapport aura le signe -
	// et ne sera donc pas pris en compte pour la recherche du max
	}
xmax = Math.min(...x);
*/
xmax = x_max();
//console.log('valeurs possibles :'+ x + ' xmax :'+xmax);
etatFinal(0);

let inp = document.querySelector('.input');
let out = document.querySelector('output');


out.innerHTML = inp.value/10*xmax;

// use 'change' instead to see the difference in response
inp.addEventListener('input', function () {
  xmax = x_max();
  let val = inp.value/10*xmax; // nouvelle valeur avancement
  val = Math.round(100*val)/100; // arrondi à 2 chiffres si besoin
  if (val>xmax){val=xmax};
  out.innerHTML = val;
  etatFinal(val);
}, false);

}



function etat(){
  // dessine le tableau recap pour l'état final
  let tabX=[];	// nom des especes
  let tabY=[];	// quantités
  let label=[];	// etiquette des axes
  [tabX,tabY,label] = extract(true);
  var bilan = document.querySelector(".bilan");
  //var child = bilan.childNodes;
  if (bilan.firstChild != null){
  	let child = bilan.firstChild;
  	bilan.removeChild(child); // retirer le noeud enfant de bilan s'il existe
  }
  
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var celText;

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j <= tabX.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      
      //var cellText = document.createElement("INPUT");
  	  //cellText.setAttribute("type", "text");
  	  //cellText.setAttribute("size","5");

      if (j==0) {
      	if (i==0) {
        	//cellText.setAttribute("value",'X');
        	cellText = label[0];
        	}
        	else
        		{
			//cellText.setAttribute("value",'Y');
			cellText = label[1];
        		}
        }
        else 
        if (i==0) {
        	//cellText.setAttribute("value",'X');
        	cellText = tabX[j-1];
        	}
        	else
        		{
			//cellText.setAttribute("value",'Y');
			cellText = tabY[j-1];
        	}
        
  //document.body.appendChild(cellText);
      //cell.appendChild(cellText);
      cell.textContent=cellText;
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  bilan.appendChild(tbl);
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
	// dessine le canvas à partir du tableau courant
	// la fonction extract reactualise les valeurs de quantités à partir
	// de celle du tableau, donc il faudra : 
	// d'abord appeler la fonction qui actualise le tableau
	// puis appeler la fonction updata()
	drawcanvas();
	// fonction qui créé un tableau de valeurs
	var periode = 1; // le Dx horizontal
	var tabX = [];
	var tabY = [];
	var label = [];

	[tabX,tabY,label] = extract(true);
	etat(); // dessine le tableau recap pour l'état final
	//console.log("tabX = ",tabX);

	// calcul de l'echelle en pixel par unité de X et de Y
	let dx = scale(Math.max(...tabY))[0];// pixel horizontaux par unité de X
	let dy = scale(Math.max(...tabY))[1];// pixel verticaux par unité de Y
	
	
	// affichage des valeurs sur les axes
	axes(tabX,tabY,label,dx,dy,periode);
	// trace les rectangles pour chacun des quantités initiales
	colonneRect(periode,tabY,dx,dy);
}

function extract(final = false){
	// fonction qui extrait les valeurs d'un tableau simple
	// contenant des clé (ligne 1 => tabX) et valeurs (ligne 2 => tabY)
	// la premiere colonne contient les index => label
	// cette fonction peut servir à extraire les données de la premiere ligne (EI)
	// ou de la derniere ligne (EF) dans le cas ou le parametre 
	// final = true
	let tabX=[]; // especes
	let tabY=[]; // mol
	let label=[]; // etiquette des axes
	let coef=[]; // coef stoechiometriques
	let val; // stocke de maniere provisoire le coef
	// un seul tableau pour les produits (coef >0) et reactifs (coef <0)

	//let query = document.querySelectorAll('form td');
	let reactifs = document.querySelectorAll('.reactif input');
	let molR = document.querySelectorAll('.EI .molR input');
    let molP = document.querySelectorAll('.EI .molP input');
    let c = reactifs.length;

	if (final==true) {
      molR = document.querySelectorAll('.EF .molR');
	  for (let i = 0 ; i < c; i++) {
		//tabX.push(reactifs[i].textContent.trim()); // trim() retire les espaces de la cellule
		tabX.push(reactifs[i].value);
		val = molR[i].textContent.trim();
		if (val==""){val=0};
		tabY.push(parseFloat(val));
		}
	} else {
	  for (let i = 0 ; i < c; i++) {
		//tabX.push(reactifs[i].textContent.trim()); // trim() retire les espaces de la cellule
		tabX.push(reactifs[i].value);
		val = molR[i].value;
		if (val==""){val=0};
		tabY.push(parseFloat(val));
		}
	}

	let produits = document.querySelectorAll('.produit input');
	

	c = produits.length;
	if (final==true) {
	molP = document.querySelectorAll('.EF .molP');
	  for (let i = 0 ; i < c; i++) {
		//tabX.push(produits[i].textContent.trim()); // trim() retire les espaces de la cellule
		tabX.push(produits[i].value);
		val = molP[i].textContent.trim();
		if (val==""){val=0};
		tabY.push(parseFloat(val));
		}
	} else {
	  for (let i = 0 ; i < c; i++) {
	  	tabX.push(produits[i].value);
	  	val = molP[i].value;
	  	if (val==""){val=0};
		tabY.push(parseFloat(val));
	  }
	}

	label.push('especes chimiques');
	label.push('quantites de matiere (etat x)');

	let coefficient = document.querySelectorAll('th.coef input');
	c = coefficient.length;
	for (let i = 0 ; i < reactifs.length; i++) {
		//val = coefficient[i].textContent.trim();
		val = coefficient[i].value;
		if (val==""){val=1};
		coef.push(-parseFloat(val));
		// signe - car reactif
	}
	for (let i = reactifs.length ; i < reactifs.length + produits.length; i++) {
		val = coefficient[i].textContent.trim();
		if (val==""){val=1};
		coef.push(parseFloat(val));
		// signe + car produits
	}	

	return [tabX,tabY,label,coef]
}

function etatFinal(xf){
	// calcule l'etat final pour une valeur x
	let val; // val provisoire de molR ou de molP
	let n;	// nombre de mol
	let tabX=[]; // especes
	let tabY=[]; // mol
	let label=[]; // etiquette des axes
	let coef=[]; // coef stoechiometriques
	[tabX,tabY,label,coef] = extract();
	let molR = document.querySelectorAll('.EF .molR');
	let molP = document.querySelectorAll('.EF .molP');
	for (let i=0; i < molR.length; i++){
		val = tabY[i]+coef[i]*xf;
		val = Math.round(100*val)/100; // arrondi 2 decimales
		// addition ou soustraction selon s'il s'agit d'un reactif ou d'un produit
		//if (val<0){val=0};
		molR[i].innerHTML=val;
		tabY[i]=val; 
	}
	for (let i=0; i < molP.length; i++){
		val = tabY[i+molR.length]+coef[i+molR.length]*xf;
		val = Math.round(100*val)/100; 
		// addition ou soustraction selon s'il s'agit d'un reactif ou d'un produit
		//if (val<0){val=0};
		molP[i].innerHTML=val;
		tabY[i+molR.length]=val;
	}
	let query = document.querySelector('.EF td');
	query.innerHTML = 'quantite de matiere pour \n x = '+xf;
	//console.log('tabY apres avancement = '+tabY);
}

function axes(tabX,tabY,label,dx,dy,periode){
	// fonction qui affiche les etiquette X et Y des axes
	// Et qui calcule les ecarts entre graduations et la police de caractères
	// et trace les axes gradués
	// calcule la largeur diminuée de l'origine de l'axe 
	// que l'on divise par la valeur max du tableau 
	ctx.fillStyle="#000000";
  	ctx.fillText(label[0], canvas.width/2, canvas.height- taille/2);
  	ctx.save();
  	ctx.rotate(-Math.PI/2);
  	// affichage de Y
	ctx.fillText(label[1], -canvas.height/2, taille);
	ctx.restore();

	for (var i=0; i<tabX.length; i++) {	
		ctx.fillText(tabX[i],originX - taille/2 + periode*(i+1)*dx, canvas.height - originY +taille + 5);
	}
	for (var i=0, D = Math.trunc(Math.max(...tabY))/10; i<10; i+=2) {
		//console.log(i*D, originX - taille * 1.5, canvas.height - originY - i*D*dy)
		ctx.fillText(Math.round(i*D*100)/100, originX - taille * Math.round(Math.log(5*D))/4-18, canvas.height - originY - i*D*dy);
	}
}

function rectangle(periode,x,y,h,dx,dy,R,G,B){
	// fonction qui trace un rectangle selon 
	// les parametres : 
	// x,y : les valeurs de x et y sont issues du tableau (non mis à l'echelle en pixels)
	// correspondent au point à gauche en haut du rectangle une fois que l'on
	// realise l'homothetie d'echelle avec dx et dy
	// dx, dy : valeur de la largeur et hauteur du rectangle en pixels
	// la couleur change pour chacun des 4 tracés en colonne
	
	ctx.fillStyle="#"+R+G+B;
	ctx.fillRect(originX + x*dx-dx/2,canvas.height-originY-y*dy,periode*dx*0.9,h*dy-dy*0.05);
	let X = originX + x*dx-dx/2;
	let Y = canvas.height-originY-y*dy;
	//console.log('trace rectangle x= '+X+', y='+Y + ' h = '+h);
	//ctx.fillRect(originX + x*dx-dx/2,canvas.height-originY-y*dy,periode*dx*0.9,(y-Math.round(y))*dy);
}

function colonneRect(periode,tabY,dx,dy){
	// dessine une colonne verticale de rectangles
	// si y modulo 1 == 0 : y est entier => dy correspond à un rectangle de hauteur = 1
	// si y modulo 1 < 1 : y est decimal => on ne représente que la partie decimale
	// et sa hauteur correspond à une valeur inf à 1
	ctx.moveTo(originX + periode*dx,canvas.height-originY-tabY[0]*dy);
	for (var i=0; i<tabY.length; i++){
			let x = periode*(i+1);
			let y = tabY[i];
			let h = 1;
			let couleurs=[["ff","00","00"],["aa","22","00"],["00","ff","00"],["00","aa","22"]];
			while (y>0){
				if (y%1 < 0.01){
					h=1; // y est à valeur entiere => hauteur = 1
				} else {
				h = y - Math.trunc(y);
				//if (h<0.1){h=0.1} // 
				}
				//for (let j=y; j>0; j-=1){
				rectangle(periode,x,y,h,dx,dy,couleurs[i][0],couleurs[i][1],couleurs[i][2]);
				y = y - h;
				}
	}
}

function scale(maxY){
	// retourne un tableau contenant dx et dy
	// calculés par rapport au max des valeurs du tableau et des dimensions du canvas
	var dx = (canvas.width-originX)/4*0.9 ; // pixel horizontaux par unité de X
	//var dx = (canvas.width-originX)/Math.max(...tabX)*0.9 ; // pixel horizontaux par unité de X
	var dy = (canvas.height-originY)/maxY*0.9 ; // pixel verticaux par unité de Y
	tb = [dx,dy];
	return tb
}

function x_max(){
	// fonction qui renvoie la valeur de xmax
	let x=[]; 		// tableau contenant toutes les valeurs possibles pour xmax
	let xmax=0; 		// avancement maximal
	[tabX,tabY,label,coef] = extract();
	for (let i = 0; i<tabY.length; i++){
		if (-tabY[i]/coef[i] >= xmax && coef[i]<0) {x.push(-tabY[i]/coef[i])};
		// astuce : on parcourt TOUTE la liste reactifs+produits
		// si mol/coef est > 0 memorise mol/coef
		// pour les produits, le rapport aura le signe -
		// et ne sera donc pas pris en compte pour la recherche du max
		// à moins que la valeur soit =0 à l'EI
		// c'est pour celaqu'il faut aussi rajouter la condition sur le signe de coef
	}
	xmax = Math.min(...x);
	xmax = Math.round(xmax*100)/100; // arrondi
	return xmax
}