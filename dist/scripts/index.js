import { renderTasks } from "./render/render.js";
import { initToDoListHandlers } from "./todoList.js";
import { getTasksList } from "./tasksGateway.js";


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