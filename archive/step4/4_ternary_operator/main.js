// 三項演算子

// const getIsEven = (num) => {
//   if (num % 2 === 0) {
//     return '整数';
//   } else {
//     return '奇数';
//   }
// };

// 上記を三項演算子にすると下記になる。アロー関数なのでさらに短縮可能
const getIsEven = (num) => {
  return num % 2 === 0 ? '整数' : '奇数';
}

// 短縮版
// const getIsEven = (num) => num % 2 === 0 ? '整数' : '奇数';

console.log(getIsEven(4)); // 整数
console.log(getIsEven(5)); // 奇数


// switch
const getCry = (animal) => {
  switch (animal) {
    case 'cat':
      return 'にゃー';
    case 'dog':
      return 'わんわん';
    case 'bird':
      return 'ちゅんちゅん';
    default:
      return '........';
  }
};

console.log(getCry('cat'));

// returnすると処理を終わらせるため、break;を描かなくていい。
// returnしない処理の場合、case枚にbreak;を記述すること。

// switch (式) {
//   case 値1:
//     // 値が1の場合の処理
//     break;
//   case 値2:
//     // 値が2の場合の処理
//     break;
//   default:
//     // どのケースも当てはまらない
// }
