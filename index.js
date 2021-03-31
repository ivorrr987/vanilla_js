const title = document.querySelector(".js-clock");

const CLICKED_CLASS = "clicked";


function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init_2(){
    title.addEventListener("click", handleClick);
}

init_2();



