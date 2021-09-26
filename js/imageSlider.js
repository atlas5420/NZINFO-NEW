const images = document.querySelector(".image__slider");
const imgList = document.querySelectorAll(".image__slider>img");
const leftBtn = document.querySelector(".image__left");
const rightBtn = document.querySelector(".image__right");
let position = 0;
let leftValue = 5;
let scale = 0.4;
let imgsrc ="";

function imgout(){
  imgList[(Math.floor(imgList.length/2))].style.transform = "scale(1)";
  imgList[(Math.floor(imgList.length/2))].style.transitionDuration = "1s";
  
}
function imgover(){
  imgList[(Math.floor(imgList.length/2))].style.transform = "scale(1.4)";
  imgList[(Math.floor(imgList.length/2))].style.transitionDuration = "1s";
}
function moveleft(){
  imgsrc=imgList[imgList.length-1].src;
  for(let i=imgList.length;i>1; i--){
    imgList[i-1].src=imgList[i-2].src;
  }
  imgList[0].src = imgsrc;
}
function moveright(){
  imgsrc=imgList[0].src;
  for(let i=0; i<imgList.length-1; i++){
    imgList[i].src=imgList[i+1].src;
  }  
  imgList[imgList.length-1].src=imgsrc;
}
function initialValue(){
  for(let i=0; i<imgList.length; i++){
    
    if(position<(imgList.length/2) && i<(imgList.length/2)){
      position++;
      scale += 0.2;
      imgList[i].style.zIndex = position;
      imgList[i].style.left = leftValue+"%";
      imgList[i].style.transform = "scale("+scale+")";
      leftValue=leftValue+12;
      
    }else{
      position--;
      scale -= 0.2;
      imgList[i].style.zIndex = position;
      imgList[i].style.left = leftValue+"%";
      imgList[i].style.transform = "scale("+scale+")";
      leftValue=leftValue+12;
    }
  } 
}
function init(){
  initialValue();
  imgList[(Math.floor(imgList.length/2))].addEventListener('mouseover', function(){imgover();});
  imgList[(Math.floor(imgList.length/2))].addEventListener('mouseout', function(){imgout();});
  leftBtn.addEventListener('click', function(){moveleft();});
  rightBtn.addEventListener('click', function(){moveright();});
}
init();