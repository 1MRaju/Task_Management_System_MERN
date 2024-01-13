import React, { useEffect, useState } from 'react'
import { useId } from '../contexts/IdContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskUpdate = () => {

  const navigate = useNavigate();

  const {selectedId} = useId();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);
  const [isError, setIsError] = useState(false);


  //This function is used to send updated task to server via put request
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response =  axios.put(`http://localhost:5000/api/tasks/update-task/${selectedId}`, formData);
  
      // console.log((await response).data.task);
      setIsUpdated(true);
       setIsError(false);
    } catch (error) {
      console.log(error.message);
      setIsError(true);
      setIsUpdated(false)
      // console.log(error);
    }
  };

  //This function gets the data of selected Task for update
  const editTask = async (taskId) => {
        try {
      const response =  axios.get(`http://localhost:5000/api/tasks/get-task/${taskId}`);

      // console.log((await response).data.task);

      const { title, description } = (await response).data.task;

      setFormData({
        title,
        description,
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  useEffect(() => {
    if (selectedId) {
      editTask(selectedId);
    }
  }, [selectedId]);


  return (
    <>
        <form 
          onSubmit={handleSubmit}
          className='container flex-1 flex flex-col justify-center items-center gap-5'
        >
        <label
          className='text-gray-700 text-sm font-bold flex-1 w-full'
        >
          Title:
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange} 
            className='border rounded w-full py-1 px-2 font-normal border-pink-300'
          />
        </label>

        <label
           className='text-gray-700 text-sm font-bold flex-1 w-full'
        >
          Description:
          <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleInputChange} 
          className='border rounded w-full py-1 px-2 font-normal border-pink-300'
          />
          {
            isUpdated 

            ? <span className='text-green-500'>Task Updated Successfully</span> 

            : isError 

            ? <span className='text-red-500'> Failed to update task</span> 

            : <span> </span>
          }
      
        </label>
         
        <div>
          <button 
            type="submit"
            className="container font-bold bg-pink-600 p-2 text-white hover:bg-pink-800
            "
            >
            Update Task
          </button>
        </div>
     
      </form>

      <div className='container flex flex-1 justify-center items-center h-8 w-full py-10'>
      <button 
        className=' bg-pink-600 py-2 px-4 text-white rounded my-3' 
        onClick={()=>navigate('/')}>
          Home
      </button>
    </div>
    </>
  )
}

export default TaskUpdate