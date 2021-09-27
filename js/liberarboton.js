document.addEventListener('DOMContentLoaded', ()=>{

    let input = document.querySelector(".inited");
    let button = document.querySelector(".mc4wp-button");
    let contadorButon = 1;
    button.disabled = true;
    input.addEventListener("change", stateHandle);
    function stateHandle() {
    //   if (document.querySelector(".inited").value === "") {
    if(contadorButon==0){
        button.disabled = true;
        contadorButon = 1;
      } else {
        button.disabled = false;
        contadorButon = 0;
      }
    }
    
    });
    // const element = document.getElementById('profile_title')
    // element.addEventListener("click", () => {
    // 	alert('hello');
    // });
    
    // function stateHandle() {
    // if(input.hasClass("active"){
    //     button.disabled = true; 
    //   }else{
    //     button.disabled = false;
    //   }
    // }