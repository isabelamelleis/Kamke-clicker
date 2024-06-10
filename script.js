//quantidade absoluta de naldocoins na gameplay do usuário
let NALDOCOIN = 0;


// botão do reinaldo
const botaoKamkeClicker = document.getElementById('kamke-clicker');


// "p" do html onde está a contagem dos naldocoins
let naldoCoins = document.getElementById('NALDOCOINS');

// contagem dos clicks para contabilizar mais naldocoins
botaoKamkeClicker.addEventListener('click', () => {
    NALDOCOIN = NALDOCOIN + 1 + quantGustavo;
    naldoCoins.innerText = NALDOCOIN;
    if (NALDOCOIN >= 100) {
        desbloquearGustavo();
    } 
    
    if (NALDOCOIN >= 300) {
        desbloquearRuan();
    }
});

// ------------------------------ EFEITOS SONÓROS ----------------------------

// Audio Cursor
const audioBotaoBomDia = new Audio();
audioBotaoBomDia.src='../visual/audios/bom_dia.mp3'

function botaoSomBomDia() {
    audioBotaoBomDia.currentTime = 0;
    audioBotaoBomDia.play();
}
//Audio Badzin
const audioBotao2 = new Audio();
audioBotao2.src='../visual/audios/badzin_audio.mp3'

function BadzinAudio() {
    audioBotao2.currentTime = 0;
    audioBotao2.play();
}
//Audio Ruan
const audioBotao3 = new Audio();
audioBotao3.src='../visual/audios/ruan_audio.mp3'

function RuanAudio() {
    audioBotao3.currentTime = 0;
    audioBotao3.play();
}

// ------------------------------ CURSOR -------------------------------------
// primeira compra para CURSOR
const botaoComprarCursor = document.getElementById('compra-cursor');
let precoCursor = document.getElementById('preco-cursor');
let precoCursorValor = 10;
precoCursor.innerText = precoCursorValor;

//cria uma variável e atribui o ID da mensagem no botão
const mensagemCursorID = document.getElementById('mensagem-cursor-id');

// quando o mouse passa por cima do botão, solta a mensagem que ta na div referenciada pelo ID
botaoComprarCursor.addEventListener('mouseover', () => {
    timeoutCursor = setTimeout(() => {
    mensagemCursorID.style.display = 'block';
    }, 500);
});

// quando o mouse sai de cima do botão, ele volta a ficar desaparecido
botaoComprarCursor.addEventListener('mouseout', () => {
    clearTimeout(timeoutCursor);
    mensagemCursorID.style.display = 'none';
});

let quantCursor = 0;
botaoComprarCursor.addEventListener('click', function() {
    if (NALDOCOIN < precoCursorValor) {
        window.alert('TOMA NO TEU CU');
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
        }
        setInterval(autoClick, 1500);
        if (quantCursor >= 10);
            setInterval(autoClick, 1000);
        
        // aumenta a quantidade de cursores possuídos a cada compra
        quantCursor++;

        // aumenta e mostra o numero de cursores comprados
        const stacksDeCursors = document.getElementById('stacks-cursors');
        stacksDeCursors.innerText = `${quantCursor}x`;
}});

// ------------------------------ GUSTAVO VENTURI ----------------------------------
const botaoBadzinBloqueado = document.getElementById('compra-gustavo-bloqueado');
const botaoBadzin = document.getElementById('compra-gustavo');

// Mensagem do botão badzin bloqueado
const mensagemBadzinBloqueado = document.getElementById('mensagem-badzin-bloqueado-id');
botaoBadzinBloqueado.addEventListener('mouseover', () => {
    timeoutBadzin = setTimeout(() => {
        mensagemBadzinBloqueado.style.display = 'block';
    },500)
});
botaoBadzinBloqueado.addEventListener('mouseout', () => {
    clearTimeout(timeoutBadzin);
    mensagemBadzinBloqueado.style.display = 'none';
})

// Mensagem do botão badzin desbloqueado
const mensagemBadzin = document.getElementById('mensagem-badzin-id');
botaoBadzin.addEventListener('mouseover', () => {
    timeoutBadzin = setTimeout(() => { 
            mensagemBadzin.style.display = 'block';
        }, 500);
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

// primeira compra para BADZIN
let precoGustavo = document.getElementById('preco-gustavo');
let precoGustavoValor = 100;
precoGustavo.innerHTML = precoGustavoValor;

quantGustavo = 0;
botaoBadzin.addEventListener('click', function() {
    
    if (NALDOCOIN < precoGustavoValor) {
        window.alert('TOMA NO TEU CU');
    } else {

        BadzinAudio();

        // altera a contagem dos NALDOCOINS depois da compra
        NALDOCOIN = NALDOCOIN - precoGustavoValor;
        naldoCoins.innerText = NALDOCOIN;

        // aumenta o valor do badzin para uma próxima compra
        precoGustavoValor = precoGustavoValor + Math.trunc((precoGustavoValor * 1.7));
        precoGustavo.innerText = precoGustavoValor;


        // faz aparecer a div com o cursor do badzin na tela após a primeira compra
        let divBadzinComprado = document.getElementById('badzin-comprado');
        divBadzinComprado.style.display = 'flex';
        divBadzinComprado.classList.add('div-badzin-comprado');
        
        // define a quantidade de badzins e mostra na tela
        quantGustavo++;

        //aumenta e mostra o número de badzins comprados
        const stacksBadzins = document.getElementById('stacks-badzins');
        stacksBadzins.innerText = `${quantGustavo}x`;
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
    }, 500);
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
    },500)
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
        window.alert('TIRA SORAA 😭😭😭 ')
})

// COMPRA DO RUAN
botaoRuan.addEventListener('click', () => {
    
    if (NALDOCOIN < precoRuanValor) {
    window.alert('TOMA NO TEU CU')
    }
    else {

    RuanAudio();

    // altera a contagem dos NALDOCOINS depois da compra
    NALDOCOIN = NALDOCOIN - precoRuanValor;
    naldoCoins.innerText = NALDOCOIN;

    // aumenta o valor do goober para uma próxima compra
    precoRuanValor = Math.trunc(precoRuanValor+(precoRuanValor * 2));
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
    }
    setInterval(autoClick, 800)

    if (quantRuan >= 5)
        setInterval(autoClick, 500)
    // Futuramente adicionar o the midnight goober here
    if (quantRuan >= 10)
        setInterval(autoClick, 200)
}
})


