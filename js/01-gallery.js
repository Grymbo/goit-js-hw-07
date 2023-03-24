import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");
const item = [];

createGalleryItems();
function createGalleryItems() {
    const markup = galleryItems.map((image) => {
        const originalUrl = image.original;
        const previewUrl = image.preview;
        const description = image.description;
        const hmtl = `<div class='gallery__item'><a href=${originalUrl} class='gallery__link'><img src=${previewUrl} alt=${description} class='gallery__image'></a></div>`;
        
        item.push(hmtl);
        
        return hmtl;
    }).join("");
    
    gallery.innerHTML = markup;
}

item.forEach(() => {
    gallery.onclick = (e) => {
        if (e.target.classList.contains("gallery__image")) {
            const originalUrl = e.target.parentElement;
      
            e.preventDefault();
            const instance = basicLightbox.create(`
                <div class="modal">
                    <img src=${originalUrl}>
                
                </div>`,
                { onShow: (instance) => {
                    instance.element().querySelector("img").onclick = instance.close;
                    },
                }
            )
            
            instance.show();
        }
    };
});