import React from 'react'
import Heading from '../ui/Heading'
const projectsData=[
  {
    name: 'Anipedia',
    url: 'https://ani-pedia.web.app/',
    imgUrl: '',
    videoUrl:'',
    backgroundFrame: 'red',
    tech: ['react', 'tailwind', "api's"],
    desc: "AniPedia is a web application designed for anime enthusiasts, offering up-to-date information on currently airing anime and top performers. Leveraging the Jikan API, it provides detailed insights into various anime series. Users can search for specific anime, watch trailers via YouTube, and find platforms where they can stream their chosen series."
  },
  {
    name: 'Solar System',
    url: 'https://solar-system-00.web.app/',
    imgUrl: '',
    videoUrl:'',
    backgroundFrame: '',
    tech: ['react', 'threeJs','r3f','drei','css','figma'],
    desc:"The Solar System project is an interactive 3D visualization of our solar system, developed using React, React Three Fiber (R3F), Three.js, and Drei. This application offers users an immersive experience, allowing them to explore the planets and their orbits in a visually appealing manner."
  },
  {
    name: 'Akash Folio',
    url: 'https://google.com',
    imgUrl: '',
    videoUrl:'',
    backgroundFrame: 'This portfolio website is a visually stunning and interactive showcase built using React, Three.js, React Three Fiber (R3F), Drei, Acternity UI, and React Bit for seamless 3D component integration. It features dynamic 3D elements, smooth animations, and an intuitive UI, offering an immersive experience. The site highlights my projects, skills, and achievements in a modern and engaging way.',
  },
]
const Projects = () => {
  return (
    <section className='h-auto w-full padding-top-nav border border-white '>
      <Heading name='My Work' />
        <section className='h-[300vh] project-container bg-purple-400 w-full relative'>
          <aside className='left-project-images bg-green-300 h-dvh w-1/2 sticky left-0 top-0 z-[1]'> 

          </aside>

          <aside className="right-project-desc h-full w-full z-0 absolute bg-cyan-300 top-0">
            {projectsData.map((pro, idx)=>(
              <div key={idx} className="h-dvh w-1/2 bg-red-400 ml-auto">
                {pro.name}
              </div>
            ))}
          </aside>
        </section>
    </section>
  )
}

export default Projects