import React, { useState ,useContext} from 'react'
import {GiHamburgerMenu} from 'react-icons/all'
import NavContext from '../sideContext/NavContext';




function Topbar() {
const {sidebar,setSidebar}=useContext(NavContext);
  return (
  
   <div className='w-full h-12 z-20 fixed flex  items-center bg-indigo-500 p-3 top-0  '>
   <div className='flex items-center h-12 justify-between overflow-hidden py-4 mx-0'>
 
    <GiHamburgerMenu className='text-xl'  onClick={() => setSidebar(!sidebar)}/>
 
   <h3 className='font-bold  text-lg ml-4'>Dashboard</h3> 
   </div>
 
    </div>
  
  )
}

export default Topbar