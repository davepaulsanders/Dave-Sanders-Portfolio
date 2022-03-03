const hamburgerIcon = document.getElementById("hamburger");
const mobileDropDownNav = document.getElementById("drop-down");
const closeIcon = document.getElementById("close-icon");
const about = document.getElementById("about");
const projects = document.getElementById("projects-menu");
const contact = document.getElementById("contact-menu");
const menuItems = [about, projects, contact];

// Adding animations and click functionality for drop down nav

hamburgerIcon.addEventListener("click", function () {
  mobileDropDownNav.style.animation = "dissolveInFromTop .25s ease-in-out";
  mobileDropDownNav.style.display = "flex";
  closeIcon.style.animation = "dissolveInFromTop 1s ease-in-out";
});
closeIcon.addEventListener("click", function () {
  mobileDropDownNav.style.display = "none";
});

// Adding click functionality to make mobile nav disappear when link is clicked

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (window.innerWidth < 800) {
      mobileDropDownNav.style.display = "none";
    }
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    mobileDropDownNav.style.display = "flex";
  }
});
