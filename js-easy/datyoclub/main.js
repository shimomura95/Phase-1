let cntPerson = 0;

function cntUp() {
    cntPerson += 1;
}

const cntDown = function () {
    cntPerson -= 1;
    if (cntPerson < 0) {
        alert('もう誰もいない');
        cntPerson = 0;
    }
}

/*const reply = function () {
    const word1 = 'どうぞどうぞ';
    const action = word1.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
}*/

const reply = function () {
    const action = Array(1 * cntPerson + 1).join('どうぞどうぞ');
    alert(action);
    cntPerson = 0;
}