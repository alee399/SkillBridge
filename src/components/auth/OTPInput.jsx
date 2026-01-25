import { useState, useRef, useEffect } from "react"

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOpt] = useState(new Array(length).fill(''))
  // let  [value, setValue] = useState('')
  
  if(otp.every((e) => e !== '')){
      onComplete(otp)
    }
  const inputRefs = useRef([])
  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

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
    <div className="flex gap-10">
      {
        otp.map((value, idx) => {
          return <input
            key={idx} 
            type="text"  
            className="w-12 h-12 border p-5" 
            value={value}
            maxLength={1} 
            onChange={(e) => handleOnChange(e, idx)}
            onKeyDown={(e) => onKeyDownHandel(e, idx)}
            ref={(el) => inputRefs.current[idx] = el }
            />
        })
      }
    </div>
  )
}

export default OTPInput
