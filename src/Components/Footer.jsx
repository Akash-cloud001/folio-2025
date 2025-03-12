import React from 'react'

const Footer = () => {
  return (
    <section className='h-auto min-h-[100dvh] w-full px-5 md:px-8 flex flex-col md:flex-row items-center justify-between padding-top-nav overflow-hidden mb-10'>
        <article className='h-3/4 w-full flex flex-col items-center lg:items-start justify-between'>
            <p className='ff-betatron text-[44px] lg:leading-[72px] lg:text-[64px] uppercase text-center md:text-left'>
                am <span  className='text-stroke'>glad</span> that <span className='text-stroke'>you</span> <br /> came this far <br /> thank you
            </p>
            <ul className='hidden md:flex items-center justify-center gap-3 lg:gap-6'>
                <li><a href="#" target='_blank'><img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/email.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/X.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/linkedIn.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-10 lg:h-12 w-10 lg:w-12' src="/images/github.png" alt="social link" /></a></li>
            </ul>
        </article>
        <article className='max-w-96 aspect-square w-full  md:w-1/2 mt-12 md:mt-0'>
            <div class="relative fatfck">
            <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            <span>
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            </span>
            </div>
        </article>
        <ul className='flex md:hidden items-center justify-center gap-4 mt-12'>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/email.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/X.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/linkedIn.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-8 w-8' src="/images/github.png" alt="social link" /></a></li>
            </ul>
    </section>
  )
}

export default Footer