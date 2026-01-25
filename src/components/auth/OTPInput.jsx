import { useState, useRef, useEffect } from "react"

const OTPInput = ({ length = 4}) => {
  const [otp, setOpt] = useState(new Array(length).fill(''))
  const inputRefs = useRef([])
  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])
  // let  [value, setValue] = useState('')
  
  // if(otp.every((e) => e !== '')){
  //     onComplete(otp)
  //   }
  

  function handleOnChange(e, idx) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp]
    newOtp[idx] = value
    setOpt(newOtp)

    if(value && idx < (otp.length - 1)){
      inputRefs.current[idx + 1].focus()
    }
  }

  function onKeyDownHandel(e, idx) {
    // console.log(e.key)
    if(e.key == 'Backspace'){
      if(idx > 0 && idx < 6 && otp[otp.length - 1] ==''){ 
          
          inputRefs.current[idx - 1].focus()    
      }
    }
  }
  return (
    <div className="flex gap-2 my-16 justify-center">
      {
        otp.map((inputVal, idx) => {
          return <div key={idx} className={` w-18 h-21.5 flex justify-center items-center  ${inputVal? 'border border-line-gray p-2' : 'border-b-2'}`}>
            <input 
            type="text"  
            className={`w-6 h-13.5 text-center focus:outline-none text-2xl `} 
            value={inputVal}
            maxLength={1} 
            onChange={(e) => handleOnChange(e, idx)}
            onKeyDown={(e) => onKeyDownHandel(e, idx)}
            ref={(el) => inputRefs.current[idx] = el }
            />
          </div>
        })
      }
    </div>
  )
}

export default OTPInput
