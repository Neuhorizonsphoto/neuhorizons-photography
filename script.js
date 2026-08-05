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
const closeLightboxButton = document.querySelector('.close-lightbox');
const previousButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
const lightboxCounter = document.querySelector('.lightbox-counter');

const galleryCards = Array.from(
  document.querySelectorAll('.gallery-card')
);

let currentImageIndex = 0;

function getVisibleGalleryCards() {
  return galleryCards.filter(card =>
    !card.classList.contains('is-hidden')
  );
}

function showLightboxImage(index) {
  const visibleCards = getVisibleGalleryCards();

  if (!visibleCards.length) {
    return;
  }

  currentImageIndex =
    (index + visibleCards.length) % visibleCards.length;

  const currentCard = visibleCards[currentImageIndex];
  const currentPhoto = currentCard.querySelector('img');

  lightboxImage.src = currentCard.dataset.image;
  lightboxImage.alt =
    currentPhoto?.alt || 'Expanded portfolio image';

  lightboxCounter.textContent =
    `${currentImageIndex + 1} / ${visibleCards.length}`;
}

galleryCards.forEach(card => {
  card.addEventListener('click', () => {
    const visibleCards = getVisibleGalleryCards();
    currentImageIndex = visibleCards.indexOf(card);

    showLightboxImage(currentImageIndex);
    lightbox.showModal();
  });
});

previousButton.addEventListener('click', event => {
  event.stopPropagation();
  showLightboxImage(currentImageIndex - 1);
});

nextButton.addEventListener('click', event => {
  event.stopPropagation();
  showLightboxImage(currentImageIndex + 1);
});

closeLightboxButton.addEventListener('click', () => {
  lightbox.close();
});

lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener('keydown', event => {
  if (!lightbox.open) {
    return;
  }

  if (event.key === 'ArrowLeft') {
    showLightboxImage(currentImageIndex - 1);
  }

  if (event.key === 'ArrowRight') {
    showLightboxImage(currentImageIndex + 1);
  }
});

document.querySelector('#year').textContent =
  new Date().getFullYear();

const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item =>
      item.classList.remove('active')
    );

    button.classList.add('active');

    const filter = button.dataset.filter;

    galleryCards.forEach(card => {
      const show =
        filter === 'all' ||
        card.dataset.category === filter;

      card.classList.toggle('is-hidden', !show);
    });
  });
});
