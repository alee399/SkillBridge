import { useState, useRef } from "react"

const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""))
  const inputRefs = useRef([])

  const focusInput = (index) => {
    inputRefs.current[index]?.focus()
  }

  const handleChange = (e, index) => {
    const value = e.target.value

    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < length - 1) {
      focusInput(index + 1)
    }

    if (newOtp.every(Boolean)) {
      onComplete?.(newOtp.join(""))
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1)
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length)
      .split("")

    if (!pasted.length) return

    const newOtp = [...otp]
    pasted.forEach((digit, i) => {
      newOtp[i] = digit
    })

    setOtp(newOtp)

    const focusIndex = Math.min(pasted.length, length - 1)
    focusInput(focusIndex)

    if (newOtp.every(Boolean)) {
      onComplete?.(newOtp.join(""))
    }
  }

  return (
    <div className="flex justify-center gap-3 my-6">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="
            h-14 w-12 rounded-md border border-gray-300
            text-center text-2xl font-semibold
            outline-none transition
            focus:border-indigo-700
            focus:ring-2 focus:ring-indigo-700/20
          "
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default OTPInput
