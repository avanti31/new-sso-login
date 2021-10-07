const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

const hamburger = document.querySelector(".profile");
const dropdown = document.querySelector(".dropdown");

// add our event listener for the click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
