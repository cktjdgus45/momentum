const toDo = document.querySelector(".todo"),
    showListBtn = toDo.querySelector("button"),
    todoModal = toDo.querySelector(".todo-modal"),
    toDoForm = document.querySelector(".todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    ol = document.querySelector(".todo-list");


let TODOS = [];

function saveToDos() {
    const todos = JSON.stringify(TODOS);
    localStorage.setItem('todo', todos);
}

function delToDo(event) {
    const delBtn = event.target;
    const li = delBtn.parentNode;
    ol.removeChild(li);
    TODOS = TODOS.filter(item => {
        return item.id !== parseInt(li.id);
    })
    saveToDos();
}

function printToDo(text) {
    const li = document.createElement("li"),
        p = document.createElement("p"),
        delBtn = document.createElement("button"),
        newId = TODOS.length + 1;
    p.innerText = text;
    li.appendChild(p);
    delBtn.innerText = '😑';
    li.appendChild(delBtn);
    li.id = newId;
    ol.appendChild(li);
    delBtn.addEventListener("click", delToDo);
    const toDoObj = {
        text: text,
        id: newId
    };
    TODOS.push(toDoObj);
    saveToDos();
}

function getToDo() {
    const toDoArr = JSON.parse(localStorage.getItem('todo'));
    if (toDoArr !== null) {
        toDoArr.forEach((toDo) => {
            printToDo(toDo.text);
        })
    } else {
        toDoInput.addEventListener("keydown", setToDo)
    }
}

function setToDo(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        text = toDoInput.value;
        printToDo(text);
        toDoInput.value = "";
    }
}

function handleShowBtn(event) {
    if (todoModal.classList.contains("unactive")) {
        todoModal.classList.remove("unactive");
    } else {
        todoModal.classList.add("unactive");
    }
}

function init() {
    getToDo();
    showListBtn.addEventListener("click", handleShowBtn);
}
init();
// scrollTo 처럼 scroll 관련 조작.



