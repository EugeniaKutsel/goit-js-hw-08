// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery(imagesList) {
    return imagesList.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    }
    ).join('');
}

const galleryList = createGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryList);

const lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250});
