// formを取得（あまり使わなさそう）
const forms = document.forms;

console.log(forms);
console.log(forms[0]);
console.log(forms[1]);

// セレクターAPI
// cssのように対象を指定する。
// getElementById()と比較して、速度が遅くなる傾向にある
console.log("------------------------------")
const targets = document.querySelectorAll('#main > p'); // id="main"直下のpタグ
const target = document.querySelector('#main > p');
console.log(targets);
console.log(target);
