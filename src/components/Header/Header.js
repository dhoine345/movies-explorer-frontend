import './Header.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";

function Header({ loggedIn }) {
  function handleMouseEnter(e) {
    if (!e.target.classList.contains('header__link_active'))
      e.target.classList.add('header__link_active')
      e.target.nextElementSibling ? e.target.nextElementSibling.classList.remove('header__link_active')
      : e.target.previousElementSibling.classList.remove('header__link_active')
  }

  const path = useHistory().location.pathname

  return (
    <header className={`${((path === '/login') || (path === '/register')) ? 'header__reg-or-log' : 'header'} ${loggedIn && 'header_white-back'}`}>
      <Link to='/' className='header__logo'/>
      {((path === '/login') || (path === '/register')) && <h2 className='header__title'>{path === '/register' ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>}
      {path === '/' ? (loggedIn ?
      <>
      <nav className='header__nav'>
        <NavLink to='/movies' className='header__navlink' activeClassName='header__navlink_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='header__navlink' activeClassName='header__navlink_active'>Сохраненные фильмы</NavLink>
      </nav>
      <Link to='/profile' className='header__account-container'>
        Аккаунт
        <div className='header__account-back'><div className='header__account-svg' /></div>
      </Link>
      <button type='button' className='header__hamburger-button' />
      </>
      :
      <nav className='header__auth'>
        <Link to='/signup' className='header__link' onMouseEnter={handleMouseEnter} >Регистрация</Link>
        <Link to='/signin' className='header__link header__link_active' onMouseEnter={handleMouseEnter} >Войти</Link>
      </nav>)
      : ''
      }
    </header>
  );
}

export default Header;
