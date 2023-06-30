import React, { useContext, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import CartContext from '../Context/CartContext';
import ThemeContext from '../Context/ThemeContext';

export default function Navigation({ user, userSignOut, handleSearchBlock }) {
    const CartCtx = useContext(CartContext);
    const ThemeCtx = useContext(ThemeContext)
    const [userOptionsOpen, setUserOptionsOpen] = useState(false)

    const handleUserOptions = (e) => {
        e.preventDefault();
        setUserOptionsOpen(!userOptionsOpen)
    }

  return (
    <nav className='navigation'>
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink to='/home' className={(link) => {
                    return link.isActive ? 'navigation__link--acitve navigation__link' : 'navigation__link';
                }}>Home</NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/favourites' className={(link) => {
                    return link.isActive ? 'navigation__link--acitve navigation__link' : 'navigation__link';
                }}>Favourites</NavLink>
            </li>
            <li className="navigation__item">
                <button className="navigation__search" onClick={handleSearchBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                </button>
            </li>
            <li className="navigation__item">
                <button className='navigation__cart' onClick={CartCtx.handleCart}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                {
                    CartCtx.cart.length ? <span className="navigation__cart-number">{CartCtx.cart.length}</span>
                    : ''
                }
            </li>
            <li className="navigation__item">
                <button type='button' className="navigation__user-btn" onClick={(e) => handleUserOptions(e)}>
                    <svg className='navigation__user-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                </button>
                {
                    userOptionsOpen ?
                    <div className="navigation__user-block">
                        <ul className="navigation__user-list">
                            <li className="navigation__user-item">
                                <span className="navigation__user-email">{user}</span>
                            </li>
                            <li className="navigation__user-item">
                                <button className={ThemeCtx.theme === 'light' ? "navigation__theme-btn navigation__theme-btn--light" : "navigation__theme-btn"} onClick={ThemeCtx.handleTheme}>
                                    <span className="navigation__theme-background"></span>
                                    <span className="navigation__theme-holder">
                                        {ThemeCtx.theme === 'light' ?
                                        <svg className='navigation__theme-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/></svg>
                                        : <svg className='navigation__theme-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"/></svg>
                                    }
                                    </span>
                                </button>
                            </li>
                            <li className="navigation__user-item">
                                <Link to='/settings' className="navigation__user-link">Settings</Link>
                            </li>
                            <li className="navigation__user-item">
                                <button type='button' className="navigation__user-signout" onClick={userSignOut}>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                    : null
                }
            </li>
        </ul>
    </nav>
  )
}
