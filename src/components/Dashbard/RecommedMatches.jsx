import React from 'react'
import MatchesSearchBar from './MatchesSearchBar'
import AiMatchScore from '../../common/ui/AiMatchScore'
import frame from '../../assets/frame.png'
import Statslist from './StatList'
const RecommedMatches = () => {
  return (
    <div>
        <div className='flex gap-2 items-center my-8'>
            <img src={frame} alt="" className='w-7.5 h-7.5'/>
            <h1 className='text-2xl font-semibold leading-[100%]'>AI Recommended Matches</h1>
        </div>
        <MatchesSearchBar />
        <AiMatchScore />
        <Statslist />
    </div>
  )
}

export default RecommedMatches