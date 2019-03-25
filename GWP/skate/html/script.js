window.onload = function () {
    "use:strict";  /*Strict mode makes it easier to write "secure" JavaScript.*/
    
    
console.log("hallo world");    //alert(`Hallo Welt!`);
    
/*Variablendeklaration*/   
var h1=document.getElementsByTagName("h1")[0];/*Bei Aufruf sofortige Ausfuehrung, nur einmal
    h1.onclick=test();*/
    
     /*Bei Referenz, speichern in onklick, Ausfuehrung bei jedem click*/
    h1.onclick=test;
        function test(){
        console.log('test');
        }
     

/*Einer Referenz koennen keine Aurgumente uebergeben werden. Aber um einer Funktion Elemente zu uebergeben, wird sie in eine anonyme Funktion verpackt.*/
var h2=document.getElementsByClassName("fetish")[0]; /* gives back the 1st element of all h2 tags from class fetish */
var someVar = undefined;
    h2.onclick=function(){testAgain("name")};/* name is just some argument we give to the function // we used an anonymous function to use the testAgain function so we could give it a parameter*/
    
    console.log(h2.onclick);/* gives back the reference to the h2.onclick */
    
    
    function testAgain(testType){
        console.log(typeof testType,typeof  null, typeof someVar, 3,"hallo");
    }/* testType is an argument that the function takes(could be any type of var)*/
    
    
var image = document.getElementById("sk8");
    
    function twoInOne(){/* we use this function to call two functions on one element so that they dont overwrite eachother.*/
        image.onclick = test();
        image.onclick = testAgain(90);
        
    }
    
    image.onclick = twoInOne;

 /*alternativ an eventlistner geben
    Parameter: 1 "event", 2 function, 3 bubbling*/    
var aside = document.getElementsByName("shark")[0];

aside.addEventListener("click",twoInOne,false);

function testReturn(){
    var a = 5;
    return a;
    
}
    h1.onclick = testReturn;

}













