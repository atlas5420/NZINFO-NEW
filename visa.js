const cont = document.querySelectorAll(".content");
console.log(cont);
cont[0].style.visibility = "visible";

function moveUp(){
    
    let scrolling = document.documentElement.scrollTop;
    let time = 0.5;
        
    if(scrolling > 200){
        cont[1].style.animationName = "moveUp";
        cont[1].style.animationDuration = time+"s";
        cont[1].style.visibility = "visible";
    }
    if(scrolling > 700){
        cont[2].style.animationName = "moveUp";
        cont[2].style.animationDuration = time+"s";
        cont[2].style.visibility = "visible";
    }
}


function init(){
    document.addEventListener("scroll", function(){moveUp();})
}
init();