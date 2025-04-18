import { getLocalStorage,setLocalStorage } from "../../LocalStorage/LocalStorage";

const ActiveTask = ({taskData,empName,setData,isTrue,setIsTrue}) => {

  let compFunc = () => {
    let storedData = getLocalStorage()

    let employeeData = storedData.employees.find(emp => emp.firstName == empName)

    if(employeeData){
      let findTask = employeeData.tasks.findIndex(task => task.title == taskData.title)
      employeeData.tasks[findTask].status = 'Completed'
      employeeData.tasksOverview.activeTasks -= 1
      employeeData.tasksOverview.completedTasks += 1
      localStorage.setItem('employees', JSON.stringify(storedData.employees))
    }
      setIsTrue(!isTrue)
  }

  let failFunc = () => {
    let storedData = getLocalStorage()

    let employeeData = storedData.employees.find(emp => emp.firstName == empName)

    if(employeeData){
      let findTask = employeeData.tasks.findIndex(task => task.title == taskData.title)
      employeeData.tasks[findTask].status = 'Failed'
      employeeData.tasksOverview.activeTasks -= 1
      employeeData.tasksOverview.failedTasks += 1
      localStorage.setItem('employees', JSON.stringify(storedData.employees))
    }
    setIsTrue(!isTrue)
  }

  return (
    <div className="w-full min-h-72 bg-yellow-300 rounded-xl text-black p-5">
      <div className="flex justify-between items-center">
        <p className="text-xl">{taskData.dueDate}</p>
        <p className="text-xl bg-red-500 p-1 text-white">{taskData.category}</p>
      </div>
      <h1 className="text-2xl text-center py-3">{taskData.title}</h1>
      <p className="text-lg">
        {taskData.description}
      </p>
      <div className="flex gap-5 mt-5">
        <button onClick={compFunc} className="bg-green-600 cursor-pointer rounded-lg py-1 px-2 text-white">
          Complete
        </button>
        <button onClick={failFunc} className="bg-red-600 cursor-pointer rounded-lg py-1 px-5 text-white">
          Fail
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
