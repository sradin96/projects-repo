import { useState, useEffect } from 'react'

export const useDebounce = (delay = 500) => {
 const [timer, setTimer] = useState<any>();

 const setValue = (value: any, callback: any) => {
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