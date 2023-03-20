//menu lateral 
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = Function();{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//creo las barritas  de una particular identificada por su di
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appenChild(div);
    }
}

//selecciono todas las barras generales para luego manipular
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrador = document.getElementById("ilustrador");
crearBarra(ilustrador);

//ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienza em -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//estas variable la voy a utilizar de bandera para saber si ya ejecuto la animacion
let entro = false;

//funcion que aplica la animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidad");
    var distancia_skills = Window.innerHeight - habilidades.getBoundingClientRect().top
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
           pintarBarra(html, 16, 1, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervaljavascript);
        },100);
        const intervalWordprees = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordprees);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        },100);
        const intervalIlustrador = setInterval(function(){
            pintarBarra(ilustrador, 11, 5, intervalIlustrador);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
        }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}