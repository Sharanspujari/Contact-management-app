import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
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
  <QueryClientProvider client={queryClient}>
  <App/>
  </QueryClientProvider>
  </Provider>
  </BrowserRouter>
 
  </React.StrictMode>,
)
