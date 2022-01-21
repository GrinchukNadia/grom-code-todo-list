import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { deleteTask, getTasksList, updateTask } from "./tasksGateway.js";

const onClickToggle = (id, event) => {
  const taskId = id;
  const tasks = getItem('tasksList');
  const { text, createDate} = tasks.find(task => task.id === taskId)
  const done = event.target.checked;
  
  const updatedTasks = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  
  updateTask(taskId, updatedTasks)
  .then(() => getTasksList())
  .then(newTasksList => {
    setItem('tasksList', newTasksList)
    renderTasks();
  })
};

const onClickDelete = (id, event) => {
  const taskId = id;
  console.log(taskId)
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}

export const onListClick = event => {
  const id = event.target.parentElement.dataset.id

  if(event.target.type === 'checkbox') {
    onClickToggle(id, event)
  }
  if (event.target.type === 'submit') {
    onClickDelete(id, event)
  }
}