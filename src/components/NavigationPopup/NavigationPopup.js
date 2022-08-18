import './NavigationPopup.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

function NavigationPopup({ isOpen, setNavigationPopupOpen }) {
  const closePopup = () => {
    setNavigationPopupOpen(false);
  };

  const location = useLocation().pathname;

  return (
    <div className={`navigation-popup ${isOpen && 'navigation-popup_opened'}`}>
      <div className='navigation-popup__container'>
        <div className='navigation-popup__close-icon link-hover' onClick={closePopup}/>
        <ul className='navigation-popup__links'>
          <NavLink to='/' className={`navigation-popup__link link-hover ${location === '/' && 'navigation-popup__link_active'}`}>Главная</NavLink>
          <NavLink to='/movies' className={`navigation-popup__link link-hover ${location === '/movies' && 'navigation-popup__link_active'}`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={`navigation-popup__link link-hover ${location === '/saved-movies' && 'navigation-popup__link_active'}`}>Сохраненные фильмы</NavLink>
        </ul>
        <Link to='/profile' className='navigation-popup__account-container link-hover'>
          Аккаунт
          <div className='navigation-popup__account-back'><div className='navigation-popup__account-svg' /></div>
        </Link>
      </div>
    </div>
  )
}

export default NavigationPopup;
