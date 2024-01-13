
const Task  = require("../models/task");

//This API saves input task data to database
const setTask = async (req, res) => {
  const { title} = req.body;
try {
  let task = await Task.findOne({title});

  if(task) {
    return res.status(400).json({message: 'Task already exists'});
  }

    task = new Task(req.body);
  await task.save();
  res.status(200).send({
    success: true,
    message: "Task saved successfully",
    task
  });
} catch (error) {
  res.status(500).send({
    success: false,
    message: "error while setting up task",
    error
  });
}
}

// This API returns all tasks from the database
const getAllTask = async (req, res) => {
  try {
    let lists = await Task.find();
    lists = lists.sort((a, b)=>b.createdAt - a.created)
    
    res.status(200).send({
      success: true,
      message: "Tasks List Fetched successfully",
      lists
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while fetching task list",
      error
    });
  }
}

//This API returns single selected task for updating
const getTask = async (req, res) => {
  const {taskId} = req.params;
  try {
    let task = await Task.findById(taskId);
  
    res.status(200).send({
      success: true,
      message: "Task to update fetched successfully",
      task
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching task to update",
      error
    });
  }
}

//This API saves updated task to database
const updateTask = async (req, res) => {
  const {taskId} = req.params;
  const {title, description} = req.body;
  try {
    let task = await Task.findByIdAndUpdate(taskId, {title, description},  { new: true })

      if(!task){
        return res.status(400).json({message:'No such task found.'})
      }

    res.status(200).send({
      success: true,
      message: "Task Updated successfully",
      task
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while updating task",
      error
    });
  }
}

//This API deletes the selected task from database
const deleteTask = async (req, res) => {
  const {taskId} = req.params;
  try {
     await Task.findByIdAndDelete(taskId);

     if (!deletedUser) {
      return res.status(404).send({
        success: false,
        message: "User not found"
      });
    }

     res.status(200).send({
      success: true,
      message: "Task Deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting task",
      error: error.message
    });
  }
}

module.exports = {setTask, updateTask, deleteTask, getAllTask, getTask}