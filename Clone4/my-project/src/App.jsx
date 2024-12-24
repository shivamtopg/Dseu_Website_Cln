import { useState } from 'react'
import './App.css'
import Navbar1 from './components/Navbar1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[url("./src/assets/UniversityPic.jpg")] bg-cover h-screen'>
      
      <Navbar1 />
    </div>
  )
}

export default App
