import React from 'react'
import Header from '../Others/Header'
import TaskCards from './TaksCards/TaskCards'
import TaskShow from './TaskShow'

const Employee = ({empData , setData , isTrue , setIsTrue}) => {

  return (
    <>
      <div className='bg-gradient-to-r from-indigo-600 to-blue-100 w-full min-h-screen text-white'>
        <Header empData={empData} setData={setData}/>
        <TaskShow empData={empData}/>
        <TaskCards empData={empData} setData={setData} isTrue={isTrue} setIsTrue={setIsTrue} />
      </div>      
    </>
  )
}

export default Employee