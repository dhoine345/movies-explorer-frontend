import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt='Логотип.'/>
      <nav className='header__nav'>
        
      </nav>
    </header>
  );
}

export default Header;
