//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event lisners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event){
//Prevent form from submittinig
event.preventDefault();
//todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
// create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//complete button
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);

//chkeck trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//append to list
todoList.appendChild(todoDiv);

//clear todo input value
todoInput.value = "";
}

function deleteCheck(e){
 const item = e.target;
 //delete todo
 if(item.classList[0] ===  "trash-btn"){
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
       todo.remove();
      });
 }

 //check mark
 if(item.classList[0] ===  "complete-btn"){
  //  const todo = item.parentElement 
    item.parentElement.classList.toggle('completed');
    console.log('completed')
 }
}