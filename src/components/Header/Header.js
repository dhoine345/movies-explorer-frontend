import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, isAuthPage, greeting, isMainPage }) {
  function handleMouseEnter(e) {
    if (!e.target.classList.contains('header__link_active'))
      e.target.classList.add('header__link_active')
      e.target.nextElementSibling ? e.target.nextElementSibling.classList.remove('header__link_active')
      : e.target.previousElementSibling.classList.remove('header__link_active')
  }

  return (
    <header className={`${isAuthPage ? 'header__auth-page' : 'header'} ${loggedIn && !isMainPage && 'header_white-back'}`}>
      <Link to='/' className='header__logo'/>
      {isAuthPage && <h2 className='header__title'>{greeting}</h2>}
      <Navigation loggedIn={loggedIn}/>
      {isMainPage && !loggedIn &&
        <nav className='header__auth'>
        <Link to='/signup' className='header__link' onMouseEnter={handleMouseEnter} >Регистрация</Link>
        <Link to='/signin' className='header__link header__link_active' onMouseEnter={handleMouseEnter} >Войти</Link>
      </nav>
      }
    </header>
  );
}

export default Header;

/*
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
*/
