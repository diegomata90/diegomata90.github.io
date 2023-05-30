const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlace-menu');
const barras = document.querySelectorAll('.ham span');


function activaMenu() {
    // cambia el display:none al display:flex
    enlaces.classList.toggle('activado');

    // para cada elemento de la variable barras de cada elemento span
    // se le agrega la clase animado
    barras.forEach(child => { child.classList.toggle('animada') })

    // Añade este código para ocultar el menú responsive después de seleccionar una opción
    if (enlaces.classList.contains('activado')) {
        enlaces.addEventListener('click', () => {
            enlaces.classList.remove('activado');
            barras.forEach(child => {
                child.classList.remove('animada');
            });
        });
    }

};


ham.addEventListener('click', activaMenu);

