import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.scss"
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Skills from './Components/Skils/Skills'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects';
const App = () => {
  return (
    <div className='overall'>
      <div className='container'>
      <NavBar />

      </div>

   <div style={{paddingTop:80}} className='container'>
     <About />
   </div>
   <Skills />

   <Experience />
   <Projects />

    </div>
  )
}

export default App
