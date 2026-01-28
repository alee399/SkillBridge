import React from 'react'
import SectionTitle from '../SectionTitle'
import Button from '../../../common/ui/Button'

const CTASection = () => {
  return (
      <div className='max-w-247 flex flex-col items-center my-20 mx-auto max text-white lg:rounded-[20px] p-12.5 bg-linear-to-r from-[#1B2847] to-[#2B3A5C]'>
        <SectionTitle title={"Ready to Start Your Journey?"} description={"Join SkillBridge today and connect with global community of learners and mentors."}/>
        <Button className={"bg-primary text-white border-primary mt-14"}>Create Free Account</Button>
      </div>
  )
}

export default CTASection