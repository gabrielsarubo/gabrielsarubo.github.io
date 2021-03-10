const btnMenu = document.querySelector("#menu-mobile"); //pegando o botao de menu
const modalMobile = document.querySelector("#modal-mobile"); //pegando o conteudo do menu
const limpaTela = document.querySelector(".limpa-tela");

btnMenu.addEventListener("click", () => {
  modalMobile.classList.add("mostrar");
  limpaTela.classList.add("remover");
  modalMobile.addEventListener("click", (event) => {
    if (event.target.id !== "modal-mobile") {
      console.log(event.target.id);
      modalMobile.classList.remove("mostrar");
      limpaTela.classList.remove("remover");
    }
  });
});
