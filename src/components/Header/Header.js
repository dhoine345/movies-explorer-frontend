import './Header.css';
import { Link, NavLink, useHistory } from 'react-router-dom';

function Header({ loggedIn }) {
  function handleMouseEnter(e) {
    if (!e.target.classList.contains('header__link_active'))
      e.target.classList.add('header__link_active')
      e.target.nextElementSibling ? e.target.nextElementSibling.classList.remove('header__link_active')
      : e.target.previousElementSibling.classList.remove('header__link_active')
  }

  const pathLoginOrRegist = useHistory().location.pathname === '/login' || '/register';

  return (
    <header className={`header ${loggedIn && 'header_white-back'}`}>
      <Link to='/' className='header__logo'/>
      {pathLoginOrRegist && <h2 className='header__title'>Добро пожаловать!</h2>}
      {loggedIn ?
      <>
      <nav className='header__nav'>
        <NavLink to='/movies' className='header__navlink' activeClassName='header__navlink_active' onMouseEnter={handleMouseEnter}>Фильмы</NavLink>
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
      </nav>
      }
    </header>
  );
}

export default Header;
