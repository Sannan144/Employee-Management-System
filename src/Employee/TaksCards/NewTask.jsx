import { getLocalStorage,setLocalStorage } from "../../LocalStorage/LocalStorage";

const NewTask = ({ taskData,empName,setIsTrue,isTrue }) => {
let clc = ()=>{
  let storedData = getLocalStorage()
  let employeeData = storedData.employees.find(emp => emp.firstName == empName)
  if(employeeData){
    let taskIndex = employeeData.tasks.findIndex(ind => ind.title == taskData.title)
    employeeData.tasks[taskIndex].status = 'Active'
    employeeData.tasksOverview.newTasks -= 1;
    employeeData.tasksOverview.activeTasks += 1;
    localStorage.setItem('employees', JSON.stringify( storedData.employees))
  }
  setIsTrue(!isTrue)
}

  return (
    <div className="w-full min-h-72 bg-purple-600 rounded-xl text-white p-5">
      <div className="flex justify-between items-center">
        <p className="text-lg">{taskData.dueDate}</p>
        <p className="text-lg bg-red-500 p-1 text-white">{taskData.category}</p>
      </div>
      <h1 className="text-2xl text-center py-3">{taskData.title}</h1>
      <p className="text-lg">
        {taskData.description}
      </p>
      <div className="flex gap-5 mt-5">
        <button onClick={clc} className="bg-green-600 cursor-pointer rounded-lg py-1 px-2 text-white">
          Accept
        </button>
      </div>
    </div>
  );
};

export default NewTask;



// import React, { useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../LocalStorage/LocalStorage';

// const NewTask = ({ taskData, employeeName }) => {
//   const [task, setTask] = useState(taskData);

//   const handleAccept = () => {
//     let storedData = getLocalStorage();

//     let employeeData = storedData.employees.find(emp => emp.firstName === employeeName);
    
//     if (employeeData) {
//       const taskIndex = employeeData.tasks.findIndex(task => task.id === taskData.id);
//       if (taskIndex !== -1) {
//         employeeData.tasks[taskIndex].status = 'Active';

//         employeeData.tasksOverview.newTasks -= 1;
//         employeeData.tasksOverview.activeTasks += 1;

//         setLocalStorage(storedData);

//         setTask({
//           ...task,
//           status: 'Active',
//         });
//       }
//     }
//   };

//   return (
//     <div className="w-full min-h-72 bg-purple-600 rounded-xl text-white p-5">
//       <div className="flex justify-between items-center">
//         <p className="text-lg">{task.dueDate}</p>
//         <p className="text-lg bg-red-500 p-1 text-white">{task.category}</p>
//       </div>
//       <h1 className="text-2xl text-center py-3">{task.title}</h1>
//       <p className="text-lg">{task.description}</p>
//       <div className="flex gap-5 mt-5">
//         <button onClick={handleAccept} className="bg-green-600 cursor-pointer rounded-lg py-1 px-2 text-white">
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewTask;

