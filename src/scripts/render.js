import { getItem } from './storage.js';

function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.date) - new Date(a.date);
  }
  return new Date(b.date) - new Date(a.date);
}

function createCheckbox({ done}) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  // checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list-item__checkbox');
  return checkbox;
}

function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  listItemElem.setAttribute('data-id', id)
  const checkbox = createCheckbox({ done});

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');

  listItemElem.append(checkbox, text, deleteBtnElem);

  return listItemElem;
}

export function renderTasks() {
  const listElem = document.querySelector('.list');
  const tasks = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasks.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
}
