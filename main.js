const IMG_LENGTH = 18;
const IMG_WIDTH = 280;

const $main = $('#main');

// 画像の追加
for (let i = 1; i <= IMG_LENGTH; i++) {
  const $el = $('<img>').attr({
    src: `./imgs/${i}.png`,
    width: IMG_WIDTH
  }).addClass('item');
  $main.append($el);
}

// masonryの処理
const $masonryMain = $('#main').masonry({
  itemSelector: '.itme',
  coumnWidth: IMG_WIDTH
});

$masonryMain.imagesLoaded().progress(function () {
  $main.masonry('layout');
})
