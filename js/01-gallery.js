import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgGallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(el => {
    const galleryItem = document.createElement('li')
    galleryItem.classList.add('gallery__item')
    const galleryLink = document.createElement('a')
    galleryLink.classList.add('gallery__link')
    galleryLink.href = el.preview;
    const galleryImg = document.createElement('img')
    galleryImg.classList.add('gallery__image')
    galleryImg.alt = el.description;
    galleryImg.src = el.preview;
    galleryImg.setAttribute('data-source', el.original)

    galleryItem.append(galleryLink)
    galleryLink.append(galleryImg)
    items.push(galleryItem)
})

imgGallery.append(...items)

imgGallery.addEventListener('click', ev => {
    ev.preventDefault();
    if (ev.target.nodeName !== 'IMG') {
        return
    }

    const selectImg = ev.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
    <img src="${selectImg}" width="800" height="600">
`)

    instance.show()

    imgGallery.addEventListener('keyDown', ev => {
        if (ev.key === 'Escape') {
        instance.close()
    }
})

})