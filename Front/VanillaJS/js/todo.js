const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY ,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.classList.add("transparentBtn");
    button.innerText = "❌";

    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
    todoInput.value="";
}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedTodo = localStorage.getItem(TODOS_KEY);
if(savedTodo != null){
    const parsedToDos = JSON.parse(savedTodo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

