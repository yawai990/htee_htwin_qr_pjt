import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const QRError = () => {
  return (
    <>
    <div className='w-4/6 h-4/6 text-red-500 flex justify-center items-center'>
        <AiFillWarning className='w-5/6 h-5/6 text-5xl' />
    </div>

    <p className='p-4 text-center font-semibold'>&#34;This QR Code has reached to its limits of scanning for today&#34;</p>
    </>
  )
}

export default QRError