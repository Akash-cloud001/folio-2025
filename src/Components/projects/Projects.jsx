import React, { useRef } from 'react'
import Heading from '../ui/Heading'
import {motion, useInView, useScroll, useTransform} from 'motion/react'
import { Gravity, MatterBody } from "../ui/gravity";
const projectsData=[
  {
    name: 'Anipedia',
    url: 'https://ani-pedia.web.app/',
    imgUrl: '/images/pro-1.jpeg',
    videoUrl:'',
    backgroundFrame: 'red',
    tech: ['HTML','CSS','react', 'tailwind', "api's"],
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
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref
  })
  const y = useTransform(scrollYProgress, [0, 0.8], ['0%', '-100%']);
  const top = useTransform(scrollYProgress, [0, 0.9], ['100%', '-200%']);
  return (
    <section className='h-auto w-full md:padding-top-nav px-5 sm:px-8'>
      <section ref={ref} className='h-[350vh] w-full project-container relative ' >
        <section className='project-main-frame h-[100vh] w-full sticky top-0 overflow-hidden flex items-center justify-center'>
          <div className='w-max'>
            <div className='relative text-[64px] w-max h-fit'>
              <p className='uppercase ff-betatron  z-[1]'>MY WORK</p>
              <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>MY WORK</p>
            </div>
          </div>
        </section>
        <ProjectCard name={projectsData[2].name} url={projectsData[2].url} imgUrl={projectsData[2].imgUrl} tech={projectsData[2].tech} idx={1} className={'sticky top-[20%] left-[20%] lg:left-[0%] -translate-x-1/2 w-max'}/>
        <ProjectCard name={projectsData[1].name} url={projectsData[1].url} imgUrl={projectsData[1].imgUrl} tech={projectsData[1].tech} idx={2} className={'sticky top-[20%] left-[20%] lg:left-[34%] xl:left-[38%] -translate-x-1/2 w-max'}/>
        <ProjectCard name={projectsData[0].name} url={projectsData[0].url} imgUrl={projectsData[0].imgUrl} tech={projectsData[0].tech} idx={3} className={'sticky top-[20%] left-[20%] lg:left-[100%] -translate-x-1/2 w-max'}/>
      </section>
    </section>
  )
}

export default Projects


const ProjectCard = ({name, url, tech, idx, className, imgUrl})=>{
  
  const ref = useRef();
  const  isInView = useInView(ref, {
    margin: '-10%',
    once: true
  });
  const projectCardVariant = {
    initial: {
      opacity: 0.75,
      filter:'blur(20px)',
      scale: 0.8
    },
    animate: {
      opacity: 1,
      filter:'blur(0)',
      scale: 1,
      transition:{
        duration: 0.5,
        // ease: 'ease'
      }
    },
    exit: {
      opacity: 0.75,
      filter:'blur(20px)',
      scale: 0.8
    }
  }
  return(
    <motion.aside ref={ref} initial='initial' animate={isInView ? 'animate' : 'exit'} exit='exit' variants={projectCardVariant} className={`p-4 ${className} overflow-hidden`}>
      <figure className='project-card p-[10px] w-[320px] h-[400px] border back-900 border-[rgba(251,250,243,0.2)] relative '>
        <img src="/images/cross.png" alt="" className='absolute -top-[5px] -left-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -top-[5px] -right-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -left-[5px]' /> 
        <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -right-[5px]' /> 
        <img src={imgUrl} alt="pro-image" className='w-full h-[160px] object-cover object-top'/>
        <a target='_blank' href={url} className='bg-transparent  w-full z-20'>
          <div className='relative text-4xl w-max h-fit mx-auto pt-4 flex gap-1 text-primary z-50'>
                <p className='uppercase ff-betatron  z-[1]'>{name}</p>
                <p className='uppercase ff-betatron text-nowrap text-stroke-red absolute z-0 left-1 top-3'>{name}</p>
                <div className='relative'>
                <sub className='relative -top-5  text-base'>[0{idx}]</sub>
                </div>
          </div>
        </a>
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
          {tech.map((item, idx)=>(
              <MatterBody
              key={idx}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x= {String((idx+4) * 10)+'%'}
                // y= {String((idx+1) * 10)+'%'}
                y="10%"
              >
                <div className=" font-extralight text-xs uppercase bg-transparent border border-[#FBFAF3] rounded-full hover:cursor-pointer px-3 py-1">
                  {item}
                </div>
              </MatterBody>

          ))}
        </Gravity>
      </figure>
    </motion.aside>
  )
}