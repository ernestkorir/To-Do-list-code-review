import './index.css';

import inject from './modules/inject.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import clearCompleted from './modules/clearCompleted.js';

inject();
form.addEventListener('submit', getAddedTodos);
clearCompleted();