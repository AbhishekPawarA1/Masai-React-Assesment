import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Showdata } from './component/showdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Showdata/>
    </>
  )
}

export default App
