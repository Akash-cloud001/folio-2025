import React from 'react'
import InfiniteMenu from '../InfiniteMenu/InfiniteMenu'
const Skills = () => {
  return (
    <section className='skills-container h-dvh w-full padding-top-nav'> 
        <div className='flex items-center justify-start gap-3 pb-9 pl-4 md:pl-10'>
          <div className='flex items-center justify-center gap-1'>
            <span className='h-1 w-1 rounded-full bg-white '></span>
            <span className='h-1 w-1 rounded-full bg-white '></span>
          </div>
          <p>
            [ SKILLS ]
          </p>
      </div>
      <div style={{ position: 'relative', }} className='mx-auto w-[90%] sm:w-[95%]  rounded-2xl overflow-hidden h-[80vh] '>
        <InfiniteMenu items={items} />
      </div>
    </section>
  )
}

export default Skills

const items = [
  {
    image: '/images/vscode.jpg',
    title: 'VSCODE',
  },
  {
    image: '/images/html(1).jpg',
    title: 'HTML',
  },
  {
    image: '/images/figma.jpg',
    title: 'FIGMA',
  },
  {
    image: '/images/react.jpg',
    title: 'REACT',
  },
  {
    image: '/images/vue.jpg',
    title: 'VUE',
  },
  {
    image: '/images/js.jpg',
    title: 'JAVA SCRIPT',
  },
  {
    image: '/images/tailwind.jpg',
    title: 'TAILWIND',
  },
  {
    image: '/images/git.jpg',
    title: 'GITHUB',
  },
  {
    image: '/images/bootstrap.jpg',
    title: 'BOOTSTRAP',
  },
  {
    image: '/images/redux.jpg',
    title: 'REDUX TOOLKIT',
  },

];