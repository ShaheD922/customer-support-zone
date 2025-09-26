import React from 'react';

const TaskCard = ({task, handleResolveTask }) => {
    return (
        <div className="border border-gray-300 rounded-2xl card w-full bg-base-100 shadow-sm p-2.5 my-5">
      <div className="card-body ml-2">
        <h2 className="md:text-xl font-semibold"> {task.title} </h2>
        <div className="ml-5 my-6">
          <button
            onClick={() => handleResolveTask(task)}
            className=" bg-green-600  text-gray-300 font-bold cursor-pointer  p-1.5 rounded-2xl"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
    );
};

export default TaskCard;