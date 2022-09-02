import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from "../../utils/MainApi";
import { profileSuccessMessage, somthingWrongMessage, emailExistError } from '../../utils/constants'

function Profile({ loggedIn, isLoggedIn, updateUser }) {
  const history = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [inputErrorName, setInputErrorName] = useState('');
  const [inputErrorEmail, setInputErrorEmail] = useState('');
  const [inputNameValidity, setinputNameValidity] = useState(false);
  const [inputEmailValidity, setinputEmailValidity] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [isSubmitResult, setSubmitResult] = useState(false);
  const [resultMessage, setResutMessage] = useState('')
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    if (inputNameValidity || inputEmailValidity) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [inputNameValidity, inputEmailValidity]);

  const hadleInputNameChange = (e) => {
    setSubmitResult(false);
    if (e.target.validity.valid && nameRef.current.value !== currentUser.name) {
      setinputNameValidity(true);
      setInputErrorName('');
    } else {
      setInputErrorName(e.target.validationMessage);
      setinputNameValidity(false);
    }
  };

  const hadleInputEmailChange = (e) => {
    setSubmitResult(false);
    if (e.target.validity.valid && emailRef.current.value !== currentUser.email) {
      setinputEmailValidity(true);
      setInputErrorEmail('');
    } else if (!e.target.validity.valid && emailRef.current.value !== currentUser.email) {
      setInputErrorEmail('Неверный формат E-mail');
      setinputEmailValidity(false);
    } else if (e.target.validity.valid && emailRef.current.value === currentUser.email) {
      setInputErrorEmail('');
      setinputEmailValidity(false);
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
    api.updateProfile(nameRef.current.value, emailRef.current.value)
      .then((res) => {
        updateUser(res.data);
        setinputNameValidity(false);
        setinputEmailValidity(false);
        setSubmitResult(true);
        setResutMessage(profileSuccessMessage)
      })
      .catch(err => {
        setButtonActive(false);
        setSubmitResult(true);
        err.includes(409) ? setResutMessage(emailExistError) : setResutMessage(somthingWrongMessage)
      })
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
                id='name'
                required
                minLength='2'
                maxLength='30'
                type='text'
                defaultValue={currentUser.name}
                onChange={hadleInputNameChange}
                ref={nameRef}
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
                ref={emailRef}
              />
            </label>
          </fieldset>
          <fieldset className='profile__buttons'>
            {isSubmitResult && <p className='profile__submi-result'>{resultMessage}</p>}
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
