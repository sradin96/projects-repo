import React, { useState } from 'react'
import { logout } from '../../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { HeaderBlock, Nav, NavList, NavItem, NavLink, NavButton, CurrentUser, HeaderHolder } from './Header.styled'
import { useNavigate, useLocation } from "react-router-dom"

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateSignup = () => {
        navigate('/signup')
    }

    const currentUser = getAuth();
    onAuthStateChanged(currentUser, (user) => {
        if(user) {
            const uid = user.email;
            setUser(uid)
        }
    })

    async function handleLogout() {
        try {
            await logout()
            if(window.location.pathname === '/home') {
                navigate('/login')
                setUser('');
            }
        } catch {
            alert('Error!')
        }
    }

    function handleButtons() {
        if(pathname === '/home') {
            return <NavButton onClick={handleLogout}>SignOut</NavButton>
        } else if(pathname === '/login') {
            return <NavButton onClick={navigateSignup}>SignUp</NavButton>
        } else {
            return <NavButton onClick={navigateLogin}>LogIn</NavButton>
        }
    }

    return (
        <HeaderBlock>
            <HeaderHolder>
                <CurrentUser>{user}</CurrentUser>
                <Nav>
                    <NavList>
                        <NavItem>
                            <NavLink>5 actions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Make a Pledge</NavLink>
                        </NavItem>
                        <NavItem>
                            {handleButtons()}
                        </NavItem>
                    </NavList>
                </Nav>
            </HeaderHolder>
        </HeaderBlock>
    )
}
