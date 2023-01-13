import React, { useState } from 'react';
import AppWrap from '../HOC/HOC';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';
import Select from 'react-select';
import GenerateLoader from '../components/loading/GenerateLoader';

const GenerateQR = () => {
  const navigate = useNavigate();
  const [ generateRole, setGenerateRole ] = useState(null);
  const [ generateLoader, setGenerateLoader ] = useState({
    loading : false,
    err :null
  });
  

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setGenerateLoader({ loading : true, err: null})

    const elements = e.currentTarget.elements;

    const name = elements.name.value;
    const classId = elements.stu_class.value;
    const studentId = elements.stu_attendance_id.value;

    //to do 
    const generateQRData = {
      name,
      role : generateRole.value,
      studentId,
      classId
    };

    api.GenerateQR(generateQRData)
    .then(resp => {
     const respData = JSON.stringify(resp.data);

     console.log(resp)

      localStorage.setItem('qrData',respData);

      setGenerateLoader({ loading : false, err: null})

      if(resp.status === 200){
        navigate('/qr_generated')
      }
    })
    .catch(err =>  setGenerateLoader({ loading : false, err: err.message}))

    //to do : before navigate to the generated QR, send the data to the backend
    elements.name.value ='';
    setGenerateRole(null)
    elements.stu_class.value ='';
    elements.stu_attendance_id.value = '';

  };

  return (
    <>
 
      <div className='w-full mt-5 relative'>
    
        { generateLoader.loading && <GenerateLoader generateLoader={generateLoader} /> }

        <form action="" className='w-2/6 m-auto p-4w' onSubmit={handleSubmit}>

            <div className='mb-3'>
              <label htmlFor="name" className='block mb-1'>Student&#39;s Name</label>
              <input type="text" 
              name='name'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add studend's name" />
            </div>

            <div className='mb-3'>
              <label htmlFor="role" className='block mb-1'>Role</label>
                
              <Select 
              options={[
                { value : 'student', label:'Student'},
                { value : 'staff', label:'Staff'},
              ]}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  background: 'transparent',
                  color:'black',
                  border : '1px solid #623B22',
                  "&:hover":{
                    borderColor:"#623b22"
                  }
                }),
                 option: (base) => ({
                  ...base,
                  borderBottom: `1px solid #623B22`,
                  color:'black',
                  background:'#F1E6E0',
                }),
              }}
              onChange={setGenerateRole}
              placeholder='Role'
              className='bg-transparent'
              />
            </div>

            <div className='mb-3 flex justify-between items-center gap-4'>

              <div className='w-3/6'>
              <label htmlFor="classId" className='block mb-1'>Class</label>
              <input type="text" 
              name='stu_class'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add class ID" />
              </div>

              <div className='w-3/6'>
              <label htmlFor="studentId" className='block mb-1'>ID</label>
              <input type="text" 
              name='stu_attendance_id'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add Attendance ID" />
              </div>

            </div>

            <div className='flex justify-center items-center flex-col'>

            <h4 className='font-semibold'>Generate a QR Code</h4>

            <div className='my-2'>
              <img src="/img/downarrow.svg" alt="" className='h-8' />
            </div>

            <button className='w-16 h-16 block rounded-full text-white bg-primary font-semibold'>Start</button>
            </div>
          
          </form>  
      </div>

     
      
    </>
  )
}

export default AppWrap(GenerateQR);