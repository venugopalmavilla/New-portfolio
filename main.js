// Typing animation
var typing = new Typed(".typed", {
  strings: ["", "Web Developer", "UI/UX Designer", "Pyton Programer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
// pre loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// scrolling animation
