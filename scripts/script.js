function updatePictureMelissa() {
    let image = document.getElementById("picture-of-me");
    image.src = "./media/melissa.jpg";
}

const updatePictureUnited = () => {
    let image = document.getElementById("picture-of-me");
    image.src = "./media/Manchester-United-logo.png";
}

let melissa = document.getElementById("my-wife");
let united = document.getElementById("united");
melissa.addEventListener("mouseover", updatePictureMelissa);
united.addEventListener( "click", updatePictureUnited);
