import React from 'react'

const HeadingLine = ({ name }) => {
  return (
    <div className='w-screen h-4 flex items-center py-10 relative'>
        <span className='w-full h-0.5 bg-neutral-black' />
        <h3 className='absolute px-6 font-bold text-xl bg-neutral-tint-white text-center left-2/4 bottom-2/4 -translate-x-2/4 translate-y-2/4'>{name}</h3>
    </div>
  )
}

export default HeadingLine