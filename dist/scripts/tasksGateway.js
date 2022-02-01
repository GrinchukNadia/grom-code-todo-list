import "core-js/modules/es.promise.js";
const baseUrl = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/tasks';
export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export const updateTask = (taskId, updatedTaskData) => {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
};
export const deleteTask = taskId => {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};