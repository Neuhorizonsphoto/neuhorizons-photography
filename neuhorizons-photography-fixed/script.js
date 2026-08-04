const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');

document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    lightboxImage.src = card.dataset.image;
    lightbox.showModal();
  });
});

document.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
