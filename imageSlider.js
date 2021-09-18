const slider = document.querySelector(".image__slider");
const images = document.querySelectorAll(".image__slider li");
console.log(images.length);
let currentIdx = 0;
let slideCount = images.length;
const prev = document.querySelector(".image__left");
const next = document.querySelector(".image__right");

slideWidth = 300;
slidemargin = 100;
slider.style.width = (slideWidth + slidemargin)*slideCount + "px";

function move(num){
    slider.style.trasnform ="translate("+ (-num * 400) +"px)";
    currentIdx =num;
}
prev.addEventListener("click", function(){
    if(currentIdx !== 0){
        move(currentIdx-1);
    }
});
next.addEventListener("click", function(){
    if(currentIdx !== slideCount -1){
        move(currentIdx +1);
    }
});
