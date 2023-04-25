for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

/*let v = 0;
const rewriteNum = document.getElementById('rewriteNum')
rewriteNum.innerHTML = v;*/


/*const rewriteCntUp = function () {
    v += 1;
    if (v % 3 === 0 && v % 5 === 0) {
        rewriteNum.innerHTML = 'FizzBuzz'
    } else if (v % 3 === 0) {
        rewriteNum.innerHTML = 'Fizz'
    } else if (v % 5 === 0) {
        rewriteNum.innerHTML = 'Buzz'
    } else {
        rewriteNum.innerHTML = v;
    }
}*/

let w = 0;
const showNum = document.getElementById('showNum')
showNum.innerHTML = w;

const fizzBtn = function () {
    if (w % 3 === 0) {
        fizzBtn.innerHTML = 'Fizz'
    } else {
        alert('不正解')
        location.reload();
    }
}

const buzzBtn = function () {
    if (w % 5 === 0) {
        buzzBtn.innerHTML = 'Buzz'
    } else {
        alert('不正解')
        location.reload();
    }
}

const fizzbuzzBtn = function () {
    if ((w % 3 === 0) & (w % 5 === 0)) {
        fizzbuzzBtn.innerHTML = 'FizzBuzz'
    } else {
        alert('不正解')
        location.reload();
    }
}

const numBtn = function () {
    w += 1;
    if (w % 3 === 0 || w % 5 === 0) {
        alert('不正解')
        location.reload()
    }
    showNum.innerHTML = w;
}