import React, { useState } from 'react'
import Logo from '../../common/ui/Logo'
import { Menu } from 'lucide-react'

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="fixed top-0 left-0 z-30 h-16 w-full flex mb-25 items-center justify-between px-5
      bg-white border-b border-border-color md:hidden">

      <Logo />

      <Menu
        size={28}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar