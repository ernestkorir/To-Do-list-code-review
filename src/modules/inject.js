import { createTodo, todo } from './displayList.js';

const inject = () => {
  if (localStorage.getItem('todos')) {
    todo.getStoredTodos();
    createTodo();
  } else {
    createTodo();
  }
};

export default inject;