// 配列の繰り返し
const animals = ['cat', 'dog', 'bird'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// forEachでも書ける。配列に対してfor文を作ることが多かったことから誕生したらしい。
animals.forEach(animal => {
  console.log(animal);
})


// オブジェクトの繰り返し処理。for in文
const otherAnimals = {
  cat: 'にゃー',
  dog: 'わんわん',
  bird: 'ちゅんちゅん',
  lion: 'がおー',
  elephant: ''
}

for (const k in otherAnimals) {
  console.log(`${k}は、「${otherAnimals[k]}」となきます`);
}

// こっちの方がいい
// Object.keys(objName)で、キーを取り出せる。
Object.keys(otherAnimals).forEach(k => {
  console.log(`${k}は、「${otherAnimals[k]}」となきます`);
})
// 補足：キーではなく値を取得したい場合、Object.values(valuename)で対応可能。
