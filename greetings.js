const UserNameform = document.querySelector(".js-form"),
        UserNameinput = UserNameform.querySelector("input"),
        greeting = document.querySelector(".js-greetings");
        

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function changeName(){
    currentUser=localStorage.removeItem(USER_LS);
    loadName();
    UserNameinput.value="";
}

function paintGreeting(text){
    const cngBtn = document.createElement("button");
    cngBtn.innerText="↺";
    cngBtn.addEventListener("click", changeName); 
     
    UserNameform.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text} `;
    greeting.appendChild(cngBtn);  
}

function handleNameSubmit(event){
    event.preventDefault();
    const currentNameValue = UserNameinput.value;
    console.log(currentNameValue);
    paintGreeting(currentNameValue);
    saveName(currentNameValue);
}



function askForName(){
    UserNameform.classList.add(SHOWING_CN);
    UserNameform.addEventListener("submit", handleNameSubmit)
}

function loadName(){
    let currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //user doesn't exist
        askForName();
    }
    else{
        //user exists
        paintGreeting(currentUser);
    }
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function init(){
    loadName();
}

init();