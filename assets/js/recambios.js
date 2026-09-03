(function () {
    'use strict';

    const form = document.getElementById('form-recambios');
    const estadoEnviando = document.getElementById('estado-enviando');
    const estadoExito = document.getElementById('estado-exito');
    const estadoError = document.getElementById('estado-error');
    const btnReintentar = document.getElementById('btn-reintentar');

    // Mensajes de error por campo
    const mensajes = {
        'recambio-referencia': 'Introduce la referencia de la pieza.',
        'recambio-nombre': 'Introduce tu nombre.',
        'recambio-apellido': 'Introduce tu apellido.',
        'recambio-email': 'Introduce un correo electrónico válido.',
        'recambio-telefono': 'Introduce un teléfono válido (mínimo 9 caracteres).',
        'recambio-rgpd': 'Debes aceptar la política de privacidad.'
    };

    function validarCampo(input) {
        let valido = true;
        let mensaje = '';

        if (input.required && !input.value.trim()) {
            valido = false;
            mensaje = mensajes[input.id] || 'Este campo es obligatorio.';
        } else if (input.type === 'email' && input.value.trim()) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(input.value.trim())) {
                valido = false;
                mensaje = 'Introduce un correo electrónico válido.';
            }
        } else if (input.minlength && input.value.trim().length < parseInt(input.minLength)) {
            valido = false;
            mensaje = 'Mínimo ' + input.minLength + ' caracteres.';
        } else if (input.maxlength && input.value.trim().length > parseInt(input.maxLength)) {
            valido = false;
            mensaje = 'Máximo ' + input.maxLength + ' caracteres.';
        } else if (input.type === 'number' && input.value.trim()) {
            const val = parseFloat(input.value);
            if (input.min && val < parseFloat(input.min)) {
                valido = false;
                mensaje = 'El valor mínimo es ' + input.min + '.';
            } else if (input.max && val > parseFloat(input.max)) {
                valido = false;
                mensaje = 'El valor máximo es ' + input.max + '.';
            }
        }

        const span = input.parentElement.querySelector('.mensaje-error');
        if (valido) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            if (span) span.textContent = '';
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            if (span) span.textContent = mensaje;
        }

        return valido;
    }

    // Validar en tiempo real al salir del campo
    form.querySelectorAll('input, textarea').forEach(function (input) {
        input.addEventListener('blur', function () {
            if (input.type === 'checkbox') {
                if (input.required && !input.checked) {
                    input.classList.add('is-invalid');
                    const span = input.parentElement.querySelector('.mensaje-error');
                    if (span) span.textContent = mensajes[input.id] || 'Este campo es obligatorio.';
                } else {
                    input.classList.remove('is-invalid');
                    const span = input.parentElement.querySelector('.mensaje-error');
                    if (span) span.textContent = '';
                }
            } else {
                validarCampo(input);
            }
        });

        // Quitar error al escribir
        input.addEventListener('input', function () {
            if (input.classList.contains('is-invalid')) {
                if (input.type === 'checkbox') {
                    if (input.checked) {
                        input.classList.remove('is-invalid');
                        const span = input.parentElement.querySelector('.mensaje-error');
                        if (span) span.textContent = '';
                    }
                } else {
                    validarCampo(input);
                }
            }
        });
    });

    // Envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let todoValido = true;

        form.querySelectorAll('input[required], textarea[required]').forEach(function (input) {
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    todoValido = false;
                    input.classList.add('is-invalid');
                    const span = input.parentElement.querySelector('.mensaje-error');
                    if (span) span.textContent = mensajes[input.id] || 'Este campo es obligatorio.';
                }
            } else {
                if (!validarCampo(input)) todoValido = false;
            }
        });

        if (!todoValido) {
            form.classList.add('was-validated');
            return;
        }

        // Simular envío
        form.hidden = true;
        estadoEnviando.hidden = false;

        setTimeout(function () {
            estadoEnviando.hidden = true;
            estadoExito.hidden = false;
        }, 2000);
    });

    // Botón reintentar
    if (btnReintentar) {
        btnReintentar.addEventListener('click', function () {
            estadoError.hidden = true;
            form.hidden = false;
            form.reset();
            form.classList.remove('was-validated');
            form.querySelectorAll('.is-valid, .is-invalid').forEach(function (el) {
                el.classList.remove('is-valid', 'is-invalid');
            });
            form.querySelectorAll('.mensaje-error').forEach(function (el) {
                el.textContent = '';
            });
        });
    }
})();
