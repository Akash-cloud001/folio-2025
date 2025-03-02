import React from 'react'

const Heading = ({name='new heading'}) => {
  return (
    <div className='flex items-center justify-start gap-3 pb-9 pl-4 md:pl-10 uppercase'>
          <div className='flex items-center justify-center gap-1'>
            <span className='h-1 w-1 rounded-full bg-white '></span>
            <span className='h-1 w-1 rounded-full bg-white '></span>
          </div>
          <p>
            [ {name} ]
          </p>
    </div>
  )
}

export default Heading