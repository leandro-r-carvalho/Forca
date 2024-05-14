//Palavras - Dicas - 2 arrays
const palavraSecreta = ["CLARINETE", "ELEFANTE", "CADEIRA", "BIBLIA", "VERDE"];
const dicaPalavra = ["Instrumento Musical", "Animal", "Objeto", "Livro", "Cor"];

//Pegar a quantidade de letra da palavra escolhida, minimo 5.
let qtdeLetra = 5;

const btnComecar = document.querySelector(".btnComecar");
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
    if (possuiLetra(letraAtual) != "") {
        var posLetra = possuiLetra(letraAtual);
        preencheLetraInput(letraAtual, posLetra);
        verificarVencedor(palavra.textContent, palavra.textContent.length);
    } else {
        letraEscolhida.innerHTML = `${letraEscolhida.innerHTML} - ${evento.target.textContent}`;
    }
    
}

botoesLetras.forEach((botao) => botao.addEventListener("click", insereLetra));

var temLetra = "";
//Função para saber se tem a letra na palavra e indicar a posição
function possuiLetra(letra) {
    temLetra = "";
    for (let i=0; i < palavra.textContent.length; i++) {
        if (letra == palavra.textContent[i]){ 
           temLetra = temLetra + i; 
        }
    }
    return temLetra;
}

/* Variaveis das divs */
const cx1 = document.querySelector("#txtL1");
const cx2 = document.querySelector("#txtL2");
const cx3 = document.querySelector("#txtL3");
const cx4 = document.querySelector("#txtL4");
const cx5 = document.querySelector("#txtL5");

function preencheLetraInput(letra, pos) {
    posicaoLetra= pos.split("");
    for (let i=0; i < posicaoLetra.length; i++){
        switch (posicaoLetra[i]) {
            case "0":
                cx1.value = letra;
                break;
            case "1":
                cx2.value = letra;
                break;
            case "2":
                cx3.value = letra;
                break;
            case "3":
                cx4.value = letra;
                break;
            case "4":
                cx5.value = letra;
                break;
            case "5":
                cx6.value = letra;
                break;
            case "6":
                cx7.value = letra;
                break;
            case "7":
                cx8.value = letra;
                break;
            case "8":
                cx8.value = letra;
                break;
            default:
                alert("Erro...")
        }
    }
}

const msg = document.querySelector(".msg");
function verificarVencedor(palavra, qtde){
    for (let i=0; i < qtde; i++){
        switch (Number(qtde)) {
            case 5:
                if(cx1.value !="" && cx2.value !="" && cx3.value !="" && cx4.value !="" && cx5.value !=""){    
                    msg.innerHTML = `Parabéns!!! Você acertou a palavra ${palavra}`;
                }
                break;
            case 6:
                if(cx1.value !="" && cx2.value !="" && cx3.value !="" && cx4.value !=""
                && cx5.value !="" && cx6.value !=""){
                    msg.innerHTML = `Parabéns!!! Você acertou a palavra ${palavra}`;
                }
                break;
            case 7:
                if(cx1.value !="" && cx2.value !="" && cx3.value !="" && cx4.value !=""
                && cx5.value !="" && cx6.value !="" && cx7.value !=""){
                    msg.innerHTML = `Parabéns!!! Você acertou a palavra ${palavra}`;
                }
                break;
            case 8:
                if(cx1.value !="" && cx2.value !="" && cx3.value !="" && cx4.value !=""
                && cx5.value !="" && cx6.value !="" && cx7.value !="" && cx8.value !=""){
                    msg.innerHTML = `Parabéns!!! Você acertou a palavra ${palavra}`;
                }
                break;
            case 9:
                if(cx1.value !="" && cx2.value !="" && cx3.value !="" && cx4.value !=""
                && cx5.value !="" && cx6.value !="" && cx7.value !="" && cx8.value !="" && cx9.value !=""){
                    msg.innerHTML = `Parabéns!!! Você acertou a palavra ${palavra}`;
                }
                break;
            default:
                alert("Erro...")
        }
    }
}

//Configurando o botão jogar novamente
const btnNovoJogo = document.querySelector(".btnNovoJogo");

function novoJogo(){
    //Limpar todas as inputs
    cx1.value ="";
    cx2.value ="";
    cx3.value ="";
    cx4.value ="";
    cx5.value ="";
    cx6.value ="";
    cx7.value ="";
    cx8.value =""; 
    cx9.value ="";
    //Limpar todas as mensagens
    msg.innerHTML = "";
    //chamar função do botão "Começar"
    escolhaPalavra();
}

btnNovoJogo.addEventListener("click", novoJogo);