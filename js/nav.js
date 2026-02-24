var toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', function () {
    var ul = this.closest('nav').querySelector('ul');
    var open = ul.classList.toggle('open');
    this.setAttribute('aria-expanded', open);
  });
}
