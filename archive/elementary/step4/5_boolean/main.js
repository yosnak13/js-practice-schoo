// クセのあるbooleanの仕様

// 値が数値の0の場合、falseとみなされる
const value1 = 0;
if (value1) {
  console.log(true);
} else {
  console.log(false); //こちらが表示
}

// 値が0以外の数値（負の数も）の場合、trueとみなされる
const value2 = 3;
if (value2) {
  console.log(true); //こちらが表示
} else {
  console.log(false);
}

// 値が1文字以上の文字列の場合、trueとみなされる
const value3 = '3';
if (value3) {
  console.log(true); //こちらが表示
} else {
  console.log(false);
}

// 値が空の文字列の場合、falseとみなされる
const value4 = '';
if (value4) {
  console.log(true);
} else {
  console.log(false); //こちらが表示
}

// 値が定義されていない場合、falseとみなされる
let value5; // constでは値なし定義は不可能
if (value5) {
  console.log(true);
} else {
  console.log(false); //こちらが表示
}
