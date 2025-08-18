
let listaAmigos = [];

function adicionarAmigo() {
    mostrarTexto('h2', 'Digite o nome dos seus amigos');
    let amigos = document.querySelector('input').value;
    amigos = amigos.charAt(0).toUpperCase() + amigos.slice(1);
    if (amigos !== "" && amigos !== undefined && typeof(amigos) == Number) {
        if (listaAmigos.includes(amigos)) {
            limparTexto();
            mostrarTexto('h2', 'Esse nome já está na lista!');
            return;
        }
        listaAmigos.push(amigos);
        console.log(listaAmigos);
        limparTexto();
    } else {
        mostrarTexto('h2', 'Tem que ser um nome de verdade!');
    }  
}

function limparTexto() {
    amigos = document.querySelector('input');
    amigos.value = '';
}

function mostrarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortearAmigo() {

}