document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 20,
        dist: 0,
        shift: 100,
        padding: 100,
        numVisible: 3,
        fullWidth: false,
        indicators: true,   
    });
});


