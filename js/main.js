const searchInput = document.querySelector('#search-input');
const searchResult = document.querySelector('#search-result');
const searchForm = document.querySelector('.search');
let searchData = null;

searchForm?.addEventListener('submit', function (event) {
  event.preventDefault();
});

async function loadSearch() {
  if (searchData) return searchData;
  const res = await fetch('/search.json');
  searchData = await res.json();
  return searchData;
}

function renderSearch(items) {
  if (!searchResult) return;
  if (!items.length) {
    searchResult.hidden = false;
    searchResult.innerHTML = '<div class="search-empty">没有匹配的笔记</div>';
    return;
  }
  searchResult.hidden = false;
  searchResult.innerHTML = items.slice(0, 8).map(function (item) {
    return '<a href="' + item.url + '"><strong>' + item.title + '</strong><span>' + (item.content || '').slice(0, 80) + '</span></a>';
  }).join('');
}

searchInput?.addEventListener('input', async function () {
  const q = this.value.trim().toLowerCase();
  if (!q) {
    searchResult.hidden = true;
    searchResult.innerHTML = '';
    return;
  }
  const data = await loadSearch();
  renderSearch(data.filter(function (item) {
    return (item.title + ' ' + item.content).toLowerCase().includes(q);
  }));
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.search')) {
    if (searchResult) searchResult.hidden = true;
  }
});

document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  const open = document.body.classList.toggle('sidebar-open');
  document.body.classList.toggle('menu-open', open);
  this.setAttribute('aria-expanded', String(open));
});

document.querySelector('.sidebar-backdrop')?.addEventListener('click', function () {
  document.body.classList.remove('sidebar-open', 'menu-open');
});

const toTop = document.querySelector('.to-top');
toTop?.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', function () {
  if (!toTop) return;
  toTop.style.opacity = window.scrollY > 400 ? '1' : '0.35';
});
