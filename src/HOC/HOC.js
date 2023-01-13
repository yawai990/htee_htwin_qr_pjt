import React from 'react'
import Button from '../components/Button';
import {BiScan} from 'react-icons/bi';
import { AiOutlineQrcode } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';

const buttonDatas = [
  {
    id : 1,
    path : '/qr_scan',
    text : 'scan',
    icon : <BiScan />
  },
  {
    id : 2,
    path : '/qr_generate',
    text : 'generate',
    icon : <AiOutlineQrcode />
  },
  {
    id : 3,
    path : '/datas',
    text : 'datas',
    icon : <FaChartLine />
  },
]

const AppWrap = ( Component ) => () =>{
    return  <div 
    style={{
      overflow:'hidden'
    }}
    className="w-[100vw]
     h-auto min-h-screen flex bg-secondary items-center flex-col"
    >
               <div className='flex justify-between mt-5 w-10/12'>
      <div className='w-4/12 h-[30px] flex items-center pl-10'>
        <p className='font-semibold text-lg italic mr-3 text-primary'>ALLIGATE</p>
        <img src='/img/Vector.png' alt='logo' className='h-full object-cover' />
      </div>

      <div className='w-8/12 flex gap-4 m-auto'>
        {
          buttonDatas.map(btn=>(
            <Button key={btn.id} path={btn.path} btnText={btn.text} icon={btn.icon} />
          ))
        }
      </div>  
      </div>

            <Component />
    </div>
};
export default AppWrap;