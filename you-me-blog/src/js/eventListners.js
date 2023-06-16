const navLinks = document.querySelectorAll('[data-navLink]');

navLinks.forEach((link) => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
});

const preloader = document.querySelector('.preloader');

// window.addEventListener('load', () => {
//   preloader.classList.add('loaded');
// });

const loaderTime = setTimeout(loading, 1200);

function loading() {
  preloader.classList.add('loaded');
}
