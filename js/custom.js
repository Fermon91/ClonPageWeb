"use strict";



/*********************************** */

document.addEventListener("DOMContentLoaded", function(e) {
    let button = document.getElementById("menuReducido2");
    let button2 = document.getElementById("quitarMenuReducido2");

    //estupido aqui empieza
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
        
        

        //aqui termina invecil
      if (mqlr[0].matches) {
        let contSub;
        let contSub2;
        let contSub3;
        let contSub4;
        let contSub5;
        let contSub6;
        let contSubSub1;
        let contSubSub2;
        let contSubSub3;
        let contSubSub4;
        let contSubSub5;
        $("#liberadorSubmenu1").click(function()
        {
            if(contSub==0){
                // for(let x=1;x<=2;x++){
                //     let ValorVentanas2 = "#SubliberarSubmenu"+x;
                //     console.log("ValorVentanas es: ");
                //     console.log(ValorVentanas2);
                //     $(ValorVentanas2).slideUp();
                //     // var "contSub"+w =0;
                //     contSubSub1=0;
                //     contSubSub2=0;
                // }
                // for(let w=2;w<=6;w++){
                //     let ValorVentanas = "#liberarSubmenu"+w;
                //     console.log("ValorVentanas es: ");
                //     console.log(ValorVentanas);
                //     $(ValorVentanas).slideUp();
                //     // var "contSub"+w =0;
                //     contSub2=0;
                //     contSub3=0;
                //     contSub4=0;
                //     contSub5=0;
                //     contSub6=0;
                // }
                contSub2=0;
                contSub3=0;
                contSub4=0;
                contSub5=0;
                contSub6=0;
                contSubSub1=0;
                contSubSub2=0;
                contSubSub3=0;
                contSubSub4=0;
                contSubSub5=0;
                // $("#flechaAlaIzqId2").show();
                $("#SubliberarSubmenu1").slideUp();
                $("#SubliberarSubmenu2").slideUp();
                $("#SubliberarSubmenu3").slideUp();
                $("#SubliberarSubmenu4").slideUp();
                $("#SubliberarSubmenu5").slideUp();
                $("#liberarSubmenu2").slideUp();
                $("#liberarSubmenu3").slideUp();
                $("#liberarSubmenu4").slideUp();
                $("#liberarSubmenu5").slideUp();
                $("#liberarSubmenu6").slideUp();
                $("#liberarSubmenu1").slideDown();
                // $('#flechaAlaIzqId2').style.opacity = 1;
                console.log("saludos desde SUB liberarSubmenu1 slideDown");
                console.log("contador igual a ");
                console.log(contSub);
                contSub=1;
            }else{
                $("#liberarSubmenu1").slideUp();
                // $("#flechaAlaIzqId2").hide();
                // $('#flechaAlaIzqId2').style.opacity = 0;
                console.log("saludos desde SUB liberarSubmenu1 slideUp");
                console.log("contador igual a ");
                console.log(contSub);
                contSub=0;
            }
        });

        $("#liberadorSubmenu2").click(function()
        {
            // for(let x=1;x<=2;x++){
            //     let ValorVentanas2 = "#SubliberarSubmenu"+x;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas2);
            //     $(ValorVentanas2).slideUp();
            //     // var "contSub"+w =0;
            //     contSubSub1=0;
            //     contSubSub2=0;
            // }
            
            // for(let w=2;w<=6;w++){
            //     let ValorVentanas = "#liberarSubmenu"+w;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas);
            //     $(ValorVentanas).slideUp();
            // }
            if(contSub2==0){
                $("#flechaAlaDerecha2").show();
                $("#liberarSubmenu2").slideDown();
                console.log("saludos desde SUB 2 liberarSubmenu slideDown");
                contSub2=1;
                //INICIA sub SUb MENU
                // let contSubSub1=0;
                // let contSubSub2=0;
                // $("#SubliberadorSubmenu1").click(function()
                //     {
                //         $("#SubliberarSubmenu2").slideUp();
                //         contSubSub2=0;
                //         if(contSubSub1==0){
                //             $("#SubliberarSubmenu1").slideDown();
                //             console.log("saludos desde SUB SUB 2 liberarSubmenu slideDown");
                //             contSubSub1=contSubSub1+1;
                //             console.log("contSubSub1 era cero");
                //             console.log(contSubSub1);
                //         }else{
                //             $("#SubliberarSubmenu1").slideUp();
                //             console.log("saludos desde SUB SUB 2 liberarSubmenu slideUp");
                //             contSubSub1=0;
                //             console.log("contSubSub1 es uno");
                //             console.log(contSubSub1);
                //         }
                //     });
            
                // $("#SubliberadorSubmenu2").click(function()
                // {
                //     $("#SubliberarSubmenu1").slideUp();
                //     contSubSub1=0;
                //     if(contSubSub2==0){
                //         $("#SubliberarSubmenu2").slideDown();
                //         console.log("saludos desde SUB 2 liberarSubmenu slideDown");
                //         contSubSub2=contSubSub2+1;
                //     }else{
                //         $("#SubliberarSubmenu2").slideUp();
                //         console.log("saludos desde SUB 2 liberarSubmenu slideUp");
                //         contSubSub2=0;
                //     }
                // });
                contSub=0;
                contSub3=0;
                contSub4=0;
                contSub5=0;
                contSub6=0;
                contSubSub3=0;
                contSubSub4=0;
                contSubSub5=0;
                $("#SubliberarSubmenu3").slideUp();
                $("#SubliberarSubmenu4").slideUp();
                $("#SubliberarSubmenu5").slideUp();
                $("#liberarSubmenu1").slideUp();
                $("#liberarSubmenu3").slideUp();
                $("#liberarSubmenu4").slideUp();
                $("#liberarSubmenu5").slideUp();
                $("#liberarSubmenu6").slideUp();
                
            }else{
                $("#flechaAlaDerecha2").hide();
                $("#SubliberarSubmenu1").slideUp();
                $("#SubliberarSubmenu2").slideUp();
                $("#liberarSubmenu2").slideUp();
                console.log("saludos desde SUB 2 liberarSubmenu slideUp");
                contSub2=0;
                // contSubSub1=0;
                // contSubSub2=0;
            }
        });

        $("#liberadorSubmenu3").click(function()
        {
            // for(let x=1;x<=2;x++){
            //     let ValorVentanas2 = "#SubliberarSubmenu"+x;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas2);
            //     $(ValorVentanas2).slideUp();
            //     // var "contSub"+w =0;
            //     contSubSub1=0;
            //     contSubSub2=0;
            // }
            
            // for(let w=2;w<=6;w++){
            //     let ValorVentanas = "#liberarSubmenu"+w;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas);
            //     $(ValorVentanas).slideUp();
            //     // "contSub"+w ==0;
            // }
            if(contSub3==0){
                $("#liberarSubmenu3").slideDown();
                console.log("saludos desde SUB 3 liberarSubmenu slideDown");
                contSub3=1;
                $("#SubliberarSubmenu1").slideUp();
                $("#SubliberarSubmenu2").slideUp();
                $("#SubliberarSubmenu3").slideUp();
                $("#SubliberarSubmenu4").slideUp();
                $("#SubliberarSubmenu5").slideUp();
                $("#liberarSubmenu1").slideUp();
                $("#liberarSubmenu2").slideUp();
                $("#liberarSubmenu4").slideUp();
                $("#liberarSubmenu5").slideUp();
                $("#liberarSubmenu6").slideUp();
                contSub=0;
                contSub2=0;
                contSub4=0;
                contSub5=0;
                contSub6=0;
                contSubSub1=0;
                contSubSub2=0;
                contSubSub3=0;
                contSubSub4=0;
                contSubSub5=0;
                // $("#flechaAlaIzqId2").show();
                
            }else{
                $("#liberarSubmenu3").slideUp();
                console.log("saludos desde SUB 3 liberarSubmenu slideUp");
                contSub3=0;
            }
        });
        $("#liberadorSubmenu4").click(function()
        {
            // for(let x=1;x<=2;x++){
            //     let ValorVentanas2 = "#SubliberarSubmenu"+x;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas2);
            //     $(ValorVentanas2).slideUp();
            //     // var "contSub"+w =0;
            //     contSubSub1=0;
            //     contSubSub2=0;
            // }
            // for(let w=2;w<=6;w++){
            //     let ValorVentanas = "#liberarSubmenu"+w;
            //     console.log("ValorVentanas es: ");
            //     console.log(ValorVentanas);
            //     $(ValorVentanas).slideUp();
            //     "contSub"+w ==0;
            //     contSub=0;
            //     contSub2=0;
            //     contSub3=0;
            //     contSub5=0;
            //     contSub6=0;
            // }
            if(contSub4==0){
                console.log("saludos desde SUB 4 liberarSubmenu slideDown");
                $("#liberarSubmenu4").slideDown();
                contSub4=1;
                $("#SubliberarSubmenu1").slideUp();
                $("#SubliberarSubmenu2").slideUp();
                 $("#liberarSubmenu1").slideUp();
                $("#liberarSubmenu2").slideUp();
                $("#liberarSubmenu3").slideUp();
                $("#liberarSubmenu5").slideUp();
                $("#liberarSubmenu6").slideUp();
                contSub1=0;
                contSub2=0;
                contSub3=0;
                contSub5=0;
                contSub6=0; 
                contSubSub1=0;
                contSubSub2=0;
            }else{
                $("#SubliberarSubmenu5").slideUp();
                $("#SubliberarSubmenu4").slideUp();
                $("#SubliberarSubmenu3").slideUp();
                $("#liberarSubmenu4").slideUp();
                console.log("saludos desde SUB 4 liberarSubmenu slideUp");
                contSub4=0;
            }
        });

        $("#liberadorSubmenu6").click(function()
        {
            if(contSub6==0){
                
                $("#liberarSubmenu6").slideDown();
                $("#SubliberarSubmenu1").slideUp();
                $("#SubliberarSubmenu2").slideUp();
                $("#SubliberarSubmenu3").slideUp();
                $("#SubliberarSubmenu4").slideUp();
                $("#SubliberarSubmenu5").slideUp();
                $("#liberarSubmenu1").slideUp();
                $("#liberarSubmenu2").slideUp();
                $("#liberarSubmenu3").slideUp();
                $("#liberarSubmenu4").slideUp();
                $("#liberarSubmenu5").slideUp();
                contSub6=1;
                contSub1=0;
                contSub2=0;
                contSub3=0;
                contSub4=0;
                contSub5=0;
                contSubSub1=0;
                contSubSub2=0;
                contSubSub3=0;
                contSubSub4=0;
                contSubSub5=0;
                console.log("saludos desde SUB custom abierto");
                contSub6=+1;
            }else{
                $("#liberarSubmenu6").slideUp();
                contSub6=0;
            }
        });
        // if(contSubSub==0){
        //     $("#liberarSubmenu").slideDown();
        //     // $('#flechaAlaIzqId2').style.opacity = 1;
        //     console.log("saludos desde SUB liberarSubmenu slideDown");
        //     console.log("contador igual a ");
        //     console.log(contSubSub);
        //     contSub=contSubSub+1;
        // }else{
        //     $("#liberarSubmenu").slideUp();
        //     // $('#flechaAlaIzqId2').style.opacity = 0;
        //     console.log("saludos desde SUB liberarSubmenu slideUp");
        //     console.log("contador igual a ");
        //     console.log(contSub);
        //     contSubSub=0;
        // }

        $("#SubliberadorSubmenu1").click(function()
                    {
                        $("#SubliberarSubmenu2").slideUp();
                        contSubSub2=0;
                        if(contSubSub1==0){
                            $("#SubliberarSubmenu1").slideDown();
                            console.log("saludos desde SUB SUB 2 liberarSubmenu slideDown");
                            contSubSub1=contSubSub1+1;
                            console.log("contSubSub1 era cero");
                            console.log(contSubSub1);
                        }else{
                            $("#SubliberarSubmenu1").slideUp();
                            console.log("saludos desde SUB SUB 2 liberarSubmenu slideUp");
                            contSubSub1=0;
                            console.log("contSubSub1 es uno");
                            console.log(contSubSub1);
                        }
        });
            
        $("#SubliberadorSubmenu2").click(function()
        {
            $("#SubliberarSubmenu1").slideUp();
            contSubSub1=0;
            if(contSubSub2==0){
                $("#SubliberarSubmenu2").slideDown();
                console.log("saludos desde SUB 2 liberarSubmenu slideDown");
                contSubSub2=contSubSub2+1;
            }else{
                $("#SubliberarSubmenu2").slideUp();
                console.log("saludos desde SUB 2 liberarSubmenu slideUp");
                contSubSub2=0;
            }
        });

        $("#SubliberadorSubmenu3").click(function()
        {
            $("#SubliberarSubmenu4").slideUp();
            $("#SubliberarSubmenu5").slideUp();
            contSubSub4=0;
            contSubSub5=0;
            if(contSubSub3==0){
                $("#SubliberarSubmenu3").slideDown();
                console.log("saludos desde SUB 3 liberarSubmenu slideDown");
                contSubSub3=contSubSub3+1;
            }else{
                $("#SubliberarSubmenu3").slideUp();
                console.log("saludos desde SUB 3 liberarSubmenu slideUp");
                contSubSub3=0;
            }
        });

        $("#SubliberadorSubmenu4").click(function()
        {
            $("#SubliberarSubmenu3").slideUp();
            $("#SubliberarSubmenu5").slideUp();
            contSubSub3=0;
            contSubSub5=0;
            if(contSubSub4==0){
                $("#SubliberarSubmenu4").slideDown();
                console.log("saludos desde SUB 4 liberarSubmenu slideDown");
                contSubSub4=contSubSub4+1;
            }else{
                $("#SubliberarSubmenu4").slideUp();
                console.log("saludos desde SUB 4 liberarSubmenu slideUp");
                contSubSub4=0;
            }
        });

        $("#SubliberadorSubmenu5").click(function()
        {
            $("#SubliberarSubmenu3").slideUp();
            $("#SubliberarSubmenu4").slideUp();
            contSubSub3=0;
            contSubSub4=0;
            if(contSubSub5==0){
                $("#SubliberarSubmenu5").slideDown();
                console.log("saludos desde SUB 5 liberarSubmenu slideDown");
                contSubSub5=contSubSub5+1;
            }else{
                $("#SubliberarSubmenu5").slideUp();
                console.log("saludos desde SUB 5 liberarSubmenu slideUp");
                contSubSub5=0;
            }
        });

        button.addEventListener('click',function(){
            contSub=0;
            contSub2=0;
            contSub3=0;
            contSub4=0;
            contSub5=0;
            contSub6=0;
            contSubSub1=0;
            contSubSub2=0;
            contSubSub3=0;
            contSubSub4=0;
            contSubSub5=0;
            // $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").hide()});
            // $("#liberadorSubmenu1").active(function(){$("#liberarSubmenu1").show()});
            // $("#liberadorSubmenu1").focus(function(){$("#liberarSubmenu1").show()});
            // $( "#liberarSubmenu1" ).hover(function(){$("#liberarSubmenu1").hide()});
        // $( "#liberarSubmenu1" ).hover(function(){$("#liberarSubmenu1").hide()});
        // $("#liberadorSubmenu1").hover(no-hover);
        // $("#liberarSubmenu1").hover(function(){$("#liberarSubmenu1").hide()},function(){$("#liberarSubmenu1").hide()});
        // $("#liberadorSubmenu1").hover("normal", function() { $(this).remove($("#liberarSubmenu1").show()); } );
        });

        button2.addEventListener('click',function(){
            // contSub=0;
            // contSub2=0;
            // contSub3=0;
            // contSub4=0;
            // contSub5=0;
            // contSub6=0;
            // contSubSub1=0;
            // contSubSub2=0;
            // contSubSub3=0;
            // contSubSub4=0;
            // contSubSub5=0;
            // $("#liberarSubmenu1").slideUp("normal", function() { $(this).remove(); } );
            $("#liberarSubmenu6").slideUp();
            $("#SubliberarSubmenu5").slideUp();
            $("#SubliberarSubmenu4").slideUp();
            $("#liberarSubmenu4").slideUp();
            $("#SubliberarSubmenu3").slideUp();
            $("#liberarSubmenu3").slideUp();
            $("#SubliberarSubmenu2").slideUp();
            $("#liberarSubmenu2").slideUp();
            $("#SubliberarSubmenu1").slideUp();
            $("#liberarSubmenu1").slideUp();
            // $("#liberadorSubmenu1").hover("normal", function() { $(this).addClass(); } );
            // $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").show();$("#liberarSubmenu1").addClass('disabled');},function(){$("#liberarSubmenu1").hide()});
            // $("#liberarSubmenu1").hover(function(){$("#liberarSubmenu1").show()},function(){$("#liberarSubmenu1").hide()});
            // $("#liberarSubmenu1").fadeIn();
            // $("#liberarSubmenu2").fadeIn();
            // $("#liberarSubmenu3").fadeIn();
            // $("#liberarSubmenu4").fadeIn();
            // $("#liberarSubmenu6").fadeIn();
            // $("#SubliberarSubmenu1").fadeIn();
            // $("#SubliberarSubmenu2").fadeIn();
        });


        // se bloquea
      } else if (mqlr[1].matches) {
        // $("#liberarSubmenu1").slideUp();
        $("#SubliberarSubmenu1").slideUp();
        $("#SubliberarSubmenu2").slideUp();
        $("#SubliberarSubmenu3").slideUp();
        $("#SubliberarSubmenu4").slideUp();
        $("#SubliberarSubmenu5").slideUp();
        $("#liberarSubmenu2").slideUp();
        $("#liberarSubmenu3").slideUp();
        // document.getElementById('liberarSubmenu2').style.display = "block";
        // document.getElementById('liberarSubmenu3').style.display = "block";
        $("#liberarSubmenu2").slideUp();
        $("#liberarSubmenu3").slideUp();
        $("#liberarSubmenu4").slideUp();
        $("#liberarSubmenu6").slideUp();
        // $("#liberarSubmenu1").slideUp("normal", function() { $(this).remove(); } );
        // document.getElementById("submenu").disabled = true;
        // $("#liberadorSubmenu1").hover(function(){$("#liberarSubmenu1").show();$("#liberarSubmenu1").addClass('disabled');},function(){$("#liberarSubmenu1").hide()});
        // $("#liberarSubmenu1").hover(function(){$("#liberarSubmenu1").show()},function(){$("#liberarSubmenu1").hide()});
        $("#liberarSubmenu1").addClass('disabled');
        // $( "#liberadorSubmenu1" ).hover($("#liberarSubmenu1").show(),$("#liberarSubmenu1").hide());
        // $( "#liberadorSubmenu1" ).mouseover($("#liberarSubmenu1").show()),$("#liberarSubmenu1").hide());
            // contSub=0;
            // contSub2=0;
            // contSub3=0;
            // contSub4=0;
            // contSub5=0;
            // contSub6=0;
            // contSubSub1=0;
            // contSubSub2=0;
            // contSubSub3=0;
            // contSubSub4=0;
            // contSubSub5=0;
        // $("#liberadorSubmenu6").click(function()
        // {
        //     return 0;
        // });

      } 
    //   console.log("window.innerWidth: " + window.innerWidth);
    }

    // call once on load
    mqj();
  });