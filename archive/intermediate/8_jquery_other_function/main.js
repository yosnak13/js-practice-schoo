// アニメーション
const $target = $('#main > p:first-child');

$target.click(function () {
  $(this).fadeOut(2000);
});

// アニメーション、開発現場では使わない。ミリ単位でelementを書き換えており処理が重い。
// $target.click(function () {
//   $(this).animate({
//     fontSize: '40px',
//     marginBottom: '40px'
//   }, {
//     duration: 2000
//   });
// });
