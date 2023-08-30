import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
galleryContainer.style.listStyle = 'none';
const itemMarkup = createGalleryMarkupItem(galleryItems);

function createGalleryMarkupItem(item) {
  return item
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
    )
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  //captionPosition: "bottom",
  captionDelay: '250',
});
