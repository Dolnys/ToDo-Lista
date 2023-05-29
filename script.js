let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todoList ul');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewTodo);
};

const addNewTodo = (params) => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    ulList.append(newTodo);
    todoInput.value = '';
    errorInfo.textContent = '';
  } else {
    errorInfo.textContent = 'Please enter the task content';
  }
};

document.addEventListener('DOMContentLoaded', main);
