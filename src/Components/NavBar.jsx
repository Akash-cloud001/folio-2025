import React from 'react'
import AkashLogo from './svgs/AkashLogo'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navItems = [
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'My Work',
      href: '/work'
    },
    {
      name: 'Skills',
      href: '/skills'
    },
    {
      name:'Blogs',
      href: '/blogs'
    }
  ]
  return (
    <nav className='navbar-container fixed top-0 left-0 w-full z-50 h-28'>
        <div className='w-full h-full flex items-center justify-between px-4 sm:px-6  relative z-10'>
          <figure className='w-20 h-auto flex items-center justify-center'>
            <AkashLogo className='w-full h-full'/>
          </figure>
          <ul className='flex items-center justify-center gap-8 ff-betatron text-sm uppercase leading-relaxed'>
            {navItems.map((item, index)=>{
              return(
                <li key={index} className='relative hover:text-primary transition-all duration-300 scale-100 hover:scale-105'>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
    </nav>
  )
}

export default NavBar