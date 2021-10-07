const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

const hamburger = document.querySelector(".profile");
const modal = document.querySelector(".modal");
const dropdown = document.querySelector(".dropdown");

// add our event listener for the click
btn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  sidebar.classList.toggle("-translate-x-full");
});
// // console.log("hamburger",hamburger)
// hamburger.addEventListener("click", () => {
//   // alert("inside function")
//   dropdown.classList.toggle("hidden");
// });
