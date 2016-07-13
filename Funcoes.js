var a = 0;
var um = 0;
var dois = 0;
var tres = 0;
var quatro = 0;
var cinco = 0;
var seis = 0;
var sete = 0;
var oito = 0;
var nove = 0;

function aleatorio() {
	while (a%2==1) {
		
		j = parseInt(Math.random()*9)+1;
		
		if (j==1) {
			if (um == 0) {
		document.getElementById('um').src='o.png';
		a++;
		um = -1;
		} else {};
		}
		
		if (j==2) {
			if (dois == 0) {
		document.getElementById('dois').src='o.png';
		a++;
		dois = -1;
		} else {};
		}
		
		if (j==3) {
			if (tres == 0) {
		document.getElementById('tres').src='o.png';
		a++;
		tres = -1;
		} else {};
		}
		
		if (j==4) {
			if (quatro == 0) {
		document.getElementById('quatro').src='o.png';
		a++;
		quatro = -1;
		} else {};
		}
		
		if (j==5) {
			if (cinco == 0) {
		document.getElementById('cinco').src='o.png';
		a++;
		cinco = -1;
		} else {};
		}
		
		if (j==6) {
			if (seis == 0) {
		document.getElementById('seis').src='o.png';
		a++;
		seis = -1;
		} else {};
		}
		
		if (j==7) {
			if (sete == 0) {
		document.getElementById('sete').src='o.png';
		a++;
		sete = -1;
		} else {};
		}
		
		if (j==8) {
			if (oito == 0) {
		document.getElementById('oito').src='o.png';
		a++;
		oito = -1;
		} else {};
		}
		
		if (j==9) {
			if (nove == 0) {
		document.getElementById('nove').src='o.png';
		a++;
		nove = -1;
		} else {};
		}
		
	} 
} 

function jogo1(id) {
	if (um == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		um = 1;}
	else {}
	} else {}
}

function jogo2(id) {
	if (dois == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		dois = 1;}
	else {}
	} else {}
}

function jogo3(id) {
	if (tres == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		tres = 1;}
	else {}
	} else {}
}

function jogo4(id) {
	if (quatro == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		quatro = 1;}
	else {}
	} else {}
}

function jogo5(id) {
	if (cinco == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		cinco = 1;}
	else {}
	} else {}
}

function jogo6(id) {
	if (seis == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		seis = 1;}
	else {}
	} else {}
}

function jogo7(id) {
	if (sete == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		sete = 1;}
	else {}
	} else {}
}

function jogo8(id) {
	if (oito == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		oito = 1;}
	else {}
	} else {}
}

function jogo9(id) {
	if (nove == 0) {
	if (a % 2 == 0){
		document.getElementById(id).src='x.png';
		a++;
		nove = 1;}
	else {}
	} else {}
}

function ganha() {
	if (((um == 1) && (dois == 1) && (tres == 1)) || ((um == 1) && (quatro == 1) && (sete == 1)) || ((um == 1) && (cinco == 1) && (nove == 1)) || ((quatro == 1) && (cinco == 1) && (seis == 1)) || ((sete == 1) && (oito == 1) && (nove == 1)) || ((dois == 1) && (cinco == 1) && (oito == 1)) || ((tres == 1) && (seis == 1) && (nove == 1)) || ((tres == 1) && (cinco == 1) && (sete == 1))) {
		document.write('<html><img src="ganhou.jpg" <p>voce ganhou!</p></html>');
	} else {
		if (((um == -1) && (dois == -1) && (tres == -1)) || ((um == -1) && (quatro == -1) && (sete == -1)) || ((um == -1) && (cinco == -1) && (nove == -1)) || ((quatro == -1) && (cinco == -1) && (seis == -1)) || ((sete == -1) && (oito == -1) && (nove == -1)) || ((dois == -1) && (cinco == -1) && (oito == -1)) || ((tres == -1) && (seis == -1) && (nove == -1)) || ((tres == -1) && (cinco == -1) && (sete == -1))) {
			document.write('<html><img src="perdeu.jpg"/> <p>voce perdeu!</p></html>');
		} else {if (a==9) {
			document.write('<html><img src="deuvelha.gif"/> <p>Deu velha!</p></html>');
		} else{}
	}
}
}
