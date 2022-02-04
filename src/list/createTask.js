import { renderTasks } from './render';
import { createTask, getTasksList } from './tasksGateway';

export function onClickAdd() {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value;

  if (!text) {
    return;
  }

  taskInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(() => renderTasks());
}
