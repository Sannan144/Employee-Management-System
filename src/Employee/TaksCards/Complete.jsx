import React from 'react';

const Complete = ({taskData}) => {
  return (
    <div className="w-full min-h-72 bg-green-600 rounded-xl text-white p-5">
      <div className="flex justify-between items-center">
        <p className="text-xl">{taskData.dueDate}</p>
        <p className="text-xl bg-red-500 p-1 text-white">{taskData.category}</p>
      </div>
      <h1 className="text-2xl text-center py-3">{taskData.title}</h1>
      <p className="text-lg">
        {taskData.description}
      </p>
      <div className="flex gap-5 mt-5">
        <button className="bg-green-800 cursor-pointer rounded-lg py-1 px-2 text-white">
          Completed
        </button>
      </div>
    </div>
  );
};

export default Complete;
