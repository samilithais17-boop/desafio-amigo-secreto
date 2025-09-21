//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];  // Array para armazenar os nomes dos amigos

// Função para adicionar amigos

function adicionarAmigo() {

    const input = document.getElementById('amigo');

    const nome = input.value.trim();

    if (nome === "") {

        alert("Por favor, insira um nome.");

        return;

    }

    amigos.push(nome);

    input.value = "";  // Limpa o campo de entrada

    atualizarListaAmigos();  // Atualiza a lista de amigos

}

// Função para atualizar a lista de amigos

function atualizarListaAmigos() {

    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";  // Limpa a lista

    // Cria um item <li> para cada amigo

    for (let i = 0; i < amigos.length; i++) {

        const item = document.createElement('li');

        item.textContent = amigos[i];

        lista.appendChild(item);

    }

}

// Função para realizar o sorteio

function sortearAmigo() {

    if (amigos.length < 2) {

        alert("Você precisa de pelo menos 2 amigos para o sorteio.");

        return;

    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultado(amigoSorteado);  // Exibe o resultado

}

// Função para exibir o resultado do sorteio

function mostrarResultado(amigo) {

    const listaResultado = document.getElementById('resultado');

    listaResultado.innerHTML = "";  // Limpa o resultado anterior

    const item = document.createElement('li');

    item.textContent = `O amigo secreto sorteado é: ${amigo}`;

    listaResultado.appendChild(item);

}

// Função para limpar a lista de amigos

function limparLista() {

    amigos = [];  // Limpa o array de amigos

    atualizarListaAmigos();  // Atualiza a lista visível na tela

}
