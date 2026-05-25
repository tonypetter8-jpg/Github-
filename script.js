/* Lógica do Quiz - Autor: Tony P. Morais */

const perguntas = [
"Você gostaria de ter um banco onde o site, o aplicativo e até seu cartão de crédito te representem?",
"Uma conta com seu jeito, com suas cores e benefícios exclusivos para você?",
"Um site ou app onde você possa mudar as cores para um tema e até seu cartão tenha a ver com você?",
"Quer conhecer um banco novo, diferente de tudo que você já viu?"
];

let indiceAtual = 0;

function proximaPergunta() {
indiceAtual = indiceAtual + 1;

if (indiceAtual < perguntas.length) {
document.getElementById("texto-pergunta").innerText = perguntas[indiceAtual];
} else {
// 1. Muda o texto principal agradecendo o usuário
document.getElementById("texto-pergunta").innerText = "Obrigado por responder! Clique no link abaixo para conhecer nossos cartões.";

// 2. Esconde a caixinha de botões Sim/Não para não confundir
document.querySelector(".botoes").style.display = "none";

// 3. Faz o link de redirecionamento aparecer na tela
document.getElementById("link-banco").style.display = "block";
}
}
