
let listaAmigos = [];

function adicionarAmigo() {
    let amigos = document.querySelector('input').value;
    if (amigos !== "" && amigos !== undefined) {
        listaAmigos.push(amigos);
        console.log(listaAmigos);
        limparTexto();
    } else {
        return;
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