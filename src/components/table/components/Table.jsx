import React from "react";
import { Link } from "react-router-dom";
import './Table.css'

const Table = ({ columnList, data, pathname, HandlePopup }) => {

 
  return (      
    <div className="overflow-x-scroll">
      <table className='w-full min-h-[45px] leading-[45px] bg-tb-btn pb-2'>
        <thead className='border-b border-gray-100'>
          <tr>
            {
              columnList?.map((col, ind ) => (
                <th 
                className={`min-w-[60px] lg:${col.width} 
                ${col.columnName ==='No' && 'w-[60px]'}`} 
                key={ind}>
                  {col.columnName}
                </th>
              ))
            }
          </tr>
        </thead>

            {
              Array.isArray(data) 
               ?
          <tbody className="bg-white capitalize">
          {
            data?.map((stu,ind) =>{
              return <tr key={`student-${ind}`} className='border-b'>
              <td className='text-center'>{ind + 1}</td>
              <td className='text-center'>{`${stu.student_id}`}</td>
              <td className='text-center'>{stu.name}</td>

              <td className='px-2 py-2 text-center'>

                {
                  pathname === '/datas' ? 

                <div className={`rounded-lg capitalize flex gap-2 justify-center items-center`}>

                {
                  ['present','absent','late'].map((st,idx)=>{
                   
                    return <div 
                    key={`status${idx}`}
                    className={`w-[65px] h-[35px] text-white rounded-lg capitalize flex justify-center items-center
                  ${
                    pathname === '/datas' && stu.jan_attendance.length <= 0 && st === 'absent' ? 'bg-red-600': 
                    pathname === '/datas' && stu.jan_attendance.length > 0 && st === 'present' &&
                    stu.jan_attendance[0].status === st ? 'bg-green-600'
                :
                pathname === '/datas' && stu.jan_attendance.length > 0 && st === 'late' &&
                    stu.jan_attendance[0].status === st ? 'bg-orange-600':
                'bg-tb-btn text-black'
                  }
                  `
                  }
                  >{st}</div>
               })
                }

                </div> :
                pathname === '/datas/month' && 
                <span
                 className={`${stu.total_latency !== 'none' && 'text-red-500'}`}>
                  {stu.total_latency.slice(0,5) }
                  </span>      
                }
              </td>
              

              {
                pathname === '/datas' &&
                 stu.jan_attendance.length > 0  ?
                <td 
                className={`text-center 
                ${stu.latency !== 'none' &&
                stu.latency !== '00:00' 
                && 'text-red-600' }`
              }
                >
                  { stu.jan_attendance[0].latency.slice(0,5)} 
                  </td>
                : pathname !== '/datas/month' &&
                <td className="text-center">None</td> 
                
              }

              {
                 pathname === '/datas' &&
                 stu.jan_attendance.length > 0  ?
                <td className='text-center'>
                   {stu.exit_scan_time || 'In Class'}
                    </td>
                :
                pathname === '/datas' ? <td className="text-center">None</td>
                :
                <td className='text-center text-black underline'>
                  <button 
                  onClick={() => HandlePopup(stu.slug)} 
                  className='outline-none border-none text-underline'
                  >Details</button>
                </td>
              }
            </tr>
        })
          }
        </tbody>
        : 
         <tbody>
          <tr>
            <td colSpan={6} className='pl-5'>
             There is no data to display
              </td>
          </tr>
        </tbody>
            }
      </table>
      </div>
  )
}

export default Table;