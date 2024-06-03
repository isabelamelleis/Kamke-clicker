let NALDOCOIN = 0;


// botão do reinaldo
const botaoKamkeClicker = document.getElementById('kamke-clicker');


// "p" do html onde está a contagem dos naldocoins
let naldoCoins = document.getElementById('naldo-coins');


// contagem dos clicks para contabilizar mais naldocoins
botaoKamkeClicker.addEventListener('click', contarClicks);
function contarClicks() {
    NALDOCOIN++;
    naldoCoins.innerText = NALDOCOIN;
}

// ---------------------------------------------------------------------------
// cursor - primeira compra para CURSOR
let precoCursor = document.getElementById('precoCursor');
let precoCursorValor = 10;
precoCursor.innerText = precoCursorValor;
// ---------------------------------------------------------------------------

const botaoComprarCursor = document.getElementById('compraCursor');
botaoComprarCursor.addEventListener('click', function() {
    if (NALDOCOIN < precoCursorValor) {
        window.alert("TOMA NO TEU CU");
    } else { // Mudar Preço
        NALDOCOIN = NALDOCOIN - precoCursorValor;
        naldoCoins.innerText = NALDOCOIN;
        precoCursorValor =(precoCursorValor*2);
        precoCursor.innerText = precoCursorValor;
        let divCursorComprado = document.getElementById('displayNone');
        divCursorComprado.style.display = 'flex';
        divCursorComprado.classList.add('divCursorComprado');
    }
});


