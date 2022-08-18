import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn }) {
  return (
    <>
      <Header isWhiteBack={true} loggedIn={loggedIn} />
      <section className='profile'>
        <form className='profile__form'>
          <h2 className='profile__title'>Привет, Иван!</h2>
          <fieldset className='profile__inputs'>
            <label className='profile__label' htmlFor='name'>
              <h3 className='profile__input-title'>Имя</h3>
              <input className='profile__input' id='name' placeholder='Иван' />
            </label>
            <label className='profile__label' htmlFor='email'>
              <h3 className='profile__input-title'>E-mail</h3>
              <input className='profile__input' id='email' placeholder='pochta@yandex.ru' />
            </label>
          </fieldset>
          <fieldset className='profile__buttons'>
            <button className='profile__button link-hover'>Редактировать</button>
            <button className='profile__button profile__button_exit link-hover'>Выйти из аккаунта</button>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Profile;
