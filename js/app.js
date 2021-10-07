// $("#botonIcon").click(function(){
//   #probeChangeClass.style.background = "red"
//   // Asigna o desasigna la clase black
//   // $("#probeChangeClass").toggleClass('black');
// });
  
// let lastScroll = $(window).scrollTop();

// $(window).scroll(function() {
//    const currentScroll = $(window).scrollTop(); 
//    if (currentScroll > lastScroll){
//       // scroll down
//       $('#maxHeight').style.background-color="black";
//    } else {
//       // scroll up
//       $('#maxHeight').style.background-color="transparent";
//    }
   
//    // scroll update
//    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
// });

// var lastScrollTop = 0;

// window.addEventListener("scroll", function(){
//     var st = window.pageYOffset || document.documentElement.scrollTop; 
//     if (st = lastScrollTop){
//       console.log('para abajo');
//       console.log('valor st');
//       console.log(st);
//       document.getElementById('maxHeight2').style.background-color="transparent";
//     } else {
//       console.log('para arriba');
//       document.getElementById('maxHeight2').style.background-color="black";
//       console.log('valor st');
//       console.log(st);
//     }
//     //lastScrollTop = st;
//  }, false);

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("MenuChangeColor",window.scrollY>0);
});


// window.addEventListener("scroll",function(){
//     var header = document.querySelector("header");
//     var animado22 = document.querySelector(".animado2");
//     var animadoArrowToUP = document.querySelector("#ButtonToTopFixedRight2");
//     let scrollTop15 = document.documentElement.scrollTop;
//     let alturaAnimado22 = animado22.offsetTop;
//     header.classList.toggle("MenuChangeColor",window.scrollY>0);
//     // animadoArrowToUP.classList.toggle("mostrarDesdeAbajoArrow",alturaAnimado22 < scrollTop15+300);
//     animadoArrowToUP.classList.toggle("#ButtonToTopFixedRight2",window.scrollY>0);
// });


window.addEventListener("scroll",function(){
    var header = document.querySelector(".ButtonToTopFixedRight");
    //header.classList.toggle("mostrarDesdeAbajoArrow2",window.scrollY>0);
    header.classList.toggle("mostrarDesdeAbajoArrow",window.scrollY>200);
});


// document.addEventListener('DOMContentLoaded', ()=>{

// let buttonRightHide = document.getElementById("HidePanel");

// buttonRightHide.addEventListener('click',function(){
//     console.log('saludos desde hide')
//     document.getElementById('PanelFixRight').style.visibility = "hidden";
// })

// });

let buttonRightHide = document.getElementById("HidePanel");
buttonRightHide.addEventListener('click',function(){
    console.log('saludos desde hide')
    PanelFixRight.classList.add('hide');
})



// document.addEventListener('DOMContentLoaded', ()=>{
//     let width = window.innerWidth;
//     let resolucion = $(window).width();
//     if (resolucion >= 769) {
//         $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").show();$("#liberarSubmenu1").addClass('disabled');},function(){$("#liberarSubmenu1").hide()});
//         $("#liberarSubmenu1").hover(function(){$("#liberarSubmenu1").show()},function(){$("#liberarSubmenu1").hide()});

//         // $("#liberadorSubmenu1").hover(function(){$(liberarSubmenu1).addClass('open')},function(){$(liberarSubmenu1).removeClass('open')});
//      }
//      else {
//          break;
//         // $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").hide()});
//         // $( "#liberarSubmenu1" ).hover(function(){$("#liberarSubmenu1").show()},function(){$("#liberarSubmenu1").show()});
//         // $("#liberadorSubmenu1").hover();
//         // $( "#liberarSubmenu1" ).hover();
//         // $("#liberadorSubmenu1").hover(function(){$(liberarSubmenu1).removeClass('open')},function(){$(liberarSubmenu1).addClass('open')});
//      }

    
//     });


// document.addEventListener('DOMContentLoaded', ()=>{
//     var width = window.innerWidth;
//     var resolucion = $(window).width();
//     while (resolucion >= 769){
//         $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").show();$("#liberarSubmenu1").addClass('disabled');},function(){$("#liberarSubmenu1").hide()});
//         $("#liberarSubmenu1").hover(function(){$("#liberarSubmenu1").show()},function(){$("#liberarSubmenu1").hide()});
//         }
//         // else {
//         // // $("#liberadorSubmenu1").focus(function(){$("#liberarSubmenu1").hide()});
//         // // $( "#liberarSubmenu1" ).hover(function(){$("#liberarSubmenu1").show()}),function(){$("#liberarSubmenu1").show()};
//         // }

    
//     });