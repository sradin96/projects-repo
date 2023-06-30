import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='wrap'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <NavLink className='footer__link'>Steam</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Xbox</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Sony</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Reddit</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Discord</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Spotify</NavLink>
              </li>
            </ul>
            <div className='footer__text-holder'>
                <p className='footer__text'>All Games, One Website</p>
            </div>
            <ul className='footer__list'>
              <li className='footer__item'>
                <NavLink className='footer__link'>Careers</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>About</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Support</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Contact</NavLink>
              </li>
            </ul>
            <ul className='footer__list'>
              <li className='footer__item'>
                <NavLink className='footer__link'>Privacy</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Legal</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Terms</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Reddit</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Cookie Policy</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link'>Cookie Settings</NavLink>
              </li>
            </ul>
            <div className='footer__copyright'>
                <p className='footer__text'>
                    ©2022 GAMES ALL RIGHTS RESERVED.
                    <br />
                    All trademarks referenced herein are the properties of their respective owners.
                </p>
            </div>
        </div>
    </footer>
  )
}
