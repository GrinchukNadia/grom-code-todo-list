"use strict";

var _render = require("./render/render.js");

var _todoList = require("./todoList.js");

var _tasksGateway = require("./tasksGateway.js");

document.addEventListener('DOMContentLoaded', function () {
  (0, _tasksGateway.getTasksList)().then(function () {
    return (0, _render.renderTasks)();
  });
  (0, _todoList.initToDoListHandlers)();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === 'tasksList') {
    (0, _render.renderTasks)();
  }
};

window.addEventListener('storage', onStorageChange);