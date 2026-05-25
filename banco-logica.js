/* Lógica do Banco - Autor: Tony P. Morais */

const cartao = document.getElementById('meuCartao');
const btnRoxo = document.getElementById('cor-roxo');
const btnAzul = document.getElementById('cor-azul');
const btnRosa = document.getElementById('cor-rosa');

btnRoxo.addEventListener('click', function() {
cartao.style.backgroundColor = '#bd93f9';
});

btnAzul.addEventListener('click', function() {
cartao.style.backgroundColor = '#8be9fd';
});

btnRosa.addEventListener('click', function() {
cartao.style.backgroundColor = '#ff79c6';
});

