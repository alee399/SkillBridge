import React from 'react'

const Button = ({children, className} ) => {
  return (
    <div>
        <button className={`font-bold max-sm:text-sm px-4 py-2 sm:py-3 sm:px-6 border rounded-[10px] font-josefin cursor-pointer ${className}`}>{children}</button>
    </div>
  )
}

export default Button