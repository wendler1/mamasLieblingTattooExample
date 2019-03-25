'use strict';
window.onload=function(){
	
	/*Deklaration eines Objekts,
	Variablen des objects sind "member"*/
	var anyObject={
		name:'ich',
		lastName:'Objekt',
		mensch:false
		
	};
	
	console.log(anyObject);
	
	/*über ein Objekt iterieren
	s. Array, for-in-Schleife*/
	/**/
	for (var item in anyObject){
		console.log(item+" : "+anyObject[item]);
		
	}
	
	/*einzelne Objekteigenschaften ansprechen*/
	console.log(anyObject.lastName);
	
	/*nicht vorhandene Objekteigenschaften ansprechen*/
	console.log(anyObject.lebend);
	//console.log(anyObject);
	
	/*neue Eigenschaften anlegen*/
	anyObject.lebend=true;
	
	console.log(anyObject);
	
	delete anyObject.lebend;
	//console.log(anyObject);
	//for(var i in anyObject){console.log(anyObject[i])};
	
	var a=[1,2,3];
	/*ein Array kann auf die folgenden beiden Weisen durchlaufen werden.*/
	for(var i in a){console.log(a[i])}
	for(i=0;i<a.length;i++){console.log(a[i])}
	
	console.log(typeof anyObject);
	console.log(typeof a);
	
/**/
	anyObject.funktion=function()
			{console.log('function als Objekteigenschaft')};

	anyObject.funktion();

	console.log(typeof anyObject.funktion);

}