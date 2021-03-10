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

// Slider
const proximo = document.querySelector("#depois");
const anterior = document.querySelector("#antes");
const listaDepoimentos = document.querySelectorAll(".depoimentos-info li");
let contador = 0;

if (contador > 0) {
  anterior.setAttribute("src", "assets/icones/slide-controller.svg");
}

if (window.innerWidth > 720) {
  proximo.addEventListener("click", () => {
    console.log("aa");
    listaDepoimentos[contador].classList.remove("mostrar");
    listaDepoimentos[listaDepoimentos.length - 1].classList.add("mostrar");
    contador++;
    if (contador > 0) {
      anterior.setAttribute("src", "assets/icones/slide-controller.svg");
    }
    // anterior.setAttribute("img", "../assets/icons/slide-controller.svg");
  });

  anterior.addEventListener("click", () => {
    console.log("oi");
    listaDepoimentos[listaDepoimentos.length - 1].classList.remove("mostrar");
    listaDepoimentos[contador - 1].classList.add("mostrar");
    contador--;
    if (contador <= 0) {
      anterior.setAttribute("src", "assets/icones/seta-longa-cinza.svg");
    }
  });
}
