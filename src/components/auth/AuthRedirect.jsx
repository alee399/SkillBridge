import React from 'react'

const AuthRedirect = ({variant = 'login'}) => {
  return (
    <div className='text-center'>
        {
            (variant == 'signup' || variant == 'login')
            ? <h6 className='text-text-gray leading-6.25 tracking-[0.5%]'>
                Don't have an account?
                <span className='underline underline-offset-2 pl-1 text-primary'>
                    <a href="#" className='font-semibold text-primary'>
                        {variant == 'login' ? "Register" : 'Login'}
                    </a>
                </span> 
              </h6>
            :
            <h6 className='text-text-gray leading-6.25 inline-block text-left tracking-[0.5%]'>
                It may take a minute to receive your code.<br/>
                Haven’t received it?  
                <a className='font-semibold text-primary'>
                    Resend a new code
                </a>.
            </h6>
        }
    </div>
  )
}

export default AuthRedirect