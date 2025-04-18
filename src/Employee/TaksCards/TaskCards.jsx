import React from 'react';
import NewTask from './NewTask';
import ActiveTask from './ActiveTask';
import FailedTask from './FailedTask';
import Complete from './Complete';

const TaskCards = ({empData,setData,isTrue,setIsTrue}) => {

  return (
    <div className="w-full py-5 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        empData.tasks.map((item)=>{
            if(item.status == 'Active'){
              return <ActiveTask key={item.id} isTrue={isTrue} setIsTrue={setIsTrue} setData={setData} empName={empData.firstName} taskData={item}/>
            }
            if(item.status == 'Completed'){
              return <Complete key={item.id} taskData={item}/>
            }
            if(item.status == 'Failed'){
              return <FailedTask key={item.id} taskData={item}/>
            }
            if(item.status == 'New'){
              return <NewTask key={item.id} empName={empData.firstName} taskData={item} setIsTrue={setIsTrue} isTrue={isTrue}/>
            }
        })
      }
    </div>
  );
};

export default TaskCards;
