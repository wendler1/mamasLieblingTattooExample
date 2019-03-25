window.onload = function () {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.getElementById("header1").style.top = "0";
    } else {
      document.getElementById("header1").style.top = "-100px";
    }

    prevScrollpos = currentScrollpos;

  }

}
