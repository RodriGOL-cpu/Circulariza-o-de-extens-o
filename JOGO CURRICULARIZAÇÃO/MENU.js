/*
#############################################################################################################################################
                                                    REMOVER CLICK DIREITO DO MOUSE
#############################################################################################################################################
*/

/*
##############################
    REMOVE O CLICK DIREITO
##############################
*/
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});





/*
#############################################################################################################################################
                                                        TRANSIÇÃO PARA O JOGO
#############################################################################################################################################
*/

/*
##################################
    TRANISIÇÃO CIRCULO CRESCE
##################################
*/
const BOTAO_JOGAR = document.querySelector(".MENU-BOTAO-JOGAR");
const TRANSICAO = document.querySelector("#TRANSICAO");

BOTAO_JOGAR.addEventListener("click", function() {
    TRANSICAO.classList.add("FECHAR");

    setTimeout(function() {
        window.location.href = "JOGO.html";
    }, 500);
});