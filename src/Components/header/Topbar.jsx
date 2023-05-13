import React from 'react'
// height: 100%;
// padding: 0 25px;
// display: flex;
// overflow: hidden;

// align-items: center;
// justify-content: space-between;

function Topbar() {
  return (
  
   <div className='w-full h-12 z-20 fixed flex  items-center bg-blue-300 p-3 top-0  '>
   <div className='flex items-center h-12 justify-between overflow-hidden py-4 mx-0'>
   <h3 className='font-bold  text-lg ml-4'>Dashboard</h3> 
   </div>
 
    </div>
  
  )
}

export default Topbar