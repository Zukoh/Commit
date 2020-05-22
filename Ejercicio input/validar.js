const texto = document.getElementById("texto");
const btnValidar = document.getElementById("validar");
const btnFormatear = document.getElementById("formatear");
const message = document.getElementById("mensaje");
let flag=true

btnValidar.addEventListener("click",function(){
   
    let size= texto.value.length;
    let coma = texto.value.indexOf(",");
    let preComa = texto.value.slice(0,coma).trim();
    let postComa = texto.value.slice(coma+1, size).trim();
    let sizePreComa = preComa.length;
    let sizePostComa = postComa.length;
   


    if((sizePreComa>=2)&&(sizePostComa>=2)){
        texto.style.borderColor = "green";
        flag=true;
    }
    else{
        texto.style.borderColor= "red";
        message.textContent = "Se necesita almenos dos letras en el nombre y en el apellido";
        flag=false;
    }

    if(coma == -1){
        message.textContent = "* Dato no valido, le falta una coma.";   
        texto.style.borderColor = "red"; 
        flag=false;
    }
         //Evaluo si hay mas de una coma
    else if(coma != texto.value.lastIndexOf(",")){
        message.textContent = "* Dato no valido, hay mas de una coma.";
        texto.style.borderColor = "red"; 
        flag=false;
    }
});

btnFormatear.addEventListener("click",function(){
    if(flag){
        let size= texto.value.length;
        let coma = texto.value.indexOf(",");
        let preComa = texto.value.slice(0,coma).trim();
        let postComa = texto.value.slice(coma+1, size).trim();
        message.textContent = `${postComa} ${preComa}`;
    }
})
