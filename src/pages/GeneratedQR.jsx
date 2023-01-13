import React,{ useEffect } from 'react';
import AppWrap from '../HOC/HOC';

const GeneratedQR = () => {
  const qrData = JSON.parse(localStorage.getItem('qrData'));

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <h3 className='font-semibold mb-2'>QR Code generating process has finished</h3>

      
      <div className='w-64 h-64 bg-primary p-2 rounded mb-4'>

      <img 
      src={`https://aligate.teehtwin.org/storage/${qrData.data.qr_image}`} 
      alt="qr code"
      id='qr'
      className='w-full h-full object-cover'
       />
     
      </div>

      <div className='w-64'>

        {/* to do : insert Real QR Data */}
        <p className='mb-2'>Name : <span>{qrData.data.name}</span></p>
        <p>Student ID : <span>{qrData.data.id}</span></p>
      </div>

    <div className='flex justify-center items-center mt-10'>

    <button className="w-40 h-8 outline outline-2 outline-offset-2 outline-gray-900 font-semibold duration-300 rounded hover:bg-primary hover:text-white  hover:h-10 hover:outline-none 
    ">
      Generate Another</button>

      {/* to do: can't download the image,  */}
    <a id='downloadbtn' 
    href={`https://aligate.teehtwin.org/storage/${qrData.data.qr_image}`} 
    download
    className="w-40 h-10 cursor-pointer flex justify-center items-center ml-10 bg-primary text-white rounded">Download QR Code</a>


    </div>

    </div>
  )
};

export default AppWrap(GeneratedQR);