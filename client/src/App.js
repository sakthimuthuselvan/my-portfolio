import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.scss"
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Skills from './Components/Skils/Skills'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='overall'>
      <div className='container'>
        <NavBar />

      </div>

      <div style={{ paddingTop: 80 }} className='container'>
        <About />
      </div>
      <Skills />

      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
