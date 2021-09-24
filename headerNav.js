//header__bar content click -> page down

const headerNavBtn = document.querySelectorAll(".header__nav li");
const sections = document.querySelectorAll("section");
const first = sections[0].offsetTop;
const second = sections[1].offsetTop;
const third = sections[2].offsetTop;

headerNavBtn[0].onclick = function(){
    window.scroll({top:first, behavior:'smooth'})
}
headerNavBtn[1].onclick = function(){
    window.scroll({top:second, behavior:'smooth'})
}
headerNavBtn[2].onclick = function(){
    window.scroll({top:third, behavior:'smooth'})
}

//up icon click -> default page top
const up = document.querySelector(".up__button");
up.onclick = function(){
    window.scroll({top:0, behavior:'smooth'})
}