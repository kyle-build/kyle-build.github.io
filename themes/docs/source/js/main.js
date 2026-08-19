document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  const open = document.body.classList.toggle('sidebar-open');
  this.setAttribute('aria-expanded', String(open));
});

document.querySelector('.sidebar-backdrop')?.addEventListener('click', function () {
  document.body.classList.remove('sidebar-open');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
});
