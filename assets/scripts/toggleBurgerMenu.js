const headerNavInfo = document.getElementById("header-nav-info");
const burgerMenuBtn = document.getElementById("burger-menu-btn");
let burgerIsOpen = false;
burgerMenuBtn.onclick = () => {
  if (burgerIsOpen) {
    headerNavInfo.style.display = "none";
    burgerIsOpen = false;
  } else {
    headerNavInfo.style.display = "flex";
    burgerIsOpen = true;
  }
};
