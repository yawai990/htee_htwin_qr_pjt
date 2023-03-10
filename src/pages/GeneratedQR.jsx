import { useState, useEffect } from 'react';
import AppWrap from '../HOC/HOC';
import QRCode from 'react-qr-code';
import { useGlobalContext } from '../context';
import { saveSvgAsPng } from 'save-svg-as-png';
import { useNavigate } from 'react-router-dom';

const GeneratedQR = () => {
  const { qrData } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() =>{
    if(qrData === undefined) {
      return navigate('/qr_generate')
    }
  },[qrData]);

 
  const handleDownload = e =>{
    const qr=  document.getElementById('qr');
    saveSvgAsPng(qr, "diagram.png", {scale: 15});
  }

  
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <h3 className='font-semibold mb-2'>QR Code generating process has finished</h3>

      <div className='w-64 h-64 bg-primary p-2 rounded mb-4'>
        {
          qrData && qrData !== undefined &&
        <QRCode value={`${qrData.email},${qrData.classID}`} id='qr' className='w-full h-full' />
        }
      </div>

      {
        qrData && qrData !== undefined &&  <div className='w-64'>
        <p className='mb-2'>Name : <span>{qrData.name}</span></p>
        <p>Student ID : <span>{qrData.classID}</span></p>
      </div>

      }

      

    <div className='flex justify-center items-center mt-10'>

    <button className="w-40 h-8 outline outline-2 outline-offset-2 outline-gray-900 font-semibold duration-300 rounded hover:bg-primary hover:text-white  hover:h-10 hover:outline-none 
    ">
      Generate Another</button>

    <a id='downloadbtn' 
    onClick={handleDownload}
     className="w-40 h-10 cursor-pointer flex justify-center items-center ml-10 bg-primary text-white rounded">Download QR Code</a>

    </div>

    </div>
  )
}

export default AppWrap(GeneratedQR);