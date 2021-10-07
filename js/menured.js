let button = document.getElementById("menuReducido2");
let button2 = document.getElementById("quitarMenuReducido2");

var ancho = window.innerWidth;

// var x = window.matchMedia('(min-width:769px) and (max-width: 992px)');
// aparcermostrar(x) // Call listener function at run time
// x.addListener(aparcermostrar) // Attach listener function on state changes

if(ancho>=769){
    // ancho.addListener(aparcermostrar)
    // console.log(ancho);
    // var x = window.matchMedia("(max-width: 769px)")
    // aparcermostrar(x) // Call listener function at run time
    // x.addListener(aparcermostrar)
    // aparcermostrar(ancho) // Call listener function at run time
    // ancho.addListener(aparcermostrar)
}


// var y = window.matchMedia("(max-width: 768px)")
// desaparcermostrar(y) // Call listener function at run time
// y.addListener(desaparcermostrar) // Attach listener function on state changes

button.addEventListener('click',function(){
    console.log('saludos')
    // let x2 = document.getElementsByClassName('helionHeight');
    // x2.style.backgroundColor = 'red';
        $("#maxHeight3").slideDown();
        $("#liberadorSubmenu1").hide();
        $("#liberadorSubmenu2").hide();
        $("#liberadorSubmenu3").hide();
        $("#liberadorSubmenu4").hide();
        $("#liberadorSubmenu5").hide();
        $("#liberadorSubmenu6").hide();
        // $("#liberadorSubmenu").fadeIn(2000);
        // $("#liberadorSubmenu2").fadeIn(3000);
        // $("#liberadorSubmenu3").fadeIn(4000);
        // $("#liberadorSubmenu4").fadeIn(5000);
        // $("#liberadorSubmenu5").fadeIn(6000);
        // $("#liberadorSubmenu6").fadeIn(7000);
        $("#liberadorSubmenu1").fadeIn(1000);
        $("#liberadorSubmenu2").fadeIn(1200);
        $("#liberadorSubmenu3").fadeIn(1400);
        $("#liberadorSubmenu4").fadeIn(1600);
        $("#liberadorSubmenu5").fadeIn(1800);
        $("#liberadorSubmenu6").fadeIn(2000);

    // document.getElementsByClassName('helionHeight').style.backgroundColor = 'red';
    document.getElementById('mostrar3').style.display = "block";
    document.getElementById('desaparcer2').style.display = "none";
    document.getElementById('esondidaX').style.display = "block";
    document.getElementById('rompedorColumnas2').style.display = "block";
    document.getElementById('hideSubMenu').style.display = "block";
    // document.getElementById('mostrar2').style.width = "auto";
    document.getElementById('mostrar3').style.width = "250"+"px";
    // document.getElementById('mostrar2').style.font-size = "6";
    // document.getElementById('maxHeight2').style.height = "200px";
    // document.getElementById('maxHeight2').style.min-height == "1000px";  
})




button2.addEventListener('click',function(){
    console.log('adios')
    // let x2 = document.getElementsByClassName('helionHeight');
    // x2.style.backgroundColor = 'red';
    // document.getElementsByClassName('helionHeight').style.backgroundColor = 'red';
    $("#SubliberarSubmenu1").slideUp();
    $("#SubliberarSubmenu2").slideUp();
    $("#liberarSubmenu1").slideUp();
    $("#liberarSubmenu2").slideUp();
    $("#liberarSubmenu3").slideUp();
    $("#liberarSubmenu4").slideUp();
    $("#liberarSubmenu6").slideUp();
    $("#liberadorSubmenu6").fadeOut(1000);
    $("#liberadorSubmenu5").fadeOut(1200);
    // $("#liberadorSubmenu5").hide();
    $("#liberadorSubmenu4").fadeOut(1400);
    // $("#liberadorSubmenu4").hide();
    $("#liberadorSubmenu3").fadeOut(1600);
    // $("#liberadorSubmenu3").hide();
    $("#liberadorSubmenu2").fadeOut(1800);
    // $("#liberadorSubmenu2").hide();
    $("#liberadorSubmenu").fadeOut(2000);
    // $("#liberadorSubmenu").hide();
    // $("#maxHeight3").delay(4000);
    setTimeout(() => {
    document.getElementById('mostrar3').style.display = "none";
    document.getElementById('desaparcer2').style.display = "block";
    document.getElementById('esondidaX').style.display = "none";
    document.getElementById('rompedorColumnas2').style.display = "none";
    document.getElementById('hideSubMenu').style.display = "none";
    document.getElementById('mostrar3').style.width = "auto";
    // document.getElementById('mostrar2').style.font-size = "3";
    $("#maxHeight3").slideUp();
    $("#liberadorSubmenu").fadeIn();
    $("#liberadorSubmenu2").fadeIn();
    $("#liberadorSubmenu3").fadeIn();
    $("#liberadorSubmenu4").fadeIn();
    $("#liberadorSubmenu5").fadeIn();
    $("#liberadorSubmenu6").fadeIn(); 
    }, 1500);
    
    // document.getElementById('maxHeight3').style.display = "none";
    // 
})



