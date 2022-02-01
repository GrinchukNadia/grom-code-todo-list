"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItem = void 0;
exports.renderTasks = renderTasks;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.sort.js");

var _tasksGateway = require("../tasksGateway.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.date) - new Date(a.date);
  }

  return new Date(b.date) - new Date(a.date);
}

function createCheckbox(_ref) {
  var done = _ref.done;
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list-item__checkbox'); // console.log(checkbox)

  return checkbox;
}

var createListItem = function createListItem(_ref2) {
  var text = _ref2.text,
      done = _ref2.done,
      id = _ref2.id;
  var listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  listItemElem.setAttribute('data-id', id);
  var checkbox = createCheckbox({
    done: done
  });

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  var textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  var deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  listItemElem.append(checkbox, text, deleteBtnElem);
  return listItemElem;
};

exports.createListItem = createListItem;

function renderTasks() {
  var listElem = document.querySelector('.list');
  listElem.innerHTML = '';
  (0, _tasksGateway.getTasksList)().then(function (tasks) {
    var tasksElems = tasks.sort(compareTasks).map(createListItem);
    listElem.append.apply(listElem, _toConsumableArray(tasksElems));
  });
}