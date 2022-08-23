import { useContext, useState } from "react";
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from "../../utils/MainApi";

function Profile({ loggedIn, isLoggedIn, updateUser }) {
  const currentUser = useContext(CurrentUserContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputNameChange = (e) => setName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);

  const logOut = () => {
    localStorage.removeItem('jwt');
    isLoggedIn(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api.updateProfile(name, email)
      .then(res => updateUser(res.data))
  }

  return (
    <>
      <Header isWhiteBack={true} loggedIn={loggedIn} />
      <section className='profile'>
        <form className='profile__form' onSubmit={handleSubmit}>
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <fieldset className='profile__inputs'>
            <label className='profile__label' htmlFor='name'>
              <h3 className='profile__input-title'>Имя</h3>
              <input className='profile__input' id='name' placeholder={currentUser.name} onChange={handleInputNameChange} />
            </label>
            <label className='profile__label' htmlFor='email'>
              <h3 className='profile__input-title'>E-mail</h3>
              <input className='profile__input' id='email' placeholder={currentUser.email} onChange={handleInputEmailChange} />
            </label>
          </fieldset>
          <fieldset className='profile__buttons'>
            <button className='profile__button link-hover'>Редактировать</button>
            <button className='profile__button profile__button_exit link-hover' onClick={logOut} >Выйти из аккаунта</button>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Profile;
