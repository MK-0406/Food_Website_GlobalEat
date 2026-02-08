// Pattern for scrolling the navigation bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
}


