let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 825 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        } else {
            animado[i].style.opacity = 0;
            animado[i].classList.remove("mostrarArriba");
        }
    }
}

function ocultarScroll() {
    let scrollBottom = document.documentElement.scrollTop; //+ window.innerHeight;

    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 750 > scrollBottom) {
            animado[i].style.opacity = 0;
            animado[i].classList.remove("mostrarArriba");
            animado[i].classList.add("ocultarAbajo");
        } else {
            animado[i].classList.remove("ocultarAbajo");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', ocultarScroll);
