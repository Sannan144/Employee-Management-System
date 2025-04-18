import React from 'react';

const EmployeeTasksShow = ({ localData }) => {
  return (
    <div className="w-full p-4 bg-gradient-to-r from-indigo-600 to-blue-100">
      <div className="w-full text-lg grid grid-cols-5 gap-4 bg-blue-600 text-center p-3 rounded-md shadow-lg mb-4">
        <h2 className="bg-blue-800 p-2 rounded-md text-white text-sm sm:text-lg">Name</h2>
        <h2 className="bg-blue-800 p-2 rounded-md text-white text-sm sm:text-lg">New Task</h2>
        <h2 className="bg-blue-800 p-2 rounded-md text-white text-sm sm:text-lg">Active Task</h2>
        <h2 className="bg-blue-800 p-2 rounded-md text-white text-sm sm:text-lg">Complete Task</h2>
        <h2 className="bg-blue-800 p-2 rounded-md text-white text-sm sm:text-lg">Fail Task</h2>
      </div>
      
      <div className="overflow-y-auto max-h-[600px]">
        {localData.employees.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full py-4 bg-gray-800 text-lg grid grid-cols-5 gap-4 justify-items-center p-4 rounded-md mb-3 shadow-md text-sm sm:text-[16px]"
            >
              <h2 className="text-white">{item.firstName}</h2>
              <h2 className="text-white">{item.tasksOverview.newTasks}</h2>
              <h2 className="text-white">{item.tasksOverview.activeTasks}</h2>
              <h2 className="text-white">{item.tasksOverview.completedTasks}</h2>
              <h2 className="text-white">{item.tasksOverview.failedTasks}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeTasksShow;
