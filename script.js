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
