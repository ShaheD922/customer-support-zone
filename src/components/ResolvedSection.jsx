import React from 'react';
import ResolvedCard from './ResolvedCard';
const ResolvedSection = ({resolvedData}) => {
    return (
       <div className="mt-12">
      <p className="text-2xl md:text-3xl font-semibold my-2">Resolved Task</p>
      <p className='text-gray-400'>Number of resolved tasks.</p>
      <div className="grid gap-y-3 mt-3 mb-4">
        {resolvedData.map((resolve) => (
          <ResolvedCard key={resolve.id} resolve={resolve} />
        ))}
      </div>
    </div>
    );
};

export default ResolvedSection;