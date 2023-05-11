import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdContact,TiChartLine} from 'react-icons/all'
// flex: 1;
//   background-color: rgb(247, 246, 246);
//   height: 100vh;
//   position: sticky;
//   top: 45px;
function Sidebar() {
  // cursor: pointer;
  // display: flex;
  // /* padding: 5px; */
  // align-items: center;
  // border-radius: 10px;
  return (
    <div className='h-screen w-42  -z-43 fixed flex-4 justify-center   sticky bg-gray-600'>

  
   <ul className='p-2 flex flex-col items-center justify-items-center'>
    <Link className='flex  ml-2 justify-center items-center ' to="/">
    <li className='flex  hover:bg-gray-800 rounded p-2  w-40 m-5 items-center text-white'>
    <IoMdContact />
    Contact
    </li>
    </Link> 

    <Link className='flex  justify-center items-center' to="/charts_and_maps">
    <li className='flex   hover:bg-gray-800 p-2 w-43 rounded items-center text-white'>
    <TiChartLine/>
    Charts And Maps
    </li>
    </Link>
   </ul>
  

    </div>

  )
}

export default Sidebar