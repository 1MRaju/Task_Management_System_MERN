const express = require('express');

const { 
  setTask, 
  updateTask, 
  deleteTask, 
  getTask, 
  getAllTask 
} = require("../controllers/taskController");

const taskRouter = express.Router();

taskRouter.post('/set-task', setTask);
taskRouter.put('/update-task/:taskId', updateTask);
taskRouter.delete('/delete-task/:taskId', deleteTask);
taskRouter.get('/get-task/:taskId', getTask);
taskRouter.get('/get-all-task', getAllTask);

module.exports = taskRouter;