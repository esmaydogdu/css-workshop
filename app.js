const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("navigation-menu");
const submenuMobile = document.querySelectorAll(".has-submenu");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("show");
});

for (let item of submenuMobile) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("show");
  });
}
