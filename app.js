
let listaAmigos = [];
let limiteArray;

function adicionarAmigo() {
    mostrarTexto('h2', 'Digite o nome dos seus amigos');

    // Pega o valor inserido no campo de input do HTML e capitaliza a primeira letra
    let amigos = document.querySelector('input').value;
    amigos = amigos.charAt(0).toUpperCase() + amigos.slice(1);

    // Verifica se o valor inserido no campo de texto é válido e de fato é uma string
    if (amigos !== "" && amigos !== undefined && isNaN(amigos)) {
        // Verifica se o valor já está dentro da array e retorna a condicional caso esteja
        if (listaAmigos.includes(amigos)) {
            limparTexto();
            mostrarTexto('h2', 'Esse nome já está na lista!');
            return; 
        }
        // Adiciona o valor inserido dentro da array separado por quebras de linha
        listaAmigos.push(amigos);
        let listaAmigos2 = listaAmigos.join('<br>')

        //Atribui o tamanho da array a variável de limite pra que seja usado como um teto na geração de números
        limiteArray = listaAmigos.length

        //Adiciona a array atualizada no html
        adicionarAmigosDaLista('listaAmigos', listaAmigos2);
        limparTexto();
    } else {
        mostrarTexto('h2', 'Tem que ser um nome de verdade!');
    }  
}


// Função para limpar a barra de inserir nomes.
function limparTexto() {
    amigos = document.querySelector('input');
    amigos.value = '';
}

//Função específica para adição da lista de nomes ao HTML.
function adicionarAmigosDaLista(elementID, texto) {
    let campoLista = document.getElementById(elementID);
    campoLista.innerHTML = texto;
}

//Função genérica para inserir texto no HTML a partir de um seletor genérico.
function mostrarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// função que sorteia os índices do array com base em uma geração de números aleatórios limitados ao tamanho da array
function sortearAmigo() {
    gerarNumero();

}
// Função pra gerar um número aleatório de acordo com o tamanho da array pra sortear os elementos dele.
function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * limiteArray);
    console.log(numeroAleatorio);
}
