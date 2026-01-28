import React, { useState } from 'react'
import Button from '../../../common/ui/Button';
import Logo from '../../../common/ui/Logo';
import { Menu, X } from 'lucide-react';
import MenuIcon from './MenuButton';

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  setTimeout(() => {
    setShowDrop(false);
  }, 3000);
  return (
    <div>
      <nav className='max-w-285  mx-auto flex justify-between items-center py-3 max-xl:px-8'>
        <div>
          <Logo />
        </div>
        <div className='max-md:hidden'>
          <ul className='text-[20px] flex gap-8 font-secondary'>
            <a href="#feature">Feature</a>
            <a href="#how-it-works">How It Works</a>
          </ul>
        </div>
        <div className='flex gap-2 max-md:hidden'>
          <Button variant='outline'>Sign In</Button>
          <Button>Get Started</Button>
        </div>
        <div className='relative md:hidden'>
          <MenuIcon open={showDrop} setShowDrop={setShowDrop} />
          <div className='absolute w-48 bg-linear-to-r rounded-lg from-primary-from to-primary-to p-2 right-1 -bottom-30 ' style={{display: showDrop ? 'block' : 'none'}}>
            <ul className='text-[20px] text-white  flex flex-col gap-2 font-josefin'>
              <a href="#feature" className='hover:bg-primary px-1 py-2 rounded-md transition duration-100'>Feature</a>
              <a href="#how-it-works" className='hover:bg-primary px-1 py-2 rounded-md transition duration-100'>How It Works</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar