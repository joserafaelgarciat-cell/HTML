(function () {
    'use strict';

    var form = document.getElementById('form-contacto');
    var estadoEnviando = document.getElementById('estado-enviando');
    var estadoExito = document.getElementById('estado-exito');
    var estadoError = document.getElementById('estado-error');
    var btnReintentar = document.getElementById('btn-reintentar');

    var mensajes = {
        'contacto-nombre': 'Introduce tu nombre.',
        'contacto-apellido': 'Introduce tu apellido.',
        'contacto-email': 'Introduce un correo electrónico válido.',
        'contacto-telefono': 'Introduce un teléfono válido (mínimo 9 caracteres).',
        'contacto-rgpd': 'Debes aceptar la política de privacidad.'
    };

    function marcarValido(input, span) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (span) span.textContent = '';
    }

    function marcarInvalido(input, span, mensaje) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (span) span.textContent = mensaje;
    }

    function validarCampo(input) {
        var valido = true;
        var mensaje = '';

        if (input.required && !input.value.trim()) {
            valido = false;
            mensaje = mensajes[input.id] || 'Este campo es obligatorio.';
        } else if (input.type === 'email' && input.value.trim()) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        }

        var span = input.parentElement.querySelector('.mensaje-error');
        if (valido) {
            marcarValido(input, span);
        } else {
            marcarInvalido(input, span, mensaje);
        }

        return valido;
    }

    function validarCheckbox(input) {
        var span = input.parentElement.querySelector('.mensaje-error');
        if (input.required && !input.checked) {
            marcarInvalido(input, span, mensajes[input.id] || 'Este campo es obligatorio.');
            return false;
        } else {
            marcarValido(input, span);
            return true;
        }
    }

    form.querySelectorAll('input, textarea').forEach(function (input) {
        input.addEventListener('blur', function () {
            if (input.type === 'checkbox') {
                validarCheckbox(input);
            } else {
                validarCampo(input);
            }
        });

        input.addEventListener('input', function () {
            if (input.classList.contains('is-invalid')) {
                if (input.type === 'checkbox') {
                    validarCheckbox(input);
                } else {
                    validarCampo(input);
                }
            }
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var todoValido = true;

        form.querySelectorAll('input[required]').forEach(function (input) {
            if (input.type === 'checkbox') {
                if (!validarCheckbox(input)) todoValido = false;
            } else {
                if (!validarCampo(input)) todoValido = false;
            }
        });

        if (!todoValido) {
            form.classList.add('was-validated');
            return;
        }

        form.hidden = true;
        estadoEnviando.hidden = false;

        setTimeout(function () {
            estadoEnviando.hidden = true;
            estadoExito.hidden = false;
        }, 2000);
    });

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
