const menubar = document.querySelector("#menubar");
const navbar = document.querySelector(".navbar");
const closebar = document.querySelector("#time");

menubar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menubar.classList.toggle("fa-times");
});
