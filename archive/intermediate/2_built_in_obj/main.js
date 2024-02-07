// .push(). .splice(), .forEach(), .log()など、JSには多くの便利なオブジェクトが元から用意されており、
// ほぼ全ての値はこれを利用して作られたものである。
// これをビルトインオブジェクト（標準組み込みオブジェクト）という

const animals = ['cat', 'dog', 'bird'];

console.log(animals);
// arrayが持っているメソッドは、Consoleの[[ProtoTypeから見れるよ]]。
// だから、自作せずともlength(), forEach()というメソッドが利用可能。

const str = 'abc'; // Stringsオブジェクトを元に作られたプリミティブ型
console.log(str.length);
console.log(str.toUpperCase());


// ビルトインオブジェクトのメソッドを使ってみる。

// 適当な数値を出力
const getRandomNumber = (start, end) => {
  return Math.round(start + Math.random() * (end - start));
}
console.log(getRandomNumber(50, 100));


// 年を取得する関数
const now = new Date();
console.log(now);
console.log(now.getFullYear());
