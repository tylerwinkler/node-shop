window.onscroll = function() {scrollFunction()};

var prevScrollpos = window.pageYOffset;

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}