// Script for changing color of nav bar when scrolling

let nav = null;
window.onload = function(event) {
    nav = document.querySelector(".nav-menu");
};


window.addEventListener('scroll', functNav);

function functNav(){
    if(window.scrollY > nav.offsetHeight + 100){ // lo cambié a 10 para probar en courses page, pero no funciona
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

// Scroll button

var btnTop = document.getElementById("btn-top");
var scroll = document.documentElement.scrollTop;
var fullSize = document.documentElement.offsetHeight;
var sizeVP = document.documentElement.clientHeight;

window.addEventListener("scroll", function()   // detecting scroll to show-up button
{ let scroll = document.documentElement.scrollTop;

  if(scroll > 100){
    btnTop.classList.add("show"); // applying show class to button
  } else{
    btnTop.classList.remove("show"); // removing show class to button
  }     
  if(fullSize = (scroll + sizeVP)){
    btnTop.classList.add("scrollBottom");
  } else{
    btnTop.classList.remove("scrollBottom");
  }
})



// Carrousell
const grande    = document.querySelector('.grande');
const punto     = document.querySelectorAll('.punto');



// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50;

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`;

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo');
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo');

    });
});


