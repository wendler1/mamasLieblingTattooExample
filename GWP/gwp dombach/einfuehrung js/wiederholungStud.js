window.onload=function(){
	var img = document.getElementsByTagName("img");
	var h1 = document.getElementsByTagName("h1")[0];
	
	
	
	function changeOnClickImg(){
		console.log("inside changeOnClickImg");
		console.log(img.length);
	}
	h1.onclick= function(){h1Alert(true,img);}
	function h1Alert(para){
		alert(para);
	}
	
	for(var i=0; i<img.length; i++){
		img[i].onclick = changeOnClickImg;
		//console.log(img[i].src,img[i].alt,img[i].title);
		
		if(img[i].alt=="StrichMan"){
			img[i].title = "Weihnachten";
		}
		else{
			img[i].title= "Silvester";	
		}
		
		
	}
	
	
	
}