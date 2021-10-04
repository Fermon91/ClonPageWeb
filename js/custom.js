"use strict";



/*********************************** */

document.addEventListener("DOMContentLoaded", function(e) {
    let contSub=0;
    let contSub2=0;
    let contSub3=0;
    let contSub4=0;
    let contSub5=0;
    let contSub6=0;
    let contSubSub1=0;
    let contSubSub2=0;
    let contSubSub3=0;
    let contSubSub4=0;
    let contSubSub5=0;
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
        $("#liberadorSubmenu").click(function()
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
                $("#liberarSubmenu").slideDown();
                // $('#flechaAlaIzqId2').style.opacity = 1;
                console.log("saludos desde SUB liberarSubmenu slideDown");
                console.log("contador igual a ");
                console.log(contSub);
                contSub=contSub+1;
            }else{
                $("#liberarSubmenu").slideUp();
                // $('#flechaAlaIzqId2').style.opacity = 0;
                console.log("saludos desde SUB liberarSubmenu slideUp");
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
            //     contSub=0;
            //     contSub2=0;
            //     contSub3=0;
            //     contSub4=0;
            //     contSub5=0;
            //     contSub6=0;
            // }
            if(contSub2==0){
                $("#liberarSubmenu2").slideDown();
                console.log("saludos desde SUB 2 liberarSubmenu slideDown");
                contSub2=contSub2+1;
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
                
            }else{
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
            //     contSub=0;
            //     contSub2=0;
            //     contSub4=0;
            //     contSub5=0;
            //     contSub6=0;
            // }
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

        button.addEventListener('click',function(){
        let contSub=0;
        let contSub2=0;
        let contSub3=0;
        let contSub4=0;
        let contSub5=0;
        let contSub6=0;
        let contSubSub1=0;
        let contSubSub2=0;
        let contSubSub3=0;
        let contSubSub4=0;
        let contSubSub5=0;
        });

        button2.addEventListener('click',function(){
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
        });


        // se bloquea
      } else if (mqlr[1].matches) {
        $("#liberarSubmenu").slideUp();
        $("#liberarSubmenu2").slideUp();
        $("#liberarSubmenu3").slideUp();
        $("#liberarSubmenu4").slideUp();
        $("#liberarSubmenu6").slideUp();
        $("#SubliberarSubmenu1").slideUp();
        $("#SubliberarSubmenu2").slideUp();
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