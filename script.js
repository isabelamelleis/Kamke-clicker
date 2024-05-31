let NALDOCOIN = 0;
const botaoKamkeClicker = document.getElementById('kamke-clicker');

botaoKamkeClicker.addEventListener('click', contarClicks);

function contarClicks() {
    NALDOCOIN++;
    let naldoCoins = document.getElementById('naldo-coins');
    naldoCoins.innerText = NALDOCOIN;
}