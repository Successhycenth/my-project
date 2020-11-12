const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("ul");
const menu_item = document.querySelectorAll("ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#0e0733";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobile_menu.classList.remove("active");
  });
});
