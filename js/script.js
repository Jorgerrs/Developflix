import peliculas from './peliculas.js'



console.log(peliculas);

let genero28 = document.getElementById("genero-28");
let genero53 = document.getElementById("genero-53");
let genero12 = document.getElementById("genero-12");
let nombrepelicula, urlpelicula = "";
let urlImg = "https://image.tmdb.org/t/p/w200/";

for (let i = 0; i < peliculas.length; i++) {
    
    nombrepelicula = peliculas[i].original_title;
    urlpelicula = urlImg + peliculas[i].poster_path;

    for (let j = 0; j < peliculas[i].genre_ids.length; j++) {
        console.log(peliculas[i].genre_ids[j]);
       
        let divcontenedor = document.createElement('div');
        let createimg = document.createElement("img");
        let creatediv = document.createElement('div');

        

        switch (peliculas[i].genre_ids[j]) {
            case 12:
                divcontenedor.appendChild(createimg).src = urlpelicula;
                divcontenedor.appendChild(creatediv).innerText=nombrepelicula;

                genero12.appendChild(divcontenedor);

                break;
            case 28:
                divcontenedor.appendChild(createimg).src = urlpelicula;
                divcontenedor.appendChild(creatediv).innerText=nombrepelicula;    

                genero28.appendChild(divcontenedor);
                
                break;
            case 53:
                divcontenedor.appendChild(createimg).src = urlpelicula;
                divcontenedor.appendChild(creatediv).innerText=nombrepelicula;
                
                genero53.appendChild(divcontenedor);

                break;
            default:
                break;
        }
    }
}
 
