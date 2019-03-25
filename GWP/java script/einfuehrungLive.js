window.onload=function(){
    
    "use strict";
    
    //alert(`Hallo Welt!`);
    
    console.log("hallo world");
    
    /*Variablendeklaration*/
    
    var h1=document.getElementsByTagName("h1")[0];
    var h2=document.getElementsByClassName("headline")[0];
    var strich=document.getElementById("strich");
    var troll=document.getElementById("troll");
    
    /*Bei Aufruf sofortige Ausfuehrung, nur einmal
    h1.onclick=test();*/
    
    /*Bei Referenz, speichern in onklick, Ausfuehrung bei jedem click*/
    h1.onclick=test;
    
    function test(){
        console.log("test");
    }
    
    /*Einer Referenz koennen keine Aurgumente uebergeben werden. Aber um einer Funktion Elemente zu uebergeben, wird sie in eine anonyme Funktion verpackt.*/
    h2.onclick=function(){testAgain(42)};
    
    console.log(h2.onclick);
    
    
    function testAgain(testType){
        console.log(typeof testType,1,2,3,"hallo");
    }
    
    /*es wird nur testAgain ausgefuehrt, weil es test ueberschreibt*/
    troll.onclick=test;
    troll.onclick=testAgain;
    
    /*Ausfuehrung von mehreren Funktionen auf dasselbe Element und dasselbe Event*/
    troll.onclick=function(){
        test();
        testAgain(0);
    }
    
    /*alternativ an eventlistner geben
    Parameter: 1 "event", 2 function, 3 bubbling*/
    strich.addEventListener("click",test,false);
    strich.addEventListener("click",function(){testAgain(h1)});
    
    strich.addEventListener("click",testVariableType);
    
    function testVariableType(){
        var x;
        var y=42;
        var test=true;
        var text="Buh!";
        var fn=function(){};
        var n=null;
        var ud=undefined;
        
        x=fn;
        n=ud;
        
        console.log("x: " typeof x,typeof y,typeof test,typeof text,typeof fn,typeof n,typeof ud);
    }
    
    
       
}