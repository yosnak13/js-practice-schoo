const area1 = getTriangleArea(4, 5);
console.log(area1);

function getTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}


// 関数宣言は、例外としてコードの一番最初に宣言したことになるため、対象関数の宣言前にそれを呼び出しても出力される。
// 関数式の場合はエラーになる。

const area2 = getTriangleArea2(4, 5);
console.log(area2);

const getTriangleArea2 = function (base, height) {
  const area = (base * height) / 2;
  return area;
}
