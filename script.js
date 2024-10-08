// ------------------------------ LOADING ----------------------------

let tituloLoading = document.getElementById('titulo-loading');

function loading() {
    tituloLoading.innerText = 'Carregando...';
    setTimeout(() => {
        location.replace('index.html')
    }, 3000)
}



// -------------- FUNCIONALIDADES BOTÃO KAMKE CLICKER -----------------

//quantidade absoluta de naldocoins na gameplay do usuário
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bonus_time() {

    var bonus_title = document.getElementsByClassName('bonus_title')[0]

    sec = Math.floor(Math.random() * 360) + 180

    var old_clickValue = clickValue

    multiplier = Math.floor(Math.random() * 4) + 0

    await sleep(sec * 1000);

    window.alert("bonus time")

    kamke = document.getElementById('kamke-clicker');

    switch(multiplier) {
        case 0:
            multiplier = -1
            clickValue = -1
            kamke.style.setProperty('--sometime', '80s') 
          break;
        case 1:
            multiplier = 2
            clickValue = clickValue * 2
            kamke.style.setProperty('--sometime', '8s') 
          break;
        case 2:
            clickValue = clickValue * 2
            kamke.style.setProperty('--sometime', '8s') 
        break;
        case 3:
            clickValue = clickValue * 3
            kamke.style.setProperty('--sometime', '4s') 
        break;
        case 4:
            clickValue = clickValue * 4
            kamke.style.setProperty('--sometime', '4s') 
        break;
        case 5:
            clickValue = clickValue * 5
            kamke.style.setProperty('--sometime', '0.2s') 
        break;
        default:

          
      } 

    bonus_title.innerHTML = 'Bonus Time: X' + multiplier

    await sleep(30 * 1000);

    bonus_title.innerHTML = ""

    kamke.style.setProperty('--sometime', '50s') 

    clickValue = old_clickValue

    bonus_time()
}



let NALDOCOIN = 0;

var clickValue = 1;

let NALDOCOINST = document.getElementById('NALDOCOINST')

function mudaTitulo3000() {
    NALDOCOINST.innerText = `${NALDOCOIN} - Kamke Clicker DEMO`;
}

bonus_time()

// botão do reinaldo
const botaoKamkeClicker = document.getElementById('kamke-clicker');

// "p" do html onde está a contagem dos naldocoins
let naldoCoins = document.getElementById('NALDOCOINS');

// contagem dos clicks para contabilizar mais naldocoins
botaoKamkeClicker.addEventListener('click', () => {
    NALDOCOIN = NALDOCOIN + clickValue + quantGustavo;
    naldoCoins.innerText = NALDOCOIN;
    verificarDesbloqueios();
    mudaTitulo3000();
});

function verificarDesbloqueios() {
    if (NALDOCOIN >= 100) {
        desbloquearGustavo();
    }
    if (NALDOCOIN >= 300) {
        desbloquearRuan();
    }
}

// Fazer uma imagem aparecer quando se é clicado no botão do Kamke
var imagemClique = document.getElementById('imagem-clique');

botaoKamkeClicker.addEventListener('click', (evento) => {
    // Coleta a posição do mouse
   const mouseX = evento.clientX; 
   const mouseY = evento.clientY;


   // Posiciona a imagem na posição do mouse
   imagemClique.style.left = `${mouseX-38}px`;
   imagemClique.style.top = `${mouseY-60}px`;

    
   imagemClique.style.display = 'block';

    setTimeout(() => {
        imagemClique.style.display = 'none';
    }, 1500);
});


// verifica se o jogador tem os NALDOCOINS necessários para comprar os itens da loja
function verificarNaldocoinsNecessarios() {
    if (NALDOCOIN < precoCursorValor) {
        botaoComprarCursor.style.color = 'red';
        botaoComprarCursor.style.fontWeight = 'bold' ;
    } else {
        botaoComprarCursor.style.color = 'black';
        botaoComprarCursor.style.fontWeight = 'normal';
    }

    if (NALDOCOIN < precoGustavoValor) {
        botaoBadzin.style.color = 'red';
        botaoBadzin.style.fontWeight = 'bold' ;
    } else {
        botaoBadzin.style.color = 'black';
        botaoBadzin.style.fontWeight = 'normal';
    }

    if (NALDOCOIN < precoRuanValor) {
        botaoRuan.style.color = 'red';
        botaoRuan.style.fontWeight = 'bold' ;
    } else {
        botaoRuan.style.color = 'black';
        botaoRuan.style.fontWeight = 'normal';
    }

}
setInterval(verificarNaldocoinsNecessarios, 0);


