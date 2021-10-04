$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
        var bodywidht = $(this).width();
        const bodyheight3 = window.innerWidth;
        const bodywidht3 = window.innerHeight;
        
        // var bodywidht = $(this).width();
        if(bodyheight<=(bodywidht/2)){
            var bodywidht2 = bodyheight*1.78;
            var bodyheight2 = $(this).height();
            // var bodywidht2 = $(this).width();
        }else{
            var bodywidht2 = $(this).width();
            var bodyheight2 = bodyheight;
            // var bodyheight2 = bodywidht*0.5625;
            //console.log(bodyheight);
            // console.log(bodyheight3);
            // console.log(bodywidht);
            // console.log(bodywidht3);
        };
        // var bodywidht = $(this).width();
        // var bodywidht2 = bodywidht*(bodyheight/1080);
        $(".firstImage").height(bodyheight);
        $(".firstImage").width(bodywidht);
        $(".carusel").height(bodyheight2);
        $(".carusel").width(bodywidht2);
        // $(".carusel_item").height(bodyheight);
        // $(".carusel_item").width(bodywidht);
        $(".dimMensaje").height(bodyheight2);
        $(".dimMensaje").width(bodywidht2);
    }).resize();
});

