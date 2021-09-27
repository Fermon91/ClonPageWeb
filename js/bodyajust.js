/*----------------------------------------------*/

document.addEventListener("DOMContentLoaded", function(e) {
    // var w = window.innerWidth;
    // var w2 = w*.5;
    // var w3 = w*2;
    // console.log("el valor de la ventana es:")
    console.log(window.innerWidth)
    // medias (as an array to make it a little easier to manage)
    var bodyresp = [
      window.matchMedia("(max-width: 749px)"),
      window.matchMedia("(min-width: 750px) and (max-width: 1005px)"),
      window.matchMedia("(min-width: 1006px) and (max-width: 1258px)"),
      window.matchMedia("(min-width: 1259px) and (max-width: 1418px)"),
      window.matchMedia("(min-width: 1419px) and (max-width: 2000px)"),
    ]
    
    // event listeners
    for (var i=0; i<bodyresp.length; i++){
        bodyresp[i].addListener(positionWindow)
    }
    
    // matches methods
    function positionWindow(){
      var w2 = window.innerWidth*(0.56);
      var w3 = window.innerWidth*(1.12);
      var w4 = ((window.innerWidth)*(0.57)*2);
      var w5 = ((window.innerWidth)*(0.57)/2);
      //var w6 = w2;
      //var w7 = w2*3;
      var w8 = w2*4;

      if (bodyresp[0].matches) {
        document.getElementById('imageOneColumId2').style.float = "above";
        document.getElementById('imageOneColumId3').style.float = "bottom";
        document.getElementById('imageOneColumId2').style.width = "100"+"%";
        document.getElementById('imageOneColumId3').style.width = "100"+"%"; 
        document.getElementById('imageOneColumId').style.width = "100"+"%";
        document.getElementById('TwoimagesColID').style.width = "100"+"%";
        document.getElementById('imageOneColumId4').style.width = "100"+"%";
        document.getElementById('imageOneColumId').style.height = w2 +"px";
        document.getElementById('TwoimagesColID').style.height = w3+"px";
        document.getElementById('imageOneColumId4').style.height = w2+"px";
        document.getElementById('imageOneColumId2').style.height = "50"+"%";
        document.getElementById('imageOneColumId3').style.height = "50"+"%";
        document.getElementById('imageSpace2').style.height = w8+"px";
        //document.getElementById('imageSpace').style.height = w6+"px";
        // imagenes antes footer
        document.getElementById('imagebackground1').style.float = "above";
        document.getElementById('imagebackground2').style.float = "bottom";
        document.getElementById('dimension100').style.height = w4+"px";
        document.getElementById('imagebackground1').style.width = "100"+"%";
        document.getElementById('imagebackground2').style.width = "100"+"%";
        document.getElementById('imagebackground1').style.height = "50"+"%";
        document.getElementById('imagebackground2').style.height = "50"+"%";

      } else if (bodyresp[1].matches) {
        document.getElementById('imageOneColumId').style.float = "above";
        document.getElementById('TwoimagesColID').style.float = "bottom";
        document.getElementById('imageOneColumId2').style.float = "left";
        document.getElementById('imageOneColumId3').style.float = "left";
        document.getElementById('imageOneColumId4').style.float = "bottom";
        document.getElementById('imageOneColumId').style.width = "100"+"%";
        document.getElementById('TwoimagesColID').style.width = "100"+"%";
        document.getElementById('imageOneColumId4').style.width = "100"+"%";
        document.getElementById('imageOneColumId2').style.width = "50"+"%";
        document.getElementById('imageOneColumId3').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.height = "100"+"%";
        document.getElementById('imageOneColumId3').style.height = "100"+"%";
        document.getElementById('imageOneColumId').style.height = "224"+"px";
        document.getElementById('TwoimagesColID').style.height = "224"+"px";
        document.getElementById('imageOneColumId4').style.height = "224"+"px";
        document.getElementById('imageSpace2').style.height = "672"+"px";
        //document.getElementById('imageSpace').style.height = w7+"px";
        // imagenes antes footer
        document.getElementById('imagebackground1').style.float = "left";
        document.getElementById('imagebackground2').style.float = "left";
        document.getElementById('dimension100').style.height = w5+"px";
        // document.getElementById('dimension100').style.height = "500"+"px";
        document.getElementById('imagebackground1').style.width = "50"+"%";
        document.getElementById('imagebackground2').style.width = "50"+"%";
        document.getElementById('imagebackground1').style.height = "100"+"%";
        document.getElementById('imagebackground2').style.height = "100"+"%";
      } else if (bodyresp[2].matches) {
        document.getElementById('imageOneColumId').style.float = "left";
        document.getElementById('TwoimagesColID').style.float = "left";
        document.getElementById('imageOneColumId2').style.float = "left";
        document.getElementById('imageOneColumId3').style.float = "left";
        document.getElementById('imageOneColumId4').style.float = "left";
        document.getElementById('imageOneColumId').style.width = "50"+"%";
        document.getElementById('TwoimagesColID').style.width = "50"+"%";
        document.getElementById('imageOneColumId4').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.width = "50"+"%";
        document.getElementById('imageOneColumId3').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.height = "100"+"%";
        document.getElementById('imageOneColumId3').style.height = "100"+"%";
        document.getElementById('imageOneColumId').style.height = "480"+"px";
        document.getElementById('TwoimagesColID').style.height = "240"+"px";
        document.getElementById('imageOneColumId4').style.height = "240"+"px";
        document.getElementById('imageSpace2').style.height = "480"+"px";
        //document.getElementById('imageSpace').style.height = w8+"px";
        // imagenes antes footer
        document.getElementById('imagebackground1').style.float = "left";
        document.getElementById('imagebackground2').style.float = "left";
        document.getElementById('dimension100').style.height = w5+"px";
        // document.getElementById('dimension100').style.height = "500"+"px";

        document.getElementById('imagebackground1').style.width = "50"+"%";
        document.getElementById('imagebackground2').style.width = "50"+"%";
        document.getElementById('imagebackground1').style.height = "100"+"%";
        document.getElementById('imagebackground2').style.height = "100"+"%";
      } else if (bodyresp[3].matches) {
        document.getElementById('imageOneColumId').style.float = "left";
        document.getElementById('TwoimagesColID').style.float = "left";
        document.getElementById('imageOneColumId2').style.float = "left";
        document.getElementById('imageOneColumId3').style.float = "left";
        document.getElementById('imageOneColumId4').style.float = "left";
        document.getElementById('imageOneColumId').style.width = "50"+"%";
        document.getElementById('TwoimagesColID').style.width = "50"+"%";
        document.getElementById('imageOneColumId4').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.width = "50"+"%";
        document.getElementById('imageOneColumId3').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.height = "100"+"%";
        document.getElementById('imageOneColumId3').style.height = "100"+"%";
        document.getElementById('imageOneColumId').style.height = "612"+"px";
        document.getElementById('TwoimagesColID').style.height = "306"+"px";
        document.getElementById('imageOneColumId4').style.height = "306"+"px";
        document.getElementById('imageSpace2').style.height = "612"+"px";
        //document.getElementById('imageSpace').style.height = w8+"px";
        // imagenes antes footer
        document.getElementById('imagebackground1').style.float = "left";
        document.getElementById('imagebackground2').style.float = "left";
        document.getElementById('dimension100').style.height = w5+"px";
        // document.getElementById('dimension100').style.height = "500"+"px";

        document.getElementById('imagebackground1').style.width = "50"+"%";
        document.getElementById('imagebackground2').style.width = "50"+"%";
        document.getElementById('imagebackground1').style.height = "100"+"%";
        document.getElementById('imagebackground2').style.height = "100"+"%";
      } else if (bodyresp[4].matches) {
        document.getElementById('imageOneColumId').style.float = "left";
        document.getElementById('TwoimagesColID').style.float = "left";
        document.getElementById('imageOneColumId2').style.float = "left";
        document.getElementById('imageOneColumId3').style.float = "left";
        document.getElementById('imageOneColumId4').style.float = "left";
        document.getElementById('imageOneColumId').style.width = "50"+"%";
        document.getElementById('TwoimagesColID').style.width = "50"+"%";
        document.getElementById('imageOneColumId4').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.width = "50"+"%";
        document.getElementById('imageOneColumId3').style.width = "50"+"%";
        document.getElementById('imageOneColumId2').style.height = "100"+"%";
        document.getElementById('imageOneColumId3').style.height = "100"+"%";
        document.getElementById('imageOneColumId').style.height = "900"+"px";
        document.getElementById('TwoimagesColID').style.height = "450"+"px";
        document.getElementById('imageOneColumId4').style.height = "450"+"px";
        document.getElementById('imageSpace2').style.height = "900"+"px";
        //document.getElementById('imageSpace').style.height = w8+"px";
        // imagenes antes footer
        document.getElementById('imagebackground1').style.float = "left";
        document.getElementById('imagebackground2').style.float = "left";
        document.getElementById('dimension100').style.height = w5+"px";
        // document.getElementById('dimension100').style.height = "500"+"px";

        document.getElementById('imagebackground1').style.width = "50"+"%";
        document.getElementById('imagebackground2').style.width = "50"+"%";
        document.getElementById('imagebackground1').style.height = "100"+"%";
        document.getElementById('imagebackground2').style.height = "100"+"%";
      }
      
    }

    // call once on load
    positionWindow();
  });