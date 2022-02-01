"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initToDoListHandlers = initToDoListHandlers;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

function initToDoListHandlers() {
  var creatBtnElem = document.querySelector('.create-task-btn');
  creatBtnElem.addEventListener('click', _createTask.onClickAdd);
  var listElem = document.querySelector('.list');
  listElem.addEventListener('click', _updateTask.onListClick);
}