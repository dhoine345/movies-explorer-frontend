import './Navigation.css';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Navigation({ loggedIn }) {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false);
  const openNavigationPopup = () => setNavigationPopupOpen(true);

  const location = useLocation().pathname;

  return (
    loggedIn &&
      <>
        <ul className='navigation__links'>
          <NavLink to='/movies' className={`navigation__link link-hover ${location === '/movies' && 'navigation__link_active'}`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={`navigation__link link-hover ${location === '/saved-movies' && 'navigation__link_active'}`}>Сохраненные фильмы</NavLink>
        </ul>
        <Link to='/profile' className='navigation__account-container link-hover'>
          Аккаунт
          <div className='navigation__account-back'><div className='navigation__account-svg' /></div>
        </Link>
        {!isNavigationPopupOpen && <button type='button' className='navigation__hamburger-button' onClick={openNavigationPopup}/>}
        <NavigationPopup isOpen={isNavigationPopupOpen} setNavigationPopupOpen={setNavigationPopupOpen}/>
      </>
  )
}

export default Navigation;
