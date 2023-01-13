import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = ({ date, setDate, month, setMonth }) => {

  const navigate = useNavigate();

  const handleMonth = (e) =>{
    setMonth(e);
    setDate(e)
    navigate('/datas/month')
  }

  const handleChange = e =>{

    //call the api for the data
    setDate(e)
    navigate('/datas')
  }
  return (
    <div className='w-full'>
      <Calendar 
      className='w-full'
      onChange={handleChange} 
      value={date}
      onClickMonth={handleMonth}
      />
    </div>
  )
}

export default CalendarComponent;