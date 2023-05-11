import React from 'react'

import './App.css'
import Topbar from './Components/header/Topbar'
import Sidebar from './Components/Sidebars/Sidebar'
import { Routes,Route ,Outlet } from 'react-router-dom'
import Contact from './Components/Contacts/Contact'
import ChartAndMap from './Components/ChartsAndMaps/ChartAndMap'
import Create from './Components/CreateContact/Create'
function App() {
  

  return (
  
   <div>
    <Topbar/>
    <div className='flex sticky'>
    <Sidebar/>

  <Routes>
   <Route path='/' element={<Contact/>}/>
   <Route path='/charts_and_maps' element={<ChartAndMap/>}/>
   <Route path="/create" element={<Create/>}/>
  </Routes>
  <Outlet/>
    </div>
   
   </div>
    
  )
}

export default App
