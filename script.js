window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 50) {
    document.querySelector(".navbar").style.display = "flex";
  } else {
    document.querySelector(".navbar.fixed").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}



