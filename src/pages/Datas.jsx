import React,{ useState } from 'react';
import AppWrap from '../HOC/HOC';
import CalendarComponent from '../components/CalendarCom';
import DataTable from '../components/table';
import PieChartCom from '../components/chart/PieChart';
import { useLocation } from 'react-router-dom';
import Model from '../components/Model/Model';
import Select from 'react-select';

const classDataOptions = [
  { value : 11, label : 'Grade 11'},
  { value : 10, label : 'Grade 10'},
  { value : 9, label : 'Grade 9'},
  { value : 8, label : 'Grade 8'},
  { value : 7, label : 'Grade 7'},
  { value : 6, label : 'Grade 6'},
  { value : 5, label : 'Grade 5'},
]

const Datas = () => {
  const { pathname } = useLocation();
  const [ showPopup, setShowPopup ] = useState(false); //to do
  const [ selectedOption, setSelectedOption ] = useState(null);
  const [ date, setDate ] = useState(new Date());
  const [ month, setMonth ] = useState(new Date());

  const HandlePopup = (id) =>{
    console.log(id)
     setShowPopup(!showPopup)
    }

  return (
    <section className='w-10/12 mx-auto mb-5 relative overflow-x-hidden'>

      {
        showPopup && <Model HandlePopup={HandlePopup} />
      }

    <section className='w-full py-1 flex justify-end items-center my-3'>
        <div className='bg-white rounded p-1 flex gap-2'>
          <button className='p-2 bg-primary text-white hover:bg-primary hover:text-white rounded-lg'>Attendance Table</button>
          <button className='p-2 hover:bg-primary hover:text-white rounded-lg'>Exam Qualification</button>
        </div>

      </section>

      <div className='w-full lg:flex'>

        <div className='w-full lg:w-3/12 lg:pr-4 mb-5'>

          <CalendarComponent 
          date={date} setDate={setDate}
          month ={ month } setMonth={setMonth}
           />

          <div className="w-full mt-5">

            <Select
            options={classDataOptions}
            onChange={setSelectedOption}
            placeholder='Class'
            className='rounded focus:bg-primary'
             />
        
          {
            pathname === '/datas/month' && 
          <PieChartCom />
          }
          </div>
        </div>

        <DataTable 
        pathname={pathname} 
        date={date} 
        month={month}
        HandlePopup={HandlePopup}
         />

        
      </div>
    </section>
  )
}

export default AppWrap(Datas);