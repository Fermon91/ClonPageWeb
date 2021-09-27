"use strict";

// $(document).ready(function()
// {
    // $("#menuReducido2").click(function()
    // {
    //     $("#maxHeight3").slideDown();
    //     console.log("saludos desde custom");
        // $("#liberadorSubmenu").hide();
        // $("#liberadorSubmenu2").hide();
        // $("#liberadorSubmenu3").hide();
        // $("#liberadorSubmenu4").hide();
        // $("#liberadorSubmenu5").hide();
        // $("#liberadorSubmenu6").hide();
        // // $("#liberadorSubmenu").fadeIn(2000);
        // // $("#liberadorSubmenu2").fadeIn(3000);
        // // $("#liberadorSubmenu3").fadeIn(4000);
        // // $("#liberadorSubmenu4").fadeIn(5000);
        // // $("#liberadorSubmenu5").fadeIn(6000);
        // // $("#liberadorSubmenu6").fadeIn(7000);
        // $("#liberadorSubmenu").fadeIn(3000);
        // $("#liberadorSubmenu2").fadeIn(3000);
        // $("#liberadorSubmenu3").fadeIn(3000);
        // $("#liberadorSubmenu4").fadeIn(3000);
        // $("#liberadorSubmenu5").fadeIn(3000);
        // $("#liberadorSubmenu6").fadeIn(3000);
        // console.log("saludos desde fadein");
        // document.getElementById("submenu").animate([
        //     // keyframes
        //     { animate: 'animate__fadeIn' },
        //   ], {
        //     // timing options
        //     duration: 1000,
        //     // iterations: Infinity
        //   });
    // });

    // $("#quitarMenuReducido2").click(function()
    // {
       
    //     $("#liberadorSubmenu").fadeOut(2000);
    //     $("#liberadorSubmenu2").fadeOut(3000);
    //     $("#liberadorSubmenu3").fadeOut(4000);
    //     $("#liberadorSubmenu4").fadeOut(5000);
    //     $("#liberadorSubmenu5").fadeOut(6000);
    //     $("#liberadorSubmenu6").fadeOut(7000);
    //     $("#maxHeight3").slideUp();
    //     console.log("saludos desde fadeOut");
        // document.getElementById("submenu").animate([
        //     // keyframes
        //     { animate: 'animate__fadeIn' },
        //   ], {
        //     // timing options
        //     duration: 1000,
        //     // iterations: Infinity
        //   });
    // });
    // $("#menuReducido2").click(function()
    // {

    // }

    
    // let contSub=0;
    // let contSub2=0;
    // let contSub3=0;
    // let contSub4=0;
    // let contSub5=0;
    // let contSub6=0;


    // var mqr = window.matchMedia( "(max-width: 768px)" );
    // mqr.addListener(function(){
    //     $("#liberadorSubmenu").click(function()
    //     {
    //         if(contSub==0){
    //             $("#liberarSubmenu").slideDown();
    //             console.log("saludos desde SUB custom abierto");
    //             contSub=contSub+1;
    //             $("#liberarSubmenu6").slideUp();
    //         }else{
    //             $("#liberarSubmenu").slideUp();
    //             contSub=0;
    //         }
    //     });
    //     $("#liberadorSubmenu2").click(function()
    //     {
    //         if(contSub2==0){
    //             $("#liberarSubmenu2").slideDown();
    //             console.log("saludos desde SUB 2 custom abierto");
    //             contSub2=contSub2+1;
    //         }else{
    //             $("#liberarSubmenu2").slideUp();
    //             contSub2=0;
    //         }
    //     });
    //     $("#liberadorSubmenu6").click(function()
    //     {
    //         if(contSub6==0){
    //             $("#liberarSubmenu6").slideDown();
    //             console.log("saludos desde SUB custom abierto");
    //             contSub6=contSub6+1;
    //         }else{
    //             $("#liberarSubmenu6").slideUp();
    //             contSub6=0;
    //         }
    //     });
    // });

    // mqh();
// });

/*********************************** */

document.addEventListener("DOMContentLoaded", function(e) {
    
    // medias (as an array to make it a little easier to manage)
    var mqlr = [
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(min-width: 769px) and (max-width: 2000px)"),
    ]
    
    // event listeners
    for (var i=0; i<mqlr.length; i++){
      mqlr[i].addListener(mqj)
    }
    
    //matches methods
    function mqj(){
        let contSub=0;
        let contSub2=0;
        let contSub3=0;
        let contSub4=0;
        let contSub5=0;
        let contSub6=0;
      if (mqlr[0].matches) {
        $("#liberadorSubmenu").click(function()
        {
            if(contSub==0){
                $("#liberarSubmenu").slideDown();
                console.log("saludos desde SUB liberarSubmenu slideDown");
                console.log("contador igual a ");
                console.log(contSub);
                contSub=contSub+1;
            }else{
                $("#liberarSubmenu").slideUp();
                console.log("saludos desde SUB liberarSubmenu slideUp");
                console.log("contador igual a ");
                console.log(contSub);
                contSub=0;
            }
        });
        $("#liberadorSubmenu2").click(function()
        {
            if(contSub2==0){
                $("#liberarSubmenu2").slideDown();
                console.log("saludos desde SUB 2 liberarSubmenu slideDown");
                contSub2=contSub2+1;
            }else{
                $("#liberarSubmenu2").slideUp();
                console.log("saludos desde SUB 2 liberarSubmenu slideUp");
                contSub2=0;
            }
        });
        $("#liberadorSubmenu3").click(function()
        {
            if(contSub3==0){
                $("#liberarSubmenu3").slideDown();
                console.log("saludos desde SUB 3 liberarSubmenu slideDown");
                contSub3=contSub3+1;
            }else{
                $("#liberarSubmenu3").slideUp();
                console.log("saludos desde SUB 3 liberarSubmenu slideUp");
                contSub3=0;
            }
        });
        $("#liberadorSubmenu4").click(function()
        {
            if(contSub4==0){
                $("#liberarSubmenu4").slideDown();
                console.log("saludos desde SUB 4 liberarSubmenu slideDown");
                contSub4=contSub4+1;
            }else{
                $("#liberarSubmenu4").slideUp();
                console.log("saludos desde SUB 4 liberarSubmenu slideUp");
                contSub4=0;
            }
        });
        $("#liberadorSubmenu6").click(function()
        {
            if(contSub6==0){
                $("#liberarSubmenu6").slideDown();
                console.log("saludos desde SUB custom abierto");
                contSub6=contSub6+1;
            }else{
                $("#liberarSubmenu6").slideUp();
                contSub6=0;
            }
        });

        // se bloquea
      } else if (mqlr[1].matches) {
        $("#liberarSubmenu").slideUp();
        $("#liberarSubmenu2").slideUp();
        $("#liberarSubmenu3").slideUp();
        $("#liberarSubmenu4").slideUp();
        $("#liberarSubmenu6").slideUp();
        // contSub=0;
        // contSub2=0;
        // contSub3=0;
        // contSub4=0;
        // contSub5=0;
        // contSub6=0;
        $("#liberadorSubmenu6").click(function()
        {
            return 0;
        });

      } 
      console.log("window.innerWidth: " + window.innerWidth);
    }

    // call once on load
    mqj();
  });