export function createImageComponent(src, className, display = "flex") {
   const image = document.createElement("img");
   image.classList.add(className);
   image.src = src;
   image.style.display = display;
   return image;
}
    
