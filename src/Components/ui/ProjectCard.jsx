import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'motion/react'
import { Gravity, MatterBody } from "../ui/gravity";
import { Link } from 'react-router-dom';
import { Magnetic } from '../ui/magnetic';

const ProjectCard = ({name, url, tech, idx, className, imgUrl, desc})=>{
  
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
      <motion.aside ref={ref} initial='initial' animate={isInView ? 'animate' : 'exit'} exit='exit' variants={projectCardVariant} className={`p-4 ${className} overflow-hidden block group`}>
        <figure className='project-card p-[10px] w-[320px] h-[400px] border back-900 border-[rgba(251,250,243,0.2)] relative '>
          <img src="/images/cross.png" alt="" className='absolute -top-[5px] -left-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -top-[5px] -right-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -left-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -right-[5px]' /> 
                    <div className='absolute -top-2 -right-2 flex items-center gap-2'>
            {/* <div className='w-1 h-8 bg-primary rounded-full'></div> */}
            <div className='relative'>
              <div className='w-8 h-8 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center shadow-2xl'>
                <span className='text-base text-primary ff-betatron font-bold'>0{idx}</span>
              </div>
              <div className='absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse'></div>
            </div>
          </div>

          <img src={imgUrl} alt="pro-image" className='w-full h-[160px] object-cover object-top'/>
          <a target='_blank' href={url} className='bg-transparent  w-full z-20 project-name'>
            <div className='relative text-3xl w-max h-fit pt-4 flex items-center gap-2 text-primary z-50 '>
                  {/* <p className='uppercase font-bold ff-betatron  z-[1]'>{name}</p> */}
                  <p className='uppercase ff-betatron text-nowrap text-stroke-red  z-0  project-shadow-text transition-all duration-200 text-3xl'>{name}</p>
                  {/* <p className='uppercase ff-betatron text-nowrap text-stroke-red absolute z-0  project-shadow-text transition-all duration-200'>{name}</p> */}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className='text-primary'
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
            </div>
          </a>
          <p className='text-sm text-white/80 mt-1'>
            {desc}
          </p>
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

  export default ProjectCard