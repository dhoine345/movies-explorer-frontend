import './Header.css';
import logo from '../../images/logo.svg'
import { Link, NavLink } from 'react-router-dom';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to='/' className='header__logo'/>
      <nav className={loggedIn ? 'header__nav' : 'header__nav_disabled'}>
        <NavLink to='/movies' className='header__navlink' activeClassName='header__navlink_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='header__navlink' activeClassName='header__navlink_active'>Сохраненные фильмы</NavLink>
      </nav>
      {!loggedIn ?
      <nav className='header__auth'>
        <Link to='/signup'>Регистрация</Link>
        <Link to='/signin'>Войти</Link>
      </nav>
      :
      <Link to='/profile'>Аккаунт</Link>
      }
    </header>
  );
}

export default Header;