// ------------------------------ EFEITOS SONÓROS ----------------------------

// Audio Cursor
const audioBotaoBomDia = new Audio();
audioBotaoBomDia.src='/visual/audios/bom_dia.mp3'

function botaoSomBomDia() {
    audioBotaoBomDia.currentTime = 0;
    audioBotaoBomDia.play();
}
//Audio Badzin
const audioBotao2 = new Audio();
audioBotao2.src='/visual/audios/badzin_audio.mp3'

function BadzinAudio() {
    audioBotao2.currentTime = 0;
    audioBotao2.play();
}
//Audio Ruan
const audioBotao3 = new Audio();
audioBotao3.src='/visual/audios/ruan_audio.mp3'

function RuanAudio() {
    audioBotao3.currentTime = 0;
    audioBotao3.play();
}

// ------------------------------ CURSOR -------------------------------------

// Botão cursor
const botaoComprarCursor = document.getElementById('compra-cursor');

// Definindo as variáveis de valor e quantidade de cursores comprados
let precoCursor = document.getElementById('preco-cursor');
let precoCursorValor = 10;
precoCursor.innerText = precoCursorValor;
let quantCursor = 0;

//cria uma variável e atribui o ID da mensagem no botão
const mensagemCursorID = document.getElementById('mensagem-cursor-id');

// quando o mouse passa por cima do botão, solta a mensagem que ta na div referenciada pelo ID
botaoComprarCursor.addEventListener('mouseover', () => {
    timeoutCursor = setTimeout(() => {
    mensagemCursorID.style.display = 'block';
    }, 200);
});

// quando o mouse sai de cima do botão, ele volta a ficar desaparecido
botaoComprarCursor.addEventListener('mouseout', () => {
    clearTimeout(timeoutCursor);
    mensagemCursorID.style.display = 'none';
});

// Compra do cursor
botaoComprarCursor.addEventListener('click', function() {
    if (NALDOCOIN < precoCursorValor) {
        window.alert('Falta Kamke Coins :(');
    } else {

        // altera a contagem dos NALDOCOINS depois da compra
        NALDOCOIN = NALDOCOIN - precoCursorValor;
        naldoCoins.innerText = NALDOCOIN;

        // aumenta o valor do cursor para uma próxima compra
        precoCursorValor = Math.trunc(precoCursorValor + (precoCursorValor * 0.6)); // Math.trunc tira todas as casas depois da vírgula
        precoCursor.innerText = precoCursorValor;

        botaoSomBomDia();

        // faz aparecer a div com a imagem do cursor após a primeira compra
        let divCursorComprado = document.getElementById('cursor-reinaldo-comprado');
        divCursorComprado.style.display = 'flex';
        divCursorComprado.classList.add('div-cursor-comprado');

        // faz o cursor (que acabou de ser comprado) começar a fazer os autoclicks
        function autoClick() {
            NALDOCOIN++;
            naldoCoins.innerText = NALDOCOIN;
            verificarDesbloqueios();
            mudaTitulo3000();
        }
        setInterval(autoClick, 1000);
        if (quantCursor >= 10) {
            setInterval(autoClick, 300);
            verificarDesbloqueios();
            mudaTitulo3000();
        };

        // aumenta a quantidade de cursores possuídos a cada compra
        quantCursor++;


        // aumenta e mostra o numero de cursores comprados
        const stacksDeCursors = document.getElementById('stacks-cursors');
        stacksDeCursors.innerText = `${quantCursor}x`;
}});

// ------------------------------ GUSTAVO VENTURI ----------------------------------

