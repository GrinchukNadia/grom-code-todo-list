"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickAdd = onClickAdd;

var _render = require("./render/render.js");

var _tasksGateway = require("./tasksGateway.js");

function onClickAdd() {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value;

  if (!text) {
    return;
  }

  taskInputElem.value = '';
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString()
  };
  (0, _tasksGateway.createTask)(newTask).then(() => (0, _tasksGateway.getTasksList)()).then(() => (0, _render.renderTasks)());
}

;