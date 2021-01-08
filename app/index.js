const root = document.getElementById("root");

window.addEventListener("scroll", function (e) {
  const headerInner = document.getElementById("header-inner");
  if (window.scrollY) headerInner.classList.add("active");
  else headerInner.classList.remove("active");
});

function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
