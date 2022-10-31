import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl);

const GalleryItemsMarkup= createGalleryItemsMarkup(galleryItems);
console.log(GalleryItemsMarkup);

galleryEl.innerHTML =GalleryItemsMarkup;

function createGalleryItemsMarkup(items){
    return items.map(item=>`<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`).join('')
};

galleryEl.addEventListener("click", (event) =>{
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')){
        return
    };
});


galleryEl.addEventListener('click', onClick)

function onClick(event){
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

instance.show()

galleryEl.addEventListener('keydown', (event)=>{
    if( event.code === "Escape")
    return instance.close();
});
}

  


   
