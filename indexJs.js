let images = [
    "images/liesofp.jpg",
    "images/sekiro.jpg",
    "images/bloodborne.jpg",
    "images/darksouls.jpg"
];
let current = 0;
function changeImage() {
    let bannerImg = document.getElementById("imgslider");
    current = (current + 1) % images.length; 
    bannerImg.src = images[current];
}

setInterval(changeImage, 3000);
