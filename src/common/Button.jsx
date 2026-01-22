import React from 'react'

const Button = ({children, className} ) => {
  return (
    <div>
        <button className={`font-bold py-3 px-6 border rounded-[10px] font-josefin cursor-pointer ${className}`}>{children}</button>
    </div>
  )
}

export default Button