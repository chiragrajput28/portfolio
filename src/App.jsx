import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
function App() {
  const [count, setCount] = useState(0)
  const styleWithoutPadding = {
    margin: 0,
    padding: 0,
  };
  return (
    <div>
      <BrowserRouter>
        <div style = {styleWithoutPadding}>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className = "relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
