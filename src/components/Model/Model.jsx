import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Calendar } from 'react-calendar';

const Model = ({ HandlePopup }) => {
  
  const [ datevalue, setDateValue ] = useState([new Date(2022,12,12), new Date(2022,12,13)]);

  console.log(datevalue)

  return (
    <section className='w-full p-3 mt-10 flex justify-center items-start bg-gray-200 rounded-lg z-40 absolute'>

      <div className="w-10/12">

        <div className='w-full px-4 py-2 flex justify-between items-center'>
          <h5>Name Records</h5>

          <button className='text-primary text-4xl' onClick={HandlePopup}>
            <AiOutlineCloseSquare />
          </button>
        </div>

        <div className='w-full mx-auto bg-blue-300 my-4'>
          <Calendar className='w-full' value={datevalue} />
        </div>

        <div>
          <h5>Statistics</h5>

          <div className='w-full mx-auto flex justify-between'>

            <div className='bg-white rounded-lg p-3'>

              <table>
                <thead className='bg-secondary border-b-4 border-white'>
                  <tr>
                    <td className='text-center'>Weeks</td>
                    <td className='text-center py-1 px-2'>Late Attendance</td>
                  </tr>
                </thead>

                <tbody className=''>
                  {
                    //to do : need to add real data
                    Array.from({ length: 4 }).map((_, ind) => (
                      <tr className='bg-secondary border-b-4' key={ind}>
                        <td className='text-center p-1 px-3'>Jan {
                          ind + 1 === 1 ?
                            `${ind + 1}st` :
                            ind + 1 === 2 ? `${ind + 1}nd` :
                              ind + 1 === 3 ?
                                `${ind + 1}rd` : `${ind + 1}th`
                        } week</td>
                        <td className='text-center'> 0 hours : 3 min</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>

            <div className='py-4 px-3 bg-white drop-shadow rounded-lg'>
              <h5>Average Latency Per Week</h5>

              <div className='w-[120px] h-[120px] mx-auto mt-4 rounded-full bg-primary flex justify-center items-center'>

                {/* to do :  */}
                <p className='text-white text-center text-sm'>0 hour : 15 mins </p>
              </div>
            </div>

            <div className='py-4 px-3 bg-white drop-shadow rounded-lg'>
              <h5>Total Latency for This Month</h5>

              <div className='w-[120px] h-[120px] mx-auto mt-4 rounded-full bg-primary flex justify-center items-center'>

                {/* to do :  */}
                <p className='text-white text-center text-sm'>0 hour : 45 mins </p>
              </div>
            </div>

            <div className='bg-white rounded drop-shadow p-4 px-10'>
              <div className='w-full text-start mb-3'>
                <span className='w-5 h-5 inline-block bg-green-500 mr-3'></span>
                <span>Present</span>
              </div>

              <div className='w-full text-start mb-3'>
                <span className='w-5 h-5 inline-block bg-red-500 mr-3'></span>
                <span>Absent</span>
              </div>

              <div className='w-full text-start mb-3'>
                <span className='w-5 h-5 inline-block bg-orange-500 mr-3'></span>
                <span>Late</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Model