// Carrossel
let indice = 0;
const itens = document.querySelectorAll('.carrossel-imagens .item');
const totalItens = itens.length;

function mostrarItem() {
    itens.forEach(item => item.style.display = 'none');
    itens[indice].style.display = 'block';
}

function mudarImagem(n) {
    indice += n;
    if (indice < 0) {
        indice = totalItens - 1;
    } else if (indice >= totalItens) {
        indice = 0;
    }
    mostrarItem();
}

mostrarItem();

// Alternância de seções
const links = document.querySelectorAll("nav ul li a");
const secoes = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = link.getAttribute("href").substring(1);

        secoes.forEach(secao => {
            if (secao.id === alvo) {
                secao.style.display = "block";
            } else {
                secao.style.display = "none";
            }
        });
    });
});

// Exibir só a primeira seção ao iniciar
window.addEventListener("DOMContentLoaded", () => {
    secoes.forEach((secao, index) => {
        secao.style.display = index === 0 ? "block" : "none";
    });
});
