const header = document.getElementById("header");
const burger = document.getElementById("burger");
const sidebar = document.getElementById("side-bar");
let sideBarOpened = false;

function ToogleSideBar() {
  if (sideBarOpened) {
    burger.classList.remove("burger--cross");
    sidebar.classList.remove("side-bar--opened");
  } else {
    burger.classList.add("burger--cross");
    sidebar.classList.add("side-bar--opened");
  }
  sideBarOpened = !sideBarOpened;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
}
