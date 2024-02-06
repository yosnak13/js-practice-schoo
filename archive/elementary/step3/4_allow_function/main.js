const getTriangleArea = (base, height) => {
  const area = (base * height) / 2;
  return area;
}

const area1 = getTriangleArea(4, 5);
const area2 = getTriangleArea(2, 80);
console.log(area1); // 10
console.log(area2); // 80


// 関数式の場合
// const getTriangleArea = function (base, height) {
//   const area = (base * height) / 2;
//   return area;
// }


// アロー（=>）を使ってfunctionと記述するのを省略する。
// 引数が1つしかない場合は()を省略可能。（書いてあげた方が統一感あってみやすいかも）
// 引数が存在しない場合は()を省略できない。


const getCircleArea = (r) => {
  return r * r * Math.PI;
}
console.log(getCircleArea(4));

// 以下のように、関数内の処理が一つしかない場合は、1行にまとめられる。引数が1つなので()も省略できる
// const getCircleArea = r => r * r * Math.PI;
