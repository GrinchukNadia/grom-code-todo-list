import { renderTasks } from "./render.js";
import { createTask, getTasksList } from "./tasksGateway.js";

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
  }

  createTask(newTask)
    .then(() => getTasksList())
    .then(() => renderTasks());
};