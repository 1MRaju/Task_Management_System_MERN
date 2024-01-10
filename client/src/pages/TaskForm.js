import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const navigate = useNavigate();

  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '', 
  });

  const handleInputChange = (e) => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  //handleSubmit function is used to post form data to server via POST Request
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:5000/api/tasks/set-task`, taskForm);

        // if(response.status === 200){
        //     console.log(response);
        //     console.log(response.data);
        //     console.log(response.data.task._id);
        // }

        navigate('/lists')
      } catch (error) {
         console.log(error);
      }
  }

  return (
    <>
       <form 
          onSubmit={handleSubmit} 
          className='container flex-1 flex flex-col justify-center items-center gap-5'
       >
        <label 
          className='text-gray-700 text-sm font-bold flex-1 w-full'>
          Title:
        <input 
          type="text" 
          name='title'
          value = {taskForm.title} 
          onChange={handleInputChange} 
          className='border rounded w-full py-1 px-2 font-normal border-pink-300'
        />
        </label>

        <label 
          className='text-gray-700 text-sm font-bold flex-1 w-full'>
          Description:
        <textarea 
          name='description'
          value = {taskForm.description} 
          onChange={handleInputChange}
          className='border rounded w-full py-1 px-2 font-normal border-pink-300'
          ></textarea>
        </label>

        <div>
          <button 
            className="container font-bold bg-pink-600 p-2 text-white hover:bg-pink-800
            ">
            Add Task
          </button>
        </div>
      </form>

    </>
  )
}

export default TaskForm