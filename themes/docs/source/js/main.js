document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('is-open');
  this.setAttribute('aria-expanded', String(open));
});
