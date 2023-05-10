import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-400'>
        <h1 className="text-3xl font-bold underline">Contact management app</h1>
      </div>
    </>
  )
}

export default App
