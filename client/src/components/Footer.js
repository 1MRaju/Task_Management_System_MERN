import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="bg-pink-600 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
            ManageYourTasks.com
        </span>
        <span className="text-white font-bold tracking-tight flex fap-4 gap-3">
          <p className="cursor-pointer">Privacy policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
    </>
  )
}

export default Footer