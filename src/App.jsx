import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mymanager from './components/Mymanager'
import Footer from './components/Footer'
import Test from './components/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <div className="body min-h-[85vh]">
    <Mymanager/>
    </div>
    
    <Footer/>
    </>
  )
}

export default App
