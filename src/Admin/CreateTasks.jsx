import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../LocalStorage/LocalStorage';

const CreateTasks = ({setIsTrue , isTrue}) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    category: '',
    dueDate: '',
    status: 'New',
    name: '',
  });

  const [localData ,setLocalData] = useState()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let employeeData = localData.employees.find(emp => emp.firstName == taskData.name)

    if(employeeData){
     employeeData.tasks.push(taskData)
     employeeData.tasksOverview.newTasks += 1
    
     localStorage.setItem('employees', JSON.stringify(localData.employees))
    
     setIsTrue(!isTrue)

    setTaskData({
        title: '',
        description: '',
        category: '',
        dueDate: '',
        status: 'New',
        name: '',
      })
  };
}

  useEffect(()=>{
    let storedData = getLocalStorage();
    setLocalData(storedData);
  },[])
  return (
    <div className="max-w-4xl text-black mx-auto p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-1/2">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={taskData.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="title" className="block text-lg font-medium">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-1/2">
            <label htmlFor="category" className="block text-lg font-medium">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={taskData.category}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="dueDate" className="block text-lg font-medium">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div className="flex flex-col justify-center sm:flex-row gap-3">
          <div className="w-full sm:w-1/2">
            <label htmlFor="status" className="block text-lg font-medium">Status</label>
            <select
              id="status"
              name="status"
              value={taskData.status}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="New">New</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