function aparcermostrar(x) {
    document.getElementById('esondidaX').style.display = "none";
    document.getElementById('mostrar2').style.display = "block";
    document.getElementById('rompedorColumnas2').style.display = "none"; 
    document.getElementById('desaparcer2').style.display = "block"; 
  }

function desaparcermostrar(y) {
    document.getElementById('esondidaX').style.display = "none";
    document.getElementById('mostrar2').style.display = "none";
}


/*----------------------------------------------*/

document.addEventListener("DOMContentLoaded", function(e) {
      
    // medias (as an array to make it a little easier to manage)
    var mqls = [
      // window.matchMedia("(max-width: 768px)"),
      // window.matchMedia("(min-width: 769px) and (max-width: 864px)"),
      // window.matchMedia("(min-width: 865px) and (max-width: 960px)"),
      // window.matchMedia("(min-width: 961px) and (max-width: 2000px)"),
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(min-width: 769px) and (max-width: 864px)"),
      window.matchMedia("(min-width: 865px) and (max-width: 1099px)"),
      window.matchMedia("(min-width: 1100px) and (max-width: 2000px)"),
    ]
    
    // event listeners
    for (var i=0; i<mqls.length; i++){
      mqls[i].addListener(mqh)
    }
    
    // matches methods
    function mqh(){
      if (mqls[0].matches) {
        // console.log("CALLBACK (max-width: 400px)");
        document.getElementById('mostrar2').style.display = "none";
        document.getElementById('mostrar3').style.display = "none";
        document.getElementById('liberadorSubmenu7').style.display = "none";
        document.getElementById('liberadorSubmenu5').style.display = "block";
        document.getElementById('liberadorSubmenu6').style.display = "block";
        document.getElementById('maxHeight3').style.display = "none";
        // document.getElementById('heightEnc').style.height = "30px";
      } else if (mqls[1].matches) {
        document.getElementById('mostrar2').style.display = "none";
        document.getElementById('mostrar3').style.display = "none";
        document.getElementById('liberadorSubmenu77').style.display = "block";
        document.getElementById('liberadorSubmenu55').style.display = "none";
        document.getElementById('liberadorSubmenu66').style.display = "none";
        document.getElementById('SubsubmenuHid11').style.display = "block";
        document.getElementById('maxHeight3').style.display = "none";

        // console.log("CALLBACK (max-width: 900px)");
        document.getElementById('esondidaX').style.display = "none";
        document.getElementById('mostrar2').style.display = "block";
        document.getElementById('mostrar3').style.display = "none";
        document.getElementById('rompedorColumnas2').style.display = "none"; 
        document.getElementById('desaparcer2').style.display = "block";
        document.getElementById('hideSubMenu').style.display = "none";
        document.getElementById('mostrar2').style.width = "auto";
        
      } else if (mqls[2].matches) {
        document.getElementById('liberadorSubmenu77').style.display = "block";
        document.getElementById('liberadorSubmenu55').style.display = "block";
        document.getElementById('liberadorSubmenu66').style.display = "none";
        document.getElementById('SubsubmenuHid11').style.display = "none";
        document.getElementById('maxHeight3').style.display = "none";

        document.getElementById('esondidaX').style.display = "none";
        document.getElementById('mostrar2').style.display = "block";
        document.getElementById('mostrar3').style.display = "none";
        document.getElementById('rompedorColumnas2').style.display = "none"; 
        document.getElementById('desaparcer2').style.display = "block";
        document.getElementById('hideSubMenu').style.display = "none";
        document.getElementById('mostrar2').style.width = "auto";

        

      }else if (mqls[3].matches) {
        document.getElementById('liberadorSubmenu77').style.display = "none";
        document.getElementById('liberadorSubmenu55').style.display = "block";
        document.getElementById('liberadorSubmenu66').style.display = "block";
        document.getElementById('maxHeight3').style.display = "none";

        document.getElementById('esondidaX').style.display = "none";
        document.getElementById('mostrar2').style.display = "block";
        document.getElementById('mostrar3').style.display = "none";
        document.getElementById('rompedorColumnas2').style.display = "none"; 
        document.getElementById('desaparcer2').style.display = "block";
        document.getElementById('hideSubMenu').style.display = "none";
        document.getElementById('mostrar2').style.width = "auto";
      }
      // console.log("window.innerWidth: " + window.innerWidth);
    }

    // call once on load
    mqh();
  });