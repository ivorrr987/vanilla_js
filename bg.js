const body = document.querySelector ("body");

const images = 4;

function handleImageLoad(){
    console.log("finished loading");
}

function paintImage(imageNum){
    const image = new Image();
    image.src = `images/${imageNum+1}.jpg`;
    console.log(`picture number: ${imageNum+1}`);
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleImageLoad)
}

function genRN(){
    const num =  Math.floor(Math.random()*images);
    return num;
}

function init(){
    const randNum = genRN();
    paintImage(randNum);
}

init();