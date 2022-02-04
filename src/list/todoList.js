import { onClickAdd } from './createTask';
import { onListClick } from './updateTask';

export function initToDoListHandlers() {
  const creatBtnElem = document.querySelector('.create-task-btn');
  creatBtnElem.addEventListener('click', onClickAdd);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
}
