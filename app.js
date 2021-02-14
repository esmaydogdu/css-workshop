const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("navigation-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const submenuMobile = document.querySelectorAll(".has-submenu");

for (const item of submenuMobile) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("show");
  });
}
