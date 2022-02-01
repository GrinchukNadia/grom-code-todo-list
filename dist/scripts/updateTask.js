"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onListClick = void 0;

var _render = require("./render/render.js");

var _tasksGateway = require("./tasksGateway.js");

const createUpdatedTasks = (tasks, event, taskId) => {
  const {
    text,
    createDate
  } = tasks.find(task => task.id === taskId);
  const done = event.target.checked;
  const updatedTasks = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null
  };
  return updatedTasks;
};

const onClickToggle = (id, event) => {
  const taskId = id;
  (0, _tasksGateway.getTasksList)().then(tasks => createUpdatedTasks(tasks, event, taskId)).then(data => (0, _tasksGateway.updateTask)(taskId, data)).then(() => (0, _render.renderTasks)());
};

const onClickDelete = id => {
  const taskId = id;
  (0, _tasksGateway.deleteTask)(taskId).then(() => (0, _tasksGateway.getTasksList)()).then(() => (0, _render.renderTasks)());
};

const onListClick = event => {
  const id = event.target.parentElement.dataset.id;

  if (event.target.type === 'checkbox') {
    onClickToggle(id, event);
  }

  if (event.target.type === 'submit') {
    onClickDelete(id);
  }
};

exports.onListClick = onListClick;