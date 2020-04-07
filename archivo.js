const TEXTO = "    HOLA cCmo EsTASa? ";

console.log("*----------* La palabra es: "+TEXTO.trim())


// -------- Mira si hay mas de una palabra -----------------------

let spaces=(TEXTO.trim().indexOf(" "));

if( spaces !== -1 ){
	console.log("Hay mas de una palabra")
}else{
	console.log("Hay una sola palabra")
}

// -------- Cuenta letras de la palabra -----------------------------------

let letters=TEXTO.trim().length



if (letters>10){
	console.log("La constante posee mas de 10 letras, tiene en total "+letters)
}else{
	console.log("La constante posee menos de 10 letras, tiene en total " + letters)
}

// --------- PAR O IMPAR --------------------

if (letters%2 == 0){
	console.log("El numero " + letters+ " es par")
}else{
	console.log("El numero " + letters+ " es impar")
}

// ------------ Primeras 4 letras -------------------------------

console.log("primeras 4 letras "+TEXTO.trim().slice(0,4))

// ------------ Mayusculas -------------------------------------
if (TEXTO===TEXTO.toLowerCase()){
	console.log("El texto esta todo en minusculas..")
}else{
	if(TEXTO ===TEXTO.toUpperCase()){
		console.log("El texto esta todo en mayusuculas")
	}else{
		console.log("El texto tiene mayusculas y minusculas")
	}
}

//------------ Mostrar ultima palabra --------------------------
lastSpace = TEXTO.trim().lastIndexOf(" ");
lastWord=TEXTO.trim().slice(lastSpace);
console.log("La ultima palabra es: "+lastWord.trim());

//-------------- Letra del medio -------------------------------

console.log("La letra del medio es: " + TEXTO.charAt((TEXTO.length/2)));

// ------------- Evaluar si es vocal ----------------------------

middleLetter=TEXTO.charAt((TEXTO.length/2)).toUpperCase();


switch (middleLetter){
	case 'A' :
	case 'E' :
	case 'I' :
	case 'O' :
	case 'U' :
		console.log("Es una vocal");
		break;
	default :
		console.log("No es una vocal");
}

// --------------------- Ver si hay una pregunta ---------------

if(TEXTO.indexOf("?")===-1){
	console.log("No hay ninguna pregunta");
}else{
	console.log("Hay una pregunta");
}

// ------------------ reemplazar dad por tud ---------------

const TEXTO2= "Latidad"

console.log(TEXTO2.replace("dad","tud"));


