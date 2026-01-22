import React from 'react'
import SectionTitle from '../SectionTitle'
import frame1 from '../../../assets/frames/frame1.png'
import frame2 from '../../../assets/frames/frame2.png'
import frame3 from '../../../assets/frames/frame3.png'
import frame4 from '../../../assets/frames/frame4.png'
import HowItsWorkCard from './HowItsWorkCard'

const HowitsWork = () => {
  return (
    <div>
      <div>
        <SectionTitle title="How SkillBridge Works" description="Four simple steps to start your skill exchange journey." />
      </div>
      <div className='max-w-207.5 mx-auto mt-20'>
        <HowItsWorkCard frame={frame1} title="Create Your Profile" description="Sign up and list the skills you can teach and want to learn. Add certifications and set your availability." idx={1} />
        <HowItsWorkCard frame={frame2} title="Get Matched by AI" description="Browse profiles of other users and connect with those whose skills match yours." idx={2} />
        <HowItsWorkCard frame={frame3} title="Start Learning" description="Schedule sessions, connect via chat or video, and exchange knowledge using our credit-based system." idx={3} />
        <HowItsWorkCard className={"-mt-3.75"} frame={frame4} title="Rate & Grow" description="Leave feedback, and build your reputation as both a learner and mentor." idx={4} />
      </div>
    </div>
  )
}

export default HowitsWork