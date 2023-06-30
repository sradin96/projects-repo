import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthDetails from '../auth/AuthDetails'

export default function Header({ handleSearchBlock }) {

  return (
    <header className='header'>
        <div className="header__container">
            <NavLink to='/home' className='header__logo'>
                GG
            </NavLink>
            <AuthDetails handleSearchBlock={handleSearchBlock} />
        </div>
    </header>
  )
}
