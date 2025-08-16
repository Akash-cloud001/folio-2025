import React, { useRef, useEffect, useState } from 'react'
import {motion, useInView, useScroll, useTransform} from 'motion/react'
import { Gravity, MatterBody } from "../ui/gravity";
import { Link } from 'react-router-dom';
import { Magnetic } from '../ui/magnetic';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const ref = useRef();
  // Fetch projects data
  useEffect(() => {
            const fetchData = async () => {
          try {
            setIsLoading(true);
            const res = await fetch('/projects.json?v=' + Date.now());
            const data = await res.json();
            if (data) {
              console.log('Fetched projects data:', data?.works);
              const firstThreeProjects = data?.works?.slice(0, 3);
              console.log('First 3 projects:', firstThreeProjects);
              setProjects(firstThreeProjects); // Only show first 3 projects
            }
          } catch (error) {
            console.error('Error in fetching data :: ', error);
            setError('Failed to load projects');
          } finally {
            setIsLoading(false);
          }
        };
    fetchData();
  }, []);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (isLoading) {
    return (
      <section id='work' className='h-auto w-full md:padding-top-nav px-5 sm:px-8 max-w-container'>
        <div className='flex items-center justify-center py-20'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className='w-12 h-12 border-2 border-primary border-t-transparent rounded-full'
          />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id='work' className='h-auto w-full md:padding-top-nav px-5 sm:px-8 max-w-container'>
        <div className='text-center py-20'>
          <p className='text-xl text-white/50 ff-gs-medium mb-4'>
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className='text-primary hover:text-white transition-colors ff-gs-medium'
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
      <section id='work' className='h-auto w-full md:padding-top-nav px-5 sm:px-8 max-w-container'>
      <section ref={ref} className='h-[300vh] w-full project-container relative ' >
        <section className='project-main-frame h-[100vh] w-full sticky top-0 overflow-hidden flex items-center justify-center'>
          <div className='w-max'>
            <div className='relative text-[64px] w-max h-fit'>
              <p className='uppercase ff-betatron  z-[1]'>MY WORK</p>
              <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>MY WORK</p>
            </div>
          </div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-20 w-20 h-20 border border-violet-500/20 rotate-45"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="absolute bottom-32 left-40 w-12 h-12 border-2 border-amber-400/20 rounded-full"
      />

        </section>
        
        {projects.length > 0 && (
          <>
            <ProjectCard 
              name={projects[0]?.name} 
              desc={projects[0]?.smallDesc} 
              url={projects[0]?.url} 
              imgUrl={projects[0]?.imgUrl} 
              tech={projects[0]?.tech} 
              idx={1} 
              className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-4 w-max'}
            />
            {projects[1] && (
              <ProjectCard 
                name={projects[1]?.name} 
                desc={projects[1]?.smallDesc} 
                url={projects[1]?.url} 
                imgUrl={projects[1]?.imgUrl} 
                tech={projects[1]?.tech} 
                idx={2} 
                className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-10 w-max'}
              />
            )}
            {projects[2] && (
              <ProjectCard 
                name={projects[2]?.name} 
                desc={projects[2]?.smallDesc} 
                url={projects[2]?.url} 
                imgUrl={projects[2]?.imgUrl} 
                tech={projects[2]?.tech} 
                idx={3} 
                className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-10 w-max'}
              />
            )}
          </>
        )}

      </section>
        
        <Magnetic>
          <Link to={'/my-works'} className={'mx-auto mt-8 border px-6 py-3 border-white/40 text-white/80 w-max hidden sm:block hover:bg-white/10 transition-all duration-300' }>
            View More
          </Link>
        </Magnetic>
        <Link  to={'/my-works'}className={'mx-auto mt-8 border px-6 py-3 border-white/40 text-white/80 w-max block sm:hidden' }>
            View More
        </Link>
    </section>
  )
}

export default Projects


// const ProjectCard = ({name, url, tech, idx, className, imgUrl})=>{
  
//   const ref = useRef();
//   const  isInView = useInView(ref, {
//     margin: '-10%',
//     once: true
//   });
//   const projectCardVariant = {
//     initial: {
//       opacity: 0.75,
//       filter:'blur(20px)',
//       scale: 0.8
//     },
//     animate: {
//       opacity: 1,
//       filter:'blur(0)',
//       scale: 1,
//       transition:{
//         duration: 0.5,
//         // ease: 'ease'
//       }
//     },
//     exit: {
//       opacity: 0.75,
//       filter:'blur(20px)',
//       scale: 0.8
//     }
//   }
//   return(
//     <motion.aside ref={ref} initial='initial' animate={isInView ? 'animate' : 'exit'} exit='exit' variants={projectCardVariant} className={`p-4 ${className} overflow-hidden block`}>
//       <figure className='project-card p-[10px] w-[320px] h-[400px] border back-900 border-[rgba(251,250,243,0.2)] relative '>
//         <img src="/images/cross.png" alt="" className='absolute -top-[5px] -left-[5px]' /> 
//         <img src="/images/cross.png" alt="" className='absolute -top-[5px] -right-[5px]' /> 
//         <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -left-[5px]' /> 
//         <img src="/images/cross.png" alt="" className='absolute -bottom-[5px] -right-[5px]' /> 
//         <img src={imgUrl} alt="pro-image" className='w-full h-[160px] object-cover object-top'/>
//         <a target='_blank' href={url} className='bg-transparent  w-full z-20 project-name'>
//           <div className='relative text-4xl w-max h-fit mx-auto pt-4 flex gap-1 text-primary z-50 '>
//                 <p className='uppercase ff-betatron  z-[1]'>{name}</p>
//                 <p className='uppercase ff-betatron text-nowrap text-stroke-red absolute z-0  project-shadow-text transition-all duration-200'>{name}</p>
//                 <div className='relative'>
//                 <sub className='relative -top-5  text-base'>[0{idx}]</sub>
//                 </div>
//           </div>
//         </a>
//         <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
//           {tech.map((item, idx)=>(
//               <MatterBody
//               key={idx}
//                 matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
//                 x= {String((idx+4) * 10)+'%'}
//                 // y= {String((idx+1) * 10)+'%'}
//                 y="10%"
//               >
//                 <div className=" font-extralight text-xs uppercase bg-transparent border border-[#FBFAF3] rounded-full hover:cursor-pointer px-3 py-1">
//                   {item}
//                 </div>
//               </MatterBody>

//           ))}
//         </Gravity>
//       </figure>
//     </motion.aside>
//   )
// }