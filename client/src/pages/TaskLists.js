import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useId } from '../contexts/IdContext';

const TaskLists = () => {
     const {updateId} = useId();
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);

  //This function supports in sending taskID to server via delete request, and deletes particular task from database
  const deleteTask = async (Id) => {
         let gettaskId = await Id;
      // console.log(gettaskId);
    try {
      await axios.delete(`http://localhost:5000/api/tasks/delete-task/${gettaskId}`)
    } catch (error) {
      console.log(error);
    }
  }

  //this function grabs Id from form and handovers to updateId function of contextAPI
  const editTask = async (Id) => {
    let gettaskId = await Id;
       updateId(gettaskId);
       navigate('/update');
  }

  //it fetches task data whenever there is an action of task delete or task addition
  useEffect(()=>{
    const getTaskList = async () => {
      try {
        const response = axios.get(`http://localhost:5000/api/tasks/get-all-task`);
        
        setTaskList((await response).data.lists);
      } catch (error) {
        console.log(error);
      }
    }
    getTaskList()
  },[deleteTask],[taskList])


  return (
    <>
    <div className='container flex flex-1 flex-col justify-between items-center'>
    <h1 
      className='text-3xl text-pink-700 font-serif tracking-tight'>
        Your List of Tasks
    </h1>

    <div className='container flex flex-1 justify-center items-center h-8 w-full'>
      <button 
        className=' bg-pink-600 py-2 px-4 text-white rounded my-3' 
        onClick={()=>navigate('/')}>
          Home
      </button>
    </div>
  
    <ul className=' w-full'>
      {taskList.map((list)=>(
        <li key={list._id} className=' w-full border rounded bg-slate-400 my-2 py-2 px-2'> 
          <div className='flex justify-around'>
            <div className='text-center w-1/5 border'>
              <span className='font-bold tracking-tight'>{list.title}</span>
            </div>
            <div className='text-left w-7/12 border px-2'>
              <span className='text-sm'>{list.description}</span>
            </div>
        
          <div className='flex justify-around w-1/5'>
            <button 
            onClick={()=>editTask(list._id)}
              className='border w-1/3 bg-blue-500 px-2 text-white hover:bg-slate-400 hover:text-blue-700 rounded'>
                Edit
            </button>

            <button 
              onClick={()=>deleteTask(list._id)}
              className='border w-1/2 bg-red-500 text-white hover:bg-slate-400  hover:text-red-700 px-2 rounded'>
                Delete
            </button>

          </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}

export default TaskLists