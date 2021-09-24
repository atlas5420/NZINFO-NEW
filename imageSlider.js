const images = document.querySelector(".image__slider");
const prevBtn = document.querySelector(".image__left");
const nextBtn = document.querySelector(".image__right");

let imageIndex = 0;
let postion = 0;
const IMAGE_WIDTH = 400;

function moveleft(){
  if(imageIndex > 0){
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex - 1;
  }

}

function moveright(){
  if(imageIndex <3)
  postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex + 1;

}
   
  function init(){
    prevBtn.addEventListener("click", moveleft);
    nextBtn.addEventListener("click", moveright);
  }
   
  init();