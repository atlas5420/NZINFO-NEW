const section = document.querySelectorAll(".section__info div");
console.log(section);

function move(){
    for(let i=0; i<section.length; i++){
    section[i].style.animationName = "sectionMove";
    section[i].style.animationDuration = "1s";
    }
}

function init(){
    move();
}
init();