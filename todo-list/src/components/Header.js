import React from 'react'
import '../styles/header.css'
import logo from '../images/logo.png'
import userIcon from '../images/userIcon.svg'

export default function Header({ userName, Logout }) {
  return (
    <header className='header'>
        <div className='wrap header__wrap'>
            <a href='/' className='header__logo'>
                <img src={logo} className='header__img' alt='' />
            </a>
            <div className='header__holder'>
                <div className='header__user-block'>
                    <button type='button' className='header__user'>
                        <img className='header__user-img' alt='' src={userIcon}/>
                        {userName}
                    </button>
                </div>
                <button type='button' className='header__btn header__btn--sign' onClick={Logout}>Log out</button>
            </div>
        </div>
    </header>
  )
}