// Criando os botões do BADZIN bloqueado e desbloqueado
const botaoBadzinBloqueado = document.getElementById('compra-gustavo-bloqueado');
const botaoBadzin = document.getElementById('compra-gustavo');

// Definindo as variáveis de valor e quantidade de BADZINS comprados
let precoGustavo = document.getElementById('preco-gustavo');
let precoGustavoValor = 100;
precoGustavo.innerHTML = precoGustavoValor;
quantGustavo = 0;

// Mensagem do botão BADZIN bloqueado
const mensagemBadzinBloqueado = document.getElementById('mensagem-badzin-bloqueado-id');
botaoBadzinBloqueado.addEventListener('mouseover', () => {
    timeoutBadzin = setTimeout(() => {
        mensagemBadzinBloqueado.style.display = 'block';
    },200)
});
botaoBadzinBloqueado.addEventListener('mouseout', () => {
    clearTimeout(timeoutBadzin);
    mensagemBadzinBloqueado.style.display = 'none';
})

// Mensagem do botão BADZIN desbloqueado
const mensagemBadzin = document.getElementById('mensagem-badzin-id');
botaoBadzin.addEventListener('mouseover', () => {
    timeoutBadzin = setTimeout(() => { 
            mensagemBadzin.style.display = 'block';
        }, 200);
})
botaoBadzin.addEventListener('mouseout', () => {
    clearTimeout(timeoutBadzin);
    mensagemBadzin.style.display = 'none';
});

// faz o gustavo borrado desaparecer e aparecer o comprável
function desbloquearGustavo() {
    let badzinNaoDesbloqueado = document.getElementById('badzin-nao-desbloqueado');
    badzinNaoDesbloqueado.style.display = 'none';

    let gustavoDesbloqueado = document.getElementById('badzin-desbloqueado');
    gustavoDesbloqueado.style.display = 'flex';
    gustavoDesbloqueado.classList.add('display-flex-mensagens-e-botoes')
}

// faz uma mensagem de erro aparecer caso o botão do gustavo bloqueado seja clicado
botaoBadzinBloqueado.addEventListener('click', function () {
    if (NALDOCOIN < precoGustavoValor) {
       window.alert('salamaleicoيساعد');
    }
});

// Compra de BADZINS
botaoBadzin.addEventListener('click', function() {
    
    if (NALDOCOIN < precoGustavoValor) {
        window.alert('Falta Kamke Coins :(');
    } else {

        BadzinAudio();

        // altera a contagem dos NALDOCOINS depois da compra
        NALDOCOIN = NALDOCOIN - precoGustavoValor;
        naldoCoins.innerText = NALDOCOIN;

        // aumenta o valor do BADZIN para uma próxima compra
        precoGustavoValor = precoGustavoValor + Math.trunc((precoGustavoValor * 1.2));
        precoGustavo.innerText = precoGustavoValor;

        // faz aparecer a div com o cursor do BADZIN na tela após a primeira compra
        let divBadzinComprado = document.getElementById('badzin-comprado');
        divBadzinComprado.style.display = 'flex';
        divBadzinComprado.classList.add('div-badzin-comprado');
        
        // define a quantidade de BADZINS e mostra na tela
        quantGustavo++;

        //aumenta e mostra o número de BADZINS comprados
        const stacksBadzins = document.getElementById('stacks-badzins');
        stacksBadzins.innerText = `${quantGustavo}x`;

        if (quantGustavo >= 5) {
            const pigzin = document.getElementById('badzin-pig-esta-vindo');
            pigzin.src = 'visual/imagens/badzinPig.png';
            const nomePigzin = document.getElementById('nome-badzin');
            nomePigzin.innerText = 'Pigzin';
            const mensagemPigzin = document.getElementById('mensagem-badzin-id');
            mensagemPigzin.innerText = 'Pigzin.';
        }
    }
})

// --------------------------------- RUAN ---------------------------------

// Criando os botões do ruan bloqueado e desbloqueado
const botaoRuanBloqueado = document.getElementById('botao-ruan-bloqueado');
const botaoRuan = document.getElementById('compra-ruan');

