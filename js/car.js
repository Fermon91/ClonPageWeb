let slidePosition = 0;
const slides = document.getElementsByClassName('carusel_item');
const totalSlides = slides.length;
let contador = 0;

document.
    getElementById('carusel_button-next')
    .addEventListener("click", function(){
        moveToNextSlide();
    });

document.
    getElementById('carusel_button-prev')
    .addEventListener("click", function(){
        moveToPrevSlide();
    });

document.
    getElementById('carusel_button-01')
    .addEventListener("click", function(){
        showImage1();
});

document.
    getElementById('carusel_button-02')
    .addEventListener("click", function(){
        showImage2();
});

// window.addEventListener("load", function(){
//     if(contador==0){
//         setTimeout('moveToNextSlide()',5000);
//         // console.log(contador);
//     }
// });

// $(window).load(function () {
//     while()
//     // setInterval('moveToNextSlide()',5000);
// });

// $(window).load(function () {
//     setInterval('moveToNextSlide()',10000);
// });

function updateSlidePosition(){
    for(let slide of slides){
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        slide.classList.remove('carusel_item--visible');
        slide.classList.add('carusel_item--hidden');
    }

    slides[slidePosition].classList.add('carusel_item--visible');   
}

function colorNum(){
    if(slidePosition = 0){
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        document.getElementById("carusel_button-01").style.color="red";
    }else{
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        document.getElementById("carusel_button-01").style.color="red";
    }
}



function moveToNextSlide(){
    // contador = 1;
    if(slidePosition == totalSlides - 1){
        document.getElementById("carusel_button-01").style.color="red";
        document.getElementById("carusel_button-02").style.color="white";
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        slidePosition = 0;
    }else{
        document.getElementById("carusel_button-02").style.color="red";
        document.getElementById("carusel_button-01").style.color="white";
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        slidePosition++;
    }
    updateSlidePosition();
    
    contador = 0;
    console.log(contador);
}

function moveToPrevSlide(){
    if(slidePosition == 0){
        document.getElementById("carusel_button-02").style.color="red";
        document.getElementById("carusel_button-01").style.color="white";
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        slidePosition = totalSlides -1;
    }else{
        document.getElementById("carusel_button-01").style.color="red";
        document.getElementById("carusel_button-02").style.color="white";
        // document.getElementById("imagenPar").style.transform="scale(1.3)";
        slidePosition--;
    }
    updateSlidePosition();  
}


function showImage1(){
    slidePosition = 0;
    document.getElementById("carusel_button-01").style.color="red";
    document.getElementById("carusel_button-02").style.color="white";
    // document.getElementById("imagenPar").style.transform="scale(1.3)";
    updateSlidePosition();
    // contador = 0;
}

function showImage2(){
    slidePosition = 1;
    document.getElementById("carusel_button-02").style.color="red";
    document.getElementById("carusel_button-01").style.color="white";
    // document.getElementById("imagenPar").style.transform="scale(1.3)";
    updateSlidePosition();
    // contador = 0;
}