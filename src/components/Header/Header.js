import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  function handleMouseEnter(e) {
    if (!e.target.classList.contains('header__link_active'))
      e.target.classList.add('header__link_active')
      e.target.nextElementSibling ? e.target.nextElementSibling.classList.remove('header__link_active')
      : e.target.previousElementSibling.classList.remove('header__link_active')
  }

  const path = useLocation().pathname;

  return (
    <header className={`${((path === '/signin') || (path === '/signup')) ? 'header__reg-or-log' : 'header'}`}>
      <Link to='/' className='header__logo'/>
      {((path === '/signin') || (path === '/signup')) && <h2 className='header__title'>{path === '/signup' ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>}
      {((path === '/movies') || (path === '/saved-movies')) &&
      <>
        <nav className='header__nav'>
          <NavLink to='/movies' className='header__navlink' activeClassName='header__navlink_active'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='header__navlink' activeclassname='header__navlink_active'>Сохраненные фильмы</NavLink>
        </nav>
        <Link to='/profile' className='header__account-container'>
          Аккаунт
          <div className='header__account-back'><div className='header__account-svg' /></div>
        </Link>
        <button type='button' className='header__hamburger-button' />
      </>}
      {path === '/' &&
        <nav className='header__auth'>
        <Link to='/signup' className='header__link' onMouseEnter={handleMouseEnter} >Регистрация</Link>
        <Link to='/signin' className='header__link header__link_active' onMouseEnter={handleMouseEnter} >Войти</Link>
      </nav>
      }
    </header>
  );
}

export default Header;
