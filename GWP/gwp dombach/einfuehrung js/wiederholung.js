'use strict';
/*4*/
window.onload=function(){
	
	/*2*/
	var imgs=document.getElementsByTagName('img');
	console.log(imgs);
	
	/*11*/
	var h1=document.getElementsByTagName('h1')[0];

	/*3*/ 
	function changeImg(){
		console.log('inside changeImg');
		/*8*/
		console.log(this.src);
		/*9*/
		//this.src='troll.jpg';
		/*10*/
		if(this.alt==='TrollMan'){
			this.src='strich.jpg';
			this.alt='StrichMan';
		}
		else{
			this.src='troll.jpg';
			this.alt='TrollMan';
		}
		
	}
	
	/*12*/
	function userCheer(text){
		alert(text);		
	}

	/*5*/
	imgs[0].addEventListener('click',changeImg,false);
	/*alternativ
	imgs[0].onclick=changeImg;*/
	
	/*6*/
	console.log(imgs.length);
	
	/*7*/
	for(var i=0;i<imgs.length;i++){
		imgs[i].addEventListener('click',changeImg,false);
	}
	
	/*13*/
	h1.addEventListener('click',function(){userCheer('Hurra!')},false);
		
}