import React from 'react';
import './Table.css';

const TableLoading = () => {
  return (
    <section className='w-full'>
      {
        Array.from({ length : 11}).map((_,ind) =>(
          <div
          key={ind}
          className="table-header bg-tb-btn p-2 bg-white flex justify-between items-center gap-2 border-b-2 py-4 border-gray-400">

          <div className='skeleton w-1/12 h-3 relative bg-gray-300'>
            <div className="shimmer rounded-2xl"></div>
          </div>
          <div className='skeleton w-2/12 h-3 bg-gray-300 relative'>
            <div className="shimmer rounded-2xl"></div>
          </div>
          <div className='skeleton w-3/12 h-3 bg-gray-300 relative'>
            <div className="shimmer rounded-2xl"></div>
          </div>
          <div className='skeleton w-4/12 h-3 bg-gray-300 relative'>
            <div className="shimmer rounded-2xl"></div>
          </div>
          <div className='skeleton w-2/12 h-3 bg-gray-300 relative'>
            <div className="shimmer rounded-2xl"></div>
          </div>
          </div>
        ))
      }
        
    </section>
  )
}

export default TableLoading