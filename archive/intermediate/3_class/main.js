// クラスとインスタンス

// 1個1個定義するのめんどいから、Claracterクラスを生成
// const gon = {
//   name: 'Gon Freecss',
//   type: 'Enhancer',
// };

// const killua = {
//   name: 'Killua Zoldyck',
//   type: 'Transmuter',
// };

// const goreinu = {
//   name: 'Greinu',
//   type: 'Conjurer',
// };

class Character {
  constructor(name, type) {
    // クラス生成のthisはインスタンス自身を指す
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`My name is ${this.name}, I'm ${this.type}`);
  }
}

const gon = new Character('Gon Freecss', "Enhancer");
// const killua = new Character('Killua Zoldyck', "Transmuter");
// const goreinu = new Character('Goreinu', "Conjurer");

console.log(gon);
console.log(gon.name);
console.log(gon.type);
// gon.introduce();

// クラス継承
class MyCharacter extends Character {
  constructor(name, type, atk, hp) {
    super(name, type); // superで親クラスを引き継ぐ
    this.atk = atk;
    this.hp = hp;
  }
  getStatus() {
    return {
      atk: this.atk,
      hp: this.hp,
    };
  }
}

const otherGon = new MyCharacter('Gon Freecss', 'Enhancer', 100, 20);
otherGon.introduce(); //　親のクラスメソッドは使える
console.log(otherGon.getStatus());
