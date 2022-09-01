import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from "../../utils/MainApi";

function Profile({ loggedIn, isLoggedIn, updateUser }) {
  const history = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputErrorName, setInputErrorName] = useState('');
  const [inputErrorEmail, setInputErrorEmail] = useState('');
  const [inputNameValidity, setinputNameValidity] = useState(false);
  const [inputEmailValidity, setinputEmailValidity] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (inputNameValidity && name !== currentUser.name) {
      if (inputEmailValidity && email !== currentUser.email) {
        setButtonActive(true)
      }
    }
  }, [inputNameValidity, currentUser.name, currentUser.email, inputEmailValidity, name, email])

  const hadleInputNameChange = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setinputNameValidity(true);
      setInputErrorName('');
    } else {
      setInputErrorName(e.target.validationMessage);
    }
  };

  const hadleInputEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setinputEmailValidity(true);
      setInputErrorEmail('');
    } else {
      setInputErrorEmail('Неверный формат E-mail');
    }
  };

  const logOut = () => {
    localStorage.removeItem('jwt');
    isLoggedIn(false);
    history('/');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('serchedMovies');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('inputValue');
    updateUser({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.updateProfile(name, email)
      .then((res) => {
        updateUser(res.data);
        setButtonActive(false);
      })
      .catch(err => console.log(err.name))
  };

  return (
    <>
      <Header
        isWhiteBack={true}
        loggedIn={loggedIn}
      />
      <section className='profile'>
        <form className='profile__form' onSubmit={handleSubmit}>
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <fieldset className='profile__inputs'>
            <label className='profile__label' htmlFor='name'>
              <h3 className='profile__input-title'>Имя</h3>
              <span className='profile__input-error'>{inputErrorName}</span>
              <input
                className='profile__input'
                id='name' required minLength='2'
                maxLength='30'
                type='text'
                defaultValue={currentUser.name}
                onChange={hadleInputNameChange}
              />
            </label>
            <label className='profile__label' htmlFor='email'>
              <h3 className='profile__input-title'>E-mail</h3>
              <span className='profile__input-error'>{inputErrorEmail}</span>
              <input
                className='profile__input'
                id='email'
                required
                pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
                type='email'
                defaultValue={currentUser.email}
                onChange={hadleInputEmailChange}
              />
            </label>
          </fieldset>
          <fieldset className='profile__buttons'>
            <button
              disabled={!buttonActive}
              className={`profile__button ${buttonActive && 'link-hover'}`}
            >
              Редактировать
            </button>
            <button
              className='profile__button profile__button_exit link-hover'
              onClick={logOut}
              type='button'
            >
              Выйти из аккаунта
            </button>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Profile;
