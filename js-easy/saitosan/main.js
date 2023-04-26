/*function setBtn() {
    const hoge = Math.random() * 10;
    if (hoge < 5) {
        alert('ぺっぺぺー')
    } else {
        alert('斎藤さんだぞ？')
    }
}*/


/*function setBtn() {
    const hoge = Math.random() * 10;
    hoge < 5 ? alert('ぺっぺぺー') : alert('斎藤さんだぞ?');
}*/

const word1 = 'ぺっぺぺー'
const word2 = '斎藤さんだぞ？'

function setBtn() {
    const num = Math.random() * 10;
    if (num < 5) {
        const result = window.confirm(word1)
        if (result) {
            alert(word1)
        } else {
            alert(word2)
        }
    } else {
        const result = window.confirm(word2)
        if (result) {
            alert(word2)
        } else {
            alert(word1)
        }
    }
}