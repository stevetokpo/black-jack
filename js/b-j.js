var chaine = "Bienvenue dans le jeu <b>BlackJack</b>"; 

var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage() {
document.getElementById("bienvenue").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)

setInterval("changeMessage()",100)


// Commencement du jeu
function startgame() {
	$('#main').html('Chargement du jeu en cours...');
	setTimeout(starting, 1100);
	function starting() {
		$('#main').load('main.html');
	}
}