// Definindo as variáveis de valor e quantidade de ruans comprados
let precoRuan = document.getElementById('preco-ruan');
let precoRuanValor = 300;
precoRuan.innerText = precoRuanValor;
quantRuan = 0;

// Mensagens ruan bloqueado
const mensagemRuanBloqueado = document.getElementById('mensagem-ruan-bloqueado')
botaoRuanBloqueado.addEventListener('mouseover',() => {
    timerRuan = setTimeout(() => {
        mensagemRuanBloqueado.style.display = 'block';
    }, 200);
});
botaoRuanBloqueado.addEventListener('mouseout',() => {
    clearTimeout(timerRuan);
    mensagemRuanBloqueado.style.display = 'none';
});

// Mensagens ruan desbloqueado
const mensagemRuanDesbloqueado = document.getElementById('mensagem-ruan-desbloqueado')
botaoRuan.addEventListener('mouseover', () => {
    timerRuan = setTimeout(() => {
        mensagemRuanDesbloqueado.style.display = 'block';
    },200)
})
botaoRuan.addEventListener('mouseout', () => {
    clearTimeout(timerRuan);
    mensagemRuanDesbloqueado.style.display = 'none'
});

// DESBLOQUEAR RUAN
function desbloquearRuan() {
    let ruanBloqueado = document.getElementById('ruan-bloqueado');
    ruanBloqueado.style.display = 'none';

    let ruanDesbloqueado = document.getElementById('ruan-desbloqueado')
    ruanDesbloqueado.style.display = 'flex';
    ruanDesbloqueado.classList.add('display-flex-mensagens-e-botoes')
}

// Mensagem de erro pro ruan bloqueado
botaoRuanBloqueado.addEventListener('click', () => {
    if (NALDOCOIN < precoRuanValor)
        window.alert(' 😭😭😭 ')
})

// COMPRA DO RUAN
botaoRuan.addEventListener('click', () => {
    
    if (NALDOCOIN < precoRuanValor) {
    window.alert('Falta Kamke Coins :(')
    }
    else {
    RuanAudio();
    // altera a contagem dos NALDOCOINS depois da compra
    NALDOCOIN = NALDOCOIN - precoRuanValor;
    naldoCoins.innerText = NALDOCOIN;

    // aumenta o valor do goober para uma próxima compra
    precoRuanValor = Math.trunc(precoRuanValor+(precoRuanValor * 1.2));
    precoRuan.innerText = precoRuanValor;

    // faz aparecer a div com o ruan na tela após a primeira compra
    let divRuanComprado = document.getElementById('ruan-comprado');
    divRuanComprado.style.display = 'flex';
    divRuanComprado.classList.add('div-ruan-comprado');

    // aumenta a quantidade de ruans possuídos a cada compra
    quantRuan ++;

    // mostra na tela número de ruans comprados
    const stacksRuans = document.getElementById('stacks-ruans')
    stacksRuans.innerText =`${quantRuan}x`;

    // funcionalidade do ruan, o que ele faz
    function autoClick () {
        NALDOCOIN++;
        naldoCoins.innerText = NALDOCOIN;
        verificarDesbloqueios();
        mudaTitulo3000();
    }
    setInterval(autoClick, 300); //VERIFICAR REDUNDÂNCIA DESSE AUTOCLICK <- "Acho que ta safe" Lorenzo 18/06/2024
    if (quantRuan >= 3) {
        setInterval(autoClick, 50);
    }
    if (quantRuan >= 5) {
        setInterval(autoClick, 20);

        // transforma o goober em midnight goober
        const imagemGoober = document.getElementById('midnight-goober-esta-vindo');
        imagemGoober.src = 'visual/imagens/midnightGoober.png';
        const midnightGoober = document.getElementById('nome-goober');
        midnightGoober.innerText = 'The Midnight Goober';
        const mensagemMidnight = document.getElementById('mensagem-ruan-desbloqueado');
        mensagemMidnight.innerText = 'MIDNIGHT GOOBER YEAH GIRLS 🤘🤘🤘';
    }
}
})

// ------------------------------ Atualizar Naldocoins no título ----------------------------

const NALDOCOINSTITULO = document.getElementById('NALDOCOINST')