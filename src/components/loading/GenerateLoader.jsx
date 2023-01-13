import React from 'react'

const GenerateLoader = () => {
  return (
    <section className="loader w-full h-full absolute z-10 flex justify-center items-center">
    <div className='w-2/6 h-4/6 drop-shadow-lg rounded-lg bg-neutral-tint-white overflow-hidden flex jusify-center items-center flex-col p-2'>
    <p className='text-center font-semibold py-2'>Generating QR Code... Please Wait For A While</p>
   <img src="/img/loader.gif" alt="loader" className='w-[180px] h-[180px] object-cover' />
  </div>
        </section>
  )
}

export default GenerateLoader