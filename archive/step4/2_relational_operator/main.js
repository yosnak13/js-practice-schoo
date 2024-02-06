// 比較演算子
const a = 3;
const b = 5;

console.log(a <= b); // true
console.log(a < b); // true
console.log(a > b); // false
console.log(a >= b); // false

// ===と!==
console.log('===と!==の比較')
console.log(5 === 5); // true
console.log(5 !== 5); // false

// '=='と'!='はバグの原因になりやすい。===や!==と異なり、勝手に型変換される
console.log('===と==の比較')
console.log(5 === 5); // true
console.log(5 == 5); // true

console.log(5 === '5'); // false。納得
console.log(5 == '5'); // true。文字列と整数に勝手に型変換されるため使うべきではない
