window.onload=function(){
    
    function outside(y){
        //console.log("outside involked");
        var out="out";
        function inside (x){
            /*I can use out and have my own variable*/
            console.log("inside");
            var ins=x*y;
            console.log(out,ins);         
        }
        
        return inside;
    
    }
    
    outside();
    /*fuehrt Zeile 4 und 5 aus und deklariert inseide()*/
    
    var takeInside=outside(2);
    //console.log(takeInside);
    takeInside(5);
    outside(2)(5);
}