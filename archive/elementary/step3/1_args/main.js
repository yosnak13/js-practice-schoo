// 関数の作り方
function showLog() {
  console.log(7);
}
// 7
showLog();

// 引数
function sayHello(name) {
  console.log(`hello, ${name}!`);
}
sayHello('John')
sayHello('Paul')

// デフォルト引数
function sayGreeting(name = 'John Doe') {
  console.log(`hello, ${name}!`);
}
sayGreeting();
sayGreeting('Mike');

// 複数の引数
function addNumber(x, y) {
  console.log(x);
  console.log(y);
  console.log(x + y);
}

addNumber(3, 5); // 3, 5, 8

// 可調変引数
function doSomething(...args) {
  console.log(args);
}

doSomething(0, 1, 2); // (3) [0, 1, 2]
