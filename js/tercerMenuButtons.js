let button3 = document.getElementById("ShopBut");
let button4 = document.getElementById("quitarCarro");
let button5 = document.getElementById("SearchBut2");
let button6 = document.getElementById("quitarMenuSearch");
let contadorbutton3 = 0;
let contadorbutton5 = 0;

button3.addEventListener('click',function(){
    if(contadorbutton3==0){
        document.getElementById('cuadroShop2').style.display = "block";
        contadorbutton3 = 1;
    }else{
        document.getElementById('cuadroShop2').style.display = "none";
        contadorbutton3 = 0;
    }
    
})

button4.addEventListener('click',function(){
    console.log('saludos')
    document.getElementById('cuadroShop2').style.display = "none";
    contadorbutton3 = 0;
})

// button5.addEventListener('click',function(){
//     if(contadorbutton5==0){
//         document.getElementById('maxHeight3').style.height = "250px";   
//         document.getElementById('maxHeight3').style.display = "block";
//         document.getElementById('heightEnc').style.display = "none";
//         document.getElementById('nuevaAlturaCol2').style.display = "none";
//         console.log('searchOpen')
//         contadorbutton5 = 1;
//     }else{
//         document.getElementById('maxHeight3').style.display = "none";
//         document.getElementById('maxHeight3').style.height = "1000px";
//         document.getElementById('heightEnc').style.display = "block";
//         document.getElementById('nuevaAlturaCol2').style.display = "block";
//         contadorbutton5 = 0;
//         console.log('searchClose')
//     } 
// })

button5.addEventListener('click',function(){
    document.getElementById('maxHeight5').style.height = "250px";   
        //document.getElementById('maxHeight3').style.display = "block";
        $("#maxHeight5").slideDown();
        $("#heightEnc").hide();
        $("#search_form2").hide();
        $("#esondidaXSer").hide();
       // $("#nuevaAlturaCol2").hide();
       // $("#desaparcer2").hide();
       // $("#mostrar2").hide();

        $("#search_form2").fadeIn(1200);
        $("#esondidaXSer").fadeIn(1000);
        $("#searchField").focus();
        
        // document.getElementById('heightEnc').style.display = "none";
         //document.getElementById('nuevaAlturaCol2').style.display = "none";
        //document.getElementById('esondidaXSer').style.display = "block";
        //document.getElementById('search_form2').style.display = "block";
         //document.getElementById('desaparcer2').style.display = "none";
         //document.getElementById('mostrar2').style.display = "none";
        

        console.log('searchOpen')
})

button6.addEventListener('click',function(){
        //document.getElementById('maxHeight3').style.display = "none";
        $("#search_form2").fadeOut(1000);
        $("#esondidaXSer").fadeOut(2000);
        setInterval(() => {
            
        }, 3000);
        $("#maxHeight5").slideUp();
        $("#heightEnc").fadeIn(3000);
        //$("#nuevaAlturaCol2").fadeIn(1000);
        //$("#desaparcer2").fadeIn(1000);
        //$("#mostrar2").fadeIn(1000);

        //  document.getElementById('maxHeight3').style.height = "1000px";
        // document.getElementById('heightEnc').style.display = "block";
         //document.getElementById('nuevaAlturaCol2').style.display = "block";

        // document.getElementById('esondidaXSer').style.display = "none";
        // document.getElementById('search_form2').style.display = "none";

         //document.getElementById('desaparcer2').style.display = "block";
         //document.getElementById('mostrar2').style.display = "block";
        console.log('searchClose')
})