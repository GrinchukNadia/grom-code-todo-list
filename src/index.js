import { renderTasks } from "./list/render.js";
import { initToDoListHandlers } from "./list/todoList.js";
import { getTasksList } from "./list/tasksGateway.js";
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(() => renderTasks())
  initToDoListHandlers();
})

const onStorageChange = (e) => {
  if(e.key === 'tasksList') {
    renderTasks()
  }
}

window.addEventListener('storage', onStorageChange)