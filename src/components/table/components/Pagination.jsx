import React,{ useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({ curPage, pagination }) => {
  const NumberInput = useRef(curPage);

  const handleInputType = e => {
    NumberInput.current = Number(e.target.value)
      //to do : call the api after user does not time for a while
      console.log(NumberInput)
    }
    // console.log(NumberInput)

  return (
    <div 
    className='w-full min-h-[30px] bg-white text-black py-2 flex justify-end border-t border-t-2 border-t-gray-500'
    >
        <div className="w-6/12 flex justify-between items-center gap-2 pr-5">
            <div className='flex items-center gap-2'>
            <button className='p-2 text-white bg-primary text-lg rounded'>
                <MdKeyboardArrowLeft />
            </button>
            {

              Array.from({ length : pagination}).map((_,ind) =>(
                <button 
                key={ind}
                className={`
                // show active button
                ${ ind + 1 === curPage && 'bg-secondary border-primary'} 

                ${ curPage !== 1 ? 
                  ( ind + 1 === curPage || 
                    ind + 1 === curPage - 1 || 
                    ind + 1 === curPage + 1 ? 
                    'block':'hidden') : (
                    ind + 1 === curPage || 
                    ind + 1 === curPage + 1 || 
                    ind + 1 === curPage + 2 ? 'block':
                    (ind + 1 === pagination ? 'block':'hidden')
                ) 
              }
                p-2  px-3 hover:text-white hover:bg-primary duration-150 rounded`}
                >
                  { ind + 1 }
                  </button>
              ))
            }
            <button className='p-2 text-white bg-primary text-lg rounded hover:text-white hover:bg-primary duration-150 rounded'>
                <MdKeyboardArrowRight />
            </button>
            </div>

            <div>
            <span>Go To Page</span>
            <input ref={NumberInput} 
            type="number" 
            defaultValue={NumberInput.current || curPage} 
            onChange= {handleInputType}
            className='w-8 h-8 outline-none border apperance-none bg-gray-100 ml-2 text-center' />
            </div>

        </div>

       
    </div>
  )
}

export default Pagination