window.onload = function () {

    var arrForbiddenChars = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "§", "$", "%", "&", "/", "(", ")", "=", "`", "´", "+", "#", "*", "'", ",", "_", ";", "<", ">", "^", "°"
    ];

    var lastName = document.getElementById("nachname");
    var firstName = document.getElementById("vorname");
    var email = document.getElementById("email");
    var form = document.getElementsByTagName("form")[0];

    lastName.addEventListener("input", function (event) {
        checkValue(event.target);
    }, false);

    firstName.addEventListener("input", function (event) {
        checkValue(event.target);
    }, false);

    email.addEventListener("input", function (event) {
        checkEmail(event.target);
    }, false);

    function checkValue(target) {

        if (!checkNotEmpty(target)) {
            return false;
        }

        for (i = 0; i < arrForbiddenChars.length; i++) {

            if (target.value.indexOf(arrForbiddenChars[i]) != -1) {
                console.log("verboten");
                target.className = "falseInput";
                return false;
            }

        }
        target.className = "";
        return true;
    }

    function checkEmail(target) {

        if (!checkNotEmpty(target)) {
            return false;
        }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(target.value)) {
            target.className = "falseInput";
            return false;

        }

        target.className = "";
        return true;

    }

    function checkNotEmpty(target) {
        if (target.value.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    function validate() {
        if (!checkValue(lastName)) {
            alert("Nachname Feld muss ausgefüllt sein, Sonderzeichen und Zahlen sind im Nachnamen nicht erlaubt.");
            return false;
        } else if (!checkValue(firstName)) {
            alert("Vorname Feld muss ausgefüllt sein, Sonderzeichen und Zahlen sind im Vonamen nicht erlaubt.");
            return false;
        } else if (!checkEmail(email)) {
            alert("Email Feld muss ausgefüllt sein und eine gültige Email Adresse beinhalten!");
            return false;
        } else {
            return true;
        }
    }

    form.onsubmit = validate;





};
