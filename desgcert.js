$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Activa el desplazamiento automático
        autoplaySpeed: 2000, // Velocidad del desplazamiento automático (en milisegundos)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var proyectosLink = document.getElementById("proyectos");

    proyectosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        swal("Carga de proyectos en proceso", "Gracias por visitar mi página web", "info");
    });
});
