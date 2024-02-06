// 関数の中で定義された変数（ローカル変数）は、関数の外から参照できない、ということを学ぶ。
// const showLog = () => {
//   const a = 1;
//   console.log(a);
// }
// console.log(a); // undifinedエラーになる
// グローバル変数は関数の中からでも参照できる
// つまり、変数のスコープは適切にしよう。


const b = 1; // グローバル変数
const showLog = () => {
  // ここで宣言されるとローカル変数
  console.log(b);
}


showLog();
console.log(b);

// スコープチェーンについて、
// スコープが異なれば、同じ変数名で宣言が可能。あまり使いたくない。
// ローカル変数に定義されていなければ、一つ外側のスコープに定義されているか確認するようになっている。
const a = 'グローバルスコープにおいてのa';
const func1 = () => {
  const a = 'func1関数においてのa';
  console.log(a);

  const func2 = () => {
    const a = 'func2関数においてのa'; // コメントアウトすると、func1の変数aを見にいく
    console.log(a);
  };
  func2();
}

console.log(a);
func1();
