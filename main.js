//$()というメソッド。引数にcssセレクターを突っ込む。
const main = $('#main');
// 以下と同等
// document.getElementById('main');
// document.querySelectorAll('#main');

console.log(main);

// テキスト書き換え。セキュリティ的によくないけど、.textを.htmlにして引数にHTMLタグを入れることもできる。
$('#main > p:first-child').text('変更されました');

// クラス追加
// $('#main > p:first-child').addClass('red');

// スタイル追加
// $('#main > p:first-child').css({
//   coloer: 'red',
//   fontSize: '30px',
//   backgroundColoer: 'black'
// });

// dom生成
// const $el1 = $('<p>').text('手前に追加されたテキスト');
// const $el2 = $('<p>').text('後ろに追加されたテキスト');
// $('#main').prepend($el1);
// $('#main').append($el2);

// jQueryで取得したDOMを変数に格納する場合、その変数名の頭に`$`をつける慣習がある

const $target = $('#main > p:first-child');

$target.on('click', function () {
  $(this).css(
    {
      color: 'red',
      fontWeight: 'bold'
    }
  );
});
