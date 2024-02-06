// 真偽値の特殊なイディオム

// ES5までのの古い書き方。デフォルト引数がなかった。
function sayHello(name) {
  var name = name || 'John Doe'; // nameの値が無ければ(nameはfalseと判定され)'John..'を使う
  console.log('Hello, ' + name + '!');
}

sayHello(); // Hello, John Doe!
sayHello('Mike'); // Hello, Mike!

// 0はfalseに判定されるから、Hello, 0!にならない。
sayHello(0);

// バグの原因になるため、デフォルト引数を使いましょう。
function sayHelloAdvance(name = 'John Doe') {
  console.log('Hello, ' + name + '!');
}
sayHelloAdvance(0); // Hello, 0!
