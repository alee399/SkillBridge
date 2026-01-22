import React, { useState } from 'react'
import Button from '../../../common/LandingPage/Button';
import Logo from '../../../common/LandingPage/Logo';
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
          <ul className='text-[20px] flex gap-8 font-josefin'>
            <a href="#feature">Feature</a>
            <a href="#how-it-works">How It Works</a>
          </ul>
        </div>
        <div className='flex gap-2 max-md:hidden'>
          <Button className={"border-[#D0D0D0] text-[#111111]"}>Sign In</Button>
          <Button className={"bg-[#2A9D90] text-white border-[#2A9D90]"}>Get Started</Button>
        </div>
        <div className='relative md:hidden'>
          <MenuIcon open={showDrop} setShowDrop={setShowDrop} />
          <div className='absolute w-48 bg-linear-to-r rounded-lg from-[#1B2847] to-[#2B3A5C] p-2 right-1 -bottom-30 ' style={{display: showDrop ? 'block' : 'none'}}>
            <ul className='text-[20px] text-white  flex flex-col gap-2 font-josefin'>
              <a href="#feature" className='hover:bg-[#2A9D90] px-1 py-2 rounded-md transition duration-100'>Feature</a>
              <a href="#how-it-works" className='hover:bg-[#2A9D90] px-1 py-2 rounded-md transition duration-100'>How It Works</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar