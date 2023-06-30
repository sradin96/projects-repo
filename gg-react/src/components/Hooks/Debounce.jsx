import { useState, useEffect } from 'react'

export const useDebounce = (delay = 500) => {
 const [timer, setTimer] = useState();

 const setValue = (value, callback) => {
    setTimer(
        setTimeout(() => {
            callback(value)
        }, delay)
    )
 }

 useEffect(() => {
    return () => clearTimeout(timer)
 }, [timer])

 return { setValue };
};