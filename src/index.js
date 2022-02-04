import { renderTasks } from './list/render';
import { initToDoListHandlers } from './list/todoList';
import { getTasksList } from './list/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(() => renderTasks());
  initToDoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
