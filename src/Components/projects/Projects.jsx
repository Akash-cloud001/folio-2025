import React from 'react'
import Heading from '../ui/Heading'
import {motion} from 'motion/react'
import { Gravity, MatterBody } from "../ui/gravity";
const projectsData=[
  {
    name: 'Anipedia',
    url: 'https://ani-pedia.web.app/',
    imgUrl: '/images/pro-1.jpeg',
    videoUrl:'',
    backgroundFrame: 'red',
    tech: ['react', 'tailwind', "api's"],
    desc: "AniPedia is a web application designed for anime enthusiasts, offering up-to-date information on currently airing anime and top performers. Leveraging the Jikan API, it provides detailed insights into various anime series. Users can search for specific anime, watch trailers via YouTube, and find platforms where they can stream their chosen series."
  },
  {
    name: 'Solar System',
    url: 'https://solar-system-00.web.app/',
    imgUrl: '/images/pro-2.jpeg',
    videoUrl:'',
    backgroundFrame: '',
    tech: ['react', 'threeJs','r3f','drei','css','figma'],
    desc:"The Solar System project is an interactive 3D visualization of our solar system, developed using React, React Three Fiber (R3F), Three.js, and Drei. This application offers users an immersive experience, allowing them to explore the planets and their orbits in a visually appealing manner."
  },
  {
    name: 'Akash Folio',
    url: 'https://google.com',
    imgUrl: '/images/pro-3.jpeg',
    videoUrl:'',
    backgroundFrame: '',
    tech: ['react', 'threeJs','r3f','drei','tailwind','acternity ui', 'react-bits', 'lenis'],
    desc: 'This portfolio website is a visually stunning and interactive showcase built using React, Three.js, React Three Fiber (R3F), Drei, Acternity UI, and React Bit for seamless 3D component integration. It features dynamic 3D elements, smooth animations, and an intuitive UI, offering an immersive experience. The site highlights my projects, skills, and achievements in a modern and engaging way.',
  },
]
const Projects = () => {
  return (
    <section className='h-auto w-full padding-top-nav px-8'>
      <section className='h-[300vh] w-full project-container relative ' >
        <section className='project-main-frame h-screen w-full sticky top-0 overflow-hidden flex items-center justify-center'>
          <div className='w-max'>
            <div className='relative text-[64px] w-max h-fit'>
              <p className='uppercase ff-betatron  z-[1]'>MY WORK</p>
              <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>MY WORK</p>
            </div>
          </div>
          <motion.section className='project-scroller h-screen w-full bg-transparent absolute z-[1]'>
            <ProjectCard name={projectsData[0].name} url={projectsData[0].imgUrl} tech={projectsData[0].tech} idx={1}/>
          </motion.section>
        </section>
      </section>
    </section>
  )
}

export default Projects


const ProjectCard = ({name, url, tech, idx})=>{
  return(
    <motion.aside className='p-4'>
      <figure className='project-card p-[10px] w-[300px] h-[auto] border border-[rgba(251,250,243,0.2)] relative'>
        <img src="/images/cross.png" alt="" className='absolute -top-[5px] -left-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -top-[5px] -right-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -left-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -right-[5px]' /> 
        <img src={url} alt="pro-image" className='w-full h-[150px] object-cover object-top'/>
        <div className='bg-[rgba(251,250,243,0.03)] h-[200px] w-full'>
          <div className='relative text-4xl w-max h-fit mx-auto pt-4'>
                <p className='uppercase ff-betatron text-primary z-[1]'>{name}</p>
                <p className='uppercase ff-betatron text-nowrap text-stroke-red absolute z-0 left-1 top-3'>{name}</p>
          </div>
        </div>
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
            react
          </div>
        </MatterBody>
        </Gravity>
      </figure>
    </motion.aside>
  )
}