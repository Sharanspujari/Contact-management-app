import React,{useState} from "react";
import {GiHamburgerMenu} from 'react-icons/all'
import "./App.css";
import Topbar from "./Components/header/Topbar";
import Sidebar from "./Components/Sidebars/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import Contact from "./Components/Contacts/Contact";
import ChartAndMap from "./Components/ChartsAndMaps/ChartAndMap";
import Create from "./Components/CreateContact/Create";
import Update from "./Components/CreateContact/Update";

function App() {
  
  return (
    <div className=" flex-1 h-screen w-full">
     
        <Topbar />
   
      <div className="flex sticky mt-20 items-center justify-between" >
        <div className="flex-1 ">
      
          <Sidebar/>
        </div>
        <div className="w-9/12 mr-16">
          <Routes>
            <Route path="/" element={<Contact />} />

            <Route path="/charts_and_maps" element={<ChartAndMap />} />

            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Update />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
