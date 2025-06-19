import React from 'react'
import Projects from '../Components/projects/Projects'
import Skills from '../Components/skills/Skills'
import Home from '../Components/home/Home'
import About from '../Components/About'
import transition from '../transition'
import InViewAnimation from '../Components/ui/InViewAnimation'
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <InViewAnimation delay={0.3} yOffset={30} duration={1} >
        <Skills />
      </InViewAnimation>
    </>
  )
}

export default transition(HomePage)