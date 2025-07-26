import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ui/ProjectCard';
import { motion } from 'framer-motion';
const Works = () => {
    const [work, setWork] = useState([]);
    
    const featureCards = [
        {
            id: 1,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-primary'>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Full-Stack Development",
            description: "End-to-end solutions with modern frameworks and databases"
        },
        {
            id: 2,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-primary'>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            title: "Interactive 3D",
            description: "Immersive experiences with Three.js and React Three Fiber"
        },
        {
            id: 3,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-primary'>
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Performance Optimized",
            description: "Lightning-fast applications with modern optimization techniques"
        }
    ];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          console.log('Attempted to scroll to top');
        const fetchData = async()=>{
            try {
                const res = await fetch('/projects.json')
                const data = await res.json();
                if(data){
                    setWork(data?.works)
                }
            } catch (error) {
                console.error('Error in fetching data :: ', error)
            }
        }
        fetchData()
    },[])
  return (
    <main className='padding-top-nav max-w-container mx-auto px-3 sm:px-8 '>
        {
            work.length <= 0 ?
            <div>
                Loading...
            </div>
            :
            // <section className='grid grid-cols-12 place-items-start place-content-center gap-y-8'>
            <section>
                <div className='relative text-4xl md:text-[64px] w-max h-fit mx-auto mb-12 md:mb-16'>
                    <p className='uppercase ff-betatron  z-[1]'>MY WORK</p>
                    <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>MY WORK</p>
                </div>
                
                {/* Additional Content Section */}
                <div className='max-w-4xl mx-auto text-center mb-16 md:mb-20'>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className='text-lg md:text-xl text-white/70 mb-8 md:mb-12 ff-gs-regular leading-relaxed text-balance'
                    >
                        A handpicked set of projects that reflect my skills in modern web development — from interactive 3D experiences to full-stack apps. Each one tells a story of solving real challenges creatively.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className='flex items-center justify-center flex-wrap gap-6 md:gap-8'
                    >
                        {featureCards.map((card, index) => (
                            <motion.div 
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (index * 0.1), duration: 0.8 }}
                                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 w-[300px] sm:w-[320px]'
                            >
                                <div className='w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                                    {card.icon}
                                </div>
                                <h3 className='text-lg ff-gs-medium text-white '>{card.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <section className='flex flex-row flex-wrap items-start justify-center gap-4 md:gap-8'>      
                    {work.map((w,idx)=>{
                        return(
                            // <ProjectCard key={w?.id} name={w?.name} url={w?.url} imgUrl={w?.imgUrl} tech={w?.tech} idx={idx+1} className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'/>
                            <ProjectCard key={w?.id} name={w?.name} desc={w?.smallDesc} url={w?.url} imgUrl={w?.imgUrl} tech={w?.tech} idx={idx+1} />
                        )
                    })}
                </section>
            </section>
        }
    </main>
  )
}

export default Works