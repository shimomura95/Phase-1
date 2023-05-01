// 初見
/*const startTimer = document.getElementById('startTimer');
const confirmTime = document.getElementById('confirmTime');

var timer;

var pass;

function startTime() {
    timer = 0;
    timer++;
    document.getElementById('start').disabled = true;
    setTimeout(function () {
        clearInterval(timer);
    }, 40000)
}

function confirmTimer() {
    clearInterval(timer);
    word1 = `${timer}経過、ずれている。`;
    word2 = `${timer}経過、ピッタリ。`;
    if (timer === 20) {
        alert(word2)
    } else {
        alert(word1)
    }
}

startTimer.addEventListener('click', function () {
    timer = setInterval(startTime(), 100);
})

confirmTime.addEventListener('click', function () {
    confirmTimer();
})*/

//完成
/*let timer;
let sec = 0;

const startTimer = document.getElementById('startTimer');
const confirmTime = document.getElementById('confirmTime');

confirmTime.addEventListener('click', function () {
    if (sec === 20) {
        alert('成功');
    } else if (sec < 20) {
        alert(`現在${sec}秒、失敗：まだ早い!`);
    } else {
        alert(`現在${sec}秒、再挑戦!!`);
    }
    clearInterval(timer);
    sec = 0;
})

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('count()', 1000)
})

const count = function () {
    sec += 1;
    if (sec === 40) {
        clearInterval(timer);
        alert('終了');
        sec = 0;
    }
}*/

//チャレンジ
let timer;

const confirmTime2 = document.getElementById('confirmTime2');
const startTimer2 = document.getElementById('startTimer2');

let startTime;
let nowTime;
let stopTime;

confirmTime2.addEventListener('click', function () {
    nowTime = new Date();
    if (startTime === undefined) {
        return;
    }
    if (stopTime === 20) {
        alert('成功');
    } else if (stopTime < 20) {
        alert(`現在${stopTime}、失敗`)
    } else {
        alert(`現在${stopTime}、再挑戦`)
    }
    clearInterval(timer);
})

startTimer2.addEventListener('click', function () {
    startTime = new Date();
    timer = setInterval('count2()', 1000);
})

const count2 = function () {
    let checkTime = new Date();
    stopTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
    if (stopTime === 40) {
        alert('終了');
    }
}