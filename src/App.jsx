import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {


  return (
    <>
        <Navbar/>

      <div className='bg-zinc-900 text-white'>
        <section id='intro'>
          <Intro/>
        </section>

        <section id='services' className="scroll-mt-15">
          <Services />
        </section>

        <section id='about' className="scroll-mt-15">
          <About />
        </section>

        <section id='skills' className="scroll-mt-15">
          <Skills />
        </section>

        <section id='projects' className="scroll-mt-15 ">
          <Projects />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App
