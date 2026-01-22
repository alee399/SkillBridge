import React from 'react'
import Button from '../common/Button';
import Logo from '../common/Logo';

const Navbar = () => {
  return (
    <div>
      <nav className='max-w-285 justify-between mx-auto flex items-center py-3 max-xl:px-4'>
        <div>
          <Logo />
        </div>
        <div className='max-md:hidden'>
          <ul className='text-[20px] flex gap-8 font-josefin'>
            <a href="#">Feature</a>
            <a href="#">How It Works</a>
          </ul>
        </div>
        <div className='flex gap-2'>
          <Button className={"border-[#D0D0D0] text-[#111111]"}>Sign In</Button>
          <Button className={"bg-[#2A9D90] text-white border-[#2A9D90]"}>Get Started</Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar