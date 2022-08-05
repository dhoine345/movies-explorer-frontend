import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

function Navigation({ loggedIn }) {
  return (
    loggedIn &&
      <>
        <ul className='navigation__links'>
          <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigation__link' activeclassname='navigation__link_active'>Сохраненные фильмы</NavLink>
        </ul>
      <Link to='/profile' className='navigation__account-container'>
        Аккаунт
        <div className='navigation__account-back'><div className='navigation__account-svg' /></div>
      </Link>
      <button type='button' className='navigation__hamburger-button' />
    </>
  )
}

export default Navigation;
