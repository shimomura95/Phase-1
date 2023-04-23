// 要素の取得
const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは${title.textContent}です。`);

// クラス要素の取得/子要素の指定
const list = document.querySelector('.list')
console.log(`<ul>タグの2つめの子要素のテキストは${list.children[1].textContent}です。`);

// 子要素の追加/ページ表示
const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)

// イベント発生と処理
const button = document.getElementById('button')
// ボタンをクリックしたとき、確認画面を出す
button.addEventListener('click', event => {
    confirm('削除してよろしいてしょうか？')
})