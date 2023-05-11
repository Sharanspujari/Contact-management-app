import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import UserReducer from './Components/UserSlice/UserReducer.jsx'
const store = configureStore({
  reducer:{
  users:UserReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <App/>
  </Provider>
  </BrowserRouter>
 
  </React.StrictMode>,
)
