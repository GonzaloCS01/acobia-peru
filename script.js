/* =========================================
   ACOBIA PERÚ
   MENÚ DE NAVEGACIÓN MÓVIL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Identificar los elementos del menú

    const botonMenu = document.querySelector(".menu-toggle");

    const menuPrincipal = document.querySelector("#menu-principal");

    const iconoMenu = document.querySelector(".menu-icono");


    // Comprobar que los elementos existan

    if (!botonMenu || !menuPrincipal || !iconoMenu) {
        return;
    }


    // Función para abrir y cerrar el menú

    function cambiarEstadoMenu(abierto) {

        menuPrincipal.classList.toggle("abierto", abierto);

        botonMenu.setAttribute(
            "aria-expanded",
            String(abierto)
        );

        botonMenu.setAttribute(
            "aria-label",
            abierto
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
        );

        iconoMenu.textContent = abierto ? "✕" : "☰";

    }


    // Abrir o cerrar al pulsar el botón

    botonMenu.addEventListener("click", function () {

        const estaAbierto = menuPrincipal.classList.contains("abierto");

        cambiarEstadoMenu(!estaAbierto);

    });


    // Cerrar el menú al seleccionar una sección

    const enlacesMenu = menuPrincipal.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            cambiarEstadoMenu(false);

        });

    });


    // Cerrar el menú al pulsar la tecla Escape

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            const estaAbierto = menuPrincipal.classList.contains("abierto");

            if (estaAbierto) {

                cambiarEstadoMenu(false);

                botonMenu.focus();

            }

        }

    });


    // Restablecer el menú al cambiar a la versión de escritorio

    const pantallaEscritorio = window.matchMedia("(min-width: 769px)");

    pantallaEscritorio.addEventListener("change", function (evento) {

        if (evento.matches) {

            cambiarEstadoMenu(false);

        }

    });

});

/* =========================================
   ACOBIA PERÚ
   BOTÓN FLOTANTE: VOLVER ARRIBA
========================================= */

// Buscar el botón en la página

const botonVolverArriba = document.getElementById("volver-arriba");

// Comprobar que el botón existe

if (botonVolverArriba) {

    // Mostrar u ocultar según el desplazamiento

    function actualizarBotonVolverArriba() {

        if (window.scrollY > 400) {

            botonVolverArriba.classList.add("visible");

        } else {

            botonVolverArriba.classList.remove("visible");

        }

    }

    // Detectar cuando el visitante se desplaza

    window.addEventListener(
        "scroll",
        actualizarBotonVolverArriba,
        { passive: true }
    );

    // Comprobar la posición inicial de la página

    actualizarBotonVolverArriba();

    // Regresar al inicio al presionar el botón

    botonVolverArriba.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "instant" : "smooth"

        });

    });

}
