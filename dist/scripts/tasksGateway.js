"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getTasksList = exports.deleteTask = exports.createTask = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var baseUrl = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/tasks';

var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
};

exports.getTasksList = getTasksList;

var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

exports.createTask = createTask;

var updateTask = function updateTask(taskId, updatedTaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
};

exports.updateTask = updateTask;

var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};

exports.deleteTask = deleteTask;