window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    setTimeout(() => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("up-inc").style.display = "block";
          } else {
            document.getElementById("up-inc").style.display = "none";
          }        
    }, 50);

}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}