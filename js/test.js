var opacity =0;
	var intervalID=0;
	 

	//순수 자바스크립트 클릭 이벤트 Fsade out 실행
	document.getElementById('btnfadeOut').addEventListener('click', function() {
		intervalID = setInterval(hide,100);
	});
    
	//순수 자바스크립트 클릭 이벤트 Fade in
	document.getElementById('btnfadeIn').addEventListener('click', function() {
		intervalID = setInterval(show,100);
	});
 
	function hide(){
		var div = document.getElementById("img1");
		opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));
		
		if(opacity>0){
            //Fade out 핵심 부분
			opacity = opacity-0.1;
			div.style.opacity=opacity;
			//img.style.opacity=opacity;
		}
		else{
			clearInterval(intervalID);
		}
	}
	
	function show(){
		var div = document.getElementById("img1");
		opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));
		
		if(opacity<1){
        	//Fade in 핵심 부분
			opacity = opacity+0.5;
			div.style.opacity=opacity;
			//img.style.opacity=opacity;
		}
		else{
			clearInterval(intervalID);
		}
	}