// var scene = document.getElementById('imagenPar');
// parallax = new Parallax(scene);

// document.addEventListener("mousemove",parallax);
// function parallax(e){
//     document.getElementById('#imagenPar',function(move){
//         var moving_value = move.getAttribute("data-value");
//         var x = e.clienteX * moving_value;
//         var y = e.clienteY * moving_value;

//         move.style.transform = "translateX(" + x + "px) tranlateY(" + y + "px)";
//         console.log("saludos desde el parallex");
//     };
//     )}

/********************** */
// document.addEventListener("mousemove",parallax);
// function parallax(e){
//     document.querySelectorAll(".object").forEach(function(move){
//         var moving_value = move.getAttribute("data-value");
//         var x = (e.clienteX * moving_value)/250;
//         var y = (e.clienteY * moving_value)/250;

//         move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
//         console.log("saludos desde el parallex");
//     });
//     }



// document.addEventListener("mousemove",parallax);
// function parallax(e){
//     this.querySelectorAll(".layer").forEach(Layer => {
//         const speed = layer.getAttribute('data-speed');
//         const x = (window.innerWidth - e.pageX*speed)/100;
//         const y = (window.innerHeight - e.pageY*speed)/100;

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//         console.log("saludos desde el parallex");
//     });
//     }


    document.addEventListener("mousemove",parallax);
    function parallax(e){
        document.querySelectorAll(".object").forEach(function(move){
            var moving_value = move.getAttribute("data-value");
            const x = (window.innerWidth - e.pageX*moving_value)/150;
            const y = (window.innerHeight - e.pageY*moving_value)/150;

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px) scale(1.4)";
            
            console.log("saludos desde el parallex");
        });
        }