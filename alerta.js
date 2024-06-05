document.addEventListener("DOMContentLoaded", function() {
    var proyectosLink = document.getElementById("proyect");

    proyectosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        swal("Carga de proyectos en proceso", "Gracias por visitar mi página web", "info");
    });
});

