import React from 'react';

const ResolvedCard = ({resolve}) => {
    return (
    <div className="shadow-md border-2 border-gray-300 rounded-2xl">
      <div className="card-body py-4">
        <h2 className="card-title  text-xl font-semibold p-2 ">{resolve.title}</h2>
      </div>
    </div>
    );
};

export default ResolvedCard;