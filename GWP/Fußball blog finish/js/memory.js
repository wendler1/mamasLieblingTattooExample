window.onload = function () {
    
     /*
    var imgCon1 = document.getElementById("imgCon1");
    var imgCon2 = document.getElementById("imgCon2");
    var imgCon3 = document.getElementById("imgCon3");
    var imgCon4 = document.getElementById("imgCon4");
    var imgCon5 = document.getElementById("imgCon5");
    var imgCon6 = document.getElementById("imgCon6");
    */
    
    /*
    imgCon1.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });

    imgCon2.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });

    imgCon3.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });

    imgCon4.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });

    imgCon5.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });

    imgCon6.addEventListener("click", function () {
        !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
    });
    */

    var firstImage = null;
    var secondImage = null;
    var disableClick = false;
    
    var imagesArr = document.getElementsByClassName("memory-container")[0].childNodes;
     
    for (i=0; i < imagesArr.length; i++){
        
        if(imagesArr[i].tagName == "DIV") {
            
            imagesArr[i].addEventListener("click", function () {
                !disableClick && this.className.indexOf("solved") == -1 && clickImage(this.childNodes[1])
            });
            
        }
        
    }        

    function clickImage(img) {

        console.log("Image Clicked");
        document.getElementById(img.id).parentNode.className += " visible";

        /*
        null == nundefined liefert true
        null === undefined liefert false
        */
        
        if (firstImage == null) {
            firstImage = img;
        } else if (secondImage == null) {
            disableClick = true;
            secondImage = img;
            compareImages();
        }

    }

    function compareImages() {
        if (firstImage.className == secondImage.className) {
            setClassNamesAndReset("invisible solved visible");
            disableClick = false;
            console.log("both are the same");
        } else {
            console.log("imgs are not the same");
            setTimeout(function () {
                setClassNamesAndReset("invisible");
                disableClick = false;
            }, 1000);
        }

    };

    function setClassNamesAndReset(classes) {
        document.getElementById(firstImage.id).parentNode.className = classes;
        document.getElementById(secondImage.id).parentNode.className = classes;
        firstImage = null;
        secondImage = null;
    }

}
