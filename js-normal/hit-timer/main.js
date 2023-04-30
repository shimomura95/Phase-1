const startTimer = document.getElementById('startTimer');
const confirmTime = document.getElementById('confirmTime');

var timer;

function timePass() {
    timer++;
    word1 = `${timer}経過、ずれている。`;
    word2 = `${timer}経過、ピッタリ。`;
    if (timer === 20) {
        alert(word2)
    } else {
        alert(word1)
    }
}

var pass;

function startTimer() {
    timer = 0;
    pass = setInterval(timePass(), 100);
    document.getElementById('start').disabled = true;

}

function confirmTime() {

}