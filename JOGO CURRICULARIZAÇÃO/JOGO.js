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
    TRANISIÇÃO CIRCULO DIMINUI
##################################
*/
const TRANSICAO = document.querySelector("#TRANSICAO");

window.addEventListener("load", function() {
    setTimeout(function() {

TRANSICAO.classList.add("ABRIR");
    }, 100);
});





/*
#############################################################################################################################################
                                                        PERGUNTAS DO JOGO
#############################################################################################################################################
*/

/*
###################
    NIVEL FÁCIL
###################
*/
const PERGUNTAS = [
    {
        dificuldade: "FÁCIL",
        tema: "CORES",
        pergunta: "1- QUAL É A COR DA BOLA?",
        imagem: "IMAGENS/BOLA.png",
        respostas: ["VERMELHO", "AZUL", "VERDE", "AMARELO"],
        certa: "VERDE"
    },

    {
        dificuldade: "FÁCIL",
        tema: "CORES",
        pergunta: "2- QUAL É A COR DO CABELO DO MENINO?",
        imagem: "IMAGENS/GAROTO.png",
        respostas: ["VERMELHO", "AZUL", "VERDE", "AMARELO"],
        certa: "AZUL"
    },


    {
        dificuldade: "FÁCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "3- QUAL FORMA GEOMÉTRICA SE PARECE COM UMA BOLA?",
        imagem: "",
        respostas: ["TRIÂNGULO", "QUADRADO", "CÍRCULO", "RETÂNGULO"],
        certa: "CÍRCULO"
    },

    {
        dificuldade: "FÁCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "4- QUAL FORMA GEOMÉTRICA SE PARECE COM UMA PIRÂMIDE?",
        imagem: "",
        respostas: ["TRIÂNGULO", "QUADRADO", "CÍRCULO", "RETÂNGULO"],
        certa: "TRIÂNGULO"
    },

    {
        dificuldade: "FÁCIL",
        tema: "QUANTIDADE",
        pergunta: "5- QUANTAS MAÇÃS APARECEM NA IMAGEM?",
        imagem: "",
        respostas: ["1", "2", "3", "4"],
        certa: "2"
    },

    {
        dificuldade: "FÁCIL",
        tema: "QUANTIDADE",
        pergunta: "6- QUANTOS PEIXES APARECEM NA IMAGEM?",
        imagem: "",
        respostas: ["1", "2", "3", "4"],
        certa: "4"
    },

    {
        dificuldade: "FÁCIL",
        tema: "ANIMAIS",
        pergunta: "7- QUAL DESSES ANIMAIS É CONSIDERADO O MELHOR AMIGO DO HOMEM?",
        imagem: "",
        respostas: ["GATO", "CACHORRO", "PEIXE", "COELHO"],
        certa: "CACHORRO"
    },

    {
        dificuldade: "FÁCIL",
        tema: "ANIMAIS",
        pergunta: "8- QUAL ANIMAL É MAIS COMUM DE ENCONTRAR NAS RUAS DE UMA CIDADE?",
        imagem: "",
        respostas: ["LEÃO", "GATO", "ELEFANTE", "TIGRE"],
        certa: "GATO"
    }
];

let perguntaAtual = 0
let certas = 0
let erradas = 0
let respostaSelecionada = null

/*
###############################################################################
    SELECIONANDO POSIÇÕES DOS ELEMENTOS: PERGUNTA - TEMA - NIVEL - RESPOSTA
###############################################################################
*/
const LOCAL_DIFICULDADE = document.querySelector("#JOGO-LOCAL-DIFICULDADE");
const LOCAL_TEMA = document.querySelector("#JOGO-LOCAL-TEMA");
const LOCAL_PERGUNTA = document.querySelector("#JOGO-LOCAL-PERGUNTAS");
const LOCAL_IMAGEM = document.querySelector("#JOGO-IMAGEM-OU-DESAFIO");

const RESPOSTA_A = document.querySelector("#RESPOSTA-A");
const RESPOSTA_B = document.querySelector("#RESPOSTA-B");
const RESPOSTA_C = document.querySelector("#RESPOSTA-C");
const RESPOSTA_D = document.querySelector("#RESPOSTA-D");

const RESULTADO = document.querySelector("#JOGO-RESULTADO");
const RESULTADOS_CERTOS = document.querySelector("#JOGO-RESULTADOS-CERTOS");
const RESULTADOS_ERRADOS = document.querySelector("#JOGO-RESULTADOS-ERRADOS");

