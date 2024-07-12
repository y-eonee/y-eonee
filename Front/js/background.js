const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage.src);
document.body.appendChild(bgImage);