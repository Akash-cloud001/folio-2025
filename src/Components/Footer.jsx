import React from 'react'
import { Magnetic } from './ui/magnetic';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='h-[70dvh] w-full px-5 md:px-8 flex flex-col md:flex-row items-center justify-between padding-top-nav mb-10' style={{marginTop:'8rem'}}>
        <article className='h-full w-full flex flex-col items-center md:items-start justify-between'>
            <p className='ff-betatron text-3xl sm:text-[44px] sm:leading-[44px] lg:leading-[72px] lg:text-[64px] uppercase text-center md:text-left'>
                am <span  className='text-stroke'>glad</span> that <span className='text-stroke'>you</span> <br /> came this far <br /> thank you
            </p>
            <ul className='hidden md:flex items-center justify-center gap-3 lg:gap-6'>
                <li>
                    <Magnetic>
                        <a href="https://x.com/AkashParmarDev" target='_blank'>
                            <img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/X.png" alt="social link" />
                        </a>
                    </Magnetic>
                </li>
                <li>
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/akash-parmar-/" target='_blank'>
                            <img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/linkedIn.png" alt="social link" />
                        </a>
                    </Magnetic>
                </li>
                <li>
                    <Magnetic>
                        <a href="https://github.com/Akash-cloud001" target='_blank'>
                            <img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/github.png" alt="social link" />
                        </a>
                    </Magnetic>
                </li>
                
            </ul>
        </article>
        <article className='max-w-72 sm:max-w-96 md:max-w-screen-sm aspect-square w-full  md:w-1/2 mt-12 md:mt-0'>
            <div className="relative fatfck">
            <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            <span>
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            </span>
            </div>
        </article>
        <ul className='flex md:hidden items-center justify-center gap-4 mt-12 pb-10'>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/X.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/linkedIn.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/github.png" alt="social link" /></a></li>
            </ul>
    </section>
  )
}

export default Footer