//Mwenu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//barras//
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let mantenimiento = document.getElementById("mantenimiento");
crearBarra(mantenimiento);
let reparacion = document.getElementById("reparacion");
crearBarra(reparacion);
let instalaciones = document.getElementById("instalaciones");
crearBarra(instalaciones);
let planos = document.getElementById("planos");
crearBarra(planos);
let renovables = document.getElementById("renovables");
crearBarra(renovables);

//pintado de cada barra//
let contadores =[-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distacia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distacia_skills>=300 && entro==false){
        entro = true;
        const intervalMantenimiento = setInterval(function(){
            pintarBarra(mantenimiento, 16, 0, intervalMantenimiento);
        },100);
        const intervalReparacion = setInterval(function(){
            pintarBarra(reparacion, 11, 1, intervalReparacion);
        },100);
        const intervalInstalaciones = setInterval(function(){
            pintarBarra(instalaciones, 11, 2, intervalInstalaciones);
        },100);
        const intervalPlanos = setInterval(function(){
            pintarBarra(planos, 11, 3, intervalPlanos);
        },100);
        const intervalRenovables = setInterval(function(){
            pintarBarra(renovables, 11, 4, intervalRenovables);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
    elementos[x].style.backgroundColor = "#dc143c";
    }else{
        clearInterval(interval)
    }
}

//deteccion del scrool del mouse//}
window.onscroll = function(){
    efectoHabilidades();
}