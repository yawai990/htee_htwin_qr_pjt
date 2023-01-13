import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { format } from 'date-fns';

const TableHeadBar = ({ pathname,date, setSearchKeyWord, tableFilterRole, setTableFilterRole  }) => {

  const HandleSearch = e =>{
    e.preventDefault();

    const elements = e.currentTarget.elements;

    
    const searchWord = elements.search_key_word.value;

    setSearchKeyWord(searchWord)

    elements.search_key_word.value ='';
  }
  return (
    <section className='w-full h-12 bg-primary px-4 text-white flex justify-between items-center'>

        <div className='p-1 bg-white text-black rounded-2xl flex gap-1 items-center'>

            <button 
            className={`${ tableFilterRole === 'students' ? 'bg-primary text-white':'text-black'} rounded-2xl text-white px-2 hover:bg-primary hover:text-white`}
             onClick={() => setTableFilterRole('students')}
             >
              Students
             </button>

            <button 
            className={`${tableFilterRole === 'staffs' ? 'bg-primary text-white':'text-black'} rounded-2xl text-white px-2 hover:bg-primary hover:text-white`}
            onClick={() => setTableFilterRole('staffs')}
            >
              Staffs
            </button>
        </div>

        <div>
          {
            pathname === '/datas' ? <p className='font-semibold'>{format(new Date(date),'MMMM do yyyy')}</p>
            :
            pathname === '/datas/month' ? 

            //to do 
          <p className='font-semibold'>{format(new Date(date),'MMMM-yyyy')}</p>
          :''
          }
        </div>

        <form 
        onSubmit={HandleSearch}
        className='min-w-[250px] bg-white rounded flex items-center flex-row-reverse px-1'
        >
          
          <input 
          type="text" 
          name='search_key_word'
          className='h-full block p-2 flex-1 outline-none text-gray-700'
          placeholder='Search'
           />

          <button 
          type='submit'
          className='p-2 block text-black text-lg'
          >
            <AiOutlineSearch />
          </button>
        </form>
    </section>
  )
}

export default TableHeadBar