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
      <motion.aside ref={ref} initial='initial' animate={isInView ? 'animate' : 'exit'} exit='exit' variants={projectCardVariant} className={`p-4 ${className} overflow-hidden block`}>
        <figure className='project-card p-[10px] w-[320px] h-[400px] border back-900 border-[rgba(251,250,243,0.2)] relative '>
          <img src="/images/cross.png" alt="" className='absolute -top-[5px] -left-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -top-[5px] -right-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -left-[5px]' /> 
          <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -right-[5px]' /> 
          <img src={imgUrl} alt="pro-image" className='w-full h-[160px] object-cover object-top'/>
          <a target='_blank' href={url} className='bg-transparent  w-full z-20 project-name'>
            <div className='relative text-3xl w-max h-fit pt-4 flex gap-1 text-primary z-50 '>
                  <p className='uppercase ff-betatron  z-[1]'>{name}</p>
                  <p className='uppercase ff-betatron text-nowrap text-stroke-red absolute z-0  project-shadow-text transition-all duration-200'>{name}</p>
                  <div className='relative'>
                  <sub className='relative -top-5  text-base'>[0{idx}]</sub>
                  </div>
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