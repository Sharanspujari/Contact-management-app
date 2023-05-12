import React from 'react'

import './App.css'
import Topbar from './Components/header/Topbar'
import Sidebar from './Components/Sidebars/Sidebar'
import { Routes,Route ,Outlet } from 'react-router-dom'
import Contact from './Components/Contacts/Contact'
import ChartAndMap from './Components/ChartsAndMaps/ChartAndMap'
import Create from './Components/CreateContact/Create'
import Update from './Components/CreateContact/Update'

function App() {
  

  return (
  
   <div className='w-full max-w-screen-xl overflow-x-hidden '>
    <Topbar/>
    <div className='flex sticky '>
    <Sidebar/>

  <Routes>
   <Route path='/' element={<Contact/>}/>
   
   <Route path='/charts_and_maps' element={<ChartAndMap/>}/>
   
   <Route path="/create" element={<Create/>}/>
   <Route path="/edit/:id" element={<Update/>}/>
   
  </Routes>
  
    </div>
   
   </div>
    
  )
}

export default App
