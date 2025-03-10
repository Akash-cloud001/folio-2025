import React from 'react'

const Footer = () => {
  return (
    <section className='h-[100dvh] w-full px-5 md:px-8 flex flex-col md:flex-row items-center justify-between padding-top-nav'>
        <article className='h-3/4 w-full flex flex-col items-start justify-between'>
            <p className='ff-betatron leading-[72px] text-[64px] uppercase'>
                am <span  className='text-stroke'>glad</span> that <span className='text-stroke'>you</span> <br /> came this far <br /> thank you
            </p>
            <ul className='flex items-center justify-center gap-6'>
                <li><a href="#" target='_blank'><img className='h-12 w-12' src="/images/email.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-12 w-12' src="/images/X.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-12 w-12' src="/images/linkedIn.png" alt="social link" /></a></li>
                <li><a href="#" target='_blank'><img className='h-12 w-12' src="/images/github.png" alt="social link" /></a></li>
            </ul>
        </article>
        <article className='w-1/2'>
            <div class="relative fatfck">
            <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            <span>
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
                <img className='h-full w-full' src="svgs/footer.svg" alt="heart img" />
            </span>
            </div>
        </article>
    </section>
  )
}

export default Footer