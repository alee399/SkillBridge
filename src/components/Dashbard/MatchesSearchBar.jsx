import React from 'react'
import { Search } from 'lucide-react'

const MatchesSearchBar = () => {
  return (
    <div className='flex gap-3 lg:gap-6.25'>
      <div className='flex items-center gap-4 border border-border-color p-3 lg:p-5 rounded-md flex-1'>
        <Search size={30} strokeWidth={1} />
        <input type="text" placeholder='Search by Skills or Name...' className='max-md:text-sm font-medium text-text-gray focus:outline-none'/>
      </div>
        <button className='text-sm lg:text-xl font-bold text-text-gray rounded-md border border-border-color py-3 lg:py-5.5 px-4'>
          Highly Rated
        </button>
    </div>
  )
}

export default MatchesSearchBar