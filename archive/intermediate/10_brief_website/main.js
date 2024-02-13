const articlesArea = document.getElementById('articlesArea');
const form = document.getElementById('form');
const btn = document.getElementById('btn');
const modalBg = document.getElementById('modalBg');
const modalContent = document.getElementById('modalContent');

function getDateStrings(dateStrings) {
  const date = new Date(dateStrings);
  return date.toLocaleString(date);
}

async function getArticles(text) {
  const query = text ? `${text}+tag:JavaScript` : `tag:JavaScript`;
  const response = await fetch(`https://qiita.com/api/v2/items?query=${query}`);
  const data = await response.json();
  data.forEach(item => {
    const article = document.createElement('article');
    article.innerHTML = `
      <img width="40" height="40" src="${item.user.profile_image_url}">
      <div>
        <h2>${item.title}</h2>
        <p>${getDateStrings(item.created_at)}</p>
      </div>
    `;
    article.addEventListener('click', () => openModal(item));
    articlesArea.appendChild(article);
  });
}

function openModal(item) {
  modalContent.innerHTML = `
    <h2>${item.title}</h2>
    <p class="modal-content-desc">${item.body.substr(0, 400)}</p>
    <div class="modal-content-sub">
      <p>${item.user.id}</p>
      <p>${getDateStrings(item.created_at)}</p>
      <p>いいね: ${item.likes_count}件</p>
    </div>
    <a href="${item.url}" target="blank">記事を読む</a>
  `;
  modalBg.setAttribute('show', 'on');
}

btn.addEventListener('click', () => {
  articlesArea.innerHTML = '';
  const text = form.value;
  getArticles(text);
});

modalBg.addEventListener('click', () => modalBg.removeAttribute('show'));
modalContent.addEventListener('click', e => e.stopPropagation());
