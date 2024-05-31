import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Terms from './Components/Terms and service/Terms'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <About />
      </div>
      <Footer />
      <Terms />
    </div>
  )
}

export default App
