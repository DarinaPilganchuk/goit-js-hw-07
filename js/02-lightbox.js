import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl);

const GalleryItemsMarkup= createGalleryItemsMarkup(galleryItems);
console.log(GalleryItemsMarkup);

galleryEl.innerHTML = GalleryItemsMarkup;

function createGalleryItemsMarkup(items){
    return items.map(item=>`<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`).join('')
};




new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250, });

