// const target = document.getElementById('main').firstElementChild;

// 以下の場合、addEventListenerの第一引数が'click'（つまりイベント名）、第二引数が関数
// イベントはいっぱいあるよ。https://qiita.com/mrpero/items/156968e3512d42fffc5e
// target.addEventListener('click', () => {
//   target.textContent = 'クリックされました';
// });

// 発火と伝播
// target2をクリックしましたが先に表示される。
// webブラウザが認識した要素はdiv#mainのp、別のイベントが設定されている場合は上の要素にイベントが伝播する。
const target1 = document.getElementById('main');
const target2 = target1.firstElementChild;

target1.addEventListener('click', () => {
  console.log('rarget1をクリックしました');
});

target2.addEventListener('click', (e) => {
  console.log('rarget2をクリックしました');
  console.log(e); // PointerEvent
  e.stopPropagation(); // 引数を取ってこのメソッドを書くと、伝播を止められる
});
