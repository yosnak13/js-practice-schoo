// オブジェクトには関数も設定できる（メソッドという）
const myProfile = {
  lastName: '鈴木',
  firstName: '太一',
  birthyear: '1990',
  hometown: '青森',
  sayHello: () => {
    console.log('hello');
  },
  greet() {
    console.log(
      `私の名前は${this.lastName}${this.firstName}です。${this.birthyear}年生まれで、${this.hometown}出身です。`
    );
  }
};

myProfile.greet();

// thisについて、メソッド内でthisを使うと、メソッドを持つオブジェクトのプロパティを参照する。
// メソッド内でthisを呼び出すことを、thisのメソッド呼び出しという。
// ただし、利用される場所によって意味が変わる。


// この場合、関数の中でthisを使うと、windowというグローバルオブジェクトを参照する。
// これを、thisの関数呼び出しという
function func() {
  console.log(this);
}

func(); // windowを参照


const obj = {
  str: 'abc',
  func1() {
    console.log(this.str); // メソッド呼び出し

    // 関数宣言の場合
    // const func2 = function() {
    //   console.log(this.str); // 関数呼び出し。windowにstrなんてプロパティはないためundifined
    // };

    // アロー関数の場合
    const func2 = () => {
      console.log(this.str); // アロー関数だと、thisを固定する仕様があるため、strを参照できる。
    };
    func2();
  }
};

obj.func1();
