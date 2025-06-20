import React from 'react'
import InfiniteMenu from '../InfiniteMenu/InfiniteMenu'
import Heading from '../ui/Heading'
const Skills = () => {
  return (
    <section id='skills' className='skills-container pt-24 md:pt-20 h-[100dvh-96px] sm:h-screen w-full  max-w-container'> 
        <Heading name='skills' />
      <div style={{ position: 'relative', }} className='mx-auto w-[90%] sm:w-[95%]  rounded-2xl overflow-hidden h-[75vh] '>
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
    image: '/images/next.jpg',
    title: 'NEXT JS',
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