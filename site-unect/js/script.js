// Menu fixo mobile
const header_mobile = document.querySelector(".header-mobile");
let auxiliar, x;

window.onscroll = () => {
  if (window.pageYOffset % 20 == 0) {
    auxiliar = window.pageYOffset;
  }

  x = window.pageYOffset;

  if (window.pageYOffset >= 800) {
    console.log("teste");
    header_mobile.classList.add("header-fixo");
    if (x > auxiliar || window.pageYOffset < 700) {
      header_mobile.classList.remove("header-fixo");
    }
    console.log(auxiliar);
    console.log(x);
  } else if (x > auxiliar || window.pageYOffset < 700) {
    header_mobile.classList.remove("header-fixo");
  }
};
