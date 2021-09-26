const navImg = document.querySelector("nav");
let index = 0;
const navList = [`"img/nav1.jpg"`, `"img/nav2.jpg"`, `"img/nav3.jpg"`];

function change(){
        navImg.style.background = "url("+navList[Math.floor(Math.random()*3)]+")";
        navImg.style.backgroundSize = '100% 85vh';
        navImg.style.backgroundRepeat = "no-repeat";
        navImg.style.backgroundPositionY = "bottom";
}

function init(){
    setInterval(function(){change();}, 1000);
}

init();
