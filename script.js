// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

// tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    tabContentBoxes.forEach((item) => item.classList.add("is-hidden"));
    const target = tab.dataset.target;
    document.getElementById(target).classList.remove("is-hidden");
  });
});

// modal
const signupButton = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signupButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
