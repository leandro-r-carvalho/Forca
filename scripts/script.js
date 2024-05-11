//Palavras - Dicas - 2 arrays
const palavraSecreta = ["CLARINETE", "ELEFANTE", "CADEIRA", "BIBLIA", "VERDE"];
const dicaPalavra = ["Instrumento Musical", "Animal", "Objeto", "Livro", "Cor"];

//Pegar a quantidade de letra da palavra escolhida, minimo 5.
let qtdeLetra = 5;

const btnComecar = document.querySelector(".btnComecar")
const dica = document.getElementById("dica");
const palavra = document.getElementById("palavraSecreta");
const quantidadeLetra = document.getElementById("qtdeLetra");

//Função para escolher a palavra
function escolhaPalavra() {
    //Gerar um numero randomico pelo indice da palavra
    const index = Math.floor(Math.random() * 4);
    dica.innerHTML = dicaPalavra[index];
    palavra.innerHTML = palavraSecreta[index];
    qtdeLetra = palavraSecreta[index].length;
    quantidadeLetra.innerHTML = qtdeLetra;
    criarInputs(qtdeLetra);
}

btnComecar.addEventListener("click", escolhaPalavra);

/* Variaveis das divs */
const cx6 = document.querySelector("#txtL6");
const cx7 = document.querySelector("#txtL7");
const cx8 = document.querySelector("#txtL8");
const cx9 = document.querySelector("#txtL9");

//De acordo com o numero de letrar habilitar o numero de inputs
function criarInputs(num) {
    switch (num) {
        case 6:
            cx6.style.display = "block";
            cx7.style.display = "none";
            cx8.style.display = "none";
            cx9.style.display = "none";
            break;
        case 7:
            cx6.style.display = "block";
            cx7.style.display = "block";
            cx8.style.display = "none";
            cx9.style.display = "none";
            break;
        case 8:
            cx6.style.display = "block";
            cx7.style.display = "block";
            cx8.style.display = "block";
            cx9.style.display = "none";
            break;
        case 9:
            cx6.style.display = "block";
            cx7.style.display = "block";
            cx8.style.display = "block";
            cx9.style.display = "block";
            break;
    }
}

const botoesLetras = document.querySelectorAll(".btnLetra");
const letraEscolhida = document.getElementById("letrasEscolhidas");
let letraAtual = "";

//Função para colocar a letra nas letras utilizadas
function insereLetra(evento) {
    letraAtual = evento.target.textContent;
    //possuiLetra(letraAtual);
    letraEscolhida.innerHTML = `${letraEscolhida.innerHTML} - ${evento.target.textContent}`;
    //Manda para a variavel a letra escolhida
    
}

botoesLetras.forEach((botao) => botao.addEventListener("click", insereLetra));

//Função para saber se tem a letra na palavra e indicar a posição

function possuiLetra(letra) {
    if (palavraSecreta) {

    }
}
