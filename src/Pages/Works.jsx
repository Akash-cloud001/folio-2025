import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ui/ProjectCard';
const Works = () => {
    const [work, setWork] = useState([]);
    useEffect(() => {
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
    <main className='padding-top-nav max-w-container mx-auto px-5 sm:px-8 '>
        {
            work.length <= 0 ?
            <div>
                Loading...
            </div>
            :
            // <section className='grid grid-cols-12 place-items-start place-content-center gap-y-8'>
            <section>
                <div className='relative text-4xl md:text-[64px] w-max h-fit mx-auto mb-8 md:mb-12'>
                    <p className='uppercase ff-betatron  z-[1]'>MY WORK</p>
                    <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>MY WORK</p>
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