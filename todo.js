const toDoForm = document.querySelector(".js-toDoForm"),
    toDoFormInput = toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TO_DOS_LS = 'toDos';

function loadToDos(){
    const loadedToDos = localStorage.getItem(TO_DOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

let toDos=[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(toDos);
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();

}

function saveToDos(){
    localStorage.setItem(TO_DOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId= toDos.length+1;

    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = ` ${text}`;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const currentToDoValue = toDoFormInput.value;
    paintToDo(currentToDoValue);
    toDoFormInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit)
}

init();