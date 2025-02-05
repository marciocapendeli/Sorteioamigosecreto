let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nomeAmigo === "") {
        alert("Por favor, adicione um nome antes de continuar.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);
    
    const li = document.createElement("li");
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    const li = document.createElement("li");
    li.textContent = `🎉 Parabéns! O sorteado é: ${nomeSorteado}`;
    listaResultado.appendChild(li);
}
function reiniciarSorteio() {
    amigos = []; // Zera a lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Remove nomes da lista
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado anterior
    alert("A lista foi reiniciada! Adicione novos amigos para começar.");
}

