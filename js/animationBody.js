let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;

        if(alturaAnimado < scrollTop+300) {
            // if(i<=1){
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarDesdeArriba");
            // }else{
            //     animado[i].style.opacity = 1;
            // }
        }
    }
}

let animado2 = document.querySelectorAll(".animado2");

function mostrarScroll2(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado2.length; i++) {
        let alturaAnimado2 = animado2[i].offsetTop;
        if(alturaAnimado2 < scrollTop+300) {
            animado2[i].style.opacity = 1;
            animado2[i].classList.add("mostrarDesdeArriba2");
        }
    }
}


let animado3 = document.querySelectorAll(".animado3");

function mostrarScroll3(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado3.length; i++) {
        let alturaAnimado3 = animado3[i].offsetTop;
        if(alturaAnimado3 < scrollTop+300) {
            animado3[i].style.opacity = 1;
            animado3[i].classList.add("mostrarDesdeArriba3");
        }
    }
}

let animadoAppear = document.querySelectorAll(".animadoAppear");

function mostrarScroll4(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAppear.length; i++) {
        let alturaanimadoAppear = animadoAppear[i].offsetTop;
        if(alturaanimadoAppear < scrollTop+300) {
            animadoAppear[i].style.opacity = 1;
        }
    }
}

let animadoAppear2 = document.querySelectorAll(".animadoAppear2");

function mostrarScroll5(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAppear2.length; i++) {
        let alturaanimadoAppear2 = animadoAppear2[i].offsetTop;
        if(alturaanimadoAppear2 < scrollTop+300) {
            animadoAppear2[i].style.opacity = 1;
        }
    }
}

let animadoAppear3 = document.querySelectorAll(".animadoAppear3");

function mostrarScroll6(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAppear3.length; i++) {
        let alturaanimadoAppear3 = animadoAppear3[i].offsetTop;
        if(alturaanimadoAppear3 < scrollTop+300) {
            animadoAppear3[i].style.opacity = 1;
        }
    }
}

let animadoAppear4 = document.querySelectorAll(".animadoAppear4");

function mostrarScroll7(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAppear4.length; i++) {
        let alturaanimadoAppear4 = animadoAppear4[i].offsetTop;
        if(alturaanimadoAppear4 < scrollTop+300) {
            animadoAppear4[i].style.opacity = 1;
        }
    }
}

let animadoAppear5 = document.querySelectorAll(".animadoAppear5");

function mostrarScroll9(){
    let scrollTop2 = document.documentElement.scrollTop;
    for (var i=0; i < animadoAppear5.length; i++) {
        let alturaanimadoAppear5 = animadoAppear5[i].offsetTop;
        if(alturaanimadoAppear5 < scrollTop2) {
            animadoAppear5[i].style.opacity = 1;
        }
    }
}

let animadoAba = document.querySelectorAll(".animadoAba");

function mostrarScroll8(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAba.length; i++) {
        let alturaAnimadoAba = animadoAba[i].offsetTop;

        if(alturaAnimadoAba < scrollTop+400) {
            // if(i<=1){
                animadoAba[i].style.opacity = 1;
                animadoAba[i].classList.add("mostrarDesdeAbajo");
            // }else{
            //     animado[i].style.opacity = 1;
            // }
        }
    }
}



window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);
window.addEventListener('scroll', mostrarScroll4);
window.addEventListener('scroll', mostrarScroll5);
window.addEventListener('scroll', mostrarScroll6);
window.addEventListener('scroll', mostrarScroll7);
window.addEventListener('scroll', mostrarScroll8);
window.addEventListener('scroll', mostrarScroll9);