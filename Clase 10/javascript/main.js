const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
//Establecer la anchura y la altura del lienzo para que coincida con las dimensiones de la ventana

canvas.width = innerWidth;
canvas.height = innerHeight;

//Obtener la ruta del sprite sheet
const subZeroSpriteSheet = new Image();
subZeroSpriteSheet.src = "https://archive.org/download/subZeroSpriteSheet/subZeroSpriteSheet.png";
subZeroSpriteSheet.onload = loadImages;

//Hay 7 sprites diferentes en 2 filas de la imagen
let cols = 7;
let rows = 2;

//Calcula el tamaño de los sprites individuales porque están espaciados uniformemente
let spriteWidth = subZeroSpriteSheet.width / cols;
let spriteHeight = subZeroSpriteSheet.height / rows;

//Para que el aumento del tamaño de la imagen siga conservando su estilo pixel art
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

//Para que la animación pueda reproducirse
let totalFrames = 7; //Hay 7 sprites en total. Por lo que la animación tendrá lugar en 7 frames
let currentFrame = 0;

//La posicion del recurso puede ser actualizada
let srcX = 0;
let srcY = 0;

//Registra el número de veces que se ha llamado a la función 'Animate'
let framesDrawn = 0;

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height); // Así se puede borrar el contenido del frame anterior
    requestAnimationFrame(animate); //La función será llamada repetidamente en cada frame nuevo

    currentFrame = currentFrame % totalFrames; //Calcula el frame actual de la animación.El 0 cuenta como la primera imagen de la animación.
    srcX = currentFrame * spriteWidth; //Src la posición se actualiza para mostrar la nueva imagen del sprite

    
    ctx.save();
    resizeImage();
    //image, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight
    ctx.drawImage(subZeroSpriteSheet, srcX, srcY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    ctx.restore();

    framesDrawn++;
    if(framesDrawn >= 10){
        currentFrame++;
        framesDrawn = 0;
    }
}

function resizeImage() {
    let scaleFactor = 4;
    let midXPos = innerWidth / 2 - (spriteWidth * scaleFactor) / 2;
    let midYPos = innerHeight / 2 - (spriteHeight * scaleFactor) / 2;
    ctx.translate(midXPos, midYPos);
    ctx.scale(scaleFactor, scaleFactor);
}

addEventListener("keydown", e => {
    if(e.key === "ArrowLeft"){
        srcY = 1 * spriteHeight;
    }
});

addEventListener("keydown", e => {
    if(e.key === "ArrowRight"){
        srcY = 0 * spriteHeight;
    }
})

//Por lo que el lienzo no puede ser renderizado antes que la imagen
let numOfImages = 1;
function loadImages() {
    if(--numOfImages > 0) return;
    animate();
}