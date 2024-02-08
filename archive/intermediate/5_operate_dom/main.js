// メソッドチェイン
const target = document.getElementById('main').firstElementChild;
let text = target.textContent;
// console.log(text);

// 取得した要素の値を変更
// text = target.textContent = 'テキストが変更されました';
// console.log(text);

// 色々変更も可能（スタイルを当ててみた）
// target.style.fontSize = '.5em';
// target.style.border = '1px solid #000';
// target.style.marginBottom = '100px';

// 要素の削除
// 親要素がもつ、子の中の要素を削除しちゃう
// target.parentNode.removeChild(target);

// 要素の追加（要素の作成、要素の挿入の２ステップ
const elemet = document.createElement('p');
elemet.textContent = 'これは追加された要素です';

const tgt = document.getElementById('main');
tgt.appendChild(elemet); // 最後に
