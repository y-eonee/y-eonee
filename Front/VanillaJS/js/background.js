const images = ["img1.jpg", "img2.jpg"];
const BACKGROUND = "mainImg";
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(BACKGROUND);
console.log(bgImage.src);
document.body.appendChild(bgImage);