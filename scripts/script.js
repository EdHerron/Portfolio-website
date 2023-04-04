function updatePictureMelissa() {
    let image = document.getElementById("picture-of-me");
    image.src = "./media/melissa.jpg";
}

const updatePictureUnited = () => {
    let image = document.getElementById("picture-of-me");
    image.src = "./media/united.jpg";
    image.style.borderRadius = "0";
    image.style.border = "none";
}

const restorePicture = () => {
    let image = document.getElementById("picture-of-me");
    image.src = "./media/pic-of-me.jpg";
    image.style.borderRadius = "100%";
    image.style.border = "solid 1px black";
}

let melissa = document.getElementById("my-wife");
let united = document.getElementById("united");
melissa.addEventListener("mouseover", updatePictureMelissa);
melissa.addEventListener("mouseout", restorePicture);
united.addEventListener("mouseover", updatePictureUnited);
united.addEventListener("mouseout", restorePicture);
