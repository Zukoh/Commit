const date = document.getElementById("date");
const title = document.getElementById("title");
const explanation = document.getElementById("explanation");
const img = document.getElementById("img");


function getIt(){
    let xhr = new XMLHttpRequest();
    
    xhr.addEventListener("load",function(){
        if(this.status == 200){
            let datos = JSON.parse(this.responseText);
            date.textContent += datos.date;
            title.textContent += datos.title;
            explanation.textContent += datos.explanation;
            img.src = datos.hdurl;

        }else{
            alert("Los datos no han podido ser cargados, reintente mas tarde.")
        }
    })




    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    xhr.send();
}




