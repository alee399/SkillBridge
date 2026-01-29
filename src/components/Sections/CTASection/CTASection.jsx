import React from 'react'
import SectionTitle from '../SectionTitle'
import Button from '../../../common/ui/Button'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()
  return (
      <div className='max-w-247 flex flex-col items-center my-20 mx-auto max text-white lg:rounded-[20px] p-12.5 bg-linear-to-r from-[#1B2847] to-[#2B3A5C]'>
        <SectionTitle title={"Ready to Start Your Journey?"} description={"Join SkillBridge today and connect with global community of learners and mentors."}/>
<<<<<<< HEAD
        <Button 
          className={"bg-primary text-white border-primary mt-14"}
          onClick={() => {
            navigate('/signup')
          }}
        >
          Create Free Account
=======
        <Button
          onClick={() => {
            navigate('/signup')
          }} 
          className={"bg-primary text-white border-primary mt-14"}
        >
            Create Free Account
>>>>>>> c49d43c4e0ceada36a8d3de01676f00b29ac214f
        </Button>
      </div>
  )
}

export default CTASection