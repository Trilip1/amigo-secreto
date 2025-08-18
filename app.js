
let listaAmigos = [];
let limiteArray;

const botao = document.getElementById('amigo')

// Função que recebe um evento como parâmetro, checa se esse evento advém do uso da tecla Enter e executa a função adicionarAmigo();
function teclaEnter(event) {
    if (event.key == 'Enter') {
        adicionarAmigo();
    }
}
// Adiciona um EventListener ao input com o ID 'amigo' dentro do HTML
botao.addEventListener('keyup', teclaEnter);

// Função que adiciona os amigos, verifica se a string
function adicionarAmigo() {
    mostrarTexto('h2', 'Digite o nome do seu amigos');

    // Pega o valor inserido no campo de input do HTML e capitaliza a primeira letra
    let amigo = document.querySelector('input').value.trim();
    amigo = amigo.charAt(0).toUpperCase() + amigo.slice(1);

    // Verifica se o valor inserido no campo de texto é válido e de fato é uma string
    if (amigo !== "" && amigo !== undefined && temLetras(amigo) == true) {
        // Verifica se o valor já está dentro da array e retorna a condicional caso esteja
        if (listaAmigos.includes(amigo)) {
            limparTexto();
            mostrarTexto('h2', 'Esse nome já está na lista!');
            return; 
        }
        // Adiciona o valor inserido para dentro da array separado por quebras de linha
        listaAmigos.push(amigo);
        let listaFormatada = listaAmigos.join('<br>')

        //Atribui o tamanho da array à variável de limite pra que seja utilizado como um teto na geração de números
        limiteArray = listaAmigos.length

        //Adiciona a array atualizada no html
        adicionarTextoPorID('listaAmigos', listaFormatada);
        limparTexto();
    } else {
        mostrarTexto('h2', 'Tem que ser um nome de verdade!');
    }  
}

// Função para limpar a barra de inserir nomes.
function limparTexto() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

//Função específica para adição da lista de nomes ao HTML.
function adicionarTextoPorID(elementID, texto) {
    const campoLista = document.getElementById(elementID);
    campoLista.innerHTML = texto;
}

//Função genérica para inserir texto no HTML a partir de um seletor genérico.
function mostrarTexto(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// função que sorteia os índices do array com base em uma geração de números aleatórios limitados ao tamanho da array
function sortearAmigo() {
    const numeroIndice = gerarNumero();
    const escolhido = listaAmigos[numeroIndice];
    const mensagemFinal = `O amigo secreto sorteado é: ${escolhido}`;
    adicionarTextoPorID('resultado', mensagemFinal);
}

// Função pra gerar um número aleatório de acordo com o tamanho da array pra sortear os elementos dentro dela.
function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * limiteArray);
    return numeroAleatorio; 
}

function temLetras(parameter) {
    const regex = /^[a-zA-Z]+$/
    return regex.test(parameter);
}
