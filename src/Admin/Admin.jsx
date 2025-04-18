import React from 'react'
import Header from '../Others/Header'
import ShowEmpTasks from './ShowEmpTasks'
import CreateTasks from './CreateTasks'
import EmployeeTasksShow from './EmployeeTasksShow'

const Admin = ({setData,setIsTrue,isTrue,localData}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-600 to-blue-100 w-full min-h-screen text-white'>
        <Header setData={setData}/>
        <CreateTasks setIsTrue={setIsTrue} isTrue={isTrue}/>
        <EmployeeTasksShow localData={localData}/>
    </div>
  )
}

export default Admin