import React from 'react'

const Content = ({context}) => {
    console.log(context)
  return (
    <>
        {/* Content  */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className='text-4xl self-start'>{context.Title}</h2>
            <p className='text-lg'>{context.Text}</p>
        </div>
    </>
  )
}

export default Content