import React from 'react'
import LearnCard from './LearnCard'
import TeachCard from './TeachCard'
import { CardHeader } from './CardHeader'

const SkillsList = () => {
  return (
    <div className='flex gap-8'>
        <div className='p-7.5 border border-border-color rounded-[20px] flex-1'>
            <CardHeader title='Skills I Teach' btnText='Add Skills' />
            <div className='mt-8 space-y-4'>
                <TeachCard chang="Export" />
                <TeachCard chang="Advanced" />
                <TeachCard chang="Advanced" />
            </div>
        </div>
        <div className='p-7.5 border border-border-color rounded-[20px] flex-1'>
            <CardHeader title='Skills I’m Learning' btnText='Add Goal' />
            <div className='mt-8 space-y-4'>
                <LearnCard prct='40' title='Machine Learning' />
                <LearnCard prct='60' title='Social Media Marketing' />
                <LearnCard prct='90' title='Data Science' />
            </div>
        </div>
    </div>
  )
}

export default SkillsList