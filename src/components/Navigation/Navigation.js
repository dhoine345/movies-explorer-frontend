import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Navigation({ loggedIn }) {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false);
  const openNavigationPopup = () => setNavigationPopupOpen(true);

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
        {!isNavigationPopupOpen && <button type='button' className='navigation__hamburger-button' onClick={openNavigationPopup}/>}
        <NavigationPopup isOpen={isNavigationPopupOpen} setNavigationPopupOpen={setNavigationPopupOpen}/>
      </>
  )
}

export default Navigation;
