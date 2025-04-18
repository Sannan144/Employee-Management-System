import React from 'react';

const TaskShow = ({empData}) => {
  return (
    <>
      <div className="w-full p-5">
        {/* Responsive grid layout for the task cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Task Card 1 */}
          <div className="rounded-3xl bg-purple-600 w-full h-32 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl text-white">New Task</h2>
            <h1 className="text-5xl text-white">{empData.tasksOverview.newTasks}</h1>
          </div>

          {/* Task Card 2 */}
          <div className="rounded-3xl bg-blue-600 w-full h-32 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl text-white">Active Task</h2>
            <h1 className="text-5xl text-white">{empData.tasksOverview.activeTasks}</h1>
          </div>

          {/* Task Card 3 */}
          <div className="rounded-3xl bg-green-600 w-full h-32 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl text-white">Completed</h2>
            <h1 className="text-5xl text-white">{empData.tasksOverview.completedTasks}</h1>
          </div>

          {/* Task Card 4 */}
          <div className="rounded-3xl bg-red-600 w-full h-32 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl text-white">Failed</h2>
            <h1 className="text-5xl text-white">{empData.tasksOverview.failedTasks}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskShow;
