import React, { useEffect, useRef, useState } from 'react'

function CountDownTimer({ seconds }) {
    const [countdown, setCountdown] = useState(seconds)
    const liveText = "It's live!"
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if(countdown <= 0) clearInterval(timerId.current)
    }, [countdown])

  return (
    <div className='countdown-timer'>
        <span className="countdown-timer__text">Time left: { countdown <= 0 ? liveText : countdown }</span>
    </div>
  )
}

export default CountDownTimer
