// 文字列
console.log('Hello,world');
console.log("こんにちは");

// 値
console.log(100);
// console.log(1.3);

// 配列
console.log([1, 2, 3, 4, 5]);

// 真偽値
console.log(true);
console.log(false);

// オブジェクト
console.log({ one: 1, two: 2 });

// 変数
const myName = "Shimomura"
// const 名前 = 値
// 変数myNameに値"Shimomura"を代入する
console.log(myName);

const number = 100
const isValid = true
const userIds = [1, 3, 10]

console.log(number);
console.log(isValid);
console.log(userIds);

const learning = "JavaScript"
// constは再代入できない
// learning = "Ruby"
console.log(learning);

let Learning = "JavaScript"
// letは再代入できる
Learning = "Ruby"
console.log(Learning);

// constは必ず初期化する必要がある
// const LEarning
LEarning = "Ruby"
console.log(LEarning);

// letは初期化しなくてもよい
let LEArning
LEArning = "Ruby"
console.log(LEArning);

// 文字列処理
'これは文字列'
"これも文字列"
// 'I'm shimomura'

// 文字列結合
const breakfast = "ごはん"
// console.log("今日の朝食は" + breakfast + "でした。");

// テンプレート文字列
// console.log(`今日の朝食は${breakfast}でした。`);

// 改行
// 今日の朝食はごはんでした。
// おいしかった。
// console.log("今日の朝食は" + breakfast + "でした。\nおいしかった。");
console.log(`今日の朝食は${breakfast}でした。
おいしかった。`);

// 配列
const days = ['日', '月', '火', '水', '木', '金', '土']
console.log(days);

// []の中にインデックスを指定して配列の要素を取得
console.log(days[3]);

// 要素の数
console.log(['日', '月', '火', '水', '木', '金', '土'].length);
console.log(days.length);

// 配列の操作
const nengou = ['明治', '大正', '昭和', '平成']
console.log(nengou);

// 要素の追加
nengou.push('令和')
console.log(nengou);

// 要素の削除
nengou.splice(3, 1)
console.log(nengou);

// 要素の変更
nengou[2] = 'しょうわ'
console.log(nengou);

// 条件分岐
const num = Math.random()

if (num >= 0.5) {
    console.log('大きめ');
} else {
    console.log('小さめ');
}

console.log(`数:${num}`);

// 真偽値
if (num >= 0.6) {
    console.log('条件はtrue'); //原則if文は、条件式がtrueの場合に実行される
} else {
    console.log('条件はfalse');
}

if ("abcde") {
    console.log('プログラムは実行される');
}
// 条件式でtrueと見なされる場合：数値・文字列
// 条件式でfalseと見なされる場合：0・空文字("") =「falsyの値」

// 条件式
const a = 2
const b = 3
const c = 10
const d = 10

// x === y xとyが等しいと見なされる際true
console.log(a === b);
console.log(c === d);

// 左辺がture かつ 右辺がtrueの場合true
console.log(a === b && c === d);

// 左辺がture または 右辺がtrueの場合true
console.log(a === b || c === d);

// 逆転 ()内がfalseの場合true
console.log(!(a === b));

// ループ
// for (let i = 0; i < 10; i++) {
// console.log(i);
// }
// 1.変数iに0を代入(初期化処理)
// 2.i<10を満たしているかどうか(継続条件) 満たしていない場合は終了
// 3.{}ブロック内の処理を実行
// 4.iに1を加算代入する(更新処理)
// 5.2に戻る

let i = 0
while (i < 10) {
    console.log(i);
    i++
}

// 関数
//   定義
function cook() {
    console.log("料理が出来上がりました。");
}
//  実行(呼び出す)
cook()
cook()

// 引数=変数
function Cook(food) {
    console.log(`${food}が出来上がりました。`);
}

// 実行する時、引数に任意の値を渡す
Cook("料理")
Cook("朝食")
Cook("夕食")

// 引数を2つ用いる
function CooK(food1, food2) {
    console.log(`${food1}が出来上がりました。`);
    console.log(`${food2}が出来上がりました。`);
}

CooK("料理", "朝食")
CooK("夕食", "間食")

// 戻り値
function applyTax(price) {  //消費税10%込みの金額を出力
    // console.log(price * 1.1);
    return price * 1.1
}

applyTax(1000)
applyTax(580)

// 上の結果を合計
console.log(applyTax(1000) + applyTax(580));

// 関数の結果を変数に代入
function applyTAx(price) {
    return price * 1.1;
}

const result1 = applyTAx(1000)
const result2 = applyTAx(580)

console.log(result1 + result2);

// 関数式
const applyTAX = function (price) {
    return price * 1.1
}

// アロー関数
const applYTax = (price) => {
    return price * 1.1
}

// 引数が1つの場合、()を省略できる
const applYTAx = price => {
    return price * 1.1
}

// 処理が1行の場合、returnと{}を省略できる
const applYTAX = price => price * 1.1