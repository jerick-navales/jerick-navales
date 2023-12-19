function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
  var highlight = document.querySelector(".highlight");
  highlight.style.top = `${getHighlightTop()}px`;
}

function getHighlightTop() {
  var navLinks = document.getElementById("navLinks");
  var activeLink = navLinks.querySelector("ul li:hover");
  if (activeLink) {
      return activeLink.offsetTop;
  }
  return 0;
}


