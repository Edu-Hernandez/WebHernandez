let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("erwin");
        habilidades[8].classList.add("figma");
        habilidades[9].classList.add("lucid");
        habilidades[10].classList.add("unity");
        habilidades[11].classList.add("cinema4d");
        habilidades[12].classList.add("boostrap");
        habilidades[13].classList.add("bulma");
        habilidades[14].classList.add("comunicacion");
        habilidades[15].classList.add("trabajo");
        habilidades[16].classList.add("creatividad");
        habilidades[17].classList.add("dedicacion");
        habilidades[18].classList.add("proyect");
        habilidades[19].classList.add("responsabilidad");
        habilidades[20].classList.add("compromiso");
        habilidades[21].classList.add("compromiso");
        habilidades[22].classList.add("compromiso");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 