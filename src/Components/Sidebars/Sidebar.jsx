import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdContact,TiChartLine} from 'react-icons/all'

function Sidebar() {
  
  return (
    <div className='h-screen w-42  -w-64 fixed flex-4 justify-center   sticky bg-gray-600'>

  
   <ul className='p-2 flex flex-col items-center justify-items-center'>
    <Link className='flex  ml-2 justify-center items-center ' to="/">
    <li className='flex  hover:bg-gray-800 rounded p-2  w-40 m-5 items-center text-white'>
    <IoMdContact className='mr-4'/>
    Contact
    </li>
    </Link> 

    <Link className='flex  justify-center items-center' to="/charts_and_maps">
    <li className='flex   hover:bg-gray-800  w-43 rounded items-center text-white'>
    <TiChartLine className='m-3'/>
    Charts And Maps
    </li>
    </Link>
   </ul>
  

    </div>

  )
}

export default Sidebar