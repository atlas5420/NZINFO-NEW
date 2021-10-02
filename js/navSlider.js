const navImg = document.querySelector("nav");
let index = 0;
const navList = [`"img/nav1.jpg"`, `"img/nav2.jpg"`, `"img/nav3.jpg"`];
let opacity=0;

function fadeIn(){
    
}

function fadeOut(){

}

function change(){
    let random = Math.floor(Math.random()*3);
        navImg.style.background = "url("+navList[random]+")";
        navImg.style.backgroundSize = '100% 85vh';
        navImg.style.backgroundRepeat = "no-repeat";
        navImg.style.backgroundPositionY = "bottom";
}

function init(){
    setInterval(function(){change();}, 1400+2000);
}

init();
