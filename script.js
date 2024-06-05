//quantidade absoluta de naldocoins na gameplay do usuário
let NALDOCOIN = 0;


// botão do reinaldo
const botaoKamkeClicker = document.getElementById('kamke-clicker');


// "p" do html onde está a contagem dos naldocoins
let naldoCoins = document.getElementById('NALDOCOINS');


// contagem dos clicks para contabilizar mais naldocoins
botaoKamkeClicker.addEventListener('click', contarClicks);
function contarClicks() {
    NALDOCOIN++;
    naldoCoins.innerText = NALDOCOIN;
    if (NALDOCOIN >= 100) {
        desbloquearGustavo();
    }
}

// ------------------------------ CURSOR -------------------------------------
// primeira compra para CURSOR
let precoCursor = document.getElementById('preco-cursor');
let precoCursorValor = 10;
precoCursor.innerText = precoCursorValor;

const botaoComprarCursor = document.getElementById('compra-cursor');
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

        // faz aparecer a div com a imagem do cursor
        let divCursorComprado = document.getElementById('div-cursor-comprado');
        divCursorComprado.style.display = 'flex';
        divCursorComprado.classList.add('div-cursor-comprado');

        // faz o cursor (que acabou de ser comprado) começar a fazer os autoclicks
        function autoClick() {
            botaoKamkeClicker.click();
        }
        setInterval(autoClick, 1500);
        
        //aumenta a quantidade de cursores possuídos a cada compra
        quantCursor++;

        //aumenta e mostra o numero de cursores comprados
        const stacksDeCursors = document.getElementById('stacks-cursors');
        stacksDeCursors.innerText = `${quantCursor}x`;
}});

// ------------------------------ GUSTAVO VENTURI ----------------------------------
// primeira compra para BADZIN
let precoGustavo = document.getElementById('preco-gustavo');
let precoGustavoValor = 100;
precoGustavo.innerHTML = precoGustavoValor;

// faz o gustavo borrado desaparecer e aparecer o comprável
function desbloquearGustavo() {
    let badzinNaoDesbloqueado = document.getElementById('badzin-nao-desbloqueado');
    badzinNaoDesbloqueado.style.display = 'none';

    let gustavoDesbloqueado = document.getElementById('badzin-desbloqueado');
    gustavoDesbloqueado.style.display = 'flex';
}

// faz uma mensagem de erro aparecer caso o botão do gustavo bloqueado seja clicado
const botaoBadzinBloqueado = document.getElementById('compra-gustavo-bloqueado');
botaoBadzinBloqueado.addEventListener('click', function () {
    if (NALDOCOIN < 100) {
       window.alert('salamaleicoيساعد');
    }
});

const botaoBadzin = document.getElementById('compra-gustavo');
botaoBadzin.addEventListener('click', function() {
    if (NALDOCOIN < precoGustavoValor) {
        window.alert('TOMA NO TEU CU');
    } else {

        // altera a contagem dos NALDOCOINS depois da compra
        NALDOCOIN = NALDOCOIN - precoGustavoValor;
        naldoCoins.innerText = NALDOCOIN;

        // aumenta o valor do badzin para uma próxima compra
        precoGustavoValor = precoGustavoValor + (precoGustavoValor * 3);
        precoGustavo.innerText = precoGustavoValor;
        
    }
})