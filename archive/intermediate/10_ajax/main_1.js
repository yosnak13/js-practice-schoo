// 非同期処理の基本
// const target = document.getElementById('main').firstElementChild;

target.addEventListener('click', () => {
  // setTimeoutの第二引数で、第一引数の処理するまでの待機時間を指定
  setTimeout(() => {
    console.log('HTMLの内容を変更します');
    target.textContent = 'クリックされました';
  }, 3000);
  console.log('クリックされました。3秒後にHTMLの内容が変更されます');
});


// Promise 結果が帰ってきてから次の処理を実行する
fetch('https://qiita.com/api/v2/items?query=tag:JavaScript')
  .then(response => { // responseオブジェクトを引数に設定
    console.log(response);
    return response.json();
  })
  .then(data => { // 今回の場合、dataの中身はそれぞれの記事の情報の配列
    console.log(data);
  });
console.log('apiを叩きます');


// あまりないが、promiseを製造するとこんな感じ。
// 2行目でPromiseのインスタンスを作成。2つの引数を取り、Promiseの中の処理が正常に終わればで第1引数を、
// 正常に終わらなかった時に第2引数を関数として実行させる。
const handMadePromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return promise;
};

handMadePromise()
  .then(() => {
    console.log('done');
  }).catch(() => {
    console.log('error');
});
