import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Button = ({ path, btnText, icon }) => {
    const { pathname } = useLocation(); 

    const checkPath = '/'+pathname.split('/').find(pt => pt === path.split('/')[1]);

  return (
    <Link to={path && path} 
    style={{ backgroundColor: checkPath === path && '#623B22'}} 
    className='p-2 rounded bg-gray-500 text-white flex justif-center 
    items-center gap-2 capitalize'
    >
        <span> { icon }</span>
        <span>{btnText}</span>
    </Link>
  )
}

export default Button