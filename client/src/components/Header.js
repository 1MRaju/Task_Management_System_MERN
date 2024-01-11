import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className=" bg-pink-600">
    <div className="container mx-auto py-5 w-full flex">
      <h1 className='text-white text-3xl font-bold tracking-tight hover:text-pink-950 text-left cursor-pointer w-1/2'> 
      Task Management System
      </h1>

      <div className='w-1/2 flex justify-end'>
      <button 
         onClick={()=>navigate('/lists')}
        className='bg-white text-pink-600 font-bold tracking-tight rounded px-2 hover:text-white hover:bg-pink-800 '
        >
        Show Task List
      </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header