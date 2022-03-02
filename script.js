const hamburgerIcon = document.getElementById("hamburger");
const mobileDropDownNav = document.getElementById("drop-down");
const closeIcon = document.getElementById("close-icon");
hamburgerIcon.addEventListener("click", function () {
  mobileDropDownNav.style.display = "flex";
});
closeIcon.addEventListener("click", function () {
  mobileDropDownNav.style.display = "none";
});
