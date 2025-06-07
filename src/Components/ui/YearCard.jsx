import React from 'react'

const YearCard = ({year, content, imgUrl, className, scale=1, }) => {
  return (
    <article style={{transform: `scale(${scale})`}} className={`${className} max-w-[360px] max-h-[275px] !w-full !h-[275px] flex items-start pt-6 justify-center border border-white/20 overflow-hidden custom-drop-shadow bg-black`}>
        <ul className='list-none relative max-w-[320px] z-[1]'>
            {content.map((item, index) => (
                <li key={index} className='text-white/80 text-base mb-2 relative pl-5'>
                    <img 
                        src={'/images/square.png'}
                        alt="square" 
                        className='absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3'
                    />
                    <span 
                        dangerouslySetInnerHTML={{ __html: item }}
                        className='[&_a]:text-primary [&_a] [&_a]:hover:text-primary [&_a]:transition-colors [&_a]:duration-200'
                    />
                </li>
            ))}
        </ul>

        <div className='absolute right-4 bottom-2 ff-betatron text-[44px]'>
            <p className='absolute -top-1 left-1 text-stroke z-0'>
                {year}
            </p>
            <p className='relative top-0 left-0 z-[1]'>
                {year}
            </p>
        </div>

        <img src={imgUrl} alt="card-images" className='absolute -left-10 -bottom-10 w-[200px] h-auto aspect-square opacity-10' />
    </article>
  )
}

export default YearCard