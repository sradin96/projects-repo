import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
              <NavLink className='nav__link' to='/'>Home</NavLink>
          </li>
          <li className="nav__item">
              <NavLink className='nav__link' to='/watched'>Watched</NavLink>
          </li>
          <li className="nav__item">
              <NavLink className='nav__link' to='/wanttowatch'>Want To Watch</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navigation
