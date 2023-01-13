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

const AppWrap = (Component) => () =>{
    return (
      <div 
        style={{overflow:'hidden'}}
        className="w-[100vw] h-auto min-h-screen flex bg-secondary items-center flex-col">
          <div className='flex gap-4 mt-5'>
            {
              buttonDatas.map((btn) =>
                <Button key={btn.id} path={btn.path} btnText={btn.text} icon={btn.icon} />
              )
            }
          </div>
          <Component />
      </div>
    )
};

export default AppWrap;