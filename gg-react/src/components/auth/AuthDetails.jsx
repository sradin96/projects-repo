import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { auth } from '../../firebase'
import Navigation from '../Shared/Navigation'
import { NavLink, useNavigate } from "react-router-dom";

export default function AuthDetails({ handleSearchBlock }) {
    const [user, setUser] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const currentLocation = () => {
        if(location.pathname === '/signin') {
            return (<NavLink to='/signup' className='btn'>Sign Up</NavLink>)
        } else {
            return (<NavLink to='/singin' className='btn'>Sign In</NavLink>)
        }
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (authUser) => {
            authUser ? setUser(authUser.email) : setUser('')
        })

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth)
        navigate('/signin')
    }

  return (
    <>
    { user ? <Navigation handleSearchBlock={handleSearchBlock} user={user} userSignOut={userSignOut} />
    :
    currentLocation()
    }
    </>
  )
}
