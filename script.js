// pegar elementos
const select = document.querySelector("#personagem");
const botao = document.querySelector("#votar");
const erro = document.querySelector(".erro");
const lista = document.querySelector("#lista-ranking");

// votos iniciais
let votos = {
    Mario: 0,
    Luigi: 0,
    Peach: 0,
    Bowser: 0
};

// atualizar ranking
function atualizarRanking() {
    lista.innerHTML = "";

    // ordenar maior → menor
    let ordem = Object.entries(votos).sort((a, b) => b[1] - a[1]);
    let maior = ordem[0][1]; // maior quantidade de votos

    ordem.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item[0] + ": " + item[1] + " voto(s)";

        if (item[1] === maior && maior > 0) {
            li.classList.add("lider"); // destaque
        }

        lista.appendChild(li);
    });
}

// função votar
function votar() {
    let escolhido = select.value;

    if (escolhido === "") {
        erro.textContent = "Escolha um personagem!";
        return;
    }

    erro.textContent = "";
    votos[escolhido]++; // soma voto
    atualizarRanking(); // atualiza tela
}

// botão clicar
botao.addEventListener("click", votar);

// ranking inicial
atualizarRanking();
