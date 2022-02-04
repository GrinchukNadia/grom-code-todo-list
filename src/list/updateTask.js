import { renderTasks } from './render';
import { deleteTask, getTasksList, updateTask } from './tasksGateway';

const createUpdatedTasks = (tasks, event, taskId) => {
  const { text, createDate } = tasks.find((task) => task.id === taskId);
  const done = event.target.checked;
  const updatedTasks = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  return updatedTasks;
};

const onClickToggle = (id, event) => {
  const taskId = id;

  getTasksList()
    .then((tasks) => createUpdatedTasks(tasks, event, taskId))
    .then((data) => updateTask(taskId, data))
    .then(() => renderTasks());
};

const onClickDelete = (id) => {
  const taskId = id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then(() => renderTasks());
};

export const onListClick = (event) => {
  const { id } = event.target.parentElement.dataset;

  if (event.target.type === 'checkbox') {
    onClickToggle(id, event);
  }
  if (event.target.type === 'submit') {
    onClickDelete(id);
  }
};
