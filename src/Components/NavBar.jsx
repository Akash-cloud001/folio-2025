import React, { useEffect } from 'react'
import AkashLogo from './svgs/AkashLogo'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const scrollToSection = (sectionId, offset = 100) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -50; // how much space you want from the top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      name: 'About',
      href: 'about',
      isRoute: false
    },
    {
      name: 'My Work',
      href: 'work',
      isRoute: false
    },
    {
      name: 'Skills',
      href: 'skills',
      isRoute: false
    },
    {
      name:'Blogs',
      href: '/blogs',
      isRoute: true
    }
  ]
  return (
    <nav className='navbar-container fixed top-0 left-0 w-full z-50 h-28'>
        <div className='w-full h-full flex items-center justify-between px-4 sm:px-6  relative z-10'>
          <Link to={'/'} className='w-20 h-auto flex items-center justify-center'>
            <AkashLogo className='w-full h-full'/>
          </Link>
          <ul className='flex items-center justify-center gap-4 sm:gap-8 ff-betatron text-sm leading-relaxed'>
            {navItems.map((item, index)=>{
              return(
                <li key={index} className='relative hover:text-primary transition-all duration-300 scale-100 hover:scale-105 uppercase'>
                  {item.isRoute ? (
                    <Link to={item.href}>{item.name}</Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="focus:outline-none uppercase"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
    </nav>
  )
}

export default NavBar