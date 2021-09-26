const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  const galleryCards = document.querySelector('.js-gallery');
  const galleryModal = document.querySelector('.js-lightbox')
  const backdropOverlay = document.querySelector('.lightbox__overlay');
  const imageLightBox = document.querySelector('.lightbox__image');

  const closeLightBox = document.querySelector('[data-action="close-lightbox"]');
  
  const cardsMarkup = createGallery(galleryItems);
  galleryCards.insertAdjacentHTML('beforeend', cardsMarkup);

  galleryCards.addEventListener('click', onPictureClick);
  galleryModal.addEventListener('click', onModalClick);
  closeLightBox.addEventListener('click', onCloseLightBoxClick);

  function createGallery(galleryItems) {
      return galleryItems
        .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </li>
    `;
  })
  .join('');

  }

// console.log(galleryItems);

function onPictureClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
      return;
    }
    window.addEventListener('keydown', onEscPress);
    galleryModal.classList.add('is-open');
    imageLightBox.src = evt.target.dataset.source;
}

function onCloseLightBoxClick() {
    galleryModal.classList.remove('is-open');
    window.removeEventListener('keydown', onEscPress);
    imageLightBox.src = '';
  }
  
  function onModalClick(evt) {
    if (backdropOverlay === evt.target) {
        onCloseLightBoxClick();
    }
  }
  function onEscPress(evt) {
    console.log(evt);
    if (evt.code === 'Escape') {
        onCloseLightBoxClick();
    }
  }
 
// document.addEventListener("keydown", (evt) => {
//   const currentIndex = galleryItems.findIndex(
//     (img) => img.original === imageLightBox.src
//   );
//   if (evt.key === "ArrowLeft") {
//     leftClick(currentIndex);
//   } else 
//   if (evt.key === "ArrowRight") {
//     rightClick(currentIndex);
//   }
// });

// function leftClick(currentIndex) {
//   let nextIndex = currentIndex ? currentIndex : 0;

//   if (nextIndex > galleryItems.length - 1) {
//     nextIndex -= 1;
//   } else {
//     nextIndex = 0;
//   }
//   imageLightBox.src = galleryItems[nextIndex].original;
//   imageLightBox.alt = galleryItems[nextIndex].alt;
// }

// function rightClick(currentIndex) {
//   let nextIndex = currentIndex ? currentIndex : 0;

//   if (nextIndex < galleryItems.length - 1) {
//     nextIndex += 1;
//   } else {
//     nextIndex = 0;
//   }
//   imageLightBox.src = galleryItems[nextIndex].original;
//   imageLightBox.alt = galleryItems[nextIndex].alt;
// }


