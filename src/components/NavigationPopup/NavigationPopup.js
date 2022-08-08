import './NavigationPopup.css';
import { NavLink, Link } from 'react-router-dom';

function NavigationPopup({ isOpen, setNavigationPopupOpen }) {
  const closePopup = () => {
    setNavigationPopupOpen(false);
  };

  return (
    <div className={`navigation-popup ${isOpen && 'navigation-popup_opened'}`}>
      <div className='navigation-popup__container'>
        <div className='navigation-popup__close-icon' onClick={closePopup}/>
        <ul className='navigation-popup__links'>
          <NavLink to='/saved-movies' className='navigation-popup__link' activeclassname='navigation-popup__link_active'>Главная</NavLink>
          <NavLink to='/movies' className='navigation-popup__link' activeClassName='navigation-popup__link_active'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigation-popup__link' activeclassname='navigation-popup__link_active'>Сохраненные фильмы</NavLink>
        </ul>
        <Link to='/profile' className='navigation-popup__account-container'>
          Аккаунт
          <div className='navigation-popup__account-back'><div className='navigation-popup__account-svg' /></div>
        </Link>
      </div>
    </div>
  )
}

export default NavigationPopup;