const ESTRELAS = document.querySelector("#JOGO-RESULTADO-ESTRELAS");

const BOTAO_CONTINUAR = document.querySelector("#JOGO-BOTAO-CONTINUAR");

function mostrarPergunta() {
    RESPOSTA_A.style.backgroundColor = "rgba(12, 36, 58, 0.8)";
    RESPOSTA_B.style.backgroundColor = "rgba(12, 36, 58, 0.8)";
    RESPOSTA_C.style.backgroundColor = "rgba(12, 36, 58, 0.8)";
    RESPOSTA_D.style.backgroundColor = "rgba(12, 36, 58, 0.8)";

    let perguntas = PERGUNTAS[perguntaAtual];

    if (perguntas.tema == "CORES") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "FORMAS GEOMÉTRICAS") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "QUANTIDADE") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "ANIMAIS") {
        LOCAL_TEMA.style.color = "white";
    }


    if (perguntas.dificuldade == "FÁCIL") {
        LOCAL_DIFICULDADE.style.color = "lime";
    }
    if (perguntas.dificuldade == "MÉDIO") {
        LOCAL_DIFICULDADE.style.color = "yellow";
    }
    if (perguntas.dificuldade == "DIFÍCIL") {
        LOCAL_DIFICULDADE.style.color = "orange";
    }
    if (perguntas.dificuldade == "SUPER-DIFICIL") {
        LOCAL_DIFICULDADE.style.color = "red";
    }

    LOCAL_DIFICULDADE.querySelector("h2").innerHTML = perguntas.dificuldade;
    LOCAL_TEMA.querySelector("h2").innerHTML = perguntas.tema;
    LOCAL_PERGUNTA.innerHTML = perguntas.pergunta;
    LOCAL_IMAGEM.style.backgroundImage = perguntas.imagem;

    let respostas = [...perguntas.respostas];

    respostas.sort(function() {
        return Math.random() - 0.5;
    });

    RESPOSTA_A.innerHTML = respostas[0];
    RESPOSTA_B.innerHTML = respostas[1];
    RESPOSTA_C.innerHTML = respostas[2];
    RESPOSTA_D.innerHTML = respostas[3];
}

mostrarPergunta();


/*
###################################
    VERIFICAR RESPOSTAS - FÁCIL
###################################
*/
RESPOSTA_A.addEventListener("click", function() {
    verificarResposta(RESPOSTA_A);
});

RESPOSTA_B.addEventListener("click", function() {
    verificarResposta(RESPOSTA_B);
});

RESPOSTA_C.addEventListener("click", function() {
    verificarResposta(RESPOSTA_C);
});

RESPOSTA_D.addEventListener("click", function() {
    verificarResposta(RESPOSTA_D);
});

function verificarResposta(resposta) {
    if (respostaSelecionada) {
        respostaSelecionada.style.backgroundColor = "rgba(12, 36, 58, 0.8)";
    }

    respostaSelecionada = resposta;

    respostaSelecionada.style.backgroundColor = "rgba(40, 77, 111, 0.8)"
}

BOTAO_CONTINUAR.addEventListener("click", function() {

    if (!respostaSelecionada) return;

    let pergunta = PERGUNTAS[perguntaAtual];

    if (respostaSelecionada.innerHTML == pergunta.certa) {
        respostaSelecionada.style.backgroundColor = "rgb(0, 106, 26, 0.8)";
    }

    else {
        respostaSelecionada.style.backgroundColor = "rgb(147, 19, 19, 0.8)";
    }

    perguntaAtual++;

    if (perguntaAtual < PERGUNTAS.length) {

        const painel = document.querySelector(".JOGO-PAINEL-PERGUNTAS");

        painel.classList.add("SAINDO");

        setTimeout(function() {

            mostrarPergunta();

            respostaSelecionada = false

            painel.classList.remove("SAINDO");
            painel.classList.add("ENTRANDO");

            setTimeout(function() {
                painel.classList.remove("ENTRANDO");
            }, 50);
        }, 400);
    }

    else {
        let estrelas = 3 - erradas;

        if (estrelas < 0) {
            estrelas = 0;
        }

        RESULTADOS_CERTOS.innerHTML = "ACERTOS: " + certas;
        RESULTADOS_ERRADOS.innerHTML = "ERROS: " + erradas;

        ESTRELAS.innerHTML = "⭐".repeat(estrelas);

        document.querySelector("#JOGO-BLUR").style.display = "block";

        RESULTADO.style.display = "flex";
    }
}, 500);