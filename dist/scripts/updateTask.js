"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onListClick = void 0;

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.object.to-string.js");

var _render = require("./render/render.js");

var _tasksGateway = require("./tasksGateway.js");

var createUpdatedTasks = function createUpdatedTasks(tasks, event, taskId) {
  var _tasks$find = tasks.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasks$find.text,
      createDate = _tasks$find.createDate;

  var done = event.target.checked;
  var updatedTasks = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  return updatedTasks;
};

var onClickToggle = function onClickToggle(id, event) {
  var taskId = id;
  (0, _tasksGateway.getTasksList)().then(function (tasks) {
    return createUpdatedTasks(tasks, event, taskId);
  }).then(function (data) {
    return (0, _tasksGateway.updateTask)(taskId, data);
  }).then(function () {
    return (0, _render.renderTasks)();
  });
};

var onClickDelete = function onClickDelete(id) {
  var taskId = id;
  (0, _tasksGateway.deleteTask)(taskId).then(function () {
    return (0, _tasksGateway.getTasksList)();
  }).then(function () {
    return (0, _render.renderTasks)();
  });
};

var onListClick = function onListClick(event) {
  var id = event.target.parentElement.dataset.id;

  if (event.target.type === 'checkbox') {
    onClickToggle(id, event);
  }

  if (event.target.type === 'submit') {
    onClickDelete(id);
  }
};

exports.onListClick = onListClick;