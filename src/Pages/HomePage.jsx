import React from 'react'
import Projects from '../Components/projects/Projects'
import Skills from '../Components/skills/Skills'
import Home from '../Components/home/Home'
import About from '../Components/About'
import transition from '../transition'
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  )
}

export default transition(HomePage)