(function () {
    'use strict';

    var form = document.getElementById('form-prueba');
    var pasos = document.querySelectorAll('.paso-formulario');
    var indicadorPasos = document.querySelectorAll('.pasos-formulario ol li');
    var btnSiguiente = document.querySelectorAll('.btn-siguiente');
    var btnAnterior = document.querySelectorAll('.btn-anterior');
    var estadoEnviando = document.getElementById('estado-enviando');
    var estadoExito = document.getElementById('estado-exito');
    var estadoError = document.getElementById('estado-error');
    var btnReintentar = document.getElementById('btn-reintentar');

    // Rellenar vehículo desde URL
    var params = new URLSearchParams(window.location.search);
    var vehiculoId = params.get('vehiculo');
    if (vehiculoId) {
        var vehiculos = {
            "ferrari-12-cilindri": "Ferrari 12 Cilindri",
            "porsche-911-targa-4s": "Porsche 911 Targa 4S",
            "audi-q8": "Audi Q8",
            "lamborghini-revuelto": "Lamborghini Revuelto",
            "lamborghini-urus": "Lamborghini Urus",
            "porsche-taycan": "Porsche Taycan",
            "mercedes-eqs": "Mercedes EQS",
            "mercedes-amg-eqe": "Mercedes AMG EQE"
        };
        var nombre = vehiculos[vehiculoId];
        if (nombre) {
            document.getElementById('prueba-vehiculo').value = nombre;
            document.getElementById('prueba-vehiculo-id').value = vehiculoId;
        }
    }

    // Ir a un paso
    function irAPaso(numeroPaso) {
        pasos.forEach(function (paso) {
            paso.hidden = true;
        });
        document.getElementById('paso-' + numeroPaso).hidden = false;

        indicadorPasos.forEach(function (item, i) {
            item.classList.remove('paso-activo');
            item.removeAttribute('aria-current');
            if (i + 1 < numeroPaso) {
                item.classList.add('paso-completado');
            } else if (i + 1 === numeroPaso) {
                item.classList.add('paso-activo');
                item.setAttribute('aria-current', 'step');
            } else {
                item.classList.remove('paso-completado');
            }
        });
    }

    // Validar un paso
    function validarPaso(numeroPaso) {
        var paso = document.getElementById('paso-' + numeroPaso);
        var campos = paso.querySelectorAll('input[required], select[required]');
        var valido = true;

        campos.forEach(function (campo) {
            var span = campo.parentElement.querySelector('.mensaje-error');
            if (!campo.value.trim()) {
                valido = false;
                campo.classList.add('is-invalid');
                campo.classList.remove('is-valid');
                if (span) span.textContent = 'Este campo es obligatorio.';
            } else {
                campo.classList.remove('is-invalid');
                campo.classList.add('is-valid');
                if (span) span.textContent = '';
            }

            if (campo.type === 'email' && campo.value.trim()) {
                var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(campo.value.trim())) {
                    valido = false;
                    campo.classList.add('is-invalid');
                    campo.classList.remove('is-valid');
                    if (span) span.textContent = 'Introduce un correo válido.';
                }
            }

            if (campo.minLength > 0 && campo.value.trim().length < campo.minLength) {
                valido = false;
                campo.classList.add('is-invalid');
                campo.classList.remove('is-valid');
                if (span) span.textContent = 'Mínimo ' + campo.minLength + ' caracteres.';
            }
        });

        return valido;
    }

    // Rellenar resumen (paso 3)
    function rellenarResumen() {
        document.getElementById('resumen-vehiculo').textContent =
            document.getElementById('prueba-vehiculo').value || '—';
        document.getElementById('resumen-fecha').textContent =
            document.getElementById('prueba-fecha').value || '—';

        var franja = document.getElementById('prueba-franja');
        document.getElementById('resumen-franja').textContent =
            franja.options[franja.selectedIndex].text !== 'Selecciona una franja'
                ? franja.options[franja.selectedIndex].text : '—';

        document.getElementById('resumen-nombre').textContent =
            document.getElementById('prueba-nombre').value || '—';
        document.getElementById('resumen-email').textContent =
            document.getElementById('prueba-email').value || '—';
        document.getElementById('resumen-telefono').textContent =
            document.getElementById('prueba-telefono').value || '—';
    }

    // Botones siguiente
    btnSiguiente.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var pasoActual = parseInt(btn.closest('.paso-formulario').id.replace('paso-', ''));
            var pasoSiguiente = parseInt(btn.dataset.paso);

            if (validarPaso(pasoActual)) {
                if (pasoSiguiente === 3) {
                    rellenarResumen();
                }
                irAPaso(pasoSiguiente);
            }
        });
    });

    // Botones anterior
    btnAnterior.forEach(function (btn) {
        btn.addEventListener('click', function () {
            irAPaso(parseInt(btn.dataset.paso));
        });
    });

    // Validación en tiempo real
    form.querySelectorAll('input, select').forEach(function (campo) {
        campo.addEventListener('blur', function () {
            if (campo.required && campo.parentElement.closest('.paso-formulario') &&
                !campo.parentElement.closest('.paso-formulario').hidden) {
                var span = campo.parentElement.querySelector('.mensaje-error');
                if (!campo.value.trim()) {
                    campo.classList.add('is-invalid');
                    campo.classList.remove('is-valid');
                    if (span) span.textContent = 'Este campo es obligatorio.';
                } else {
                    campo.classList.remove('is-invalid');
                    campo.classList.add('is-valid');
                    if (span) span.textContent = '';
                }
            }
        });

        campo.addEventListener('input', function () {
            if (campo.classList.contains('is-invalid')) {
                var span = campo.parentElement.querySelector('.mensaje-error');
                if (campo.value.trim()) {
                    campo.classList.remove('is-invalid');
                    campo.classList.add('is-valid');
                    if (span) span.textContent = '';
                }
            }
        });
    });

    // Envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var checkbox = document.getElementById('prueba-rgpd');
        var spanRgpd = checkbox.parentElement.querySelector('.mensaje-error');
        if (!checkbox.checked) {
            checkbox.classList.add('is-invalid');
            if (spanRgpd) spanRgpd.textContent = 'Debes aceptar la política de privacidad.';
            return;
        } else {
            checkbox.classList.remove('is-invalid');
            if (spanRgpd) spanRgpd.textContent = '';
        }

        form.hidden = true;
        document.querySelector('.pasos-formulario').hidden = true;
        estadoEnviando.hidden = false;

        setTimeout(function () {
            estadoEnviando.hidden = true;
            estadoExito.hidden = false;
        }, 2000);
    });

    // Reintentar
    if (btnReintentar) {
        btnReintentar.addEventListener('click', function () {
            estadoError.hidden = true;
            form.hidden = false;
            document.querySelector('.pasos-formulario').hidden = false;
            form.reset();
            form.classList.remove('was-validated');
            form.querySelectorAll('.is-valid, .is-invalid').forEach(function (el) {
                el.classList.remove('is-valid', 'is-invalid');
            });
            form.querySelectorAll('.mensaje-error').forEach(function (el) {
                el.textContent = '';
            });
            irAPaso(1);
        });
    }
})();
