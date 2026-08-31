/* ===================================================
   main.js – Interacciones comunes del sitio
   Superautos Carballo

   Menú hamburguesa móvil, cierre con Esc y
   accesibilidad del teclado.
   =================================================== */

(function () {
    'use strict';

    /* -----------------------------------------------
       MENÚ HAMBURGUESA MÓVIL
       Alterna la clase 'abierto' en el menú y
       actualiza aria-expanded del botón.
    ----------------------------------------------- */
    const btnHamburguesa = document.querySelector('.btn-hamburguesa');
    const menuMovil = document.querySelector('.menu-principal');

    if (btnHamburguesa && menuMovil) {
        btnHamburguesa.addEventListener('click', function () {
            const estaAbierto = menuMovil.classList.toggle('abierto');
            btnHamburguesa.setAttribute('aria-expanded', estaAbierto);
        });

        /* Cerrar menú con tecla Esc */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menuMovil.classList.contains('abierto')) {
                menuMovil.classList.remove('abierto');
                btnHamburguesa.setAttribute('aria-expanded', 'false');
                btnHamburguesa.focus();
            }
        });

        /* Cerrar menú al hacer clic fuera */
        document.addEventListener('click', function (e) {
            if (
                menuMovil.classList.contains('abierto') &&
                !menuMovil.contains(e.target) &&
                !btnHamburguesa.contains(e.target)
            ) {
                menuMovil.classList.remove('abierto');
                btnHamburguesa.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* -----------------------------------------------
       CARRUSEL – Pausa con prefers-reduced-motion
       Detiene el autoplay si el usuario prefiere
       movimiento reducido.
    ----------------------------------------------- */
    const carruselEl = document.querySelector('#carrusel-destacados');

    if (carruselEl) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const carrusel = bootstrap.Carousel.getInstance(carruselEl);
            if (carrusel) {
                carrusel.pause();
            }
        }

        /* Botón pausa / play */
        const btnPausa = document.getElementById('btn-pausa-carrusel');
        if (btnPausa) {
            const iconoPausa = btnPausa.querySelector('.icono-pausa');
            const iconoPlay = btnPausa.querySelector('.icono-play');

            btnPausa.addEventListener('click', function () {
                const carrusel = bootstrap.Carousel.getInstance(carruselEl);
                if (!carrusel) return;

                const estaPausado = carruselEl.classList.contains('paused');
                if (estaPausado) {
                    carrusel.cycle();
                    iconoPausa.style.display = '';
                    iconoPlay.style.display = 'none';
                    btnPausa.setAttribute('aria-label', 'Pausar carrusel');
                    carruselEl.classList.remove('paused');
                } else {
                    carrusel.pause();
                    iconoPausa.style.display = 'none';
                    iconoPlay.style.display = '';
                    btnPausa.setAttribute('aria-label', 'Reanudar carrusel');
                    carruselEl.classList.add('paused');
                }
            });
        }
    }
})();
