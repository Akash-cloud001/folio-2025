import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'motion/react'
import { Gravity, MatterBody } from "../ui/gravity";
import { Link } from 'react-router-dom';
import { Magnetic } from '../ui/magnetic';
import ProjectCard from '../ui/ProjectCard';
const projectsData=[
  {
    "id": "prodigy-football",
    "name": "Prodigy",
    "url": "https://prodigyfootball.com.au/",
    "imgUrl": "/images/projects/pro-4.png",
    "tech": ["React", "TailwindCSS", "Motion", "Node.js", "Stripe", "Context API"],
    "desc": "A professional football coaching platform that bridges the gap between grassroots and elite level training. The website features dynamic booking systems for private sessions, team coaching programs, and high-performance academies. Built with modern web technologies to provide seamless user experience for players, coaches, and clubs across Australia. Includes real-time scheduling, payment processing, progress tracking, and interactive training modules designed to develop well-rounded and intelligent community footballers through specialized coaching methodologies.",
    "smallDesc": "Football coaching platform with bookings, payments, and training modules for all levels."
  },
  {
    "id": "walkbuy-platform",
    "name": "WalkBuy",
    "url": "https://walkbuyapp.com/",
    "imgUrl": "/images/projects/pro-5.png",
    "tech": ["React", "Node.js", "Context API", "TailwindCSS"],
    "desc": "A revolutionary local shopping platform that bridges the gap between traditional street shops and modern digital commerce. WalkBuy enables customers to discover, browse, and preview products from nearby local businesses through an intuitive mobile app, while providing shop owners with WalkShop - a simple showcase management system. The platform promotes local economy by allowing users to search for shops, products, and offers in their vicinity, preview items digitally, then visit the physical store for personal consultation, fitting, and purchase. Features real-time inventory updates, location-based discovery, merchant dashboard, customer reviews, and seamless integration between online browsing and offline shopping experience.",
    "smallDesc": "Discover and shop local products digitally. Bridging offline stores with online visibility."
  },
  {
    "id": "akash-portfolio",
    "name": "Akash Folio",
    "url": "https://akash-codes.in",
    "imgUrl": "/images/projects/pro-3.jpeg",
    "tech": ["react", "threeJs", "r3f", "drei", "tailwind", "aceternity-ui", "react-bits", "lenis"],
    "desc": "This portfolio website is a visually stunning and interactive showcase built using React, Three.js, React Three Fiber (R3F), Drei, Aceternity UI, and React Bit for seamless 3D component integration. It features dynamic 3D elements, smooth animations, and an intuitive UI, offering an immersive experience. The site highlights my projects, skills, and achievements in a modern and engaging way.",
    "smallDesc": "3D portfolio site with immersive visuals and smooth animations. Built using R3F & Drei."
  }
]
const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref
  })
  const y = useTransform(scrollYProgress, [0, 0.8], ['0%', '-100%']);
  const top = useTransform(scrollYProgress, [0, 0.9], ['100%', '-200%']);
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
        <ProjectCard name={projectsData[2].name} desc={projectsData[2]?.smallDesc} url={projectsData[2].url} imgUrl={projectsData[2].imgUrl} tech={projectsData[2].tech} idx={1} className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-4 w-max'}/>
        <ProjectCard name={projectsData[1].name} desc={projectsData[1]?.smallDesc} url={projectsData[1].url} imgUrl={projectsData[1].imgUrl} tech={projectsData[1].tech} idx={2} className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-10 w-max'}/>
        <ProjectCard name={projectsData[0].name} desc={projectsData[0]?.smallDesc} url={projectsData[0].url} imgUrl={projectsData[0].imgUrl} tech={projectsData[0].tech} idx={3} className={'sticky top-[25%] left-[calc(50%-180px)] -translate-x-1/2 mt-10 w-max'}/>

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