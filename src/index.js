window.addEventListener("scroll", function () {
  var element = document.querySelector(".hidden-conten");
  if (element) {
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.style.opacity = 1;
    }
  }
});
