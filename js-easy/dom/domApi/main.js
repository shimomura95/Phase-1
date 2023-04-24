// アラート機能
// window.alert('これはwindow.alert()で表示したアラートです。')
// 省略可能
alert('これはalert()で表示したアラートです。')

// ドキュメントのプロパティにアクセス(コンソール内)
console.log(document.doctype);
console.log(document.title);

// id要素を取得
const intro = document.getElementById('intro')
console.log(intro.textContent);

// class要素を取得
const list = document.querySelector('.list')
console.log(list.children.length);

//<li>要素の作成(コンソール内)
const newItem = document.createElement('li')
// テキスト追加(コンソール内)
newItem.textContent = '新しいアイテム'
// list要素の最後に追加(HTML内)
list.appendChild(newItem)
// list要素の最初を削除(HTML内)
list.removeChild(list.firstElementChild)

// ul内のli要素を取得
const items = document.querySelectorAll('.list li')
items.forEach((items) => {
    console.log(items.textContent);
})

const elem = document.querySelector('.list')
// タグ内のテキストを取得
console.log(elem.textContent);
// タグ内のHTMLを取得
console.log(elem.innerHTML);

// 繰り返し表示
for (let i = 0; i < elem.children.length; i++) {
    console.log(elem.children[1])
}

// 子要素の内、最初を取得
console.log(elem.firstElementChild);
// 子要素の内、最後を取得
console.log(elem.lastElementChild);
// 子要素の親要素を取得
console.log(elem.parentElement);

const elem2 = document.querySelector('img')
// 表示画像の変更
console.log(elem2.getAttribute('src'));
elem2.setAttribute('src', 'https://placehold.it/400x200')

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')

// button id='add'がクリックされた時、li要素「新しいアイテム」を作成し、listの最後に追加
addButton.addEventListener('click', (event) => {
    const NewItem = document.createElement('li')
    NewItem.textContent = '新しいアイテム'
    list.appendChild(NewItem)
})

// button id='remove'がクリックされた時、listの最後の子要素を削除する
removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastElementChild)
})