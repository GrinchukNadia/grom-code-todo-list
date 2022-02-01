"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickAdd = onClickAdd;

var _render = require("./render/render.js");

var _tasksGateway = require("./tasksGateway.js");

function onClickAdd() {
  var taskInputElem = document.querySelector('.task-input');
  var text = taskInputElem.value;

  if (!text) {
    return;
  }

  taskInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  (0, _tasksGateway.createTask)(newTask).then(function () {
    return (0, _tasksGateway.getTasksList)();
  }).then(function () {
    return (0, _render.renderTasks)();
  });
}

;